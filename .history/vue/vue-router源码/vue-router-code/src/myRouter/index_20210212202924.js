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
            window.addEventListener('load', () => {
                this.history.current = location.hash.slice(1)
            })
            window.addEventListener('hashchange', () => {
                this.history.current = location.hash.slice(1)
            })
        } else {

        }
    }
    createMap (routes){
        return routes.reduce((memo, current) => {
            memo[current.path] = current.component
            return memo
        }, {})
    }
}
vueRouter.install = function (vue) {
    if (vueRouter.install.installed) return
    vueRouter.install.installed = true
    vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.router) {
                this._root = this
                this._router = this.$options.router
                vue.util.defineReactive(this, 'current', this._router.history)
            } else {
                this._root = this.$parent._root
            }
            Object.defineProperty(this, '$router', {
                get () {
                    return this._root._router
                }
            })
            Object.defineProperty()
        },
    })
}