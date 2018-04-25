(function() {
    var menu = document.querySelector('.nav__list');
    var burger = document.querySelector('.burger');
    var ejsfile = document.querySelector('#ejsFileId');
    var ejsbtn = document.querySelector("#uploadEjsBtn");
    var dwnld = document.querySelector("#dwnld");
    var resetbtn = document.querySelector("#reset");
    var originalData = ""; 
    var ejsDataJson = { "lines":[] };
    var extractedHTML = "";

    var openFile = function(){
        //alert("loadfun");
    };
    var fileContent = "";
    var openMenu = function() {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('nav__list--active');
    };
    var myfun = function(){
        //alert("inside myfun");
    };
    var parseEJS = function(fileContent){
       //// alert("..parsing file..");
        var i = fileContent.indexOf("<form");
        var e = fileContent.indexOf("</form>");
        var formStr = fileContent.slice(i, (e+7));
        //$('#formId').html(formStr);//preview
        originalData = fileContent.replace(/(\r\n\t|\n|\r\t)/gm,"");
        originalData = originalData.replace('>'+/\s/g+'<','');
        originalData = originalData.replace('>'+/ /g+'<',''); 
        getEjsLine(originalData);
        $('#formId').html(extractedHTML);
        //alert(JSON.stringify(ejsDataJson));
    };
    var getEjsLine = function(data){
        if(data.indexOf('<%')!==-1){
            var startIndex = data.indexOf("<%");
            var endIndex = data.indexOf("%>");
            var ejsLine = data.slice(startIndex, (endIndex+2));
            var sub = originalData.slice((originalData.indexOf(ejsLine)-20), originalData.indexOf(ejsLine));
            lineObj = {
                "index":originalData.indexOf(ejsLine),
                "lineStr":ejsLine,
                "siblingElem":sub
            };
            ejsDataJson.lines.push(lineObj);
            if(startIndex==0){var startStr = "";}
            else{
            var startStr = data.slice(0, (startIndex-1));}
            var endStr = data.slice((endIndex+2), data.length);
            getEjsLine(startStr+endStr);
        }
        else{
            extractedHTML = data;
        }
    };
    var downloadEjs = function(){
        var filename = "generatedfile";
        var text = reFormEjs($('#formId').html());
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);


    };
    var reFormEjs = function(text){
        var formedStr = text.replace(/(\r\n\t|\n|\r\t)/gm,"");
        formedStr = formedStr.replace('>'+/\s/g+'<','');
        for(var i=0;i<ejsDataJson.lines.length;i++){
        //for(var i=ejsDataJson.lines.length;i>0;i--){    
            var line = ejsDataJson.lines[i];
            if(line.index==0){
                formedStr = line.lineStr + formedStr;
            }
            else{
                var pre = formedStr.slice(0,line.index-1);
                var post = formedStr.slice(line.index-1, text.length);
                formedStr = pre + line.lineStr + post;
            }
        }
        return formedStr;
    };
    var openFile = function(){
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var text = reader.result;
            var node = document.getElementById('output');
            ////alert(text);
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
        //$('#mymodal').trigger('click');
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
    var validate = function(div){
        validateElement(div);
        var childs = $(div).children();
        if(childs.length>0){
            for(var i=0;i<childs.length;i++){
                validate(childs[i]);        
            }
        }        
    };
    var openEditClass = function(evt){
        var that = $(this);
        var classes = $(`.${that.data('identifier')}`).attr('class');

        $("#textId2").val(classes);

        $('#editClassModal')
        .data({
            elemid: that.data('identifier')
        })
        .modal('toggle');
    };
    var openEdit = function(evt){
        var that = $(this);
        var faultyStyle = $(`.${that.data('identifier')}`).attr('style').split(';').filter(function(style) {
            return style.indexOf('width') !== -1;
        })[0];

        $("#textId").val(faultyStyle);

        $('#editModal')
        .data({
            elemid: that.data('identifier')
        })
        .modal('toggle');
    };
    var validateElement = function(elem){
        style=$(elem).attr('style');   
        if(!($(elem).hasClass("Channel1") || $(elem).hasClass("Channel2") || $(elem).hasClass("Channel3")) && !$(elem).hasClass("mca")){
            $(elem).css("background-color","darkorange");
            $(elem).attr("title",'Element is not as per MCA specifications.');
            var uuid = guid();
            $(elem).addClass(uuid);
            $(elem).data({
                toggle: 'modal',
                target: '#editClassModal',
                identifier: uuid
            });
            elem.addEventListener("click",openEditClass);
        }   
        if(typeof style != 'undefined'){
            rules=style.split(';');
            rules = rules.filter(function(x){
            return (x !== (undefined || ''));
            });      
            
            for (i=0;i<rules.length;i++) {        
                rules_arr=rules[i].split(/:(?!\/\/)/g); // split by : if not followed by //
                rules_arr[1]=$.trim(rules_arr[1]).replace('url(','').replace(')','');
                    //debugger;
                if(rules_arr[0].trim()=='width') {
                    if(rules_arr[1].indexOf("px")>=0){// Wrong //Highligh element
                        var uuid = guid();

                        $(elem).css("border","3px solid red");
                        $(elem).attr("title",'Width should be in Percentage.');
                        $(elem).addClass(uuid);
                        $(elem).data({
                            toggle: 'modal',
                            target: '#editModal',
                            identifier: uuid
                        });
                        elem.addEventListener("click",openEdit);
                    }
                }
            }
        }
    };

    // Preview 
    $('#channel-list li a').on('click', function() {
        $('#channel-list li a').removeClass('active');
        
        $(this).addClass('active');

        $('#formId')
            .removeClass()
            .addClass($(this)
            .attr('id'));
        validate($('#formId')[0]);
    });

    $('#updateCSS').on('click', function() {
        var elementIdentifier = $('#editModal').data('elemid');
        var stylesArray = $('#textId').val().split(';');
        var stylesObj = stylesArray.reduce(function(acc, current) {
            var styleArr = current.split(':');
            acc[styleArr[0]] = styleArr[1]; 
            return acc;
        }, {});
        stylesObj.border = '1px solid #ccc';

        $(`.${elementIdentifier}`).css(stylesObj);

        $('#editModal').modal('toggle');
    });

    $('#updateClass').on('click', function() {
        var elementIdentifier = $('#editClassModal').data('elemid');
        var classes = $('#textId2').val();
        $(`.${elementIdentifier}`).attr('class',classes);
        $(`.${elementIdentifier}`).css("background-color","");
        $('#editClassModal').modal('toggle');
    });

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4();
    }
})();