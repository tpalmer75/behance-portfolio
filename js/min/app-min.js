var app=angular.module("portfolio");app.config(["$httpProvider",function(e){e.defaults.headers.common={},e.defaults.headers.post={},e.defaults.headers.put={},e.defaults.headers.patch={}}]),app.controller("portfolioCtrl",function(e,t){e.behanceLoaded=!1,e.dribbbleLoaded=!1,t.getBehance().then(function o(t){e.behance=t,e.behanceLoaded=!0})["catch"](function n(){console.log("Error in Behance Factory")}),t.getDribbble().then(function r(t){e.dribbble=t,e.dribbbleLoaded=!0})["catch"](function a(){console.log("Error in Dribbble Factory")}),e.medium=t.getMedium().then(function c(t){e.medium=t,e.mediumLoaded=!0})["catch"](function d(){console.log("Error in Medium Factory")})}),app.factory("portfolioFactory",function(e){var t=function(){var t="tpalmerixd",o="mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ";return e({method:"GET",url:"http://behance.net/v2/users/"+t+"/projects?api_key="+o}).then(function n(e){return e.data.projects})},o=function(){var t="taylorpalmer",o="32f6310e856d9e7ce2245fc5c609d6b273e6920c77489b3c3cdd018e271b3bcd";return e({method:"GET",url:"https://api.dribbble.com/v1/users/"+t+"/shots?access_token="+o}).then(function n(e){return e.data})},n=function(){var t="https://medium.com/feed/@taylorp/";return e.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q="+encodeURIComponent(t)).then(function o(e){return e.data.responseData.feed.entries})};return{getBehance:t,getDribbble:o,getMedium:n}});