-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nftdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `nftdb` ;

-- -----------------------------------------------------
-- Schema nftdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nftdb` DEFAULT CHARACTER SET utf8 ;
USE `nftdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `enabled` TINYINT NULL,
  `role` VARCHAR(45) NULL,
  `created_on` DATETIME NULL,
  `email` VARCHAR(45) NULL,
  `display_name` VARCHAR(45) NULL,
  `picture_url` VARCHAR(3000) NULL,
  `biography` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `collection`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `collection` ;

CREATE TABLE IF NOT EXISTS `collection` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `release_date` DATETIME NULL,
  `created_by` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_collection_user1_idx` (`created_by` ASC),
  CONSTRAINT `fk_collection_user1`
    FOREIGN KEY (`created_by`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `token`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `token` ;

CREATE TABLE IF NOT EXISTS `token` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NULL,
  `description` TEXT NULL,
  `rarity` VARCHAR(45) NULL,
  `release_date` DATETIME NULL,
  `price` INT NULL,
  `collection_id` INT NULL,
  `owner_id` INT NOT NULL,
  `offered` TINYINT NULL,
  `creator_id` INT NOT NULL,
  `token_location` VARCHAR(3000) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_token_collection_idx` (`collection_id` ASC),
  INDEX `fk_token_user1_idx` (`owner_id` ASC),
  INDEX `fk_token_user2_idx` (`creator_id` ASC),
  CONSTRAINT `fk_token_collection`
    FOREIGN KEY (`collection_id`)
    REFERENCES `collection` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_token_user1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_token_user2`
    FOREIGN KEY (`creator_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `market_transfer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `market_transfer` ;

CREATE TABLE IF NOT EXISTS `market_transfer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `transfer_date` DATETIME NOT NULL,
  `token_id` INT NOT NULL,
  `description` VARCHAR(100) NULL,
  `seller_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_market_transfer_user1_idx` (`seller_id` ASC),
  INDEX `fk_market_transfer_user2_idx` (`buyer_id` ASC),
  CONSTRAINT `fk_transaction_token1`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_market_transfer_user1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_market_transfer_user2`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart` ;

CREATE TABLE IF NOT EXISTS `cart` (
  `id` INT NOT NULL,
  `created_date` DATETIME NULL,
  `completed` TINYINT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `block`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `block` ;

CREATE TABLE IF NOT EXISTS `block` (
  `id` INT NOT NULL,
  `hash_code` VARCHAR(200) NULL,
  `prev_hash_code` VARCHAR(200) NOT NULL,
  `hashcode` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cart_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart_item` ;

CREATE TABLE IF NOT EXISTS `cart_item` (
  `id` INT NOT NULL,
  `cart_id` INT NOT NULL,
  `token_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_item_cart1_idx` (`cart_id` ASC),
  INDEX `fk_cart_item_token1_idx` (`token_id` ASC),
  CONSTRAINT `fk_cart_item_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_item_token1`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `token_has_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `token_has_category` ;

CREATE TABLE IF NOT EXISTS `token_has_category` (
  `token_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`token_id`, `category_id`),
  INDEX `fk_token_has_category_category1_idx` (`category_id` ASC),
  INDEX `fk_token_has_category_token1_idx` (`token_id` ASC),
  CONSTRAINT `fk_token_has_category_token1`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_token_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `message` ;

CREATE TABLE IF NOT EXISTS `message` (
  `id` INT NOT NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NULL,
  `sender_id` INT NOT NULL,
  `recipient_id` INT NOT NULL,
  `in_reply_to` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_user1_idx` (`sender_id` ASC),
  INDEX `fk_message_user2_idx` (`recipient_id` ASC),
  INDEX `fk_message_message1_idx` (`in_reply_to` ASC),
  CONSTRAINT `fk_message_user1`
    FOREIGN KEY (`sender_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_user2`
    FOREIGN KEY (`recipient_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_message1`
    FOREIGN KEY (`in_reply_to`)
    REFERENCES `message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `token_view`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `token_view` ;

CREATE TABLE IF NOT EXISTS `token_view` (
  `id` INT NOT NULL,
  `view_date` DATETIME NULL,
  `user_id` INT NOT NULL,
  `token_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_table1_user1_idx` (`user_id` ASC),
  INDEX `fk_token_view_token1_idx` (`token_id` ASC),
  CONSTRAINT `fk_table1_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_token_view_token1`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `favorite`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `favorite` ;

CREATE TABLE IF NOT EXISTS `favorite` (
  `user_id` INT NOT NULL,
  `token_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `token_id`),
  INDEX `fk_user_has_token_token1_idx` (`token_id` ASC),
  INDEX `fk_user_has_token_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_token_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_token_token1`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bid`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bid` ;

CREATE TABLE IF NOT EXISTS `bid` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bid_date` DATETIME NOT NULL,
  `description` VARCHAR(100) NULL,
  `token_id` INT NOT NULL,
  `seller_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_market_transfer_user1_idx` (`seller_id` ASC),
  INDEX `fk_market_transfer_user2_idx` (`buyer_id` ASC),
  CONSTRAINT `fk_transaction_token10`
    FOREIGN KEY (`token_id`)
    REFERENCES `token` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_market_transfer_user10`
    FOREIGN KEY (`seller_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_market_transfer_user20`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS nftdbuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'nftdbuser'@'localhost' IDENTIFIED BY 'violet';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'nftdbuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (1, 'admin', '$2a$12$sFk3F2vpHmUzA9NQBgQzOOXKVbLQU3V092l1WMom/ON7W1gGyMmKS', 1, NULL, '2020-01-01 10:10:10', 'admin@email.com', 'Mr. Manager', 'url here', 'Mr. Managers Journey To The Top');
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (2, 'secondUser', 'admin', 0, NULL, '2020-01-01 10:10:10', 'second@email.com', 'Mr. Worker', 'url here', 'Shit Rolls Downhill');

COMMIT;


-- -----------------------------------------------------
-- Data for table `collection`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `collection` (`id`, `name`, `description`, `release_date`, `created_by`) VALUES (1, 'Ponies', 'My little Pony Characters', '2020-01-01 10:10:10', 1);
INSERT INTO `collection` (`id`, `name`, `description`, `release_date`, `created_by`) VALUES (2, 'Sport', 'Tokens related to sports or athletics', '2020-01-01 10:10:10', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `token`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (1, 'Violet Glow', 'Purple Pony', 'rare', '2020-01-01 10:10:10', 500, 1, 1, 1, 1, 'test url ');

COMMIT;


-- -----------------------------------------------------
-- Data for table `market_transfer`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `market_transfer` (`id`, `transfer_date`, `token_id`, `description`, `seller_id`, `buyer_id`) VALUES (1, '2020-01-01 10:10:10', 1, 'test transfer', 1, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `cart`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `cart` (`id`, `created_date`, `completed`, `user_id`) VALUES (1, '2020-01-01 10:10:10', 0, 1);
INSERT INTO `cart` (`id`, `created_date`, `completed`, `user_id`) VALUES (2, '2020-01-01 10:10:10', 0, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `category`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `category` (`id`, `type`, `description`) VALUES (1, 'image', 'still image tokens');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (2, 'gif', 'moving images');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (3, 'code', 'important or valuable snippets of code');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (4, 'short video', 'videos less than 1 min in length');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (5, 'long video', 'videos over 1 min in length');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (6, 'music', 'music files ');
INSERT INTO `category` (`id`, `type`, `description`) VALUES (7, 'audio', 'non-music audiofiles');

COMMIT;


-- -----------------------------------------------------
-- Data for table `message`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `message` (`id`, `content`, `created_at`, `sender_id`, `recipient_id`, `in_reply_to`) VALUES (1, 'blah blah blah', '2020-01-01 10:10:10', 1, 2, NULL);
INSERT INTO `message` (`id`, `content`, `created_at`, `sender_id`, `recipient_id`, `in_reply_to`) VALUES (2, 'beep beep beep', '2020-01-01 10:10:10', 2, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `favorite`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `favorite` (`user_id`, `token_id`) VALUES (1, 1);

COMMIT;

