/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let disableSabaFunctions = () => {
export let disableSabaFunctions = () => {
    /*
    ======================================================
    USAGE:
            - DISABLE SABA FUNCTIONS
    INPUT:
            - N/A
    RETURN:
            - N/A
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
log(null, 'START fn ------------------> disableSabaFunctions')
    

    //    window.findWH = function() {}
    //    window.ReFlow = function() {}
	
	//	REMOVED SABA EVENTS FROM BODY
$body.removeAttribute("onfocus");
$body.removeAttribute("onresize");

}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.removeCssFile = () => {
export const removeCssFile = () => {
    /*
    ======================================================
    USAGE:
            - REMOVE SABA CSS
    INPUT:
            - N/A
    RETURN:
            - N/A
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */

    

    const cssFile = document.getElementById("TrivDynStyleSheet");
    //  cssFile.remove();
    //    cssFile.parentNode.removeChild(cssFile);
    //    console.log(cssFile);
    /*BOTH SOLUTIONS ABOVE WORK*/
}

