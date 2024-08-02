const pool = require('../db/pool');

const getAllCategory = async () => {
    const { rows } = await pool.query('SELECT * FROM category;');
    return rows;
}

const addNewCategory = async (categroyName) => {
    await pool.query('INSERT INTO category VALUES ($1)', [categroyName])
}

const updateCategroy = async (categroyId, newCategoryName) => {
    await pool.query('UPDATE category SET name = $2 WHERE id = $1', [categroyId, newCategoryName])
}

const deleteCategory = async (categroyId) => {
    await pool.query('DELETE FROM category WHERE id = $1', [categroyId])
}

module.exports = {
    getAllCategory,
    addNewCategory,
    updateCategroy,
    deleteCategory
}