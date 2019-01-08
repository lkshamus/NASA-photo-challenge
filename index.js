var app = new Vue({
  el: '#app',
  data: {
    title: 'Photo of the day!',
    description: '',
    // initialDescription: '' 
  }, 
  methods: {
    getImages: function() {
      var app = this
      app.description = 'loading...'
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
        .then(function (response) {
          app.description = response.data.explanation
          console.log(app.description)
        })
        .catch(function (error) {
          app.description = "Error"

        })
    },
  }
})

