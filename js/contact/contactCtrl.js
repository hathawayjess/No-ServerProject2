angular.module('myRouter').controller('contactCtrl', function($scope) {

  $scope.sendFrickenMessage = function(data) {
    $.ajax({
        url: "//formspree.io/hathaway.jess@gmail.com",
        method: "POST",
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        } ,
        dataType: "json"
    });
    alert('Thanks for the e-mail!');
    return false;
  }

})
