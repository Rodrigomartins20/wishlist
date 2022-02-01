CREATE DATABASE IF NOT EXISTS `wishlist`;

CREATE TABLE IF NOT EXISTS `clients` (
  `id` VARCHAR(36) PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX `clients_email` ON `clients`(`email`);

CREATE TABLE IF NOT EXISTS `clients_wishlists` (
  `id` VARCHAR(36) PRIMARY KEY,
  `client` VARCHAR(36) NOT NULL,
  `product` VARCHAR(36) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX `clients_wishlists_client` ON `clients_wishlists`(`client`);