const categoryModel = require('../model/category');
const itemModel = require('../model/item');

const getAllItem = async (req, res) => {
    const categoryId = req.params.id;
    const category = await categoryModel.getCategoryById(categoryId);
    const items = await itemModel.getAllItemByCategory(categoryId);
    res.render('items', { category: category.name, itemList: items });
}

module.exports = {
    getAllItem
}