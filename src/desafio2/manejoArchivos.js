const fs = require('fs')

class Contenedor {
    constructor( archive ) {
        this.archive = archive
    }

    save( write ) {
        fs.WriteStream(`./src/desafio2/${this.archive}`, write, err => {
            if( err ) {
                console.log( err )
            } else {
                console.log('se guardo con exito')
            }
        })
    } 
}

const pr = new Contenedor('test.txt')
pr.save('utf-8','hola')

module.exports = Contenedor