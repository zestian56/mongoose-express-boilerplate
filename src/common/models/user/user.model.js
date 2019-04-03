import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationality: {
        type: String
    },
    documentId: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    cellphone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    eps: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    }

});

userSchema.set('toObject', {
    virtuals: true
});
userSchema.method("toGraph", function toGraph() {
    return JSON.parse(JSON.stringify(this));
});

const User = model('User', userSchema);

export default User;