//tdd.modal as an object
tdd.modal = {
    $options: document.createElement("div"),
    $menu: document.createElement("div"),
}
trace(tdd.modal)

tdd.modal.build_options = () => {
    log(null, 'STARTED tdd.modal.build_options')
    // LOCATE PAGE NUMBER WITHIN PAGE NAV

            tdd.modal.$options.id = "modal_options"
		tdd.modal.$menu.id = "modal_menu"

    tdd.modal.options.$toggler = document.createElement("button");
    tdd.modal.options.$toggler.id = 'modal_options_toggle';

    tdd.modal.options.$toggler_icon = document.createElement("span");

    $nav_bar.appendChild(tdd.modal.options.$toggler);

    tdd.modal.options.$dialog = document.createElement("div");
    tdd.modal.options.$content = document.createElement("div");

    tdd.modal.options.$header = document.createElement("div");
    tdd.modal.options.$body = document.createElement("div");
    tdd.modal.options.$footer = document.createElement("div");

    tdd.modal.options.$title = document.createElement("h1");

    tdd.modal.options.$title.textContent = tdd_dictionary.labels.toc.title[currentLanguage];

    //  tdd.modal.options.$content.classList.add('modal-content', 'rounded-0', 'bg-transparent', 'border-0');
    tdd.modal.options.$content.classList.add('modal-content', 'bg-dark', 'p-3');
    tdd.modal.options.$content.appendChild(tdd.modal.options.$title);

    tdd.modal.$options.appendChild(tdd.modal.options.$dialog);

    tdd.modal.options.$dialog.classList.add('modal-dialog');
    tdd.modal.options.$dialog.appendChild(tdd.modal.options.$content);


    //  tdd.modal.options.$content.classList.add('modal-content');

    tdd.modal.options.$header.classList.add('modal-header', 'border-0');

    //  tdd.modal.options.$body.classList.add('modal-body', 'bg-transparent');
    tdd.modal.options.$body.classList.add('modal-body');

    tdd.modal.options.$footer.classList.add('modal-footer', 'border-0');
    tdd.modal.options.$footer.textContent = 'FOOTER MENU HERE';


    //  tdd.modal.options.$content.appendChild(tdd.modal.options.$header);
    //  tdd.modal.options.$content.appendChild(tdd.modal.options.$body);
    //  tdd.modal.options.$content.appendChild(tdd.modal.options.$footer);

    //  tdd.modal.options.$header.appendChild($navOptions);
    tdd.modal.options.$content.appendChild($navOptions);

    tdd.modal.options.$toggler.classList.add('navbar-toggler', 'p-0', 'border-0', 'ml-3');
    tdd.modal.options.$toggler.appendChild(tdd.modal.options.$toggler_icon);


    tdd.modal.$options.classList.add('modal', 'modal_options', 'fade');

    tdd.modal.options.$toggler_icon.innerHTML = `<i class="fa fa-cog" aria-hidden="false"></i>&nbsp; ${tdd_dictionary.labels.modal_options_core.button[currentLanguage]}`;


    tdd.modal.options.$toggler.type = "button";
    tdd.modal.options.$toggler.setAttribute("data-toggle", "modal");
    tdd.modal.options.$toggler.setAttribute("data-target", ".modal_options");

    tdd.modal.$options.setAttribute("role", "dialog");
    tdd.modal.$options.setAttribute("tabindex", "-1");
    tdd.modal.$options.setAttribute("aria-labelledby", "modal options");
	
	    log(null, 'ENDED tdd.modal.build_options')
}

/*	===================================================================================	*/


tdd.modal.build_menu = () => {
    log(null, 'STARTED tdd.modal.build_menu')
    // LOCATE PAGE NUMBER WITHIN PAGE NAV
    tdd.modal.menu.$toggler = document.createElement("button")
    tdd.modal.menu.$toggler.id = 'modal_menu_toggle'

    globalThis.modal_menu_toggle_icon = document.createElement("span")

    //commented as the button is the page number
    //    $nav_bar.appendChild(tdd.modal.menu.$toggler);
    tdd.modal.menu.$dialog = document.createElement("div")
    tdd.modal.menu.$content = document.createElement("div")

    tdd.modal.menu.$header = document.createElement("div")
    tdd.modal.menu.$body = document.createElement("div")
    tdd.modal.menu.$footer = document.createElement("div")

    tdd.modal.menu.$title = document.createElement("h1")

    tdd.modal.menu.$title.textContent = tdd_dictionary.labels.toc.title[currentLanguage]

    //  tdd.modal.menu.$content.classList.add('modal-content', 'rounded-0', 'bg-transparent', 'border-0');
    tdd.modal.menu.$content.classList.add(
        'modal-content',
        'p-3',
        'bg-dark',
        'border-0'
    )
    tdd.modal.menu.$content.appendChild(tdd.modal.menu.$title)

    $modal_menu.appendChild(tdd.modal.menu.$dialog)

    tdd.modal.menu.$dialog.classList.add('modal-dialog')
    tdd.modal.menu.$dialog.appendChild(tdd.modal.menu.$content)


    tdd.modal.menu.$header.classList.add(
        'modal-header',
        'border-0'
    );

    tdd.modal.menu.$body.classList.add('modal-body', 'bg-transparent');

    tdd.modal.menu.$footer.classList.add('modal-footer', 'border-0');
    tdd.modal.menu.$footer.textContent = 'FOOTER MENU HERE';


    tdd.modal.menu.$content.appendChild($navTOC);

    tdd.modal.menu.$toggler.classList.add('navbar-toggler', 'p-0', 'border-0', 'ml-3');
    tdd.modal.menu.$toggler.appendChild(modal_menu_toggle_icon);


    $modal_menu.classList.add('modal', 'modal_menu', 'fade');

    modal_menu_toggle_icon.innerHTML = '<i class="fa fa-bars" aria-hidden="false"></i>';


    tdd.modal.menu.$toggler.type = "button";
    tdd.modal.menu.$toggler.setAttribute("data-toggle", "modal");
    tdd.modal.menu.$toggler.setAttribute("data-target", ".modal_menu");

    $modal_menu.setAttribute("role", "dialog");
    $modal_menu.setAttribute("tabindex", "-1");
    $modal_menu.setAttribute("aria-labelledby", "modal menu");
    log(null, 'ENDED tdd.modal.build_menu')
}

/*	===================================================================================	*/

