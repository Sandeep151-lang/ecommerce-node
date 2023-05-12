const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true });

userSchema.methods.generateAuthtoken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, "sandeepnandanwarfullstackdeveloper")
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch {
        console.log(`err`);
    }
}

module.exports = mongoose.model('user', userSchema);