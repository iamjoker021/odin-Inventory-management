const { Router } = require('express');
const { categoryNameValidation, validate } = require('../controller/validator');
const categoryController = require('../controller/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategory);

categoryRouter.get('/add-category', categoryController.addCategoryForm);
categoryRouter.post('/add-category', categoryNameValidation, validate, categoryController.createCategory);

categoryRouter.get('/edit-category/:id', categoryController.editCategoryForm);
categoryRouter.post('/edit-category/:id', categoryNameValidation, validate, categoryController.editCategory);

module.exports = categoryRouter;