import {Events} from 'meteor/toys'

Template.Modal.onRendered(function() {

	Events.sub('ModalOpen', (event) => {
		this.$('.modal').addClass('modal--active')
	})

	Events.sub('ModalClose', (event) => {
		this.$('.modal').removeClass('modal--active')
	})

})

Template.Modal.events({

	'click .modal'(event, template) {
		Events.cmd('ModalClose')
	},

	'click .modal-content'(event, template) {
		event.stopPropagation()
	}
})
