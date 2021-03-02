
	const Home = {
		template: '<div>Home</div>'
	}
	const About = {
		template: '<div>About</div>'
	}
	
	const routes = [
		{ path: '/', component: Home },
		{ path: '/about', component: About },
	]
	
	const router = VueRouter.createRouter({
		history: VueRouter.createWebHashHistory(),
		routes
	})
	
	const app1 = Vue.createApp({})
	
	app1.use(router)

	app1.mount('#app1')
