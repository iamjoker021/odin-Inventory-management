const pool = require('../db/pool');

const getAllItemByCategory = async (categoryId) => {
    const { rows } = await pool.query('SELECT * FROM item WHERE category_id = $1', [categoryId]);
    return rows;
}

module.exports = {
    getAllItemByCategory,
}