Template.registerHelper('title', function(collectionName, _id) {
	return (window[collectionName].findOne(_id) || {}).title
})
