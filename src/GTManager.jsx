class GTManager {
    constructor(gtagId=null, gtmId=null) {
        this.gtagId = gtagId;
        this.gtmId = gtmId;
        window.dataLayer = window.dataLayer || [];
        const head = document.getElementsByTagName('head')[0];

        if(!!this.gtagId) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gtagId}`;
            head.insertAdjacentElement('afterbegin', script);
            this.push('js', new Date());
            this.push('config', this.gtagId);
        }

        if(!!this.gtmId) {
            window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            const gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;
            head.insertAdjacentElement('afterbegin', gtmScript);
        }
    }

    push() {
        if(!this.gtagId) {
            throw new Error("No 'gtagId' property provided to Google Tag Manager, cannot push. Check if declaration of <TagProvider/> contains 'gtagId' property")
        } else {
            return window.dataLayer.push(arguments);
        }
    }
}


export default GTManager;
