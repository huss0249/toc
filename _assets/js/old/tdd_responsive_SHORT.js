/*!
===================================================================================
* Script: reuse v1.0.1
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


/*  -------     REUSABLE Functions    ------- */



globalThis.reuse_set_span_class = (el, className) => {
    el.className = "";
    el.classList.add(className);
};

/*	===================================================================================	*/

globalThis.reuse_getTwin = (ref, nestedObj) => {
    let tmp = '';
    for (el in nestedObj)
        if (el != ref) tmp = nestedObj[el];
    return tmp;
};

/*	===================================================================================	*/

globalThis.reuse_getNestedArr = (ref, nestedObj, flag) => {
    let tmpArr = [];

    if (flag) {
        for (el in nestedObj) tmpArr.push(nestedObj[el][ref]);
    } else {
        for (el in nestedObj) tmpArr.push(el);
    }
    return tmpArr;
};

/*	===================================================================================	*/

globalThis.reuse_getClickedOption = (ref, nestedObj, flag) => {
   
    let tmp = '';
    for (el in nestedObj)
        if (el === ref) tmp = nestedObj[el];
    return tmp;
};

/*	===================================================================================	*/

globalThis.reuse_filter_itemType = (arr, val) => {
   
    let filterArr = [];
    for (i = 0; i < arr.length; i++)
        if (arr[i].type === val) filterArr.push(i);
    return filterArr;
}

/*	===================================================================================	*/

globalThis.reuse_filter_itemName = (arr, val) => {
    let filterArr = {};
    for (i = 0; i < arr.length; i++)
        if (arr[i].name.toLowerCase() === val.toLowerCase()) filterArr = arr[i];
    return filterArr;
}

/*	===================================================================================	*/

globalThis.reuse_append_multiple = (arr, targetElement) => {
    arr.forEach(i => targetElement.appendChild(i));
}

/*	===================================================================================	*/

globalThis.reuse_set_Attribute_multiple = (attr, parameter, arr, arr2, strToRemove, strToPlace) => {
    for (let i = 0; i < arr2.length; i++) {
        let newValue = arr2[i].replace(strToRemove, strToPlace);
        if (attr) {
            arr[i].setAttribute(parameter, newValue);
        } else {
            arr[i][parameter] = newValue.toLowerCase();
        }
    }
}

/*	===================================================================================	*/

globalThis.reuse_set_ID_multiple = (arr, arr2, strToRemove, strToPlace) => {
    for (let i = 0; i < arr2.length; i++) {
        let targetID = arr2[i].replace(strToRemove, strToPlace);
        arr[i].id = targetID;
    }
}

/*	===================================================================================	*/

globalThis.reuse_set_Class_multiple = (arr, classNames) => {
    for (i = 0; i < arr.length; i++) classNames.forEach(j => arr[i].classList.toggle(j));
}

/*	===================================================================================	*/

globalThis.reuse_remove_Attribute_multiple = (arr, attrName) => {
    for (i = 0; i < arr.length; i++) arr[i].removeAttribute(attrName);
}

/*	===================================================================================	*/

globalThis.reuse_remove_Style_multiple = (arr, styleNames) => {

/*	===================================================================================	*/

    for (i = 0; i < arr.length; i++) styleNames.forEach(j => arr[i].style.j = null);
}

/*	===================================================================================	*/

globalThis.reuse_remove_Style_multiple_children = (arr, styleNames) => {
    for (const el of arr) {
        styleNames.forEach(j => {
            el.style.removeProperty([j]);

			for (const ell of el.children) {
                styleNames.forEach(k => {
                    ell.style.removeProperty([k]);
                });
            }
        });
    }
}

/*	===================================================================================	*/

globalThis.reuse_extract_table_children = (el) => {
    for(let el_child of el.children) {
        if(el_child.tagName === 'P') {
            el_child.parentNode.removeAttribute('style');
            el_child.parentNode.innerHTML = el_child.innerHTML;
        } else {
            reuse_dev('log', 'table cel might have more than a child');
        }
        
    }
    return
}

/*	===================================================================================	*/

globalThis.reuse_Hide_items = (itemParam, dropTarget, unsure) => {
    let itemsCollection = document.querySelectorAll(itemParam);
    for (const el of itemsCollection) {
        let hasClass = el.hasAttribute('class');
        if (!hasClass) {
            dropTarget.appendChild(el);
        } else {
            if (!unsure) {
                dropTarget.appendChild(el);
            }
        }
    }
}

/*	===================================================================================	*/

globalThis.replaceTag = (elTarget, elType) => {
    let $oldEl = elTarget;
    let $newEl = document.createElement(elType);

    Array.from($oldEl.attributes).map(el => $newEl.setAttribute(el.name, el.value));

    $oldEl.parentNode.insertBefore($newEl, $oldEl);
}

/*	===================================================================================	*/

globalThis.reuse_removeElements = (arr) => {
    for (let el of arr) {
        if (el.children.length < 1) {
            el.remove();
        } else {
            if(developer) {
                console.log('FN reuse_removeElements: found non empty Anchor ===> ', el);
            }
//            reuse_dev('log', el, 'FN reuse_removeElements: found non empty Anchor');
            //console.log('FN reuse_removeElements: found non empty Anchor ===> ', el.children[0].tagName);
            if (el.children[0].tagName === 'IFRAME') {
                reuse_dev('log', 'IFRAME FOUND');
                formatIframe(el);
            }
        }
    }
}

/*	===================================================================================	*/

globalThis.reuse_removeEmptyNesting = (elem) => {
    for (let el of elem.children) {
        if (el.children.length < 1) {
            el.remove();
        } else {

                console.log('CLEANUP: found non empty Anchor ===> ', el);
        }
    }
}

/*	===================================================================================	*/

globalThis.reuse_formatCs = (arr) => {
    for (let el of arr) {
        el.removeAttribute('style');
        el.classList.add('flex-fill', 'p-3', 'position-relative');
    }
}

/*	===================================================================================	*/

/*!
===================================================================================
* Script: Listeners v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================
*/
globalThis.fn_Listeners = () => {
    globalThis.windowScroll = () => {
        if (window.scrollY > 50) {
            $nav.classList.remove('container');
            $nav.classList.add('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
            $nav_bar.classList.remove('shadow');
            $sectionName.classList.add('text-light');
            $main.style.paddingTop = '100px';
        } else {
            $nav.classList.add('container');
            $nav.classList.remove('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
            $nav_bar.classList.add('shadow');
            $sectionName.classList.remove('text-light');
            $main.style.paddingTop = '0';
        }
    }

/*	===================================================================================	*/

    globalThis.modal_menu_toggle_btn_clicked = () => {
        $modal_menu.classList.toggle('fade');
    }

/*	===================================================================================	*/

    globalThis.modal_menu_toggle_key_pressed = (e) => {
        if ((e.ctrlKey && e.key === 'M') || (e.ctrlKey && e.key === 'm')) document.getElementById("pageNumber").click();
    }

/*	===================================================================================	*/

    globalThis.options_btn_clicked = (e) => {
        globalThis.clickedOption = '';
        let tmpClickedLink = '';
        let clickedLinkKey = '';
        let clickedLinkName = '';
        let clickedLink = '';

        for (let i = 0; i < navOptions.length; i++) {
            globalThis["$options_" + navOptions[i]] = document.getElementById(navOptions[i]);
            if (this["$options_" + navOptions[i]].id === e.target.id) {
                clickedOption = e.target.id;
            }
        }

        if (clickedOption === 'language') {
            globalThis.pagePosition = pageInChapter;
            currentLanguage = reuse_getTwin(currentLanguage, tdd_dictionary.core.lang);
            let targetPage = eval(currentLanguage + 'Modules').flat().filter(a => a.pageGlobal == pagePosition);
            let targetPageLink = targetPage.map(page => page.link);
            trivExitPage(targetPageLink, true);
        } else if (clickedOption === 'exit') {
            alert('THIS IS GOING TO CLOSE THE COURSE, ARE YOU SURE?');
        } else {
            tmpClickedLink = reuse_getClickedOption(clickedOption, nestedPath);
            clickedLinkKey = [currentLanguage + '_link'];
            clickedLinkName = tmpClickedLink[currentLanguage].toLocaleLowerCase();
            clickedLink = tmpClickedLink[clickedLinkKey];

            if (clickedLink === 'internal') {
                let tmpPopup = reuse_filter_itemName(popup_toc, clickedLinkName);
                clickedLink = tmpPopup['link'];
            }

            // Fade Modal
            document.getElementById("modal_options_toggle").click();

            // Open in a new tab window
            window.open(clickedLink, '_blank');
        }
    }

}

/*	===================================================================================	*/

globalThis.init_LISTENERS = () => {
    // init the functions
    fn_Listeners();

    //SCROLL EVENT
    //    document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', windowScroll);

    //MODAL MENU EVENTS
    $modal_menu_toggle.addEventListener('click', modal_menu_toggle_btn_clicked);
    $pageNumber.addEventListener('click', modal_menu_toggle_btn_clicked);

    document.addEventListener('keydown', modal_menu_toggle_key_pressed);

    //LANGUAGE EVENT
    //  $navOptionsLanguage.addEventListener('click', options_btn_clicked);
    $navOptions.addEventListener('click', options_btn_clicked);
}


/*	===================================================================================	*/

/*!
===================================================================================
* Script: format TOC v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================
*/
let createNavTOC = (arr) => {
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> createNavTOC');
    
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

/*	===================================================================================	*/

globalThis.reuse_populate_module_pages = (arr, tmpArr) => {
    let myArr = [];
    let p = 0;
    for (let n = 0; n < tmpArr.length; n++) {
        myArr[n] = arr.slice(tmpArr[n], tmpArr[n + 1]);

		for (let k = 0; k < myArr[n].length; k++) {
            if (myArr[n][k].type === "page") {
                p = p + 1;
                myArr[n][k].moduleNumber = n + 1;
                myArr[n][k].pageLocal = k;
                myArr[n][k].pageGlobal = p;

				if (myArr[n][k].active) {
                    globalThis.activePagePosition = myArr[n][k].pageGlobal;
                }
            }
        }
    }
    return myArr
}

/*	===================================================================================	*/

globalThis.checkMatching = (enArr, frArr) => {
    let mismatch_counter = 0;
    if(enArr.length === frArr.length) {
        for(let n = 0; n < enArr.length; n++) {

			if(enArr[n].length != frArr[n].length) {
                mismatch_counter += 1;
                let msg = `checkMatching error ${mismatch_counter} Mismatch(s) Found in " ${Object.keys({enArr})[0]} " and " ${Object.keys({frArr})[0]} " at index ${n} => ${enArr[n].length} and ${frArr[n].length}`;
                reuse_dev('alert', msg);
                reuse_dev('log', msg);
            }
        }
    } else {
//        reuse_dev('log', 'ARRAYS LENGTH IS MISMATCHING');
    }
}

/*	===================================================================================	*/

globalThis.processTOC = (enArr, frArr) => {
    en_toc = [...enArr];
    fr_toc = [...frArr];
    
    console.log('en_toc = ', en_toc);
//    console.log('en_toc Length = ', en_toc.length);
    console.log('fr_toc = ', fr_toc);
//    console.log('fr_toc Length = ', fr_toc.length);

//    globalThis.tmpModules = reuse_filter_itemType(en_toc, "module");
    globalThis.tmp_enModules = reuse_filter_itemType(en_toc, "module");
    globalThis.tmp_frModules = reuse_filter_itemType(fr_toc, "module");
    
    globalThis.enModules = [];
    globalThis.frModules = [];

	enModules = reuse_populate_module_pages(en_toc, tmp_enModules);
    frModules = reuse_populate_module_pages(fr_toc, tmp_frModules);
    
    checkMatching(enModules, frModules);
    return
};

/*	===================================================================================	*/

let checkTOC = (filtered, arr) => {
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

/*	===================================================================================	*/

globalThis.assignHeading = (el, heading) => {
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

/*	===================================================================================	*/

globalThis.formatParagraph = (el) => {}

/*	===================================================================================	*/


globalThis.cleanParagraph = (elem) => {
    let $cleanP = $pageDiv.querySelectorAll("p");
    for (let el of $cleanP) {
        //    console.log(el.innerText);
    }
};

/*	===================================================================================	*/

globalThis.formatDIV = (arr) => {
    for (let el of arr) {
        //        el.style.background = "limegreen";
        //        el.style.borderBottom = "solid thick blue";
        //        el.style.margin = "30px";
        //        el.style.padding = "30px";
    }
}

/*	===================================================================================	*/

globalThis.formatCoverPage = ($coverPage) => {
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


        console.log('$coverPage title = ', $coverPage.innerText);

    //    let $coverPageElements = $pageDiv.querySelectorAll('div');
    //    let $coverPageTitle = $pageDiv.querySelector('.coverPage');
    //    console.log('$coverPageElements = ', $coverPageElements[0].children[0].children[0].children[0].innerText);
    //    console.log('$coverPageElements = ', $coverPageElements[0].innerText);
    //    console.log('$coverPageElements = ', $coverPageElements.innerText);
    //    add this class name =>    text-capitalize

    // will check instead for a coverPage class name added to the elements then call the cover page function
    //    console.log('HERE is cover page function and the given parameter is ');

}

/*	===================================================================================	*/

globalThis.init_CourseCoverPage = () => {
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

/*	===================================================================================	*/

globalThis.fill_CourseCoverPage = () => {
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
    
    
}

/*	===================================================================================	*/

globalThis.clean_CourseCoverPage = () => {
    cleanupDOM();
    
    let cleanOG = $pageDiv.querySelector('[id^=og]');
    $hiddenCollection.appendChild(cleanOG);
    format_DOM_base();
    
//    $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');
//    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap', 'justify-content-between' );
    $pageDiv.classList.remove( 'shadow', 'bg-white', 'flex-wrap' );
//    $pageDiv.classList.add( 'justify-content-around' );
}

/*	===================================================================================	*/

globalThis.formatCourseCoverPage = () => {
    init_CourseCoverPage();
    clean_CourseCoverPage();
    fill_CourseCoverPage();
}

/*	===================================================================================	*/

let formatTXT = (arr) => {
    let tmpArr = [];
    let strTxt = "";
    let spans = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            arr[i].textContent = arr[i].innerText;
        }

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

/*	===================================================================================	*/


let formatOneTBL = (el) => {
    el.parentNode.classList.add('table-responsive');
    el.classList.add('table', 'table-bordered', 'table-hover', 'table-dark', 'table-sm', 'mb-0');
    
    if(developer) {
        console.log('el in formatOneTBL = ', el.children[0].children);
        console.log('el in formatOneTBL = ', el.tagName);
    }
    for(let tbl_el of el.children[0].children) {
            for(let tbl_td of tbl_el.children) {
                reuse_extract_table_children(tbl_td);
            }

    }
}

/*	===================================================================================	*/

let formatTBL = (arr) => {
}

/*	===================================================================================	*/

let formatIMG = (arr) => {
    for (el of arr) {
    }

}

/*	===================================================================================	*/

let contentHalf = (arr) => {
    for (csElHalf of arr) {
        if(developer) {
            console.log('csElHalf = ', csElHalf);
        }
        csElHalf.classList.add('w-50');
    }
}

/*	===================================================================================	*/

let contentFull = (arr) => {
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> contentFull');

	for (csElFull of arr) {
        csElFull.style.background = 'yellow'
        //        csElFull.classList.add('w-100', 'flex-fill', 'p-3');
        csElFull.classList.add('w-100');
    }
}

/*	===================================================================================	*/


globalThis.formatCs = () => {
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

		console.log('alert', 'Class Names Not Assigned to All Pace Content' + '\n' + 'cs-[type (txt, img, tbl)]-[size (50, 100)]' + '\n \n' + 'Text blocks => cs-txt-50 or cs-txt-100' + '\n' + 'Images => cs-img-50 or cs-img-100' + '\n' + 'Tables => cs-tbl-50 or cs-tbl-100');
    }
}

/*	===================================================================================	*/


globalThis.showToolTip = (e) => {
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> showToolTip');
    

    if(developer) {
        console.log('showToolTip FN = ', e.target.title);
        console.log('showToolTip FN = ', e.target.parentNode.id);
    }

    e.target.style.background = 'red'

    //  e.target.parentNode.setAttribute('alt', e.target.title);
    //  e.target.parentNode.setAttribute('title', e.target.title);
    //  e.target.parentNode.setAttribute('tooltip', e.target.title);

    e.target.parentNode.setAttribute('alt', e.target.title);
    e.target.parentNode.setAttribute('title', e.target.title);
    e.target.parentNode.setAttribute('tooltip', e.target.title);

    //  e.target.removeAttribute('alt');
    //  e.target.removeAttribute('title');
    //  e.target.removeAttribute('tooltip');
}

/*	===================================================================================	*/

globalThis.formatIframe = (el) => {
    /*__________________________________________
      USAGE: format IFRAME content 
      INPUT:  iframe parent element
      RETURN: 
      ------------------------------------------
    */
    
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatIframe');
    

    el.children[0].id = 'myIframe'
    globalThis.$myIframe = document.getElementById('myIframe');
    $myIframe.addEventListener('mouseover', showToolTip);

//    console.log('source = ', el.children[0].src);
    reuse_dev('log', el.children[0].src, 'src');

    el.children[0].removeAttribute('style');
    el.children[0].removeAttribute('width');
    el.children[0].removeAttribute('height');

    el.children[0].style.width = '100%';
    el.children[0].style.minHeight = '700px';
    el.children[0].style.height = 'auto';
    el.children[0].style.margin = '0 auto';


    //  el.children[0].parentNode.setAttribute('alt', 'external interaction element');
    //  el.children[0].parentNode.setAttribute('title', 'external interaction element');
    //  el.children[0].parentNode.setAttribute('tooltip', 'external interaction element');

    //$myIframe.parentNode.setAttribute('alt', 'external interaction element');
    //$myIframe.parentNode.setAttribute('title', 'external interaction element');
    //$myIframe.parentNode.setAttribute('tooltip', 'external interaction element');

    //  el.setAttribute('alt', 'external interaction element');
    //  el.setAttribute('title', 'external interaction element');
    //  el.setAttribute('tooltip', 'external interaction element');

    if(developer) {
        console.log('el.children[0] children = ', el.children[0].contentWindow);
    }


    el.children[0].contentDocument.body.removeAttribute('style');
    el.children[0].contentDocument.body.style.margin = '0 auto';

    // This ID is a must so the obj could be styled
    el.parentNode.id = 'external'

    //  el.parentNode.setAttribute('alt', 'external interaction element')
    //  el.parentNode.setAttribute('title', 'external interaction element')
    //  el.parentNode.setAttribute('tooltip', 'external interaction element')
    el.parentNode.appendChild(el.children[0]);

    reuse_removeEmptyNesting(el.parentNode);
    //    return
}

/*	===================================================================================	*/

globalThis.formatContent = (arr) => {
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> formatContent');

    let elTag = ''; // for current element tag name
    let targetCaptionClass = '';
    let $targetCaption = '';

    for (let mydiv of arr) {
        if (mydiv.children.length > 0) {
            //            mydiv.classList.add('mb-3', 'reset_pos');
            //            mydiv.classList.add('mb-3', 'reset_top_left_clip', 'reset_w_h');
            mydiv.classList.add('mb-3', 'reset_top_left_clip');
            //            mydiv.classList.add('mb-3');

            //            mydiv.id = '';

            for (let divEl of mydiv.children) {
                elTag = divEl.tagName;
                if(developer) {
                    console.log('elTag = ', elTag);
                }

                if (elTag === "P") {
                    if (divEl.children.length < 1) {
                        divEl.remove();
                    }
                    if(developer) {
                        console.log('PARAGRAPH in ', divEl.children);
                    }

                    divEl.removeAttribute('leglh');
                    divEl.removeAttribute('lang');
                    divEl.removeAttribute('style');
                } else if (elTag === "UL" || elTag === "OL") {
                    if(developer) {
                        console.log('LISTS in ', divEl);
                    }
                } else if (elTag === "svg") {
                    if(developer) {
                        console.log('SVG in ', divEl);
                    }
                } else if (elTag === "TABLE") {
                    if(developer) {
                        console.log('TABLE in ', divEl);
                    }
                } else if (elTag === "A") {
                    if(developer) {
                        console.log('ANCHOR in ', divEl);
                    }
                } else if (elTag === "IMG" || elTag === "IFRAME") {
                    if(developer) {
                      console.log('IMG or IFRAME = ', divEl); 
                    }
                    
                    divEl.classList.add('position-relative', 'mb-3');

                    let divClass = divEl.parentElement;

                    if (divClass.classList.contains("has-caption")) {
                        if (divClass.classList.contains("has-caption-01")) {
                            targetCaptionClass = ".the-caption-01";
                        } else if (divClass.classList.contains("has-caption-02")) {
                            targetCaptionClass = ".the-caption-02";
                        } else if (divClass.classList.contains("has-caption-03")) {
                            targetCaptionClass = ".the-caption-03";
                        } else if (divClass.classList.contains("has-caption-04")) {
                            targetCaptionClass = ".the-caption-04";
                        } else if (divClass.classList.contains("has-caption-05")) {
                            targetCaptionClass = ".the-caption-05";
                        } else if (divClass.classList.contains("has-caption-06")) {
                            targetCaptionClass = ".the-caption-06";
                        } else if (divClass.classList.contains("has-caption-07")) {
                            targetCaptionClass = ".the-caption-07";
                        } else if (divClass.classList.contains("has-caption-08")) {
                            targetCaptionClass = ".the-caption-08";
                        } else if (divClass.classList.contains("has-caption-09")) {
                            targetCaptionClass = ".the-caption-09";
                        } else if (divClass.classList.contains("has-caption-10")) {
                            targetCaptionClass = ".the-caption-10";
                        } else if (divClass.classList.contains("has-caption-11")) {
                            targetCaptionClass = ".the-caption-11";
                        } else if (divClass.classList.contains("has-caption-12")) {
                            targetCaptionClass = ".the-caption-12";
                        }

                        $targetCaption = document.querySelector(targetCaptionClass);

                        let captionText = $targetCaption.innerText;

                        $targetCaption.innerText = "";
                        $targetCaption.style.display = "none";

                        divEl.setAttribute("alt", captionText);
                        divEl.setAttribute("title", captionText);
                    }
                }
                formatDIV(divEl.children);
            }
        } else {
            mydiv.remove();
        }
    }

    for (let mytxt of $txts) {
        if (mytxt.children.length > 0) {
            let $textBlock = document.getElementById(mytxt.id);
            $textBlock.getAttribute("style");
            $textBlock.removeAttribute("style");
            //         $textBlock.style.border = "solid thin black";
            
            for (let el of $textBlock.children) {
                // el.removeAttribute("style");
                // el.style.background = "red";
                //           el.style.border = "solid thin black";
                // el.style.padding = "20px";

                // commented to replace in paragraph formatting
                //        el.style.margin = "20px 0";
                if(developer) {
                    console.log('EL TAG ======= ', el.tagName);
                }
                if (el.tagName != 'TABLE') {
                    formatTXT(el.children);
                } else {
                    formatOneTBL(el);
                }
                //          formatTXT(el.children);
            }
        } else {
            mytxt.remove();
        }
    }

    reuse_dev('log', 'close fn /////////////////// formatContent');
    formatCs();
    return
}


/*!
===================================================================================
* Script: init v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================
*/


/*  -------     INIT Functions    ------- */

globalThis.init_DOM = () => {
    reuse_dev('log', '===   === === === === === ===');
    reuse_dev('log', 'start fn ------------------> init_DOM');

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
    reuse_dev('log', 'close fn /////////////////// init_DOM');
    return
}

/*	===================================================================================	*/

let init_courseInfo = () => {
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

/*	===================================================================================	*/

globalThis.init_pageNumber = () => {
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

/*	===================================================================================	*/

let init_pageNav = () => {
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

/*	===================================================================================	*/

globalThis.init_navOptions = () => {
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

/*	===================================================================================	*/

let init_Brand = () => {
    globalThis.$brand_bar = document.createElement("div");
    $brand_bar.id = "brand_bar";

    init_courseInfo();

    globalThis.$brand = document.createElement("img");
    reuse_dev('log', currentLanguage, 'current language init_Brand');
    
//    $brand.src = './dnd_logo.svg';
    let $brandSource = `./dnd_logo_${currentLanguage}.svg`;
//    let $brandSource = './dnd_logo_' + currentLanguage + '.svg';
    reuse_dev('log', $brandSource);
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

/*	===================================================================================	*/

let init_Navbar = () => {
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

/*	===================================================================================	*/

let init_Header = () => {
    globalThis.$header = document.createElement("header");
    $body.insertBefore($header, $modal_menu);

    init_Brand();
    init_Navbar();
    $header.classList.add('container');
}

/*	===================================================================================	*/

let init_Main = () => {
    // parent of saba publisher container
    globalThis.$main = document.createElement("main");
    $body.insertBefore($main, $modal_menu);

    $main.classList.add('container', 'flex-shrink-0', 'bg-transparent');
    $main.appendChild($pageDiv);
}

/*	===================================================================================	*/

let init_modal_menu = () => {
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

/*	===================================================================================	*/

let init_exit = () => {
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

/*	===================================================================================	*/

let init_modal_options = () => {
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

/*	===================================================================================	*/

let init_footer_nav = () => {
    globalThis.$footer_nav = document.createElement("div");
    $footer_nav.id = 'footer_nav';

    $footerContainer.appendChild($footer_nav);
}

/*	===================================================================================	*/

let init_footer_bar = () => {
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

/*	===================================================================================	*/

let init_Footer = () => {
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

/*	===================================================================================	*/

globalThis.init_Layout = () => {
    init_Header();
    init_Main();

    init_navOptions();
    init_Footer();
}

/*	===================================================================================	*/

globalThis.init_Content = () => {
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
/*!
===================================================================================
* Script: formatDOM v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================
*/
let format_DOM_base = () => {
    $html.classList.add('conic-gradient', 'h-100');

    $body.classList.add('d-flex', 'flex-column', 'h-100', 'bg-transparent');

    if ($pageDiv) {
        // removed default height style so page does not crop
        $pageDiv.style.height = 'unset'

        $pageDiv.classList.add('reset_pos', 'container', 'd-flex', 'w-100', 'flex-row', 'flex-wrap', 'justify-content-between', 'align-items-start', 'position-relative', 'shadow', 'bg-white', 'rounded-bottom');

        //    reset children positions and width
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

/*	===================================================================================	*/

let fillNavBrand = () => {
    $titleName.textContent = Var_titleName.getValue();
    $chapterName.textContent = Var_chapterName.getValue();
    $sectionName.textContent = Var_sectionName.getValue();
    $pageName.textContent = Var_pageName.getValue();
}

/*	===================================================================================	*/

let locale_pageNav = () => {
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

/*	===================================================================================	*/

globalThis.extract_pageNav_children = () => {
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

/*	===================================================================================	*/

let cleanup_pageNav = () => {
    // delete mess behine
    let temp_NavPrev = $pageDiv.querySelector(".btn_previous");
    let temp_NavNext = $pageDiv.querySelector(".btn_next");
    //  let temp_exit = $pageDiv.querySelector(".btn_exit");

    temp_NavPrev.remove();
    temp_NavNext.remove();
    //  temp_exit.remove();
}

/*	===================================================================================	*/

let updateCopyright = () => {
    // Both below are working however the first is updatable through Saba Publisher variables panel
    //  const enCopyright = Varcopyen.getValue();
    //  const frCopyright = Varcopyfr.getValue();
    //  $copyright.textContent = eval(currentLanguage + 'Copyright');
    $copyright.textContent = tdd_dictionary.labels.footer.copyright[currentLanguage]

    fillNavBrand();
}

/*	===================================================================================	*/

let disableSabaFunctions = () => {
    //    window.findWH = function() {}
    //    window.ReFlow = function() {}

}

/*	===================================================================================	*/

globalThis.cleanupDOM = () => {
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

/*	===================================================================================	*/

globalThis.removeCssFile = () => {
    const cssFile = document.getElementById("TrivDynStyleSheet");
    //  cssFile.remove();
    //    cssFile.parentNode.removeChild(cssFile);
    //    console.log(cssFile);
    /*BOTH SOLUTIONS ABOVE WORK*/
}

/*	===================================================================================	*/

globalThis.modifyDOM = (lang) => {
    if (lang) {
        globalThis.currentLanguage = lang;

    } else {

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