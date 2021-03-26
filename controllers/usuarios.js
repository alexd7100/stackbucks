const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;
  
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
  }

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
  
    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
  }


const usuariosPost = (req, res = response) => {
    
    const { nombre, edad } = req.body;
  
    res.status(201).json({
        msg: 'post API - controlador',
        nombre, edad
    });
    console.log(req.body);
  }

const usuariosDel = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
  }

  module.exports = {
     usuariosGet,
     usuariosPost,
     usuariosPut,
     usuariosDel
  }