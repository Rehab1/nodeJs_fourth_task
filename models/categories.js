const store=require('../db');
// as a helper
const getCategoriesKey = ({ id }) => `Categoriess.${id}`;

module.exports={
    getAll() {
        return Object.values(store.get('Categoriess'));
    },
    getById(id) {
        return store.get(`Categoriess.${id}`);
    },
    add(Categories) {
        debugger;
        const keyName = getCategoriesKey(Categories.id);
        if (store.hasOwn(keyName)) throw new Error('the Categories alredy exitst');
        return store.set(keyName, Categories);
    },
    delete(id) {
        const keyName = getCategoriesKey(id);
    },
    patch(id, updatedCategories) {
        const Categories = this.getById(id);
        Object.assign(Categories, updatedCategories);
        const key = getCategoriesKey(id);
        return store.set(key, Categories);
    }
}