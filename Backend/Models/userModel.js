import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      isUnique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model('User', userSchema);
// const User = mongoose.models['User'] || mongoose.model('User', userSchema);

// var User;

// if (mongoose.models.User) {
//   User = mongoose.model('User');
// } else {
//   User = mongoose.model('User', userSchema);
// }

// module.exports = Admin;

export default User;
