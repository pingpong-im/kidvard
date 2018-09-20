import {Events} from 'meteor/toys'

Events.sub('Error', (event) => {
	alert(event.data.error.reason || event.data.error.message)
})
