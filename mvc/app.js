const express = require('express')
const app = express()
const path = require('path')

require('./configs/mongoose.config')
const Dog = require('./models/dog.model')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.get('/', (req, res) => {                                // controlador - ruta

    Dog                                                     // modelo
        .find()
        .then(dogs => res.render('dogs-list', { dogs }))    // vista
        .catch(err => console.log('ERROR', err))
})

app.listen(3000, () => console.log('Server listening on port 3000'))