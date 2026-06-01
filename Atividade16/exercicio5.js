let eventos = require('events');
// Atribuição da classe EventEmitter a uma variável

let EmissorEventos = eventos.EventEmitter;
// O emissor de eventos, encontra-se na propriedade EventEmitter

let ee = new EmissorEventos();
ee.on('dados', function(fecha){
    console.log(fecha);
});

// Emissão do evento somente uma vez
ee.emit ('dados', 'primeira vez ' + Date.now());

// Emissão ao evento a cada 500 milissegundos:
setInterval(function (){
    ee.emit('dados', Date.now());
}, 500);

// milissegundos desde 1970