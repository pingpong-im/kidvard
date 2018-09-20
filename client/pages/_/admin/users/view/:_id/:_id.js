Template['/admin/users/view/:_id'].helpers({
	user() {
		console.log(FlowRouter.getParam('_id'))
		return Users.findOne(FlowRouter.getParam('_id'))
	}
})
