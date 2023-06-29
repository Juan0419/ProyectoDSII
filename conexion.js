const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'Gimnasio',
  user: 'postgres',
  password: '12345678',
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Conexión exitosa con la base de datos');
    // Aquí puedes realizar consultas o cualquier operación con la base de datos
    // client.query(...);
    // ...
    client.release();
  }
});