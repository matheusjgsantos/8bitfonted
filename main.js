var el = document.getElementById("main"),
    two = new Two({ 
        fullscreen: true
    });
 
two.appendTo(el);

var workingArea = two.makeRectangle(10,10,100,100);
workingArea.fill = "#881111";

two.update();
