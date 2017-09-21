/*
 * REQUIRES JQUERY: xxxx
 *
 * @TODO: Add jquery version, test everything
 */

$(document).ready(function() {

  // Fire once on load

  $(window).on('load', function() {
    tableWidths();
  })


  // Fire whenever the page is resized

  function onResize() {
    tableWidths();
  };


  // Detect window resizing

  var resize;
  window.onresize = function() {
    clearTimeout(resize);
    // Call function containing code to run on resize event
    resize = setTimeout(onResize, 100);
  };


  // Responsive Tables

  // Explicitly leave the table wrappers intact once initiated, as:
  //  a) this confirms the table is indeed too large for the display; and
  //  b) it allows the CSS styles to handle the resizing properties without
  //      needing to wait for the function to run

  function tableWidths() {
    $('.main-container section table').each(function() {
    
      var $this = $(this),
        $wrapperWidth = $(this).parent().outerWidth(true),
        $tableWidth = $(this).outerWidth(true);

      // If the table's width exceeds the wrapper
      if ($tableWidth > $wrapperWidth) {
        // And it doesn't already have a wrapper...
        if (!$this.parent().hasClass('table-responsive')) {
          // Add one
          $this.wrap('<div class="table-responsive"></div>');

          // Let CSS do the rest :)
        }
      }
    });
  }

});
