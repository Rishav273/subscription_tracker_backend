import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minlength: [5, 'Name must be at least 5 characters'],
        maxlength: 255,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: [true, 'Email address is unique'],
        minlength: [5, 'Email must be at least 5 characters'],
        maxlength: 255,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters'],
    }
}, {timestamps: true});


const User = mongoose.model('User', userSchema);
export default User;