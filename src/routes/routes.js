const express = require('express');
const router = express.Router();
const inventario = require('../controllers/inventario.controller');

router.get('/inventario', async (req, res) => {
    await inventario.all(req.body, (resp) =>{
        res.json(resp)
    });
});

router.get('/inventario/:id', async (req, res) => {
    await inventario.item(req.body, (resp) =>{
        res.json(resp)
    });
});

router.post('/inventario', async (req, res) => {  
    console.log(req.body);
    await inventario.create(req.body, (resp) =>{
        res.json(resp)
    });
});

router.put('/inventario', async (req, res) => {
  await inventario.edit(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n1', (req, res) => {
   inventario.n1(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n2', (req, res) => {
   inventario.n2(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n3', (req, res) => {
   inventario.n3(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n4', (req, res) => {
   inventario.n4(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n5', (req, res) => {
   inventario.n5(req.body, (resp) =>{
      res.json(resp)
  });
});

router.get('/n6', (req, res) => {
   inventario.n6(req.body, (resp) =>{
      res.json(resp)
  });
});

module.exports = router;
