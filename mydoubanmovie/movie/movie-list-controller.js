(function () {
    var moudle = angular.module('app.movieList', []);

    moudle.controller('listController', ['$scope', '$rootScope', 'URLConfig', '$http', '$routeParams',
        function ($scope, $rootScope, URLConfig, $http, $routeParams) {

            var url = URLConfig.appUrl;
            var count = URLConfig.count;
            var type = $routeParams.type || 'in_theaters';
            var fullUrl=url+type;
            console.log(fullUrl);
            $scope.loading = true;
            var trueUrl = fullUrl + '?count=' + count + '&start=' + 0 + '&callback=movieListCallback';
            $http.jsonp(trueUrl).error(function () {
                // console.log('error',arguments);
            }).success(function () {
                console.log('success',arguments);
            });

            // function movieListCallback() {
            //
            // }

            window.movieListCallback = function (jsonData) {
                console.log(jsonData);

                $scope.title = jsonData.title;
                $scope.total = jsonData.total;
                $scope.movies = jsonData.subjects;

                $scope.loading = false;
            }

            $rootScope.navTitle = '电影列表';
                }])
})(window, document);