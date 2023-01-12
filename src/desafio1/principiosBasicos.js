class User {
    constructor(name, surname, pets, books) {
        this.name = name
        this.surname = surname
        this.pets = pets
        this.books = books
    }
    
    getFullName() {
        console.log `${this.name} ${this.surname}`
    }

    addMascota( petName ) {
        this.pets.push( petName )
    }

    countMascotas(  ) {
        console.log( this.pets.length )
    }

    addBook( nombreLibro, autorLibro ) {
        this.books.push( { nombreLibro, autorLibro } )
    }

    getBookNames() {
        let listBooks = []
        for( let book of this.books ){
            listBooks.push(book.nombreLibro)
        }
        console.log(listBooks)
    }
}

const agregarMascota =  new User('Juan', 'Beatriz', [], [])

agregarMascota.addMascota( 'Fernando' )
agregarMascota.countMascotas()
agregarMascota.addBook( 'harry', 'poter' )
agregarMascota.addBook( 'harry2', 'poter' )
agregarMascota.getBookNames()

console.log(agregarMascota.books)
console.log(agregarMascota.pets)

module.exports = User