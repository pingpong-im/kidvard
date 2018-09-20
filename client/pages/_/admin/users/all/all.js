Template['/admin/users/all'].helpers({
	users() {
		return Users.find()
	}
})
