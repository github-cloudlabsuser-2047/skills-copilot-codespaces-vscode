-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    price DECIMAL(10, 2)
);

-- Insert 5 products into the products table
INSERT INTO products (name, price) VALUES ('Apple', 1.99);
INSERT INTO products (name, price) VALUES ('Banana', 0.99);
INSERT INTO products (name, price) VALUES ('Orange', 2.49);
INSERT INTO products (name, price) VALUES ('Grapes', 3.99);
INSERT INTO products (name, price) VALUES ('Watermelon', 5.99);