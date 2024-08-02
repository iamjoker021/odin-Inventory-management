const categoryModel = require('../model/category');

const getAllCategory = async (req, res) => {
    const categories = await categoryModel.getAllCategory();
    res.render('index', { categoryList: categories });
}

const addCategoryForm = (req, res) => {
    res.render('add-category');
}

const editCategoryForm = async (req, res) => {
    const categoryId = req.params.id;
    const category = await categoryModel.getCategoryById(categoryId);
    res.render('edit-category', {category: category});
}

const createCategory = async (req, res) => {
    const { 'category-name': newCategory } = req.body;
    await categoryModel.addNewCategory(newCategory);
    res.redirect('/');
}

const editCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { 'category-name': newCategoryName } = req.body;
    await categoryModel.updateCategroy(categoryId, newCategoryName);
    res.redirect('/');
}

const deleteCategory = async (req, res) => {
    const { 'category-id': categriyId } = req.body;
    await categoryModel.deleteCategory(categriyId);
    res.redirect('/');
}

module.exports = {
    getAllCategory,
    createCategory,
    editCategory,
    deleteCategory,
    addCategoryForm,
    editCategoryForm
}