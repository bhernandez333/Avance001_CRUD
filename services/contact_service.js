const contact_infrastruture = require('../infrastructure/contact_infrastructure')

function obtenerContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.obtenerContactoPorId(id);
    } else {
        return { error: 'No me dio un id para retornar.' }
    }
}

function incluirContactos(id, name, last, phone, email, isActive, timestamp) {
    if (id !== null) {
        return contact_infrastruture.incluirContacto(id, name, last, phone, email, isActive, timestamp);
    } else {
        return { error: 'No me dio un id para procesar' }
    }
}

function actualizarContactos(id, name, last, phone, email, isActive, timestamp) {
    if (id !== null) {
        return contact_infrastruture.actualizarContacto(id, name, last, phone, email, isActive, timestamp);
    } else {
        return { error: 'No me dio un id para procesar' }
    }
}

function borrarContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.borrarContactoPorId(id);
    } else {
        return { error: 'No me dio un id para borrar' }
    }
}

module.exports = {
    obtenerContactoPorId,
    incluirContactos,
    actualizarContactos, 
    borrarContactoPorId
}
