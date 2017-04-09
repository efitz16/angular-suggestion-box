app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {
	// debugger;
	  $scope.post = suggestions.posts[$routeParams.index];
	$scope.addComment = function() {
	  if ($scope.commentBody === "" || !$scope.commentBody) {
	  	return;
	  } else {
	  	$scope.post.comments.push({body: $scope.commentBody, upvotes: 0});
	  }
	}
	$scope.upVote = function(comment) {
	  comment.upvotes += 1;
	}
}])
