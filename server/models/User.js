const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		provider: String,
		provider_id: String,
		token: String,
		provider_pic: String,
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		following:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
	}
);
UserSchema.methods.follow = (user_id)=> {
	if (this.following.includes(user_id) === -1) {
		this.following.push(user_id)
	}
}

UserSchema.methods.addFollower = (fs)=> {
	this.follower.push(fs)
}

module.exports = mongoose.model('User', UserSchema);
