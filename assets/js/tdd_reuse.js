//saba.disableSabaFunctions = () => {
//	log(null, 'START fn ------------------> saba.disableSabaFunctions')
//    //    window.findWH = function() {}
//    //    window.ReFlow = function() {}
//	
//	//	REMOVED SABA EVENTS FROM BODY
//    $body.removeAttribute("onfocus");
//    $body.removeAttribute("onresize");
//}
//
///*	===================================================================================	*/
//
//saba.removeCssFile = () => {
//    const cssFile = document.getElementById("TrivDynStyleSheet");
//    //  cssFile.remove();
//    //    cssFile.parentNode.removeChild(cssFile);
//    //    log(null, cssFile);
//    /*BOTH SOLUTIONS ABOVE WORK*/
//}


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



reuse.set_span_class = (el, className) => {
    el.className = "";
    el.classList.add(className);
};

/*	===================================================================================	*/

reuse.getTwin = (ref, nestedObj) => {
    let tmp = '';
    for (el in nestedObj)
        if (el != ref) tmp = nestedObj[el];
    return tmp;
};

/*	===================================================================================	*/

reuse.getNestedArr = (ref, nestedObj, flag) => {
    let tmpArr = [];

    if (flag) {
        for (el in nestedObj) tmpArr.push(nestedObj[el][ref]);
    } else {
        for (el in nestedObj) tmpArr.push(el);
    }
    return tmpArr;
};

/*	===================================================================================	*/

reuse.getClickedOption = (ref, nestedObj, flag) => {
   
    let tmp = '';
    for (el in nestedObj)
        if (el === ref) tmp = nestedObj[el];
    return tmp;
};

/*	===================================================================================	*/

reuse.filter_itemType = (arr, val) => {
   
    let filterArr = [];
    for (i = 0; i < arr.length; i++)
        if (arr[i].type === val) filterArr.push(i);
    return filterArr;
}

/*	===================================================================================	*/

reuse.filter_itemName = (arr, val) => {
    let filterArr = {};
    for (i = 0; i < arr.length; i++)
        if (arr[i].name.toLowerCase() === val.toLowerCase()) filterArr = arr[i];
    return filterArr;
}

/*	===================================================================================	*/

reuse.append_multiple = (arr, targetElement) => {
    arr.forEach(i => targetElement.appendChild(i));
}

/*	===================================================================================	*/

reuse.set_Attribute_multiple = (attr, parameter, arr, arr2, strToRemove, strToPlace) => {
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

reuse.set_ID_multiple = (arr, arr2, strToRemove, strToPlace) => {
    for (let i = 0; i < arr2.length; i++) {
        let targetID = arr2[i].replace(strToRemove, strToPlace);
        arr[i].id = targetID;
    }
}

/*	===================================================================================	*/

reuse.set_Class_multiple = (arr, classNames) => {
    for (i = 0; i < arr.length; i++) classNames.forEach(j => arr[i].classList.toggle(j));
}

/*	===================================================================================	*/

reuse.remove_Attribute_multiple = (arr, attrName) => {
    for (i = 0; i < arr.length; i++) arr[i].removeAttribute(attrName);
}

/*	===================================================================================	*/

reuse.remove_Style_multiple = (arr, styleNames) => {

/*	===================================================================================	*/

    for (i = 0; i < arr.length; i++) styleNames.forEach(j => arr[i].style.j = null);
}

/*	===================================================================================	*/

reuse.remove_Style_multiple_children = (arr, styleNames) => {
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

reuse.extract_table_children = (el) => {
    for(let el_child of el.children) {
        if(el_child.tagName === 'P') {
            el_child.parentNode.removeAttribute('style');
            el_child.parentNode.innerHTML = el_child.innerHTML;
        } else {
            log('log', 'table cel might have more than a child');
        }
        
    }
    return
}

/*	===================================================================================	*/

reuse.Hide_items = (itemParam, dropTarget, unsure) => {
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

reuse.replaceTag = (elTarget, elType) => {
    let $oldEl = elTarget;
    let $newEl = document.createElement(elType);

    Array.from($oldEl.attributes).map(el => $newEl.setAttribute(el.name, el.value));

    $oldEl.parentNode.insertBefore($newEl, $oldEl);
}

/*	===================================================================================	*/

reuse.removeElements = (arr) => {
    for (let el of arr) {
        if (el.children.length < 1) {
            el.remove();
        } else {
            
                log(null, 'FN reuse.removeElements: found non empty Anchor ===> ', el);
            
//            log('log', el, 'FN reuse.removeElements: found non empty Anchor');
            //log(null, 'FN reuse.removeElements: found non empty Anchor ===> ', el.children[0].tagName);
            if (el.children[0].tagName === 'IFRAME') {
                log('log', 'IFRAME FOUND');
                formatIframe(el);
            }
        }
    }
}

/*	===================================================================================	*/

reuse.removeEmptyNesting = (elem) => {
    for (let el of elem.children) {
        if (el.children.length < 1) {
            el.remove();
        } else {

                log(null, 'CLEANUP: found non empty Anchor ===> ', el);
        }
    }
}

/*	===================================================================================	*/

reuse.formatCs = (arr) => {
    for (let el of arr) {
        el.removeAttribute('style');
        el.classList.add('flex-fill', 'p-3', 'position-relative');
    }
}

/*	===================================================================================	*/

reuse.populate_module_pages = (arr, tmpArr) => {
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
