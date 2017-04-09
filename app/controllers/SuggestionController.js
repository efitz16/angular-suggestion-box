app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {
	  $scope.post = suggestions.posts[$routeParams.id];
	$scope.addComment = function() {
	  $scope.post.comments.push()
	}
}])
