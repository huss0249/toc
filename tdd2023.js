import './assets/js/util.js'

// import './_assets/js/_test.js'

tdd.App = {
    process_data(mm) {
        
        // info ('Received data', tdd.toc.list)
        return info ('Processing data')
    },
    // get_data: (js_loaded) => {
    get_data() {
        // const interval = setInterval(() => {
        //     info('Waiting for data...')
            // if( !tdd.js_loaded ) {
                //Do Something While Waiting / Spinner Gif etc.
            // }else{
                info('Data found...')
                // clearInterval(interval)
                // import('./_assets/js/tdd_toc.js')
                import('./assets/js/toc.js')
            // }
        // }, 500);
        return
    },
    get_js() {
        tdd.js_loaded = false

        let arr = [
            // "./_assets/js/util.js",
            // "./_assets/js/tdd_dictionary.js",
            // "./_assets/js/tdd_lib.js",
            // "./_assets/js/_lib/bootstrap.bundle.min.js",
            "./assets/js/dictionary.js",
            "./assets/js/lib.js",
            "./assets/js/lib/bootstrap.bundle.min.js",
            // "./_assets/js/tdd_options.js",
            // "./_assets/js/tdd_modal.js",
            // "./_assets/js/tdd_init.js",
            // "./_assets/js/tdd_nav.js",
            // "./_assets/js/tdd_event.js",
            // "./_assets/js/tdd_covers.js",
            // "./_assets/js/tdd_toc.js",
            // "./_assets/js/tdd_app.js"
        ]

        tdd.loadJS(arr)
        // return tdd.App.get_data(tdd.js_loaded)
        return this.get_data(tdd.js_loaded)
    },
	init() {
        //language observer
        // const observer = new MutationObserver( () => {
            // if(Var_lang.getValue()) {
                // currentLanguage = Var_lang.getValue()
                currentLanguage = 'en'
                lang = currentLanguage
                info('lang => ', lang)

                tdd.$preloader.classList.add('preloader-hidden')

                observer.disconnect()

                tdd.App.get_js()
                // tdd.App.get_data()
                
                // lang === 'title' ? tdd.covers.buildTitle() : ''
                // lang === 'en' || lang === 'fr' ? modifyDOM(lang) : ''
            // }
        // })

        // const target = $body
        // const config = { childList: true }
        // observer.observe(target, config)
        // return tdd.App.get_js()
	},
}
window.addEventListener('DOMContentLoaded', tdd.App.init)
