const vm = new Vue({
    el: '#app',
    data: {
      title: 'My Landing Page',
      description: 'This is a custom landing page built with Vue.js in Frappe.'
    },
    methods: {
      changeTitle() {
        this.title = 'New Title!';
      }
    }
  });
  