const { Router } = require('express');
const { addCategoryFormValidation, validate } = require('../controller/validator');
const categoryController = require('../controller/categoryController');

const { body, validationResult } = require('express-validator');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategory);

categoryRouter.get('/add-category', categoryController.addCategoryForm);
categoryRouter.post('/add-category', addCategoryFormValidation, validate, categoryController.createCategory);

module.exports = categoryRouter;