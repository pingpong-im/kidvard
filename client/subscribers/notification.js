import {Events} from 'meteor/toys'

Events.sub('Notification', (event) => {
	console.log(event.data.text)
})
