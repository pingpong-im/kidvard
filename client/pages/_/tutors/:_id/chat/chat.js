Template['/tutors/:_id/chat'].onCreated(function() {
	this._chat = new ReactiveVar(null)


	this.autorun(() => {
		let _users = [FlowRouter.getParam('_id'), Meteor.userId()]
		let chat = Chats.findOne({_users: {$all: _users}}) || {}
		this._chat.set(chat._id)
	})

})

Template['/tutors/:_id/chat'].events({
	'click .js-start-chat'(event, template) {
		let chat = {
			_users: [FlowRouter.getParam('_id'), Meteor.userId()]
		}
		Meteor.call('chats.insert', chat)
	}
})

Template['/tutors/:_id/chat'].helpers({
	chat() {
		return Chats.findOne(Template.instance()._chat.get())
	}
})

