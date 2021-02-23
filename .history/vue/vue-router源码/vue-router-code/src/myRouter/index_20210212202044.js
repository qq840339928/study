class HistoryRoute {
    constructor () {
        this.current = null
    }
}

class vurRouter {
    constructor (options) {
        this.mode = options || 'hash'
        this.routes = options.routes || []
        this.routesMap = this.createMap(this.routes)
        this.history = new HistoryRoute()
        this.init()
    }
    init () {
        if (this.mode === 'hash') {
            location.hash ? '' : location.hash = '/'
            window.addEventListener
        }
    }
}