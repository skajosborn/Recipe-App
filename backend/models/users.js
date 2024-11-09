import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
        trim: true,
    },
    "email": {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    "password": {
        type: String,
        required: true,
        trim: true,
    },
    "photoUri": {
        type: String,
        required: false,
        trim: true,
    },
    "status": {
        type: String,
        required: false,
        trim: true,
    },
})


const User = mongoose.model('User', userSchema)

export default User;