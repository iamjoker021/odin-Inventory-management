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
    })
]

const validate = async (req, res, next) => {
    const errors = await validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
}

module.exports = {
    categoryNameValidation,
    categoryDeleteValidation,
    validate
}