import {Events} from 'meteor/toys'

Events.sub('AuthenticationLogin', (event) => {
	console.log('AuthenticationLogin', event)
})

Events.sub('AuthenticationRegistration', (event) => {
	console.log('AuthenticationRegistration', event)
})
