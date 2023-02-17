tdd.covers.title.init = () => {
	log(null, 'start fn ------------------> tdd.covers.title.init')
//    globalThis.$html = document.getElementsByTagName('html')[0];
//
//    //custom body
//    globalThis.$body = document.body;
//
//    // get Saba Publisher container [MUST BE FIRST]
//    globalThis.$pageDiv = document.getElementById("pageDIV");

	
	
	
	/*
	const tlb = VAR(AICC_Student_Language).getValue()
    tlb != undefined ? console.log('tlb ', tlb) : console.log('tL b  NOT FOUND')
	
	const tlc = AICC_Student_Language.getValue()
    tlc != undefined ? console.log('tlc ', tlc) : console.log('tL c  NOT FOUND')
	
	const tld = parent.AICC_Student_Language.getValue()
    tld != undefined ? console.log('tld ', tld) : console.log('tL d  NOT FOUND')
	
	const aaaa = navigator.languages;
    aaaa != undefined ? console.log('aaaa ', aaaa) : console.log('aaaa NOT FOUND')
	

	let bbb = cmi.student_preference.language
	bbb != undefined ? console.log('bbb ', bbb) : console.log('bbb NOT FOUND')
    
	let ccc = cmi.core.student_name
	ccc != undefined ? console.log('ccc ', ccc) : console.log('ccc NOT FOUND')
    
	const eee = LMSGetValue(cmi.student_preference.language)
    eee != undefined ? console.log('eee ', eee) : console.log('eee NOT FOUND')
	
	const tl = VarAICC_Student_Language.getValue()
    tl != undefined ? console.log('tl ', tl) : console.log('tL  NOT FOUND')
	*/
	
	
	
	
	
	
	
	
	let $courseCoverContent = document.getElementById('pageDIV').children
//    log(null, $courseCoverContent);

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
	log(null, 'End fn ||    > tdd.covers.title.init')
    return
}

/*	===================================================================================	*/

tdd.covers.title.fill = () => {
	log(null, 'start fn ------------------> tdd.covers.title.fill')
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
    log(null, 'End fn ||    > tdd.covers.title.fill')
    return
}

/*	===================================================================================	*/

tdd.covers.title.clean = () => {
	log(null, 'start fn ------------------> tdd.covers.title.clean')
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
	log(null, 'End fn ||    > tdd.covers.title.clean')
return
}

/*	===================================================================================	*/

tdd.covers.title.format = () => {
//export const formatTitleCover = () => {
    log(null, 'FN STARTED > tdd.covers.title.Format')
    tdd.covers.title.init()
    tdd.covers.title.clean()
    tdd.covers.title.fill()
	log(null, 'FN ENDED > tdd.covers.title.Format')
	return
}
