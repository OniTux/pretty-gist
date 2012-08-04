describe("Github Widget", function() {

	// Instantiate PrettyGist
	$(document).ready(function(){
		$("#gist-2902410").prettyGist();
		$("#gist-3124862").prettyGist({
			showHeader: false
		});
		$("#gist-2909965").prettyGist({
			extendedHeader: false
		});
		$("#gist-2909953").prettyGist({
			showFooter: false
		});
	});

	describe("should render", function() {

		it("the container view", function() {
			expect($(".pg-pretty-gist")).toExist();
		});

		it("the gist title", function() {
			expect($(".pg-github-user-data h2 a").text().length).toBeGreaterThan(0);
		});

		it("the gist owners name", function() {
			expect($(".pg-github-user-data h3 a").text().length).toBeGreaterThan(0);
		});

		it("the gist owners avatar", function() {
			expect($(".pg-github-user img").attr("src").length).toBeGreaterThan(0);
		});

		it("the download gist link", function() {
			expect($(".pg-button.pg-left").attr("href").length).toBeGreaterThan(0);
		});

		it("the embed gist data", function() {
			expect($(".pg-show-embed").attr("data-embed").length).toBeGreaterThan(0);
		});

		it("the clone gist data", function() {
			expect($(".pg-show-clone-url").attr("data-clone-url").length).toBeGreaterThan(0);
		});

		it("the more info button", function() {
			expect($(".pg-show-plugin-info")).toExist();
		});

		it("the code container", function() {
			expect($(".pg-code-container")).toExist();
		});

		it("a line of code", function() {
			expect($(".pg-pretty-line")).toExist();
		});

	});

	describe("should react to user interaction", function() {

		it("by displaying the embed url in a modal", function() {
			$('.pg-show-embed').trigger('click');
			expect($(".pg-gist-modal")).toBeVisible();
			expect($(".pg-gist-modal p").text()).toContain("Embed code:");
		});

		it("by displaying the clone url in a modal", function() {
			$('.pg-show-clone-url').trigger('click');
			expect($(".pg-gist-modal")).toBeVisible();
			expect($(".pg-gist-modal p").text()).toContain("Clone url:");
		});

		it("by displaying more info in a modal", function() {
			$('.pg-show-plugin-info').trigger('click');
			expect($(".pg-gist-modal")).toBeVisible();
			expect($(".pg-gist-modal p").text()).toContain("Pretty Gist by");
		});

	});

	describe("based on the default config it will render", function() {

		it("the gist content with no syntax highlighting", function() {
			expect($("#pg-pretty-gist-2902410 .pg-pretty-line").text()).toContain("jquery.min.js");
		});

		it("the gist id to match the embedded id", function() {
			var id = $("#pg-pretty-gist-2902410.pg-pretty-gist").attr("id").split("-");
			expect(id[3]).toEqual("2902410");
		});

		it("the correct gist title", function() {
			expect($("#pg-pretty-gist-2902410 .pg-github-user-data h2 a").text()).toEqual("Github jQuery plugin usage");
		});

		it("the correct gist owners name", function() {
			expect($("#pg-pretty-gist-2902410 .pg-github-user-data h3 a").text()).toEqual("JoePettersson");
		});

		it("the correct gist owners avatar", function() {
			expect($("#pg-pretty-gist-2902410 .pg-github-user img").attr("src")).toContain("d282fed502608587e7a8d780188f21b8");
		});

	});

	describe("with custom option", function() {

		it("the header should not be displayed when the option is set to false", function() {
			expect($("#pg-pretty-gist-3124862 .pg-header")).not.toExist();
		});

		it("the extended header should not be displayed when the option is set to false", function() {
			expect($("#pg-pretty-gist-2909965 .pg-github-user-data")).not.toExist();
		});

		it("the footer should not be displayed when the option is set to false", function() {
			expect($("#pg-pretty-gist-2909953 .pg-footer")).not.toExist();
		});

	});

});