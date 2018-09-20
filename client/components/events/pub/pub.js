import {Events} from 'meteor/toys'

Template.EventsPub.events({
	click(event, template) {
		Events.cmd('ModalOpen', {}, template)
	}
})
