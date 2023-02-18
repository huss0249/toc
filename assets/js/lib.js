/*!
===============================================================
* Script: tdd.lib v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2023
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===============================================================
20230131:
    	- 
===============================================================
TO FIX:
    	- 
===============================================================
*/
//const log = console.warn;

tdd.lib = {
	delay(callBackFunction, tim = 2000) {
		//return a promise that waits before resolving
		log('waiting.......')
		return new Promise(resolve => {
			setTimeout(callBackFunction, tim)
		})
		
	},

    /*	===================================================	*/
	
    //	- Set span class
    set_span_class(el, className) {
        el.className = ""
        el.classList.add(className)
    },

    /*	===================================================	*/

    //	- Get the opposite sibling of an object in a nested object
    getTwin(ref, nestedObj) {
        let tmp = ''
        for (el in nestedObj) if (el != ref) tmp = nestedObj[el]
        return tmp
    },

    /*	===================================================	*/

    //  - Get nested object list
    getNestedArr(ref, nestedObj, flag) {
        let tmpArr = []
        if (flag) {
            for (el in nestedObj) tmpArr.push(nestedObj[el][ref])
        } else {
            for (el in nestedObj) tmpArr.push(el)
        }
        return tmpArr
    },

    /*	===================================================	*/

    //	- Get clicked nav options button link
    getClickedOption(ref, nestedObj, flag) {
        let tmp = ''
        for (el in nestedObj) if (el === ref) tmp = nestedObj[el]
        return tmp
    },

    /*	===================================================	*/

    // - Filter By Item Type
    filter_itemType(arr, val) {
        let filterArr = []
        for (let i = 0; i < arr.length; i++) if (arr[i].type === val) filterArr.push(i)
        return filterArr
    },

    /*	===================================================	*/

    // - Filter By popup page name
    // INPUT:	- Array and filter value
    // RETURN:	- Filtered array including filtered indexes
    filter_itemName(arr, val) {
        let filterArr = {}
        for (let i = 0; i < arr.length; i++)
            if (arr[i].name.toLowerCase() === val.toLowerCase()) filterArr = arr[i]
        return filterArr
    },

    /*	===================================================	*/

    // USAGE:	- Append multiple children to 1 Parent
    // INPUT:	- Array and target element
    // RETURN:	- updated > target element

    append_multiple(arr, targetElement) {
        arr.forEach(i => targetElement.appendChild(i))
    },

    /*	===================================================	*/

    set_Attribute_multiple(attr, parameter, arr, arr2, strToRemove, strToPlace) {
        for (let i = 0; i < arr2.length; i++) {
            let newValue = arr2[i].replace(strToRemove, strToPlace)
            if (attr) {
                arr[i].setAttribute(parameter, newValue)
            } else {
                arr[i][parameter] = newValue.toLowerCase()
            }
        }
    },

    /*	===================================================	*/

    // - Apply id to multiple elements based on their obj definition
    set_ID_multiple(arr, arr2, strToRemove, strToPlace) {
        for (let i = 0; i < arr2.length; i++) {
            let targetID = arr2[i].replace(strToRemove, strToPlace)
            arr[i].id = targetID
        }
    },

    /*	===================================================	*/

    // - Assign class to multiple elements based on their obj definition
    set_Class_multiple(arr, classNames) {
        for (let i = 0; i < arr.length; i++) classNames.forEach(j => arr[i].classList.toggle(j))
    },

    /*	===================================================	*/

    // - Remove Attribute from multiple elements based on their obj definition
    remove_Attribute_multiple(arr, attrName) {
        for (let i = 0; i < arr.length; i++) arr[i].removeAttribute(attrName)
    },

    /*	===================================================	*/

    // - Remove Attribute from multiple elements based on their obj definition
    remove_Style_multiple(arr, styleNames) {
        for (let i = 0; i < arr.length; i++) styleNames.forEach(j => arr[i].style.j = null)
    },

    /*	===================================================	*/

    // - Remove Attribute from multiple elements based on their obj definition
    remove_Style_multiple_children(arr, styleNames) {
        for (const el of arr) {
            styleNames.forEach(j => {
                el.style.removeProperty([j])

                for (const ell of el.children) {
                    styleNames.forEach(k => {
                        ell.style.removeProperty([k])
                    })
                }
            })
        }
    },

    /*	===================================================	*/

    // - format HTML, body and PageDiv
    extract_table_children(el) {
        for(let el_child of el.children) {
            if(el_child.tagName === 'P') {
                el_child.parentNode.removeAttribute('style')
                el_child.parentNode.innerHTML = el_child.innerHTML
            } else {
                log('table cel might have more than a child')
            }
        }
        return
    },

    /*	===================================================	*/

    Hide_items(itemParam, dropTarget, unsure) {
        let itemsCollection = document.querySelectorAll(itemParam);
        for (const el of itemsCollection) {
            let hasClass = el.hasAttribute('class')
            if (!hasClass) {
                dropTarget.appendChild(el)
            } else {
                if (!unsure) {
                    dropTarget.appendChild(el)
                }
            }
        }
    },

    /*	===================================================	*/

    replaceTag(elTarget, elType) {
        let $oldEl = elTarget
        let $newEl = document.createElement(elType)

        Array.from($oldEl.attributes).map(el => $newEl.setAttribute(el.name, el.value))

        $oldEl.parentNode.insertBefore($newEl, $oldEl)
    },

    /*	===================================================	*/

    removeElements(arr) {
        for (let el of arr) {
            if (el.children.length < 1) {
                el.remove()
            } else {
                log('FN removeElements: found non empty Anchor => ', el)

                if (el.children[0].tagName === 'IFRAME') {
                    log('IFRAME FOUND')
                    formatIframe(el)
                }
            }
        }
    },

    /*	===================================================	*/

    // - Remove elements of any given array
    removeEmptyNesting(elem) {
        for (let el of elem.children) {
            if (el.children.length < 1) {
                el.remove()
            } else {
                    log('CLEANUP: found non empty Anchor => ', el)
            }
        }
    },

    /*	===================================================	*/

    formatCs(arr) {
        for (let el of arr) {
            el.removeAttribute('style')
            el.classList.add('flex-fill', 'p-3', 'position-relative')
        }
    },

    /*	===================================================	*/

    populate_module_pages(arr, tmpArr) {
        let myArr = []
        let p = 0
        for (let n = 0; n < tmpArr.length; n++) {
            myArr[n] = arr.slice(tmpArr[n], tmpArr[n + 1])

            for (let k = 0; k < myArr[n].length; k++) {
                if (myArr[n][k].type === "page") {
                    p = p + 1
                    myArr[n][k].moduleNumber = n + 1
                    myArr[n][k].pageLocal = k
                    myArr[n][k].pageGlobal = p

                    if (myArr[n][k].active) {
                        globalThis.activePagePosition = myArr[n][k].pageGlobal
                    }
                }
            }
        }
        return myArr
    },

    /*	===================================================	*/

    grouped_pages(arr, tmpArr, ref_type) {
        let myArr = []
        let p = 0
        for (let n = 0; n < tmpArr.length; n++) {
            // info('n: ', n, ' tmpArr[n] =>', tmpArr[n])

            myArr[n] = arr.slice(tmpArr[n], tmpArr[n + 1])
            // info('myArr[n] = >', myArr[n])
            
            
            for (let k = 0; k < myArr[n].length; k++) {
                // info('n: ', n, ' k: ', k, ' myArr[n][k] = >', myArr[n][k])
            
                if (myArr[n][k].type === ref_type) {
                    p = p + 1
                    myArr[n][k].module = n + 1
                    myArr[n][k].local = k
                    myArr[n][k].global = p
                    // log('n: ', n, ' k: ', k, ' myArr[n][k].type => ', myArr[n][k].type, ' local > ', myArr[n][k].local, ' > global: ', myArr[n][k].global)

                    if (myArr[n][k].active) {
                        tdd.currentPage = myArr[n][k].global
                        // log('tdd.currentPage => ', tdd.currentPage)
                    }
                }
                // log('inner loop K > ', k)
                // log('')
            }
            // let pp = tmpArr.length - 1
            // log('inner loop ended > ', myArr[tmpArr.length - 1][myArr.length - 1])
            // log('outer loop N > ', n)
            // log('----------------------------------------------------------------')
        }
        // log('outer loop ended > ', tmpArr[tmpArr.length - 1])
        return myArr
    },

    /*	===================================================	*/

    // delete Property/'s from Object
    // delete_obj_props(ref_item, arr) {
    //     arr.forEach((prop, index, arr) => {
    //         delete ref_item.prop
    //     })
    //     return
    // }
}
/*	===================================================	*/
log('tdd.lib -------> END')