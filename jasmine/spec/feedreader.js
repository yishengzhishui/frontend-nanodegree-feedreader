/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('URL are defined and not empty', function() {
      allFeeds.forEach(function(index) {
        expect(index.url).not.toBeNull();
      });
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name are defined and not be empty', function() {
      allFeeds.forEach(function(index) {
        expect(index.name).not.toBeNull();
      });
    });

  });


  /* TODO: Write a new test suite named "The menu" */

  describe('The menu', function() {
    var $body, $menuIcon;

    beforeEach(function() {
      $body = $('body');
      $menuIcon = $('.menu-icon-link');
    });

    afterEach(function() {
      $body = null;
      $menuIcon = null;
    });

    it(' The menu default is hidden', function() {
      expect($body.hasClass('menu-hidden')).toBeTruthy();
    });

    it('click menu icon can change state', function() {
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBeFalsy();
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBeTruthy();
    });
  });

  describe('Intital Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    }, 1000);

    it('There is a loadFeed and it can work', function() {
      expect($(".feed .entry").length).not.toBe(0);
    });
  });

  describe('New Feed Selection', function() {
    var content1, content2;

    beforeEach(function(done) {
      loadFeed(1, function() {
        content1 = $('.feed').html();
        console.log(content1);

        loadFeed(0, function() {
          content2 = $('.feed').html();
          console.log(content2);
          done();
        });
      });
    }, 2000);

    it('load new content', function() {
      expect(content1).not.toBe(content2);
    });

  });
  /* TODO: Write a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */

  /* TODO: Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */

  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
