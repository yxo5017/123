app.component('test-display', {
  props: {
    testDetails: {
      type: String,
      required: true
    }
  },
  template:
  `
  <h1>
  {{ testMessage }}
  </h1>
  `,
  data() {
    return {
      test: true
    }
  },
  methods: {
  },
  computed: {
    testMessage() {
      if (this.test) {
        return 'test'
      }
      return 'none'
    }
  }
})
