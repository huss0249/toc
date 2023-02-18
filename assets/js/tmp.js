// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================


<div class="accordion accordion-flush" id="accordionFlushExample">

  <div class="accordion-item">
   
    <h2 class="accordion-header" id="flush-headingOne">
      <button 
          class="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#flush-collapseOne" 
          aria-expanded="false" 
          aria-controls="flush-collapseOne"
      >Accordion Item #1</button>
    </h2>

    <div 
        id="flush-collapseOne" 
        class="accordion-collapse collapse" 
        aria-labelledby="flush-headingOne" 
        data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">

        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>

      </div>
    </div>

  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
      </div>

    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
      </div>

    </div>
  </div>
</div>













// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================




// generate_toc() {
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

                // let count_pages = myArr[i].module
                let count_pages = myArr[i].list.length
                log('count_pages = ', count_pages)

                
                // $cardBadge.textContent = `${myArr[i].length - 1}`
                $cardBadge.textContent = count_pages

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


// }

















// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// toc_list[i].pages = local_count
// log('global_count ', i, toc_list[i], local_count)
// log('toc_list ', i, toc_list[i])





// arr
//   .filter((xx) => {
//     if (xx.module && xx.type != "module") {
//       console.log(xx.module);
//       return true;
//     }
//     return false;
//   })
//   .map((xx) => {
//     console.log(xx.local);

//     return xx.local;
//   })
//   .forEach((xx) => {
//     if (!xx) {
//     }
//   });
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================

// will work on one instance lang to save processing
for(let i = 0; i < toc_list.length; i++) {
    toc_list[i].index = i
    
    toc_list[i].fr_name = fr_toc[i].en_name
    toc_list[i].fr_link = fr_toc[i].en_link
    
            // en_toc[i].type === 'p' ? en_toc[i].type = 'page' : ''
            
            if(toc_list[i].type === 'title') {
                delete toc_list[i].en_link
                delete toc_list[i].fr_link
                delete toc_list[i].module
                delete toc_list[i].global
                delete toc_list[i].local
                delete toc_list[i].level
                delete toc_list[i].index
                delete toc_list[i].active
                
                toc_list[i].en_name = toc_list[i].en_name.slice(5)
                toc_list[i].fr_name = toc_list[i].fr_name.slice(5)
                
            } else if(toc_list[i].type === 'module') {
                if(i === toc_list.length-1) {
                    toc_list[i].type = 'page'
                    toc_list[i].global = global_count + 1
                    // toc_list[i].local = 0
                    // toc_list[i].module = 0
                    
                    delete toc_list[i].local
                    delete toc_list[i].module
                } else {

                    






                    local_count = 0
                    module_count++
                    toc_list[i].module = module_count

                    delete toc_list[i].active
                    delete toc_list[i].en_link
                    delete toc_list[i].fr_link
                    delete toc_list[i].global
                    delete toc_list[i].local
                }
            } else if(toc_list[i].type === 'p') {
                toc_list[i].type = 'page'
                global_count++
                local_count++

                toc_list[i].module = module_count
                toc_list[i].global = global_count
                toc_list[i].local = local_count
            }
            delete toc_list[i].index
            delete toc_list[i].level

        }

        // ================================================================================================
        // ================================================================================================
        // ================================================================================================
        // ================================================================================================
        // ================================================================================================
        // ================================================================================================
