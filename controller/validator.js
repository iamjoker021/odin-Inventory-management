const { query, body, validationResult } = require('express-validator');
const { isCategoryNameAlreadyPresent, isCategroyContainItems } = require('../model/category');

const categoryNameValidation = [
    body('category-name')
    .trim()
    .notEmpty()
    .withMessage('Category should not be empty')
    .escape()
    .custom(async (category) => {
        if(await isCategoryNameAlreadyPresent(category)) {
            throw new Error ('Category Name is already present');
        }
    })
]

const categoryDeleteValidation = [
    query('id')
    .trim()
    .notEmpty()
    .withMessage('Category Id should not be empty')
    .escape()
    .custom(async (category) => {
        if(await isCategroyContainItems(category)) {
            throw new Error ('Category should be Empty to delete');
        }
        else {
            return true;
        }
    })
]

const itemValidation = [
    body('item-name')
    .trim()
    .notEmpty()
    .withMessage('Item Name should not be empty')
    .escape(),
    body('item-price')
    .trim()
    .notEmpty()
    .withMessage('Price should be present')
    .escape()
    .custom(price => {
        if (!(parseFloat(price) > 0)) {
            throw new Error('Price should be number and should be greater than 0');
        }
        else {
            return true;
        }
    }),
]

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
  
    return res.status(422).json(errors)
}

module.exports = {
    categoryNameValidation,
    categoryDeleteValidation,
    itemValidation,
    validate
}