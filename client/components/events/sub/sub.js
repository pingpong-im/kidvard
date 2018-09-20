import {Events} from 'meteor/toys'

Template.EventsSub.onCreated(function() {
	Events.sub('EventsPubClicked', (event) => {
		console.log(event)
	})
})
