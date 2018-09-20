Template.registerHelper('toArray', function(obj) {
	let arr = []
	_.each(obj, (val, key) => {
		arr.push({
			value: val,
			key: key
		})
	})

	return arr
})
