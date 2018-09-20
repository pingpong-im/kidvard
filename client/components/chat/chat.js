Template.Chat.helpers({

	messages() {
		return Messages.find({_chat: Template.instance().data._chat})
	},

	beforeSubmit() {
		let template = Template.instance()
		return (event, data, eventTemplate) => {
			data._chat = template.data._chat
		}
	},

	afterSubmit() {
		return (event, data, template) => {
			template.$('textarea').val('')
		}
	}

})
