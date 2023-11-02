-- MySQL Script generated by MySQL Workbench
-- Tue Oct 31 16:22:59 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `forename` VARCHAR(16) NOT NULL,
  `surname` VARCHAR(32) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `dob` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(32) NOT NULL,
  `gender` CHAR(1) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `userID` CHAR(32) NOT NULL,
  `is_admin` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`preferences`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`preferences` (
  `Preference ID` CHAR(32) NOT NULL,
  `Font Size` INT NOT NULL DEFAULT 20,
  `Bold Text` TINYINT(1) NOT NULL DEFAULT 0,
  `High Contrast Mode` TINYINT(1) NOT NULL DEFAULT 0,
  `Descriptive Links` TINYINT(1) NOT NULL DEFAULT 1,
  `Dark Mode` TINYINT(1) NOT NULL DEFAULT 0,
  `user_userID` CHAR(32) NOT NULL,
  PRIMARY KEY (`Preference ID`, `user_userID`),
  UNIQUE INDEX `Preference ID_UNIQUE` (`Preference ID` ASC) VISIBLE,
  INDEX `fk_preferences_user1_idx` (`user_userID` ASC) VISIBLE,
  CONSTRAINT `fk_preferences_user1`
    FOREIGN KEY (`user_userID`)
    REFERENCES `mydb`.`user` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`chronic_condition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`chronic_condition` (
  `ChronicID` CHAR(32) NOT NULL,
  `Condition Type` VARCHAR(45) NOT NULL DEFAULT 'IBS',
  PRIMARY KEY (`ChronicID`),
  UNIQUE INDEX `ChronicID_UNIQUE` (`ChronicID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`allergies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`allergies` (
  `AllergiesID` CHAR(32) NOT NULL,
  `Allergy Type` VARCHAR(45) NOT NULL,
  `Alternative Choice` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`AllergiesID`),
  UNIQUE INDEX `AllergiesID_UNIQUE` (`AllergiesID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`food` (
  `FoodID` CHAR(32) NOT NULL,
  `FoodName` VARCHAR(45) NOT NULL,
  `isDrink` TINYINT(1) NOT NULL,
  `Protein` INT NOT NULL,
  `Fat` INT NOT NULL,
  `Carbohydrates` INT NOT NULL,
  `Vitamins` INT NOT NULL,
  `Calcium` INT NOT NULL,
  `Iron` INT NOT NULL,
  `Potassium` INT NOT NULL,
  `user_userID` CHAR(32) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`FoodID`, `user_userID`),
  UNIQUE INDEX `FoodID_UNIQUE` (`FoodID` ASC) VISIBLE,
  UNIQUE INDEX `FoodName_UNIQUE` (`FoodName` ASC) VISIBLE,
  INDEX `fk_Food Database_user1_idx` (`user_userID` ASC) VISIBLE,
  CONSTRAINT `fk_Food Database_user1`
    FOREIGN KEY (`user_userID`)
    REFERENCES `mydb`.`user` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`health`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`health` (
  `HealthID` CHAR(32) NOT NULL,
  `Height` INT NULL,
  `Weight` INT NULL,
  `Blood Pressure` INT NULL,
  `Blood Glucose Levels` INT NULL,
  `user_userID` CHAR(32) CHARACTER SET 'utf8mb3' NOT NULL,
  `chronic_condition_ChronicID` CHAR(32) NOT NULL,
  `allergies_AllergiesID` CHAR(32) NOT NULL,
  PRIMARY KEY (`HealthID`, `user_userID`, `chronic_condition_ChronicID`, `allergies_AllergiesID`),
  UNIQUE INDEX `HeathID_UNIQUE` (`HealthID` ASC) VISIBLE,
  INDEX `fk_Healrh Information_user1_idx` (`user_userID` ASC) VISIBLE,
  INDEX `fk_health_chronic_condition1_idx` (`chronic_condition_ChronicID` ASC) VISIBLE,
  INDEX `fk_health_allergies1_idx` (`allergies_AllergiesID` ASC) VISIBLE,
  CONSTRAINT `fk_Healrh Information_user1`
    FOREIGN KEY (`user_userID`)
    REFERENCES `mydb`.`user` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_health_chronic_condition1`
    FOREIGN KEY (`chronic_condition_ChronicID`)
    REFERENCES `mydb`.`chronic_condition` (`ChronicID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_health_allergies1`
    FOREIGN KEY (`allergies_AllergiesID`)
    REFERENCES `mydb`.`allergies` (`AllergiesID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;