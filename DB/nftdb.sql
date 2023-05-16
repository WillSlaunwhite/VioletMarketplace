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
  `offer_amount` INT NOT NULL,
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
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (1, 'will', '$2a$12$.aXI64OEVlXoGf8fNHOlhef6SFgQzI4bqn2unNELnfIWTPwJj.zR6', 1, 'admin', '2020-01-01 10:10:10', 'will@email.com', 'tristan', 'https://i.imgur.com/3ANsr4E.jpg', '');
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (2, 'dave', '$2a$12$R3Gj2zoDDSmxyIPjxfeRcuAP87PMJ.u6UZmNuUdoqihFaFsM7gIbG', 1, 'user', '2022-11-25 00:00:00', 'brando@email.com', 'Mr. Manager', 'url here', 'Brandon Discovered his love for ponies at the bottom of a bottle, once blew his mortgage at a furry convention');
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (3, 'caleb', '$2a$12$NMv8KhaOlQXCjWaqNz9AKeGZeIZgetYyE/lThHcStVdWFNPUnWUgu', 1, 'user', '2020-01-01 10:10:10', 'dealindave@email.com', 'Frank Reynolds', 'url here', 'Daves claim to fame is that you have never seen someone work so hard for $5 (or a mcDouble you pick)');
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (4, 'peyton', '$2a$12$InIDf.XH4fNZiztDLAzS1OvuQZEAR61eD31.BJoSt4SK0zurAlV0K', 1, 'user', '2020-01-01 10:10:10', 'technicallyinnocent@email.com', 'KingOfRats', 'url here', 'Some say he is a monster, some say hes human garbage, but none of them can prove a damn thing');
INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `role`, `created_on`, `email`, `display_name`, `picture_url`, `biography`) VALUES (5, 'john', '$2a$12$jfwtmyxQVyMrGaeDO3bx2eOfaHpMA5cUmySNldej4iyVDYe.Dcssi', 1, 'user', '2020-01-01 10:10:10', 'sixhead@email.com', 'MantisToboggan', 'url here', 'Peyton was a big deal until his arm turned into a wet noodle. Scientists say his forehead will expand until it explodes');

COMMIT;


-- -----------------------------------------------------
-- Data for table `collection`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `collection` (`id`, `name`, `description`, `release_date`, `created_by`) VALUES (1, 'Ponies', 'My little Pony Characters', '2020-01-01 10:10:10', 1);
INSERT INTO `collection` (`id`, `name`, `description`, `release_date`, `created_by`) VALUES (2, 'Sport', 'Tokens related to sports or athletics', '2020-01-01 10:10:10', 2);
INSERT INTO `collection` (`id`, `name`, `description`, `release_date`, `created_by`) VALUES (3, 'Movies and Television', 'Tokens related to movies or television.', '2023-02-27 10:10:10', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `token`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
-- Removing because of checkered background, will return!
-- INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (1, 'Violet Glow', 'Loyal, dependable', 'Extremely rare', '2010-12-01 10:10:10', 5000, 1, 1, 1, 1, 'https://i.imgur.com/j1sqmhy.jpg');
-- INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (2, 'Princess Luna', 'Honest, brave', 'rare', '2019-07-15 10:10:10', 199, 1, 2, 1, 2, 'https://i.imgur.com/ZrKjIWb.jpg');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (1, 'Pinkie Pie', 'Fashionable', 'rare', '2021-10-05 10:10:10', 200, 1, 3, 1, 3, 'https://i.imgur.com/boDxU4a.jpg');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (2, 'Granny Smith', 'Friendly, Sweet', 'rare', '2018-03-05 10:10:10', 350, 1, 4, 1, 4, 'https://i.imgur.com/1cDuhpI.jpg');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (3, 'Applejack', 'Silly, Upbeat', 'rare', '2021-01-03 10:10:10', 980, 1, 5, 1, 5, 'assets/other_token_images/applejack.png');


-- MOVIES

INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (4, 'The Princess Bride', 'A bedridden boy''s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/princess_bride_inigo.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (5, 'The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'common', '2023-02-27 12:00:00', 25, 3, 1, 1, 1, 'assets/webp_images/the_dark_knight.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (6, 'Django Unchained', 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.', 'common', '2023-02-27 12:00:00', 25, 3, 1, 1, 1, 'assets/webp_images/django_unchained.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (7, 'Batman Begins', 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/batman_begins.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (8, 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/pulp_fiction.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (9, 'Howl''s Moving Castle', 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/howl_s_moving_castle.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (10, 'Spirited Away', 'During her family''s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/spirited_away_1.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (11, 'Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/goodfellas_young_henry.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (12, 'The Godfather', 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/the_godfather.webp');
INSERT INTO `token` (`id`, `name`, `description`, `rarity`, `release_date`, `price`, `collection_id`, `owner_id`, `offered`, `creator_id`, `token_location`) VALUES (13, 'The Dark Knight Rises', 'Eight years after the Joker''s reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.', 'common', '2023-02-27 12:00:00', 20, 3, 1, 1, 1, 'assets/webp_images/the_dark_knight_rises.webp');

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


-- -----------------------------------------------------
-- Data for table `bid`
-- -----------------------------------------------------
START TRANSACTION;
USE `nftdb`;
INSERT INTO `bid` (`id`, `bid_date`, `description`, `offer_amount`, `token_id`, `seller_id`, `buyer_id`) VALUES (1, '2021-11-03', 'Purchase', 100, 1, 1, 2);
INSERT INTO `bid` (`id`, `bid_date`, `description`, `offer_amount`, `token_id`, `seller_id`, `buyer_id`) VALUES (2, '2021-11-03', 'Purchase', 98, 3, 3, 1);
INSERT INTO `bid` (`id`, `bid_date`, `description`, `offer_amount`, `token_id`, `seller_id`, `buyer_id`) VALUES (3, '2021-11-03', 'Purchase', 45, 2, 2, 4);
INSERT INTO `bid` (`id`, `bid_date`, `description`, `offer_amount`, `token_id`, `seller_id`, `buyer_id`) VALUES (4, '2021-11-03', 'Purchase', 60, 5, 5, 1);

COMMIT;

