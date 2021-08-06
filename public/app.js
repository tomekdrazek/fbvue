new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return { data: null, error: null }
  },
  mounted() {
    // this will bind our `data` entry with the firebase `test` live updates:
    fb.ref('test').on('value', (snapshot) => {
      this.data = snapshot.val()
    })
  },
  methods: {
    async readData() {
      this.error = null
      this.data = (await fb.ref('test').once('value')).val()
    },
    async writeData() {
      this.error = null
      try {
        await fb.ref('test').push({ data: 'test' })
      } catch (e) {
        this.error = e
      }
    }
  },
  computed: {
    showError() { return !!this.error }
  }

})