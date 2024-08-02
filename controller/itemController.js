const categoryModel = require('../model/category');
const itemModel = require('../model/item');

const getAllItem = async (req, res) => {
    const categoryId = req.params.id;
    const category = await categoryModel.getCategoryById(categoryId);
    const items = await itemModel.getAllItemByCategory(categoryId);
    res.render('items', { category: category, itemList: items });
}

const addItemPage = (req, res) => {
    const categoryId = req.params.id;
    res.render('add-item', {category: {id: categoryId}});
}

const addItem = async (req, res) => {
    const categoryId = req.params.id;
    const { 'item-name': itemName, 'item-price': itemPrice } = req.body;
    await itemModel.addNewItem(itemName, itemPrice, categoryId);
    res.redirect(`/category/${categoryId}`);
}

module.exports = {
    getAllItem,
    addItem,
    addItemPage
}