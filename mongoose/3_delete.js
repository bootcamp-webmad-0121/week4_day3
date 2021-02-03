require('./1_connection_ddbb')

const Dog = require('./models/dog.model')


// // .findByIdAndDelete()
// // Recibe como argumento el ID string
// // Retorna el objeto eliminado

// Dog
//     .findByIdAndDelete('601a7c97387c76622af0673d')
//     .then(removedDog => console.log('El perro eliminado es:', removedDog))
//     .catch(err => console.log('Hubo un error:', err))






// // .deleteMany()
// // Recibe como argumento una query, afecta a cualquier match
// // Retorna los detalles de la operación

// Dog
//     .deleteMany({ age: 2 })
//     .then(info => console.log('Se han eliminado', info.deletedCount, 'perro/s'))
//     .catch(err => console.log('Se produjo un error', err))







// // .deleteOne()
// // Recibe como argumento una query, afecta al primer match
// // Retorna los detalles de la operación 

Dog
    .deleteOne({ age: { $lte: 10 } })
    .then(info => console.log(info))
    .catch(err => console.log('Se produjo un error', err))