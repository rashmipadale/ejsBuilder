(function() {
    var menu = document.querySelector('.nav__list');
    var burger = document.querySelector('.burger');
    var ejsfile = document.querySelector('#ejsFileId');
    var ejsbtn = document.querySelector("#uploadEjsBtn");
    var dwnld = document.querySelector("#dwnld");
    var resetbtn = document.querySelector("#reset");

    var openFile = function(){
        alert("loadfun");
    };
    var fileContent = "";
    var openMenu = function() {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('nav__list--active');
    };
    var myfun = function(){
        alert("inside myfun");
    };
    var parseEJS = function(fileContent){
        alert("..parsing file..");
        var i = fileContent.indexOf("<form");
        var e = fileContent.indexOf("</form>");
        var formStr = fileContent.slice(i, (e+7));
        $('#formId').html(formStr);
    };
    var downloadEjs = function(){
        var filename = "generatedfile";
        var text = $('#formId').html();
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    };
    var openFile = function(){
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var text = reader.result;
            var node = document.getElementById('output');
            //alert(text);
            parseEJS(text);
            //$("#mymodal .close").click();
            $("#closebtn").trigger("click");
        };
        reader.readAsText(input.files[0]);
        // start reading a loaded file
        //reader.readAsText(fileToRead);
    };
    var resetfun = function(){
        $('#formId').html("");
    };
    function setBackground(jQObject, color) {
        jQObject.css("background-color", color);
      }
      
      /* This simple blink funktion adds some feedback to what
         happens when a draggable is dropped onto a droppable. */
      function blink(jQueryObject) {
        // grab the original background color of the element
        var origColor = jQueryObject.css("background-color");
      
          var baseDelay = 50;
          for(var i = 0; i <= 4; i+=2) {
            // change the background color to white
            setTimeout(setBackground, baseDelay*i, jQueryObject, "#FFF");
      
            // set a timeout of 50ms - wait for 50ms then change the
            // background color back to the original color
            setTimeout(setBackground, baseDelay*i+50, jQueryObject, origColor);
          }
      }
    
    var init = function() {
        burger.addEventListener('click', openMenu, false);
        //ejsbtn.addEventListener('click',myfun,false);
        ejsfile.addEventListener('change',openFile, false); 
        dwnld.addEventListener('click', downloadEjs, false);
        resetbtn.addEventListener('click',resetfun, false);
        $('#mymodal').trigger('click');
        $(".draggable").draggable({
            revert: true
          });
          
          $("#droppable").droppable({
            // the activeClass option specifies the class to add to
            // the droppable when it is a possible candidate for
            // a draggable element
            activeClass: "active",
        
            // here we specify the function to be run when the drop event
            // is triggered.
            drop: function (event, ui) {
              blink($(this));
              //$(this).html(ui.draggable.text());
              var elem = ui.draggable.attr('id');
              var ele = null;
              var str = '';
              switch(elem) {
                case '1':
                  str = `<div class="form-group">
                                <label for="1">Input Text Label:</label>
                                <input type="text" class="form-control" id='1'>
                            </div><br>`;
                  ele = $(str);
                  break;
                case '2':
                  str = `<div class="form-group">
                            <label>Input Text Label:</label>
                            <textarea></textarea>
                        </div><br>`;
                  ele = $(str);
                  break;
                case '3':
                  str = `<div class="form-group">
                            <label>Select Box:</label>
                            <select><option>Option 1</option><option>Option 2</option></select><br>
                        </div><br>`;
                  ele = $(str);     
                  break;
                case '4':
                  str = `<div class="form-group">
                            <button>Button</button><br>
                        </div><br>`;
                  ele = $(str);
                  break;
                case '5':
                  str = `<div class="checkbox">
                            <label><input type="checkbox"> Remember me</label>
                        </div><br>`;
                  ele = $(str);          
                  break;
                case '6':
                  ele = $('<label>Label</label><br>');
                  break;
                case '7':
                  ele = $('<table class="table"><tr><td>row 1 col 1</td><td>row 1 col 2</td></tr><tr><td>row 2 col 1</td><td>row 2 col 2</td></tr></table><br>');
                  break;
                default: 
                  console.log("default case");
              }
              ele.appendTo('#formId');
            }
          });
    };

    init();
})();