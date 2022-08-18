var app = new Vue({
        el: "#app",
        data: {
          city: '',
          weatherList: [],
          cityList:["北京", "上海", "深圳", "广州"],
        },
        methods: {
          searchWeather: function () {
            //  console.log(this.city);
             var that = this;
             this.weatherList = [];
            //  console.log(this.weatherList);
            axios
              .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
              .then(function (response) {
                //  console.log(response.data);
                //  console.log(response.data.data.forecast);
                 that.weatherList.push(...response.data.data.forecast);
                //  console.log(that.weatherList);
              })
              .catch(function (err) {});
          },
          changeCity:function(index){
            // console.log(this.cityList[index])
            this.city = this.cityList[index];
            this.searchWeather();
          }
        },
      }); 