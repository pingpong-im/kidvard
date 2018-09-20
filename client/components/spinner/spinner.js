import {Events} from 'meteor/toys'

Template.Spinner.onCreated(function() {
	this.counter = 0;
	this.rCounter = new ReactiveVar(this.counter)

	Events.sub('SpinnerIncrement', (event) => {
		this.counter++
		this.rCounter.set(this.counter)
	})

	Events.sub('SpinnerDecrement', (event) => {
		this.counter--
		this.rCounter.set(this.counter)
	})

})

Template.Spinner.helpers({
	counter() {
		return Template.instance().rCounter.get()
	}
})
