$(function(){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file = '' + $(this).data('include');
      $(this).load(file);
    });

    var includeDir = $('.include-dir');
    jQuery.each(includeDir, function(){

      var pathInclude = $(this).attr('path-include');
      var startInclude = $(this).attr('start-include');
      var endInclude = $(this).attr('end-include');
      var staticName = $(this).attr('static-name');

      for (i = startInclude ; i <= endInclude ; i++){
          var section = document.createElement("section");
          var file = pathInclude+i+staticName;
          $(section).load(file);
          $("#slides").append(section);
      }

      this.parentNode.removeChild(this);

    });
});
