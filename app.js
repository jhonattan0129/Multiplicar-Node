const { argv } = require('./config/yargs')
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreA => {
                console.log(`Se creo el archivo: ${ nombreA }`);
            }).catch(err => {
                console.log(err);
            })
        break

    default:
        console.log('Comando no reconocido');
}


// let argv2 = process.argv
// console.log(argv.limite);
// let parametro = argv[2]
// let base = parametro.split('=')[1]