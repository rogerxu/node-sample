const chai = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const order = rewire('../lib/order');

const expect = chai.expect;

describe('Ordering items', function () {
  beforeEach(function () {
    this.testData = [
      { sku: 'aaa', qty: 10 },
      { sku: 'bbb', qty: 10 },
      { sku: 'ccc', qty: 10 },
    ];

    this.console = {
      log: sinon.spy(),
    };

    this.warehouse = {
      // invoke callback
      packageAndShip: sinon.stub().yields('fake-tracking'),
    };

    order.__set__('inventoryData', this.testData);
    order.__set__('console', this.console);
    order.__set__('warehouse', this.warehouse);
  });

  it('order an item when there are enough in stock', function (done) {
    order.orderItem('ccc', 3, () => {
      expect(this.console.log.callCount).to.equal(2);

      done();
    });
  });

  describe('Warehouse interaction', function () {
    beforeEach(function () {
      this.callback = sinon.spy();

      order.orderItem('ccc', 2, this.callback);
    });

    it('receives a tracking number', function () {
      expect(this.callback.calledWith('fake-tracking')).to.equal(true);
    });

    it('calls packageAndShip with the correct sku and quantity', function () {
      expect(this.warehouse.packageAndShip.calledWith('ccc', 2)).to.equal(true);
    });
  });
});
