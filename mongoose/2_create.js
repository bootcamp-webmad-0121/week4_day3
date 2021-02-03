require('./1_connection_ddbb')

const Dog = require('./models/dog.model')



// // .create()
// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD

// Dog
//     .create({ name: 'Popino', age: 15, city: 'Madrid', adopted: false })
//     .then(theNewDogInfo => console.log('El nuevo perro es:', theNewDogInfo))
//     .catch(err => console.log('Hubo un error:', err))




// // .create()
// argumento: arrays de objetos a crear en la BBDD
// retorno: arrays de objetos creados en BBDD
Dog
    .create([
        { name: 'Cartucho', age: 8, city: 'Bilbao', adopted: false },
        { name: 'Natillas', age: 10, city: 'Madrid', adopted: false },
        { name: 'Dartacan', age: 7, city: 'Sevilla', adopted: true }
    ])
    .then(theNewDogsInfo => theNewDogsInfo.forEach(elm => console.log('El perro', elm.name, 'se ha creado')))
    .catch(err => console.log('Hubo un error:', err))