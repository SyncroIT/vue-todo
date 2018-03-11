const Store =  {
    filter: '',
    elements: [],
    tree: {},
    filteredElements: [],
    howMuchDisplay: 10,
    lastId: 0
}

class Actions {
    static insertElement(text) {
        const element  = {
            id: Store.lastId,
            text
        };
        Store.lastId++;
        Store.elements.push(element);
        if(Actions.singularFilter(element)) {
            Store.filteredElements.push(element);
        }
        // Actions.filterElements();
    }

    static filterElements() {
        Store.filteredElements = Store.elements.filter(Actions.singularFilter);
    }

    static singularFilter(element) {
        return element.text.indexOf(Store.filter) >= 0
    }

    static setFilter(text) {
        Store.filter = text;
        Actions.resetDisplay();
        Actions.filterElements();
    }

    static resetDisplay() {
        Store.howMuchDisplay = 10;
    }

    static displayMore(n = 10) {
        Store.howMuchDisplay += n;
    }

    static deleteAll() {
        Actions.resetDisplay();
        Store.elements = [];
        Actions.filterElements();
    }

}


export { Actions, Store };