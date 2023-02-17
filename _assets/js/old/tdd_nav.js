import * as reuse from './tdd_reusable.js';

/*!
===================================================================================
* Script: format TOC v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
TO DO:
    - 
===================================================================================
TO FIX:
    - 
===================================================================================
*/


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let createNavTOC = (arr) => {
export let createNavTOC = (arr) => {
    /*
    ======================================================
    USAGE:
            - 
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

    reuse.log(null, 'start fn ------------------> createNavTOC');
    
    myArr = [...arr];
    const $accordion = document.createElement("div");
    $accordion.id = "accordion";
    $accordion.classList.add(`accordion`, 'rounded-0');

    for (let i = 0; i < myArr.length; i++) {
        let $card = document.createElement("div");
        $card.classList.add("card", "rounded-0");

        let $cardHeader = document.createElement("div");
        $cardHeader.classList.add("card-header", "bg-gradient-dark", "p-1");

        let $cardH2 = document.createElement("h2");
        $cardH2.classList.add("mb-0", "d-flex", "justify-content-between");

        let $cardButton = document.createElement("button");
        $cardButton.classList.add("btn", "btn-block", "text-left", "d-flex", "justify-content-between", "rounded-0");

        let $cardCollapse = document.createElement("div");

        for (let j = 0; j < myArr[i].length; j++) {
            if (myArr[i][j].type === "module") {
                $cardHeader.id = `heading${i + 1}`;
                $card.appendChild($cardHeader);

                globalThis.$cardBadge = document.createElement("span");
                $cardBadge.classList.add("badge", "badge-dark", "badge-pill");
                $cardBadge.textContent = `${myArr[i].length - 1}`;

                $cardHeader.appendChild($cardH2);

                for (const [key, value] of Object.entries({
                        type: 'button',
                        'data-toggle': 'collapse',
                        'data-target': `#collapse${i + 1}`,
                        'aria-expanded': 'false',
                        'aria-controls': `collapse${i + 1}`,
                        'data-bs-toggle': 'tooltip',
                        'data-bs-placement': 'top',
                        'title': 'EXPAND / Collapse'
                    })) {
                    $cardButton.setAttribute(key, value);
                }

                $cardButton.textContent = `${myArr[i][j].name}`;
                $cardH2.appendChild($cardButton);
                $cardButton.appendChild($cardBadge);

                $cardCollapse.id = `collapse${i + 1}`;
                $cardCollapse.classList.add("collapse");

                for (const [key, value] of Object.entries({
                        'aria-labelledby': `heading${i + 1}`,
                        "data-parent": "#accordion"
                    })) {
                    $cardCollapse.setAttribute(key, value);
                }

                $card.appendChild($cardCollapse);

                globalThis.$cardBody = document.createElement("div");
                $cardBody.classList.add("card-body", "list-group-flush", "p-1");

                $cardCollapse.appendChild($cardBody);
                $accordion.appendChild($card);
            } else if (myArr[i][j].type === "page") {

                let $listItem = document.createElement("a");
                $listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "card-link", "m-0", "p-1", "pl-3");

                $listItem.href = `${myArr[i][j].link}`;

                let dataLink = `${myArr[i][j].link}`;
                $listItem.setAttribute("data-link", dataLink);
                $listItem.style.cursor = 'pointer';
                $listItem.textContent = `${myArr[i][j].name}`;

                /*CAPTURE THE CLICK FROM LIST ITEM*/
                $listItem.addEventListener('click', function (e) {
                    let targetPageLink = e.target.dataset.link;
                    trivExitPage(targetPageLink, true);
                })

                $listItem.addEventListener('mouseover', function () {})

                $listItem.addEventListener('mouseleave', function () {})


                if (myArr[i][j].active) {
                    $cardButton.setAttribute("aria-expanded", "true");
                    $cardButton.classList.toggle("btn-secondary");
                    $cardCollapse.classList.toggle("show");
                    $listItem.classList.toggle("active");
                    $listItem.setAttribute("aria-current", "true");
                }
                $cardBody.appendChild($listItem);
            }
        }
        $navTOC.appendChild($accordion);
    }
};







//globalThis.processTOC = (enArr, frArr) => {
export const processTOC = (enArr, frArr) => {
    /*
    ======================================================
    USAGE:
            - 
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
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> processTOC');
    
    en_toc = [...enArr];
    fr_toc = [...frArr];
    
    reuse.log(null, 'en_toc = ', en_toc);
//    reuse.log(null, 'en_toc Length = ', en_toc.length);
    reuse.log(null, 'fr_toc = ', fr_toc);
//    reuse.log(null, 'fr_toc Length = ', fr_toc.length);

//    globalThis.tmpModules = reuse.filter_itemType(en_toc, "module");
    globalThis.tmp_enModules = reuse.filter_itemType(en_toc, "module");
    globalThis.tmp_frModules = reuse.filter_itemType(fr_toc, "module");
    
    globalThis.enModules = [];
    globalThis.frModules = [];

//    reuse.dev('log', tmp_enModules, 'tmp_enModules');
//    reuse.dev('log', tmp_frModules, 'tmp_frModules');
    
    enModules = reuse.populate_module_pages(en_toc, tmp_enModules);
    frModules = reuse.populate_module_pages(fr_toc, tmp_frModules);
    
    checkMatching(enModules, frModules);
    
//    let p = 0;
//    for (let n = 0; n < tmpModules.length; n++) {
////        enModules[n] = en_toc.slice(tmpModules[n], tmpModules[n + 1]);
////        frModules[n] = fr_toc.slice(tmpModules[n], tmpModules[n + 1]);
//        enModules[n] = en_toc.slice(tmp_enModules[n], tmp_enModules[n + 1]);
//        frModules[n] = fr_toc.slice(tmp_frModules[n], tmp_frModules[n + 1]);
//        
//        reuse.log(null, 'enModules[n] = ', enModules[n]);
//        reuse.log(null, 'enModules[n] Length = ', enModules[n].length);
//        reuse.log(null, 'frModules[n] = ', frModules[n]);
//        reuse.log(null, 'frModules[n] Length = ', frModules[n].length);
//
//        for (let k = 0; k < enModules[n].length; k++) {
//            
//            // What if The number of pages is not matching based on the globale number of pages without the modules?
//            
//            
//            
//            
//            if (enModules[n][k].type === "page") {
//                p = p + 1;
//                enModules[n][k].moduleNumber = n + 1;
//                frModules[n][k].moduleNumber = n + 1;
//
//                enModules[n][k].pageLocal = k;
//                frModules[n][k].pageLocal = k;
//
//                enModules[n][k].pageGlobal = p;
//                frModules[n][k].pageGlobal = p;
//
//                if (enModules[n][k].active) {
//                    frModules[n][k].active = true;
//                    globalThis.activePagePosition = enModules[n][k].pageGlobal;
//                } else if (frModules[n][k].active) {
//                    enModules[n][k].active = true;
//                    globalThis.activePagePosition = frModules[n][k].pageGlobal;
//                }
//            }
//        }
//    }
//    reuse.log(null, 'enModules = ', enModules);
//    reuse.log(null, 'enModules Length = ', enModules.length);
//    reuse.log(null, 'frModules = ', frModules);
//    reuse.log(null, 'frModules Length = ', frModules.length);
    
    return
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let checkTOC = (filtered, arr) => {
export let checkTOC = (filtered, arr) => {
    /*
    ======================================================
    USAGE:
            - Check Table of Content
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
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> checkTOC');
    
    if (filtered.length % 2 == 0) {
        let checkName = arr[filtered.slice(-1)[0]].name;
        if (checkName.toLowerCase() != "popups") {
            return true; // BiLang No POPUPs
        } else {
            return false; // Single and POPUSs
        }
    } else {
        if (filtered.length === 1) {
            return false; // Single No POPUPs
        } else {
            return true; // BiLang and POPUPs
        }
    }
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
/*
let getTOC = (obj) => {
    //
//    ======================================================
//    USAGE:
//            - GET Table of content from dropDown list
//    INPUT:
//            - N/A
//    RETURN:
//            - N/A
//    ======================================================
//    TO DO:
//            -
//    ======================================================
//    TO FIX:
//            -
//    ======================================================
    //
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> getTOC');
    
    let arr = [];

//    Define obj Keys
    let itemIndex, itemRawText, itemText, itemLink, itemSelected, itemLevel, itemType;

//    Fill the main array
//    Started i from 1 to remove the first unit item from array
    for (let i = 1; i < obj.children.length; i++) {
        itemIndex = i - 1;
        itemRawText = obj.children[i].innerHTML;
        itemText = itemRawText.split("&nbsp;&nbsp;").join("");
        itemLink = obj.children[i].getAttribute("value");
        itemSelected = obj.children[i].getAttribute("selected");

//        Get the current Page Index
        itemSelected !== null ? itemSelected = 1 : itemSelected = 0;

//        Get list item level
        itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1;

//        Set Type
        itemLevel === 0 ? itemType = "unit" : ''
        itemLevel === 1 ? itemType = "title" : ''
        itemLevel === 2 ? itemType = "module" : ''
        itemLevel === 3 ? itemType = "page" : ''

//        Push obj to array
        arr.push({
            index: itemIndex,
            name: itemText,
            link: itemLink,
            active: itemSelected,
            level: itemLevel,
            type: itemType,
            moduleNumber: '',
            pageGlobal: '',
            pageLocal: ''
        });
    }
    return arr;
};
*/

/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.extractTOC = () => {
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
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> extractTOC');
    
	/*
	======================================================
	
    // TABLE OF CONTENT DROP LIST
    globalThis.$toc = document.querySelector('[title="TOC"]');
    $toc.classList.add('toc');

    //Define arrays
    globalThis.full_toc = getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = reuse.filter_itemType(full_toc, "title");

    globalThis.isBilingual = checkTOC(filteredTitle, full_toc);

//  Prepare TOC based on current language
    globalThis.en_toc = full_toc.slice(filteredTitle[0], filteredTitle[1]);
    globalThis.fr_toc = full_toc.slice(filteredTitle[1], filteredTitle[2]);
    globalThis.popup_toc = full_toc.slice(filteredTitle[2], -1);

//    reuse.log(null, 'en_toc = ', en_toc);
//    reuse.log(null, 'en_toc Length = ', en_toc.length);
//    reuse.log(null, 'fr_toc = ', fr_toc);
//    reuse.log(null, 'fr_toc Length = ', fr_toc.length);
    //    alert('popup_toc = ' + JSON.stringify(popup_toc[0].name));

    processTOC(en_toc, fr_toc);

    globalThis.targetArr = [];

    // BASED ON LANGUAGE BOTH BELOW WORK
    // targetArr = [...window[currentLanguage + 'Modules']];
    targetArr = [...eval(currentLanguage + 'Modules')];
    return createNavTOC(targetArr);
	
	======================================================
	*/
//}


/*
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
*/



/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.init_pageNumber = () => {
export const init_pageNumber = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_pageNumber');
    

    globalThis.$pageNumber = document.createElement('button');

    $pageNumber.id = 'pageNumber';
    $pageNumber.classList.add('pageNumber');

	//20230118 since pages are on the root
//    $pageNumber.textContent = `${pageInSection} ${tdd_dictionary.core.page_number_spacer[currentLanguage]} ${sectionPages}`;
    $pageNumber.textContent = `${pageInChapter} ${tdd_dictionary.core.page_number_spacer[currentLanguage]} ${chapterPages}`;

    $pageNumber.setAttribute('type', 'button');
    $pageNumber.setAttribute('role', 'button');

    $pageNumber.setAttribute("data-toggle", "modal");
    $pageNumber.setAttribute("data-target", ".modal_menu");
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_pageNav = () => {
export let init_pageNav = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_pageNav');
    

    // page Nav
    globalThis.$pageNav = document.createElement("div");
    $pageNav.id = 'pageNav';

    $pageNav.classList.add('btn-group');
    $pageNav.setAttribute('role', 'group');
    $pageNav.setAttribute('aria-label', 'Page Navigation');

    extract_pageNav_children()

    cleanup_pageNav()

    init_pageNumber()

    $pageNav.appendChild($pagePrevious);
    $pageNav.appendChild($pageNumber);
    $pageNav.appendChild($pageNext);
    //  $pageNav.appendChild($exit);

    reuse.remove_Style_multiple($pageNav.children, ['position', 'left', 'top']);

    $pageNext.classList.add('btn', 'btn-sm', 'btn-secondary');
    $pagePrevious.classList.add('btn', 'btn-sm', 'btn-secondary');
    $pageNumber.classList.add('btn', 'btn-sm', 'btn-dark');
    //  $exit.classList.add('btn', 'btn-sm', 'btn-danger');

    $pageNav.classList.add('d-flex', 'py-0');

    $nav_bar.prepend($pageNav);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.init_navOptions = () => {
export const init_navOptions = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_navOptions');
    

    globalThis.$navOptions = document.createElement("div");

    $navOptions.id = 'navOptions';
    $navOptions.classList.add('btn-group', 'btn-group-sm', 'btn-block');
    $navOptions.setAttribute("aria-label", "Course Options");
    $navOptions.setAttribute("role", "group");


    globalThis.nestedPath = tdd_dictionary.labels.modal_options;

    globalThis.navOptions = reuse.getNestedArr(currentLanguage, nestedPath, false);
    globalThis.navOptions_names = reuse.getNestedArr(currentLanguage, nestedPath, true);
    globalThis.navOptions_icons = reuse.getNestedArr('icon', nestedPath, true);

    let option_text = '';
    let option_icon = '';

    for (let i = 0; i < navOptions.length; i++) {
        let el = document.createElement("button").cloneNode(true);

        el.id = navOptions[i];
        el.setAttribute("title", navOptions[i]);
        el.setAttribute("tooltip", navOptions[i]);
        el.setAttribute("data-toggle", navOptions[i]);
        el.setAttribute("data-placement", 'bottom');
        el.classList.add('btn', 'btn-dark');

        option_text = navOptions_names[i];
        option_icon = '<i class="fa fa-' + navOptions_icons[i] + '"></i>';
        el.innerHTML = `${option_icon} ${option_text}`;
        $navOptions.appendChild(el);
    }
}



/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_Navbar = () => {
export let init_Navbar = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Navbar');
    

    globalThis.$nav = document.createElement("nav");
    globalThis.$nav_bar = document.createElement("div");

    $nav.classList.add('container');
    $nav_bar.id = 'nav_bar';
    $nav_bar.classList.add('container', 'navbar', 'navbar-expand-xs', 'navbar-light', 'shadow', 'rounded-top', 'align-items-center');

    $pageName.classList.add('w-100');
//    $pageName.classList.add('pageName');
    //    $pageName.classList.add('mr-auto');
    /*  To add page nav controls with prepend
        then
        Section name will be prepended to come first
    */
    init_pageNav();

    //  $pageDiv.prepend($pageName);
    $pageDiv.prepend($pageName);
	
	//20230118 no module
//    $nav_bar.prepend($sectionName);
//    $nav_bar.prepend($chapterName);

    $sectionName.classList.add('mr-auto', 'bd-highlight');

    $nav.appendChild($nav_bar);

    $body.insertBefore($nav, $modal_menu);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_Header = () => {
export let init_Header = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Header');
    

    globalThis.$header = document.createElement("header");
    $body.insertBefore($header, $modal_menu);

    init_Brand();
    init_Navbar();
    $header.classList.add('container');
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_Main = () => {
export let init_Main = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Main');
    
    // parent of saba publisher container
    globalThis.$main = document.createElement("main");
    $body.insertBefore($main, $modal_menu);

    $main.classList.add('container', 'flex-shrink-0', 'bg-transparent');
    $main.appendChild($pageDiv);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_modal_menu = () => {
export let init_modal_menu = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_modal_menu');
    

    // LOCATE PAGE NUMBER WITHIN PAGE NAV
    globalThis.$modal_menu_toggle = document.createElement("button");
    $modal_menu_toggle.id = 'modal_menu_toggle';

    globalThis.modal_menu_toggle_icon = document.createElement("span");

    //commented as the button is the page number
    //    $nav_bar.appendChild($modal_menu_toggle);
    globalThis.$modal_menu_dialog = document.createElement("div");
    globalThis.$modal_menu_content = document.createElement("div");

    globalThis.$modal_menu_header = document.createElement("div");
    globalThis.$modal_menu_body = document.createElement("div");
    globalThis.$modal_menu_footer = document.createElement("div");

    globalThis.$modal_menu_title = document.createElement("h1");

    $modal_menu_title.textContent = tdd_dictionary.labels.toc.title[currentLanguage];

    //  $modal_menu_content.classList.add('modal-content', 'rounded-0', 'bg-transparent', 'border-0');
    $modal_menu_content.classList.add('modal-content', 'p-3', 'bg-dark', 'border-0');
    $modal_menu_content.appendChild($modal_menu_title);

    $modal_menu.appendChild($modal_menu_dialog);

    $modal_menu_dialog.classList.add('modal-dialog');
    $modal_menu_dialog.appendChild($modal_menu_content);


    $modal_menu_header.classList.add('modal-header', 'border-0');

    $modal_menu_body.classList.add('modal-body', 'bg-transparent');

    $modal_menu_footer.classList.add('modal-footer', 'border-0');
    $modal_menu_footer.textContent = 'FOOTER MENU HERE';


    $modal_menu_content.appendChild($navTOC);

    $modal_menu_toggle.classList.add('navbar-toggler', 'p-0', 'border-0', 'ml-3');
    $modal_menu_toggle.appendChild(modal_menu_toggle_icon);


    $modal_menu.classList.add('modal', 'modal_menu', 'fade');

    modal_menu_toggle_icon.innerHTML = '<i class="fa fa-bars" aria-hidden="false"></i>';


    $modal_menu_toggle.type = "button";
    $modal_menu_toggle.setAttribute("data-toggle", "modal");
    $modal_menu_toggle.setAttribute("data-target", ".modal_menu");

    $modal_menu.setAttribute("role", "dialog");
    $modal_menu.setAttribute("tabindex", "-1");
    $modal_menu.setAttribute("aria-labelledby", "modal menu");
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let init_exit = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_exit');
    

    globalThis.$exit = document.querySelector(".btn_exit");

    $exit.children[0].innerHTML = ''

    let $exitChild = $exit.children[0];
    $exitChild.className = $exit.className;
    $exit = $exitChild.cloneNode(true);


    $exit.id = 'btn_exit';
    $exit.title = tdd_dictionary.core.navigation_name.exit[currentLanguage];
    $exit.name = tdd_dictionary.core.navigation_name.exit[currentLanguage];
    $exit.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp; ${tdd_dictionary.core.navigation.exit[currentLanguage]}`;


    $nav_bar.appendChild($exit);
    $exit.classList.add('btn', 'btn-sm', 'btn-danger');

    let temp_exit = $pageDiv.querySelector(".btn_exit");
    temp_exit.remove();

    // Hide the exit button for later update
    $exit.style.display = 'none';
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let init_modal_options = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_modal_options');
    

    // LOCATE PAGE NUMBER WITHIN PAGE NAV
    globalThis.$modal_options_toggle = document.createElement("button");
    $modal_options_toggle.id = 'modal_options_toggle';

    globalThis.modal_options_toggle_icon = document.createElement("span");

    $nav_bar.appendChild($modal_options_toggle);

    globalThis.$modal_options_dialog = document.createElement("div");
    globalThis.$modal_options_content = document.createElement("div");

    globalThis.$modal_options_header = document.createElement("div");
    globalThis.$modal_options_body = document.createElement("div");
    globalThis.$modal_options_footer = document.createElement("div");

    globalThis.$modal_options_title = document.createElement("h1");

    $modal_options_title.textContent = tdd_dictionary.labels.toc.title[currentLanguage];

    //  $modal_options_content.classList.add('modal-content', 'rounded-0', 'bg-transparent', 'border-0');
    $modal_options_content.classList.add('modal-content', 'bg-dark', 'p-3');
    $modal_options_content.appendChild($modal_options_title);

    $modal_options.appendChild($modal_options_dialog);

    $modal_options_dialog.classList.add('modal-dialog');
    $modal_options_dialog.appendChild($modal_options_content);


    //  $modal_options_content.classList.add('modal-content');

    $modal_options_header.classList.add('modal-header', 'border-0');

    //  $modal_options_body.classList.add('modal-body', 'bg-transparent');
    $modal_options_body.classList.add('modal-body');

    $modal_options_footer.classList.add('modal-footer', 'border-0');
    $modal_options_footer.textContent = 'FOOTER MENU HERE';


    //  $modal_options_content.appendChild($modal_options_header);
    //  $modal_options_content.appendChild($modal_options_body);
    //  $modal_options_content.appendChild($modal_options_footer);

    //  $modal_options_header.appendChild($navOptions);
    $modal_options_content.appendChild($navOptions);

    $modal_options_toggle.classList.add('navbar-toggler', 'p-0', 'border-0', 'ml-3');
    $modal_options_toggle.appendChild(modal_options_toggle_icon);


    $modal_options.classList.add('modal', 'modal_options', 'fade');

    modal_options_toggle_icon.innerHTML = `<i class="fa fa-cog" aria-hidden="false"></i>&nbsp; ${tdd_dictionary.labels.modal_options_core.button[currentLanguage]}`;


    $modal_options_toggle.type = "button";
    $modal_options_toggle.setAttribute("data-toggle", "modal");
    $modal_options_toggle.setAttribute("data-target", ".modal_options");

    $modal_options.setAttribute("role", "dialog");
    $modal_options.setAttribute("tabindex", "-1");
    $modal_options.setAttribute("aria-labelledby", "modal options");
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let init_footer_nav = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_footer_nav');
    

    
    globalThis.$footer_nav = document.createElement("div");
    $footer_nav.id = 'footer_nav';

    $footerContainer.appendChild($footer_nav);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let init_footer_bar = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_footer_bar');
    

    globalThis.$footer_bar = document.createElement("div");
    $footer_bar.id = 'footer_bar';

    globalThis.$copyright = document.createElement("p");
    $copyright.id = "copyright";
    $copyright.innerHTML = '';

    $footer_bar.appendChild($copyright);
    updateCopyright();

    globalThis.$footer_brand = document.createElement("img");
    $footer_brand.id = 'footer_brand';

    $footer_brand.src = './canada_logo.svg';
    $footer_brand.alt = 'Symbol of the Government of Canada';
    $footer_brand.style.height = '20px';

    $footer_bar.appendChild($footer_brand);

    $footerContainer.appendChild($footer_bar);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let init_Footer = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Footer');
    

    globalThis.$footer = document.createElement("footer");

    globalThis.$footerContainer = document.createElement("div");
    $footerContainer.id = 'footerContainer';
    $footerContainer.classList.add('container');

    $footer.appendChild($footerContainer);

    $body.insertBefore($footer, $modal_menu);

    $footer.classList.add('footer', 'mt-auto', 'py-3');

    init_footer_nav();
    init_footer_bar();
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.init_Layout = () => {
    /*
    ======================================================
    USAGE:
            - 
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
    
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Layout');
    

    //alert('start init layout');
    //reuse.log(null, 'start init layout');
    init_Header();
    init_Main();

    init_navOptions();
    init_Footer();
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.init_Content = () => {
    /*
    ======================================================
    USAGE:
            - Format all elements in page div 
    INPUT:
            - Assignes class names in saba
    RETURN:
            - redirected to the proper function handlers
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> init_Content');
    

    // get elements that id ends with anc
    globalThis.$anchors = $pageDiv.querySelectorAll('[id $= anc]');
    if ($anchors.length > 0) {
        reuse.removeElements($anchors);
        //        reuse.Hide_items('[id $= anc]', $hiddenCollection, false);
    }

    // This will be used for every start page and end page along the title
    let coverPage = '';

    globalThis.$coverPage = $pageDiv.querySelector('.coverPage');

    if ($coverPage != undefined) {
        coverPage = true;
//        formatCoverPage($coverPage);
        
        globalThis.$courseCoverPage = $pageDiv.querySelector('.courseCoverPage');
        if ($courseCoverPage != undefined) {
            formatCourseCoverPage($courseCoverPage);
        } else {
            formatCoverPage($coverPage);
        }
    } else {
        coverPage = false;
        globalThis.$txts = $pageDiv.querySelectorAll('[id ^="text"]');

        globalThis.$divs = $pageDiv.querySelectorAll("div");
        if ($divs.length > 0) {
            formatContent($divs);
        }
    }
}


/*
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
*/


/*!
===================================================================================
* Script: formatDOM v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
TO DO:
    - 
===================================================================================
TO FIX:
    - 
===================================================================================
*/


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let format_DOM_base = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> format_DOM_base');
    

    //    $html.classList.add('custom-bg', 'h-100');
    //    $html.classList.add('custom-bg', 'h-100');
    //    $html.classList.add('multi-repeating-linear', 'h-100');
    $html.classList.add('conic-gradient', 'h-100');
    //    $html.classList.add('stacked-linear', 'h-100');
    //    $html.classList.add('layered-linear', 'h-100');
    //    $html.className = 'custom-bg h-100';

    //  $body.classList.add('noBG', 'd-flex', 'flex-column', 'h-100');
    $body.classList.add('d-flex', 'flex-column', 'h-100', 'bg-transparent');
    //    $body.classList.add('custom-bg', 'd-flex', 'flex-column', 'h-100');

    if ($pageDiv) {
        //    $pageDiv.classList.add('container', 'd-flex', 'flex-column', 'flex-lg-row', 'w-100', 'flex-wrap', 'align-content-start', 'reset_pos', 'shadow', 'bg-white', 'rounded-bottom');

        // removed default height style so page does not crop
        $pageDiv.style.height = 'unset'


        //      $pageDiv.classList.add('container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-content-start', 'reset_pos', 'shadow', 'bg-white', 'rounded-bottom');
//        $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-content-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
        $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');

        //    reset children positions and width
        //    reuse.remove_Style_multiple_children($pageDiv.children, ['position', 'left', 'top', 'fontFamily', 'fontSize', 'clip']);
        //    reuse.remove_Style_multiple_children($pageDiv.children, ['position', 'left', 'top', 'margin', 'padding', 'width', 'height', 'text-align', 'fontFamily', 'fontSize', 'clip', 'line-height', 'text-indent']);

        reuse.remove_Style_multiple($pageDiv.children, ['position', 'left', 'top', 'margin', 'padding', 'width', 'height', 'text-align', 'fontFamily', 'fontSize', 'clip', 'line-height', 'text-indent']);
    } else {
        alert('$pageDiv NOT FOUND');
    }

    for (const el of $pageDiv.children) {
        //        el.classList.add('my-3');
        //        el.classList.add('mb-3');

        // bootstrap relative
        el.classList.add('position-relative');
    }
    return
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
/*  ----------------------------------------------------------
0   init_DOM

This is the first phase of preparing the DOM elements and collecting the required elements.

*/


/*  ----------------------------------------------------------

*/
/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let fillNavBrand = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> fillNavBrand');
    

    $titleName.textContent = Var_titleName.getValue();
    $chapterName.textContent = Var_chapterName.getValue();
    $sectionName.textContent = Var_sectionName.getValue();
    $pageName.textContent = Var_pageName.getValue();
}


/*  ----------------------------------------------------------
locale_pageNav
*/
/**************************************************/
/**************************************************/
/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let locale_pageNav = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> locale_pageNav');
    

    //Same as commented above
    // title and name use same dictionary reference
    $pagePrevious.id = 'btn_prev';
    $pagePrevious.title = tdd_dictionary.core.navigation_name.prev[currentLanguage];
    $pagePrevious.name = tdd_dictionary.core.navigation_name.prev[currentLanguage];
    $pagePrevious.innerHTML = `<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; ${tdd_dictionary.core.navigation.prev[currentLanguage]}`;

    $pageNext.id = 'btn_next';
    $pageNext.title = tdd_dictionary.core.navigation_name.next[currentLanguage];
    $pageNext.name = tdd_dictionary.core.navigation_name.next[currentLanguage];
    $pageNext.innerHTML = `${tdd_dictionary.core.navigation.next[currentLanguage]} &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>`;

    //    $exit.id = 'btn_exit';
    //    $exit.title = tdd_dictionary.core.navigation_name.exit[currentLanguage];
    //    $exit.name = tdd_dictionary.core.navigation_name.exit[currentLanguage];
    //    $exit.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp; ${tdd_dictionary.core.navigation.exit[currentLanguage]}`;
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/

/*  ----------------------------------------------------------
extract_pageNav_children
*/
/**************************************************/
/**************************************************/
globalThis.extract_pageNav_children = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> extract_pageNav_children');
    

    globalThis.$pagePrevious = document.querySelector(".btn_previous");
    globalThis.$pageNext = document.querySelector(".btn_next");
    //  globalThis.$exit = document.querySelector(".btn_exit");

    $pagePrevious.children[0].innerHTML = '';
    $pageNext.children[0].innerHTML = ''
    //  $exit.children[0].innerHTML = ''

    // Bring buttons to their parent level instead of being inside a div
    let $pagePreviousChild = $pagePrevious.children[0];
    $pagePreviousChild.className = $pagePrevious.className;
    $pagePrevious = $pagePreviousChild.cloneNode(true);

    let $pageNextChild = $pageNext.children[0];
    $pageNextChild.className = $pageNext.className;
    $pageNext = $pageNextChild.cloneNode(true);

    //  let $exitChild = $exit.children[0];
    //  $exitChild.className = $exit.className;
    //  $exit = $exitChild.cloneNode(true);

    locale_pageNav()
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
/*  ----------------------------------------------------------
cleanup_pageNav
*/
/**************************************************/
/**************************************************/
let cleanup_pageNav = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> cleanup_pageNav');
    

    // delete mess behine
    let temp_NavPrev = $pageDiv.querySelector(".btn_previous");
    let temp_NavNext = $pageDiv.querySelector(".btn_next");
    //  let temp_exit = $pageDiv.querySelector(".btn_exit");

    temp_NavPrev.remove();
    temp_NavNext.remove();
    //  temp_exit.remove();
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
/*  -------     Functions    ------- */

/*  ----------------------------------------------------------
Update Copyright text on the footer
*/
/**************************************************/
/**************************************************/
let updateCopyright = () => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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
    reuse.log(null, '===   === === === === === ===');
    reuse.log(null, 'start fn ------------------> updateCopyright');
    

    // Both below are working however the first is updatable through Saba Publisher variables panel
    //  const enCopyright = Varcopyen.getValue();
    //  const frCopyright = Varcopyfr.getValue();
    //  $copyright.textContent = eval(currentLanguage + 'Copyright');
    $copyright.textContent = tdd_dictionary.labels.footer.copyright[currentLanguage]

    fillNavBrand();
}





/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.cleanupDOM = () => {
    /*
    ======================================================
    USAGE:
            - Clean DOM
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
//    reuse.dev('log', '===   === === === === === ===');
//    reuse.dev('log', 'start fn ------------------> cleanupDOM');
    

    globalThis.$hiddenCollection = document.createElement('div');
    $hiddenCollection.id = 'hiddenCollection';
    $hiddenCollection.style.display = 'none';
    $body.appendChild($hiddenCollection);

    reuse.Hide_items('.invisible', $hiddenCollection, false);

    let cleanTOC = $pageDiv.querySelector('[id^=ctoc]');

    $hiddenCollection.appendChild(cleanTOC);

    //  reuse.Hide_items('[id^=og]', $hiddenCollection, false);
    //  reuse.Hide_items('[id^=shape]', $hiddenCollection, true);
}





/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/



/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.modifyDOM = (lang) => {
    /*
    ======================================================
    USAGE:
            - format HTML, body and PageDiv
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

 
    
    if (lang) {
        globalThis.currentLanguage = lang;
        reuse.log(null, currentLanguage);
    } else {
        alert('lang NOT FOUND');
    }
    globalThis.myArr = [];


    init_DOM();

    extractTOC();

    init_Layout();

    init_modal_options();

    init_modal_menu();

    init_exit();

    removeCssFile();

    cleanupDOM();

    disableSabaFunctions();

    init_Content();


    is.useHTML5Video = () => supports_h264_baseline_video()
    is.useHTML5Audio = () => !!document.createElement('audio').canPlayType

    //START LISTENING TO EVENTS
    init_LISTENERS();
    //  $hiddenCollection.remove();
};
//modifyDOM();

export const test = a => a * a;