angular.module('myRouter', ['ngAnimate', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/' ,
      controller: 'homeCtrl' ,
      templateUrl: 'js/home/homeTmpl.html'
    })
      .state('portfolio', {
        url: '/portfolio' ,
        controller: 'portCtrl' ,
        templateUrl: 'js/port/portTmpl.html'
      })
      .state('testimonials', {
        url: '/testimonials' ,
        controller: 'skillsCtrl' ,
        templateUrl: 'js/skills/skillsTmpl.html'
      })
      .state('contact', {
        url: '/contact' ,
        controller: 'contactCtrl' ,
        templateUrl: 'js/contact/contactTmpl.html'
      });

  $urlRouterProvider.otherwise('/');
});
