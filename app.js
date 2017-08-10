var app = angular.module("richReddit", []);

app.controller('redditPostController', function($scope, $http) {

    $scope.posts = [];

    var url = "https://www.reddit.com/r/aww/.json";
    $http.get(url).then(function(response) {
      $scope.posts = response.data.data.children;
      console.log($scope.posts);

    });
    $scope.posts = $http.get(url);
});

app.service('postService', function($http) {
    this.getPostData = function() {
        var url = "https://www.reddit.com/r/aww/.json";

        var promise = $http.get(url);

        return promise;
    }
});
