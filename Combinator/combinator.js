function applyCombinedStyles(element, predefinedClasses) {
    var combinedStyles = {};
    var styleSheet = document.styleSheets[0]; // Assumes the first stylesheet in the document

    predefinedClasses.forEach(className => {
      var classRule = styleSheet.cssRules.find(rule => rule.selectorText === '.' + className);
      if (classRule && classRule.style) {
        for (var i = 0; i < classRule.style.length; i++) {
          var prop = classRule.style[i];
          combinedStyles[prop] = classRule.style.getPropertyValue(prop);
        }
      }
    });

    Object.assign(element.style, combinedStyles);
  }

  // Usage: Apply combined styles to the div
  var myDiv = document.getElementById("myDiv");
  var predefinedClasses = ["Centre", "Bg", "Disp"];
  applyCombinedStyles(myDiv, predefinedClasses);