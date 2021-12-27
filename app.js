const { crearArchivo } = require ('./helpers/multiplicar');
const  argv = require('./config/yargs');
const colors = require('colors');


/*PARA SABER DE DONDE TRAE LA INFO DESDE LA CONSOLA */
// const [ , , arg3 = 'base=5']= process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log( base );

console.clear();
//console.log(process.argv);
//console.log ( argv );



crearArchivo ( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.bgGreen.bold))
    .catch( err => console.log(err) );


