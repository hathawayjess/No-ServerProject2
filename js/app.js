angular.module('myRouter', ['ngAnimate', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/' ,
      templateUrl: 'js/home/homeTmpl.html'
    })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'js/work/workTmpl.html'
      })
      .state('skills', {
        url: '/skills' ,
        templateUrl: 'js/skills/skillsTmpl.html'
      })
      .state('contact', {
        url: '/contact' ,
        controller: 'contactCtrl',
        templateUrl: 'js/contact/contactTmpl.html'
      });

  $urlRouterProvider.otherwise('/');
});
