import {Events, Form} from 'meteor/toys'

Template.Form.events({

	'submit'(event, template) {

		let fields = Form.getData(event)
		let names = `FormSubmit FormSubmit${template.data.name}`
		let data = {fields, params: template.data}

		Events.pub(names, data, template)

		if (template.data.before) {
			template.data.before(event, fields, template)
		}

		if (template.data.action) {

			Events.pub('SpinnerIncrement')

			Meteor.call(template.data.action, fields, (error, result) => {

				console.log(error)

				if (error) {
					Events.pub('Error', {error})
				} else {
					if (template.data.notification) {
						Events.pub('Notification', {text: template.data.notification})
					}

					if (template.data.redirect) {
						FlowRouter.go(template.data.redirect)
					}

				}

				setTimeout(() => Events.pub('SpinnerDecrement'), 1000)

			})

		}

		if (template.data.after) {
			template.data.after(event, fields, template)
		}

	}

})
