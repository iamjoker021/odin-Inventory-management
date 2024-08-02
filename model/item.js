const pool = require('../db/pool');

const getAllItemByCategory = async (categoryId) => {
    const { rows } = await pool.query('SELECT * FROM item WHERE category_id = $1', [categoryId]);
    return rows;
}

const getItemById = async (itemId) => {
    const { rows } = await pool.query('SELECT * FROM item WHERE id = $1', [itemId]);
    return rows[0];
}

const addNewItem = async (itemName, price, categoryId) => {
    await pool.query('INSERT INTO item (name, price, category_id) VALUES ($1, $2, $3)', [itemName, price, categoryId])
}

const editItem = async (itemId, itemName, itemPrice) => {
    await pool.query('UPDATE item SET name = $2, price = $3 WHERE id = $1;', [itemId, itemName, itemPrice])
}

module.exports = {
    getAllItemByCategory,
    addNewItem,
    getItemById,
    editItem
}