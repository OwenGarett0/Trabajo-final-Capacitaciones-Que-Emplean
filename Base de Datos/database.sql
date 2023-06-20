

--
-- Estructura de tabla para la tabla `denuncias`
--

CREATE TABLE `denuncias` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
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
  `id` int AUTO_INCREMENT PRIMARY KEY,
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
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `usuarios` text NOT NULL,
  `contraseña` text NOT NULL,
  `correo` text NOT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `OS` text NOT NULL,
  `dispositivo` text NOT NULL,
  `navegador` text NOT NULL
) 