Template.registerHelper('routerParam', function(name) {
	let router = FlowRouter.current()
	return router.params[name]
})
