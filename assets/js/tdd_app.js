/*!
===================================================================================
* Script: formatDOM v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================

*/



/*	===================================================================================	*/



/*	===================================================================================	*/

globalThis.cleanupDOM = () => {
//    globalThis.$hiddenCollection = document.createElement('div');
//    $hiddenCollection.id = 'hiddenCollection';
//    $hiddenCollection.style.display = 'none';
//    $body.appendChild($hiddenCollection);
//
//    tdd.lib.Hide_items('.invisible', $hiddenCollection, false);
//
//    let cleanTOC = $pageDiv.querySelector('[id^=ctoc]');
//
//    $hiddenCollection.appendChild(cleanTOC);

	
//    $hiddenElements.style.display = 'none';
    $body.appendChild($hiddenElements);

    tdd.lib.Hide_items('.invisible', $hiddenElements, false);

    let cleanTOC = $pageDiv.querySelector('[id^=ctoc]');
    $hiddenElements.appendChild(cleanTOC);

    //  tdd.lib.Hide_items('[id^=og]', $hiddenCollection, false);
    //  tdd.lib.Hide_items('[id^=shape]', $hiddenCollection, true);

}



/*	===================================================================================	*/

globalThis.modifyDOM = (lang) => {
	// console.warn('Hi from modifyDOM')
	info('Hi from modifyDOM')
//	globalThis.titleLanguage = VarAICC_Student_Language.getValue()
//    titleLanguage ? console.log('titleLanguage', titleLanguage) : ''
	
    if (lang) {
        currentLanguage = lang;
    }
    myArr = [];

/*
RENAMED ||||||||||||||||||||||	>	init.DOM = () => {	
*/
    tdd.init.appGlobalElements();

//    extractTOC();
//    tdd.langToggle.extractTOC(lang)
	
	// Need to call TOC functions here
	tdd.toc.build(lang)
	
	info('STOP HERE form modify DOM after toc.build ========================================================')
    
    tdd.init.Layout();
    
    //    tdd.init.modal_options();
    tdd.modal.build_options();
    
    //    tdd.init.modal_menu();
    tdd.modal.build_menu();
    
    tdd.init.exit();
    
    //    saba.removeCssFile();
    
	info('before cleanup')
    cleanupDOM();

//    saba.disableSabaFunctions();

    
	//CONTENT NOW
//	tdd.init.Content();


//    is.useHTML5Video = () => supports_h264_baseline_video()
//    is.useHTML5Audio = () => !!document.createElement('audio').canPlayType

    //START LISTENING TO EVENTS
    tdd.event.init();
    trace('from app')
    //  $hiddenCollection.remove();
//	log(null, 'FN ENDED > modifyDOM')
	return
}
//modifyDOM();
// alert('HI from APP')
trace('HI from APP')