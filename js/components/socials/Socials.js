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

        if (!this.findTargetElement()) {
            console.error('ERROR: pagal pateikta this.selector nepavyko rasti norimo elemento');
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
            console.error('ERROR: this.selector turi buti ne tuscias tekstas');
            return false;
        }
        return true;
    }

    isValidData() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
            console.error('ERROR: this.selector turi buti ne tuscias tekstas');
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidDataItem(item) {
        const allowedKeys = ['href', 'icon'];

        // tikriname, jog item yra objektas
        if (typeof item !== 'object' ||
            Array.isArray(item) ||
            item === null) {
            console.warn('WARN: netinkamas tipas');
            return false;
        }

        // tikriname, ar item.href yra tinkamas
        if (typeof item.href !== 'string' ||
            item.href === '') {
            console.warn('WARN: netinkamas item.label');
            return false;
        }

        // tikriname, ar item.icon yra tinkamas
        if (typeof item.icon !== 'string' ||
            item.icon === '') {
            console.warn('WARN: netinkamas item.label');
            return false;
        }

        // tikriname, ar item objektas neturi per daug key's (raktazodziu)
        for (const key in item) {
            if (!allowedKeys.includes(key)) {
                return false;
            }
        } 

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