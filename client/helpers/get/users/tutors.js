Template.registerHelper('getUsersTutors', function() {
	return Users.find({'profile.isTutor': true})
})
