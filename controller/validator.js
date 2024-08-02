const { body, validationResult } = require('express-validator');
const { isCategoryNameAlreadyPresent } = require('../model/category');

const addCategoryFormValidation = [
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
    addCategoryFormValidation,
    validate
}