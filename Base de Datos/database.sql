-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2023 a las 02:51:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `denuncias`
--

CREATE TABLE `denuncias` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `categoria` text NOT NULL,
  `fecha` date NOT NULL,
  `estado` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `usuario` text NOT NULL,
  `contenido` text NOT NULL,
  `multimedia` text NOT NULL,
  `respuestas` text NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuarios` text NOT NULL,
  `contraseña` text NOT NULL,
  `correo` text NOT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `OS` text NOT NULL,
  `dispositivo` text NOT NULL,
  `navegador` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuarios`, `contraseña`, `correo`, `ip`, `OS`, `dispositivo`, `navegador`) VALUES
(0, 'Rafa Ordóñez', 'Contraseña123$', 'rafitaa@gmail.com', '46.6.196.254', 'Windows', 'PC', 'Chrome'),
(1, 'Lucas Gonzalez', '123456', 'lucasgonzalez@hotmail.com', '192.168.0.1', 'Windows', 'PC', 'Chrome'),
(2, 'Sofia Perez', 'abc123', 'sofiaperez@gmail.com', '10.0.0.1', 'Linux', 'Laptop', 'Firefox'),
(3, 'Mateo Fernandez', 'password', 'mateofernandez@yahoo.com', '172.16.0.1', 'Mac', 'Smartphone', 'Safari'),
(4, 'Valentina Gomez', 'qwerty', 'valentinagomez@outlook.com', '192.0.2.1', 'iOS', 'Tablet', 'Edge');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
