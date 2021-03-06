const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  provider: String,
  provider_id: String,
  token: String,
  provider_pic: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});
UserSchema.methods.follow = userId => {
  if (this.following.includes(userId) === -1) {
    this.following.push(userId);
  }
};

UserSchema.methods.addFollower = fs => {
  this.follower.push(fs);
};

module.exports = mongoose.model('User', UserSchema);
