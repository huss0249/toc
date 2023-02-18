
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
        //    log(null, el.innerText);
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

        elFontWeight === "bold" ? reuse.set_span_class(arr[i], "strong") : "";
        elTextDecoration === "underline" ? reuse.set_span_class(arr[i], "underline") : "";
        elFontStyle === "italic" ? reuse.set_span_class(arr[i], "italic") : "";

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
    
    
        log(null, 'el in formatOneTBL = ', el.children[0].children);
        log(null, 'el in formatOneTBL = ', el.tagName);
    
    for(let tbl_el of el.children[0].children) {
            for(let tbl_td of tbl_el.children) {
                reuse.extract_table_children(tbl_td);
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
        
            log(null, 'csElHalf = ', csElHalf);
        
        csElHalf.classList.add('w-50');
    }
}

/*	===================================================================================	*/

let contentFull = (arr) => {
    log('log', '===   === === === === === ===');
    log('log', 'start fn ------------------> contentFull');

	for (csElFull of arr) {
        csElFull.style.background = 'yellow'
        //        csElFull.classList.add('w-100', 'flex-fill', 'p-3');
        csElFull.classList.add('w-100');
    }
}

/*	===================================================================================	*/


globalThis.formatCs = () => {
    log('log', '===   === === === === === ===');
    log('log', 'start fn ------------------> formatCs');
    

    globalThis.$Cs = $pageDiv.querySelectorAll('[class *= cs-]');
    if ($Cs.length > 0) {

        reuse.formatCs($Cs);

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

		log(null, 'alert', 'Class Names Not Assigned to All Pace Content' + '\n' + 'cs-[type (txt, img, tbl)]-[size (50, 100)]' + '\n \n' + 'Text blocks => cs-txt-50 or cs-txt-100' + '\n' + 'Images => cs-img-50 or cs-img-100' + '\n' + 'Tables => cs-tbl-50 or cs-tbl-100');
    }
}

/*	===================================================================================	*/


globalThis.showToolTip = (e) => {
    log('log', '===   === === === === === ===');
    log('log', 'start fn ------------------> showToolTip');
    

    
        log(null, 'showToolTip FN = ', e.target.title);
        log(null, 'showToolTip FN = ', e.target.parentNode.id);
    

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
    
    log('log', '===   === === === === === ===');
    log('log', 'start fn ------------------> formatIframe');
    

    el.children[0].id = 'myIframe'
    globalThis.$myIframe = document.getElementById('myIframe');
    $myIframe.addEventListener('mouseover', showToolTip);

//    log(null, 'source = ', el.children[0].src);
    log('log', el.children[0].src, 'src');

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

    
        log(null, 'el.children[0] children = ', el.children[0].contentWindow);
    


    el.children[0].contentDocument.body.removeAttribute('style');
    el.children[0].contentDocument.body.style.margin = '0 auto';

    // This ID is a must so the obj could be styled
    el.parentNode.id = 'external'

    //  el.parentNode.setAttribute('alt', 'external interaction element')
    //  el.parentNode.setAttribute('title', 'external interaction element')
    //  el.parentNode.setAttribute('tooltip', 'external interaction element')
    el.parentNode.appendChild(el.children[0]);

    reuse.removeEmptyNesting(el.parentNode);
    //    return
}

/*	===================================================================================	*/

globalThis.formatContent = (arr) => {
    log('log', 'start fn ------------------> formatContent');

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
                
                    log(null, 'elTag = ', elTag);
                

                if (elTag === "P") {
                    if (divEl.children.length < 1) {
                        divEl.remove();
                    }
                
                        log(null, 'PARAGRAPH in ', divEl.children);
                

                    divEl.removeAttribute('leglh');
                    divEl.removeAttribute('lang');
                    divEl.removeAttribute('style');
                } else if (elTag === "UL" || elTag === "OL") {
                
                        log(null, 'LISTS in ', divEl);
                
                } else if (elTag === "svg") {
                
                        log(null, 'SVG in ', divEl);
                
                } else if (elTag === "TABLE") {
                
                        log(null, 'TABLE in ', divEl);
                
                } else if (elTag === "A") {
                
                        log(null, 'ANCHOR in ', divEl);
                
                } else if (elTag === "IMG" || elTag === "IFRAME") {
                
                      log(null, 'IMG or IFRAME = ', divEl); 
                
                    
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
                
                    log(null, 'EL TAG ======= ', el.tagName);
                
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

    log('log', 'close fn /////////////////// formatContent');
    formatCs();
    return
}

