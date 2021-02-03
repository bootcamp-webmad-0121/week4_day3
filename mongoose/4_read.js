require('./1_connection_ddbb')

const Dog = require('./models/dog.model')




// // .find()
// // Sin argumento, retorna un array con todos los registros en forma de objeto

// Dog
//     .find()
//     .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
//     .catch(err => console.log('Se produjo un error:', err))






// // .find()
// // Puede recibir un primer argumento (query), retorna un array con todos los registros en forma de objeto

// Dog
//     .find({ age: { $lt: 13 } })
//     .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
//     .catch(err => console.log('Se produjo un error:', err))





// // .findById()
// // Recibe un string con un ID, retorna el objeto que haga match, o null si no exitse

// Dog
//     .findById('5fabc14bec59a21c0a8a9c56')
//     .then(theDog => console.log(theDog))
//     .catch(err => console.log('Se produjo un error:', err))






// // .findOne()
// // Recibe un argumento (query), retorna un objeto con el primer registro que haga match 
Dog
    .findOne({ age: { $lt: 6 } })
    .then(dogs => console.log(dogs))
    .catch(err => console.log('Se produjo un error:', err))