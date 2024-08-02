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

const editItemPage = async (req, res) => {
    const categoryId = req.params.id;
    const itemid = req.params.itemid;
    const item = await itemModel.getItemById(itemid);
    res.render('edit-item', { category: {id: categoryId}, item: item });
}

const addItem = async (req, res) => {
    const categoryId = req.params.id;
    const { 'item-name': itemName, 'item-price': itemPrice } = req.body;
    await itemModel.addNewItem(itemName, itemPrice);
    res.redirect(`/category/${categoryId}`);
}

const editItem = async (req, res) => {
    const itemId = req.params.id;
    const { 'item-name': itemName, 'item-price': itemPrice } = req.body;
    await itemModel.editItem(itemId, itemName, parseFloat(itemPrice));
}

module.exports = {
    getAllItem,
    addItem,
    addItemPage,
    editItemPage,
    editItem
}