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
    }
}