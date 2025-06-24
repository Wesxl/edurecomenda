const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'novasenha98', 
  database: 'edurecomendaa'
});

// Testar a conexão
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
    connection.release(); // libera a conexão de volta para o pool
  }
});

module.exports = pool;
