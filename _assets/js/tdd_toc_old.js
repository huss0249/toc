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
let createNavTOC = (arr) => {
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

globalThis.checkMatching = (enArr, frArr) => {
    let mismatch_counter = 0;
    if(enArr.length === frArr.length) {
        for(let n = 0; n < enArr.length; n++) {

			if(enArr[n].length != frArr[n].length) {
                mismatch_counter += 1;
                let msg = `checkMatching error ${mismatch_counter} Mismatch(s) Found in " ${Object.keys({enArr})[0]} " and " ${Object.keys({frArr})[0]} " at index ${n} => ${enArr[n].length} and ${frArr[n].length}`;
                log('alert', msg);
                log('log', msg);
            }
        }
    } else {
//        log('log', 'ARRAYS LENGTH IS MISMATCHING');
    }
}

/*	===================================================================================	*/

globalThis.processTOC = (enArr, frArr) => {
    en_toc = [...enArr];
    fr_toc = [...frArr];
    
    log(null, 'en_toc = ', en_toc);
//    log(null, 'en_toc Length = ', en_toc.length);
    log(null, 'fr_toc = ', fr_toc);
//    log(null, 'fr_toc Length = ', fr_toc.length);

//    globalThis.tmpModules = reuse.filter_itemType(en_toc, "module");
    globalThis.tmp_enModules = reuse.filter_itemType(en_toc, "module");
    globalThis.tmp_frModules = reuse.filter_itemType(fr_toc, "module");
    
    globalThis.enModules = [];
    globalThis.frModules = [];

	enModules = reuse.populate_module_pages(en_toc, tmp_enModules);
    frModules = reuse.populate_module_pages(fr_toc, tmp_frModules);
    
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
