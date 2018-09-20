Template['/tutors/:_id/appointment'].helpers({

	beforeSubmit() {
		return (event, data, template) => {
			data._users = [FlowRouter.getParam('_id'), Meteor.userId()]
		}
	},

	appointment() {
		let _users = [FlowRouter.getParam('_id'), Meteor.userId()]
		return Appointments.findOne({_users: {$all: _users}})
	}

})
