/*!
===============================================================
* Script: tdd.init v1.0.1
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

/*
RENAMED ||||||||||||||||||||||	>	format_DOM_base = () => {	
*/
tdd.init.styleAppGlobalElements = () => {
    $html.classList.add(
		'conic-gradient',
		'h-100'
	)

    $body.classList.add(
		'd-flex',
		'flex-column',
		'h-100',
		'bg-transparent'
	)

    if ($pageDiv) {
		// log('CONDITION ------------------> if $pageDiv @ tdd.init.styleAppGlobalElements')
        // removed default height style so page does not crop
        $pageDiv.style.height = 'unset'

        $pageDiv.classList.add(
			'reset_pos',
			'container',
			'd-flex',
			'w-100',
			'flex-row',
			'flex-wrap',
			'justify-content-between',
			'align-items-start',
			'position-relative',
			'shadow',
			'bg-white',
			'rounded-bottom'
		)

        //    reset children positions and width
        tdd.lib.remove_Style_multiple($pageDiv.children, [
			'position',
			'left',
			'top',
			'margin',
			'padding',
			'width',
			'height',
			'text-align',
			'fontFamily',
			'fontSize',
			'clip',
			'line-height',
			'text-indent'
		])
		
    } else {
        error('alert', $pageDiv, '$pageDiv NOT FOUND')
    }

    for (const el of $pageDiv.children) {
        //        el.classList.add('my-3');
        //        el.classList.add('mb-3');

        // bootstrap relative
        el.classList.add('position-relative')
    }
	
	$hiddenElements.style.display = 'none';
    
	return
}

/*	===================================================================================	*/

/*
RENAMED ||||||||||||||||||||||	>	init.DOM = () => {	
*/
    
tdd.init.appGlobalElements = () => {
//        tdd.modal.$options.id = "modal_options"
//		tdd.modal.$menu.id = "modal_menu"

//
        // tdd.modal.$options.id = "modal_options"
		// tdd.modal.$menu.id = "modal_menu"
        
        $navTOC.id = 'navTOC'
        $hiddenElements.id = 'hiddenElements'
		
//		$body.prepend(tdd.modal.$options)
//        $body.prepend(tdd.modal.$menu)
		$body.prepend(tdd.modal.$options)
        $body.prepend(tdd.modal.$menu)
        //	$body.appendChild($navTOC);

        // SKIP TO PAGE CONTENT
        //    const $skippy = document.getElementsByClassName("skippy")[0];

		/*
RENAMED ||||||||||||||||||||||	>	format_DOM_base = () => {	
*/
        tdd.init.styleAppGlobalElements()
        return
    }

/*	===================================================================================	*/

tdd.init.courseInfo = () => {
        globalThis.$titleName = document.createElement("h3")
        globalThis.$chapterName = document.createElement("h3")
        globalThis.$sectionName = document.createElement("h2")
        globalThis.$pageName = document.createElement("h1")

        globalThis.pageInSection = VarPageInSection.getValue()
        globalThis.sectionPages = VarPagesInSection.getValue()
        globalThis.pageInChapter = VarPageInChapter.getValue()
        globalThis.chapterPages = VarPagesInChapter.getValue()

        //Will not use these since we have EN, FR and popups
        globalThis.pageInTitle = VarPageInTitle.getValue()
        globalThis.titlePages = VarPagesInTitle.getValue()

        //Will not use these since the original vars are available
        globalThis.sectionPage = Var_sectionPage.getValue()
        globalThis.titlePage = Var_titlePage.getValue()
    }

/*	===================================================================================	*/

    tdd.init.pageNumber = () => {
        globalThis.$pageNumber = document.createElement('button')

        $pageNumber.id = 'pageNumber'
        $pageNumber.classList.add('pageNumber')

        //20230118 since pages are on the root
    //    $pageNumber.textContent = `${pageInSection} ${tdd.dictionary.core.page_number_spacer[currentLanguage]} ${sectionPages}`;
        $pageNumber.textContent = `${pageInChapter} ${tdd.dictionary.core.page_number_spacer[currentLanguage]} ${chapterPages}`

        $pageNumber.setAttribute('type', 'button')
        $pageNumber.setAttribute('role', 'button')

        $pageNumber.setAttribute("data-toggle", "modal")
        $pageNumber.setAttribute("data-target", ".modal_menu")
    }

/*	===================================================================================	*/

    tdd.init.pageNav = () => {
        // page Nav
        globalThis.$pageNav = document.createElement("div")
        $pageNav.id = 'pageNav'

        $pageNav.classList.add('btn-group')
        $pageNav.setAttribute('role', 'group')
        $pageNav.setAttribute('aria-label', 'Page Navigation')

        extract_pageNav_children()

        cleanup_pageNav()

        tdd.init.pageNumber()

        $pageNav.appendChild($pagePrevious)
        $pageNav.appendChild($pageNumber)
        $pageNav.appendChild($pageNext)
        //  $pageNav.appendChild($exit);

        tdd.lib.remove_Style_multiple($pageNav.children, ['position', 'left', 'top'])

        $pageNext.classList.add(
			'btn',
			'btn-sm',
			'btn-secondary'
		)
        $pagePrevious.classList.add(
			'btn',
			'btn-sm',
			'btn-secondary'
		)
        $pageNumber.classList.add(
			'btn',
			'btn-sm',
			'btn-dark'
		)
        //  $exit.classList.add('btn', 'btn-sm', 'btn-danger');

        $pageNav.classList.add(
			'd-flex',
			'py-0'
		)

        $nav_bar.prepend($pageNav)
    }

/*	===================================================================================	*/

    tdd.init.navOptions = () => {
        globalThis.$navOptions = document.createElement("div")

        $navOptions.id = 'navOptions'
        $navOptions.classList.add(
			'btn-group',
			'btn-group-sm',
			'btn-block'
		)
        $navOptions.setAttribute("aria-label", "Course Options")
        $navOptions.setAttribute("role", "group")


        globalThis.nestedPath = tdd.dictionary.labels.modal_options

        globalThis.navOptions = tdd.lib.getNestedArr(currentLanguage, nestedPath, false)
        globalThis.navOptions_names = tdd.lib.getNestedArr(currentLanguage, nestedPath, true)
        globalThis.navOptions_icons = tdd.lib.getNestedArr('icon', nestedPath, true)

        let option_text = ''
        let option_icon = ''

        for (let i = 0; i < navOptions.length; i++) {
            let el = document.createElement("button").cloneNode(true)

            el.id = navOptions[i]
            el.setAttribute("title", navOptions[i])
            el.setAttribute("tooltip", navOptions[i])
            el.setAttribute("data-toggle", navOptions[i])
            el.setAttribute("data-placement", 'bottom')
            el.classList.add('btn', 'btn-dark')

            option_text = navOptions_names[i]
            option_icon = '<i class="fa fa-' + navOptions_icons[i] + '"></i>'
            el.innerHTML = `${option_icon} ${option_text}`
            $navOptions.appendChild(el)
        }
    }

/*	===================================================================================	*/

    tdd.init.Brand = () => {
        globalThis.$brand_bar = document.createElement("div")
        $brand_bar.id = "brand_bar"

        tdd.init.courseInfo()

        globalThis.$brand = document.createElement("img")
        log('log', currentLanguage, 'current language init.Brand')












    //    $brand.src = './dnd_logo.svg';
//        let $brandSource = `./dnd_logo_${currentLanguage}.svg`;
        let $brandSource = `./_assets/img/dnd_logo_${currentLanguage}.svg`
    //    let $brandSource = './dnd_logo_' + currentLanguage + '.svg';
//        log('log', $brandSource);
        $brand.src = $brandSource

        //  $brand.alt = 'Defence logo';
        $brand.setAttribute('alt', 'Defence logo')
        $brand.setAttribute('title', 'Defence logo')
        $brand.setAttribute('tooltip', 'Defence logo')
        $brand.style.height = '20px'
        $brand.classList.add('ml-auto', 'bd-highlight')

        $titleName.classList.add('mr-3')

        $brand_bar.classList.add('py-3')
        $brand_bar.style.display = 'flex'
        //    $brand_bar.appendChild($titleName);
        $brand_bar.appendChild($chapterName)
        $brand_bar.appendChild($brand)

        $header.appendChild($brand_bar)
    }

/*	===================================================================================	*/

    tdd.init.Navbar = () => {
        globalThis.$nav = document.createElement("nav")
        globalThis.$nav_bar = document.createElement("div")

        $nav.classList.add('container')
        $nav_bar.id = 'nav_bar'
        $nav_bar.classList.add(
			'container',
			'navbar',
			'navbar-expand-xs',
			'navbar-light',
			'shadow',
			'rounded-top',
			'align-items-center'
		)

        $pageName.classList.add('w-100')
    //    $pageName.classList.add('pageName');
        //    $pageName.classList.add('mr-auto');
        /*  To add page nav controls with prepend
            then
            Section name will be prepended to come first
        */
        tdd.init.pageNav()

        //  $pageDiv.prepend($pageName);
        $pageDiv.prepend($pageName)

        //20230118 no module
    //    $nav_bar.prepend($sectionName);
    //    $nav_bar.prepend($chapterName);

        $sectionName.classList.add('mr-auto', 'bd-highlight')

        $nav.appendChild($nav_bar)

        $body.insertBefore($nav, tdd.modal.$menu)
    }

/*	===================================================================================	*/

    tdd.init.Header = () => {
        globalThis.$header = document.createElement("header")
        $body.insertBefore($header, tdd.modal.$menu)

        tdd.init.Brand()
        tdd.init.Navbar()
        $header.classList.add('container')
    }

/*	===================================================================================	*/

    tdd.init.Main = () => {
        // parent of saba publisher container
        globalThis.$main = document.createElement("main")
        $body.insertBefore($main, tdd.modal.$menu)

        $main.classList.add(
			'container',
			'flex-shrink-0',
			'bg-transparent'
		)
        $main.appendChild($pageDiv)
    }

/*	===================================================================================	*/

    tdd.init.exit = () => {
        globalThis.$exit = document.querySelector(".btn_exit");

        $exit.children[0].innerHTML = ''

        let $exitChild = $exit.children[0];
        $exitChild.className = $exit.className;
        $exit = $exitChild.cloneNode(true);


        $exit.id = 'btn_exit';
        $exit.title = tdd.dictionary.core.navigation_name.exit[currentLanguage];
        $exit.name = tdd.dictionary.core.navigation_name.exit[currentLanguage];
        $exit.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp; ${tdd.dictionary.core.navigation.exit[currentLanguage]}`;


        $nav_bar.appendChild($exit);
        $exit.classList.add('btn', 'btn-sm', 'btn-danger');

        let temp_exit = $pageDiv.querySelector(".btn_exit");
        temp_exit.remove();

        // Hide the exit button for later update
        $exit.style.display = 'none';
    }

    /*	===================================================================================	*/

    tdd.init.footer_nav = () => {
        globalThis.$footer_nav = document.createElement("div");
        $footer_nav.id = 'footer_nav';

        $footerContainer.appendChild($footer_nav);
    }

    /*	===================================================================================	*/

    tdd.init.footer_bar = () => {
        globalThis.$footer_bar = document.createElement("div");
        $footer_bar.id = 'footer_bar';

        globalThis.$copyright = document.createElement("p");
        $copyright.id = "copyright";
        $copyright.innerHTML = '';

        $footer_bar.appendChild($copyright);
        updateCopyright();

        globalThis.$footer_brand = document.createElement("img");
        $footer_brand.id = 'footer_brand';

//        $footer_brand.src = './canada_logo.svg';
        $footer_brand.src = './_assets/img/canada_logo.svg';
        $footer_brand.alt = 'Symbol of the Government of Canada';
        $footer_brand.style.height = '20px';

        $footer_bar.appendChild($footer_brand);

        $footerContainer.appendChild($footer_bar);
    }

    /*	===================================================================================	*/

    tdd.init.Footer = () => {
        globalThis.$footer = document.createElement("footer");

        globalThis.$footerContainer = document.createElement("div");
        $footerContainer.id = 'footerContainer';
        $footerContainer.classList.add('container');

        $footer.appendChild($footerContainer);

        $body.insertBefore($footer, tdd.modal.$menu);

        $footer.classList.add('footer', 'mt-auto', 'py-3');

        tdd.init.footer_nav();
        tdd.init.footer_bar();
    }

    /*	===================================================================================	*/

    tdd.init.Layout = () => {
        tdd.init.Header();
        tdd.init.Main();

        tdd.init.navOptions();
        tdd.init.Footer();
    }

    /*	===================================================================================	*/

    tdd.init.Content = () => {
        // get elements that id ends with anc
        globalThis.$anchors = $pageDiv.querySelectorAll('[id $= anc]');
        if ($anchors.length > 0) {
            tdd.lib.removeElements($anchors);
            //        tdd.lib.Hide_items('[id $= anc]', $hiddenCollection, false);
        }

        // This will be used for every start page and end page along the title
        let coverPage = '';

        globalThis.$coverPage = $pageDiv.querySelector('.coverPage');

        if ($coverPage != undefined) {
            coverPage = true;
    //        cover.formatPage($coverPage);

            globalThis.$titleCover = $pageDiv.querySelector('.courseCoverPage');
            if ($titleCover != undefined) {
                cover.formatTitleCover($titleCover);
            } else {
                cover.formatPage($coverPage);
            }
        } else {
            coverPage = false;
            globalThis.$txts = $pageDiv.querySelectorAll('[id ^="text"]');

            globalThis.$divs = $pageDiv.querySelectorAll("div");
            if ($divs.length > 0) {
                formatContent($divs);
            }
        }
    }
