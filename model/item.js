const pool = require('../db/pool');

const getAllItemByCategory = async (categoryId) => {
    const { rows } = await pool.query('SELECT * FROM item WHERE category_id = $1', [categoryId]);
    return rows;
}

const addNewItem = async (itemName, price, categoryId) => {
    await pool.query('INSERT INTO item (name, price, category_id) VALUES ($1, $2, $3)', [itemName, price, categoryId])
}

module.exports = {
    getAllItemByCategory,
    addNewItem,
}