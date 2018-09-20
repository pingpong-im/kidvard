import "./default.html"

Template.LayoutDefault.onCreated(function () {
	this.visibleSection = new ReactiveVar('transactions')
})

Template.LayoutDefault.onRendered(function () {
	this.autorun(() => {

		FlowRouter.watchPathChange()

		$('a').each(function() {
			let $a = $(this)
			if ($a.attr('href') && (FlowRouter.current().path !='/' || FlowRouter.current().path === $a.attr('href')) && $a.attr('href').startsWith(FlowRouter.current().path)) {
				$a.addClass('active')
			} else {
				$a.removeClass('active')
			}
		})

	})
})

Template.LayoutDefault.helpers({

})

Template.LayoutDefault.events({
	/**
	'submit'(event, template) {
		event.preventDefault()

		const $form = $(event.currentTarget)
		const collection = window[$form.attr('action')]
		const data = $form.serializeObject()

		data.createdAt = new Date()
		data.updatedAt = new Date()

		if (data._id) {
			console.log(data)
			collection.update(data._id, {$set: data})
		} else {
			collection.insert(data)
		}

		$form.find('[name]').val('')
	},
	 */


	'click nav > a'(event, template) {
		//event.preventDefault()
		//template.visibleSection.set($(event.currentTarget).attr('href'))
	}
})
