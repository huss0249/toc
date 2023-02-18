import * as reuse from './tdd_reusable.js';

/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//checked
//let getTOC = (obj) => {
export let getTOC = (obj) => {
	    /*
    ======================================================
    USAGE:
            - GET Table of content from dropDown list
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> getTOC');
	
    let arr = [];

    /*Define obj Keys*/
    let itemIndex, itemRawText, itemText, itemLink, itemSelected, itemLevel, itemType;

    /*Fill the main array*/
    /*Started i from 1 to remove the first unit item from array*/
    for (let i = 1; i < obj.children.length; i++) {
        itemIndex = i - 1;
        itemRawText = obj.children[i].innerHTML;
        itemText = itemRawText.split("&nbsp;&nbsp;").join("");
        itemLink = obj.children[i].getAttribute("value");
        itemSelected = obj.children[i].getAttribute("selected");

        /*Get the current Page Index*/
        itemSelected !== null ? itemSelected = 1 : itemSelected = 0;

        /*Get list item level*/
        itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1;

        /*Set Type*/
        itemLevel === 0 ? itemType = "unit" : ''
        itemLevel === 1 ? itemType = "title" : ''
        itemLevel === 2 ? itemType = "module" : ''
        itemLevel === 3 ? itemType = "page" : ''

        /*Push obj to array*/
        arr.push({
//            index: itemIndex,
            name: itemText,
            link: itemLink,
            active: itemSelected,
            level: itemLevel,
            type: itemType,
//            moduleNumber: '',
//            pageGlobal: '',
//            pageLocal: ''
        });
    }

	const maxLevel = Math.max(...arr.map(o => o.level))
//	log(null, maxLevel, "maxLevel")
	
	for (const item of arr) {
		item.level === maxLevel ? item.type = 'page' : ''
//        log(null, item.type, "item Level")
    }

    return arr;
};


//let current_page_status = (lang_key, chapter_pages, page_in_chapter) => {
export let current_page_status = (lang_key, chapter_pages, page_in_chapter) => {
    const _current_page_index = page_in_chapter.value -1;
    
    const _chapter_pages = chapter_pages.value;

    let target_page_index = parseInt(_current_page_index);

    let togglePageLink = pages_links[target_page_index];
    
    if (lang_key === 'en') {
        trivExitPage(togglePageLink, true);
    } else if (lang_key === 'fr') {
        target_page_index = parseInt(_current_page_index) + parseInt(_chapter_pages);
        togglePageLink = pages_links[target_page_index];
        trivExitPage(togglePageLink, true);
    }
}




//
/*
=====================================================
IF EN
current_page_status('fr', VarPagesInChapter, VarPageInChapter);
=====================================================
*/
//
//checked
//globalThis.extractTOC = (lang_key) => {
export const extractTOC = (lang_key) => {
    /*
    ======================================================
    USAGE:
            - Extract Table of content
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> extractTOC');
    log('log', 'start fn ------------------> extractTOC');
	
    // TABLE OF CONTENT DROP LIST
    globalThis.$toc = document.querySelector('[title="refTOC"]');
//	log(null, JSON.stringify($toc, null, ' '), 'tdd_lang_toggle.js >>> extract TOC >> $toc');
	/*
	    globalThis.$toc = document.querySelector('[title="TOC"]');
    $toc.classList.add('toc');
	*/

    /*Define arrays*/
    globalThis.full_toc = getTOC($toc);
//    log(null, JSON.stringify(full_toc, null, ' '), 'tdd_lang_toggle.js >>> extract TOC >> full_toc');
	
	/*
	======================================================
	// Filter the titles to get number of titles
    globalThis.filteredTitle = reuse_filter_itemType(full_toc, "title");

    globalThis.isBilingual = checkTOC(filteredTitle, full_toc);

    //Prepare TOC based on current language
    globalThis.en_toc = full_toc.slice(filteredTitle[0], filteredTitle[1]);
    globalThis.fr_toc = full_toc.slice(filteredTitle[1], filteredTitle[2]);
    globalThis.popup_toc = full_toc.slice(filteredTitle[2], -1);

//    console.log('en_toc = ', en_toc);
//    console.log('en_toc Length = ', en_toc.length);
//    console.log('fr_toc = ', fr_toc);
//    console.log('fr_toc Length = ', fr_toc.length);
    //    alert('popup_toc = ' + JSON.stringify(popup_toc[0].name));

    processTOC(en_toc, fr_toc);

    globalThis.targetArr = [];

    // BASED ON LANGUAGE BOTH BELOW WORK
    // targetArr = [...window[currentLanguage + 'Modules']];
    targetArr = [...eval(currentLanguage + 'Modules')];
    return createNavTOC(targetArr);
	======================================================
	*/
	
    globalThis.full_pages = full_toc.filter(x => x.type === "page");
//    log(null, JSON.stringify(full_pages, null, ' '), 'tdd_lang_toggle.js >>> extract TOC >> full pages');

    globalThis.pages_links = full_pages.map(p => p.link);
//    log(null, JSON.stringify(pages_links, null, ' '), 'tdd_lang_toggle.js >>> extract TOC pages links');
}
