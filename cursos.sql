CREATE DATABASE edurecomendaa;
USE edurecomendaa;

CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  avaliacao DECIMAL(3,1),
  acessos INT,
  tempo INT,
  area VARCHAR(100),
  nivel VARCHAR(50)
);
