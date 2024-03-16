const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 5000;

const pool = mysql.createPool({
  host: 'mysql',
  port: 3306,
  user: 'admin',
  password: 'admin',
  database: 'react_task'
});


app.get('/users', async(req, res) => {

  const sql = 'SELECT * FROM users';
  try{
   const connection = await pool.getConnection();
   const [rows]=await connection.query(sql);
   res.send(rows); 
  }
 catch(err){
   res.send(err);
}
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
