class Socials {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }
    init() {
        if (!this.isValidSelector() || !this.isValidData() || !this.findTargetElement()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidDataItem(item) {
        return true;
    }

    render() {
        let HTML = '';

        for (const item of this.data) {
            if (!this.isValidDataItem(item)) {
                continue;
            }
            
            HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}"></a>`;
        }
            
        this.DOM.innerHTML = HTML;
    }
}

export { Socials }