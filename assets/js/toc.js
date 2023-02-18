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
        $accordion.classList.add( `accordion`, 'accordion-flush', 'rounded-0' )
    
        let $cardBody = ''

        myArr.forEach( (item, index, arr) => {

            // let $card = document.createElement("div")
            // $card.classList.add( "card", "rounded-0" )
            
            // let $cardHeader = document.createElement("div")
            // $cardHeader.classList.add( "card-header", "bg-gradient-dark", "p-1" )

            // let $cardH2 = document.createElement("h2")
            // $cardH2.classList.add( "mb-0", "d-flex", "justify-content-between" )

            // let $cardButton = document.createElement("button")
            // $cardButton.classList.add( "btn", "btn-block", "text-left", "d-flex", "justify-content-between", "rounded-0" )

            // let $cardCollapse = document.createElement("div")



            // let $cardBody = document.createElement("div")

            if (item.type === "module") {

                $cardHeader.id = `heading${index}`
                $card.appendChild($cardHeader)
    
                let $cardBadge = document.createElement("span")
                $cardBadge.classList.add( "badge", "badge-dark", "badge-pill" )

                let count_pages = item.list.length
                $cardBadge.textContent = count_pages

                $cardHeader.appendChild($cardH2)
    
                for (const [key, value] of Object.entries({
                        type: 'button',
                        'data-toggle': 'collapse',
                        'data-target': `#collapse${index}`,
                        'aria-expanded': 'false',
                        'aria-controls': `collapse${index}`,
                        'data-bs-toggle': 'tooltip',
                        'data-bs-placement': 'top',
                        'title': 'EXPAND / Collapse'
                    })) {
                    $cardButton.setAttribute(key, value)
                }
    
                $cardButton.textContent = item[`${currentLanguage}_name`]
                // $cardButton.addEventListener('click', function (e) {
                //     log($cardButton, 'clicked => ', e)

                //     // let targetPageLink = e.target.dataset.link
                //     let targetPageLink = e.target.dataset.target
                //     // quick fix
                //     document.querySelector(targetPageLink).classList.toggle('collapse')
                //     // targetPageLink.classList.remove('collapse')
                //     log('target => ', targetPageLink)
                //     // trivExitPage(targetPageLink, true)
                // })

                $cardH2.appendChild($cardButton)
                $cardButton.appendChild($cardBadge)

                $cardCollapse.id = `collapse${index}`
                $cardCollapse.classList.add("collapse")

                for (const [key, value] of Object.entries({
                        'aria-labelledby': `heading${index}`,
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

            } else if (item.type === "page") {

                let $listItem = document.createElement("a")
                $listItem.classList.add( "list-group-item", "d-flex", "justify-content-between", "align-items-center", "card-link", "m-0", "p-1", "pl-3" )

                $listItem.href = item[`${currentLanguage}_link`]

                let dataLink = item[`${currentLanguage}_name`]

                $listItem.setAttribute("data-link", dataLink)
                $listItem.style.cursor = 'pointer'

                $listItem.textContent = dataLink

                /*CAPTURE THE CLICK FROM LIST ITEM*/
                $listItem.addEventListener('click', function (e) {
                    log($listItem, 'clicked => ', e)
                    let targetPageLink = e.target.dataset.link
                    trivExitPage(targetPageLink, true)
                })

                $listItem.addEventListener('mouseover', function () {})

                $listItem.addEventListener('mouseleave', function () {})


                if (item.active) {
                    $cardButton.setAttribute("aria-expanded", "true")
                    $cardButton.classList.toggle("btn-secondary")
                    $cardCollapse.classList.toggle("show")
                    $listItem.classList.toggle("active")
                    $listItem.setAttribute("aria-current", "true")
                }
                
                $cardBody.appendChild($listItem)
                // log('$cardBody appended $listItem')
            }

        });
        // }
        // $navTOC.appendChild($accordion)
        // log('$navTOC appended accordion')
// const $test = document.createElement('div')
// $test.id = 'accordionFlushExample'
// // $test.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary')
// $test.classList.add('accordion', 'accordion-flush')
// $test.innerHTML = `<div class="accordion-item">
//   <h2 class="accordion-header" id="flush-headingOne">
//     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//       Accordion Item #1
//     </button>
//   </h2>
//   <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//   </div>
// </div>
// <div class="accordion-item">
//   <h2 class="accordion-header" id="flush-headingTwo">
//     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//       Accordion Item #2
//     </button>
//   </h2>
//   <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
//   </div>
// </div>
// <div class="accordion-item">
//   <h2 class="accordion-header" id="flush-headingThree">
//     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//       Accordion Item #3
//     </button>
//   </h2>
//   <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//   </div>
// </div>`

        toc_df.appendChild($accordion)
        // toc_df.appendChild($test)
        // $body.appendChild($accordion)
        $body.appendChild(toc_df)


    },
    // is bilingual
    eval_toc(en_toc, fr_toc) {
        let module_ndx = 0
        
        // define counters variables
        let module_count, local_count, global_count
        module_count = local_count = global_count = 0
        
        // clone one of the arrays to alter
        let toc_list = [...en_toc]
        log('toc_list = >>', toc_list)

        // add list properties to title and modules
        toc_list.filter((m, ndx, arr) => {
            m.type === "title" ? m.list = new Array() : ''

            if (m.type === "module") {
                // fill list array of parent
                arr[0].list.push(ndx)
                m.list = new Array()
            }
        })

        // will work on one instance lang to save processing
        toc_list.forEach( (item, index, arr) => {
            item.index = index

            // combine EN and FR data into a unified list
            item.fr_name = fr_toc[index].en_name
            item.fr_link = fr_toc[index].en_link
            
            // make sure the list has the active page
            if( currentLanguage === 'fr' ) {
                item.active = fr_toc[index].active
            }

            if(item.type === 'p') {
                item.type = 'page'
                global_count++
                local_count++

                // fill pages obj properties
                item.module = module_count
                item.global = global_count
                item.local = local_count

                // get the current module index for the first child page (the previous item is the module)
                if (arr[index - 1].type === "module") {

                    // get pos of current module
                    module_ndx = index - 1
                    // log('arr[module_ndx].module', arr[module_ndx].module)

                    // add first page position to parent module
                    arr[module_ndx].list.push(index)
                    // console.log(arrr[idx - 1]);
                } else {
                    // if page is not the first child of the module
                    if( item.module === arr[module_ndx].module) {
                        // add pages positions to their parent module
                        arr[module_ndx].list.push(index)
                        // log(index, ' module_ndx => ', module_ndx)
                    }
                }
            }
            
            if(item.type === 'module') {
                // to fix the summary page properties                
                if(index === toc_list.length-1) {
                    item.type = 'page'
                    item.global = global_count + 1
                    item.local = 0

                    // remove the summary from modules list
                    arr[0].list.pop()

                    // delete un-needed properties
                    // delete item.local
                    delete item.module
                    delete item.list
                } else {
                    // reset local page counter and increment the other ones
                    local_count = 0
                    module_count++
                    item.module = module_count

                    // delete un-needed properties
                    delete item.active
                    delete item.en_link
                    delete item.fr_link
                    delete item.global
                    delete item.local
                }
            }

            if(item.type === 'title') {
                // delete un-needed properties
                delete item.en_link
                delete item.fr_link
                delete item.module
                delete item.global
                delete item.local
                delete item.level
                delete item.index
                delete item.active

                // Remove the Starting [EN | ] and [FR | ] from modules names @ Saba Publisher
                item.en_name = item.en_name.slice(5)
                item.fr_name = item.fr_name.slice(5)
            }
            // delete un-needed properties
            delete item.index
            delete item.level
        })


        // Define the main list array
        tdd.toc.list = [...toc_list]

        // Create the nav menu from list
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
