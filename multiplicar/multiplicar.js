//requireds
const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Base no es un número');
            return
        }

        if (!Number(limite)) {
            reject('Limite no es un número');
            return
        }

        console.log('============================'.green);
        console.log(`======Tabla del ${base}======`.green);
        console.log('============================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        if (!Number(limite)) {
            reject('Limite no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarArchivo
}