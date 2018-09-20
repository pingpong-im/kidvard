import {Form} from 'meteor/toys'

Template['/welcome/tutor/step/registration'].events({
	'submit'(event, template) {
		let user = Form.getData(event)
	}
})
