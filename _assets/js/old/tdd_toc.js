/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
globalThis.processTOC = (enArr, frArr) => {
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> processTOC');
    
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

//    reuse_dev('log', tmp_enModules, 'tmp_enModules');
//    reuse_dev('log', tmp_frModules, 'tmp_frModules');
    
    enModules = reuse_populate_module_pages(en_toc, tmp_enModules);
    frModules = reuse_populate_module_pages(fr_toc, tmp_frModules);
    
    checkMatching(enModules, frModules);
    
//    let p = 0;
//    for (let n = 0; n < tmpModules.length; n++) {
////        enModules[n] = en_toc.slice(tmpModules[n], tmpModules[n + 1]);
////        frModules[n] = fr_toc.slice(tmpModules[n], tmpModules[n + 1]);
//        enModules[n] = en_toc.slice(tmp_enModules[n], tmp_enModules[n + 1]);
//        frModules[n] = fr_toc.slice(tmp_frModules[n], tmp_frModules[n + 1]);
//        
//        console.log('enModules[n] = ', enModules[n]);
//        console.log('enModules[n] Length = ', enModules[n].length);
//        console.log('frModules[n] = ', frModules[n]);
//        console.log('frModules[n] Length = ', frModules[n].length);
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
//    console.log('enModules = ', enModules);
//    console.log('enModules Length = ', enModules.length);
//    console.log('frModules = ', frModules);
//    console.log('frModules Length = ', frModules.length);
    
    return
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
let checkTOC = (filtered, arr) => {
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> checkTOC');
    
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> getTOC');
    
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
//    reuse_dev('log', '===   === === === === === ===');
//    reuse_dev('log', 'start fn ------------------> extractTOC');
    
	/*
	======================================================
	
    // TABLE OF CONTENT DROP LIST
    globalThis.$toc = document.querySelector('[title="TOC"]');
    $toc.classList.add('toc');

    //Define arrays
    globalThis.full_toc = getTOC($toc);

    // Filter the titles to get number of titles
    globalThis.filteredTitle = reuse_filter_itemType(full_toc, "title");

    globalThis.isBilingual = checkTOC(filteredTitle, full_toc);

//  Prepare TOC based on current language
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