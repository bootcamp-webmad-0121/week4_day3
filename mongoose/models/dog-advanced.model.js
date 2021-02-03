const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        set: nameValue => nameValue.charAt(0).toUpperCase() + nameValue.substring(1),
        default: 'Nombre desconocido'
    },
    color: {
        type: String,
        required: true,
        enum: ['brown', 'white', 'grey', 'black']
    },
    age: {
        type: Number,
        required: true,
        min: 3,
        max: 100
    },
    chip: {
        type: String,
        required: true,
        match: /[0-6]{4}[A-Z]/
    },
    email: {
        type: String,
        validate: {
            validator: emailValue => emailValue.endsWith('@ironhack.com'),
            message: 'Los correos deben pertenecer a Ironhack'
        }
    }

})

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog