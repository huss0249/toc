
/*!
===================================================================================
* Script: Listeners v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
===================================================================================
*/
globalThis.fn_Listeners = () => {
	log(null, 'START fn ------------------> fn_Listeners')
    globalThis.windowScroll = () => {
        if (window.scrollY > 50) {
            $nav.classList.remove('container');
            $nav.classList.add('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
            $nav_bar.classList.remove('shadow');
            $sectionName.classList.add('text-light');
            $main.style.paddingTop = '100px';
        } else {
            $nav.classList.add('container');
            $nav.classList.remove('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
            $nav_bar.classList.add('shadow');
            $sectionName.classList.remove('text-light');
            $main.style.paddingTop = '0';
        }
    }

/*	===================================================================================	*/

    globalThis.modal_menu_toggle_btn_clicked = () => {
		log(null, 'START fn ------------------> modal_menu_toggle_btn_clicked')
        $modal_menu.classList.toggle('fade');
    }

/*	===================================================================================	*/

    globalThis.modal_menu_toggle_key_pressed = (e) => {
		log(null, 'START fn ------------------> modal_menu_toggle_key_pressed')
        if ((e.ctrlKey && e.key === 'M') || (e.ctrlKey && e.key === 'm')) document.getElementById("pageNumber").click();
    }

/*	===================================================================================	*/

    globalThis.options_btn_clicked = (e) => {
		log(null, 'START fn ------------------> options_btn_clicked')
        globalThis.clickedOption = '';
        let tmpClickedLink = '';
        let clickedLinkKey = '';
        let clickedLinkName = '';
        let clickedLink = '';

        for (let i = 0; i < navOptions.length; i++) {
            globalThis["$options_" + navOptions[i]] = document.getElementById(navOptions[i]);
            if (this["$options_" + navOptions[i]].id === e.target.id) {
                clickedOption = e.target.id;
            }
        }

        if (clickedOption === 'language') {
			
			
			// UPDATE FROM NEW SKIN========================================================================
			/*	The actual button in saba publisher that actions the click to load JS code >>>
			[	current_page_status('fr', VarPagesInChapter, VarPageInChapter);	]
			That calles that function in langToggle object.
			*/
			
			
			
			
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
			/***************************************************************************************************/
            globalThis.pagePosition = pageInChapter;
            currentLanguage = reuse.getTwin(currentLanguage, tdd_dictionary.core.lang);
            let targetPage = eval(currentLanguage + 'Modules').flat().filter(a => a.pageGlobal == pagePosition);
            let targetPageLink = targetPage.map(page => page.link);
            trivExitPage(targetPageLink, true);
        } else if (clickedOption === 'exit') {
            alert('THIS IS GOING TO CLOSE THE COURSE, ARE YOU SURE?');
        } else {
            tmpClickedLink = reuse.getClickedOption(clickedOption, nestedPath);
            clickedLinkKey = [currentLanguage + '_link'];
            clickedLinkName = tmpClickedLink[currentLanguage].toLocaleLowerCase();
            clickedLink = tmpClickedLink[clickedLinkKey];

            if (clickedLink === 'internal') {
                let tmpPopup = reuse.filter_itemName(popup_toc, clickedLinkName);
                clickedLink = tmpPopup['link'];
            }

            // Fade Modal
            document.getElementById("modal_options_toggle").click();

            // Open in a new tab window
            window.open(clickedLink, '_blank');
        }
    }

}

/*	===================================================================================	*/

globalThis.init_LISTENERS = () => {
	log(null, 'START fn ------------------> init_LISTENERS')
    // init the functions
    fn_Listeners();

    //SCROLL EVENT
    //    document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', windowScroll);

    //MODAL MENU EVENTS
    $modal_menu_toggle.addEventListener('click', modal_menu_toggle_btn_clicked);
    $pageNumber.addEventListener('click', modal_menu_toggle_btn_clicked);

    document.addEventListener('keydown', modal_menu_toggle_key_pressed);

    //LANGUAGE EVENT
    //  $navOptionsLanguage.addEventListener('click', options_btn_clicked);
    $navOptions.addEventListener('click', options_btn_clicked);
}


/*	===================================================================================	*/
