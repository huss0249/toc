import * as reuse from './_assets/js/tdd_reusable.js';
/*  -------     INIT Functions    ------- */


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.init_DOM = () => {
export const init_DOM = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_DOM');

    //    globalThis.$htmlDOC = document.getElementsByTagName('html')[0].innerHTML
    globalThis.$html = document.getElementsByTagName('html')[0];

    //custom body
    globalThis.$body = document.body;

    // get Saba Publisher container [MUST BE FIRST]
    globalThis.$pageDiv = document.getElementById("pageDIV");

    //    MODAL OPTIONS
    globalThis.$modal_options = document.createElement("div");
    $modal_options.id = "modal_options";
    $body.prepend($modal_options);

    //    MODAL MENU
    globalThis.$modal_menu = document.createElement("div");
    $modal_menu.id = "modal_menu";
    $body.prepend($modal_menu);

    globalThis.$navTOC = document.createElement("div");

    $navTOC.id = 'navTOC';
    //	$body.appendChild($navTOC);

    // SKIP TO PAGE CONTENT
    //    const $skippy = document.getElementsByClassName("skippy")[0];

    format_DOM_base();
    console.log('close fn /////////////////// init_DOM');
    return
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//let init_courseInfo = () => {
export let init_courseInfo = () => {
    /*
    ======================================================
    USAGE:
            - Get course info from Saba
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_courseInfo');
    
    globalThis.$titleName = document.createElement("h3");
    globalThis.$chapterName = document.createElement("h3");
    globalThis.$sectionName = document.createElement("h2");
    globalThis.$pageName = document.createElement("h1");


    globalThis.pageInSection = VarPageInSection.getValue();
    globalThis.sectionPages = VarPagesInSection.getValue();
    globalThis.pageInChapter = VarPageInChapter.getValue();
    globalThis.chapterPages = VarPagesInChapter.getValue();

    //Will not use these since we have EN, FR and popups
    globalThis.pageInTitle = VarPageInTitle.getValue();
    globalThis.titlePages = VarPagesInTitle.getValue();

    //Will not use these since the original vars are available
    globalThis.sectionPage = Var_sectionPage.getValue();
    globalThis.titlePage = Var_titlePage.getValue();
}


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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_pageNumber');
    

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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_pageNav');
    

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

    reuse_remove_Style_multiple($pageNav.children, ['position', 'left', 'top']);

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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_navOptions');
    

    globalThis.$navOptions = document.createElement("div");

    $navOptions.id = 'navOptions';
    $navOptions.classList.add('btn-group', 'btn-group-sm', 'btn-block');
    $navOptions.setAttribute("aria-label", "Course Options");
    $navOptions.setAttribute("role", "group");


    globalThis.nestedPath = tdd_dictionary.labels.modal_options;

    globalThis.navOptions = reuse_getNestedArr(currentLanguage, nestedPath, false);
    globalThis.navOptions_names = reuse_getNestedArr(currentLanguage, nestedPath, true);
    globalThis.navOptions_icons = reuse_getNestedArr('icon', nestedPath, true);

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
//let init_Brand = () => {
export let init_Brand = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Brand');
    

    globalThis.$brand_bar = document.createElement("div");
    $brand_bar.id = "brand_bar";

    init_courseInfo();

    globalThis.$brand = document.createElement("img");
    console.log(currentLanguage, 'current language init_Brand');
    
//    $brand.src = './dnd_logo.svg';
    let $brandSource = `./dnd_logo_${currentLanguage}.svg`;
//    let $brandSource = './dnd_logo_' + currentLanguage + '.svg';
    console.log($brandSource);
    $brand.src = $brandSource;
    
    //  $brand.alt = 'Defence logo';
    $brand.setAttribute('alt', 'Defence logo');
    $brand.setAttribute('title', 'Defence logo');
    $brand.setAttribute('tooltip', 'Defence logo');
    $brand.style.height = '20px';
    $brand.classList.add('ml-auto', 'bd-highlight');

    $titleName.classList.add('mr-3');

    $brand_bar.classList.add('py-3');
    $brand_bar.style.display = 'flex';
    //    $brand_bar.appendChild($titleName);
    $brand_bar.appendChild($chapterName);
    $brand_bar.appendChild($brand);

    $header.appendChild($brand_bar);
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Navbar');
    

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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Header');
    

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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Main');
    
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_modal_menu');
    

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
//let init_exit = () => {
export let init_exit = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_exit');
    

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
//let init_modal_options = () => {
export let init_modal_options = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_modal_options');
    

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
//let init_footer_nav = () => {
export let init_footer_nav = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_footer_nav');
    

    
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
//let init_footer_bar = () => {
export let init_footer_bar = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_footer_bar');
    

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
//let init_Footer = () => {
export let init_Footer = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Footer');
    

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
//globalThis.init_Layout = () => {
export const init_Layout = () => {
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
    
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Layout');
    

    //alert('start init layout');
    //console.log('start init layout');
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
//globalThis.init_Content = () => {
export const init_Content = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> init_Content');
    

    // get elements that id ends with anc
    globalThis.$anchors = $pageDiv.querySelectorAll('[id $= anc]');
    if ($anchors.length > 0) {
        reuse_removeElements($anchors);
        //        reuse_Hide_items('[id $= anc]', $hiddenCollection, false);
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
//let format_DOM_base = () => {
export let format_DOM_base = () => {
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
    
//    console.log('===   === === === === === ===');
//    console.log('start fn ------------------> format_DOM_base');
    

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
        //    reuse_remove_Style_multiple_children($pageDiv.children, ['position', 'left', 'top', 'fontFamily', 'fontSize', 'clip']);
        //    reuse_remove_Style_multiple_children($pageDiv.children, ['position', 'left', 'top', 'margin', 'padding', 'width', 'height', 'text-align', 'fontFamily', 'fontSize', 'clip', 'line-height', 'text-indent']);

        reuse_remove_Style_multiple($pageDiv.children, ['position', 'left', 'top', 'margin', 'padding', 'width', 'height', 'text-align', 'fontFamily', 'fontSize', 'clip', 'line-height', 'text-indent']);
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
//let fillNavBrand = () => {
export let fillNavBrand = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> fillNavBrand');
    

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
//let locale_pageNav = () => {
export let locale_pageNav = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> locale_pageNav');
    

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
//globalThis.extract_pageNav_children = () => {
export const extract_pageNav_children = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> extract_pageNav_children');
    

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
//let cleanup_pageNav = () => {
export let cleanup_pageNav = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> cleanup_pageNav');
    

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
//let updateCopyright = () => {
export let updateCopyright = () => {
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
    console.log('===   === === === === === ===');
    console.log('start fn ------------------> updateCopyright');
    

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
//globalThis.cleanupDOM = () => {
export const cleanupDOM = () => {
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
//    console.log('===   === === === === === ===');
//    console.log('start fn ------------------> cleanupDOM');
    

    globalThis.$hiddenCollection = document.createElement('div');
    $hiddenCollection.id = 'hiddenCollection';
    $hiddenCollection.style.display = 'none';
    $body.appendChild($hiddenCollection);

    reuse_Hide_items('.invisible', $hiddenCollection, false);

    let cleanTOC = $pageDiv.querySelector('[id^=ctoc]');

    $hiddenCollection.appendChild(cleanTOC);

    //  reuse_Hide_items('[id^=og]', $hiddenCollection, false);
    //  reuse_Hide_items('[id^=shape]', $hiddenCollection, true);
}



/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.modifyDOM = (lang) => {
export const modifyDOM = (lang) => {
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
        console.log(currentLanguage);
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

    saba.removeCssFile();

    cleanupDOM();

    saba.disableSabaFunctions();

    init_Content();


    is.useHTML5Video = () => supports_h264_baseline_video()
    is.useHTML5Audio = () => !!document.createElement('audio').canPlayType

    //START LISTENING TO EVENTS
    init_LISTENERS();
    //  $hiddenCollection.remove();
};
//modifyDOM();
export const test = a => a * a;