Template.registerHelper('find', function(collectionName, kw) {
	return window[collectionName].find()
})
