cover.formatPage = ($coverPage) => {
	log(null, $coverPage, 'start fn ------------------> cover.formatPage + $coverPage')
    // Hide Section and Page names
    $sectionName.style.display = 'none';
    $pageName.style.display = 'none';

    let $coverPageText = $coverPage.innerText;
//    $coverPage.parentElement.innerHTML = `<h1>${$coverPage.innerText}</h1>`;
//    $coverPage.parentElement.innerHTML = `<h1>${$coverPage.innerText}</h1>`;
    $coverPage.parentElement.innerHTML = `<div class = 'coverPage'>${$coverPage.innerText}</div>`;
//    $coverPage.parentElement.innerHTML = `<div>${$coverPage.innerText}</div>`;
//    $pageDiv.classList.remove('align-content-start');
    $pageDiv.classList.remove('justify-content-between');
//    $pageDiv.classList.add('align-items-center', 'justify-content-center', 'text-center');
    $pageDiv.classList.add('align-items-center', 'justify-content-center');


    // styling cover page here


    //    $pageDiv.classList.add('d-flex', 'justify-content-center', 'align-items-center');
    //    $coverPage.innerHTML = $coverPageText;


        log(null, '$coverPage title = ', $coverPage.innerText);

    //    let $coverPageElements = $pageDiv.querySelectorAll('div');
    //    let $coverPageTitle = $pageDiv.querySelector('.coverPage');
    //    log(null, '$coverPageElements = ', $coverPageElements[0].children[0].children[0].children[0].innerText);
    //    log(null, '$coverPageElements = ', $coverPageElements[0].innerText);
    //    log(null, '$coverPageElements = ', $coverPageElements.innerText);
    //    add this class name =>    text-capitalize

    // will check instead for a coverPage class name added to the elements then call the cover page function
    //    log(null, 'HERE is cover page function and the given parameter is ');

}

/*	===================================================================================	*/

cover.initTitleCover = () => {
	log(null, 'start fn ------------------> cover.initTitleCover')
//    globalThis.$html = document.getElementsByTagName('html')[0];
//
//    //custom body
//    globalThis.$body = document.body;
//
//    // get Saba Publisher container [MUST BE FIRST]
//    globalThis.$pageDiv = document.getElementById("pageDIV");

    
    let $courseCoverContent = document.getElementById('pageDIV').children;
//    log(null, $courseCoverContent);

//    globalThis.$toc = document.querySelector('[title="TOC"]');
//	 langToggle.extractTOC(lang)
	 langToggle.extractTOC()


    /*Define arrays*/
	//20230118 > initiated in (extractTOC)
//   globalThis.full_toc = langToggle.getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = reuse.filter_itemType(full_toc, "title");
//    log(null, full_toc, 'full_toc');
    log(null, filteredTitle, 'filteredTitle');
    
    // This will be injected to write the text statement for the bilingual course intro page
//    log(null, 'EN MODULE NAME', full_toc[filteredTitle[0]].name);
//    log(null, 'FR MODULE NAME', full_toc[filteredTitle[1]].name);
    
    globalThis.enTitle = full_toc[filteredTitle[0]].name;
    globalThis.frTitle = full_toc[filteredTitle[1]].name;
    
    globalThis.enLink = full_toc[filteredTitle[0]].link;
    globalThis.frLink = full_toc[filteredTitle[1]].link;
    

    
    $toc.classList.add('d-none');
//    $courseCoverContent[0].remove();
//    $courseCoverContent[0].remove();
    
    return
}

/*	===================================================================================	*/

cover.fillTitleCover = () => {
	log(null, 'start fn ------------------> cover.fillTitleCover')
    log(null, enTitle, 'enTitle');
    log(null, frTitle, 'frTitle');

    log(null, enLink, 'enLink');
    log(null, frLink, 'frLink');
    
    $pageDiv.classList.add('pt-5');
//
//
    globalThis.$courseCover = document.createElement('div');
    $courseCover.id = 'courseCover';
    $courseCover.classList.add('py-5', 'px-5');
    
    
    
    globalThis.$courseTitleGroup = document.createElement('div');
    $courseTitleGroup.id = 'courseTitleGroup';
    $courseTitleGroup.innerHTML = 
                                    `
                                    <div class = 'courseTitle py-3'>${enTitle}</div>
                                    <div class = 'courseTitle py-3'>${frTitle}</div>
                                    `
//    $pageDiv.appendChild($courseTitleGroup);
    $courseCover.appendChild($courseTitleGroup);
    
    globalThis.$courseButtonGroup = document.createElement('div');
    $courseButtonGroup.id = 'courseButtonGroup';
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
                                    `;
    
    
//    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
//    $courseButtonGroup.innerHTML = `<btn onclick = "window.location='trivExitPage(${enLink}, true)'" type = 'button' role = 'button' class = 'courseTitle'>${enTitle}</btn>`
    $courseCover.appendChild($courseButtonGroup);
    
    
    $pageDiv.appendChild($courseCover);
    
    const $start_en = document.getElementById('start_en');
    const $start_fr = document.getElementById('start_fr');
    
    $start_en.addEventListener('click', function() {
        trivExitPage(enLink, true);
    });
    
    $start_fr.addEventListener('click', function() {
        trivExitPage(frLink, true);
    });
    
    return
}

/*	===================================================================================	*/

cover.cleanTitleCover = () => {
	log(null, 'start fn ------------------> cover.cleanTitleCover')
    cleanupDOM();
    
    let cleanOG = $pageDiv.querySelector('[id^=og]');
    $hiddenCollection.appendChild(cleanOG);

	/*
	*/
	//RENAMED
	/*
	*/
	format_DOM_base();
    
//    $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
//    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap', 'justify-content-between' );
    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' );
//    $pageDiv.classList.add( 'justify-content-around' );
return
}

/*	===================================================================================	*/

cover.formatTitleCover = () => {
//export const formatTitleCover = () => {
    log(null, 'start fn ------------------> cover.formatTitleCover')
    cover.initTitleCover();
    cover.cleanTitleCover();
    cover.fillTitleCover();
	return
}
