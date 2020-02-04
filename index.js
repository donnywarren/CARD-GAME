
$(document).ready(function() {





  // selecting existing elements
  // pass in a valid css selector
  var $containers = $('.container');

  // creating new elements
  // pass in valid html
  var $elem = $('<div class="container"></div>');
  var $p = $('<p>Hello World</p>');
  $elem.append($p);
  $('body').append($elem); // instead of .appendChild, use .append

  // adding event listeners
  $('.container').on('click', function() {
    var $this = $(this);
    // $this.hide();
    // $this.fadeOut();
    // $this.addClass('hide');
    // $this.toggleClass('hide');
    $this.slideUp();
  });

  var $textElement = $('.text-element.first');
  var textElement = $textElement.text(); // w/o param, it gives you the text values
  $textElement.text('hi'); // it updates ALL of the selected elements
});


// HOW YOU WOULD DO IT WITH JAVASCRIPT
// var container = document.querySelectorAll('.container');

// var elem = document.createElement('div');

// document.querySelectorAll('.container').forEach(function(containerElem) {
//   containerElem.addEventListener('click', function() {
//     console.log('it clicked');
//   });
// });

// WHAT IS JQUERY DOING?
// var $ = function(string) {
//     return document.querySelectorAll(string);
// }
//
// var container = $('.container');
// console.log(container);
