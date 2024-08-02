const { Router } = require('express');
const categoryController = require('../controller/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategory);

categoryRouter.get('/add-category', categoryController.addCategoryForm);
categoryRouter.post('/add-category', categoryController.createCategory);

module.exports = categoryRouter;