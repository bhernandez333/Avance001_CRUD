const connectionConfig = {
    host: "localhost",
    user: "BismHern",
    password: "ist-2020",
    database: "contacts",
};

const selectTodosContactos = `SELECT * FROM contacts`;
const selectContactoPorId = 'SELECT * FROM contacts where ID = {0}';
const insertaContacto = 'INSERT INTO contacts(id, name, last, phone, email, isActive, timestamp) VALUES (?,?,?,?,?,?,?)';
const actualizaContacto = 'UPDATE contacts SET name = ?, last = ?, phone = ?, email = ?, isActive = ?, timestamp = ? WHERE id = ?';
const deleteTodosContactos = `DELETE FROM contacts`;
const deleteContactoPorId = `DELETE FROM contacts where id = {0}`;

module.exports = {
    connectionConfig,
    selectTodosContactos,
    selectContactoPorId, 
    insertaContacto, 
    actualizaContacto, 
    deleteTodosContactos,   
    deleteContactoPorId
}