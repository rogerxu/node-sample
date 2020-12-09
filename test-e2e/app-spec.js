const request = require('supertest');
const chai = require('chai');
const rewire = require('rewire');
const cheerio = require('cheerio');

const expect = chai.expect;
const app = rewire('../app');

describe('App', function () {
  it('Loads the home page', function (done) {
    request(app).get('/').expect(200).end((err, res) => {
      let $ = cheerio.load(res.text);
      let pageHeading = $('body h1:first-child').text();
      expect(pageHeading).to.equal('Chat');
      done();
    });
  });

  describe("API", function () {
    beforeEach(function () {
      this.items = [
        {
          id: 'aaa',
        },
        {
          id: 'bbb',
        },
      ];

      app.__set__('items', this.items);
    });

    it('GET api', function (done) {
      request(app).get('/api').expect(200).end((err, res) => {
        var items = JSON.parse(res.text);
        expect(items).to.deep.equal(this.items);
        done();
      });
    });

    it('POST api', function (done) {
      request(app)
        .post('/api')
        .send({ id: 'aaa' })
        .expect(200)
        .end(done);
    });

    it('DELETE api', function (done) {
      request(app)
        .delete('/api/abc')
        .expect(200)
        .end(done);
    });
  });
});
