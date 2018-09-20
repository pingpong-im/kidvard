import {Events} from 'meteor/toys'

Events.sub('FormSubmitAuthenticationLogin', (event) => {
	console.log(event.data.fields)
	Meteor.loginWithPassword(event.data.fields.email, event.data.fields.password, (error, result) => {
		if (error) {
			Events.pub('Error', {error})
		} else if (event.data.params.redirect) {
			FlowRouter.go(event.data.params.redirect)
		}
	})
})

Template.AuthenticationLogin.onCreated(function() {

})
