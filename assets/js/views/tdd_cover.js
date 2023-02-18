import * as reuse from '../tdd_reusable.js'


export const formatCoverPage = ($coverPage) => {
    log('log', 'start fn ------------------> formatCoverPage');

    // Hide Section and Page names
    $sectionName.style.display = 'none';
    $pageName.style.display = 'none';

    let $coverPageText = $coverPage.innerText;

	$coverPage.parentElement.innerHTML = `<div class = 'coverPage'>${$coverPage.innerText}</div>`;

	$pageDiv.classList.remove('justify-content-between');
//    $pageDiv.classList.add('align-items-center', 'justify-content-center', 'text-center');
    $pageDiv.classList.add('align-items-center', 'justify-content-center');


    // styling cover page here


    //    $pageDiv.classList.add('d-flex', 'justify-content-center', 'align-items-center');
    //    $coverPage.innerHTML = $coverPageText;

    
        log('log', $coverPage.innerText, '$coverPage title');
    
}

/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
export const init_CourseCoverPage = () => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            - Called from Course Title Cover
    RETURN:
            - Formats the page
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */

//    globalThis.$html = document.getElementsByTagName('html')[0];

    //custom body
//    globalThis.$body = document.body;

    // get Saba Publisher container [MUST BE FIRST]
//    globalThis.$pageDiv = document.getElementById("pageDIV");

    
//    console.log('formatCourseCoverPage');
    let $courseCoverContent = document.getElementById('pageDIV').children;
//    console.log($courseCoverContent);

    globalThis.$toc = document.querySelector('[title="TOC"]');

    /*Define arrays*/
	//20230118 > initiated in (extractTOC)
//    globalThis.full_toc = getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = reuse.filter_itemType(full_toc, "title");
    log('log', full_toc, 'full_toc');
    log('log', filteredTitle, 'filteredTitle');
    
    // This will be injected to write the text statement for the bilingual course intro page
//    console.log('EN MODULE NAME', full_toc[filteredTitle[0]].name);
//    console.log('FR MODULE NAME', full_toc[filteredTitle[1]].name);
    
    globalThis.enTitle = full_toc[filteredTitle[0]].name;
    globalThis.frTitle = full_toc[filteredTitle[1]].name;
    
    globalThis.enLink = full_toc[filteredTitle[0]].link;
    globalThis.frLink = full_toc[filteredTitle[1]].link;
    

    
    $toc.classList.add('d-none');
//    $courseCoverContent[0].remove();
//    $courseCoverContent[0].remove();
    

}





export const fill_CourseCoverPage = () => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            - Called from 
    RETURN:
            - Clears pagediv children and prepare to fill
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    log('log', enTitle, 'enTitle');
    log('log', frTitle, 'frTitle');

    log('log', enLink, 'enLink');
    log('log', frLink, 'frLink');
    
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

	$courseButtonGroup.innerHTML = 
                                    `
                                    <button id = 'start_en' type='button' role='button' class='btn btn-dark'>${tdd_dictionary.core.cover.buttons.en}</button>
                                    <button id = 'start_fr' type='button' role='button' class='btn btn-primary'>${tdd_dictionary.core.cover.buttons.fr}</button>
                                    `;
    
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
    
    
}




export const clean_CourseCoverPage = () => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            - Called from 
    RETURN:
            - Clears pagediv children and prepare to fill
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    cleanupDOM();
    
    let cleanOG = $pageDiv.querySelector('[id^=og]');
    
	$hiddenCollection.appendChild(cleanOG);
    
	format_DOM_base();
    
    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' );
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
export const formatCourseCoverPage = () => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            - Called from Course Title Cover
    RETURN:
            - Formats the page
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */


    /*__________________________________________
      USAGE: format cover page automatically 
      INPUT:  
      RETURN: 
      ------------------------------------------
    */
	log(null, "Call from Cover")
    
    init_CourseCoverPage();
    clean_CourseCoverPage();
    fill_CourseCoverPage();
    
   
    
}