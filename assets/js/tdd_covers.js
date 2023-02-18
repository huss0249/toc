/*!
===============================================================
* Script: tdd.covers v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2023
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===============================================================
===============================================================
*/

/*
=======================================================	Title
*/
tdd.covers.init_title = () => {
	log(null, 'start fn ------------------> init_title')
//    globalThis.$html = document.getElementsByTagName('html')[0];
//
//    //custom body
//    globalThis.$body = document.body;
//
//    // get Saba Publisher container [MUST BE FIRST]
//    globalThis.$pageDiv = document.getElementById("pageDIV");

		
	
	
	let $courseCoverContent = document.getElementById('pageDIV').children
    log(null, $courseCoverContent, '$courseCoverContent');

//    globalThis.$toc = document.querySelector('[title="TOC"]');
//	 langToggle.extractTOC(lang)
//	 tdd.langToggle.extractTOC()


    /*Define arrays*/
	//20230118 > initiated in (extractTOC)
//   globalThis.full_toc = langToggle.getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = tdd.lib.filter_itemType(full_toc, "title")
//    log(null, full_toc, 'full_toc');
    log(null, filteredTitle, 'filteredTitle')
    
    // This will be injected to write the text statement for the bilingual course intro page
//    log(null, 'EN MODULE NAME', full_toc[filteredTitle[0]].name);
//    log(null, 'FR MODULE NAME', full_toc[filteredTitle[1]].name);
    
    globalThis.enTitle = full_toc[filteredTitle[0]].name
    globalThis.frTitle = full_toc[filteredTitle[1]].name
    
    globalThis.enLink = full_toc[filteredTitle[0]].link
    globalThis.frLink = full_toc[filteredTitle[1]].link
    

    
    $toc.classList.add('d-none')
//    $courseCoverContent[0].remove()
//    $courseCoverContent[0].remove()
	log(null, 'End fn ||    > init_title')
    return
}

/*	===================================================================================	*/

tdd.covers.fill_title = () => {
	log(null, 'start fn ------------------> fill_title')
    log(null, enTitle, 'enTitle')
    log(null, frTitle, 'frTitle')

    log(null, enLink, 'enLink')
    log(null, frLink, 'frLink')
    
    $pageDiv.classList.add('pt-5')
//
//
    globalThis.$courseCover = document.createElement('div')
    $courseCover.id = 'courseCover'
    $courseCover.classList.add('py-5', 'px-5')
    
    
    
    globalThis.$courseTitleGroup = document.createElement('div')
    $courseTitleGroup.id = 'courseTitleGroup'
    $courseTitleGroup.innerHTML = 
                                    `
                                    <div class = 'courseTitle py-3'>${enTitle}</div>
                                    <div class = 'courseTitle py-3'>${frTitle}</div>
                                    `
//    $pageDiv.appendChild($courseTitleGroup);
    $courseCover.appendChild($courseTitleGroup)
    
    globalThis.$courseButtonGroup = document.createElement('div')
    $courseButtonGroup.id = 'courseButtonGroup'
//    $courseButtonGroup.innerHTML = 
//                                    `
//                                    <button onclick='window.location=enLink' type='button' role='button' class='btn btn-dark'>Start EN</button>
//                                    <button onclick='window.location=frLink' type='button' role='button' class='btn btn-primary'>Start FR</button>
//                                    `;
    

//    $courseButtonGroup.innerHTML = 
//                                    `
//                                    <button onclick='window.location=enLink' type='button' role='button' class='btn btn-dark'>${tdd_dictionary.core.cover.buttons.en}</button>
//                                    <button onclick='window.location=frLink' type='button' role='button' class='btn btn-primary'>${tdd_dictionary.core.cover.buttons.fr}</button>
//                                    `;
    
    $courseButtonGroup.innerHTML = 
                                    `
                                    <button id = 'start_en' type='button' role='button' class='btn btn-dark'>${tdd_dictionary.core.cover.buttons.en}</button>
                                    <button id = 'start_fr' type='button' role='button' class='btn btn-primary'>${tdd_dictionary.core.cover.buttons.fr}</button>
                                    `
    
    
//    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
//    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
    $courseCover.appendChild($courseButtonGroup)
    
    
    $pageDiv.appendChild($courseCover)
    
    const $start_en = document.getElementById('start_en')
    const $start_fr = document.getElementById('start_fr')
    
    $start_en.addEventListener('click', function() {
        trivExitPage(enLink, true)
    });
    
    $start_fr.addEventListener('click', function() {
        trivExitPage(frLink, true)
    })
    log(null, 'End fn ||    > fill_title')
    return
}

/*	===================================================================================	*/

tdd.covers.clean_title = () => {
	log(null, 'start fn ------------------> clean_title')
    cleanupDOM()
    
    let cleanOG = $pageDiv.querySelector('[id^=og]')
    $hiddenElements.appendChild(cleanOG)
	
	// WHY IS THIS HERE???
	/*RENAMED ||||||||||||||||||||||	>	format_DOM_base()*/
    tdd.init.styleAppGlobalElements()
    
//    $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
//    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap', 'justify-content-between' );
    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' )
//    $pageDiv.classList.add( 'justify-content-around' );
	log(null, 'End fn ||    > clean_title')
return
}


/*
=======================================================	Cover
*/
//tdd.covers.init_cover = () => {
//	log(null, 'start fn ------------------> init_cover')
////    globalThis.$html = document.getElementsByTagName('html')[0];
////
////    //custom body
////    globalThis.$body = document.body;
////
////    // get Saba Publisher container [MUST BE FIRST]
////    globalThis.$pageDiv = document.getElementById("pageDIV");
//
//		
//	
//	
//	let $courseCoverContent = document.getElementById('pageDIV').children
//    log(null, $courseCoverContent);
//
////    globalThis.$toc = document.querySelector('[title="TOC"]');
////	 langToggle.extractTOC(lang)
////	 tdd.langToggle.extractTOC()
//
//
//    /*Define arrays*/
//	//20230118 > initiated in (extractTOC)
////   globalThis.full_toc = langToggle.getTOC($toc);
//
//    // Filter the titles to get number of titles
//    globalThis.filteredTitle = tdd.lib.filter_itemType(full_toc, "title")
////    log(null, full_toc, 'full_toc');
//    log(null, filteredTitle, 'filteredTitle')
//    
//    // This will be injected to write the text statement for the bilingual course intro page
////    log(null, 'EN MODULE NAME', full_toc[filteredTitle[0]].name);
////    log(null, 'FR MODULE NAME', full_toc[filteredTitle[1]].name);
//    
//    globalThis.enTitle = full_toc[filteredTitle[0]].name
//    globalThis.frTitle = full_toc[filteredTitle[1]].name
//    
//    globalThis.enLink = full_toc[filteredTitle[0]].link
//    globalThis.frLink = full_toc[filteredTitle[1]].link
//    
//
//    
//    $toc.classList.add('d-none')
////    $courseCoverContent[0].remove()
////    $courseCoverContent[0].remove()
//	log(null, 'End fn ||    > init_cover')
//    return
//}

/*	===================================================================================	*/

//tdd.covers.fill_cover = () => {
//	log(null, 'start fn ------------------> fill_cover')
//    log(null, enTitle, 'enTitle')
//    log(null, frTitle, 'frTitle')
//
//    log(null, enLink, 'enLink')
//    log(null, frLink, 'frLink')
//    
//    $pageDiv.classList.add('pt-5')
////
////
//    globalThis.$courseCover = document.createElement('div')
//    $courseCover.id = 'courseCover'
//    $courseCover.classList.add('py-5', 'px-5')
//    
//    
//    
//    globalThis.$courseTitleGroup = document.createElement('div')
//    $courseTitleGroup.id = 'courseTitleGroup'
//    $courseTitleGroup.innerHTML = 
//                                    `
//                                    <div class = 'courseTitle py-3'>${enTitle}</div>
//                                    <div class = 'courseTitle py-3'>${frTitle}</div>
//                                    `
////    $pageDiv.appendChild($courseTitleGroup);
//    $courseCover.appendChild($courseTitleGroup)
//    
//    globalThis.$courseButtonGroup = document.createElement('div')
//    $courseButtonGroup.id = 'courseButtonGroup'
////    $courseButtonGroup.innerHTML = 
////                                    `
////                                    <button onclick='window.location=enLink' type='button' role='button' class='btn btn-dark'>Start EN</button>
////                                    <button onclick='window.location=frLink' type='button' role='button' class='btn btn-primary'>Start FR</button>
////                                    `;
//    
//
////    $courseButtonGroup.innerHTML = 
////                                    `
////                                    <button onclick='window.location=enLink' type='button' role='button' class='btn btn-dark'>${tdd_dictionary.core.cover.buttons.en}</button>
////                                    <button onclick='window.location=frLink' type='button' role='button' class='btn btn-primary'>${tdd_dictionary.core.cover.buttons.fr}</button>
////                                    `;
//    
//    $courseButtonGroup.innerHTML = 
//                                    `
//                                    <button id = 'start_en' type='button' role='button' class='btn btn-dark'>${tdd_dictionary.core.cover.buttons.en}</button>
//                                    <button id = 'start_fr' type='button' role='button' class='btn btn-primary'>${tdd_dictionary.core.cover.buttons.fr}</button>
//                                    `
//    
//    
////    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
////    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
//    $courseCover.appendChild($courseButtonGroup)
//    
//    
//    $pageDiv.appendChild($courseCover)
//    
//    const $start_en = document.getElementById('start_en')
//    const $start_fr = document.getElementById('start_fr')
//    
//    $start_en.addEventListener('click', function() {
//        trivExitPage(enLink, true)
//    });
//    
//    $start_fr.addEventListener('click', function() {
//        trivExitPage(frLink, true)
//    })
//    log(null, 'End fn ||    > fill_cover')
//    return
//}

/*	===================================================================================	*/

//tdd.covers.clean_cover = () => {
//	log(null, 'start fn ------------------> clean_cover')
//    cleanupDOM()
//    
//    let cleanOG = $pageDiv.querySelector('[id^=og]')
//    $hiddenElements.appendChild(cleanOG)
//	
//	// WHY IS THIS HERE???
//	/*RENAMED ||||||||||||||||||||||	>	format_DOM_base()*/
//    tdd.init.styleAppGlobalElements()
//    
////    $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
////    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap', 'justify-content-between' );
//    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' )
////    $pageDiv.classList.add( 'justify-content-around' );
//	log(null, 'End fn ||    > clean_cover')
//return
//}

/*	===================================================================================	*/

tdd.covers.buildTitle = () => {
    log(null, 'FN STARTED > buildTitle')
    tdd.covers.init_title()
    tdd.covers.clean_title()
    tdd.covers.fill_title()
	log(null, 'FN ENDED > buildTitle')
	return
}

/*	===================================================================================	*/

//tdd.covers.buildCover = () => {
//    log(null, 'FN STARTED > buildCover')
//    tdd.covers.init_cover()
//    tdd.covers.clean_cover()
//    tdd.covers.fill_cover()
//	log(null, 'FN ENDED > buildCover')
//	return
//}