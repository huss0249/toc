//function fadeOut(el, speed) {
//    document.getElementById(el).style.opacity = "1";
//    let currentOpacity = 1;
//    let loop = setInterval(function () {
//        currentOpacity = parseFloat(document.getElementById(el).style.opacity);
//        if (currentOpacity === 0) {
//            clearInterval(loop);
//            document.getElementById(el).style.display = "none";
//        } else {
//            newOpacity = currentOpacity - 0.1;
//            currentOpacity = newOpacity;
//            document.getElementById(el).style.opacity = newOpacity;
//
//        }
//
//    }, speed);
//
//}
//window.onload = function () {
//    fadeOut('preloaderhtml', 50);
//    init();
//}
