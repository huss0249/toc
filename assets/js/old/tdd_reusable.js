/*!
===================================================================================
* Script: reusable functions v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2023
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
----------------------------------------------------------------------
----------------------------------------------------------------------
	REUSABLE Functions
----------------------------------------------------------------------
----------------------------------------------------------------------
*/




/*
----------------------------------------------------------------------
----------------------------------------------------------------------
	LOG
----------------------------------------------------------------------
----------------------------------------------------------------------

USAGE:	- 	LOG
INPUT:  -	LOG
RETURN:	-	LOG

----------------------------------------------------------------------
*/

//export const log = (log_type, log_data, log_flag) => {
////export const log = (log_data, log_type, log_flag) => {
//	log_flag = log_flag ? `${log_flag} = ` : ' >> ';
//	log_data = log_data ? log_data : '';
//	let msg = log_flag + log_data;
//    log_type === 'alert' ? alert(msg) : log_type === 'log' ? console.log(msg) : console.log(msg);
//}

/*
----------------------------------------------------------------------
----------------------------------------------------------------------
	GET VARIABLE NAME AS A STRING
----------------------------------------------------------------------
----------------------------------------------------------------------

USAGE:	- 	This will return the name of a variable
INPUT:  -	Variable object
RETURN:	-	String of the name of that object

----------------------------------------------------------------------
*/


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_set_span_class = (el, className) => {
export const set_span_class = (el, className) => {
    /*
    ======================================================
    USAGE:
            - Set span class
    INPUT:
            - span element
    RETURN:
            - bold, italic & underlined
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    el.className = "";
    el.classList.add(className);
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_getTwin = (ref, nestedObj) => {
export const getTwin = (ref, nestedObj) => {
    /*
    ======================================================
    USAGE:
            - Get the opposite sibling of an object in a nested object
    INPUT:
            - Reference value, nested object path
    RETURN:
            - Value of opposite obj sibling
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let tmp = '';
//    for (el in nestedObj)
    for (let el in nestedObj)
//        if (el != ref) tmp = nestedObj[el];
        el != ref ? tmp = nestedObj[el] : null
	log(null, tmp, 'tmp')
    return tmp;
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_getNestedArr = (ref, nestedObj, flag) => {
export const getNestedArr = (ref, nestedObj, flag) => {
    /*
    ======================================================
    USAGE:
            - Get nested object list
    INPUT:
            - Reference value, nested object path
    RETURN:
            - Array of obj children
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let tmpArr = [];

    if (flag) {
        for (el in nestedObj) tmpArr.push(nestedObj[el][ref]);
    } else {
        for (el in nestedObj) tmpArr.push(el);
    }
    return tmpArr;
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_getClickedOption = (ref, nestedObj, flag) => {
export const getClickedOption = (ref, nestedObj, flag) => {
    /*
    ======================================================
    USAGE:
            - Get clicked nav options button link
    INPUT:
            - Reference value, nested object path
    RETURN:
            - obj with children
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let tmp = '';
    for (el in nestedObj)
        if (el === ref) tmp = nestedObj[el];
    return tmp;
};


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_filter_itemType = (arr, val) => {
export const filter_itemType = (arr, val) => {
    /*
    ======================================================
    USAGE:
            - Filter By Item Type
    INPUT:
            - Array and filter value
    RETURN:
            - Filtered array including filtered indexes
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let filterArr = [];
    for (i = 0; i < arr.length; i++)
        if (arr[i].type === val) filterArr.push(i);
    return filterArr;
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_filter_itemName = (arr, val) => {
export const filter_itemName = (arr, val) => {
    /*
    ======================================================
    USAGE:
            - Filter By popup page name
    INPUT:
            - Array and filter value
    RETURN:
            - Filtered array including filtered indexes
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    let filterArr = {};
    for (i = 0; i < arr.length; i++)
        if (arr[i].name.toLowerCase() === val.toLowerCase()) filterArr = arr[i];
    return filterArr;
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_append_multiple = (arr, targetElement) => {
export const append_multiple = (arr, targetElement) => {
    /*
    ======================================================
    USAGE:
            - Append multiple children to 1 Parent
    INPUT:
            - Array and target element
    RETURN:
            - updated > target element
    ======================================================
    TO DO:
            -
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    arr.forEach(i => targetElement.appendChild(i));
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_set_Attribute_multiple = (attr, parameter, arr, arr2, strToRemove, strToPlace) => {
export const set_Attribute_multiple = (attr, parameter, arr, arr2, strToRemove, strToPlace) => {
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
    for (let i = 0; i < arr2.length; i++) {
        let newValue = arr2[i].replace(strToRemove, strToPlace);
        if (attr) {
            arr[i].setAttribute(parameter, newValue);
        } else {
            arr[i][parameter] = newValue.toLowerCase();
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
//globalThis.reuse_set_ID_multiple = (arr, arr2, strToRemove, strToPlace) => {
export const set_ID_multiple = (arr, arr2, strToRemove, strToPlace) => {
    /*
    ======================================================
    USAGE:
            - Apply id to multiple elements based on their obj definition
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
    for (let i = 0; i < arr2.length; i++) {
        let targetID = arr2[i].replace(strToRemove, strToPlace);
        arr[i].id = targetID;
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_set_Class_multiple = (arr, classNames) => {
export const set_Class_multiple = (arr, classNames) => {
    /*
    ======================================================
    USAGE:
            - Assign class to multiple elements based on their obj definition
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
    for (i = 0; i < arr.length; i++) classNames.forEach(j => arr[i].classList.toggle(j));
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_remove_Attribute_multiple = (arr, attrName) => {
export const remove_Attribute_multiple = (arr, attrName) => {
    /*
    ======================================================
    USAGE:
            - Remove Attribute from multiple elements based on their obj definition
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
    for (i = 0; i < arr.length; i++) arr[i].removeAttribute(attrName);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_remove_Style_multiple = (arr, styleNames) => {
export const remove_Style_multiple = (arr, styleNames) => {
    /*
    ======================================================
    USAGE:
            - Remove Attribute from multiple elements based on their obj definition
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
//	let i = 0;
    for (let i = 0; i < arr.length; i++) styleNames.forEach(j => arr[i].style.j = null);
	
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_remove_Style_multiple_children = (arr, styleNames) => {
export const remove_Style_multiple_children = (arr, styleNames) => {
    /*
    ======================================================
    USAGE:
            - Remove Attribute from multiple elements based on their obj definition
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
    for (const el of arr) {
        styleNames.forEach(j => {
            //  			el.style.j = null;
            //  			el.style.setProperty([j], 'initial');
            el.style.removeProperty([j]);
            //  			el.style.removeProperty([j]);
            //  			el.removeAttribute("style");
            //  			el.style.removeAttribute([j]);
            //            log('el.style = ', el.style);
            for (const ell of el.children) {
                styleNames.forEach(k => {
                    //                      ell.style.k = null;
                    //                      ell.style.setProperty([k], 'initial');
                    ell.style.removeProperty([k]);
                    //        ell.style.removeProperty([k]);
                    //                      ell.removeAttribute("style");


                    //                      log('el.style = ', el.style);
                });
            }
        });
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_extract_table_children = (el) => {
export const extract_table_children = (el) => {
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

    log(null, 'el children', el.children);

    
    for(let el_child of el.children) {
//        log(null, 'el_child = ', el_child.tagName);
//        log(null, 'el_child = ', el_child.children);
//        if(el_child.tagName === 'P' && el_child.children < 2) {
        if(el_child.tagName === 'P') {
//            log(null, 'el_child = ', el_child.tagName);
//            log(null, 'el_child = ', el_child.children);
//            log(null, 'el_child = ', el_child.parentNode);
            
            el_child.parentNode.removeAttribute('style');
            // el_child.parentNode.style = '';

            
            el_child.parentNode.innerHTML = el_child.innerHTML;
//            let $tmp_HTML = el_child.firstChild.firstChild;
//            el_child.parentNode.appendChild($tmp_HTML);
        } else {
            log(null, 'table cel might have more than a child');
        }
        
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
//globalThis.reuse_Hide_items = (itemParam, dropTarget, unsure) => {
export const Hide_items = (itemParam, dropTarget, unsure) => {
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
        //        dropTarget.appendChild(el);
    }
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.replaceTag = (elTarget, elType) => {
export const replaceTag = (elTarget, elType) => {
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
    let $oldEl = elTarget;
    let $newEl = document.createElement(elType);

    Array.from($oldEl.attributes).map(el => $newEl.setAttribute(el.name, el.value));

    $oldEl.parentNode.insertBefore($newEl, $oldEl);
}


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.reuse_removeElements = (arr) => {
export const removeElements = (arr) => {
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

    for (let el of arr) {
        if (el.children.length < 1) {
            el.remove();
        } else {
            log(null, 'FN reuse_removeElements: found non empty Anchor ===> ', el);
            
//            reuse_dev('log', el, 'FN reuse_removeElements: found non empty Anchor');
            //log(null, 'FN reuse_removeElements: found non empty Anchor ===> ', el.children[0].tagName);
            if (el.children[0].tagName === 'IFRAME') {
                log(null, 'IFRAME FOUND');
                formatIframe(el);
            }
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
//globalThis.reuse_removeEmptyNesting = (elem) => {
export const removeEmptyNesting = (elem) => {
    /*
    ======================================================
    USAGE:
            - Remove elements of any given array 
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
    for (let el of elem.children) {
        if (el.children.length < 1) {
            el.remove();
        } else {
            
            log(null, 'CLEANUP: found non empty Anchor ===> ', el);
            
            //        log(null, 'FN reuse_removeElements: found non empty Anchor ===> ', el.children[0].tagName);
            //        if(el.children[0].tagName === 'IFRAME') {
            //           log(null, 'YES IFRAME HERE');
            //            formatIframe(el);
            //        }
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
//globalThis.reuse_formatCs = (arr) => {
export const formatCs = (arr) => {
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
    log(null, '===   === === === === === ===');
    log(null, 'start fn ------------------> reuse_formatCs');

    for (let el of arr) {
        //    el.style.background = "skyblue";
        //    el.style.position = "relative";
        //    el.style.top = "unset";
        //    el.style.left = "unset";
        el.removeAttribute('style');
        el.classList.add('flex-fill', 'p-3', 'position-relative');
    }
    log(null, 'close fn /////////////////// reuse_formatCs');
}





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



//globalThis.reuse_populate_module_pages = (arr, tmpArr) => {
export const populate_module_pages = (arr, tmpArr) => {
    let myArr = [];
    let p = 0;
    for (let n = 0; n < tmpArr.length; n++) {
//        enModules[n] = en_toc.slice(tmpModules[n], tmpModules[n + 1]);
//        frModules[n] = fr_toc.slice(tmpModules[n], tmpModules[n + 1]);
        myArr[n] = arr.slice(tmpArr[n], tmpArr[n + 1]);

//        log(null, 'current Modules[n] = ', myArr[n]);
//        log(null, 'current Modules[n] Length = ', myArr[n].length);
        
        for (let k = 0; k < myArr[n].length; k++) {
            
            // What if The number of pages is not matching based on the globale number of pages without the modules?
            
            
            
            
            if (myArr[n][k].type === "page") {
                p = p + 1;
                myArr[n][k].moduleNumber = n + 1;
//                frModules[n][k].moduleNumber = n + 1;

                myArr[n][k].pageLocal = k;
//                frModules[n][k].pageLocal = k;

                myArr[n][k].pageGlobal = p;
//                frModules[n][k].pageGlobal = p;

                if (myArr[n][k].active) {
//                    frModules[n][k].active = true;
                    globalThis.activePagePosition = myArr[n][k].pageGlobal;
                }// else if (frModules[n][k].active) {
//                    enModules[n][k].active = true;
//                    globalThis.activePagePosition = frModules[n][k].pageGlobal;
//                }
            }
        }
    }
    
//    log(null, 'current Modules = ', myArr);
//    log(null, 'current Modules Length = ', myArr.length);
    
    return myArr
}



//globalThis.checkMatching = (enArr, frArr) => {
export const checkMatching = (enArr, frArr) => {
    let mismatch_counter = 0;
    if(enArr.length === frArr.length) {
//        reuse_dev('log', 'EN & FR LISTS IDENTICAL');
        for(let n = 0; n < enArr.length; n++) {
//            log(null, 'enArr[n].length', enArr[n].length);
//            log(null, 'frArr[n].length', frArr[n].length);
            
            if(enArr[n].length != frArr[n].length) {
                mismatch_counter += 1;
//                log(null, Object.keys({enArr})[0]);
//               log(null, `${mismatch_counter} Mismatch(s) Found in " ${Object.keys({enArr})[0]} " and " ${Object.keys({frArr})[0]} " at index ${n} => ${enArr[n].length} and ${frArr[n].length}`);
                let msg = `checkMatching error ${mismatch_counter} Mismatch(s) Found in " ${Object.keys({enArr})[0]} " and " ${Object.keys({frArr})[0]} " at index ${n} => ${enArr[n].length} and ${frArr[n].length}`;
                alert(msg);
                log(null, msg);
                
            }
        }
    } else {
//        reuse_dev('log', 'ARRAYS LENGTH IS MISMATCHING');
    }
}

/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.assignHeading = (el, heading) => {
export const assignHeading = (el, heading) => {
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
    log(null, '===   === === === === === ===');
    log(null, 'start fn ------------------> assignHeading');
    

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