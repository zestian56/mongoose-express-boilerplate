import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
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