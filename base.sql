-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-09-2019 a las 06:09:39
-- Versión del servidor: 10.3.15-MariaDB-100.cba
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wcarriedo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `main`
--

CREATE TABLE `main` (
  `id` int(255) NOT NULL,
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `father` int(11) NOT NULL DEFAULT 0,
  `autodate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `main`
--

INSERT INTO `main` (`id`, `name`, `icon`, `father`, `autodate`) VALUES
(1, 'Store', 'fa-store', 0, '2019-07-15 18:51:25'),
(2, 'Cart', 'fa-cart-plus', 0, '2019-07-15 18:51:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` double(26,2) NOT NULL,
  `img` varchar(50) NOT NULL DEFAULT 'p-default-0',
  `autodate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `img`, `autodate`) VALUES
(1, 'Beer', '', 2.00, 'p-beer-1', '0000-00-00 00:00:00'),
(2, 'Water', '', 1.00, 'p-water-2', '0000-00-00 00:00:00'),
(3, 'Apple', '', 0.30, 'p-apple-3', '0000-00-00 00:00:00'),
(4, 'Chees', '', 3.74, 'p-chees-4', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rating`
--

CREATE TABLE `rating` (
  `id` int(255) NOT NULL,
  `user` int(255) NOT NULL,
  `product` int(255) NOT NULL,
  `rating` int(255) NOT NULL DEFAULT 0,
  `autodate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rating`
--

INSERT INTO `rating` (`id`, `user`, `product`, `rating`, `autodate`) VALUES
(2, 4, 1, 20, '2019-07-24 18:18:25'),
(3, 4, 1, 80, '2019-07-24 18:18:57'),
(4, 4, 2, 100, '2019-07-24 18:18:57'),
(5, 4, 3, 10, '2019-07-24 18:18:57'),
(6, 4, 4, 30, '2019-07-24 18:18:57'),
(7, 2, 2, 20, '2019-07-25 03:19:20'),
(8, 2, 4, 20, '2019-07-25 03:19:20'),
(9, 2, 4, 20, '2019-07-25 03:21:16'),
(10, 2, 4, 20, '2019-07-25 03:32:31'),
(11, 2, 3, 20, '2019-07-25 19:13:31'),
(12, 2, 1, 20, '2019-09-01 03:55:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transport`
--

CREATE TABLE `transport` (
  `id` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double(26,2) NOT NULL,
  `autodate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transport`
--

INSERT INTO `transport` (`id`, `name`, `price`, `autodate`) VALUES
(1, 'Pick Up', 0.00, '0000-00-00 00:00:00'),
(2, 'UPS', 5.00, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `user` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `img` varchar(50) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'u-default-0',
  `wallet` double(26,2) NOT NULL,
  `autodate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `user`, `name`, `lastname`, `password`, `img`, `wallet`, `autodate`) VALUES
(2, 'ADMIN1', 'ANTHONY', 'CARRIEDO', '1234', 'u-ADMIN1-2', 3684.14, '2019-07-15 18:50:54'),
(3, 'ADMIN2', 'WILLINTHON', 'PEÑA', '1234', 'u-default-0', 100.00, '2019-07-15 18:50:54'),
(4, 'ADMIN3', 'CARRIEDO', 'THONY', '1234', 'u-ADMIN3-4', 55.78, '2019-07-15 18:50:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `main`
--
ALTER TABLE `main`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `product` (`product`);

--
-- Indices de la tabla `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `main`
--
ALTER TABLE `main`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `transport`
--
ALTER TABLE `transport`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
