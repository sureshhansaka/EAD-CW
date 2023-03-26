-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 26, 2023 at 11:58 AM
-- Server version: 5.5.41
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laptop_tracker`
--
CREATE DATABASE IF NOT EXISTS `laptop_tracker` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `laptop_tracker`;

-- --------------------------------------------------------

--
-- Table structure for table `laptop`
--

DROP TABLE IF EXISTS `laptop`;
CREATE TABLE IF NOT EXISTS `laptop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lap_code` varchar(25) NOT NULL,
  `brand` varchar(10) NOT NULL,
  `hdd_type` varchar(10) NOT NULL,
  `total_space` varchar(10) NOT NULL,
  `ram` int(5) NOT NULL,
  `status` int(2) NOT NULL COMMENT 'Laptop allocation status',
  PRIMARY KEY (`id`),
  UNIQUE KEY `lap_code` (`lap_code`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `laptop`
--

INSERT INTO `laptop` (`id`, `lap_code`, `brand`, `hdd_type`, `total_space`, `ram`, `status`) VALUES
(1, 'PCLAB01-LAP01', 'HP', 'HDD/SSD', '1.5 TB', 16, 1),
(2, 'PCLAB01-LAP02', 'HP', 'HDD/SSD', '1.5 TB', 16, 1),
(3, 'PCLAB02-PC02', 'HP', 'HDD/SSD', '1.5 TB', 16, 1),
(4, 'PCLAB01-LAP04', 'HP', 'HDD/SSD', '1.5 TB', 16, 1),
(6, 'PCLAB01-LAP05', 'HP', 'HDD/SSD', '1.5 TB', 16, 0),
(21, 'PCLAB01-LAP06', 'HP', 'HDD/SSD', '1.5 TB', 16, 1),
(22, 'PCLAB03-PC01', 'HP', 'SSD', '500GB', 16, 1),
(23, 'Hall-16A-LAP01', 'Dell', 'HDD/SSD', '1.5 TB', 16, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
