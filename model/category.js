const pool = require('../db/pool');

const getAllCategory = async () => {
    const { rows } = await pool.query('SELECT * FROM category;');
    return rows;
}

const getCategoryById = async (categoryId) => {
    const { rows } = await pool.query('SELECT * FROM category WHERE id = $1', [categoryId]);
    return rows[0];
}

const isCategoryNameAlreadyPresent = async (categoryName) => {
    const { rows } = await pool.query('SELECT 1 FROM category where name ilike $1;', [categoryName]);
    return rows.length > 0;
}

const addNewCategory = async (categoryName) => {
    await pool.query('INSERT INTO category (name) VALUES ($1)', [categoryName])
}

const updateCategroy = async (categroyId, newCategoryName) => {
    await pool.query('UPDATE category SET name = $2 WHERE id = $1', [categroyId, newCategoryName])
}

const deleteCategory = async (categroyId) => {
    await pool.query('DELETE FROM category WHERE id = $1', [categroyId])
}

module.exports = {
    getAllCategory,
    getCategoryById,
    addNewCategory,
    updateCategroy,
    deleteCategory,
    isCategoryNameAlreadyPresent
}