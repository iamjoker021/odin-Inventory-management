const { Router } = require('express');
const categoryController = require('../controller/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategory);

module.exports = categoryRouter;