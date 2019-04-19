const Store = require('data-store');
const store = new Store({ path: '.config/store.json' });

// console.log(Object.values(store.get('products')));
module.exports=store;


