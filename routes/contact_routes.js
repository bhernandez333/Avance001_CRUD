var miRouter = require('express').Router()
var contact_service = require('../services/contact_service');
const miMiddleware = require('../middleware/logger');

miRouter.get('/', async (req, res) => {
    resultado = await contact_service.obtenerContactoPorId();
    res.send(resultado);
});

miRouter.get('/:id', async (req, res) => {
    var id = req.params.id
    resultado = await contact_service.obtenerContactoPorId(id);
    res.send(resultado);
});

miRouter.post('/', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el POST - Insert.
    var id = req.body.id;
    var name = req.body.name;
    var last = req.body.last;
    var phone = req.body.phone;
    var email = req.body.email;
    var isActive = req.body.isActive;
    var timestamp = req.body.timestamp;
    console.log(`${id} ${name} ${last}`);
    resultado = await contact_service.incluirContactos(id, name, last, phone, email, isActive, timestamp);
    res.send(resultado);  
});

miRouter.put('/', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el PUT - update.
    var id = req.body.id;
    var name = req.body.name;
    var last = req.body.last;
    var phone = req.body.phone;
    var email = req.body.email;
    var isActive = req.body.isActive;
    var timestamp = req.body.timestamp;
    resultado = await contact_service.actualizarContactos(id, name, last, phone, email, isActive, timestamp);
    res.send(resultado);  
});

miRouter.delete('/', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el DELETE
    resultado = await contact_service.borrarContactoPorId().then(
        res.send(this)
    );
});

miRouter.delete('/:id', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el DELETE
    var id = req.params.id
    resultado = await contact_service.borrarContactoPorId(id).then(
        res.send(this)
    );
});

module.exports = miRouter
