const mongoose = require('mongoose');

// class Jokes {
//     constructor(){
//         this.setup = faker.setup()
//         this.punchline = fake.punchline()
//     }
// }


const JokesSchema = new mongoose.Schema({
    setup: {
    type: String,
    required : [true, "Set up is required"],
    minlength: [10, "Set up must be at least 10 characters long"],
    },
    punchline: {
    type: String,
    required : [true, "Must have a punchline"],
    minlength : [3, "Punchline must be at least 3 characters long"]
    }
});

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;
