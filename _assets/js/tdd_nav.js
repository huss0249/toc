
let fillNavBrand = () => {
    $titleName.textContent = Var_titleName.getValue();
    $chapterName.textContent = Var_chapterName.getValue();
    $sectionName.textContent = Var_sectionName.getValue();
    $pageName.textContent = Var_pageName.getValue();
}

/*	===================================================================================	*/

let locale_pageNav = () => {
    //Same as commented above
    // title and name use same dictionary reference
    $pagePrevious.id = 'btn_prev';
    $pagePrevious.title = tdd.dictionary.core.navigation_name.prev[currentLanguage];
    $pagePrevious.name = tdd.dictionary.core.navigation_name.prev[currentLanguage];
    $pagePrevious.innerHTML = `<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; ${tdd.dictionary.core.navigation.prev[currentLanguage]}`;

    $pageNext.id = 'btn_next';
    $pageNext.title = tdd.dictionary.core.navigation_name.next[currentLanguage];
    $pageNext.name = tdd.dictionary.core.navigation_name.next[currentLanguage];
    $pageNext.innerHTML = `${tdd.dictionary.core.navigation.next[currentLanguage]} &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>`;

    //    $exit.id = 'btn_exit';
    //    $exit.title = tdd.dictionary.core.navigation_name.exit[currentLanguage];
    //    $exit.name = tdd.dictionary.core.navigation_name.exit[currentLanguage];
    //    $exit.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp; ${tdd.dictionary.core.navigation.exit[currentLanguage]}`;
}

/*	===================================================================================	*/

globalThis.extract_pageNav_children = () => {
    globalThis.$pagePrevious = document.querySelector(".btn_previous");
    globalThis.$pageNext = document.querySelector(".btn_next");
    //  globalThis.$exit = document.querySelector(".btn_exit");

    $pagePrevious.children[0].innerHTML = '';
    $pageNext.children[0].innerHTML = ''
    //  $exit.children[0].innerHTML = ''

    // Bring buttons to their parent level instead of being inside a div
    let $pagePreviousChild = $pagePrevious.children[0];
    $pagePreviousChild.className = $pagePrevious.className;
    $pagePrevious = $pagePreviousChild.cloneNode(true);

    let $pageNextChild = $pageNext.children[0];
    $pageNextChild.className = $pageNext.className;
    $pageNext = $pageNextChild.cloneNode(true);

    //  let $exitChild = $exit.children[0];
    //  $exitChild.className = $exit.className;
    //  $exit = $exitChild.cloneNode(true);

    locale_pageNav()
}

/*	===================================================================================	*/

let cleanup_pageNav = () => {
    // delete mess behine
    let temp_NavPrev = $pageDiv.querySelector(".btn_previous");
    let temp_NavNext = $pageDiv.querySelector(".btn_next");
    //  let temp_exit = $pageDiv.querySelector(".btn_exit");

    temp_NavPrev.remove();
    temp_NavNext.remove();
    //  temp_exit.remove();
}

/*	===================================================================================	*/

let updateCopyright = () => {
    // Both below are working however the first is updatable through Saba Publisher variables panel
    //  const enCopyright = Varcopyen.getValue();
    //  const frCopyright = Varcopyfr.getValue();
    //  $copyright.textContent = eval(currentLanguage + 'Copyright');
    $copyright.textContent = tdd.dictionary.labels.footer.copyright[currentLanguage]

    fillNavBrand();
}

/*	===================================================================================	*/
