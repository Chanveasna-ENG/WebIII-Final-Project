CREATE DATABASE IF NOT EXISTS restaurant_db;

USE restaurant_db;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  phone VARCHAR(20),
  location POINT
);

CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  items JSON NOT NULL,
  order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_price DECIMAL(10,2) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  people INT NOT NULL,
  table_id VARCHAR(10) NOT NULL,
  requests TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tables (
  id VARCHAR(10) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  min_capacity INT NOT NULL DEFAULT 1,
  max_capacity INT NOT NULL,
  location ENUM('window', 'center', 'outdoor', 'private') NOT NULL
);

INSERT INTO tables (id, name, min_capacity, max_capacity, location) VALUES
('A1', 'Window Table', 1, 2, 'window'),
('A2', 'Center Table', 2, 4, 'center'),
('B1', 'Entrance Table', 1, 2, 'window'),
('B2', 'Private Booth', 2, 4, 'private'),
('C1', 'Outdoor Large', 4, 6, 'outdoor'),
('C2', 'Outdoor Small', 1, 2, 'outdoor'),
('D1', 'Family Table', 4, 8, 'center'),
('VIP1', 'VIP Room', 6, 10, 'private');

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS password_resets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);