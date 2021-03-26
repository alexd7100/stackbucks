const { Router } = require('express');

const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDel } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut);

router.post('/', usuariosPost );

router.delete('/', usuariosDel );


module.exports = router;