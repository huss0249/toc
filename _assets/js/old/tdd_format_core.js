export const test = a => a * a;
/*!
===================================================================================
* Script: formatContent v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
TO DO:
    - Format text blocks that have textContent class.                     NOT DONE
    - Format text blocks that have heading class.                         NOT DONE
    - Format text blocks that are part of interaction.                    NOT DONE
    - Format buttons.                                                     NOT DONE
    - Format svg shapes in pageDiv.                                       NOT DONE
===================================================================================
TO FIX:
    - Sticky footer                                                       NOT DONE
    - PageDiv styling should not be scrollable.                           NOT DONE
    - Continue formation functions based on elements categories.
===================================================================================
*/


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.assignHeading = (el, heading) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> assignHeading');
    

    if ((el.parentNode.tagName = "p")) {
        let $oldEl = el.parentNode;
        let $newEl = document.createElement(heading);

        // Add margins Top Bottom to Headding
        $newEl.classList.add('my-3');

        // $newEl.setAttribute('id', $oldEl.getAttribute('id'));
        while ($oldEl.firstChild) {
            $newEl.appendChild($oldEl.firstChild);
        }
        $oldEl.parentNode.replaceChild($newEl, $oldEl);

        //will come to this later
        //      $newEl.style.fontSize = $newEl.children[0].style.fontSize;
        //      $newEl.children[0].style.fontSize = 'unset';
    }
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.formatParagraph = (el) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */

};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.cleanParagraph = (elem) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let $cleanP = $pageDiv.querySelectorAll("p");
    for (let el of $cleanP) {
        //    console.log(el.innerText);
    }
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.formatDIV = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    //    console.log('formatDIV array = ', arr);
    for (let el of arr) {
        //        el.style.background = "limegreen";
        //        el.style.borderBottom = "solid thick blue";
        //        el.style.margin = "30px";
        //        el.style.padding = "30px";
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.formatCoverPage = ($coverPage) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
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
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatCoverPage');
    

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

    if(developer) {
        console.log('$coverPage title = ', $coverPage.innerText);
    }
    //    let $coverPageElements = $pageDiv.querySelectorAll('div');
    //    let $coverPageTitle = $pageDiv.querySelector('.coverPage');
    //    console.log('$coverPageElements = ', $coverPageElements[0].children[0].children[0].children[0].innerText);
    //    console.log('$coverPageElements = ', $coverPageElements[0].innerText);
    //    console.log('$coverPageElements = ', $coverPageElements.innerText);
    //    add this class name =>    text-capitalize

    // will check instead for a coverPage class name added to the elements then call the cover page function
    //    console.log('HERE is cover page function and the given parameter is ');

}

/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.init_CourseCoverPage = () => {
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

    globalThis.$html = document.getElementsByTagName('html')[0];

    //custom body
    globalThis.$body = document.body;

    // get Saba Publisher container [MUST BE FIRST]
    globalThis.$pageDiv = document.getElementById("pageDIV");

    
//    console.log('formatCourseCoverPage');
    let $courseCoverContent = document.getElementById('pageDIV').children;
//    console.log($courseCoverContent);

    globalThis.$toc = document.querySelector('[title="TOC"]');

    /*Define arrays*/
	//20230118 > initiated in (extractTOC)
//    globalThis.full_toc = getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = reuse_filter_itemType(full_toc, "title");
    console.log('full_toc', full_toc);
    console.log('filteredTitle', filteredTitle);
    
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


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.fill_CourseCoverPage = () => {
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
    console.log('en Title = ', enTitle);
    console.log('fr Title = ', frTitle);

    console.log('en Link = ', enLink);
    console.log('fr Link = ', frLink);
    
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
    
    
//    globalThis.$pageNumber = document.createElement('button');
//
//    $pageNumber.id = 'pageNumber';
//    $pageNumber.classList.add('pageNumber');
//
//    $pageNumber.textContent = `${pageInSection} ${tdd_dictionary.core.page_number_spacer[currentLanguage]} ${sectionPages}`;
//
//    $pageNumber.setAttribute('type', 'button');
//    $pageNumber.setAttribute('role', 'button');
//
//    $pageNumber.setAttribute("data-toggle", "modal");
//    $pageNumber.setAttribute("data-target", ".modal_menu");
    
    
    
//    $pageNav.appendChild($pagePrevious);
//    $pageNav.appendChild($pageNumber);
//    $pageNav.appendChild($pageNext);
//    //  $pageNav.appendChild($exit);
//
//    reuse_remove_Style_multiple($pageNav.children, ['position', 'left', 'top']);
//
//    $pageNext.classList.add('btn', 'btn-sm', 'btn-secondary');
//    $pagePrevious.classList.add('btn', 'btn-sm', 'btn-secondary');
//    $pageNumber.classList.add('btn', 'btn-sm', 'btn-dark');
//    //  $exit.classList.add('btn', 'btn-sm', 'btn-danger');
//
//    $pageNav.classList.add('d-flex', 'py-0');
//

//    trivExitPage(targetPageLink, true);

}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.clean_CourseCoverPage = () => {
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
    
//    $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
//    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap', 'justify-content-between' );
    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' );
//    $pageDiv.classList.add( 'justify-content-around' );
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.formatCourseCoverPage = () => {
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
    
    init_CourseCoverPage();
    clean_CourseCoverPage();
    fill_CourseCoverPage();
    
   
    
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let formatTXT = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatTXT');
    
    let tmpArr = [];
    let strTxt = "";
    let spans = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            arr[i].textContent = arr[i].innerText;
        }

        //        arr[i].style.border = "dotted thin black";
        //        arr[i].style.margin = "20px";
        //        arr[i].style.padding = "20px";


        let elFontSize = window.getComputedStyle(arr[i]).fontSize;
        let elFontWeight = window.getComputedStyle(arr[i]).fontWeight;
        let elFontStyle = window.getComputedStyle(arr[i]).fontStyle;
        let elTextDecoration = window.getComputedStyle(arr[i]).textDecoration;

        elFontWeight === "bold" ? reuse_set_span_class(arr[i], "strong") : "";
        elTextDecoration === "underline" ? reuse_set_span_class(arr[i], "underline") : "";
        elFontStyle === "italic" ? reuse_set_span_class(arr[i], "italic") : "";

        elFontSize === "32px" ? assignHeading(arr[i], "h2") : "";
        elFontSize === "27px" ? assignHeading(arr[i], "h3") : "";
        elFontSize === "24px" ? assignHeading(arr[i], "h4") : "";
        elFontSize === "16px" ? formatParagraph(arr[i]) : "";
    }
    // return to call a function that cleans up the spans in headings
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let formatOneTBL = (el) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */


    /*__________________________________________
      USAGE:  Format One Table
      INPUT:  Table element
      RETURN: 
      ------------------------------------------
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatOneTBL');
    

    //    console.log('found formatTBL');
    //    console.log('arr = ', arr);
    el.parentNode.classList.add('table-responsive');
    el.classList.add('table', 'table-bordered', 'table-hover', 'table-dark', 'table-sm', 'mb-0');
    
    if(developer) {
        console.log('el in formatOneTBL = ', el.children[0].children);
        console.log('el in formatOneTBL = ', el.tagName);
    }
    for(let tbl_el of el.children[0].children) {
//        console.log('tbl_el = ', tbl_el.children);
        
//            reuse_extract_table_children(tbl_el);
        
            for(let tbl_td of tbl_el.children) {
//                console.log('tbl_td = ', tbl_td.tagName);
//                console.log('tbl_td = ', tbl_td.children);
                
                reuse_extract_table_children(tbl_td);
            }

    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let formatTBL = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    //    console.log('found formatTBL');
    //    console.log('arr = ', arr);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let formatIMG = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    //    console.log('found formatIMG');
    //    console.log('arr = ', arr);
    //    console.log('arr length = ', arr.length);
    for (el of arr) {
        //        console.log(el.childNodes[0]);

        //        console.log(el.childNodes[2]);

    }

}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let contentHalf = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> contentHalf');
    
    //    console.log('found halfs');
    //    console.log('arr = ', arr);
    for (csElHalf of arr) {
        if(developer) {
            console.log('csElHalf = ', csElHalf);
        }
        csElHalf.classList.add('w-50');
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let contentFull = (arr) => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> contentFull');
    

    //    console.log('found fulls');
    //    console.log('arr = ', arr);
    for (csElFull of arr) {
        csElFull.style.background = 'yellow'
        //        csElFull.classList.add('w-100', 'flex-fill', 'p-3');
        csElFull.classList.add('w-100');
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.formatCs = () => {
    /*
    ======================================================
    USAGE:
            -
    INPUT:
            -
    RETURN:
            -
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatCs');
    

    globalThis.$Cs = $pageDiv.querySelectorAll('[class *= cs-]');
    if ($Cs.length > 0) {

        reuse_formatCs($Cs);

        globalThis.$TXTs = $pageDiv.querySelectorAll('[class *= "cs-txt-"]');
        if ($TXTs.length > 0) {
            // formatTXT($TXTs);
        }

        globalThis.$TBLs = $pageDiv.querySelectorAll('[class *= "cs-tbl-"]');
        if ($TBLs.length > 0) {
            // formatTBL($TBLs);
        }

        globalThis.$IMGs = $pageDiv.querySelectorAll('[class *= "cs-img-"]');
        if ($IMGs.length > 0) {
            // formatIMG($IMGs);
        }

        //        const $CsHalf = $pageDiv.querySelectorAll('[class *= "-50"]');
        globalThis.$CsHalf = $pageDiv.querySelectorAll('[class $= "-50"]');
        if ($CsHalf.length > 0) {
            contentHalf($CsHalf);
        }

        //        const $CsFull = $pageDiv.querySelectorAll('[class *= "-100"]');
        globalThis.$CsFull = $pageDiv.querySelectorAll('[class $= "-100"]');
        if ($CsFull.length > 0) {
            // contentFull($CsFull);
        }

    } else {
        //         delete $Cs;
        //         $Cs = null;
        //         console.log($Cs);
        //           console.log('no class found');
//        alert('Class Names Not Assigned to All Pace Content' + '\n' + 'cs-[type (txt, img, tbl)]-[size (50, 100)]' + '\n \n' + 'Text blocks => cs-txt-50 or cs-txt-100' + '\n' + 'Images => cs-img-50 or cs-img-100' + '\n' + 'Tables => cs-tbl-50 or cs-tbl-100');
        reuse_dev('alert', 'Class Names Not Assigned to All Pace Content' + '\n' + 'cs-[type (txt, img, tbl)]-[size (50, 100)]' + '\n \n' + 'Text blocks => cs-txt-50 or cs-txt-100' + '\n' + 'Images => cs-img-50 or cs-img-100' + '\n' + 'Tables => cs-tbl-50 or cs-tbl-100');
    }
}
