require('./1_connection_ddbb')

const Dog = require('./models/dog.model')


// // .findByIdAndUpdate()
// // Recibe string con id, y la manipulación
// // Por defecto, retorna el elemento anterior al update
// // El argumento opcional { new: true } retorna el elemento actualizado

// Dog
//     .findByIdAndUpdate('601a7f4067e38c62615e1b86', { $inc: { age: 100 } }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))






// // .updateOne()
// // Recibe query, actualiza el primer match
// // Retorna objeto con detalles de la operación

// Dog
//     .updateOne({ name: 'Salchichonino' }, { name: 'Salchichonino reloaded' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))









// .updateMany()
// Recibe query, actualiza cualquier match
// Retorna objeto con detalles de la operación

Dog
    .updateMany({ name: 'Popino' }, { name: 'Popino the best doggy' })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))
