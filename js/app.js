
	const app1 = Vue.createApp({
		data(){
			return{
				users: [
					{id:1, name: 'Tamer'},
					{id:2, name: 'Atahan'},
					{id:3, name: 'Ece'},
					{id:4, name: 'Teoman'}
				]
			}
		}
	})
	
	app1.component('list-item',{
		props: ['name'],
		template: '<li>{{ name }}</li>'
	})
	
	const vm1 = app1.mount('#app1');