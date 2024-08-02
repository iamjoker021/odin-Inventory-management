const categoryModel = require('../model/category')

const getAllCategory = async (req, res) => {
    const categories = await categoryModel.getAllCategory();
    res.render('index', { categoryList: categories });
}

const addCategoryForm = (req, res) => {
    res.render('add-category');
}

const createCategory = async (req, res) => {
    const { 'category-name': newCategory } = req.body;
    await categoryModel.addNewCategory(newCategory);
    res.redirect('/');
}

const editCategory = async (req, res) => {
    const { 'categroy-name': newCategroyName } = req.body;
    await categoryModel.updateCategroy(newCategroyName);
    res.redirect('/');
}

const deleteCategory = async (req, res) => {
    const { 'categroy-id': categriyId } = req.body;
    await categoryModel.deleteCategory(categriyId);
    res.redirect('/');
}

module.exports = {
    getAllCategory,
    createCategory,
    editCategory,
    deleteCategory,
    addCategoryForm
}