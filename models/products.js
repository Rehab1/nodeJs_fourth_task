const store=require('../db');
// as a helper
const getProductKey = ({ id }) => `products.${id}`;

module.exports={
    getAll() {
        return Object.values(store.get('products'));
    },
    getById(id) {
        return store.get(`products.${id}`);
    },
    add(product) {
        const products = store.get('products');
        let id=Object.keys(products).sort().reverse()[0] || 0;
        product.id=Number(id+1);
        const keyName=getProductKey(product.id);
        store.set(keyName,product);
        return product;
    },
    delete(id, returnOriginal) {
        let product=returnOriginal && this.getById(id);
        const keyName = getProductKey(id);
        store.del(keyName);
        return product;
    },
    patch(id, updatedProduct) {
        const product = this.getById(id);
        Object.assign(product, updatedProduct);
        const key = getProductKey(id);
         store.set(key, product);
         return product;
    }
}