//var express = require('express');
import express from 'express';
import userRouter from './usuarios.js'
import authRouter from './auth.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.use('/usuarios', userRouter)
router.use('/tenants', tenantRouter)
router.use('/encuestas', encuestaRouter)
router.use('/respuestas', respuestaRouter)
router.use('/auth', authRouter)

export default router
