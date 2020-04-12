const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    console.log('============'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============'.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`.blue);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introductido ${ base } no es un numero`)
            return
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base*i }\n`
        }

        fs.writeFile(`tablas/tabla-del-${ base }-hasta-${ limite }.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-del-${ base }-hasta-${ limite }.txt`.green)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}