import {Events} from 'meteor/toys'

Events.sub('FormSubmitAuthenticationRegistration', (event) => {
	Accounts.createUser(event.data.fields, (error, result) => {
		if (error) {
			Events.pub('Error', {error})
		} else {
			alert('Done')
		}
	})
})

Template.AuthenticationLogin.onCreated(function() {

})
