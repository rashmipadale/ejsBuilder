var EjsBuilder = (function(window, undefined) {
  var menu = document.querySelector(".nav__list");
  var burger = document.querySelector(".burger");
  var ejsfile = document.querySelector("#ejsFileId");
  var ejsbtn = document.querySelector("#uploadEjsBtn");
  var dwnld = document.querySelector("#dwnld");
  var resetbtn = document.querySelector("#reset");
  var originalData = "";
  var ejsDataJson = { lines: [] };
  var extractedHTML = "";

  /**
   * Initializing EJS Builder
   * adding event listerners.
   */
  function init() {
    console.log("...initializing ejsBuilder...");

    /* var text = `
    <%- include('header'); -%>
    <form id="mini-app-form" class="mca scp-view scp-ubg">
    <div class="mca scp-layout">
      <div class="mca scp-view-header" id="header">
        <div id="root" class="mca">
          <div class="mca">
            <div class="container mca">
              <div class="page-header mca">
              <% if (user) { %>
                <h3 class="">Customer Details Change</h3>
              <% } %>
              </div>
              <div class="mca">
                <div class="mca">
                  <div class="mca alert alert-info" role="alert">
                    <span class="mca glyphicon glyphicon-info-sign" aria-hidden="true"></span>Please search the customer and select customer name to proceed with the contact details change!</div>
                  <div class="mca">
                    <div class="mca panel panel-default">
                      <div class="mca panel-heading" style="width:100px;">Search Customer </div>
                      <div class="mca panel-body">
                        <div class="mca form-group col-sm-12">
                          <div class="mca col-sm-10">
                            <input class="mca form-control" placeholder="Enter customerId Id" name="customerId" value="" type="text">
                          </div>
                          <div class="mca col-sm-2">
                            <button class="mca btn btn-success">SEARCH</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mca panel panel-default">
                      <div class="mca panel-heading">Search Organization </div>
                      <div class="mca panel-body">
                        <div class="mca form-group col-sm-12">
                          <div class="mca col-sm-10">
                            <mca-input type="text" class="mca form-control" placeholder="Enter Organization Name" value="" name="OrganizationId">
                            </mca-input>
                          </div>
                          <div class="mca col-sm-2">
                            <mca-button class="mca btn btn-success">SEARCH</mca-button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mca">
                      <div class="mca panel panel-default">
                        <div class="mca panel-heading"> Customer </div>
                        <div class="mca panel-body">
                          <div class="mca react-bs-table-container">
                            <div class="mca react-bs-table react-bs-table-bordered" style="height: 100%;">
                              <div class="mca react-bs-container-header table-header-wrapper">
                                <table class="mca table table-hover table-bordered table-condensed">
                                  <colgroup class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                    <col class="mca">
                                  </colgroup>
                                  <thead class="mca">
                                    <tr class="mca">
                                      <th class="mca" rowspan="1" style="text-align: center;" data-is-only-head="false"></th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="email" data-field="email">email
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="customer_id" data-field="customer_id">customer_id
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="home_number" data-field="home_number">home_number
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="dob" data-field="dob">dob
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="work_number" data-field="work_number">work_number
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="name" data-field="name">name
                                        <div class="mca"></div>
                                      </th>
                                      <th class="mca" style="text-align: left;" data-is-only-head="false" title="mobile_number" data-field="mobile_number">mobile_number
                                        <div class="mca"></div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody class="mca">
                                    <tr class="mca">
                                      <td class="mca" style="text-align: center;">
                                      </td>
                                      <td tabindex="1" style="text-align: left;" class="mca"></td>
                                      <td tabindex="2" style="text-align: left;" class="mca"></td>
                                      <td tabindex="3" style="text-align: left;" class="mca"></td>
                                      <td tabindex="4" style="text-align: left;" class="mca"></td>
                                      <td tabindex="5" style="text-align: left;" class="mca"></td>
                                      <td tabindex="6" style="text-align: left;" class="mca"></td>
                                      <td tabindex="7" style="text-align: left;" class="mca"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="mca react-bs-table-pagination">
                              <div class="mca row" style="margin-top: 15px;">
                                <div class="mca col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                  <span class="mca dropdown   react-bs-table-sizePerPage-dropdown">
                                    <button class="mca btn btn-default btn-secondary dropdown-toggle" id="pageDropDown" data-toggle="dropdown" aria-expanded="false"
                                      aria-haspopup="true">10
                                      <span class="mca">
                                        <span class="mca caret"></span>
                                      </span>
                                    </button>
                                    <ul class="dropdown-menu mca" role="menu" aria-labelledby="pageDropDown">
                                      <li role="presentation" class="mca dropdown-item">
                                        <a role="menuitem" tabindex="-1" class="mca" href="#" data-page="10">10</a>
                                      </li>
                                      <li role="presentation" class="mca dropdown-item">
                                        <a role="menuitem" tabindex="-1" class="mca" href="#" data-page="25">25</a>
                                      </li>
                                      <li role="presentation" class="mca dropdown-item">
                                        <a role="menuitem" tabindex="-1" class="mca" href="#" data-page="30">30</a>
                                      </li>
                                      <li role="presentation" class="mca dropdown-item">
                                        <a role="menuitem" tabindex="-1" class="mca" href="#" data-page="50">50</a>
                                      </li>
                                    </ul>
                                  </span>
                                </div>
                                <div style="display: block;" class="mca col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                  <ul class="mca react-bootstrap-table-page-btns-ul pagination">
                                    <li class="mca" title="1">
                                      <a href="#" class="mca page-link">1</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="mca s-alert-wrapper"></div>
                          </div>
                        </div>
                      </div>
                      <div class="mca">
                        <a class="mca btn btn-danger pull-right button" role="button" href="http://localhost:3000/customer/edit/">NEXT</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </form>
  <%- include('footer'); -%>`; */

    // var parsedEJS = removeWhitespace(parseEJS(text));
    // if (parsedEJS.length) {
    //   $("#closebtn").trigger("click");
    //   var filteredJSON = iterateAndFilterEJS(parsedEJS);
    //   var transformedJSON = transformMcaToHtml(filteredJSON);
    //   var filteredHTML = window.himalaya.stringify(transformedJSON);

    //   $("#scroller").html(filteredHTML);
    // }

    // Adding event Listeners
    burger.addEventListener("click", openMenu, false);
    ejsfile.addEventListener("change", openFile, false);
    dwnld.addEventListener("click", downloadEjs, false);
    resetbtn.addEventListener("click", resetfun, false);

    //Setting drag drop
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
      drop: function(event, ui) {
        blink($(this));
        //$(this).html(ui.draggable.text());
        var elem = ui.draggable.attr("id");
        var ele = null;
        var str = "";
        switch (elem) {
          case "1":
            var id = guid();
            str = `<div class="mca-form-group mca">
                      <label class="mca mca-label" for=${id}>Input Text Label:</label>
                      <input type="text" name="mcaInput" class="form-control mca" value="" placeholder="" id=${id} data-mcaelement="true" />
                  </div><br>`;
            ele = $(str);
            break;
          case "2":
            str = `<div class="form-group">
                                <label>Input Text Label:</label>
                                <textarea></textarea>
                            </div><br>`;
            ele = $(str);
            break;
          case "3":
            str = `<div class="form-group">
                                <label>Select Box:</label>
                                <select><option>Option 1</option><option>Option 2</option></select><br>
                            </div><br>`;
            ele = $(str);
            break;
          case "4":
            str = `<div class="mca mca-form-group">
            <button class="mca btn btn-success" data-mcaelement="true">Button</button><br>
                            </div><br>`;
            ele = $(str);
            break;
          case "5":
            str = `<div class="checkbox">
                                <label><input type="checkbox"> Remember me</label>
                            </div><br>`;
            ele = $(str);
            break;
          case "6":
            ele = $("<label>Label</label><br>");
            break;
          case "7":
            ele = $(
              '<table class="table"><tr><td>row 1 col 1</td><td>row 1 col 2</td></tr><tr><td>row 2 col 1</td><td>row 2 col 2</td></tr></table><br>'
            );
            break;
          default:
            console.log("default case");
        }
        ele.appendTo("#scroller");
      }
    });

    //  Event Listerner for Preview in channels.
    $("#channel-list li a").on("click", function() {
      $("#channel-list li a").removeClass("active");

      $(this).addClass("active");

      $("#formId")
        .removeClass()
        .addClass($(this).attr("id"));
      validate($("#scroller")[0]);
    });

    // Edit Styling
    $("#updateCSS").on("click", function() {
      var elementIdentifier = $("#editModal").data("elemid");
      var stylesArray = $("#textId")
        .val()
        .split(";");
      var stylesObj = stylesArray.reduce(function(acc, current) {
        var styleArr = current.split(":");
        acc[styleArr[0]] = styleArr[1];
        return acc;
      }, {});
      stylesObj.border = "1px solid #ccc";

      $(`.${elementIdentifier}`).css(stylesObj);

      $("#editModal").modal("toggle");
    });

    //Edit Class
    $("#updateClass").on("click", function() {
      var elementIdentifier = $("#editClassModal").data("elemid");
      var classes = $("#textId2").val();
      $(`.${elementIdentifier}`).attr("class", classes);
      $(`.${elementIdentifier}`).css("border", "none");
      $("#editClassModal").modal("toggle");
    });

    //Fix non-mca tags
    $("#fixTags").on("click", function() {
      var elementIdentifier = $("#fixMcaTagsModal").data("elemid");
      $(`.${elementIdentifier}`)
        .removeClass("invalid-mca-tag")
        .data("mcaelement", true)
        .attr("title", "")
        .off("click");

      $("#fixMcaTagsModal").modal("toggle");
    });
  }

  /**
   * This simple blink funktion adds some feedback to what
   * happens when a draggable is dropped onto a droppable.
   * @param {*} jQueryObject
   */
  function blink(jQueryObject) {
    // grab the original background color of the element
    var origColor = jQueryObject.css("background-color");
    var baseDelay = 50;
    for (var i = 0; i <= 4; i += 2) {
      // change the background color to white
      setTimeout(setBackground, baseDelay * i, jQueryObject, "#FFF");

      // set a timeout of 50ms - wait for 50ms then change the
      // background color back to the original color
      setTimeout(setBackground, baseDelay * i + 50, jQueryObject, origColor);
    }
  }

  /**
   * Sets background color to object.
   * @param {*} jQObject
   * @param {*} color
   */
  function setBackground(jQObject, color) {
    jQObject.css("background-color", color);
  }

  /**
   * Hamburger menu toggling
   */
  var openMenu = function() {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav__list--active");
  };

  /**
   * Loading EJS file on upload
   */
  var openFile = function() {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      var text = reader.result;
      var node = document.getElementById("output");
      var parsedEJS = removeWhitespace(parseEJS(text));
      if (parsedEJS.length) {
        $("#closebtn").trigger("click");
        var filteredJSON = iterateAndFilterEJS(parsedEJS);
        var transformedJSON = transformMcaToHtml(filteredJSON);
        var filteredHTML = window.himalaya.stringify(transformedJSON);

        $("#scroller").html(filteredHTML);
      }
    };
    reader.readAsText(input.files[0]);
    // start reading a loaded file
    //reader.readAsText(fileToRead);
  };

  /**
   * Compiling EJS on file load
   * @param {*} fileContent
   */
  var parseEJS = function(fileContent) {
    //  var i = fileContent.indexOf("<form");
    //  var e = fileContent.indexOf("</form>");
    //  var formStr = fileContent.slice(i, (e+7));
    //  originalData = fileContent.replace(/(\r\n\t|\n|\r\t)/gm,"");
    //  originalData = originalData.replace('>'+/\s/g+'<','');
    //  originalData = originalData.replace('>'+/ /g+'<','');
    //  getEjsLine(originalData);
    //  $('#scroller').html(extractedHTML);
    return window.himalaya.parse(fileContent.replace(/\r?\n|\r/g, "").trim());
  };

  /**
   * Preseving EJS tags
   * @param {*} data
   */
  var getEjsLine = function(data) {
    if (data.indexOf("<%") !== -1) {
      var startIndex = data.indexOf("<%");
      var endIndex = data.indexOf("%>");
      var ejsLine = data.slice(startIndex, endIndex + 2);
      var sub = originalData.slice(
        originalData.indexOf(ejsLine) - 20,
        originalData.indexOf(ejsLine)
      );
      lineObj = {
        index: originalData.indexOf(ejsLine),
        lineStr: ejsLine,
        siblingElem: sub
      };
      ejsDataJson.lines.push(lineObj);
      if (startIndex == 0) {
        var startStr = "";
      } else {
        var startStr = data.slice(0, startIndex - 1);
      }
      var endStr = data.slice(endIndex + 2, data.length);
      getEjsLine(startStr + endStr);
    } else {
      extractedHTML = data;
    }
  };

  /**
   * Downloading modilfied files
   */
  var downloadEjs = function() {
    var filename = "generatedfile.html";
    var text = reFormEjs($("#scroller").html());
    var ejsStr = `
    <script>
      ${ejsSnippets.map(str => str.slice(3, str.length - 3).trim()).join(" ")}
    </script>`;

    text = text + ejsStr;

    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  /**
   * Restructuring EJS, as preserved
   * @param {*} text
   */
  var reFormEjs = function(text) {
    var parsedEJS = parseEJS(text);
    if (parsedEJS.length) {
      var transformedJSON = transformHtmlToMca(parsedEJS);
      var filteredHTML = window.himalaya.stringify(transformedJSON);

      return filteredHTML;
    }
    // var formedStr = text.replace(/(\r\n\t|\n|\r\t)/gm, "");
    // formedStr = formedStr.replace(">" + /\s/g + "<", "");
    // for (var i = 0; i < ejsDataJson.lines.length; i++) {
    //   //for(var i=ejsDataJson.lines.length;i>0;i--){
    //   var line = ejsDataJson.lines[i];
    //   if (line.index == 0) {
    //     formedStr = line.lineStr + formedStr;
    //   } else {
    //     var pre = formedStr.slice(0, line.index - 1);
    //     var post = formedStr.slice(line.index - 1, text.length);
    //     formedStr = pre + line.lineStr + post;
    //   }
    // }

    //return formedStr;
  };

  /**
   * Reseting builder
   */
  var resetfun = function() {
    ejsfile.val(null);
    $("#scroller").html("");
  };

  var guid = function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4();
  };

  /**
   * Validating Content of builder
   * as per different Rules.
   * @param {*} div
   */
  var validate = function(div) {
    validateElement(div);
    var childs = $(div).children();
    if (childs.length > 0) {
      for (var i = 0; i < childs.length; i++) {
        validate(childs[i]);
      }
    }
  };

  /**
   * Validating single element as per Rules.
   * @param {*} elem
   */
  var validateElement = function(elem) {
    for (var i = 0; i < Rules.validationRules.length; i++) {
      var rule = Rules.validationRules[i];
      if (rule.validate == true) {
        switch (rule.name) {
          case "responsive":
            responsiveValidation(elem);
            break;
          case "mcaClasses":
            mcaClassesValidation(elem);
            break;
          case "mcaComponents":
            mcaComponentsValidation(elem);
            break;
          default:
            console.log("default rule..");
        }
      }
    }
  };

  /**
   * Validation for MCA_Classes
   * @param {*} elem
   */
  var mcaClassesValidation = function(elem) {
    if (
      !(
        $(elem).hasClass("Channel1") ||
        $(elem).hasClass("Channel2") ||
        $(elem).hasClass("Channel3")
      ) &&
      !$(elem).hasClass("mca")
    ) {
      $(elem).css("border", "3px dashed red");
      $(elem).attr("title", "Element is not as per MCA specifications.");
      var uuid = guid();
      $(elem).addClass(uuid);
      $(elem).data({
        toggle: "modal",
        target: "#editClassModal",
        identifier: uuid
      });
      elem.addEventListener("click", openEditClass);
    }
  };

  /**
   * Validation for Responsiveness
   * @param {*} elem
   */
  var responsiveValidation = function(elem) {
    style = $(elem).attr("style");
    if (typeof style != "undefined") {
      rules = style.split(";");
      rules = rules.filter(function(x) {
        return x !== (undefined || "");
      });

      for (i = 0; i < rules.length; i++) {
        rules_arr = rules[i].split(/:(?!\/\/)/g); // split by : if not followed by //
        rules_arr[1] = $.trim(rules_arr[1])
          .replace("url(", "")
          .replace(")", "");
        //debugger;
        if (rules_arr[0].trim() == "width") {
          if (rules_arr[1].indexOf("px") >= 0) {
            // Wrong //Highligh element
            var uuid = guid();

            $(elem).css("border", "3px solid red");
            $(elem).attr("title", "Width should be in Percentage.");
            $(elem).addClass(uuid);
            $(elem).data({
              toggle: "modal",
              target: "#editModal",
              identifier: uuid
            });
            elem.addEventListener("click", openEdit);
          }
        }
      }
    }
  };

  var mcaComponentsValidation = function(elem) {
    var tagName = $(elem)[0].localName;

    switch (tagName) {
      case "input":
        if (!$(elem).data("mcaelement")) {
          var uuid = guid();

          $(elem).addClass("invalid-mca-tag");
          $(elem).attr("title", "Use MCA tags rather than HTML tags.");

          $(elem).addClass(uuid);
          $(elem).data({
            toggle: "modal",
            target: "#fixMcaTagsModal",
            identifier: uuid
          });
          $(elem).on("click", openFixMCATags);
        }
        break;
      case "button":
        if (!$(elem).data("mcaelement")) {
          var uuid = guid();

          $(elem).addClass("invalid-mca-tag");
          $(elem).attr("title", "Use MCA tags rather than HTML tags.");

          $(elem).addClass(uuid);
          $(elem).data({
            toggle: "modal",
            target: "#fixMcaTagsModal",
            identifier: uuid
          });
          $(elem).on("click", openFixMCATags);
        }
        break;
      case "default":
        break;
    }
  };

  /**
   * Editting style
   * @param {*} evt
   */
  var openEditClass = function(evt) {
    var that = $(this);
    var classes = $(`.${that.data("identifier")}`).attr("class");

    $("#textId2").val(classes);

    $("#editClassModal")
      .data({
        elemid: that.data("identifier")
      })
      .modal("toggle");
  };

  /**
   * Editting Class
   * @param {*} evt
   */
  var openEdit = function(evt) {
    var that = $(this);
    var faultyStyle = $(`.${that.data("identifier")}`)
      .attr("style")
      .split(";")
      .filter(function(style) {
        return style.indexOf("width") !== -1;
      })[0];

    $("#textId").val(faultyStyle);

    $("#editModal")
      .data({
        elemid: that.data("identifier")
      })
      .modal("toggle");
  };

  /*
    Fixing Non-MCA tags 
   */

  var openFixMCATags = function(e) {
    e.preventDefault();

    var that = $(this);

    $("#fixMcaTagsModal")
      .data({
        elemid: that.data("identifier")
      })
      .modal("toggle");
  };

  // filtered ejs snippets are pushed into an array
  var ejsSnippets = [];
  function iterateAndFilterEJS(children) {
    return children.filter(function(node) {
      if (
        node.type === "text" &&
        (node.content.includes("<%=") ||
          node.content.includes("<%") ||
          node.content.includes("<%-"))
      ) {
        ejsSnippets.push(node.content);
      }
      if (node.hasOwnProperty("children")) {
        node.children = iterateAndFilterEJS(node.children);

        return true;
      }

      return (
        node.type === "text" &&
        (!node.content.includes("<%=") &&
          !node.content.includes("<%") &&
          !node.content.includes("<%-"))
      );
    });
  }

  function filterValue(arr, filterKey) {
    return (
      arr.filter(function(attr) {
        return attr.key === filterKey;
      })[0].value || ""
    );
  }
  const mcaToHtmlMap = {
    "mca-input": mcaEleObj => ({
      type: "element",
      tagName: "input",
      attributes: [
        {
          key: "class",
          value: filterValue(mcaEleObj.attributes, "class")
        },
        {
          key: "placeholder",
          value: filterValue(mcaEleObj.attributes, "placeholder")
        },
        {
          key: "name",
          value: filterValue(mcaEleObj.attributes, "name")
        },
        {
          key: "value",
          value: filterValue(mcaEleObj.attributes, "value")
        },
        {
          key: "type",
          value: filterValue(mcaEleObj.attributes, "type")
        },
        {
          key: "data-mcaelement",
          value: "true"
        }
      ],
      children: mcaEleObj.children || []
    }),
    "mca-button": mcaEleObj => ({
      type: "element",
      tagName: "button",
      attributes: [
        {
          key: "class",
          value: filterValue(mcaEleObj.attributes, "class")
        },
        {
          key: "data-mcaelement",
          value: "true"
        }
      ],
      children: mcaEleObj.children
    })
  };

  const HtmlToMcaMap = {
    input: elemObj => ({
      type: "element",
      tagName: "mca-input",
      attributes: [
        {
          key: "class",
          value: filterValue(elemObj.attributes, "class")
        },
        {
          key: "placeholder",
          value: filterValue(elemObj.attributes, "placeholder")
        },
        {
          key: "name",
          value: filterValue(elemObj.attributes, "name")
        },
        {
          key: "value",
          value: filterValue(elemObj.attributes, "value")
        },
        {
          key: "type",
          value: filterValue(elemObj.attributes, "type")
        }
      ],
      children: elemObj.children || []
    }),
    button: mcaEleObj => ({
      type: "element",
      tagName: "mca-button",
      attributes: [
        {
          key: "class",
          value: filterValue(mcaEleObj.attributes, "class")
        }
      ],
      children: mcaEleObj.children
    })
  };

  function transformMcaToHtml(json) {
    return json.map(function(elemObj) {
      if (elemObj.hasOwnProperty("children")) {
        elemObj.children = transformMcaToHtml(elemObj.children);
      }

      if (elemObj.type === "element" && elemObj.tagName.includes("mca-")) {
        var mcaToHtml = mcaToHtmlMap[elemObj.tagName](elemObj);
        return mcaToHtml;
      }

      return elemObj;
    });
  }

  function transformHtmlToMca(json) {
    return json.map(function(elemObj) {
      if (elemObj.hasOwnProperty("children")) {
        elemObj.children = transformHtmlToMca(elemObj.children);
      }

      if (
        elemObj.type === "element" &&
        (elemObj.tagName.includes("input") ||
          elemObj.tagName.includes("button"))
      ) {
        var htmlToMca = HtmlToMcaMap[elemObj.tagName](elemObj);
        return htmlToMca;
      }

      return elemObj;
    });
  }

  // combination functions to remove whitespace from template
  function removeEmptyNodes(nodes) {
    return nodes.filter(node => {
      if (node.type === "element") {
        node.children = removeEmptyNodes(node.children);
        return true;
      }
      return node.content.length;
    });
  }

  function stripWhitespace(nodes) {
    return nodes.map(node => {
      if (node.type === "element") {
        node.children = stripWhitespace(node.children);
      } else {
        node.content = node.content.trim();
      }
      return node;
    });
  }

  function removeWhitespace(nodes) {
    return removeEmptyNodes(stripWhitespace(nodes));
  }

  $(document).on('click', 'button', function(e) {
    e.preventDefault();
  });

  // explicitly return public methods when this object is instantiated
  return {
    init: init
  };
})(window);

EjsBuilder.init();
