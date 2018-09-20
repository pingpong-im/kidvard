import {Events} from 'meteor/toys'

Events.sub('MethodsCall', (event) => {
	console.log('MethodsCall', event)
	Meteor.apply(event.method, event.data.arguments)
})
