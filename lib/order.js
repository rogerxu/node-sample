const inventoryData = [];
const warehouse = {
  packageAndShip(sku, quantity, callback) {
    const tracking = `${sku}-${Date.now()}`;
    callback(tracking);
  },
};

function orderItem(sku, quantity, callback) {
  console.log('ordering item', sku, quantity);

  warehouse.packageAndShip(sku, quantity, (tracking) => {
    console.log('packaging item', tracking);
    callback(tracking);
  });
}

module.exports = {
  orderItem,
};
