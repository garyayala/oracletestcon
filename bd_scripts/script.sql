-- Adminer 4.7.8 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `oracletestcon`;
CREATE DATABASE `oracletestcon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `oracletestcon`;

DELIMITER ;;

CREATE PROCEDURE `sp_leer_poliza`(IN `var_poliza` bigint)
begin
	select count(1) as 'count'
	from poliza p
	where p.num_poliza = var_poliza;
end;;

DELIMITER ;

DROP TABLE IF EXISTS `poliza`;
CREATE TABLE `poliza` (
	  `num_poliza` bigint NOT NULL AUTO_INCREMENT,
	  `contratante` varchar(100) NOT NULL,
	  `asegurado` varchar(100) NOT NULL,
	  `beneficiario` varchar(100) NOT NULL,
	  `fecha_inicio` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	  PRIMARY KEY (`num_poliza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `poliza` (`num_poliza`, `contratante`, `asegurado`, `beneficiario`, `fecha_inicio`) VALUES
(1,	'contratante 1',	'asegurado 1',	'beneficiario 1',	'2021-05-19 21:22:02');

-- 2021-05-20 10:29:12
