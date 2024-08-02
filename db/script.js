const pool = require('../db/pool');

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO category (name) VALUES
('Electronics'),
('Furniture'),
('Clothing'),
('Books'),
('Toys');


CREATE TABLE IF NOT EXISTS item (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR( 255 ) NOT NULL,
    price VARCHAR ( 255 ) NOT NULL,
    category_id INT REFERENCES category (id)
);

INSERT INTO item (name, price, category_id) VALUES
('Smartphone', '699.99', 1),
('Laptop', '999.99', 1),
('Desk', '199.99', 2),
('Chair', '89.99', 2),
('T-shirt', '19.99', 3),
('Jeans', '49.99', 3),
('Novel', '14.99', 4),
('Textbook', '79.99', 4),
('Action Figure', '24.99', 5),
('Board Game', '29.99', 5);
`;

async function initalizeData() {
    console.log("seeding...");
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query(SQL);
      await client.query('COMMIT');
      console.log('Data added success');
    }
    catch (e) {
      await client.query('ROLLBACK');
      console.log('Data added failed');
      throw e;
    }
    finally {
      client.release();
    }
}

initalizeData();