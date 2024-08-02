const { Router } = require('express');
const itemController = require('../controller/itemController');

const itemRouter = Router();

itemRouter.get('/:id', itemController.getAllItem)

module.exports = itemRouter