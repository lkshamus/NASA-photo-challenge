Vue.config.devtools = true
var app = new Vue({
  el: '#app',
  data: {
    title: 'Photo of the day!',
    description: '',
    images: [
    {
      image: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg', date: '1/9/2019', title: 'Beautiful Milky Way'
    },
    {
      image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA2MS8wNzUvb3JpZ2luYWwvY2hhbmRyYS1uZ2M2MzU3LWNvbXBvc2l0ZS5qcGc=', date: '1/10/2019', title: 'Amazing Whirlpool Galaxy'
    },
    {
      image: 'https://icdn3.digitaltrends.com/image/space-engine-featured-510x0.jpg?ver=1', date: '1/11/2019', title: 'Wonderous Large Magellanic Cloud'
    },
        {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSJ9vDVxp4e9Ut5zJm_O-6_L0QicVhkxS1OtCuihj599tJPgx', date: '1/12/2019', title: 'Legendary Messier 81'
    },
    {
      image: 'https://www.itsdiscovery.com/wp-content/uploads/2017/09/maxresdefault.jpg', date: '1/13/2019', title: 'Incredible Pinwheel Galaxy'
    },
    {
      image: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0Ni8wNzgvb3JpZ2luYWwvaHlwZXJ2ZWxvY2l0eS1zdGFyLXNwZWVkaW5nLWF3YXkuanBn', date: '1/14/2019', title: 'Spectactular Centaurus A'
    },
    {
      image: 'https://www.nationalgeographic.com/content/dam/science/photos/000/010/1086.ngsversion.1491440409220.adapt.1900.1.jpg', date: '1/15/2019', title: 'Remarkable Small Magellanic Cloud'
    },
    {
      image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3855221.jpg', date: '1/16/2019', title: 'Thrilling Hoag\'s Object'
    },
    {
      image: 'https://ak4.picdn.net/shutterstock/videos/23844604/thumb/1.jpg', date: '1/17/2019', title: 'Breathtaking Sagittarius Dwarf Spheroidal Galaxy'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaNlK_ZpXmap9jU5P1OJ3h5EF1_SbpmMNrj5U9BRneKK1pirx', date: '1/18/2019', title: 'Glorious Sombrero Galaxy'
    },
    {
      image: 'https://space-facts.com/wp-content/uploads/andromeda-galaxy.jpg', date: '1/19/2019', title: 'Wonderous Large Magellanic Cloud'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqrhT-NARQztUkZ7rztXoFPXs4OnkGnVV-Sd4j_hKKkVyighf', date: '1/20/2019', title: 'Incredible Pinwheel Galaxy'
    },
    {
      image: 'http://cdn.spacetelescope.org/archives/images/screen/heic1816a.jpg', date: '1/21/2019', title: 'Stunning Black Eye Galaxy'
    },
    {
      image: 'https://cdn.images.express.co.uk/img/dynamic/151/590x/Hubble-space-telescope-pictures-NASA-photos-space-crab-nebula-934103.jpg', date: '1/22/2019', title: 'Alpha Centauri System'
    },
    {
      image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPOKFbR/the-end-title-on-tv-noise-background-ending-sequence-1920x1080-1080p-hd-footage_qy9_qm3i__F0000.png', title: 'End of slideshow! Thank you for checking NASA\'s photo of the day! '
    }

  ],
    currentNumber: 0
  }, 
  computed: {
    isNextPhotoAvailable: function() {
      return (this.currentNumber + 1)  !== (this.images.length);
    },
    isPrevPhotoAvailable: function() {
      return (this.currentNumber - 1)  !== -1;
    }
  },
  methods: {
    next: function() {
      this.currentNumber += 1;
    },
    previous: function() {
      return this.currentNumber -= 1;
    }, 
//     // getImage: function() {
//     //   var app = this
//     //   app.description = 'loading...'
//     //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
//     //     .then(function (response) {
//     //       app.description = response.data.explanation
//     //     })
//     //     .catch(function (error) {
//     //       app.description = "Error"
//     //     })
//     // },
//     // getNextImage: function() {
//     //   var app = this
//     //   let date = app.date += 1
//     //   app.description = 'loading...'
//     //   axios.get(`https://api.nasa.gov/planetary/apod?date=2018-01-${date}&api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
//     //     .then(function (response) {
//     //       app.description = response.data.explanation
//     //     })
//     //     .catch(function (error) {
//     //       app.description = "Error"
//     //     })
//     // },
//     // getPreviousImage: function() {
//     //   var app = this
//     //   let date = app.date -= 1
//     //   app.description = 'loading...'
//     //   axios.get(`https://api.nasa.gov/planetary/apod?date=2018-01-${date}&api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
//     //     .then(function (response) {
//     //       app.description = response.data.explanation
//     //     })
//     //     .catch(function (error) {
//     //       app.description = "Error"
//     //     })
//     // },
  }
})
