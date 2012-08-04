describe("Github Widget", function() {

	// Instantiate PrettyGist
	$(document).ready(function(){
		$(".gist").prettyGist();
	});

	describe("should render", function() {

		it("the container view", function() {
			expect($(".pg-pretty-gist")).toExist();
		});

	});

});