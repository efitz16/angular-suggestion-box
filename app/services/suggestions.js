app.factory('suggestions', [function() {
  var demoSuggestions = {
  	posts: [
  	  {
	    title: 'Free pizza at club meetings',
	    upvotes: 15,
	    comments: [],
	    },
	    {
	    title: 'End all club emails with Laffy Taffy jokes',
	    upvotes: 9,
	    comments: [],
	    },
	    {
	    title: 'Retrofit water fountain with Gatorade',
	    upvotes: 7,
	    comments: [{body: 'Gross', upvotes: 0}, {body: 'Whatever. You\'re weird', upvotes: 6} ],
	    },
	    {
	    title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
	    upvotes: 3,
	    comments: [],
	  }
  	]
  };
  return demoSuggestions;
}]);
