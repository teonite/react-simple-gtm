class GTManager {
    constructor(gtagId) {
        this.gtagId = gtagId;
        window.dataLayer = window.dataLayer || [];
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
        document.getElementsByTagName('head')[0].insertAdjacentElement('afterbegin', script);
        this.push('js', new Date());
        this.push('config', this.gtagId);
    }

    push() {
        return window.dataLayer.push(arguments);
    }
}


export default GTManager;
