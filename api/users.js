import {Collection} from 'meteor/toys'

Users = new Collection(Meteor.users)

Users.helpers({
	title() {
		return this.profile.name || this.emails[0].address
	},

	chats() {
		return Chats.find({_users: this._id})
	},

	appointments() {
		return Appointments.find({_users: this._id})
	}
})

Meteor.methods({

	'users.register'(user) {
		console.log('users.register', user)
	},

	'users.login'(credentials) {
		console.log('users.login', credentials)
	},

	'users.setTutorProfileSection'(tutorProfileSection) {
		let user = Users.findOne(Meteor.userId())
		let tutorProfile = user.profile.tutor || {}
		_.extend(tutorProfile, tutorProfileSection)
		Users.update(user._id, {
			$set: {
				'profile.isTutor': true,
				'profile.tutor': tutorProfile
			}
		})
	}

})
