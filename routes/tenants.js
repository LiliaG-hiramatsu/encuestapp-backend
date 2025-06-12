import express from 'express'
import create from '../controllers/tenants/create.js'
import read from '../controllers/tenants/read.js'
import readOne from '../controllers/tenants/readOne.js'
import update from '../controllers/tenants/update.js'
import destroy from '../controllers/tenants/destroy.js'
//import isValidToken from '../middlewares/isValidToken.js'
//import isAutorizedRol from '../middlewares/isAutorizedRol.js'

let router = express.Router();

// create
router.post('/', create)

// read
router.get('/', read)
router.get('/:id', readOne)

// update
router.put('/:u_id', update)

// destroy
router.delete('/:id', destroy)

export default router