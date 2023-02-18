titleCover.init = () => {
	log(null, 'start fn ------------------> titleCover.init')
//    globalThis.$html = document.getElementsByTagName('html')[0];
//
//    //custom body
//    globalThis.$body = document.body;
//
//    // get Saba Publisher container [MUST BE FIRST]
//    globalThis.$pageDiv = document.getElementById("pageDIV");

		
	
	
	let $courseCoverContent = document.getElementById('pageDIV').children
    log(null, $courseCoverContent);

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
	log(null, 'End fn ||    > titleCover.init')
    return
}

/*	===================================================================================	*/

titleCover.fill = () => {
	log(null, 'start fn ------------------> titleCover.fill')
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
    log(null, 'End fn ||    > titleCover.fill')
    return
}

/*	===================================================================================	*/

titleCover.clean = () => {
	log(null, 'start fn ------------------> titleCover.clean')
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
	log(null, 'End fn ||    > titleCover.clean')
return
}

/*	===================================================================================	*/

titleCover.format = () => {
//export const formatTitleCover = () => {
    log(null, 'FN STARTED > titleCover.Format')
    titleCover.init()
    titleCover.clean()
    titleCover.fill()
	log(null, 'FN ENDED > titleCover.Format')
	return
}
