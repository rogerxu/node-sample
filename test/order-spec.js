const chai = require('chai');
const rewire = require('rewire');
const order = rewire('../lib/order');

const expect = chai.expect;

describe('Ordering items', function () {
  beforeEach(function () {
    this.testData = [
      { sku: 'aaa', qty: 10 },
      { sku: 'bbb', qty: 10 },
      { sku: 'ccc', qty: 10 },
    ];

    order.__set__('inventoryData', this.testData);
  });

  it('order an item when there are enough in stock', function (done) {
    order.orderItem('ccc', 3, function () {
      done();
    });
  });
});
