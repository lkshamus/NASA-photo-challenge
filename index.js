var app = new Vue({
  el: '#app',
  data: {
    title: 'Photo of the day!',
    description: '',
    images:   [
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
      image: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiomO6Ur9_fAhXq5oMKHcLACKsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.space.com%2F39692-stars-in-rosette-nebula-heart-photo.html&psig=AOvVaw3nwEGh9Kmfp-GJe50eRKcx&ust=1547077560546441', date: '1/22/2019', title: 'Wonderous Beautiful Galaxy'
    },
    {
      image: 'https://cdn.images.express.co.uk/img/dynamic/151/590x/Hubble-space-telescope-pictures-NASA-photos-space-crab-nebula-934103.jpg', date: '1/22/2019', title: 'Alpha Centauri System'
    },
    {
      image: 'https://edu.glogster.com/library/proxy?url=http%3A%2F%2Fth08.deviantart.net%2Ffs70%2FPRE%2Ff%2F2014%2F071%2F5%2F5%2Fblue_space_by_whendell-d79zabi.jpg', date: '1/23/2019', title: 'Incredible Antares'
    },
  ],
    currentNumber: 0,
    date: 09,
    photosAvailable: true,
  }, 
  methods: {
    // getImage: function() {
    //   var app = this
    //   app.description = 'loading...'
    //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
    //     .then(function (response) {
    //       app.description = response.data.explanation
    //     })
    //     .catch(function (error) {
    //       app.description = "Error"
    //     })
    // },
    // getNextImage: function() {
    //   var app = this
    //   let date = app.date += 1
    //   app.description = 'loading...'
    //   axios.get(`https://api.nasa.gov/planetary/apod?date=2018-01-${date}&api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
    //     .then(function (response) {
    //       app.description = response.data.explanation
    //     })
    //     .catch(function (error) {
    //       app.description = "Error"
    //     })
    // },
    // getPreviousImage: function() {
    //   var app = this
    //   let date = app.date -= 1
    //   app.description = 'loading...'
    //   axios.get(`https://api.nasa.gov/planetary/apod?date=2018-01-${date}&api_key=8hO77FLyV0b8qpVKbIy5PTsgrEoLqVq56ByxlomR`)
    //     .then(function (response) {
    //       app.description = response.data.explanation
    //     })
    //     .catch(function (error) {
    //       app.description = "Error"
    //     })
    // },
    next: function() {
      app.currentNumber += 1;
      if (app.currentNumber === app.images.length) {
        return !app.photosAvailable
      }
    },
    previous: function() {
      return app.currentNumber -= 1
    }, 
  }
})

