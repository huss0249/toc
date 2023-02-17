/*!
===============================================================
* Script: tdd.toc v1.0.1
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

tdd.toc = {
    // filter data
    filter_data() {
    },
    // Build TOC
    generate_toc() {

        log('currentLanguage = >', currentLanguage)
        
        let toc_df = new DocumentFragment();
        
        myArr = [...tdd.toc.list]
        log('myArr => ', myArr)

        const $accordion = document.createElement("div")
        $accordion.id = "accordion"
        $accordion.classList.add( `accordion`, 'rounded-0' )
    
        // Iteration from the first Module instead of having the title in the loop
        let $cardBody = ''
        for (let i = 1; i < myArr.length; i++) {

            let $card = document.createElement("div")
            $card.classList.add( "card", "rounded-0" )

            
            let $cardHeader = document.createElement("div")
            $cardHeader.classList.add( "card-header", "bg-gradient-dark", "p-1" )
    

            let $cardH2 = document.createElement("h2")
            $cardH2.classList.add( "mb-0", "d-flex", "justify-content-between" )
    

            let $cardButton = document.createElement("button")
            $cardButton.classList.add( "btn", "btn-block", "text-left", "d-flex", "justify-content-between", "rounded-0" )
    

            let $cardCollapse = document.createElement("div")
    

            // let $cardBody = document.createElement("div")
            // let $cardBody = document.createElement("div")






            // for (let j = 0; j < myArr[i].length; j++) {
            

                
                // if (myArr[i][j].type === "module") {
                if (myArr[i].type === "module") {

                    // $cardHeader.id = `heading${i + 1}`
                    $cardHeader.id = `heading${i}`
                    $card.appendChild($cardHeader)
    
                    let $cardBadge = document.createElement("span")
                    $cardBadge.classList.add( "badge", "badge-dark", "badge-pill" )
                    let count_pages = myArr[i].module
                    // log('count_pages = ', count_pages)


                    
                    $cardBadge.textContent = `${myArr[i].length - 1}`
    
                    $cardHeader.appendChild($cardH2)
    
                    for (const [key, value] of Object.entries({
                            type: 'button',
                            'data-toggle': 'collapse',
                            // 'data-target': `#collapse${i + 1}`,
                            'data-target': `#collapse${i}`,
                            'aria-expanded': 'false',
                            // 'aria-controls': `collapse${i + 1}`,
                            'aria-controls': `collapse${i}`,
                            'data-bs-toggle': 'tooltip',
                            'data-bs-placement': 'top',
                            'title': 'EXPAND / Collapse'
                        })) {
                        $cardButton.setAttribute(key, value)
                    }
    
                    $cardButton.textContent = myArr[i][`${currentLanguage}_name`]

                    $cardH2.appendChild($cardButton)
                    $cardButton.appendChild($cardBadge)
    
                    // $cardCollapse.id = `collapse${i + 1}`
                    $cardCollapse.id = `collapse${i}`
                    $cardCollapse.classList.add("collapse")
    
                    for (const [key, value] of Object.entries({
                            // 'aria-labelledby': `heading${i + 1}`,
                            'aria-labelledby': `heading${i}`,
                            "data-parent": "#accordion"
                        })) {
                        $cardCollapse.setAttribute(key, value)
                    }
    
                    $card.appendChild($cardCollapse)
    
                    // let $cardBody = document.createElement("div")
                    $cardBody = document.createElement("div")
                    $cardBody.classList.add("card-body", "list-group-flush", "p-1")
    
                    $cardCollapse.appendChild($cardBody)

                    $accordion.appendChild($card)



                } else if (myArr[i].type === "page") {
    
                    let $listItem = document.createElement("a")
                    $listItem.classList.add( "list-group-item", "d-flex", "justify-content-between", "align-items-center", "card-link", "m-0", "p-1", "pl-3" )
    
                    $listItem.href = myArr[i][`${currentLanguage}_link`]

                    let dataLink = myArr[i][`${currentLanguage}_name`]

                    $listItem.setAttribute("data-link", dataLink)
                    $listItem.style.cursor = 'pointer'

                    $listItem.textContent = dataLink
    
                    /*CAPTURE THE CLICK FROM LIST ITEM*/
                    $listItem.addEventListener('click', function (e) {
                        log('clicked => ', e)
                        let targetPageLink = e.target.dataset.link
                        trivExitPage(targetPageLink, true)
                    })
    
                    $listItem.addEventListener('mouseover', function () {})
    
                    $listItem.addEventListener('mouseleave', function () {})
    
    
                    if (myArr[i].active) {
                        $cardButton.setAttribute("aria-expanded", "true")
                        $cardButton.classList.toggle("btn-secondary")
                        $cardCollapse.classList.toggle("show")
                        $listItem.classList.toggle("active")
                        $listItem.setAttribute("aria-current", "true")
                    }
                    
                    $cardBody.appendChild($listItem)
                    // log('$cardBody appended $listItem')
                }
            // }
        }
            // $navTOC.appendChild($accordion)
            // log('$navTOC appended accordion')
            toc_df.appendChild($accordion)
            // $body.appendChild($accordion)
            $body.appendChild(toc_df)


    },
    // is bilingual
    eval_toc(en_toc, fr_toc) {

        // let module_count = 0;
        // let local_count = 0;
        // let global_count = 0;

        let module_count, local_count, global_count
        module_count = local_count = global_count = 0
        
        // clone one of the arrays to alter
        let toc_list = [...en_toc]
        log('toc_list = >>', toc_list)


        // Filter array by modules and pages
        let modules_ndx = tdd.lib.filter_itemType(toc_list, 'module')
        let pages_ndx = tdd.lib.filter_itemType(toc_list, 'p')

        // fix summary page at the end of the list
        if (toc_list[toc_list.length - 1].type === 'module') {
            toc_list[toc_list.length - 1].type = 'page'
            // toc_list[toc_list.length - 1].type = 'p'
            toc_list[toc_list.length - 1].local = 0
            
            delete toc_list[toc_list.length - 1].module
            // log('toc_list[toc_list.length - 1] = >', toc_list[toc_list.length - 1])
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // let pages_grps = tdd.lib.grouped_pages(pages_ndx, modules_ndx, 'p')
        // tdd.lib.grouped_pages(toc_list, modules_ndx, 'p')
        let pages_grps = tdd.lib.grouped_pages(toc_list, modules_ndx, 'p')
        log('pages_grps = >', pages_grps)


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        log('modules_ndx => ', modules_ndx)
        log('pages_ndx => ', pages_ndx)

        // Added to Title obj
        toc_list[0].children_ndx = modules_ndx

        // loop the list
        toc_list.forEach( (item, index, arr) => {
        
            // combine EN and FR data into a unified list
            item.fr_name = fr_toc[index].en_name
            item.fr_link = fr_toc[index].en_link

            // make sure the list has the active page
            if( currentLanguage === 'fr' ) {
                item.active = fr_toc[index].active
            }
            
            // compact title properties
            if (index === 0 && item.type === 'title') {
                item.en_name = item.en_name.slice(5)
                item.fr_name = item.fr_name.slice(5)
    
                delete item.active
                delete item.module
                delete item.global
                delete item.local
            }

            // Fix the last root page (summary) type and remove the module ref property
            // if (modules_ndx[modules_ndx.length - 1] === arr.length - 1 && arr[arr.length - 1].type === 'module') {
            //     arr[arr.length - 1].type = 'page'
            //     arr[arr.length - 1].local = 0
            //     delete arr[arr.length - 1].module
            //     modules_ndx.pop()
            //     log('modules_ndx => ', modules_ndx)
            // }
    

            // for (let n = 0; n < modules_ndx.length; n++) {
                // log('--LOOOP-----', n)
                // log('--LOOOP-----', index)

                // if(modules_ndx[0] < index > modules_ndx[1]) {
                //     log('page here: ', item, index, modules_ndx[0], modules_ndx[1])
                //     log('-------------------')
                // }
            // }


            // delete unused properties
            delete item.index
            delete item.level
        })


        // if (toc_list[0].type === 'title') {
        //     delete toc_list[0].active
        //     delete toc_list[0].module
        //     delete toc_list[0].global
        //     delete toc_list[0].local
        // }

        // if (toc_list[toc_list.length - 1].type === 'module') {
        //     toc_list[toc_list.length - 1].type = 'page'
        //     toc_list[toc_list.length - 1].local = 0
            
        //     delete toc_list[toc_list.length - 1].module
        //     // log('toc_list[toc_list.length - 1] = >', toc_list[toc_list.length - 1])
        // }

        


        
        // Apply module filter
        // modules_ndx.forEach( (item, index, arr) => {
        //     toc_list[item].module = index + 1;
            
        //     delete toc_list[item].active
        //     delete toc_list[item].global
        //     delete toc_list[item].local
        //     // log(toc_list[item])
        // })
        
        // Apply page filter
        pages_ndx.forEach( (item, index, arr) => {
            
            // Added to Title obj
            // toc_list[item].children_ndx = pages_ndx
    
            // log('modules_ndx calc => ', modules_ndx[1] - modules_ndx[0])
        })
        
        


        


        // toc_list.filter((xx) => {
        //     if (xx.module && xx.type != "module") {
        //         console.log(xx.module);
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }).map((xx) => {
        //     console.log(xx.local);
        //     return xx.local;
        // }).forEach((xx) => {
        //     if (!xx) {
        //     }
        // });















        tdd.toc.list = [...toc_list]
        // info(tdd.toc.list)

        // return tdd.toc.list
        return this.generate_toc()
    },
    //get_titles
    get_titles(raw_toc) {
        // Filter the titles to get number of titles
        const filtered_titles = tdd.lib.filter_itemType(raw_toc, "title")
        // log('filtered_titles = ', filtered_titles)

        let isBilingual = ''
        if (filtered_titles.length % 2 == 0) {
            let checkName = raw_toc[filtered_titles.slice(-1)[0]].en_name;
    		// log('checkName = ', checkName)
            
            // TRUE > Bilingual | No > POPUPS
            // FALSE > Singular | Yes > POPUPS
            checkName.toLowerCase() != "popups | do not alter" ? isBilingual = true : isBilingual = false
        } else {
            // TRUE > Bilingual | Yes > POPUPS
            // FALSE > Singular | No > POPUPS
            filtered_titles.length === 1 ? isBilingual = false : isBilingual = true
        }
        // log('isBilingual => ', isBilingual)
    
        //Prepare TOC based on current language
        const en_toc = raw_toc.slice(filtered_titles[0], filtered_titles[1])
        const fr_toc = raw_toc.slice(filtered_titles[1], filtered_titles[2])
        const popup_toc = raw_toc.slice(filtered_titles[2], -1)
            
        // log('en_toc = ', en_toc)
        // log('fr_toc = ', fr_toc)
        // log('popup_toc = ', popup_toc)

        let mismatch = 0
        if(en_toc.length != fr_toc.length) {
            tdd.errors.toc_mismatch_in_structure = `tdd.toc.get_titles error: Mismatch between EN ${en_toc.length} and FR ${fr_toc.length}`
            
            error(tdd.errors.toc_mismatch_in_structure)
            alert(tdd.errors.toc_mismatch_in_structure)
        } else {
            for(let i = 0; i < en_toc.length; i++) {
                if(en_toc[i].length != fr_toc[i].length) {
                    mismatch += 1

                    tdd.errors.toc_mismatch_in_pages = `tdd.toc.get_titles error: ${mismatch} of mismatching(s) found at: " ${Object.keys({en_toc})[0]} " and " ${Object.keys({fr_toc})[0]} " at index ${n} => ${en_toc[n].length} and ${fr_toc[n].length}`
                    
                    error(tdd.errors.toc_mismatch)
                    alert(tdd.errors.toc_mismatch)
                }
            }

            mismatch === 0 ? this.eval_toc(en_toc, fr_toc) : ''
        }

    },
    // extract data from DOM select option
    extract(obj) {
        // log(obj)
        let arr = []

        // Define obj Keys
        let itemIndex, itemRawText, itemText, itemLink, itemSelected, itemLevel, itemType
    
        // Fill the main array
        Array.from(obj).forEach((item, index) => {
            itemIndex = item.index
            itemRawText = item.innerHTML
            itemText = itemRawText.split("&nbsp;&nbsp;").join("")
            itemLink = item.getAttribute("value")
            itemSelected = item.getAttribute("selected")
            itemType = 'p'

            // Get the current Page Index
            itemSelected !== null ? itemSelected = 1 : itemSelected = 0

            // Get list item level
            itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1
    
            // Set Type
            // itemLevel === 3 || 4 || 5 || 6 || 7 ? itemType = 'p': ''
            itemLevel === 2 ? itemType = "module" : ''
            itemLevel === 1 ? itemType = "title" : ''
            itemLevel === 0 ? itemType = "unit" : ''

            // Push obj to array
            arr.push({
                index: itemIndex,
                en_name: itemText,
                fr_name: '',
                en_link: itemLink,
                fr_link: '',
                active: itemSelected,
                level: itemLevel,
                type: itemType,
                module: '',
                global: '',
                local: ''
            })
        })
       
        //remove Assignable unit from the beginning of the array
        // arr.shift()
        
        // arr[0].level === arr[1].level ? arr[0].type = 'cover' : ''
        arr[1].level === arr[2].level ? arr[1].type = 'cover' : ''
        
        // log('EXTRACTED arr = ', arr)
        
        return arr;
        // return arr, this.get_titles()


    },
    // get toc data from DOM
    init() {
        log('tdd.toc init > loaded')

        const $src = $body.querySelector('[title="refTOC"]')

        const raw_toc = this.extract($src)
        // log('raw_toc = ', raw_toc)
        
    //     tdd.toc.get_titles()
        this.get_titles(raw_toc)
        
        
    //     tdd.toc.full_pages = tdd.toc.raw_toc.filter(x => x.type === "page")
    // //	log(null, full_pages, 'full_pages')
    // //    log(null, JSON.stringify(full_pages, null, ' '), 'tdd_lang_toggle.js >>> extract TOC >> full pages');
    
    //     tdd.toc.pages_links = tdd.toc.full_pages.map(p => p.link)
    // //	log(null, pages_links, 'pages_links')
    // //    log(null, JSON.stringify(pages_links, null, ' '), 'tdd_lang_toggle.js >>> extract TOC pages links');
    //     // return




        return tdd.App.process_data($src)
    },
}
tdd.toc.init()
// tdd.addEventListener('load', tdd.App.process_data)
log('tdd.toc -------> END')