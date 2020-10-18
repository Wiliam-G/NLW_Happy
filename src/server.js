// importando dependências
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express();

// utilizando arquivos estáticos
server.use(express.static('public'));

// configurar template engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs')

// rotas
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);

    // return res.sendFile(path.join(__dirname,'views', 'index'));

// ligar o servidor

server.listen(5500);