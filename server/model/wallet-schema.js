import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  referredID: {
    type: Number,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['paid', 'unpaid'],
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  earnings: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
