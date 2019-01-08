var app = new Vue({
  el: '#app',
  data: {
    title: 'Photo of the day!',
    description: '',
    image: 'https://apod.nasa.gov/apod/image/1901/Geminids46P_jcc_2000.jpg',
    images: ['https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg', 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA2MS8wNzUvb3JpZ2luYWwvY2hhbmRyYS1uZ2M2MzU3LWNvbXBvc2l0ZS5qcGc=', 'https://icdn3.digitaltrends.com/image/space-engine-featured-510x0.jpg?ver=1', 'https://fsmedia.imgix.net/e3/65/af/fe/f8db/4252/8dec/c3f9f06d72ee/lifeinspacejpeg.jpeg', 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3NC8wNjEvb3JpZ2luYWwvcm9zZXR0ZS1uZWJ1bGEuanBn', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSJ9vDVxp4e9Ut5zJm_O-6_L0QicVhkxS1OtCuihj599tJPgx', 'http://www.unoosa.org/res/timeline/index_html/space-2.jpg', 'https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/space-1124070.jpg', 'https://news.nationalgeographic.com/content/dam/news/photos/000/472/47258.ngsversion.1422036232334.adapt.1900.1.jpg', 'https://www.ctvnews.ca/polopoly_fs/1.4011871.1531487420!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg', 'https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=w640-h400-e365', 'https://cdn.wccftech.com/wp-content/uploads/2016/09/space-840x617.jpg', 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAyMi80Mzcvb3JpZ2luYWwvaGVsaXgtbmVidWxhLXVucmF2ZWxpbmcuanBn', 'https://ichef.bbci.co.uk/news/912/cpsprodpb/420D/production/_104990961_gettyimages-481229372.jpg', 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA4MS85MDkvb3JpZ2luYWwvbmdjMTQ2Ni1odWJibGUuanBn', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.popsci.com%2Fsites%2Fpopsci.com%2Ffiles%2Fstyles%2F1000_1x_%2Fpublic%2Fimages%2F2015%2F02%2Fpotw1506a.jpg%3Fitok%3Dc4tI0Uo2&imgrefurl=https%3A%2F%2Fwww.popsci.com%2Fbest-images-outer-space&docid=Vl1I659FdWb1lM&tbnid=rsnzHfQW5IpMSM%3A&vet=10ahUKEwiZ4aPr0t7fAhXK5IMKHcwDCVgQMwhiKAUwBQ..i&w=1000&h=987&bih=790&biw=1440&q=space%20photos&ved=0ahUKEwiZ4aPr0t7fAhXK5IMKHcwDCVgQMwhiKAUwBQ&iact=mrc&uact=8'],
    dates: ['1/9/2019', '1/10/2019', '1/11/2019', '1/12/2019', '1/13/2019', '1/14/2019', '1/15/2019', '1/16/2019', '1/17/2019', '1/18/2019', '1/19/2019', '1/20/2019', '1/21/2019', '1/22/2019', '1/23/2019', '1/24/2019'],
    currentNumber: 0
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
      next: function() {
        app.currentNumber += 1
      },
      previous: function() {
        app.currentNumber -= 1
      }
  }
})

