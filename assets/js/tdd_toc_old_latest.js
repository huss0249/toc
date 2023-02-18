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
tdd.toc.createNavTOC = (arr) => {
	log(null, 'STARTED tdd.toc.createNavTOC')
    myArr = [...arr]
	
    const $accordion = document.createElement("div")
    $accordion.id = "accordion"
    $accordion.classList.add(
		`accordion`,
		'rounded-0'
	)

	console.log('before first loop', myArr)
    for (let i = 0; i < myArr.length; i++) {
		console.log('started first loop')
        let $card = document.createElement("div")
        $card.classList.add(
			"card",
			"rounded-0"
		)

        let $cardHeader = document.createElement("div")
        $cardHeader.classList.add(
			"card-header",
			"bg-gradient-dark",
			"p-1"
		)

        let $cardH2 = document.createElement("h2")
        $cardH2.classList.add(
			"mb-0",
			"d-flex",
			"justify-content-between"
		)

        let $cardButton = document.createElement("button")
        $cardButton.classList.add(
			"btn",
			"btn-block",
			"text-left",
			"d-flex",
			"justify-content-between",
			"rounded-0"
		)

        let $cardCollapse = document.createElement("div")

		console.log('before SECOND loop')
        for (let j = 0; j < myArr[i].length; j++) {
			console.log('started SECOND loop')
            if (myArr[i][j].type === "module") {
                $cardHeader.id = `heading${i + 1}`
                $card.appendChild($cardHeader)

                globalThis.$cardBadge = document.createElement("span")
                $cardBadge.classList.add(
					"badge",
					"badge-dark",
					"badge-pill"
				)
				
                $cardBadge.textContent = `${myArr[i].length - 1}`

                $cardHeader.appendChild($cardH2)

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
                    $cardButton.setAttribute(key, value)
                }

                $cardButton.textContent = `${myArr[i][j].name}`
                $cardH2.appendChild($cardButton)
                $cardButton.appendChild($cardBadge)

                $cardCollapse.id = `collapse${i + 1}`
                $cardCollapse.classList.add("collapse")

                for (const [key, value] of Object.entries({
                        'aria-labelledby': `heading${i + 1}`,
                        "data-parent": "#accordion"
                    })) {
                    $cardCollapse.setAttribute(key, value)
                }

                $card.appendChild($cardCollapse)

                globalThis.$cardBody = document.createElement("div")
                $cardBody.classList.add("card-body", "list-group-flush", "p-1")

                $cardCollapse.appendChild($cardBody)
                $accordion.appendChild($card)
            } else if (myArr[i][j].type === "page") {

                let $listItem = document.createElement("a")
                $listItem.classList.add(
					"list-group-item",
					"d-flex",
					"justify-content-between",
					"align-items-center",
					"card-link",
					"m-0",
					"p-1",
					"pl-3"
				)

                $listItem.href = `${myArr[i][j].link}`

                let dataLink = `${myArr[i][j].link}`
                $listItem.setAttribute("data-link", dataLink)
                $listItem.style.cursor = 'pointer'
                $listItem.textContent = `${myArr[i][j].name}`

                /*CAPTURE THE CLICK FROM LIST ITEM*/
                $listItem.addEventListener('click', function (e) {
                    let targetPageLink = e.target.dataset.link
                    trivExitPage(targetPageLink, true)
                })

                $listItem.addEventListener('mouseover', function () {})

                $listItem.addEventListener('mouseleave', function () {})


                if (myArr[i][j].active) {
                    $cardButton.setAttribute("aria-expanded", "true")
                    $cardButton.classList.toggle("btn-secondary")
                    $cardCollapse.classList.toggle("show")
                    $listItem.classList.toggle("active")
                    $listItem.setAttribute("aria-current", "true")
                }
                $cardBody.appendChild($listItem)
				console.log('$cardBody appended $listItem')
            }
        }
        $navTOC.appendChild($accordion)
		console.log('$navTOC appended accordion')
    }
}


/*	===================================================================================	*/

tdd.toc.checkMatching = (enArr, frArr) => {
    let mismatch_counter = 0;
    if(enArr.length === frArr.length) {
        for(let n = 0; n < enArr.length; n++) {

			if(enArr[n].length != frArr[n].length) {
                mismatch_counter += 1;
                let msg = `tdd.toc.checkMatching error ${mismatch_counter} Mismatch(s) Found in " ${Object.keys({enArr})[0]} " and " ${Object.keys({frArr})[0]} " at index ${n} => ${enArr[n].length} and ${frArr[n].length}`;
                log('alert', msg);
                log('log', msg);
            }
        }
    } else {
//        log('log', 'ARRAYS LENGTH IS MISMATCHING');
    }
}

/*	===================================================================================	*/

tdd.toc.process = (enArr, frArr) => {
	log(null, 'STARTED tdd.toc.process')
    tdd.toc.en_toc = [...enArr]
    tdd.toc.fr_toc = [...frArr]
    
//    globalThis.tmpModules = reuse.filter_itemType(en_toc, "module");
    tdd.toc.tmp_enModules = tdd.lib.filter_itemType(tdd.toc.en_toc, "module")
    tdd.toc.tmp_frModules = tdd.lib.filter_itemType(tdd.toc.fr_toc, "module")
    
//    tdd.toc.enModules = []
//    tdd.toc.frModules = []

	tdd.toc.enModules = tdd.lib.populate_module_pages(tdd.toc.en_toc, tdd.toc.tmp_enModules)
    tdd.toc.frModules = tdd.lib.populate_module_pages(tdd.toc.fr_toc, tdd.toc.tmp_frModules)
    
    tdd.toc.checkMatching(tdd.toc.enModules, tdd.toc.frModules)
	log(null, 'ENDED tdd.toc.process')
    return
};

/*	===================================================================================	*/

tdd.toc.checkBilingual = (filtered, arr) => {
//	console.log('filtered = ', filtered)
//	console.log('arr = ', arr)
    if (filtered.length % 2 == 0) {
        let checkName = arr[filtered.slice(-1)[0]].name;
//		console.log('checkName = ', checkName)
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
/*	===================================================================================	*/
/*	===================================================================================	*/
/*	===================================================================================	*/
/*	===================================================================================	*/
/*	===================================================================================	*/
//was extractTOC
tdd.toc.init = () => {
    // TABLE OF CONTENT DROP LIST
//    globalThis.$toc = document.querySelector('[title="refTOC"]')
    tdd.toc.$src = document.querySelector('[title="refTOC"]')

    /*Define arrays*/
	//was getTOOC
    tdd.toc.full_toc = tdd.toc.extract(tdd.toc.$src)
	console.log('tdd.toc.full_toc = ', tdd.toc.full_toc)
//	console.log(' = ', )
	
    tdd.toc.checkTitles()
	
	
    tdd.toc.full_pages = tdd.toc.full_toc.filter(x => x.type === "page")
//	log(null, full_pages, 'full_pages')
//    log(null, JSON.stringify(full_pages, null, ' '), 'tdd_lang_toggle.js >>> extract TOC >> full pages');

    tdd.toc.pages_links = tdd.toc.full_pages.map(p => p.link)
//	log(null, pages_links, 'pages_links')
//    log(null, JSON.stringify(pages_links, null, ' '), 'tdd_lang_toggle.js >>> extract TOC pages links');
	return

}

/*	===================================================================================	*/
//was getTOOC
tdd.toc.extract = (obj) => {
//	console.table(obj)
    let arr = [];

    /*Define obj Keys*/
    let itemIndex, itemRawText, itemText, itemLink, itemSelected, itemLevel, itemType

    /*
		Fill the main array
    	Started i from 1 to remove the first unit item from array
	*/
    for (let i = 1; i < obj.children.length; i++) {
        itemIndex = i - 1;
        itemRawText = obj.children[i].innerHTML;
        itemText = itemRawText.split("&nbsp;&nbsp;").join("");
        itemLink = obj.children[i].getAttribute("value");
        itemSelected = obj.children[i].getAttribute("selected");

        /*Get the current Page Index*/
        itemSelected !== null ? itemSelected = 1 : itemSelected = 0;

        /*Get list item level*/
//        itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1;
        itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1;
//		console.log(itemLevel)

        /*Set Type*/
        itemLevel === 0 ? itemType = "unit" : ''
        itemLevel === 1 ? itemType = "title" : ''
        itemLevel === 2 ? itemType = "module" : ''
        itemLevel === 3 ? itemType = "page" : ''

        /*Push obj to array*/
        arr.push({
//            index: itemIndex,
            name: itemText,
            link: itemLink,
            active: itemSelected,
            level: itemLevel,
            type: itemType,
//            moduleNumber: '',
//            pageGlobal: '',
//            pageLocal: ''
        });
    }
//	log(null, JSON.stringify(arr), '===============================================')
	console.table(arr)

/*	const maxLevel = Math.max(...arr.map(o => o.level))
	log(null, maxLevel, "maxLevel")
	
	for (const item of arr) {
//		log(null, item.type, "item Level before")
		item.level === maxLevel ? item.type = 'page' : ''
        log(null, item.type, "item Level")
    }*/

    return arr;
};

/*	===================================================================================	*/

tdd.toc.checkTitles = () => {
    log(null, 'STARTED tdd.toc.checkTitles')
	// Filter the titles to get number of titles
    tdd.toc.filteredTitle = tdd.lib.filter_itemType(tdd.toc.full_toc, "title")
	console.log('tdd.toc.filteredTitle = ', tdd.toc.filteredTitle)
//	console.log(' = ', )

	
    tdd.toc.isBilingual = tdd.toc.checkBilingual(tdd.toc.filteredTitle, tdd.toc.full_toc)
	console.log('tdd.toc.isBilingual = ', tdd.toc.isBilingual)

    //Prepare TOC based on current language
    tdd.toc.en_toc = tdd.toc.full_toc.slice(tdd.toc.filteredTitle[0], tdd.toc.filteredTitle[1])
    tdd.toc.fr_toc = tdd.toc.full_toc.slice(tdd.toc.filteredTitle[1], tdd.toc.filteredTitle[2])
    tdd.toc.popup_toc = tdd.toc.full_toc.slice(tdd.toc.filteredTitle[2], -1)

	
	console.log('tdd.toc.en_toc = ', tdd.toc.en_toc)
	console.log('tdd.toc.fr_toc = ', tdd.toc.fr_toc)
	console.log('tdd.toc.popup_toc = ', tdd.toc.popup_toc)

    tdd.toc.process(tdd.toc.en_toc, tdd.toc.fr_toc)

//    tdd.toc.targetArr = []

    // BASED ON LANGUAGE BOTH BELOW WORK
    // targetArr = [...window[currentLanguage + 'Modules']];
//    tdd.toc.targetArr = [...eval(currentLanguage + 'Modules')]
    tdd.toc.targetArr = [...eval('tdd.toc.' + currentLanguage + 'Modules')]
	log(null, tdd.toc.targetArr, '++++++++++++++++++++++++++++++++++++')
 
	log(null, 'ENDED tdd.toc.checkTitles')
	return tdd.toc.createNavTOC(tdd.toc.targetArr);
}

/*	===================================================================================	*/

tdd.toc.build = (lang_key) => {
	
	log(null, 'CALL TO TOC BUILD FROM modifyDOM')
	tdd.toc.init()

}