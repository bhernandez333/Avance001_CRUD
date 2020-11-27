var mysql = require("mysql");
const db = require("mysql-async-simple").makeDb();
const config = require('../configuration/db');
const stringInject = require('stringinject');

async function obtenerContactoPorId(id) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    resultado = await db.query(connection, (id) ? stringInject.default(config.selectContactoPorId, [id]) : config.selectTodosContactos);
  } catch (err) {
    //console.log(err)
  } finally {
    await db.close(connection);
    //console.log(resultado.length);
    return JSON.stringify(resultado);
  }
}

async function incluirContacto(id1, name1, last1, phone1, email1, isActive1, timestamp1) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  var post  = [id1, name1, last1, phone1, email1, isActive1, timestamp1];
  try {
      resultado = await db.query(connection, config.insertaContacto, post);
  } catch (err) {
    console.log(err)
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function actualizarContacto(id, name, last, phone, email, isActive, timestamp) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  var post  = [name, last, phone, email, isActive, timestamp, id];
  try {
      resultado = db.query(connection, config.actualizaContacto, post);
  } catch (err) {
    console.log(err)
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function borrarContactoPorId(id) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    console.log(config.deleteContactoPorId);
    resultado = await db.query(connection, (id) ? stringInject.default(config.deleteContactoPorId, [id]) : config.deleteTodosContactos);
  } catch (err) {
    console.log(err);
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

module.exports = {
  obtenerContactoPorId,
  incluirContacto,
  actualizarContacto, 
  borrarContactoPorId
};
