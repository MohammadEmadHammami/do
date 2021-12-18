(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    0: function (t, e, n) {
        t.exports = n("zUnb")
    }, "2QA8": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())()
    }, "2fFW": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        let r = !1;
        const s = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
                if (t) {
                    const t = new Error;
                    console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                r = t
            }, get useDeprecatedSynchronousErrorHandling() {
                return r
            }
        }
    }, "5+tZ": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var r = n("lJxs"), s = n("Cfvw"), i = n("zx2A");

        function o(t, e, n = Number.POSITIVE_INFINITY) {
            return "function" == typeof e ? i => i.pipe(o((n, i) => Object(s.a)(t(n, i)).pipe(Object(r.a)((t, r) => e(n, t, i, r))), n)) : ("number" == typeof e && (n = e), e => e.lift(new a(t, n)))
        }

        class a {
            constructor(t, e = Number.POSITIVE_INFINITY) {
                this.project = t, this.concurrent = e
            }

            call(t, e) {
                return e.subscribe(new l(t, this.project, this.concurrent))
            }
        }

        class l extends i.b {
            constructor(t, e, n = Number.POSITIVE_INFINITY) {
                super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
            }

            _next(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }

            _tryNext(t) {
                let e;
                const n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this.active++, this._innerSub(e)
            }

            _innerSub(t) {
                const e = new i.a(this), n = this.destination;
                n.add(e);
                const r = Object(i.c)(t, e);
                r !== e && n.add(r)
            }

            _complete() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }

            notifyNext(t) {
                this.destination.next(t)
            }

            notifyComplete() {
                const t = this.buffer;
                this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
        }
    }, "5eHb": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return D
        }), n.d(e, "b", function () {
            return I
        });
        var r = n("fXoL"), s = n("R0Ic"), i = n("XNiG"), o = n("jhN1"), a = n("ofXK");
        const l = ["toast-component", ""];

        function c(t, e) {
            if (1 & t) {
                const t = r.Qb();
                r.Pb(0, "button", 5), r.Wb("click", function () {
                    return r.hc(t), r.Yb().remove()
                }), r.Pb(1, "span", 6), r.oc(2, "\xd7"), r.Ob(), r.Ob()
            }
        }

        function u(t, e) {
            if (1 & t && (r.Nb(0), r.oc(1), r.Mb()), 2 & t) {
                const t = r.Yb(2);
                r.zb(1), r.qc("[", t.duplicatesCount + 1, "]")
            }
        }

        function h(t, e) {
            if (1 & t && (r.Pb(0, "div"), r.oc(1), r.nc(2, u, 2, 1, "ng-container", 4), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.titleClass), r.Ab("aria-label", t.title), r.zb(1), r.qc(" ", t.title, " "), r.zb(1), r.dc("ngIf", t.duplicatesCount)
            }
        }

        function d(t, e) {
            if (1 & t && r.Lb(0, "div", 7), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.messageClass), r.dc("innerHTML", t.message, r.ic)
            }
        }

        function f(t, e) {
            if (1 & t && (r.Pb(0, "div", 8), r.oc(1), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.messageClass), r.Ab("aria-label", t.message), r.zb(1), r.qc(" ", t.message, " ")
            }
        }

        function p(t, e) {
            if (1 & t && (r.Pb(0, "div"), r.Lb(1, "div", 9), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.zb(1), r.lc("width", t.width + "%")
            }
        }

        function m(t, e) {
            if (1 & t) {
                const t = r.Qb();
                r.Pb(0, "button", 5), r.Wb("click", function () {
                    return r.hc(t), r.Yb().remove()
                }), r.Pb(1, "span", 6), r.oc(2, "\xd7"), r.Ob(), r.Ob()
            }
        }

        function g(t, e) {
            if (1 & t && (r.Nb(0), r.oc(1), r.Mb()), 2 & t) {
                const t = r.Yb(2);
                r.zb(1), r.qc("[", t.duplicatesCount + 1, "]")
            }
        }

        function y(t, e) {
            if (1 & t && (r.Pb(0, "div"), r.oc(1), r.nc(2, g, 2, 1, "ng-container", 4), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.titleClass), r.Ab("aria-label", t.title), r.zb(1), r.qc(" ", t.title, " "), r.zb(1), r.dc("ngIf", t.duplicatesCount)
            }
        }

        function b(t, e) {
            if (1 & t && r.Lb(0, "div", 7), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.messageClass), r.dc("innerHTML", t.message, r.ic)
            }
        }

        function _(t, e) {
            if (1 & t && (r.Pb(0, "div", 8), r.oc(1), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.Bb(t.options.messageClass), r.Ab("aria-label", t.message), r.zb(1), r.qc(" ", t.message, " ")
            }
        }

        function v(t, e) {
            if (1 & t && (r.Pb(0, "div"), r.Lb(1, "div", 9), r.Ob()), 2 & t) {
                const t = r.Yb();
                r.zb(1), r.lc("width", t.width + "%")
            }
        }

        class w {
            constructor(t, e, n, r, s, o) {
                this.toastId = t, this.config = e, this.message = n, this.title = r, this.toastType = s, this.toastRef = o, this._onTap = new i.a, this._onAction = new i.a, this.toastRef.afterClosed().subscribe(() => {
                    this._onAction.complete(), this._onTap.complete()
                })
            }

            triggerTap() {
                this._onTap.next(), this.config.tapToDismiss && this._onTap.complete()
            }

            onTap() {
                return this._onTap.asObservable()
            }

            triggerAction(t) {
                this._onAction.next(t)
            }

            onAction() {
                return this._onAction.asObservable()
            }
        }

        const S = {
            maxOpened: 0,
            autoDismiss: !1,
            newestOnTop: !0,
            preventDuplicates: !1,
            countDuplicates: !1,
            resetTimeoutOnDuplicate: !1,
            includeTitleDuplicates: !1,
            iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"},
            closeButton: !1,
            disableTimeOut: !1,
            timeOut: 5e3,
            extendedTimeOut: 1e3,
            enableHtml: !1,
            progressBar: !1,
            toastClass: "ngx-toastr",
            positionClass: "toast-top-right",
            titleClass: "toast-title",
            messageClass: "toast-message",
            easing: "ease-in",
            easeTime: 300,
            tapToDismiss: !0,
            onActivateTick: !1,
            progressAnimation: "decreasing"
        }, C = new r.r("ToastConfig");

        class T {
            constructor(t, e) {
                this.component = t, this.injector = e
            }

            attach(t, e) {
                return this._attachedHost = t, t.attach(this, e)
            }

            detach() {
                const t = this._attachedHost;
                if (t) return this._attachedHost = void 0, t.detach()
            }

            get isAttached() {
                return null != this._attachedHost
            }

            setAttachedHost(t) {
                this._attachedHost = t
            }
        }

        class E extends class {
            attach(t, e) {
                return this._attachedPortal = t, this.attachComponentPortal(t, e)
            }

            detach() {
                this._attachedPortal && this._attachedPortal.setAttachedHost(), this._attachedPortal = void 0, this._disposeFn && (this._disposeFn(), this._disposeFn = void 0)
            }

            setDisposeFn(t) {
                this._disposeFn = t
            }
        } {
            constructor(t, e, n) {
                super(), this._hostDomElement = t, this._componentFactoryResolver = e, this._appRef = n
            }

            attachComponentPortal(t, e) {
                const n = this._componentFactoryResolver.resolveComponentFactory(t.component);
                let r;
                return r = n.create(t.injector), this._appRef.attachView(r.hostView), this.setDisposeFn(() => {
                    this._appRef.detachView(r.hostView), r.destroy()
                }), e ? this._hostDomElement.insertBefore(this._getComponentRootNode(r), this._hostDomElement.firstChild) : this._hostDomElement.appendChild(this._getComponentRootNode(r)), r
            }

            _getComponentRootNode(t) {
                return t.hostView.rootNodes[0]
            }
        }

        let O = (() => {
            class t {
                constructor(t) {
                    this._document = t
                }

                ngOnDestroy() {
                    this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement)
                }

                getContainerElement() {
                    return this._containerElement || this._createContainer(), this._containerElement
                }

                _createContainer() {
                    const t = this._document.createElement("div");
                    t.classList.add("overlay-container"), this._document.body.appendChild(t), this._containerElement = t
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(a.c))
            }, t.\u0275prov = r.Gb({
                factory: function () {
                    return new t(r.Tb(a.c))
                }, token: t, providedIn: "root"
            }), t
        })();

        class x {
            constructor(t) {
                this._portalHost = t
            }

            attach(t, e = !0) {
                return this._portalHost.attach(t, e)
            }

            detach() {
                return this._portalHost.detach()
            }
        }

        let k = (() => {
            class t {
                constructor(t, e, n, r) {
                    this._overlayContainer = t, this._componentFactoryResolver = e, this._appRef = n, this._document = r, this._paneElements = new Map
                }

                create(t, e) {
                    return this._createOverlayRef(this.getPaneElement(t, e))
                }

                getPaneElement(t = "", e) {
                    return this._paneElements.get(e) || this._paneElements.set(e, {}), this._paneElements.get(e)[t] || (this._paneElements.get(e)[t] = this._createPaneElement(t, e)), this._paneElements.get(e)[t]
                }

                _createPaneElement(t, e) {
                    const n = this._document.createElement("div");
                    return n.id = "toast-container", n.classList.add(t), n.classList.add("toast-container"), e ? e.getContainerElement().appendChild(n) : this._overlayContainer.getContainerElement().appendChild(n), n
                }

                _createPortalHost(t) {
                    return new E(t, this._componentFactoryResolver, this._appRef)
                }

                _createOverlayRef(t) {
                    return new x(this._createPortalHost(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(O), r.Tb(r.j), r.Tb(r.g), r.Tb(a.c))
            }, t.\u0275prov = r.Gb({
                factory: function () {
                    return new t(r.Tb(O), r.Tb(r.j), r.Tb(r.g), r.Tb(a.c))
                }, token: t, providedIn: "root"
            }), t
        })();

        class A {
            constructor(t) {
                this._overlayRef = t, this.duplicatesCount = 0, this._afterClosed = new i.a, this._activate = new i.a, this._manualClose = new i.a, this._resetTimeout = new i.a, this._countDuplicate = new i.a
            }

            manualClose() {
                this._manualClose.next(), this._manualClose.complete()
            }

            manualClosed() {
                return this._manualClose.asObservable()
            }

            timeoutReset() {
                return this._resetTimeout.asObservable()
            }

            countDuplicate() {
                return this._countDuplicate.asObservable()
            }

            close() {
                this._overlayRef.detach(), this._afterClosed.next(), this._manualClose.next(), this._afterClosed.complete(), this._manualClose.complete(), this._activate.complete(), this._resetTimeout.complete(), this._countDuplicate.complete()
            }

            afterClosed() {
                return this._afterClosed.asObservable()
            }

            isInactive() {
                return this._activate.isStopped
            }

            activate() {
                this._activate.next(), this._activate.complete()
            }

            afterActivate() {
                return this._activate.asObservable()
            }

            onDuplicate(t, e) {
                t && this._resetTimeout.next(), e && this._countDuplicate.next(++this.duplicatesCount)
            }
        }

        class j {
            constructor(t, e) {
                this._toastPackage = t, this._parentInjector = e
            }

            get(t, e, n) {
                return t === w ? this._toastPackage : this._parentInjector.get(t, e, n)
            }
        }

        let I = (() => {
            class t {
                constructor(t, e, n, r, s) {
                    this.overlay = e, this._injector = n, this.sanitizer = r, this.ngZone = s, this.currentlyActive = 0, this.toasts = [], this.index = 0, this.toastrConfig = Object.assign(Object.assign({}, t.default), t.config), t.config.iconClasses && (this.toastrConfig.iconClasses = Object.assign(Object.assign({}, t.default.iconClasses), t.config.iconClasses))
                }

                show(t, e, n = {}, r = "") {
                    return this._preBuildNotification(r, t, e, this.applyConfig(n))
                }

                success(t, e, n = {}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.success || "", t, e, this.applyConfig(n))
                }

                error(t, e, n = {}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.error || "", t, e, this.applyConfig(n))
                }

                info(t, e, n = {}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.info || "", t, e, this.applyConfig(n))
                }

                warning(t, e, n = {}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.warning || "", t, e, this.applyConfig(n))
                }

                clear(t) {
                    for (const e of this.toasts) if (void 0 !== t) {
                        if (e.toastId === t) return void e.toastRef.manualClose()
                    } else e.toastRef.manualClose()
                }

                remove(t) {
                    const e = this._findToast(t);
                    if (!e) return !1;
                    if (e.activeToast.toastRef.close(), this.toasts.splice(e.index, 1), this.currentlyActive = this.currentlyActive - 1, !this.toastrConfig.maxOpened || !this.toasts.length) return !1;
                    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
                        const t = this.toasts[this.currentlyActive].toastRef;
                        t.isInactive() || (this.currentlyActive = this.currentlyActive + 1, t.activate())
                    }
                    return !0
                }

                findDuplicate(t = "", e = "", n, r) {
                    const {includeTitleDuplicates: s} = this.toastrConfig;
                    for (const i of this.toasts) {
                        const o = s && i.title === t;
                        if ((!s || o) && i.message === e) return i.toastRef.onDuplicate(n, r), i
                    }
                    return null
                }

                applyConfig(t = {}) {
                    return Object.assign(Object.assign({}, this.toastrConfig), t)
                }

                _findToast(t) {
                    for (let e = 0; e < this.toasts.length; e++) if (this.toasts[e].toastId === t) return {
                        index: e,
                        activeToast: this.toasts[e]
                    };
                    return null
                }

                _preBuildNotification(t, e, n, r) {
                    return r.onActivateTick ? this.ngZone.run(() => this._buildNotification(t, e, n, r)) : this._buildNotification(t, e, n, r)
                }

                _buildNotification(t, e, n, s) {
                    if (!s.toastComponent) throw new Error("toastComponent required");
                    const i = this.findDuplicate(n, e, this.toastrConfig.resetTimeoutOnDuplicate && s.timeOut > 0, this.toastrConfig.countDuplicates);
                    if ((this.toastrConfig.includeTitleDuplicates && n || e) && this.toastrConfig.preventDuplicates && null !== i) return i;
                    this.previousToastMessage = e;
                    let o = !1;
                    this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened && (o = !0, this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId));
                    const a = this.overlay.create(s.positionClass, this.overlayContainer);
                    this.index = this.index + 1;
                    let l = e;
                    e && s.enableHtml && (l = this.sanitizer.sanitize(r.I.HTML, e));
                    const c = new A(a), u = new w(this.index, s, l, n, t, c), h = new j(u, this._injector),
                        d = new T(s.toastComponent, h), f = a.attach(d, this.toastrConfig.newestOnTop);
                    c.componentInstance = f.instance;
                    const p = {
                        toastId: this.index,
                        title: n || "",
                        message: e || "",
                        toastRef: c,
                        onShown: c.afterActivate(),
                        onHidden: c.afterClosed(),
                        onTap: u.onTap(),
                        onAction: u.onAction(),
                        portal: f
                    };
                    return o || (this.currentlyActive = this.currentlyActive + 1, setTimeout(() => {
                        p.toastRef.activate()
                    })), this.toasts.push(p), p
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(C), r.Tb(k), r.Tb(r.s), r.Tb(o.b), r.Tb(r.A))
            }, t.\u0275prov = r.Gb({
                factory: function () {
                    return new t(r.Tb(C), r.Tb(k), r.Tb(r.o), r.Tb(o.b), r.Tb(r.A))
                }, token: t, providedIn: "root"
            }), t
        })(), R = (() => {
            class t {
                constructor(t, e, n) {
                    this.toastrService = t, this.toastPackage = e, this.ngZone = n, this.width = -1, this.toastClasses = "", this.state = {
                        value: "inactive",
                        params: {easeTime: this.toastPackage.config.easeTime, easing: "ease-in"}
                    }, this.message = e.message, this.title = e.title, this.options = e.config, this.originalTimeout = e.config.timeOut, this.toastClasses = `${e.toastType} ${e.config.toastClass}`, this.sub = e.toastRef.afterActivate().subscribe(() => {
                        this.activateToast()
                    }), this.sub1 = e.toastRef.manualClosed().subscribe(() => {
                        this.remove()
                    }), this.sub2 = e.toastRef.timeoutReset().subscribe(() => {
                        this.resetTimeout()
                    }), this.sub3 = e.toastRef.countDuplicate().subscribe(t => {
                        this.duplicatesCount = t
                    })
                }

                get displayStyle() {
                    if ("inactive" === this.state.value) return "none"
                }

                ngOnDestroy() {
                    this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout)
                }

                activateToast() {
                    this.state = Object.assign(Object.assign({}, this.state), {value: "active"}), !0 !== this.options.disableTimeOut && "timeOut" !== this.options.disableTimeOut && this.options.timeOut && (this.outsideTimeout(() => this.remove(), this.options.timeOut), this.hideTime = (new Date).getTime() + this.options.timeOut, this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10))
                }

                updateProgress() {
                    if (0 === this.width || 100 === this.width || !this.options.timeOut) return;
                    const t = (new Date).getTime();
                    this.width = (this.hideTime - t) / this.options.timeOut * 100, "increasing" === this.options.progressAnimation && (this.width = 100 - this.width), this.width <= 0 && (this.width = 0), this.width >= 100 && (this.width = 100)
                }

                resetTimeout() {
                    clearTimeout(this.timeout), clearInterval(this.intervalId), this.state = Object.assign(Object.assign({}, this.state), {value: "active"}), this.outsideTimeout(() => this.remove(), this.originalTimeout), this.options.timeOut = this.originalTimeout, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10)
                }

                remove() {
                    "removed" !== this.state.value && (clearTimeout(this.timeout), this.state = Object.assign(Object.assign({}, this.state), {value: "removed"}), this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime))
                }

                tapToast() {
                    "removed" !== this.state.value && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove())
                }

                stickAround() {
                    "removed" !== this.state.value && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width = 0)
                }

                delayedHideToast() {
                    !0 !== this.options.disableTimeOut && "extendedTimeOut" !== this.options.disableTimeOut && 0 !== this.options.extendedTimeOut && "removed" !== this.state.value && (this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10))
                }

                outsideTimeout(t, e) {
                    this.ngZone ? this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(t), e)) : this.timeout = setTimeout(() => t(), e)
                }

                outsideInterval(t, e) {
                    this.ngZone ? this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(t), e)) : this.intervalId = setInterval(() => t(), e)
                }

                runInsideAngular(t) {
                    this.ngZone ? this.ngZone.run(() => t()) : t()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(I), r.Kb(w), r.Kb(r.A))
            }, t.\u0275cmp = r.Eb({
                type: t,
                selectors: [["", "toast-component", ""]],
                hostVars: 5,
                hostBindings: function (t, e) {
                    1 & t && r.Wb("click", function () {
                        return e.tapToast()
                    })("mouseenter", function () {
                        return e.stickAround()
                    })("mouseleave", function () {
                        return e.delayedHideToast()
                    }), 2 & t && (r.mc("@flyInOut", e.state), r.Bb(e.toastClasses), r.lc("display", e.displayStyle))
                },
                attrs: l,
                decls: 5,
                vars: 5,
                consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]],
                template: function (t, e) {
                    1 & t && (r.nc(0, c, 3, 0, "button", 0), r.nc(1, h, 3, 5, "div", 1), r.nc(2, d, 1, 3, "div", 2), r.nc(3, f, 2, 4, "div", 3), r.nc(4, p, 2, 2, "div", 4)), 2 & t && (r.dc("ngIf", e.options.closeButton), r.zb(1), r.dc("ngIf", e.title), r.zb(1), r.dc("ngIf", e.message && e.options.enableHtml), r.zb(1), r.dc("ngIf", e.message && !e.options.enableHtml), r.zb(1), r.dc("ngIf", e.options.progressBar))
                },
                directives: [a.k],
                encapsulation: 2,
                data: {animation: [Object(s.j)("flyInOut", [Object(s.g)("inactive", Object(s.h)({opacity: 0})), Object(s.g)("active", Object(s.h)({opacity: 1})), Object(s.g)("removed", Object(s.h)({opacity: 0})), Object(s.i)("inactive => active", Object(s.e)("{{ easeTime }}ms {{ easing }}")), Object(s.i)("active => removed", Object(s.e)("{{ easeTime }}ms {{ easing }}"))])]}
            }), t
        })();
        const P = Object.assign(Object.assign({}, S), {toastComponent: R});
        let D = (() => {
            class t {
                static forRoot(e = {}) {
                    return {ngModule: t, providers: [{provide: C, useValue: {default: P, config: e}}]}
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = r.Ib({type: t}), t.\u0275inj = r.Hb({imports: [[a.b]]}), t
        })(), N = (() => {
            class t {
                constructor(t, e, n) {
                    this.toastrService = t, this.toastPackage = e, this.appRef = n, this.width = -1, this.toastClasses = "", this.state = "inactive", this.message = e.message, this.title = e.title, this.options = e.config, this.originalTimeout = e.config.timeOut, this.toastClasses = `${e.toastType} ${e.config.toastClass}`, this.sub = e.toastRef.afterActivate().subscribe(() => {
                        this.activateToast()
                    }), this.sub1 = e.toastRef.manualClosed().subscribe(() => {
                        this.remove()
                    }), this.sub2 = e.toastRef.timeoutReset().subscribe(() => {
                        this.resetTimeout()
                    }), this.sub3 = e.toastRef.countDuplicate().subscribe(t => {
                        this.duplicatesCount = t
                    })
                }

                get displayStyle() {
                    if ("inactive" === this.state) return "none"
                }

                ngOnDestroy() {
                    this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout)
                }

                activateToast() {
                    this.state = "active", !0 !== this.options.disableTimeOut && "timeOut" !== this.options.disableTimeOut && this.options.timeOut && (this.timeout = setTimeout(() => {
                        this.remove()
                    }, this.options.timeOut), this.hideTime = (new Date).getTime() + this.options.timeOut, this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10))), this.options.onActivateTick && this.appRef.tick()
                }

                updateProgress() {
                    if (0 === this.width || 100 === this.width || !this.options.timeOut) return;
                    const t = (new Date).getTime();
                    this.width = (this.hideTime - t) / this.options.timeOut * 100, "increasing" === this.options.progressAnimation && (this.width = 100 - this.width), this.width <= 0 && (this.width = 0), this.width >= 100 && (this.width = 100)
                }

                resetTimeout() {
                    clearTimeout(this.timeout), clearInterval(this.intervalId), this.state = "active", this.options.timeOut = this.originalTimeout, this.timeout = setTimeout(() => this.remove(), this.originalTimeout), this.hideTime = (new Date).getTime() + (this.originalTimeout || 0), this.width = -1, this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10))
                }

                remove() {
                    "removed" !== this.state && (clearTimeout(this.timeout), this.state = "removed", this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId)))
                }

                tapToast() {
                    "removed" !== this.state && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove())
                }

                stickAround() {
                    "removed" !== this.state && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width = 0)
                }

                delayedHideToast() {
                    !0 !== this.options.disableTimeOut && "extendedTimeOut" !== this.options.disableTimeOut && 0 !== this.options.extendedTimeOut && "removed" !== this.state && (this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = (new Date).getTime() + (this.options.timeOut || 0), this.width = -1, this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10)))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(I), r.Kb(w), r.Kb(r.g))
            }, t.\u0275cmp = r.Eb({
                type: t,
                selectors: [["", "toast-component", ""]],
                hostVars: 4,
                hostBindings: function (t, e) {
                    1 & t && r.Wb("click", function () {
                        return e.tapToast()
                    })("mouseenter", function () {
                        return e.stickAround()
                    })("mouseleave", function () {
                        return e.delayedHideToast()
                    }), 2 & t && (r.Bb(e.toastClasses), r.lc("display", e.displayStyle))
                },
                attrs: l,
                decls: 5,
                vars: 5,
                consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]],
                template: function (t, e) {
                    1 & t && (r.nc(0, m, 3, 0, "button", 0), r.nc(1, y, 3, 5, "div", 1), r.nc(2, b, 1, 3, "div", 2), r.nc(3, _, 2, 4, "div", 3), r.nc(4, v, 2, 2, "div", 4)), 2 & t && (r.dc("ngIf", e.options.closeButton), r.zb(1), r.dc("ngIf", e.title), r.zb(1), r.dc("ngIf", e.message && e.options.enableHtml), r.zb(1), r.dc("ngIf", e.message && !e.options.enableHtml), r.zb(1), r.dc("ngIf", e.options.progressBar))
                },
                directives: [a.k],
                encapsulation: 2
            }), t
        })();
        Object.assign(Object.assign({}, S), {toastComponent: N})
    }, "7o/Q": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var r = n("n6bG"), s = n("gRHU"), i = n("quSY"), o = n("2QA8"), a = n("2fFW"), l = n("NJ4a");

        class c extends i.a {
            constructor(t, e, n) {
                switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                    case 0:
                        this.destination = s.a;
                        break;
                    case 1:
                        if (!t) {
                            this.destination = s.a;
                            break
                        }
                        if ("object" == typeof t) {
                            t instanceof c ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, t));
                            break
                        }
                    default:
                        this.syncErrorThrowable = !0, this.destination = new u(this, t, e, n)
                }
            }

            [o.a]() {
                return this
            }

            static create(t, e, n) {
                const r = new c(t, e, n);
                return r.syncErrorThrowable = !1, r
            }

            next(t) {
                this.isStopped || this._next(t)
            }

            error(t) {
                this.isStopped || (this.isStopped = !0, this._error(t))
            }

            complete() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }

            unsubscribe() {
                this.closed || (this.isStopped = !0, super.unsubscribe())
            }

            _next(t) {
                this.destination.next(t)
            }

            _error(t) {
                this.destination.error(t), this.unsubscribe()
            }

            _complete() {
                this.destination.complete(), this.unsubscribe()
            }

            _unsubscribeAndRecycle() {
                const {_parentOrParents: t} = this;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
            }
        }

        class u extends c {
            constructor(t, e, n, i) {
                let o;
                super(), this._parentSubscriber = t;
                let a = this;
                Object(r.a)(e) ? o = e : e && (o = e.next, n = e.error, i = e.complete, e !== s.a && (a = Object.create(e), Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = o, this._error = n, this._complete = i
            }

            next(t) {
                if (!this.isStopped && this._next) {
                    const {_parentSubscriber: e} = this;
                    a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }

            error(t) {
                if (!this.isStopped) {
                    const {_parentSubscriber: e} = this, {useDeprecatedSynchronousErrorHandling: n} = a.a;
                    if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(l.a)(t), this.unsubscribe(); else {
                        if (this.unsubscribe(), n) throw t;
                        Object(l.a)(t)
                    }
                }
            }

            complete() {
                if (!this.isStopped) {
                    const {_parentSubscriber: t} = this;
                    if (this._complete) {
                        const e = () => this._complete.call(this._context);
                        a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }

            __tryOrUnsub(t, e) {
                try {
                    t.call(this._context, e)
                } catch (n) {
                    if (this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling) throw n;
                    Object(l.a)(n)
                }
            }

            __tryOrSetError(t, e, n) {
                if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (r) {
                    return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (Object(l.a)(r), !0)
                }
                return !1
            }

            _unsubscribe() {
                const {_parentSubscriber: t} = this;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }
        }
    }, "9ppp": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = (() => {
            function t() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }

            return t.prototype = Object.create(Error.prototype), t
        })()
    }, Cfvw: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return h
        });
        var r = n("HDdC"), s = n("SeVD"), i = n("quSY"), o = n("kJWO"), a = n("jZKg"), l = n("Lhse"), c = n("c2HN"),
            u = n("I55L");

        function h(t, e) {
            return e ? function (t, e) {
                if (null != t) {
                    if (function (t) {
                        return t && "function" == typeof t[o.a]
                    }(t)) return function (t, e) {
                        return new r.a(n => {
                            const r = new i.a;
                            return r.add(e.schedule(() => {
                                const s = t[o.a]();
                                r.add(s.subscribe({
                                    next(t) {
                                        r.add(e.schedule(() => n.next(t)))
                                    }, error(t) {
                                        r.add(e.schedule(() => n.error(t)))
                                    }, complete() {
                                        r.add(e.schedule(() => n.complete()))
                                    }
                                }))
                            })), r
                        })
                    }(t, e);
                    if (Object(c.a)(t)) return function (t, e) {
                        return new r.a(n => {
                            const r = new i.a;
                            return r.add(e.schedule(() => t.then(t => {
                                r.add(e.schedule(() => {
                                    n.next(t), r.add(e.schedule(() => n.complete()))
                                }))
                            }, t => {
                                r.add(e.schedule(() => n.error(t)))
                            }))), r
                        })
                    }(t, e);
                    if (Object(u.a)(t)) return Object(a.a)(t, e);
                    if (function (t) {
                        return t && "function" == typeof t[l.a]
                    }(t) || "string" == typeof t) return function (t, e) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new r.a(n => {
                            const r = new i.a;
                            let s;
                            return r.add(() => {
                                s && "function" == typeof s.return && s.return()
                            }), r.add(e.schedule(() => {
                                s = t[l.a](), r.add(e.schedule(function () {
                                    if (n.closed) return;
                                    let t, e;
                                    try {
                                        const n = s.next();
                                        t = n.value, e = n.done
                                    } catch (r) {
                                        return void n.error(r)
                                    }
                                    e ? n.complete() : (n.next(t), this.schedule())
                                }))
                            })), r
                        })
                    }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }(t, e) : t instanceof r.a ? t : new r.a(Object(s.a)(t))
        }
    }, DH7j: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = (() => Array.isArray || (t => t && "number" == typeof t.length))()
    }, EQ5u: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        }), n.d(e, "b", function () {
            return l
        });
        var r = n("XNiG"), s = n("HDdC"), i = (n("7o/Q"), n("quSY")), o = n("x+ZX");

        class a extends s.a {
            constructor(t, e) {
                super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
            }

            _subscribe(t) {
                return this.getSubject().subscribe(t)
            }

            getSubject() {
                const t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }

            connect() {
                let t = this._connection;
                return t || (this._isComplete = !1, t = this._connection = new i.a, t.add(this.source.subscribe(new c(this.getSubject(), this))), t.closed && (this._connection = null, t = i.a.EMPTY)), t
            }

            refCount() {
                return Object(o.a)()(this)
            }
        }

        const l = (() => {
            const t = a.prototype;
            return {
                operator: {value: null},
                _refCount: {value: 0, writable: !0},
                _subject: {value: null, writable: !0},
                _connection: {value: null, writable: !0},
                _subscribe: {value: t._subscribe},
                _isComplete: {value: t._isComplete, writable: !0},
                getSubject: {value: t.getSubject},
                connect: {value: t.connect},
                refCount: {value: t.refCount}
            }
        })();

        class c extends r.b {
            constructor(t, e) {
                super(t), this.connectable = e
            }

            _error(t) {
                this._unsubscribe(), super._error(t)
            }

            _complete() {
                this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
            }

            _unsubscribe() {
                const t = this.connectable;
                if (t) {
                    this.connectable = null;
                    const e = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                }
            }
        }
    }, EnSQ: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var r = n("bl9C"), s = n("fXoL"), i = n("tk/3");
        let o = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.url = r.a.DOMAIN_URL + r.a.API_PERFIX
                }

                header() {
                    const t = window.localStorage.getItem("token");
                    return t ? {Authorization: "Bearer " + t} : null
                }

                sendGetRequest(t, e, n = !0) {
                    return this.http.get(r.a.DOMAIN_URL + (n ? r.a.API_PERFIX : "") + t, {
                        params: e,
                        headers: Object.assign({}, this.header())
                    })
                }

                sendPostRequest(t, e) {
                    return this.http.post(this.url + t, e, {headers: Object.assign({}, this.header())})
                }

                sendPutRequest(t, e) {
                    return this.http.put(this.url + t, e, {headers: Object.assign({}, this.header())})
                }

                sendDeleteRequest(t) {
                    return this.http.delete(this.url + t, {headers: Object.assign({}, this.header())})
                }

                sendRequest(t, e, n) {
                    return "get" == t ? this.sendGetRequest(e, n) : "post" == t ? this.sendPostRequest(e, n) : "delete" == t ? this.sendDeleteRequest(e) : "put" == t ? this.sendPutRequest(e, n) : null
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(i.a))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })()
    }, HDdC: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var r = n("7o/Q"), s = n("2QA8"), i = n("gRHU"), o = n("kJWO"), a = n("SpAZ"), l = n("2fFW");
        let c = (() => {
            class t {
                constructor(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }

                lift(e) {
                    const n = new t;
                    return n.source = this, n.operator = e, n
                }

                subscribe(t, e, n) {
                    const {operator: o} = this, a = function (t, e, n) {
                        if (t) {
                            if (t instanceof r.a) return t;
                            if (t[s.a]) return t[s.a]()
                        }
                        return t || e || n ? new r.a(t, e, n) : new r.a(i.a)
                    }(t, e, n);
                    if (a.add(o ? o.call(a, this.source) : this.source || l.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)), l.a.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1, a.syncErrorThrown)) throw a.syncErrorValue;
                    return a
                }

                _trySubscribe(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        l.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
                            for (; t;) {
                                const {closed: e, destination: n, isStopped: s} = t;
                                if (e || s) return !1;
                                t = n && n instanceof r.a ? n : null
                            }
                            return !0
                        }(t) ? t.error(e) : console.warn(e)
                    }
                }

                forEach(t, e) {
                    return new (e = u(e))((e, n) => {
                        let r;
                        r = this.subscribe(e => {
                            try {
                                t(e)
                            } catch (s) {
                                n(s), r && r.unsubscribe()
                            }
                        }, n, e)
                    })
                }

                _subscribe(t) {
                    const {source: e} = this;
                    return e && e.subscribe(t)
                }

                [o.a]() {
                    return this
                }

                pipe(...t) {
                    return 0 === t.length ? this : (0 === (e = t).length ? a.a : 1 === e.length ? e[0] : function (t) {
                        return e.reduce((t, e) => e(t), t)
                    })(this);
                    var e
                }

                toPromise(t) {
                    return new (t = u(t))((t, e) => {
                        let n;
                        this.subscribe(t => n = t, t => e(t), () => t(n))
                    })
                }
            }

            return t.create = e => new t(e), t
        })();

        function u(t) {
            if (t || (t = l.a.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }
    }, I55L: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = t => t && "number" == typeof t.length && "function" != typeof t
    }, LRne: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var r = n("z+Ro"), s = n("yCtX"), i = n("jZKg");

        function o(...t) {
            let e = t[t.length - 1];
            return Object(r.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(s.a)(t)
        }
    }, Lhse: function (t, e, n) {
        "use strict";

        function r() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }

        n.d(e, "a", function () {
            return s
        });
        const s = r()
    }, NJ4a: function (t, e, n) {
        "use strict";

        function r(t) {
            setTimeout(() => {
                throw t
            }, 0)
        }

        n.d(e, "a", function () {
            return r
        })
    }, R0Ic: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        }), n.d(e, "b", function () {
            return r
        }), n.d(e, "c", function () {
            return s
        }), n.d(e, "d", function () {
            return f
        }), n.d(e, "e", function () {
            return a
        }), n.d(e, "f", function () {
            return l
        }), n.d(e, "g", function () {
            return u
        }), n.d(e, "h", function () {
            return c
        }), n.d(e, "i", function () {
            return h
        }), n.d(e, "j", function () {
            return o
        }), n.d(e, "k", function () {
            return p
        }), n.d(e, "l", function () {
            return m
        });

        class r {
        }

        class s {
        }

        const i = "*";

        function o(t, e) {
            return {type: 7, name: t, definitions: e, options: {}}
        }

        function a(t, e = null) {
            return {type: 4, styles: e, timings: t}
        }

        function l(t, e = null) {
            return {type: 2, steps: t, options: e}
        }

        function c(t) {
            return {type: 6, styles: t, offset: null}
        }

        function u(t, e, n) {
            return {type: 0, name: t, styles: e, options: n}
        }

        function h(t, e, n = null) {
            return {type: 1, expr: t, animation: e, options: n}
        }

        function d(t) {
            Promise.resolve(null).then(t)
        }

        class f {
            constructor(t = 0, e = 0) {
                this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = t + e
            }

            _onFinish() {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
            }

            onStart(t) {
                this._onStartFns.push(t)
            }

            onDone(t) {
                this._onDoneFns.push(t)
            }

            onDestroy(t) {
                this._onDestroyFns.push(t)
            }

            hasStarted() {
                return this._started
            }

            init() {
            }

            play() {
                this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
            }

            triggerMicrotask() {
                d(() => this._onFinish())
            }

            _onStart() {
                this._onStartFns.forEach(t => t()), this._onStartFns = []
            }

            pause() {
            }

            restart() {
            }

            finish() {
                this._onFinish()
            }

            destroy() {
                this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
            }

            reset() {
            }

            setPosition(t) {
                this._position = this.totalTime ? t * this.totalTime : 1
            }

            getPosition() {
                return this.totalTime ? this._position / this.totalTime : 1
            }

            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t => t()), e.length = 0
            }
        }

        class p {
            constructor(t) {
                this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                let e = 0, n = 0, r = 0;
                const s = this.players.length;
                0 == s ? d(() => this._onFinish()) : this.players.forEach(t => {
                    t.onDone(() => {
                        ++e == s && this._onFinish()
                    }), t.onDestroy(() => {
                        ++n == s && this._onDestroy()
                    }), t.onStart(() => {
                        ++r == s && this._onStart()
                    })
                }), this.totalTime = this.players.reduce((t, e) => Math.max(t, e.totalTime), 0)
            }

            _onFinish() {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
            }

            init() {
                this.players.forEach(t => t.init())
            }

            onStart(t) {
                this._onStartFns.push(t)
            }

            _onStart() {
                this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = [])
            }

            onDone(t) {
                this._onDoneFns.push(t)
            }

            onDestroy(t) {
                this._onDestroyFns.push(t)
            }

            hasStarted() {
                return this._started
            }

            play() {
                this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play())
            }

            pause() {
                this.players.forEach(t => t.pause())
            }

            restart() {
                this.players.forEach(t => t.restart())
            }

            finish() {
                this._onFinish(), this.players.forEach(t => t.finish())
            }

            destroy() {
                this._onDestroy()
            }

            _onDestroy() {
                this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
            }

            reset() {
                this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
            }

            setPosition(t) {
                const e = t * this.totalTime;
                this.players.forEach(t => {
                    const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                    t.setPosition(n)
                })
            }

            getPosition() {
                const t = this.players.reduce((t, e) => null === t || e.totalTime > t.totalTime ? e : t, null);
                return null != t ? t.getPosition() : 0
            }

            beforeDestroy() {
                this.players.forEach(t => {
                    t.beforeDestroy && t.beforeDestroy()
                })
            }

            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t => t()), e.length = 0
            }
        }

        const m = "!"
    }, SeVD: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return u
        });
        var r = n("ngJS"), s = n("NJ4a"), i = n("Lhse"), o = n("kJWO"), a = n("I55L"), l = n("c2HN"), c = n("XoHu");
        const u = t => {
            if (t && "function" == typeof t[o.a]) return u = t, t => {
                const e = u[o.a]();
                if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return e.subscribe(t)
            };
            if (Object(a.a)(t)) return Object(r.a)(t);
            if (Object(l.a)(t)) return n = t, t => (n.then(e => {
                t.closed || (t.next(e), t.complete())
            }, e => t.error(e)).then(null, s.a), t);
            if (t && "function" == typeof t[i.a]) return e = t, t => {
                const n = e[i.a]();
                for (; ;) {
                    let e;
                    try {
                        e = n.next()
                    } catch (r) {
                        return t.error(r), t
                    }
                    if (e.done) {
                        t.complete();
                        break
                    }
                    if (t.next(e.value), t.closed) break
                }
                return "function" == typeof n.return && t.add(() => {
                    n.return && n.return()
                }), t
            };
            {
                const e = Object(c.a)(t) ? "an invalid object" : `'${t}'`;
                throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
            }
            var e, n, u
        }
    }, SpAZ: function (t, e, n) {
        "use strict";

        function r(t) {
            return t
        }

        n.d(e, "a", function () {
            return r
        })
    }, XNiG: function (t, e, n) {
        "use strict";
        n.d(e, "b", function () {
            return c
        }), n.d(e, "a", function () {
            return u
        });
        var r = n("HDdC"), s = n("7o/Q"), i = n("quSY"), o = n("9ppp");

        class a extends i.a {
            constructor(t, e) {
                super(), this.subject = t, this.subscriber = e, this.closed = !1
            }

            unsubscribe() {
                if (this.closed) return;
                this.closed = !0;
                const t = this.subject, e = t.observers;
                if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
                const n = e.indexOf(this.subscriber);
                -1 !== n && e.splice(n, 1)
            }
        }

        var l = n("2QA8");

        class c extends s.a {
            constructor(t) {
                super(t), this.destination = t
            }
        }

        let u = (() => {
            class t extends r.a {
                constructor() {
                    super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                }

                [l.a]() {
                    return new c(this)
                }

                lift(t) {
                    const e = new h(this, this);
                    return e.operator = t, e
                }

                next(t) {
                    if (this.closed) throw new o.a;
                    if (!this.isStopped) {
                        const {observers: e} = this, n = e.length, r = e.slice();
                        for (let s = 0; s < n; s++) r[s].next(t)
                    }
                }

                error(t) {
                    if (this.closed) throw new o.a;
                    this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                    const {observers: e} = this, n = e.length, r = e.slice();
                    for (let s = 0; s < n; s++) r[s].error(t);
                    this.observers.length = 0
                }

                complete() {
                    if (this.closed) throw new o.a;
                    this.isStopped = !0;
                    const {observers: t} = this, e = t.length, n = t.slice();
                    for (let r = 0; r < e; r++) n[r].complete();
                    this.observers.length = 0
                }

                unsubscribe() {
                    this.isStopped = !0, this.closed = !0, this.observers = null
                }

                _trySubscribe(t) {
                    if (this.closed) throw new o.a;
                    return super._trySubscribe(t)
                }

                _subscribe(t) {
                    if (this.closed) throw new o.a;
                    return this.hasError ? (t.error(this.thrownError), i.a.EMPTY) : this.isStopped ? (t.complete(), i.a.EMPTY) : (this.observers.push(t), new a(this, t))
                }

                asObservable() {
                    const t = new r.a;
                    return t.source = this, t
                }
            }

            return t.create = (t, e) => new h(t, e), t
        })();

        class h extends u {
            constructor(t, e) {
                super(), this.destination = t, this.source = e
            }

            next(t) {
                const {destination: e} = this;
                e && e.next && e.next(t)
            }

            error(t) {
                const {destination: e} = this;
                e && e.error && this.destination.error(t)
            }

            complete() {
                const {destination: t} = this;
                t && t.complete && this.destination.complete()
            }

            _subscribe(t) {
                const {source: e} = this;
                return e ? this.source.subscribe(t) : i.a.EMPTY
            }
        }
    }, XoHu: function (t, e, n) {
        "use strict";

        function r(t) {
            return null !== t && "object" == typeof t
        }

        n.d(e, "a", function () {
            return r
        })
    }, bHdf: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });
        var r = n("5+tZ"), s = n("SpAZ");

        function i(t = Number.POSITIVE_INFINITY) {
            return Object(r.a)(s.a, t)
        }
    }, bOdf: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var r = n("5+tZ");

        function s(t, e) {
            return Object(r.a)(t, e, 1)
        }
    }, bl9C: function (t, e, n) {
        "use strict";
        e.a = {DOMAIN_URL: "http://212.71.238.50:3300", API_PERFIX: "/api/v1/"}
    }, c2HN: function (t, e, n) {
        "use strict";

        function r(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }

        n.d(e, "a", function () {
            return r
        })
    }, fXoL: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return hn
        }), n.d(e, "b", function () {
            return ql
        }), n.d(e, "c", function () {
            return Fl
        }), n.d(e, "d", function () {
            return Dl
        }), n.d(e, "e", function () {
            return Nl
        }), n.d(e, "f", function () {
            return Pc
        }), n.d(e, "g", function () {
            return Cc
        }), n.d(e, "h", function () {
            return Ma
        }), n.d(e, "i", function () {
            return Xl
        }), n.d(e, "j", function () {
            return la
        }), n.d(e, "k", function () {
            return Bl
        }), n.d(e, "l", function () {
            return da
        }), n.d(e, "m", function () {
            return kr
        }), n.d(e, "n", function () {
            return yl
        }), n.d(e, "o", function () {
            return mi
        }), n.d(e, "p", function () {
            return In
        }), n.d(e, "q", function () {
            return P
        }), n.d(e, "r", function () {
            return un
        }), n.d(e, "s", function () {
            return Ii
        }), n.d(e, "t", function () {
            return Ia
        }), n.d(e, "u", function () {
            return Pa
        }), n.d(e, "v", function () {
            return zl
        }), n.d(e, "w", function () {
            return Qa
        }), n.d(e, "x", function () {
            return Ec
        }), n.d(e, "y", function () {
            return Wa
        }), n.d(e, "z", function () {
            return bc
        }), n.d(e, "A", function () {
            return ec
        }), n.d(e, "B", function () {
            return Rn
        }), n.d(e, "C", function () {
            return Ul
        }), n.d(e, "D", function () {
            return Hl
        }), n.d(e, "E", function () {
            return ma
        }), n.d(e, "F", function () {
            return pa
        }), n.d(e, "G", function () {
            return Rr
        }), n.d(e, "H", function () {
            return ya
        }), n.d(e, "I", function () {
            return wr
        }), n.d(e, "J", function () {
            return Pn
        }), n.d(e, "K", function () {
            return kc
        }), n.d(e, "L", function () {
            return Ba
        }), n.d(e, "M", function () {
            return lc
        }), n.d(e, "N", function () {
            return dn
        }), n.d(e, "O", function () {
            return ba
        }), n.d(e, "P", function () {
            return Ya
        }), n.d(e, "Q", function () {
            return H
        }), n.d(e, "R", function () {
            return _c
        }), n.d(e, "S", function () {
            return gc
        }), n.d(e, "T", function () {
            return y
        }), n.d(e, "U", function () {
            return Ic
        }), n.d(e, "V", function () {
            return hc
        }), n.d(e, "W", function () {
            return $l
        }), n.d(e, "X", function () {
            return yi
        }), n.d(e, "Y", function () {
            return Wo
        }), n.d(e, "Z", function () {
            return v
        }), n.d(e, "ab", function () {
            return _r
        }), n.d(e, "bb", function () {
            return nr
        }), n.d(e, "cb", function () {
            return Vn
        }), n.d(e, "db", function () {
            return Kn
        }), n.d(e, "eb", function () {
            return Yn
        }), n.d(e, "fb", function () {
            return Qn
        }), n.d(e, "gb", function () {
            return Wn
        }), n.d(e, "hb", function () {
            return Zn
        }), n.d(e, "ib", function () {
            return Bo
        }), n.d(e, "jb", function () {
            return jc
        }), n.d(e, "kb", function () {
            return Vo
        }), n.d(e, "lb", function () {
            return Go
        }), n.d(e, "mb", function () {
            return Gn
        }), n.d(e, "nb", function () {
            return B
        }), n.d(e, "ob", function () {
            return qi
        }), n.d(e, "pb", function () {
            return oo
        }), n.d(e, "qb", function () {
            return so
        }), n.d(e, "rb", function () {
            return io
        }), n.d(e, "sb", function () {
            return zo
        }), n.d(e, "tb", function () {
            return At
        }), n.d(e, "ub", function () {
            return p
        }), n.d(e, "vb", function () {
            return Bn
        }), n.d(e, "wb", function () {
            return Pi
        }), n.d(e, "xb", function () {
            return Ct
        }), n.d(e, "yb", function () {
            return ia
        }), n.d(e, "zb", function () {
            return _s
        }), n.d(e, "Ab", function () {
            return Gi
        }), n.d(e, "Bb", function () {
            return Co
        }), n.d(e, "Cb", function () {
            return So
        }), n.d(e, "Db", function () {
            return jl
        }), n.d(e, "Eb", function () {
            return nt
        }), n.d(e, "Fb", function () {
            return ct
        }), n.d(e, "Gb", function () {
            return T
        }), n.d(e, "Hb", function () {
            return E
        }), n.d(e, "Ib", function () {
            return ot
        }), n.d(e, "Jb", function () {
            return ut
        }), n.d(e, "Kb", function () {
            return Qi
        }), n.d(e, "Lb", function () {
            return to
        }), n.d(e, "Mb", function () {
            return no
        }), n.d(e, "Nb", function () {
            return eo
        }), n.d(e, "Ob", function () {
            return Ji
        }), n.d(e, "Pb", function () {
            return Xi
        }), n.d(e, "Qb", function () {
            return ro
        }), n.d(e, "Rb", function () {
            return sn
        }), n.d(e, "Sb", function () {
            return Mo
        }), n.d(e, "Tb", function () {
            return kn
        }), n.d(e, "Ub", function () {
            return an
        }), n.d(e, "Vb", function () {
            return Pl
        }), n.d(e, "Wb", function () {
            return ao
        }),n.d(e, "Xb", function () {
            return Il
        }),n.d(e, "Yb", function () {
            return uo
        }),n.d(e, "Zb", function () {
            return pl
        }),n.d(e, "ac", function () {
            return ml
        }),n.d(e, "bc", function () {
            return po
        }),n.d(e, "cc", function () {
            return fo
        }),n.d(e, "dc", function () {
            return Zi
        }),n.d(e, "ec", function () {
            return dl
        }),n.d(e, "fc", function () {
            return Al
        }),n.d(e, "gc", function () {
            return Wi
        }),n.d(e, "hc", function () {
            return Qt
        }),n.d(e, "ic", function () {
            return Sr
        }),n.d(e, "jc", function () {
            return Cr
        }),n.d(e, "kc", function () {
            return at
        }),n.d(e, "lc", function () {
            return wo
        }),n.d(e, "mc", function () {
            return Ho
        }),n.d(e, "nc", function () {
            return Ki
        }),n.d(e, "oc", function () {
            return Do
        }),n.d(e, "pc", function () {
            return No
        }),n.d(e, "qc", function () {
            return Fo
        }),n.d(e, "rc", function () {
            return Lo
        });
        var r = n("XNiG"), s = n("quSY"), i = n("HDdC"), o = n("z+Ro"), a = n("bHdf"), l = n("yCtX"), c = n("EQ5u"),
            u = n("x+ZX");

        function h() {
            return new r.a
        }

        function d(t) {
            for (let e in t) if (t[e] === d) return e;
            throw Error("Could not find renamed property on target object.")
        }

        function f(t, e) {
            for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }

        function p(t) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) return "[" + t.map(p).join(", ") + "]";
            if (null == t) return "" + t;
            if (t.overriddenName) return `${t.overriddenName}`;
            if (t.name) return `${t.name}`;
            const e = t.toString();
            if (null == e) return "" + e;
            const n = e.indexOf("\n");
            return -1 === n ? e : e.substring(0, n)
        }

        function m(t, e) {
            return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }

        const g = d({__forward_ref__: d});

        function y(t) {
            return t.__forward_ref__ = y, t.toString = function () {
                return p(this())
            }, t
        }

        function b(t) {
            return _(t) ? t() : t
        }

        function _(t) {
            return "function" == typeof t && t.hasOwnProperty(g) && t.__forward_ref__ === y
        }

        class v extends Error {
            constructor(t, e) {
                super(function (t, e) {
                    return `${t ? `NG0${t}: ` : ""}${e}`
                }(t, e)), this.code = t
            }
        }

        function w(t) {
            return "string" == typeof t ? t : null == t ? "" : String(t)
        }

        function S(t) {
            return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : w(t)
        }

        function C(t, e) {
            const n = e ? ` in ${e}` : "";
            throw new v("201", `No provider for ${S(t)} found${n}`)
        }

        function T(t) {
            return {token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0}
        }

        function E(t) {
            return {providers: t.providers || [], imports: t.imports || []}
        }

        function O(t) {
            return x(t, A) || x(t, I)
        }

        function x(t, e) {
            return t.hasOwnProperty(e) ? t[e] : null
        }

        function k(t) {
            return t && (t.hasOwnProperty(j) || t.hasOwnProperty(R)) ? t[j] : null
        }

        const A = d({"\u0275prov": d}), j = d({"\u0275inj": d}), I = d({ngInjectableDef: d}), R = d({ngInjectorDef: d});
        var P = function (t) {
            return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});
        let D;

        function N(t) {
            const e = D;
            return D = t, e
        }

        function F(t, e, n) {
            const r = O(t);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & P.Optional ? null : void 0 !== e ? e : void C(p(t), "Injector")
        }

        function L(t) {
            return {toString: t}.toString()
        }

        var M = function (t) {
            return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
        }({}), H = function (t) {
            return t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
        }({});
        const U = "undefined" != typeof globalThis && globalThis, q = "undefined" != typeof window && window,
            $ = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            z = "undefined" != typeof global && global, B = U || z || q || $, V = {}, G = [], K = [],
            W = d({"\u0275cmp": d}), Q = d({"\u0275dir": d}), Z = d({"\u0275pipe": d}), Y = d({"\u0275mod": d}),
            X = d({"\u0275loc": d}), J = d({"\u0275fac": d}), tt = d({__NG_ELEMENT_ID__: d});
        let et = 0;

        function nt(t) {
            return L(() => {
                const e = {}, n = {
                    type: t.type,
                    providersResolver: null,
                    decls: t.decls,
                    vars: t.vars,
                    factory: null,
                    template: t.template || null,
                    consts: t.consts || null,
                    ngContentSelectors: t.ngContentSelectors,
                    hostBindings: t.hostBindings || null,
                    hostVars: t.hostVars || 0,
                    hostAttrs: t.hostAttrs || null,
                    contentQueries: t.contentQueries || null,
                    declaredInputs: e,
                    inputs: null,
                    outputs: null,
                    exportAs: t.exportAs || null,
                    onPush: t.changeDetection === M.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: t.selectors || K,
                    viewQuery: t.viewQuery || null,
                    features: t.features || null,
                    data: t.data || {},
                    encapsulation: t.encapsulation || H.Emulated,
                    id: "c",
                    styles: t.styles || K,
                    _: null,
                    setInput: null,
                    schemas: t.schemas || null,
                    tView: null
                }, r = t.directives, s = t.features, i = t.pipes;
                return n.id += et++, n.inputs = lt(t.inputs, e), n.outputs = lt(t.outputs), s && s.forEach(t => t(n)), n.directiveDefs = r ? () => ("function" == typeof r ? r() : r).map(rt) : null, n.pipeDefs = i ? () => ("function" == typeof i ? i() : i).map(st) : null, n
            })
        }

        function rt(t) {
            return ht(t) || function (t) {
                return t[Q] || null
            }(t)
        }

        function st(t) {
            return function (t) {
                return t[Z] || null
            }(t)
        }

        const it = {};

        function ot(t) {
            const e = {
                type: t.type,
                bootstrap: t.bootstrap || K,
                declarations: t.declarations || K,
                imports: t.imports || K,
                exports: t.exports || K,
                transitiveCompileScopes: null,
                schemas: t.schemas || null,
                id: t.id || null
            };
            return null != t.id && L(() => {
                it[t.id] = t.type
            }), e
        }

        function at(t, e) {
            return L(() => {
                const n = dt(t, !0);
                n.declarations = e.declarations || K, n.imports = e.imports || K, n.exports = e.exports || K
            })
        }

        function lt(t, e) {
            if (null == t) return V;
            const n = {};
            for (const r in t) if (t.hasOwnProperty(r)) {
                let s = t[r], i = s;
                Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, e && (e[s] = i)
            }
            return n
        }

        const ct = nt;

        function ut(t) {
            return {
                type: t.type,
                name: t.name,
                factory: null,
                pure: !1 !== t.pure,
                onDestroy: t.type.prototype.ngOnDestroy || null
            }
        }

        function ht(t) {
            return t[W] || null
        }

        function dt(t, e) {
            const n = t[Y] || null;
            if (!n && !0 === e) throw new Error(`Type ${p(t)} does not have '\u0275mod' property.`);
            return n
        }

        const ft = 20, pt = 10;

        function mt(t) {
            return Array.isArray(t) && "object" == typeof t[1]
        }

        function gt(t) {
            return Array.isArray(t) && !0 === t[1]
        }

        function yt(t) {
            return 0 != (8 & t.flags)
        }

        function bt(t) {
            return 2 == (2 & t.flags)
        }

        function _t(t) {
            return 1 == (1 & t.flags)
        }

        function vt(t) {
            return null !== t.template
        }

        function wt(t, e) {
            return t.hasOwnProperty(J) ? t[J] : null
        }

        class St {
            constructor(t, e, n) {
                this.previousValue = t, this.currentValue = e, this.firstChange = n
            }

            isFirstChange() {
                return this.firstChange
            }
        }

        function Ct() {
            return Tt
        }

        function Tt(t) {
            return t.type.prototype.ngOnChanges && (t.setInput = Ot), Et
        }

        function Et() {
            const t = xt(this), e = null == t ? void 0 : t.current;
            if (e) {
                const n = t.previous;
                if (n === V) t.previous = e; else for (let t in e) n[t] = e[t];
                t.current = null, this.ngOnChanges(e)
            }
        }

        function Ot(t, e, n, r) {
            const s = xt(t) || function (t, e) {
                    return t.__ngSimpleChanges__ = e
                }(t, {previous: V, current: null}), i = s.current || (s.current = {}), o = s.previous,
                a = this.declaredInputs[n], l = o[a];
            i[a] = new St(l && l.currentValue, e, o === V), t[r] = e
        }

        function xt(t) {
            return t.__ngSimpleChanges__ || null
        }

        let kt;

        function At(t) {
            kt = t
        }

        function jt() {
            return void 0 !== kt ? kt : "undefined" != typeof document ? document : void 0
        }

        function It(t) {
            return !!t.listen
        }

        Ct.ngInherit = !0;
        const Rt = {createRenderer: (t, e) => jt()};

        function Pt(t) {
            for (; Array.isArray(t);) t = t[0];
            return t
        }

        function Dt(t, e) {
            return Pt(e[t])
        }

        function Nt(t, e) {
            return Pt(e[t.index])
        }

        function Ft(t, e) {
            return t.data[e]
        }

        function Lt(t, e) {
            return t[e]
        }

        function Mt(t, e) {
            const n = e[t];
            return mt(n) ? n : n[0]
        }

        function Ht(t) {
            const e = function (t) {
                return t.__ngContext__ || null
            }(t);
            return e ? Array.isArray(e) ? e : e.lView : null
        }

        function Ut(t) {
            return 4 == (4 & t[2])
        }

        function qt(t) {
            return 128 == (128 & t[2])
        }

        function $t(t, e) {
            return null == e ? null : t[e]
        }

        function zt(t) {
            t[18] = 0
        }

        function Bt(t, e) {
            t[5] += e;
            let n = t, r = t[3];
            for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) r[5] += e, n = r, r = r[3]
        }

        const Vt = {lFrame: ge(null), bindingsEnabled: !0, isInCheckNoChangesMode: !1};

        function Gt() {
            return Vt.bindingsEnabled
        }

        function Kt() {
            return Vt.lFrame.lView
        }

        function Wt() {
            return Vt.lFrame.tView
        }

        function Qt(t) {
            Vt.lFrame.contextLView = t
        }

        function Zt() {
            let t = Yt();
            for (; null !== t && 64 === t.type;) t = t.parent;
            return t
        }

        function Yt() {
            return Vt.lFrame.currentTNode
        }

        function Xt(t, e) {
            const n = Vt.lFrame;
            n.currentTNode = t, n.isParent = e
        }

        function Jt() {
            return Vt.lFrame.isParent
        }

        function te() {
            Vt.lFrame.isParent = !1
        }

        function ee() {
            return Vt.isInCheckNoChangesMode
        }

        function ne(t) {
            Vt.isInCheckNoChangesMode = t
        }

        function re() {
            const t = Vt.lFrame;
            let e = t.bindingRootIndex;
            return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        }

        function se() {
            return Vt.lFrame.bindingIndex
        }

        function ie() {
            return Vt.lFrame.bindingIndex++
        }

        function oe(t) {
            const e = Vt.lFrame, n = e.bindingIndex;
            return e.bindingIndex = e.bindingIndex + t, n
        }

        function ae(t, e) {
            const n = Vt.lFrame;
            n.bindingIndex = n.bindingRootIndex = t, le(e)
        }

        function le(t) {
            Vt.lFrame.currentDirectiveIndex = t
        }

        function ce(t) {
            const e = Vt.lFrame.currentDirectiveIndex;
            return -1 === e ? null : t[e]
        }

        function ue() {
            return Vt.lFrame.currentQueryIndex
        }

        function he(t) {
            Vt.lFrame.currentQueryIndex = t
        }

        function de(t) {
            const e = t[1];
            return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null
        }

        function fe(t, e, n) {
            if (n & P.SkipSelf) {
                let r = e, s = t;
                for (; r = r.parent, !(null !== r || n & P.Host || (r = de(s), null === r) || (s = s[15], 10 & r.type));) ;
                if (null === r) return !1;
                e = r, t = s
            }
            const r = Vt.lFrame = me();
            return r.currentTNode = e, r.lView = t, !0
        }

        function pe(t) {
            const e = me(), n = t[1];
            Vt.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1
        }

        function me() {
            const t = Vt.lFrame, e = null === t ? null : t.child;
            return null === e ? ge(t) : e
        }

        function ge(t) {
            const e = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: t,
                child: null,
                inI18n: !1
            };
            return null !== t && (t.child = e), e
        }

        function ye() {
            const t = Vt.lFrame;
            return Vt.lFrame = t.parent, t.currentTNode = null, t.lView = null, t
        }

        const be = ye;

        function _e() {
            const t = ye();
            t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
        }

        function ve() {
            return Vt.lFrame.selectedIndex
        }

        function we(t) {
            Vt.lFrame.selectedIndex = t
        }

        function Se() {
            const t = Vt.lFrame;
            return Ft(t.tView, t.selectedIndex)
        }

        function Ce(t, e) {
            for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
                const e = t.data[n].type.prototype, {
                    ngAfterContentInit: r,
                    ngAfterContentChecked: s,
                    ngAfterViewInit: i,
                    ngAfterViewChecked: o,
                    ngOnDestroy: a
                } = e;
                r && (t.contentHooks || (t.contentHooks = [])).push(-n, r), s && ((t.contentHooks || (t.contentHooks = [])).push(n, s), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)), i && (t.viewHooks || (t.viewHooks = [])).push(-n, i), o && ((t.viewHooks || (t.viewHooks = [])).push(n, o), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)), null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
            }
        }

        function Te(t, e, n) {
            xe(t, e, 3, n)
        }

        function Ee(t, e, n, r) {
            (3 & t[2]) === n && xe(t, e, n, r)
        }

        function Oe(t, e) {
            let n = t[2];
            (3 & n) === e && (n &= 2047, n += 1, t[2] = n)
        }

        function xe(t, e, n, r) {
            const s = null != r ? r : -1, i = e.length - 1;
            let o = 0;
            for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++) if ("number" == typeof e[a + 1]) {
                if (o = e[a], null != r && o >= r) break
            } else e[a] < 0 && (t[18] += 65536), (o < s || -1 == s) && (ke(t, n, e, a), t[18] = (4294901760 & t[18]) + a + 2), a++
        }

        function ke(t, e, n, r) {
            const s = n[r] < 0, i = n[r + 1], o = t[s ? -n[r] : n[r]];
            if (s) {
                if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
                    t[2] += 2048;
                    try {
                        i.call(o)
                    } finally {
                    }
                }
            } else try {
                i.call(o)
            } finally {
            }
        }

        const Ae = -1;

        class je {
            constructor(t, e, n) {
                this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
            }
        }

        function Ie(t, e, n) {
            const r = It(t);
            let s = 0;
            for (; s < n.length;) {
                const i = n[s];
                if ("number" == typeof i) {
                    if (0 !== i) break;
                    s++;
                    const o = n[s++], a = n[s++], l = n[s++];
                    r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
                } else {
                    const o = i, a = n[++s];
                    Pe(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++
                }
            }
            return s
        }

        function Re(t) {
            return 3 === t || 4 === t || 6 === t
        }

        function Pe(t) {
            return 64 === t.charCodeAt(0)
        }

        function De(t, e) {
            if (null === e || 0 === e.length) ; else if (null === t || 0 === t.length) t = e.slice(); else {
                let n = -1;
                for (let r = 0; r < e.length; r++) {
                    const s = e[r];
                    "number" == typeof s ? n = s : 0 === n || Ne(t, n, s, null, -1 === n || 2 === n ? e[++r] : null)
                }
            }
            return t
        }

        function Ne(t, e, n, r, s) {
            let i = 0, o = t.length;
            if (-1 === e) o = -1; else for (; i < t.length;) {
                const n = t[i++];
                if ("number" == typeof n) {
                    if (n === e) {
                        o = -1;
                        break
                    }
                    if (n > e) {
                        o = i - 1;
                        break
                    }
                }
            }
            for (; i < t.length;) {
                const e = t[i];
                if ("number" == typeof e) break;
                if (e === n) {
                    if (null === r) return void (null !== s && (t[i + 1] = s));
                    if (r === t[i + 1]) return void (t[i + 2] = s)
                }
                i++, null !== r && i++, null !== s && i++
            }
            -1 !== o && (t.splice(o, 0, e), i = o + 1), t.splice(i++, 0, n), null !== r && t.splice(i++, 0, r), null !== s && t.splice(i++, 0, s)
        }

        function Fe(t) {
            return t !== Ae
        }

        function Le(t) {
            return 32767 & t
        }

        function Me(t, e) {
            let n = t >> 16, r = e;
            for (; n > 0;) r = r[15], n--;
            return r
        }

        let He = !0;

        function Ue(t) {
            const e = He;
            return He = t, e
        }

        let qe = 0;

        function $e(t, e) {
            const n = Be(t, e);
            if (-1 !== n) return n;
            const r = e[1];
            r.firstCreatePass && (t.injectorIndex = e.length, ze(r.data, t), ze(e, null), ze(r.blueprint, null));
            const s = Ve(t, e), i = t.injectorIndex;
            if (Fe(s)) {
                const t = Le(s), n = Me(s, e), r = n[1].data;
                for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s]
            }
            return e[i + 8] = s, i
        }

        function ze(t, e) {
            t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }

        function Be(t, e) {
            return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }

        function Ve(t, e) {
            if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
            let n = 0, r = null, s = e;
            for (; null !== s;) {
                const t = s[1], e = t.type;
                if (r = 2 === e ? t.declTNode : 1 === e ? s[6] : null, null === r) return Ae;
                if (n++, s = s[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16
            }
            return Ae
        }

        function Ge(t, e, n) {
            !function (t, e, n) {
                let r;
                "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(tt) && (r = n[tt]), null == r && (r = n[tt] = qe++);
                const s = 255 & r;
                e.data[t + (s >> 5)] |= 1 << s
            }(t, e, n)
        }

        function Ke(t, e, n) {
            if (n & P.Optional) return t;
            C(e, "NodeInjector")
        }

        function We(t, e, n, r) {
            if (n & P.Optional && void 0 === r && (r = null), 0 == (n & (P.Self | P.Host))) {
                const s = t[9], i = N(void 0);
                try {
                    return s ? s.get(e, r, n & P.Optional) : F(e, r, n & P.Optional)
                } finally {
                    N(i)
                }
            }
            return Ke(r, e, n)
        }

        function Qe(t, e, n, r = P.Default, s) {
            if (null !== t) {
                const i = function (t) {
                    if ("string" == typeof t) return t.charCodeAt(0) || 0;
                    const e = t.hasOwnProperty(tt) ? t[tt] : void 0;
                    return "number" == typeof e ? e >= 0 ? 255 & e : Ye : e
                }(n);
                if ("function" == typeof i) {
                    if (!fe(e, t, r)) return r & P.Host ? Ke(s, n, r) : We(e, n, r, s);
                    try {
                        const t = i();
                        if (null != t || r & P.Optional) return t;
                        C(n)
                    } finally {
                        be()
                    }
                } else if ("number" == typeof i) {
                    let s = null, o = Be(t, e), a = Ae, l = r & P.Host ? e[16][6] : null;
                    for ((-1 === o || r & P.SkipSelf) && (a = -1 === o ? Ve(t, e) : e[o + 8], a !== Ae && nn(r, !1) ? (s = e[1], o = Le(a), e = Me(a, e)) : o = -1); -1 !== o;) {
                        const t = e[1];
                        if (en(i, o, t.data)) {
                            const t = Xe(o, e, n, s, r, l);
                            if (t !== Ze) return t
                        }
                        a = e[o + 8], a !== Ae && nn(r, e[1].data[o + 8] === l) && en(i, o, e) ? (s = t, o = Le(a), e = Me(a, e)) : o = -1
                    }
                }
            }
            return We(e, n, r, s)
        }

        const Ze = {};

        function Ye() {
            return new rn(Zt(), Kt())
        }

        function Xe(t, e, n, r, s, i) {
            const o = e[1], a = o.data[t + 8],
                l = Je(a, o, n, null == r ? bt(a) && He : r != o && 0 != (3 & a.type), s & P.Host && i === a);
            return null !== l ? tn(e, o, l, a) : Ze
        }

        function Je(t, e, n, r, s) {
            const i = t.providerIndexes, o = e.data, a = 1048575 & i, l = t.directiveStart, c = i >> 20,
                u = s ? a + c : t.directiveEnd;
            for (let h = r ? a : a + c; h < u; h++) {
                const t = o[h];
                if (h < l && n === t || h >= l && t.type === n) return h
            }
            if (s) {
                const t = o[l];
                if (t && vt(t) && t.type === n) return l
            }
            return null
        }

        function tn(t, e, n, r) {
            let s = t[n];
            const i = e.data;
            if (s instanceof je) {
                const o = s;
                o.resolving && function (t, e) {
                    throw new v("200", `Circular dependency in DI detected for ${t}`)
                }(S(i[n]));
                const a = Ue(o.canSeeViewProviders);
                o.resolving = !0;
                const l = o.injectImpl ? N(o.injectImpl) : null;
                fe(t, r, P.Default);
                try {
                    s = t[n] = o.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
                        const {ngOnChanges: r, ngOnInit: s, ngDoCheck: i} = e.type.prototype;
                        if (r) {
                            const r = Tt(e);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)
                        }
                        s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i))
                    }(n, i[n], e)
                } finally {
                    null !== l && N(l), Ue(a), o.resolving = !1, be()
                }
            }
            return s
        }

        function en(t, e, n) {
            return !!(n[e + (t >> 5)] & 1 << t)
        }

        function nn(t, e) {
            return !(t & P.Self || t & P.Host && e)
        }

        class rn {
            constructor(t, e) {
                this._tNode = t, this._lView = e
            }

            get(t, e) {
                return Qe(this._tNode, this._lView, t, void 0, e)
            }
        }

        function sn(t) {
            return L(() => {
                const e = t.prototype.constructor, n = e[J] || on(e), r = Object.prototype;
                let s = Object.getPrototypeOf(t.prototype).constructor;
                for (; s && s !== r;) {
                    const t = s[J] || on(s);
                    if (t && t !== n) return t;
                    s = Object.getPrototypeOf(s)
                }
                return t => new t
            })
        }

        function on(t) {
            return _(t) ? () => {
                const e = on(b(t));
                return e && e()
            } : wt(t)
        }

        function an(t) {
            return function (t, e) {
                if ("class" === e) return t.classes;
                if ("style" === e) return t.styles;
                const n = t.attrs;
                if (n) {
                    const t = n.length;
                    let r = 0;
                    for (; r < t;) {
                        const s = n[r];
                        if (Re(s)) break;
                        if (0 === s) r += 2; else if ("number" == typeof s) for (r++; r < t && "string" == typeof n[r];) r++; else {
                            if (s === e) return n[r + 1];
                            r += 2
                        }
                    }
                }
                return null
            }(Zt(), t)
        }

        const ln = "__parameters__";

        function cn(t, e, n) {
            return L(() => {
                const r = function (t) {
                    return function (...e) {
                        if (t) {
                            const n = t(...e);
                            for (const t in n) this[t] = n[t]
                        }
                    }
                }(e);

                function s(...t) {
                    if (this instanceof s) return r.apply(this, t), this;
                    const e = new s(...t);
                    return n.annotation = e, n;

                    function n(t, n, r) {
                        const s = t.hasOwnProperty(ln) ? t[ln] : Object.defineProperty(t, ln, {value: []})[ln];
                        for (; s.length <= r;) s.push(null);
                        return (s[r] = s[r] || []).push(e), t
                    }
                }

                return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
            })
        }

        class un {
            constructor(t, e) {
                this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = T({
                    token: this,
                    providedIn: e.providedIn || "root",
                    factory: e.factory
                }))
            }

            toString() {
                return `InjectionToken ${this._desc}`
            }
        }

        const hn = new un("AnalyzeForEntryComponents"), dn = Function;

        function fn(t, e) {
            void 0 === e && (e = t);
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                Array.isArray(r) ? (e === t && (e = t.slice(0, n)), fn(r, e)) : e !== t && e.push(r)
            }
            return e
        }

        function pn(t, e) {
            t.forEach(t => Array.isArray(t) ? pn(t, e) : e(t))
        }

        function mn(t, e, n) {
            e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function gn(t, e) {
            return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }

        function yn(t, e) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(e);
            return n
        }

        function bn(t, e, n) {
            let r = vn(t, e);
            return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r); else if (1 === s) t.push(r, t[0]), t[0] = n; else {
                    for (s--, t.push(t[s - 1], t[s]); s > e;) t[s] = t[s - 2], s--;
                    t[e] = n, t[e + 1] = r
                }
            }(t, r, e, n)), r
        }

        function _n(t, e) {
            const n = vn(t, e);
            if (n >= 0) return t[1 | n]
        }

        function vn(t, e) {
            return function (t, e, n) {
                let r = 0, s = t.length >> 1;
                for (; s !== r;) {
                    const n = r + (s - r >> 1), i = t[n << 1];
                    if (e === i) return n << 1;
                    i > e ? s = n : r = n + 1
                }
                return ~(s << 1)
            }(t, e)
        }

        const wn = {}, Sn = /\n/gm, Cn = "__source", Tn = d({provide: String, useValue: d});
        let En;

        function On(t) {
            const e = En;
            return En = t, e
        }

        function xn(t, e = P.Default) {
            if (void 0 === En) throw new Error("inject() must be called from an injection context");
            return null === En ? F(t, void 0, e) : En.get(t, e & P.Optional ? null : void 0, e)
        }

        function kn(t, e = P.Default) {
            return (D || xn)(b(t), e)
        }

        function An(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
                const r = b(t[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length) throw new Error("Arguments array must have arguments.");
                    let t, n = P.Default;
                    for (let e = 0; e < r.length; e++) {
                        const s = r[e], i = s.__NG_DI_FLAG__;
                        "number" == typeof i ? -1 === i ? t = s.token : n |= i : t = s
                    }
                    e.push(kn(t, n))
                } else e.push(kn(r))
            }
            return e
        }

        function jn(t, e) {
            return t.__NG_DI_FLAG__ = e, t.prototype.__NG_DI_FLAG__ = e, t
        }

        const In = jn(cn("Inject", t => ({token: t})), -1), Rn = jn(cn("Optional"), 8), Pn = jn(cn("SkipSelf"), 4);
        let Dn, Nn;

        function Fn(t) {
            var e;
            return (null === (e = function () {
                if (void 0 === Dn && (Dn = null, B.trustedTypes)) try {
                    Dn = B.trustedTypes.createPolicy("angular", {
                        createHTML: t => t,
                        createScript: t => t,
                        createScriptURL: t => t
                    })
                } catch (e) {
                }
                return Dn
            }()) || void 0 === e ? void 0 : e.createHTML(t)) || t
        }

        function Ln(t) {
            var e;
            return (null === (e = function () {
                if (void 0 === Nn && (Nn = null, B.trustedTypes)) try {
                    Nn = B.trustedTypes.createPolicy("angular#unsafe-bypass", {
                        createHTML: t => t,
                        createScript: t => t,
                        createScriptURL: t => t
                    })
                } catch (e) {
                }
                return Nn
            }()) || void 0 === e ? void 0 : e.createHTML(t)) || t
        }

        class Mn {
            constructor(t) {
                this.changingThisBreaksApplicationSecurity = t
            }

            toString() {
                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
            }
        }

        class Hn extends Mn {
            getTypeName() {
                return "HTML"
            }
        }

        class Un extends Mn {
            getTypeName() {
                return "Style"
            }
        }

        class qn extends Mn {
            getTypeName() {
                return "Script"
            }
        }

        class $n extends Mn {
            getTypeName() {
                return "URL"
            }
        }

        class zn extends Mn {
            getTypeName() {
                return "ResourceURL"
            }
        }

        function Bn(t) {
            return t instanceof Mn ? t.changingThisBreaksApplicationSecurity : t
        }

        function Vn(t, e) {
            const n = Gn(t);
            if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e) return !0;
                throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)
            }
            return n === e
        }

        function Gn(t) {
            return t instanceof Mn && t.getTypeName() || null
        }

        function Kn(t) {
            return new Hn(t)
        }

        function Wn(t) {
            return new Un(t)
        }

        function Qn(t) {
            return new qn(t)
        }

        function Zn(t) {
            return new $n(t)
        }

        function Yn(t) {
            return new zn(t)
        }

        class Xn {
            constructor(t) {
                this.inertDocumentHelper = t
            }

            getInertBodyElement(t) {
                t = "<body><remove></remove>" + t;
                try {
                    const e = (new window.DOMParser).parseFromString(Fn(t), "text/html").body;
                    return null === e ? this.inertDocumentHelper.getInertBodyElement(t) : (e.removeChild(e.firstChild), e)
                } catch (e) {
                    return null
                }
            }
        }

        class Jn {
            constructor(t) {
                if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                    const t = this.inertDocument.createElement("html");
                    this.inertDocument.appendChild(t);
                    const e = this.inertDocument.createElement("body");
                    t.appendChild(e)
                }
            }

            getInertBodyElement(t) {
                const e = this.inertDocument.createElement("template");
                if ("content" in e) return e.innerHTML = Fn(t), e;
                const n = this.inertDocument.createElement("body");
                return n.innerHTML = Fn(t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
            }

            stripCustomNsAttrs(t) {
                const e = t.attributes;
                for (let r = e.length - 1; 0 < r; r--) {
                    const n = e.item(r).name;
                    "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n)
                }
                let n = t.firstChild;
                for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
            }
        }

        const tr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
            er = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function nr(t) {
            return (t = String(t)).match(tr) || t.match(er) ? t : "unsafe:" + t
        }

        function rr(t) {
            const e = {};
            for (const n of t.split(",")) e[n] = !0;
            return e
        }

        function sr(...t) {
            const e = {};
            for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
            return e
        }

        const ir = rr("area,br,col,hr,img,wbr"), or = rr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            ar = rr("rp,rt"), lr = sr(ar, or),
            cr = sr(ir, sr(or, rr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), sr(ar, rr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), lr),
            ur = rr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), hr = rr("srcset"),
            dr = sr(ur, hr, rr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), rr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
            fr = rr("script,style,template");

        class pr {
            constructor() {
                this.sanitizedSomething = !1, this.buf = []
            }

            sanitizeChildren(t) {
                let e = t.firstChild, n = !0;
                for (; e;) if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild; else for (; e;) {
                    e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                    let t = this.checkClobberedElement(e, e.nextSibling);
                    if (t) {
                        e = t;
                        break
                    }
                    e = this.checkClobberedElement(e, e.parentNode)
                }
                return this.buf.join("")
            }

            startElement(t) {
                const e = t.nodeName.toLowerCase();
                if (!cr.hasOwnProperty(e)) return this.sanitizedSomething = !0, !fr.hasOwnProperty(e);
                this.buf.push("<"), this.buf.push(e);
                const n = t.attributes;
                for (let s = 0; s < n.length; s++) {
                    const t = n.item(s), e = t.name, i = e.toLowerCase();
                    if (!dr.hasOwnProperty(i)) {
                        this.sanitizedSomething = !0;
                        continue
                    }
                    let o = t.value;
                    ur[i] && (o = nr(o)), hr[i] && (r = o, o = (r = String(r)).split(",").map(t => nr(t.trim())).join(", ")), this.buf.push(" ", e, '="', yr(o), '"')
                }
                var r;
                return this.buf.push(">"), !0
            }

            endElement(t) {
                const e = t.nodeName.toLowerCase();
                cr.hasOwnProperty(e) && !ir.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
            }

            chars(t) {
                this.buf.push(yr(t))
            }

            checkClobberedElement(t, e) {
                if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
                return e
            }
        }

        const mr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, gr = /([^\#-~ |!])/g;

        function yr(t) {
            return t.replace(/&/g, "&amp;").replace(mr, function (t) {
                return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(gr, function (t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        let br;

        function _r(t, e) {
            let n = null;
            try {
                br = br || function (t) {
                    const e = new Jn(t);
                    return function () {
                        try {
                            return !!(new window.DOMParser).parseFromString(Fn(""), "text/html")
                        } catch (t) {
                            return !1
                        }
                    }() ? new Xn(e) : e
                }(t);
                let r = e ? String(e) : "";
                n = br.getInertBodyElement(r);
                let s = 5, i = r;
                do {
                    if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                    s--, r = i, i = n.innerHTML, n = br.getInertBodyElement(r)
                } while (r !== i);
                return Fn((new pr).sanitizeChildren(vr(n) || n))
            } finally {
                if (n) {
                    const t = vr(n) || n;
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }
            }
        }

        function vr(t) {
            return "content" in t && function (t) {
                return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            }(t) ? t.content : null
        }

        var wr = function (t) {
            return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
        }({});

        function Sr(t) {
            const e = Tr();
            return e ? Ln(e.sanitize(wr.HTML, t) || "") : Vn(t, "HTML") ? Ln(Bn(t)) : _r(jt(), w(t))
        }

        function Cr(t) {
            const e = Tr();
            return e ? e.sanitize(wr.URL, t) || "" : Vn(t, "URL") ? Bn(t) : nr(w(t))
        }

        function Tr() {
            const t = Kt();
            return t && t[12]
        }

        function Er(t) {
            return t.ngDebugContext
        }

        function Or(t) {
            return t.ngOriginalError
        }

        function xr(t, ...e) {
            t.error(...e)
        }

        class kr {
            constructor() {
                this._console = console
            }

            handleError(t) {
                const e = this._findOriginalError(t), n = this._findContext(t), r = function (t) {
                    return t.ngErrorLogger || xr
                }(t);
                r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
            }

            _findContext(t) {
                return t ? Er(t) ? Er(t) : this._findContext(Or(t)) : null
            }

            _findOriginalError(t) {
                let e = Or(t);
                for (; e && Or(e);) e = Or(e);
                return e
            }
        }

        function Ar(t, e) {
            t.__ngContext__ = e
        }

        const jr = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(B))();

        function Ir(t) {
            return t instanceof Function ? t() : t
        }

        var Rr = function (t) {
            return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
        }({});

        function Pr(t, e) {
            return (void 0)(t, e)
        }

        function Dr(t) {
            const e = t[3];
            return gt(e) ? e[3] : e
        }

        function Nr(t) {
            return Lr(t[13])
        }

        function Fr(t) {
            return Lr(t[4])
        }

        function Lr(t) {
            for (; null !== t && !gt(t);) t = t[4];
            return t
        }

        function Mr(t, e, n, r, s) {
            if (null != r) {
                let i, o = !1;
                gt(r) ? i = r : mt(r) && (o = !0, r = r[0]);
                const a = Pt(r);
                0 === t && null !== n ? null == s ? Gr(e, n, a) : Vr(e, n, a, s || null, !0) : 1 === t && null !== n ? Vr(e, n, a, s || null, !0) : 2 === t ? function (t, e, n) {
                    const r = Wr(t, e);
                    r && function (t, e, n, r) {
                        It(t) ? t.removeChild(e, n, r) : e.removeChild(n)
                    }(t, r, e, n)
                }(e, a, o) : 3 === t && e.destroyNode(a), null != i && function (t, e, n, r, s) {
                    const i = n[7];
                    i !== Pt(n) && Mr(e, t, r, i, s);
                    for (let o = pt; o < n.length; o++) {
                        const s = n[o];
                        ns(s[1], s, t, e, r, i)
                    }
                }(e, t, i, n, s)
            }
        }

        function Hr(t, e, n) {
            return It(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
        }

        function Ur(t, e) {
            const n = t[9], r = n.indexOf(e), s = e[3];
            1024 & e[2] && (e[2] &= -1025, Bt(s, -1)), n.splice(r, 1)
        }

        function qr(t, e) {
            if (t.length <= pt) return;
            const n = pt + e, r = t[n];
            if (r) {
                const i = r[17];
                null !== i && i !== t && Ur(i, r), e > 0 && (t[n - 1][4] = r[4]);
                const o = gn(t, pt + e);
                ns(r[1], s = r, s[11], 2, null, null), s[0] = null, s[6] = null;
                const a = o[19];
                null !== a && a.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -129
            }
            var s;
            return r
        }

        function $r(t, e) {
            if (!(256 & e[2])) {
                const n = e[11];
                It(n) && n.destroyNode && ns(t, e, n, 3, null, null), function (t) {
                    let e = t[13];
                    if (!e) return zr(t[1], t);
                    for (; e;) {
                        let n = null;
                        if (mt(e)) n = e[13]; else {
                            const t = e[10];
                            t && (n = t)
                        }
                        if (!n) {
                            for (; e && !e[4] && e !== t;) mt(e) && zr(e[1], e), e = e[3];
                            null === e && (e = t), mt(e) && zr(e[1], e), n = e && e[4]
                        }
                        e = n
                    }
                }(e)
            }
        }

        function zr(t, e) {
            if (!(256 & e[2])) {
                e[2] &= -129, e[2] |= 256, function (t, e) {
                    let n;
                    if (null != t && null != (n = t.destroyHooks)) for (let r = 0; r < n.length; r += 2) {
                        const t = e[n[r]];
                        if (!(t instanceof je)) {
                            const e = n[r + 1];
                            if (Array.isArray(e)) for (let n = 0; n < e.length; n += 2) {
                                const r = t[e[n]], s = e[n + 1];
                                try {
                                    s.call(r)
                                } finally {
                                }
                            } else try {
                                e.call(t)
                            } finally {
                            }
                        }
                    }
                }(t, e), function (t, e) {
                    const n = t.cleanup, r = e[7];
                    let s = -1;
                    if (null !== n) for (let i = 0; i < n.length - 1; i += 2) if ("string" == typeof n[i]) {
                        const t = n[i + 1], o = "function" == typeof t ? t(e) : Pt(e[t]), a = r[s = n[i + 2]],
                            l = n[i + 3];
                        "boolean" == typeof l ? o.removeEventListener(n[i], a, l) : l >= 0 ? r[s = l]() : r[s = -l].unsubscribe(), i += 2
                    } else {
                        const t = r[s = n[i + 1]];
                        n[i].call(t)
                    }
                    if (null !== r) {
                        for (let t = s + 1; t < r.length; t++) (0, r[t])();
                        e[7] = null
                    }
                }(t, e), 1 === e[1].type && It(e[11]) && e[11].destroy();
                const n = e[17];
                if (null !== n && gt(e[3])) {
                    n !== e[3] && Ur(n, e);
                    const r = e[19];
                    null !== r && r.detachView(t)
                }
            }
        }

        function Br(t, e, n) {
            return function (t, e, n) {
                let r = e;
                for (; null !== r && 40 & r.type;) r = (e = r).parent;
                if (null === r) return n[0];
                if (2 & r.flags) {
                    const e = t.data[r.directiveStart].encapsulation;
                    if (e === H.None || e === H.Emulated) return null
                }
                return Nt(r, n)
            }(t, e.parent, n)
        }

        function Vr(t, e, n, r, s) {
            It(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s)
        }

        function Gr(t, e, n) {
            It(t) ? t.appendChild(e, n) : e.appendChild(n)
        }

        function Kr(t, e, n, r, s) {
            null !== r ? Vr(t, e, n, r, s) : Gr(t, e, n)
        }

        function Wr(t, e) {
            return It(t) ? t.parentNode(e) : e.parentNode
        }

        function Qr(t, e, n) {
            return Zr(t, e, n)
        }

        let Zr = function (t, e, n) {
            return 40 & t.type ? Nt(t, n) : null
        };

        function Yr(t, e, n, r) {
            const s = Br(t, r, e), i = e[11], o = Qr(r.parent || e[6], r, e);
            if (null != s) if (Array.isArray(n)) for (let a = 0; a < n.length; a++) Kr(i, s, n[a], o, !1); else Kr(i, s, n, o, !1)
        }

        function Xr(t, e) {
            if (null !== e) {
                const n = e.type;
                if (3 & n) return Nt(e, t);
                if (4 & n) return ts(-1, t[e.index]);
                if (8 & n) {
                    const n = e.child;
                    if (null !== n) return Xr(t, n);
                    {
                        const n = t[e.index];
                        return gt(n) ? ts(-1, n) : Pt(n)
                    }
                }
                if (32 & n) return Pr(e, t)() || Pt(t[e.index]);
                {
                    const n = Jr(t, e);
                    return null !== n ? Array.isArray(n) ? n[0] : Xr(Dr(t[16]), n) : Xr(t, e.next)
                }
            }
            return null
        }

        function Jr(t, e) {
            return null !== e ? t[16][6].projection[e.projection] : null
        }

        function ts(t, e) {
            const n = pt + t + 1;
            if (n < e.length) {
                const t = e[n], r = t[1].firstChild;
                if (null !== r) return Xr(t, r)
            }
            return e[7]
        }

        function es(t, e, n, r, s, i, o) {
            for (; null != n;) {
                const a = r[n.index], l = n.type;
                if (o && 0 === e && (a && Ar(Pt(a), r), n.flags |= 4), 64 != (64 & n.flags)) if (8 & l) es(t, e, n.child, r, s, i, !1), Mr(e, t, s, a, i); else if (32 & l) {
                    const o = Pr(n, r);
                    let l;
                    for (; l = o();) Mr(e, t, s, l, i);
                    Mr(e, t, s, a, i)
                } else 16 & l ? rs(t, e, r, n, s, i) : Mr(e, t, s, a, i);
                n = o ? n.projectionNext : n.next
            }
        }

        function ns(t, e, n, r, s, i) {
            es(n, r, t.firstChild, e, s, i, !1)
        }

        function rs(t, e, n, r, s, i) {
            const o = n[16], a = o[6].projection[r.projection];
            if (Array.isArray(a)) for (let l = 0; l < a.length; l++) Mr(e, t, s, a[l], i); else es(t, e, a, o[3], s, i, !0)
        }

        function ss(t, e, n) {
            It(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }

        function is(t, e, n) {
            It(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }

        function os(t, e, n) {
            let r = t.length;
            for (; ;) {
                const s = t.indexOf(e, n);
                if (-1 === s) return s;
                if (0 === s || t.charCodeAt(s - 1) <= 32) {
                    const n = e.length;
                    if (s + n === r || t.charCodeAt(s + n) <= 32) return s
                }
                n = s + 1
            }
        }

        const as = "ng-template";

        function ls(t, e, n) {
            let r = 0;
            for (; r < t.length;) {
                let s = t[r++];
                if (n && "class" === s) {
                    if (s = t[r], -1 !== os(s.toLowerCase(), e, 0)) return !0
                } else if (1 === s) {
                    for (; r < t.length && "string" == typeof (s = t[r++]);) if (s.toLowerCase() === e) return !0;
                    return !1
                }
            }
            return !1
        }

        function cs(t) {
            return 4 === t.type && t.value !== as
        }

        function us(t, e, n) {
            return e === (4 !== t.type || n ? t.value : as)
        }

        function hs(t, e, n) {
            let r = 4;
            const s = t.attrs || [], i = function (t) {
                for (let e = 0; e < t.length; e++) if (Re(t[e])) return e;
                return t.length
            }(s);
            let o = !1;
            for (let a = 0; a < e.length; a++) {
                const l = e[a];
                if ("number" != typeof l) {
                    if (!o) if (4 & r) {
                        if (r = 2 | 1 & r, "" !== l && !us(t, l, n) || "" === l && 1 === e.length) {
                            if (ds(r)) return !1;
                            o = !0
                        }
                    } else {
                        const c = 8 & r ? l : e[++a];
                        if (8 & r && null !== t.attrs) {
                            if (!ls(t.attrs, c, n)) {
                                if (ds(r)) return !1;
                                o = !0
                            }
                            continue
                        }
                        const u = fs(8 & r ? "class" : l, s, cs(t), n);
                        if (-1 === u) {
                            if (ds(r)) return !1;
                            o = !0;
                            continue
                        }
                        if ("" !== c) {
                            let t;
                            t = u > i ? "" : s[u + 1].toLowerCase();
                            const e = 8 & r ? t : null;
                            if (e && -1 !== os(e, c, 0) || 2 & r && c !== t) {
                                if (ds(r)) return !1;
                                o = !0
                            }
                        }
                    }
                } else {
                    if (!o && !ds(r) && !ds(l)) return !1;
                    if (o && ds(l)) continue;
                    o = !1, r = l | 1 & r
                }
            }
            return ds(r) || o
        }

        function ds(t) {
            return 0 == (1 & t)
        }

        function fs(t, e, n, r) {
            if (null === e) return -1;
            let s = 0;
            if (r || !n) {
                let n = !1;
                for (; s < e.length;) {
                    const r = e[s];
                    if (r === t) return s;
                    if (3 === r || 6 === r) n = !0; else {
                        if (1 === r || 2 === r) {
                            let t = e[++s];
                            for (; "string" == typeof t;) t = e[++s];
                            continue
                        }
                        if (4 === r) break;
                        if (0 === r) {
                            s += 4;
                            continue
                        }
                    }
                    s += n ? 1 : 2
                }
                return -1
            }
            return function (t, e) {
                let n = t.indexOf(4);
                if (n > -1) for (n++; n < t.length;) {
                    const r = t[n];
                    if ("number" == typeof r) return -1;
                    if (r === e) return n;
                    n++
                }
                return -1
            }(e, t)
        }

        function ps(t, e, n = !1) {
            for (let r = 0; r < e.length; r++) if (hs(t, e[r], n)) return !0;
            return !1
        }

        function ms(t, e) {
            t:for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (t.length === r.length) {
                    for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
                    return !0
                }
            }
            return !1
        }

        function gs(t, e) {
            return t ? ":not(" + e.trim() + ")" : e
        }

        function ys(t) {
            let e = t[0], n = 1, r = 2, s = "", i = !1;
            for (; n < t.length;) {
                let o = t[n];
                if ("string" == typeof o) if (2 & r) {
                    const e = t[++n];
                    s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
                } else 8 & r ? s += "." + o : 4 & r && (s += " " + o); else "" === s || ds(o) || (e += gs(i, s), s = ""), r = o, i = i || !ds(r);
                n++
            }
            return "" !== s && (e += gs(i, s)), e
        }

        const bs = {};

        function _s(t) {
            vs(Wt(), Kt(), ve() + t, ee())
        }

        function vs(t, e, n, r) {
            if (!r) if (3 == (3 & e[2])) {
                const r = t.preOrderCheckHooks;
                null !== r && Te(e, r, n)
            } else {
                const r = t.preOrderHooks;
                null !== r && Ee(e, r, 0, n)
            }
            we(n)
        }

        function ws(t, e) {
            return t << 17 | e << 2
        }

        function Ss(t) {
            return t >> 17 & 32767
        }

        function Cs(t) {
            return 2 | t
        }

        function Ts(t) {
            return (131068 & t) >> 2
        }

        function Es(t, e) {
            return -131069 & t | e << 2
        }

        function Os(t) {
            return 1 | t
        }

        function xs(t, e) {
            const n = t.contentQueries;
            if (null !== n) for (let r = 0; r < n.length; r += 2) {
                const s = n[r], i = n[r + 1];
                if (-1 !== i) {
                    const n = t.data[i];
                    he(s), n.contentQueries(2, e[i], i)
                }
            }
        }

        function ks(t, e, n, r, s, i, o, a, l, c) {
            const u = e.blueprint.slice();
            return u[0] = s, u[2] = 140 | r, zt(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = i, u[16] = 2 == e.type ? t[16] : u, u
        }

        function As(t, e, n, r, s) {
            let i = t.data[e];
            if (null === i) i = function (t, e, n, r, s) {
                const i = Yt(), o = Jt(), a = t.data[e] = function (t, e, n, r, s, i) {
                    return {
                        type: n,
                        index: r,
                        insertBeforeIndex: null,
                        injectorIndex: e ? e.injectorIndex : -1,
                        directiveStart: -1,
                        directiveEnd: -1,
                        directiveStylingLast: -1,
                        propertyBindings: null,
                        flags: 0,
                        providerIndexes: 0,
                        value: s,
                        attrs: i,
                        mergedAttrs: null,
                        localNames: null,
                        initialInputs: void 0,
                        inputs: null,
                        outputs: null,
                        tViews: null,
                        next: null,
                        projectionNext: null,
                        child: null,
                        parent: e,
                        projection: null,
                        styles: null,
                        stylesWithoutHost: null,
                        residualStyles: void 0,
                        classes: null,
                        classesWithoutHost: null,
                        residualClasses: void 0,
                        classBindings: 0,
                        styleBindings: 0
                    }
                }(0, o ? i : i && i.parent, n, e, r, s);
                return null === t.firstChild && (t.firstChild = a), null !== i && (o ? null == i.child && null !== a.parent && (i.child = a) : null === i.next && (i.next = a)), a
            }(t, e, n, r, s), Vt.lFrame.inI18n && (i.flags |= 64); else if (64 & i.type) {
                i.type = n, i.value = r, i.attrs = s;
                const t = function () {
                    const t = Vt.lFrame, e = t.currentTNode;
                    return t.isParent ? e : e.parent
                }();
                i.injectorIndex = null === t ? -1 : t.injectorIndex
            }
            return Xt(i, !0), i
        }

        function js(t, e, n, r) {
            if (0 === n) return -1;
            const s = e.length;
            for (let i = 0; i < n; i++) e.push(r), t.blueprint.push(r), t.data.push(null);
            return s
        }

        function Is(t, e, n) {
            pe(e);
            try {
                const r = t.viewQuery;
                null !== r && ai(1, r, n);
                const s = t.template;
                null !== s && Ds(t, e, s, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && xs(t, e), t.staticViewQueries && ai(2, t.viewQuery, n);
                const i = t.components;
                null !== i && function (t, e) {
                    for (let n = 0; n < e.length; n++) ni(t, e[n])
                }(e, i)
            } catch (r) {
                throw t.firstCreatePass && (t.incompleteFirstPass = !0), r
            } finally {
                e[2] &= -5, _e()
            }
        }

        function Rs(t, e, n, r) {
            const s = e[2];
            if (256 == (256 & s)) return;
            pe(e);
            const i = ee();
            try {
                zt(e), Vt.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Ds(t, e, n, 2, r);
                const o = 3 == (3 & s);
                if (!i) if (o) {
                    const n = t.preOrderCheckHooks;
                    null !== n && Te(e, n, null)
                } else {
                    const n = t.preOrderHooks;
                    null !== n && Ee(e, n, 0, null), Oe(e, 0)
                }
                if (function (t) {
                    for (let e = Nr(t); null !== e; e = Fr(e)) {
                        if (!e[2]) continue;
                        const t = e[9];
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e], r = n[3];
                            0 == (1024 & n[2]) && Bt(r, 1), n[2] |= 1024
                        }
                    }
                }(e), function (t) {
                    for (let e = Nr(t); null !== e; e = Fr(e)) for (let t = pt; t < e.length; t++) {
                        const n = e[t], r = n[1];
                        qt(n) && Rs(r, n, r.template, n[8])
                    }
                }(e), null !== t.contentQueries && xs(t, e), !i) if (o) {
                    const n = t.contentCheckHooks;
                    null !== n && Te(e, n)
                } else {
                    const n = t.contentHooks;
                    null !== n && Ee(e, n, 1), Oe(e, 1)
                }
                !function (t, e) {
                    const n = t.hostBindingOpCodes;
                    if (null !== n) try {
                        for (let t = 0; t < n.length; t++) {
                            const r = n[t];
                            if (r < 0) we(~r); else {
                                const s = r, i = n[++t], o = n[++t];
                                ae(i, s), o(2, e[s])
                            }
                        }
                    } finally {
                        we(-1)
                    }
                }(t, e);
                const a = t.components;
                null !== a && function (t, e) {
                    for (let n = 0; n < e.length; n++) ti(t, e[n])
                }(e, a);
                const l = t.viewQuery;
                if (null !== l && ai(2, l, r), !i) if (o) {
                    const n = t.viewCheckHooks;
                    null !== n && Te(e, n)
                } else {
                    const n = t.viewHooks;
                    null !== n && Ee(e, n, 2), Oe(e, 2)
                }
                !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, Bt(e[3], -1))
            } finally {
                _e()
            }
        }

        function Ps(t, e, n, r) {
            const s = e[10], i = !ee(), o = Ut(e);
            try {
                i && !o && s.begin && s.begin(), o && Is(t, e, r), Rs(t, e, n, r)
            } finally {
                i && !o && s.end && s.end()
            }
        }

        function Ds(t, e, n, r, s) {
            const i = ve(), o = 2 & r;
            try {
                we(-1), o && e.length > ft && vs(t, e, ft, ee()), n(r, s)
            } finally {
                we(i)
            }
        }

        function Ns(t, e, n) {
            if (yt(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                    const e = t.data[s];
                    e.contentQueries && e.contentQueries(1, n[s], s)
                }
            }
        }

        function Fs(t, e, n) {
            Gt() && (function (t, e, n, r) {
                const s = n.directiveStart, i = n.directiveEnd;
                t.firstCreatePass || $e(n, e), Ar(r, e);
                const o = n.initialInputs;
                for (let a = s; a < i; a++) {
                    const r = t.data[a], i = vt(r);
                    i && Zs(e, n, r);
                    const l = tn(e, t, a, n);
                    Ar(l, e), null !== o && Ys(0, a - s, l, r, 0, o), i && (Mt(n.index, e)[8] = l)
                }
            }(t, e, n, Nt(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
                const r = n.directiveStart, s = n.directiveEnd, i = n.index, o = Vt.lFrame.currentDirectiveIndex;
                try {
                    we(i);
                    for (let n = r; n < s; n++) {
                        const r = t.data[n], s = e[n];
                        le(n), null === r.hostBindings && 0 === r.hostVars && null === r.hostAttrs || Vs(r, s)
                    }
                } finally {
                    we(-1), le(o)
                }
            }(t, e, n))
        }

        function Ls(t, e, n = Nt) {
            const r = e.localNames;
            if (null !== r) {
                let s = e.index + 1;
                for (let i = 0; i < r.length; i += 2) {
                    const o = r[i + 1], a = -1 === o ? n(e, t) : t[o];
                    t[s++] = a
                }
            }
        }

        function Ms(t) {
            const e = t.tView;
            return null === e || e.incompleteFirstPass ? t.tView = Hs(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
        }

        function Hs(t, e, n, r, s, i, o, a, l, c) {
            const u = ft + r, h = u + s, d = function (t, e) {
                const n = [];
                for (let r = 0; r < e; r++) n.push(r < t ? null : bs);
                return n
            }(u, h), f = "function" == typeof c ? c() : c;
            return d[1] = {
                type: t,
                blueprint: d,
                template: n,
                queries: null,
                viewQuery: a,
                declTNode: e,
                data: d.slice().fill(null, u),
                bindingStartIndex: u,
                expandoStartIndex: h,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof i ? i() : i,
                pipeRegistry: "function" == typeof o ? o() : o,
                firstChild: null,
                schemas: l,
                consts: f,
                incompleteFirstPass: !1
            }
        }

        function Us(t, e, n, r) {
            const s = ci(e);
            null === n ? s.push(r) : (s.push(n), t.firstCreatePass && ui(t).push(r, s.length - 1))
        }

        function qs(t, e, n) {
            for (let r in t) if (t.hasOwnProperty(r)) {
                const s = t[r];
                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s]
            }
            return n
        }

        function $s(t, e, n, r, s, i, o, a) {
            const l = Nt(e, n);
            let c, u = e.inputs;
            var h;
            !a && null != u && (c = u[r]) ? (di(t, n, c, r, s), bt(e) && function (t, e) {
                const n = Mt(e, t);
                16 & n[2] || (n[2] |= 64)
            }(n, e.index)) : 3 & e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, e.value || "", r) : s, It(i) ? i.setProperty(l, r, s) : Pe(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s))
        }

        function zs(t, e, n, r) {
            let s = !1;
            if (Gt()) {
                const i = function (t, e, n) {
                    const r = t.directiveRegistry;
                    let s = null;
                    if (r) for (let i = 0; i < r.length; i++) {
                        const o = r[i];
                        ps(n, o.selectors, !1) && (s || (s = []), Ge($e(n, e), t, o.type), vt(o) ? (Gs(t, n), s.unshift(o)) : s.push(o))
                    }
                    return s
                }(t, e, n), o = null === r ? null : {"": -1};
                if (null !== i) {
                    s = !0, Ws(n, t.data.length, i.length);
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t];
                        e.providersResolver && e.providersResolver(e)
                    }
                    let r = !1, a = !1, l = js(t, e, i.length, null);
                    for (let s = 0; s < i.length; s++) {
                        const c = i[s];
                        n.mergedAttrs = De(n.mergedAttrs, c.hostAttrs), Qs(t, n, e, l, c), Ks(l, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128);
                        const u = c.type.prototype;
                        !r && (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index), r = !0), a || !u.ngOnChanges && !u.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index), a = !0), l++
                    }
                    !function (t, e) {
                        const n = e.directiveEnd, r = t.data, s = e.attrs, i = [];
                        let o = null, a = null;
                        for (let l = e.directiveStart; l < n; l++) {
                            const t = r[l], n = t.inputs, c = null === s || cs(e) ? null : Xs(n, s);
                            i.push(c), o = qs(n, l, o), a = qs(t.outputs, l, a)
                        }
                        null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = o, e.outputs = a
                    }(t, n)
                }
                o && function (t, e, n) {
                    if (e) {
                        const r = t.localNames = [];
                        for (let t = 0; t < e.length; t += 2) {
                            const s = n[e[t + 1]];
                            if (null == s) throw new v("301", `Export of name '${e[t + 1]}' not found!`);
                            r.push(e[t], s)
                        }
                    }
                }(n, r, o)
            }
            return n.mergedAttrs = De(n.mergedAttrs, n.attrs), s
        }

        function Bs(t, e, n, r, s, i) {
            const o = i.hostBindings;
            if (o) {
                let n = t.hostBindingOpCodes;
                null === n && (n = t.hostBindingOpCodes = []);
                const i = ~e.index;
                (function (t) {
                    let e = t.length;
                    for (; e > 0;) {
                        const n = t[--e];
                        if ("number" == typeof n && n < 0) return n
                    }
                    return 0
                })(n) != i && n.push(i), n.push(r, s, o)
            }
        }

        function Vs(t, e) {
            null !== t.hostBindings && t.hostBindings(1, e)
        }

        function Gs(t, e) {
            e.flags |= 2, (t.components || (t.components = [])).push(e.index)
        }

        function Ks(t, e, n) {
            if (n) {
                if (e.exportAs) for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
                vt(e) && (n[""] = t)
            }
        }

        function Ws(t, e, n) {
            t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
        }

        function Qs(t, e, n, r, s) {
            t.data[r] = s;
            const i = s.factory || (s.factory = wt(s.type)), o = new je(i, vt(s), null);
            t.blueprint[r] = o, n[r] = o, Bs(t, e, 0, r, js(t, n, s.hostVars, bs), s)
        }

        function Zs(t, e, n) {
            const r = Nt(e, t), s = Ms(n), i = t[10],
                o = ri(t, ks(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n), null, null));
            t[e.index] = o
        }

        function Ys(t, e, n, r, s, i) {
            const o = i[e];
            if (null !== o) {
                const t = r.setInput;
                for (let e = 0; e < o.length;) {
                    const s = o[e++], i = o[e++], a = o[e++];
                    null !== t ? r.setInput(n, a, s, i) : n[i] = a
                }
            }
        }

        function Xs(t, e) {
            let n = null, r = 0;
            for (; r < e.length;) {
                const s = e[r];
                if (0 !== s) if (5 !== s) {
                    if ("number" == typeof s) break;
                    t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), r += 2
                } else r += 2; else r += 4
            }
            return n
        }

        function Js(t, e, n, r) {
            return new Array(t, !0, !1, e, null, 0, r, n, null, null)
        }

        function ti(t, e) {
            const n = Mt(e, t);
            if (qt(n)) {
                const t = n[1];
                80 & n[2] ? Rs(t, n, t.template, n[8]) : n[5] > 0 && ei(n)
            }
        }

        function ei(t) {
            for (let n = Nr(t); null !== n; n = Fr(n)) for (let t = pt; t < n.length; t++) {
                const e = n[t];
                if (1024 & e[2]) {
                    const t = e[1];
                    Rs(t, e, t.template, e[8])
                } else e[5] > 0 && ei(e)
            }
            const e = t[1].components;
            if (null !== e) for (let n = 0; n < e.length; n++) {
                const r = Mt(e[n], t);
                qt(r) && r[5] > 0 && ei(r)
            }
        }

        function ni(t, e) {
            const n = Mt(e, t), r = n[1];
            !function (t, e) {
                for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
            }(r, n), Is(r, n, n[8])
        }

        function ri(t, e) {
            return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
        }

        function si(t) {
            for (; t;) {
                t[2] |= 64;
                const e = Dr(t);
                if (0 != (512 & t[2]) && !e) return t;
                t = e
            }
            return null
        }

        function ii(t, e, n) {
            const r = e[10];
            r.begin && r.begin();
            try {
                Rs(t, e, t.template, n)
            } catch (s) {
                throw hi(e, s), s
            } finally {
                r.end && r.end()
            }
        }

        function oi(t) {
            !function (t) {
                for (let e = 0; e < t.components.length; e++) {
                    const n = t.components[e], r = Ht(n), s = r[1];
                    Ps(s, r, s.template, n)
                }
            }(t[8])
        }

        function ai(t, e, n) {
            he(0), e(t, n)
        }

        const li = (() => Promise.resolve(null))();

        function ci(t) {
            return t[7] || (t[7] = [])
        }

        function ui(t) {
            return t.cleanup || (t.cleanup = [])
        }

        function hi(t, e) {
            const n = t[9], r = n ? n.get(kr, null) : null;
            r && r.handleError(e)
        }

        function di(t, e, n, r, s) {
            for (let i = 0; i < n.length;) {
                const o = n[i++], a = n[i++], l = e[o], c = t.data[o];
                null !== c.setInput ? c.setInput(l, s, r, a) : l[a] = s
            }
        }

        function fi(t, e, n) {
            const r = Dt(e, t);
            !function (t, e, n) {
                It(t) ? t.setValue(e, n) : e.textContent = n
            }(t[11], r, n)
        }

        function pi(t, e, n) {
            let r = n ? t.styles : null, s = n ? t.classes : null, i = 0;
            if (null !== e) for (let o = 0; o < e.length; o++) {
                const t = e[o];
                "number" == typeof t ? i = t : 1 == i ? s = m(s, t) : 2 == i && (r = m(r, t + ": " + e[++o] + ";"))
            }
            n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = s : t.classesWithoutHost = s
        }

        const mi = new un("INJECTOR", -1);

        class gi {
            get(t, e = wn) {
                if (e === wn) {
                    const e = new Error(`NullInjectorError: No provider for ${p(t)}!`);
                    throw e.name = "NullInjectorError", e
                }
                return e
            }
        }

        const yi = new un("Set Injector scope."), bi = {}, _i = {}, vi = [];
        let wi;

        function Si() {
            return void 0 === wi && (wi = new gi), wi
        }

        function Ci(t, e = null, n = null, r) {
            return new Ti(t, n, e || Si(), r)
        }

        class Ti {
            constructor(t, e, n, r = null) {
                this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                const s = [];
                e && pn(e, n => this.processProvider(n, t, e)), pn([t], t => this.processInjectorType(t, [], s)), this.records.set(mi, xi(void 0, this));
                const i = this.records.get(yi);
                this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof t ? null : p(t))
            }

            get destroyed() {
                return this._destroyed
            }

            destroy() {
                this.assertNotDestroyed(), this._destroyed = !0;
                try {
                    this.onDestroy.forEach(t => t.ngOnDestroy())
                } finally {
                    this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                }
            }

            get(t, e = wn, n = P.Default) {
                this.assertNotDestroyed();
                const r = On(this);
                try {
                    if (!(n & P.SkipSelf)) {
                        let e = this.records.get(t);
                        if (void 0 === e) {
                            const n = ("function" == typeof (s = t) || "object" == typeof s && s instanceof un) && O(t);
                            e = n && this.injectableDefInScope(n) ? xi(Ei(t), bi) : null, this.records.set(t, e)
                        }
                        if (null != e) return this.hydrate(t, e)
                    }
                    return (n & P.Self ? Si() : this.parent).get(t, e = n & P.Optional && e === wn ? null : e)
                } catch (i) {
                    if ("NullInjectorError" === i.name) {
                        if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(p(t)), r) throw i;
                        return function (t, e, n, r) {
                            const s = t.ngTempTokenPath;
                            throw e[Cn] && s.unshift(e[Cn]), t.message = function (t, e, n, r = null) {
                                t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                                let s = p(e);
                                if (Array.isArray(e)) s = e.map(p).join(" -> "); else if ("object" == typeof e) {
                                    let t = [];
                                    for (let n in e) if (e.hasOwnProperty(n)) {
                                        let r = e[n];
                                        t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : p(r)))
                                    }
                                    s = `{${t.join(", ")}}`
                                }
                                return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(Sn, "\n  ")}`
                            }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t
                        }(i, t, "R3InjectorError", this.source)
                    }
                    throw i
                } finally {
                    On(r)
                }
                var s
            }

            _resolveInjectorDefTypes() {
                this.injectorDefTypes.forEach(t => this.get(t))
            }

            toString() {
                const t = [];
                return this.records.forEach((e, n) => t.push(p(n))), `R3Injector[${t.join(", ")}]`
            }

            assertNotDestroyed() {
                if (this._destroyed) throw new Error("Injector has already been destroyed.")
            }

            processInjectorType(t, e, n) {
                if (!(t = b(t))) return !1;
                let r = k(t);
                const s = null == r && t.ngModule || void 0, i = void 0 === s ? t : s, o = -1 !== n.indexOf(i);
                if (void 0 !== s && (r = k(s)), null == r) return !1;
                if (null != r.imports && !o) {
                    let t;
                    n.push(i);
                    try {
                        pn(r.imports, r => {
                            this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r))
                        })
                    } finally {
                    }
                    if (void 0 !== t) for (let e = 0; e < t.length; e++) {
                        const {ngModule: n, providers: r} = t[e];
                        pn(r, t => this.processProvider(t, n, r || vi))
                    }
                }
                this.injectorDefTypes.add(i);
                const a = wt(i) || (() => new i);
                this.records.set(i, xi(a, bi));
                const l = r.providers;
                if (null != l && !o) {
                    const e = t;
                    pn(l, t => this.processProvider(t, e, l))
                }
                return void 0 !== s && void 0 !== t.providers
            }

            processProvider(t, e, n) {
                let r = Ai(t = b(t)) ? t : b(t && t.provide);
                const s = function (t, e, n) {
                    return ki(t) ? xi(void 0, t.useValue) : xi(Oi(t), bi)
                }(t);
                if (Ai(t) || !0 !== t.multi) this.records.get(r); else {
                    let e = this.records.get(r);
                    e || (e = xi(void 0, bi, !0), e.factory = () => An(e.multi), this.records.set(r, e)), r = t, e.multi.push(t)
                }
                this.records.set(r, s)
            }

            hydrate(t, e) {
                var n;
                return e.value === bi && (e.value = _i, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
            }

            injectableDefInScope(t) {
                return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
            }
        }

        function Ei(t) {
            const e = O(t), n = null !== e ? e.factory : wt(t);
            if (null !== n) return n;
            if (t instanceof un) throw new Error(`Token ${p(t)} is missing a \u0275prov definition.`);
            if (t instanceof Function) return function (t) {
                const e = t.length;
                if (e > 0) {
                    const n = yn(e, "?");
                    throw new Error(`Can't resolve all parameters for ${p(t)}: (${n.join(", ")}).`)
                }
                const n = function (t) {
                    const e = t && (t[A] || t[I]);
                    if (e) {
                        const n = function (t) {
                            if (t.hasOwnProperty("name")) return t.name;
                            const e = ("" + t).match(/^function\s*([^\s(]+)/);
                            return null === e ? "" : e[1]
                        }(t);
                        return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), e
                    }
                    return null
                }(t);
                return null !== n ? () => n.factory(t) : () => new t
            }(t);
            throw new Error("unreachable")
        }

        function Oi(t, e, n) {
            let r;
            if (Ai(t)) {
                const e = b(t);
                return wt(e) || Ei(e)
            }
            if (ki(t)) r = () => b(t.useValue); else if ((s = t) && s.useFactory) r = () => t.useFactory(...An(t.deps || [])); else if (function (t) {
                return !(!t || !t.useExisting)
            }(t)) r = () => kn(b(t.useExisting)); else {
                const e = b(t && (t.useClass || t.provide));
                if (!function (t) {
                    return !!t.deps
                }(t)) return wt(e) || Ei(e);
                r = () => new e(...An(t.deps))
            }
            var s;
            return r
        }

        function xi(t, e, n = !1) {
            return {factory: t, value: e, multi: n ? [] : void 0}
        }

        function ki(t) {
            return null !== t && "object" == typeof t && Tn in t
        }

        function Ai(t) {
            return "function" == typeof t
        }

        const ji = function (t, e, n) {
            return function (t, e = null, n = null, r) {
                const s = Ci(t, e, n, r);
                return s._resolveInjectorDefTypes(), s
            }({name: n}, e, t, n)
        };
        let Ii = (() => {
            class t {
                static create(t, e) {
                    return Array.isArray(t) ? ji(t, e, "") : ji(t.providers, t.parent, t.name || "")
                }
            }

            return t.THROW_IF_NOT_FOUND = wn, t.NULL = new gi, t.\u0275prov = T({
                token: t,
                providedIn: "any",
                factory: () => kn(mi)
            }), t.__NG_ELEMENT_ID__ = -1, t
        })();

        function Ri(t, e) {
            Ce(Ht(t)[1], Zt())
        }

        function Pi(t) {
            let e = Object.getPrototypeOf(t.type.prototype).constructor, n = !0;
            const r = [t];
            for (; e;) {
                let s;
                if (vt(t)) s = e.\u0275cmp || e.\u0275dir; else {
                    if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
                    s = e.\u0275dir
                }
                if (s) {
                    if (n) {
                        r.push(s);
                        const e = t;
                        e.inputs = Di(t.inputs), e.declaredInputs = Di(t.declaredInputs), e.outputs = Di(t.outputs);
                        const n = s.hostBindings;
                        n && Li(t, n);
                        const i = s.viewQuery, o = s.contentQueries;
                        if (i && Ni(t, i), o && Fi(t, o), f(t.inputs, s.inputs), f(t.declaredInputs, s.declaredInputs), f(t.outputs, s.outputs), vt(s) && s.data.animation) {
                            const e = t.data;
                            e.animation = (e.animation || []).concat(s.data.animation)
                        }
                    }
                    const e = s.features;
                    if (e) for (let r = 0; r < e.length; r++) {
                        const s = e[r];
                        s && s.ngInherit && s(t), s === Pi && (n = !1)
                    }
                }
                e = Object.getPrototypeOf(e)
            }
            !function (t) {
                let e = 0, n = null;
                for (let r = t.length - 1; r >= 0; r--) {
                    const s = t[r];
                    s.hostVars = e += s.hostVars, s.hostAttrs = De(s.hostAttrs, n = De(n, s.hostAttrs))
                }
            }(r)
        }

        function Di(t) {
            return t === V ? {} : t === K ? [] : t
        }

        function Ni(t, e) {
            const n = t.viewQuery;
            t.viewQuery = n ? (t, r) => {
                e(t, r), n(t, r)
            } : e
        }

        function Fi(t, e) {
            const n = t.contentQueries;
            t.contentQueries = n ? (t, r, s) => {
                e(t, r, s), n(t, r, s)
            } : e
        }

        function Li(t, e) {
            const n = t.hostBindings;
            t.hostBindings = n ? (t, r) => {
                e(t, r), n(t, r)
            } : e
        }

        let Mi = null;

        function Hi() {
            if (!Mi) {
                const t = B.Symbol;
                if (t && t.iterator) Mi = t.iterator; else {
                    const t = Object.getOwnPropertyNames(Map.prototype);
                    for (let e = 0; e < t.length; ++e) {
                        const n = t[e];
                        "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Mi = n)
                    }
                }
            }
            return Mi
        }

        class Ui {
            constructor(t) {
                this.wrapped = t
            }

            static wrap(t) {
                return new Ui(t)
            }

            static unwrap(t) {
                return Ui.isWrapped(t) ? t.wrapped : t
            }

            static isWrapped(t) {
                return t instanceof Ui
            }
        }

        function qi(t) {
            return !!$i(t) && (Array.isArray(t) || !(t instanceof Map) && Hi() in t)
        }

        function $i(t) {
            return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function zi(t, e, n) {
            return t[e] = n
        }

        function Bi(t, e, n) {
            return !Object.is(t[e], n) && (t[e] = n, !0)
        }

        function Vi(t, e, n, r) {
            const s = Bi(t, e, n);
            return Bi(t, e + 1, r) || s
        }

        function Gi(t, e, n, r) {
            const s = Kt();
            return Bi(s, ie(), e) && (Wt(), function (t, e, n, r, s, i) {
                const o = Nt(t, e);
                !function (t, e, n, r, s, i, o) {
                    if (null == i) It(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s); else {
                        const a = null == o ? w(i) : o(i, r || "", s);
                        It(t) ? t.setAttribute(e, s, a, n) : n ? e.setAttributeNS(n, s, a) : e.setAttribute(s, a)
                    }
                }(e[11], o, i, t.value, n, r, s)
            }(Se(), s, t, e, n, r)), Gi
        }

        function Ki(t, e, n, r, s, i, o, a) {
            const l = Kt(), c = Wt(), u = t + ft, h = c.firstCreatePass ? function (t, e, n, r, s, i, o, a, l) {
                const c = e.consts, u = As(e, t, 4, o || null, $t(c, a));
                zs(e, n, u, $t(c, l)), Ce(e, u);
                const h = u.tViews = Hs(2, u, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c);
                return null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
            }(u, c, l, e, n, r, s, i, o) : c.data[u];
            Xt(h, !1);
            const d = l[11].createComment("");
            Yr(c, l, d, h), Ar(d, l), ri(l, l[u] = Js(d, l, d, h)), _t(h) && Fs(c, l, h), null != o && Ls(l, h, a)
        }

        function Wi(t) {
            return Lt(Vt.lFrame.contextLView, ft + t)
        }

        function Qi(t, e = P.Default) {
            const n = Kt();
            return null === n ? kn(t, e) : Qe(Zt(), n, b(t), e)
        }

        function Zi(t, e, n) {
            const r = Kt();
            return Bi(r, ie(), e) && $s(Wt(), Se(), r, t, e, r[11], n, !1), Zi
        }

        function Yi(t, e, n, r, s) {
            const i = s ? "class" : "style";
            di(t, n, e.inputs[i], i, r)
        }

        function Xi(t, e, n, r) {
            const s = Kt(), i = Wt(), o = ft + t, a = s[11], l = s[o] = Hr(a, e, Vt.lFrame.currentNamespace),
                c = i.firstCreatePass ? function (t, e, n, r, s, i, o) {
                    const a = e.consts, l = As(e, t, 2, s, $t(a, i));
                    return zs(e, n, l, $t(a, o)), null !== l.attrs && pi(l, l.attrs, !1), null !== l.mergedAttrs && pi(l, l.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, l), l
                }(o, i, s, 0, e, n, r) : i.data[o];
            Xt(c, !0);
            const u = c.mergedAttrs;
            null !== u && Ie(a, l, u);
            const h = c.classes;
            null !== h && is(a, l, h);
            const d = c.styles;
            null !== d && ss(a, l, d), 64 != (64 & c.flags) && Yr(i, s, l, c), 0 === Vt.lFrame.elementDepthCount && Ar(l, s), Vt.lFrame.elementDepthCount++, _t(c) && (Fs(i, s, c), Ns(i, c, s)), null !== r && Ls(s, c)
        }

        function Ji() {
            let t = Zt();
            Jt() ? te() : (t = t.parent, Xt(t, !1));
            const e = t;
            Vt.lFrame.elementDepthCount--;
            const n = Wt();
            n.firstCreatePass && (Ce(n, t), yt(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
                return 0 != (16 & t.flags)
            }(e) && Yi(n, e, Kt(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
                return 0 != (32 & t.flags)
            }(e) && Yi(n, e, Kt(), e.stylesWithoutHost, !1)
        }

        function to(t, e, n, r) {
            Xi(t, e, n, r), Ji()
        }

        function eo(t, e, n) {
            const r = Kt(), s = Wt(), i = t + ft, o = s.firstCreatePass ? function (t, e, n, r, s) {
                const i = e.consts, o = $t(i, r), a = As(e, t, 8, "ng-container", o);
                return null !== o && pi(a, o, !0), zs(e, n, a, $t(i, s)), null !== e.queries && e.queries.elementStart(e, a), a
            }(i, s, r, e, n) : s.data[i];
            Xt(o, !0);
            const a = r[i] = r[11].createComment("");
            Yr(s, r, a, o), Ar(a, r), _t(o) && (Fs(s, r, o), Ns(s, o, r)), null != n && Ls(r, o)
        }

        function no() {
            let t = Zt();
            const e = Wt();
            Jt() ? te() : (t = t.parent, Xt(t, !1)), e.firstCreatePass && (Ce(e, t), yt(t) && e.queries.elementEnd(t))
        }

        function ro() {
            return Kt()
        }

        function so(t) {
            return !!t && "function" == typeof t.then
        }

        function io(t) {
            return !!t && "function" == typeof t.subscribe
        }

        const oo = io;

        function ao(t, e, n = !1, r) {
            const s = Kt(), i = Wt(), o = Zt();
            return function (t, e, n, r, s, i, o = !1, a) {
                const l = _t(r), c = t.firstCreatePass && ui(t), u = ci(e);
                let h = !0;
                if (3 & r.type) {
                    const d = Nt(r, e), f = a ? a(d) : V, p = f.target || d, m = u.length,
                        g = a ? t => a(Pt(t[r.index])).target : r.index;
                    if (It(n)) {
                        let o = null;
                        if (!a && l && (o = function (t, e, n, r) {
                            const s = t.cleanup;
                            if (null != s) for (let i = 0; i < s.length - 1; i += 2) {
                                const t = s[i];
                                if (t === n && s[i + 1] === r) {
                                    const t = e[7], n = s[i + 2];
                                    return t.length > n ? t[n] : null
                                }
                                "string" == typeof t && (i += 2)
                            }
                            return null
                        }(t, e, s, r.index)), null !== o) (o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1; else {
                            i = co(r, e, 0, i, !1);
                            const t = n.listen(f.name || p, s, i);
                            u.push(i, t), c && c.push(s, g, m, m + 1)
                        }
                    } else i = co(r, e, 0, i, !0), p.addEventListener(s, i, o), u.push(i), c && c.push(s, g, m, o)
                } else i = co(r, e, 0, i, !1);
                const d = r.outputs;
                let f;
                if (h && null !== d && (f = d[s])) {
                    const t = f.length;
                    if (t) for (let n = 0; n < t; n += 2) {
                        const t = e[f[n]][f[n + 1]].subscribe(i), o = u.length;
                        u.push(i, t), c && c.push(s, r.index, o, -(o + 1))
                    }
                }
            }(i, s, s[11], o, t, e, n, r), ao
        }

        function lo(t, e, n, r) {
            try {
                return !1 !== n(r)
            } catch (s) {
                return hi(t, s), !1
            }
        }

        function co(t, e, n, r, s) {
            return function n(i) {
                if (i === Function) return r;
                const o = 2 & t.flags ? Mt(t.index, e) : e;
                0 == (32 & e[2]) && si(o);
                let a = lo(e, 0, r, i), l = n.__ngNextListenerFn__;
                for (; l;) a = lo(e, 0, l, i) && a, l = l.__ngNextListenerFn__;
                return s && !1 === a && (i.preventDefault(), i.returnValue = !1), a
            }
        }

        function uo(t = 1) {
            return function (t) {
                return (Vt.lFrame.contextLView = function (t, e) {
                    for (; t > 0;) e = e[15], t--;
                    return e
                }(t, Vt.lFrame.contextLView))[8]
            }(t)
        }

        function ho(t, e) {
            let n = null;
            const r = function (t) {
                const e = t.attrs;
                if (null != e) {
                    const t = e.indexOf(5);
                    if (0 == (1 & t)) return e[t + 1]
                }
                return null
            }(t);
            for (let s = 0; s < e.length; s++) {
                const i = e[s];
                if ("*" !== i) {
                    if (null === r ? ps(t, i, !0) : ms(r, i)) return s
                } else n = s
            }
            return n
        }

        function fo(t) {
            const e = Kt()[16][6];
            if (!e.projection) {
                const n = e.projection = yn(t ? t.length : 1, null), r = n.slice();
                let s = e.child;
                for (; null !== s;) {
                    const e = t ? ho(s, t) : 0;
                    null !== e && (r[e] ? r[e].projectionNext = s : n[e] = s, r[e] = s), s = s.next
                }
            }
        }

        function po(t, e = 0, n) {
            const r = Kt(), s = Wt(), i = As(s, ft + t, 16, null, n || null);
            null === i.projection && (i.projection = e), te(), 64 != (64 & i.flags) && function (t, e, n) {
                rs(e[11], 0, e, n, Br(t, n, e), Qr(n.parent || e[6], n, e))
            }(s, r, i)
        }

        function mo(t, e, n, r, s) {
            const i = t[n + 1], o = null === e;
            let a = r ? Ss(i) : Ts(i), l = !1;
            for (; 0 !== a && (!1 === l || o);) {
                const n = t[a + 1];
                go(t[a], e) && (l = !0, t[a + 1] = r ? Os(n) : Cs(n)), a = r ? Ss(n) : Ts(n)
            }
            l && (t[n + 1] = r ? Cs(i) : Os(i))
        }

        function go(t, e) {
            return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && vn(t, e) >= 0
        }

        const yo = {textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0};

        function bo(t) {
            return t.substring(yo.key, yo.keyEnd)
        }

        function _o(t, e) {
            const n = yo.textEnd;
            return n === e ? -1 : (e = yo.keyEnd = function (t, e, n) {
                for (; e < n && t.charCodeAt(e) > 32;) e++;
                return e
            }(t, yo.key = e, n), vo(t, e, n))
        }

        function vo(t, e, n) {
            for (; e < n && t.charCodeAt(e) <= 32;) e++;
            return e
        }

        function wo(t, e, n) {
            return Eo(t, e, n, !1), wo
        }

        function So(t, e) {
            return Eo(t, e, null, !0), So
        }

        function Co(t) {
            !function (t, e, n, r) {
                const s = Wt(), i = oe(2);
                s.firstUpdatePass && xo(s, null, i, r);
                const o = Kt();
                if (n !== bs && Bi(o, i, n)) {
                    const a = s.data[ve()];
                    if (Po(a, r) && !Oo(s, i)) {
                        let t = a.classesWithoutHost;
                        null !== t && (n = m(t, n || "")), Yi(s, a, o, n, r)
                    } else !function (t, e, n, r, s, i, o, a) {
                        s === bs && (s = G);
                        let l = 0, c = 0, u = 0 < s.length ? s[0] : null, h = 0 < i.length ? i[0] : null;
                        for (; null !== u || null !== h;) {
                            const o = l < s.length ? s[l + 1] : void 0, d = c < i.length ? i[c + 1] : void 0;
                            let f, p = null;
                            u === h ? (l += 2, c += 2, o !== d && (p = h, f = d)) : null === h || null !== u && u < h ? (l += 2, p = u) : (c += 2, p = h, f = d), null !== p && jo(t, e, n, r, p, f, true, a), u = l < s.length ? s[l] : null, h = c < i.length ? i[c] : null
                        }
                    }(s, a, o, o[11], o[i + 1], o[i + 1] = function (t, e, n) {
                        if (null == n || "" === n) return G;
                        const r = [], s = Bn(n);
                        if (Array.isArray(s)) for (let i = 0; i < s.length; i++) t(r, s[i], !0); else if ("object" == typeof s) for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]); else "string" == typeof s && e(r, s);
                        return r
                    }(t, e, n), 0, i)
                }
            }(bn, To, t, !0)
        }

        function To(t, e) {
            for (let n = function (t) {
                return function (t) {
                    yo.key = 0, yo.keyEnd = 0, yo.value = 0, yo.valueEnd = 0, yo.textEnd = t.length
                }(t), _o(t, vo(t, 0, yo.textEnd))
            }(e); n >= 0; n = _o(e, n)) bn(t, bo(e), !0)
        }

        function Eo(t, e, n, r) {
            const s = Kt(), i = Wt(), o = oe(2);
            i.firstUpdatePass && xo(i, t, o, r), e !== bs && Bi(s, o, e) && jo(i, i.data[ve()], s, s[11], t, s[o + 1] = function (t, e) {
                return null == t || ("string" == typeof e ? t += e : "object" == typeof t && (t = p(Bn(t)))), t
            }(e, n), r, o)
        }

        function Oo(t, e) {
            return e >= t.expandoStartIndex
        }

        function xo(t, e, n, r) {
            const s = t.data;
            if (null === s[n + 1]) {
                const i = s[ve()], o = Oo(t, n);
                Po(i, r) && null === e && !o && (e = !1), e = function (t, e, n, r) {
                    const s = ce(t);
                    let i = r ? e.residualClasses : e.residualStyles;
                    if (null === s) 0 === (r ? e.classBindings : e.styleBindings) && (n = Ao(n = ko(null, t, e, n, r), e.attrs, r), i = null); else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== s) if (n = ko(s, t, e, n, r), null === i) {
                            let n = function (t, e, n) {
                                const r = n ? e.classBindings : e.styleBindings;
                                if (0 !== Ts(r)) return t[Ss(r)]
                            }(t, e, r);
                            void 0 !== n && Array.isArray(n) && (n = ko(null, t, e, n[1], r), n = Ao(n, e.attrs, r), function (t, e, n, r) {
                                t[Ss(n ? e.classBindings : e.styleBindings)] = r
                            }(t, e, r, n))
                        } else i = function (t, e, n) {
                            let r;
                            const s = e.directiveEnd;
                            for (let i = 1 + e.directiveStylingLast; i < s; i++) r = Ao(r, t[i].hostAttrs, n);
                            return Ao(r, e.attrs, n)
                        }(t, e, r)
                    }
                    return void 0 !== i && (r ? e.residualClasses = i : e.residualStyles = i), n
                }(s, i, e, r), function (t, e, n, r, s, i) {
                    let o = i ? e.classBindings : e.styleBindings, a = Ss(o), l = Ts(o);
                    t[r] = n;
                    let c, u = !1;
                    if (Array.isArray(n)) {
                        const t = n;
                        c = t[1], (null === c || vn(t, c) > 0) && (u = !0)
                    } else c = n;
                    if (s) if (0 !== l) {
                        const e = Ss(t[a + 1]);
                        t[r + 1] = ws(e, a), 0 !== e && (t[e + 1] = Es(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17
                    } else t[r + 1] = ws(a, 0), 0 !== a && (t[a + 1] = Es(t[a + 1], r)), a = r; else t[r + 1] = ws(l, 0), 0 === a ? a = r : t[l + 1] = Es(t[l + 1], r), l = r;
                    u && (t[r + 1] = Cs(t[r + 1])), mo(t, c, r, !0), mo(t, c, r, !1), function (t, e, n, r, s) {
                        const i = s ? t.residualClasses : t.residualStyles;
                        null != i && "string" == typeof e && vn(i, e) >= 0 && (n[r + 1] = Os(n[r + 1]))
                    }(e, c, t, r, i), o = ws(a, l), i ? e.classBindings = o : e.styleBindings = o
                }(s, i, e, n, o, r)
            }
        }

        function ko(t, e, n, r, s) {
            let i = null;
            const o = n.directiveEnd;
            let a = n.directiveStylingLast;
            for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a], r = Ao(r, i.hostAttrs, s), i !== t);) a++;
            return null !== t && (n.directiveStylingLast = a), r
        }

        function Ao(t, e, n) {
            const r = n ? 1 : 2;
            let s = -1;
            if (null !== e) for (let i = 0; i < e.length; i++) {
                const o = e[i];
                "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), bn(t, o, !!n || e[++i]))
            }
            return void 0 === t ? null : t
        }

        function jo(t, e, n, r, s, i, o, a) {
            if (!(3 & e.type)) return;
            const l = t.data, c = l[a + 1];
            Ro(1 == (1 & c) ? Io(l, e, n, s, Ts(c), o) : void 0) || (Ro(i) || 2 == (2 & c) && (i = Io(l, null, n, s, a, o)), function (t, e, n, r, s) {
                const i = It(t);
                if (e) s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r); else {
                    let e = -1 === r.indexOf("-") ? void 0 : Rr.DashCase;
                    if (null == s) i ? t.removeStyle(n, r, e) : n.style.removeProperty(r); else {
                        const o = "string" == typeof s && s.endsWith("!important");
                        o && (s = s.slice(0, -10), e |= Rr.Important), i ? t.setStyle(n, r, s, e) : n.style.setProperty(r, s, o ? "important" : "")
                    }
                }
            }(r, o, Dt(ve(), n), s, i))
        }

        function Io(t, e, n, r, s, i) {
            const o = null === e;
            let a;
            for (; s > 0;) {
                const e = t[s], i = Array.isArray(e), l = i ? e[1] : e, c = null === l;
                let u = n[s + 1];
                u === bs && (u = c ? G : void 0);
                let h = c ? _n(u, r) : l === r ? u : void 0;
                if (i && !Ro(h) && (h = _n(e, r)), Ro(h) && (a = h, o)) return a;
                const d = t[s + 1];
                s = o ? Ss(d) : Ts(d)
            }
            if (null !== e) {
                let t = i ? e.residualClasses : e.residualStyles;
                null != t && (a = _n(t, r))
            }
            return a
        }

        function Ro(t) {
            return void 0 !== t
        }

        function Po(t, e) {
            return 0 != (t.flags & (e ? 16 : 32))
        }

        function Do(t, e = "") {
            const n = Kt(), r = Wt(), s = t + ft, i = r.firstCreatePass ? As(r, s, 1, e, null) : r.data[s],
                o = n[s] = function (t, e) {
                    return It(t) ? t.createText(e) : t.createTextNode(e)
                }(n[11], e);
            Yr(r, n, o, i), Xt(i, !1)
        }

        function No(t) {
            return Fo("", t, ""), No
        }

        function Fo(t, e, n) {
            const r = Kt(), s = function (t, e, n, r) {
                return Bi(t, ie(), n) ? e + w(n) + r : bs
            }(r, t, e, n);
            return s !== bs && fi(r, ve(), s), Fo
        }

        function Lo(t, e, n, r, s) {
            const i = Kt(), o = function (t, e, n, r, s, i) {
                const o = Vi(t, se(), n, s);
                return oe(2), o ? e + w(n) + r + w(s) + i : bs
            }(i, t, e, n, r, s);
            return o !== bs && fi(i, ve(), o), Lo
        }

        function Mo(t, e, n) {
            const r = Kt();
            return Bi(r, ie(), e) && $s(Wt(), Se(), r, t, e, r[11], n, !0), Mo
        }

        function Ho(t, e, n) {
            const r = Kt();
            if (Bi(r, ie(), e)) {
                const s = Wt(), i = Se();
                $s(s, i, r, t, e, function (t, e, n) {
                    return (null === t || vt(t)) && (n = function (t) {
                        for (; Array.isArray(t);) {
                            if ("object" == typeof t[1]) return t;
                            t = t[0]
                        }
                        return null
                    }(n[e.index])), n[11]
                }(ce(s.data), i, r), n, !0)
            }
            return Ho
        }

        const Uo = void 0;
        var qo = ["en", [["a", "p"], ["AM", "PM"], Uo], [["AM", "PM"], Uo, Uo], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Uo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Uo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Uo, "{1} 'at' {0}", Uo], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
            let e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
        }];
        let $o = {};

        function zo(t, e, n) {
            "string" != typeof e && (n = e, e = t[Wo.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), $o[e] = t, n && ($o[e][Wo.ExtraData] = n)
        }

        function Bo(t) {
            const e = function (t) {
                return t.toLowerCase().replace(/_/g, "-")
            }(t);
            let n = Ko(e);
            if (n) return n;
            const r = e.split("-")[0];
            if (n = Ko(r), n) return n;
            if ("en" === r) return qo;
            throw new Error(`Missing locale data for the locale "${t}".`)
        }

        function Vo(t) {
            return Bo(t)[Wo.CurrencyCode] || null
        }

        function Go(t) {
            return Bo(t)[Wo.PluralCase]
        }

        function Ko(t) {
            return t in $o || ($o[t] = B.ng && B.ng.common && B.ng.common.locales && B.ng.common.locales[t]), $o[t]
        }

        var Wo = function (t) {
            return t[t.LocaleId = 0] = "LocaleId", t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat", t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", t[t.DaysFormat = 3] = "DaysFormat", t[t.DaysStandalone = 4] = "DaysStandalone", t[t.MonthsFormat = 5] = "MonthsFormat", t[t.MonthsStandalone = 6] = "MonthsStandalone", t[t.Eras = 7] = "Eras", t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek", t[t.WeekendRange = 9] = "WeekendRange", t[t.DateFormat = 10] = "DateFormat", t[t.TimeFormat = 11] = "TimeFormat", t[t.DateTimeFormat = 12] = "DateTimeFormat", t[t.NumberSymbols = 13] = "NumberSymbols", t[t.NumberFormats = 14] = "NumberFormats", t[t.CurrencyCode = 15] = "CurrencyCode", t[t.CurrencySymbol = 16] = "CurrencySymbol", t[t.CurrencyName = 17] = "CurrencyName", t[t.Currencies = 18] = "Currencies", t[t.Directionality = 19] = "Directionality", t[t.PluralCase = 20] = "PluralCase", t[t.ExtraData = 21] = "ExtraData", t
        }({});
        const Qo = "en-US";
        let Zo = Qo;

        function Yo(t) {
            var e, n;
            n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
                throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)
            }(n, e), "string" == typeof t && (Zo = t.toLowerCase().replace(/_/g, "-"))
        }

        function Xo(t, e, n, r, s) {
            if (t = b(t), Array.isArray(t)) for (let i = 0; i < t.length; i++) Xo(t[i], e, n, r, s); else {
                const i = Wt(), o = Kt();
                let a = Ai(t) ? t : b(t.provide), l = Oi(t);
                const c = Zt(), u = 1048575 & c.providerIndexes, h = c.directiveStart, d = c.providerIndexes >> 20;
                if (Ai(t) || !t.multi) {
                    const r = new je(l, s, Qi), f = ea(a, e, s ? u : u + d, h);
                    -1 === f ? (Ge($e(c, o), i, a), Jo(i, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 1048576), n.push(r), o.push(r)) : (n[f] = r, o[f] = r)
                } else {
                    const f = ea(a, e, u + d, h), p = ea(a, e, u, u + d), m = f >= 0 && n[f], g = p >= 0 && n[p];
                    if (s && !g || !s && !m) {
                        Ge($e(c, o), i, a);
                        const u = function (t, e, n, r, s) {
                            const i = new je(t, n, Qi);
                            return i.multi = [], i.index = e, i.componentProviders = 0, ta(i, s, r && !n), i
                        }(s ? ra : na, n.length, s, r, l);
                        !s && g && (n[p].providerFactory = u), Jo(i, t, e.length, 0), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 1048576), n.push(u), o.push(u)
                    } else Jo(i, t, f > -1 ? f : p, ta(n[s ? p : f], l, !s && r));
                    !s && r && g && n[p].componentProviders++
                }
            }
        }

        function Jo(t, e, n, r) {
            const s = Ai(e);
            if (s || e.useClass) {
                const i = (e.useClass || e).prototype.ngOnDestroy;
                if (i) {
                    const o = t.destroyHooks || (t.destroyHooks = []);
                    if (!s && e.multi) {
                        const t = o.indexOf(n);
                        -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i)
                    } else o.push(n, i)
                }
            }
        }

        function ta(t, e, n) {
            return n && t.componentProviders++, t.multi.push(e) - 1
        }

        function ea(t, e, n, r) {
            for (let s = n; s < r; s++) if (e[s] === t) return s;
            return -1
        }

        function na(t, e, n, r) {
            return sa(this.multi, [])
        }

        function ra(t, e, n, r) {
            const s = this.multi;
            let i;
            if (this.providerFactory) {
                const t = this.providerFactory.componentProviders, e = tn(n, n[1], this.providerFactory.index, r);
                i = e.slice(0, t), sa(s, i);
                for (let n = t; n < e.length; n++) i.push(e[n])
            } else i = [], sa(s, i);
            return i
        }

        function sa(t, e) {
            for (let n = 0; n < t.length; n++) e.push((0, t[n])());
            return e
        }

        function ia(t, e = []) {
            return n => {
                n.providersResolver = (n, r) => function (t, e, n) {
                    const r = Wt();
                    if (r.firstCreatePass) {
                        const s = vt(t);
                        Xo(n, r.data, r.blueprint, s, !0), Xo(e, r.data, r.blueprint, s, !1)
                    }
                }(n, r ? r(t) : t, e)
            }
        }

        class oa {
        }

        class aa {
            resolveComponentFactory(t) {
                throw function (t) {
                    const e = Error(`No component factory found for ${p(t)}. Did you add it to @NgModule.entryComponents?`);
                    return e.ngComponent = t, e
                }(t)
            }
        }

        let la = (() => {
            class t {
            }

            return t.NULL = new aa, t
        })();

        function ca(...t) {
        }

        function ua(t, e) {
            return new da(Nt(t, e))
        }

        const ha = function () {
            return ua(Zt(), Kt())
        };
        let da = (() => {
            class t {
                constructor(t) {
                    this.nativeElement = t
                }
            }

            return t.__NG_ELEMENT_ID__ = ha, t
        })();

        function fa(t) {
            return t instanceof da ? t.nativeElement : t
        }

        class pa {
        }

        let ma = (() => {
            class t {
            }

            return t.__NG_ELEMENT_ID__ = () => ga(), t
        })();
        const ga = function () {
            const t = Kt(), e = Mt(Zt().index, t);
            return function (t) {
                return t[11]
            }(mt(e) ? e : t)
        };
        let ya = (() => {
            class t {
            }

            return t.\u0275prov = T({token: t, providedIn: "root", factory: () => null}), t
        })();

        class ba {
            constructor(t) {
                this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
            }
        }

        const _a = new ba("11.2.14");

        class va {
            constructor() {
            }

            supports(t) {
                return qi(t)
            }

            create(t) {
                return new Sa(t)
            }
        }

        const wa = (t, e) => e;

        class Sa {
            constructor(t) {
                this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || wa
            }

            forEachItem(t) {
                let e;
                for (e = this._itHead; null !== e; e = e._next) t(e)
            }

            forEachOperation(t) {
                let e = this._itHead, n = this._removalsHead, r = 0, s = null;
                for (; e || n;) {
                    const i = !n || e && e.currentIndex < Oa(n, r, s) ? e : n, o = Oa(i, r, s), a = i.currentIndex;
                    if (i === n) r--, n = n._nextRemoved; else if (e = e._next, null == i.previousIndex) r++; else {
                        s || (s = []);
                        const t = o - r, e = a - r;
                        if (t != e) {
                            for (let n = 0; n < t; n++) {
                                const r = n < s.length ? s[n] : s[n] = 0, i = r + n;
                                e <= i && i < t && (s[n] = r + 1)
                            }
                            s[i.previousIndex] = e - t
                        }
                    }
                    o !== a && t(i, o, a)
                }
            }

            forEachPreviousItem(t) {
                let e;
                for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
            }

            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
            }

            forEachMovedItem(t) {
                let e;
                for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
            }

            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
            }

            forEachIdentityChange(t) {
                let e;
                for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
            }

            diff(t) {
                if (null == t && (t = []), !qi(t)) throw new Error(`Error trying to diff '${p(t)}'. Only arrays and iterables are allowed`);
                return this.check(t) ? this : null
            }

            onDestroy() {
            }

            check(t) {
                this._reset();
                let e, n, r, s = this._itHead, i = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), Object.is(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next
                } else e = 0, function (t, e) {
                    if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]); else {
                        const n = t[Hi()]();
                        let r;
                        for (; !(r = n.next()).done;) e(r.value)
                    }
                }(t, t => {
                    r = this._trackByFn(e, t), null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), Object.is(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++
                }), this.length = e;
                return this._truncate(s), this.collection = t, this.isDirty
            }

            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }

            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved) t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                }
            }

            _mismatch(t, e, n, r) {
                let s;
                return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : t = this._addAfter(new Ca(e, n), s, r), t
            }

            _verifyReinsertion(t, e, n, r) {
                let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
            }

            _truncate(t) {
                for (; null !== t;) {
                    const e = t._next;
                    this._addToRemovals(this._unlink(t)), t = e
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }

            _reinsertAfter(t, e, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const r = t._prevRemoved, s = t._nextRemoved;
                return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }

            _moveAfter(t, e, n) {
                return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }

            _addAfter(t, e, n) {
                return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
            }

            _insertAfter(t, e, n) {
                const r = null === e ? this._itHead : e._next;
                return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Ea), this._linkedRecords.put(t), t.currentIndex = n, t
            }

            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }

            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const e = t._prev, n = t._next;
                return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
            }

            _addToMoves(t, e) {
                return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
            }

            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Ea), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
            }

            _addIdentityChange(t, e) {
                return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
            }
        }

        class Ca {
            constructor(t, e) {
                this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
            }
        }

        class Ta {
            constructor() {
                this._head = null, this._tail = null
            }

            add(t) {
                null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
            }

            get(t, e) {
                let n;
                for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t)) return n;
                return null
            }

            remove(t) {
                const e = t._prevDup, n = t._nextDup;
                return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
            }
        }

        class Ea {
            constructor() {
                this.map = new Map
            }

            put(t) {
                const e = t.trackById;
                let n = this.map.get(e);
                n || (n = new Ta, this.map.set(e, n)), n.add(t)
            }

            get(t, e) {
                const n = this.map.get(t);
                return n ? n.get(t, e) : null
            }

            remove(t) {
                const e = t.trackById;
                return this.map.get(e).remove(t) && this.map.delete(e), t
            }

            get isEmpty() {
                return 0 === this.map.size
            }

            clear() {
                this.map.clear()
            }
        }

        function Oa(t, e, n) {
            const r = t.previousIndex;
            if (null === r) return r;
            let s = 0;
            return n && r < n.length && (s = n[r]), r + e + s
        }

        class xa {
            constructor() {
            }

            supports(t) {
                return t instanceof Map || $i(t)
            }

            create() {
                return new ka
            }
        }

        class ka {
            constructor() {
                this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
            }

            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }

            forEachItem(t) {
                let e;
                for (e = this._mapHead; null !== e; e = e._next) t(e)
            }

            forEachPreviousItem(t) {
                let e;
                for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
            }

            forEachChangedItem(t) {
                let e;
                for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
            }

            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
            }

            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
            }

            diff(t) {
                if (t) {
                    if (!(t instanceof Map || $i(t))) throw new Error(`Error trying to diff '${p(t)}'. Only maps and objects are allowed`)
                } else t = new Map;
                return this.check(t) ? this : null
            }

            onDestroy() {
            }

            check(t) {
                this._reset();
                let e = this._mapHead;
                if (this._appendAfter = null, this._forEach(t, (t, n) => {
                    if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next; else {
                        const r = this._getOrCreateRecordForKey(n, t);
                        e = this._insertBeforeOrAppend(e, r)
                    }
                }), e) {
                    e._prev && (e._prev._next = null), this._removalsHead = e;
                    for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
            }

            _insertBeforeOrAppend(t, e) {
                if (t) {
                    const n = t._prev;
                    return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                }
                return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
            }

            _getOrCreateRecordForKey(t, e) {
                if (this._records.has(t)) {
                    const n = this._records.get(t);
                    this._maybeAddToChanges(n, e);
                    const r = n._prev, s = n._next;
                    return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n
                }
                const n = new Aa(t);
                return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
            }

            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                }
            }

            _maybeAddToChanges(t, e) {
                Object.is(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
            }

            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
            }

            _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
            }

            _forEach(t, e) {
                t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
            }
        }

        class Aa {
            constructor(t) {
                this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
            }
        }

        function ja() {
            return new Ia([new va])
        }

        let Ia = (() => {
            class t {
                constructor(t) {
                    this.factories = t
                }

                static create(e, n) {
                    if (null != n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }

                static extend(e) {
                    return {provide: t, useFactory: n => t.create(e, n || ja()), deps: [[t, new Pn, new Rn]]}
                }

                find(t) {
                    const e = this.factories.find(e => e.supports(t));
                    if (null != e) return e;
                    throw new Error(`Cannot find a differ supporting object '${t}' of type '${n = t, n.name || typeof n}'`);
                    var n
                }
            }

            return t.\u0275prov = T({token: t, providedIn: "root", factory: ja}), t
        })();

        function Ra() {
            return new Pa([new xa])
        }

        let Pa = (() => {
            class t {
                constructor(t) {
                    this.factories = t
                }

                static create(e, n) {
                    if (n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }

                static extend(e) {
                    return {provide: t, useFactory: n => t.create(e, n || Ra()), deps: [[t, new Pn, new Rn]]}
                }

                find(t) {
                    const e = this.factories.find(e => e.supports(t));
                    if (e) return e;
                    throw new Error(`Cannot find a differ supporting object '${t}'`)
                }
            }

            return t.\u0275prov = T({token: t, providedIn: "root", factory: Ra}), t
        })();

        function Da(t, e, n, r, s = !1) {
            for (; null !== n;) {
                const i = e[n.index];
                if (null !== i && r.push(Pt(i)), gt(i)) for (let t = pt; t < i.length; t++) {
                    const e = i[t], n = e[1].firstChild;
                    null !== n && Da(e[1], e, n, r)
                }
                const o = n.type;
                if (8 & o) Da(t, e, n.child, r); else if (32 & o) {
                    const t = Pr(n, e);
                    let s;
                    for (; s = t();) r.push(s)
                } else if (16 & o) {
                    const t = Jr(e, n);
                    if (Array.isArray(t)) r.push(...t); else {
                        const n = Dr(e[16]);
                        Da(n[1], n, t, r, !0)
                    }
                }
                n = s ? n.projectionNext : n.next
            }
            return r
        }

        class Na {
            constructor(t, e) {
                this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._attachedToViewContainer = !1
            }

            get rootNodes() {
                const t = this._lView, e = t[1];
                return Da(e, t, e.firstChild, [])
            }

            get context() {
                return this._lView[8]
            }

            get destroyed() {
                return 256 == (256 & this._lView[2])
            }

            destroy() {
                if (this._appRef) this._appRef.detachView(this); else if (this._attachedToViewContainer) {
                    const t = this._lView[3];
                    if (gt(t)) {
                        const e = t[8], n = e ? e.indexOf(this) : -1;
                        n > -1 && (qr(t, n), gn(e, n))
                    }
                    this._attachedToViewContainer = !1
                }
                $r(this._lView[1], this._lView)
            }

            onDestroy(t) {
                Us(this._lView[1], this._lView, null, t)
            }

            markForCheck() {
                si(this._cdRefInjectingView || this._lView)
            }

            detach() {
                this._lView[2] &= -129
            }

            reattach() {
                this._lView[2] |= 128
            }

            detectChanges() {
                ii(this._lView[1], this._lView, this.context)
            }

            checkNoChanges() {
                !function (t, e, n) {
                    ne(!0);
                    try {
                        ii(t, e, n)
                    } finally {
                        ne(!1)
                    }
                }(this._lView[1], this._lView, this.context)
            }

            attachToViewContainerRef() {
                if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                this._attachedToViewContainer = !0
            }

            detachFromAppRef() {
                var t;
                this._appRef = null, ns(this._lView[1], t = this._lView, t[11], 2, null, null)
            }

            attachToAppRef(t) {
                if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }
        }

        class Fa extends Na {
            constructor(t) {
                super(t), this._view = t
            }

            detectChanges() {
                oi(this._view)
            }

            checkNoChanges() {
                !function (t) {
                    ne(!0);
                    try {
                        oi(t)
                    } finally {
                        ne(!1)
                    }
                }(this._view)
            }

            get context() {
                return null
            }
        }

        const La = Ha;
        let Ma = (() => {
            class t {
            }

            return t.__NG_ELEMENT_ID__ = La, t.__ChangeDetectorRef__ = !0, t
        })();

        function Ha(t = !1) {
            return function (t, e, n) {
                if (!n && bt(t)) {
                    const n = Mt(t.index, e);
                    return new Na(n, n)
                }
                return 47 & t.type ? new Na(e[16], e) : null
            }(Zt(), Kt(), t)
        }

        const Ua = [new xa], qa = new Ia([new va]), $a = new Pa(Ua), za = function () {
            return Ka(Zt(), Kt())
        };
        let Ba = (() => {
            class t {
            }

            return t.__NG_ELEMENT_ID__ = za, t
        })();
        const Va = Ba, Ga = class extends Va {
            constructor(t, e, n) {
                super(), this._declarationLView = t, this._declarationTContainer = e, this.elementRef = n
            }

            createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                    n = ks(this._declarationLView, e, t, 16, null, e.declTNode, null, null, null, null);
                n[17] = this._declarationLView[this._declarationTContainer.index];
                const r = this._declarationLView[19];
                return null !== r && (n[19] = r.createEmbeddedView(e)), Is(e, n, t), new Na(n)
            }
        };

        function Ka(t, e) {
            return 4 & t.type ? new Ga(e, t, ua(t, e)) : null
        }

        class Wa {
        }

        class Qa {
        }

        const Za = function () {
            return nl(Zt(), Kt())
        };
        let Ya = (() => {
            class t {
            }

            return t.__NG_ELEMENT_ID__ = Za, t
        })();
        const Xa = Ya, Ja = class extends Xa {
            constructor(t, e, n) {
                super(), this._lContainer = t, this._hostTNode = e, this._hostLView = n
            }

            get element() {
                return ua(this._hostTNode, this._hostLView)
            }

            get injector() {
                return new rn(this._hostTNode, this._hostLView)
            }

            get parentInjector() {
                const t = Ve(this._hostTNode, this._hostLView);
                if (Fe(t)) {
                    const e = Me(t, this._hostLView), n = Le(t);
                    return new rn(e[1].data[n + 8], e)
                }
                return new rn(null, this._hostLView)
            }

            clear() {
                for (; this.length > 0;) this.remove(this.length - 1)
            }

            get(t) {
                const e = tl(this._lContainer);
                return null !== e && e[t] || null
            }

            get length() {
                return this._lContainer.length - pt
            }

            createEmbeddedView(t, e, n) {
                const r = t.createEmbeddedView(e || {});
                return this.insert(r, n), r
            }

            createComponent(t, e, n, r, s) {
                const i = n || this.parentInjector;
                if (!s && null == t.ngModule && i) {
                    const t = i.get(Wa, null);
                    t && (s = t)
                }
                const o = t.create(i, r, void 0, s);
                return this.insert(o.hostView, e), o
            }

            insert(t, e) {
                const n = t._lView, r = n[1];
                if (gt(n[3])) {
                    const e = this.indexOf(t);
                    if (-1 !== e) this.detach(e); else {
                        const e = n[3], r = new Ja(e, e[6], e[3]);
                        r.detach(r.indexOf(t))
                    }
                }
                const s = this._adjustIndex(e), i = this._lContainer;
                !function (t, e, n, r) {
                    const s = pt + r, i = n.length;
                    r > 0 && (n[s - 1][4] = e), r < i - pt ? (e[4] = n[s], mn(n, pt + r, e)) : (n.push(e), e[4] = null), e[3] = n;
                    const o = e[17];
                    null !== o && n !== o && function (t, e) {
                        const n = t[9];
                        e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e)
                    }(o, e);
                    const a = e[19];
                    null !== a && a.insertView(t), e[2] |= 128
                }(r, n, i, s);
                const o = ts(s, i), a = n[11], l = Wr(a, i[7]);
                return null !== l && function (t, e, n, r, s, i) {
                    r[0] = s, r[6] = e, ns(t, r, n, 1, s, i)
                }(r, i[6], a, n, l, o), t.attachToViewContainerRef(), mn(el(i), s, t), t
            }

            move(t, e) {
                return this.insert(t, e)
            }

            indexOf(t) {
                const e = tl(this._lContainer);
                return null !== e ? e.indexOf(t) : -1
            }

            remove(t) {
                const e = this._adjustIndex(t, -1), n = qr(this._lContainer, e);
                n && (gn(el(this._lContainer), e), $r(n[1], n))
            }

            detach(t) {
                const e = this._adjustIndex(t, -1), n = qr(this._lContainer, e);
                return n && null != gn(el(this._lContainer), e) ? new Na(n) : null
            }

            _adjustIndex(t, e = 0) {
                return null == t ? this.length + e : t
            }
        };

        function tl(t) {
            return t[8]
        }

        function el(t) {
            return t[8] || (t[8] = [])
        }

        function nl(t, e) {
            let n;
            const r = e[t.index];
            if (gt(r)) n = r; else {
                let s;
                if (8 & t.type) s = Pt(r); else {
                    const n = e[11];
                    s = n.createComment("");
                    const r = Nt(t, e);
                    Vr(n, Wr(n, r), s, function (t, e) {
                        return It(t) ? t.nextSibling(e) : e.nextSibling
                    }(n, r), !1)
                }
                e[t.index] = n = Js(r, e, s, t), ri(e, n)
            }
            return new Ja(n, t, e)
        }

        const rl = {};

        class sl extends la {
            constructor(t) {
                super(), this.ngModule = t
            }

            resolveComponentFactory(t) {
                const e = ht(t);
                return new al(e, this.ngModule)
            }
        }

        function il(t) {
            const e = [];
            for (let n in t) t.hasOwnProperty(n) && e.push({propName: t[n], templateName: n});
            return e
        }

        const ol = new un("SCHEDULER_TOKEN", {providedIn: "root", factory: () => jr});

        class al extends oa {
            constructor(t, e) {
                super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(ys).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
            }

            get inputs() {
                return il(this.componentDef.inputs)
            }

            get outputs() {
                return il(this.componentDef.outputs)
            }

            create(t, e, n, r) {
                const s = (r = r || this.ngModule) ? function (t, e) {
                        return {
                            get: (n, r, s) => {
                                const i = t.get(n, rl, s);
                                return i !== rl || r === rl ? i : e.get(n, r, s)
                            }
                        }
                    }(t, r.injector) : t, i = s.get(pa, Rt), o = s.get(ya, null),
                    a = i.createRenderer(null, this.componentDef), l = this.componentDef.selectors[0][0] || "div",
                    c = n ? function (t, e, n) {
                        if (It(t)) return t.selectRootElement(e, n === H.ShadowDom);
                        let r = "string" == typeof e ? t.querySelector(e) : e;
                        return r.textContent = "", r
                    }(a, n, this.componentDef.encapsulation) : Hr(i.createRenderer(null, this.componentDef), l, function (t) {
                        const e = t.toLowerCase();
                        return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                    }(l)), u = this.componentDef.onPush ? 576 : 528,
                    h = {components: [], scheduler: jr, clean: li, playerHandler: null, flags: 0},
                    d = Hs(0, null, null, 1, 0, null, null, null, null, null),
                    f = ks(null, d, h, u, null, null, i, a, o, s);
                let p, m;
                pe(f);
                try {
                    const t = function (t, e, n, r, s, i) {
                        const o = n[1];
                        n[20] = t;
                        const a = As(o, 20, 2, "#host", null), l = a.mergedAttrs = e.hostAttrs;
                        null !== l && (pi(a, l, !0), null !== t && (Ie(s, t, l), null !== a.classes && is(s, t, a.classes), null !== a.styles && ss(s, t, a.styles)));
                        const c = r.createRenderer(t, e),
                            u = ks(n, Ms(e), null, e.onPush ? 64 : 16, n[20], a, r, c, null, null);
                        return o.firstCreatePass && (Ge($e(a, n), o, e.type), Gs(o, a), Ws(a, n.length, 1)), ri(n, u), n[20] = u
                    }(c, this.componentDef, f, i, a);
                    if (c) if (n) Ie(a, c, ["ng-version", _a.full]); else {
                        const {attrs: t, classes: e} = function (t) {
                            const e = [], n = [];
                            let r = 1, s = 2;
                            for (; r < t.length;) {
                                let i = t[r];
                                if ("string" == typeof i) 2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i); else {
                                    if (!ds(s)) break;
                                    s = i
                                }
                                r++
                            }
                            return {attrs: e, classes: n}
                        }(this.componentDef.selectors[0]);
                        t && Ie(a, c, t), e && e.length > 0 && is(a, c, e.join(" "))
                    }
                    if (m = Ft(d, ft), void 0 !== e) {
                        const t = m.projection = [];
                        for (let n = 0; n < this.ngContentSelectors.length; n++) {
                            const r = e[n];
                            t.push(null != r ? Array.from(r) : null)
                        }
                    }
                    p = function (t, e, n, r, s) {
                        const i = n[1], o = function (t, e, n) {
                            const r = Zt();
                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Qs(t, r, e, js(t, e, 1, null), n));
                            const s = tn(e, t, r.directiveStart, r);
                            Ar(s, e);
                            const i = Nt(r, e);
                            return i && Ar(i, e), s
                        }(i, n, e);
                        if (r.components.push(o), t[8] = o, s && s.forEach(t => t(o, e)), e.contentQueries) {
                            const t = Zt();
                            e.contentQueries(1, o, t.directiveStart)
                        }
                        const a = Zt();
                        return !i.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (we(a.index), Bs(n[1], a, 0, a.directiveStart, a.directiveEnd, e), Vs(e, o)), o
                    }(t, this.componentDef, f, h, [Ri]), Is(d, f, null)
                } finally {
                    _e()
                }
                return new ll(this.componentType, p, ua(m, f), f, m)
            }
        }

        class ll extends class {
        } {
            constructor(t, e, n, r, s) {
                super(), this.location = n, this._rootLView = r, this._tNode = s, this.instance = e, this.hostView = this.changeDetectorRef = new Fa(r), this.componentType = t
            }

            get injector() {
                return new rn(this._tNode, this._rootLView)
            }

            destroy() {
                this.hostView.destroy()
            }

            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }

        const cl = new Map;

        class ul extends Wa {
            constructor(t, e) {
                super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new sl(this);
                const n = dt(t), r = t[X] || null;
                r && Yo(r), this._bootstrapComponents = Ir(n.bootstrap), this._r3Injector = Ci(t, e, [{
                    provide: Wa,
                    useValue: this
                }, {
                    provide: la,
                    useValue: this.componentFactoryResolver
                }], p(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
            }

            get(t, e = Ii.THROW_IF_NOT_FOUND, n = P.Default) {
                return t === Ii || t === Wa || t === mi ? this : this._r3Injector.get(t, e, n)
            }

            destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
            }

            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }

        class hl extends Qa {
            constructor(t) {
                super(), this.moduleType = t, null !== dt(t) && function (t) {
                    const e = new Set;
                    !function t(n) {
                        const r = dt(n, !0), s = r.id;
                        null !== s && (function (t, e, n) {
                            if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${p(e)} vs ${p(e.name)}`)
                        }(s, cl.get(s), n), cl.set(s, n));
                        const i = Ir(r.imports);
                        for (const o of i) e.has(o) || (e.add(o), t(o))
                    }(t)
                }(t)
            }

            create(t) {
                return new ul(this.moduleType, t)
            }
        }

        function dl(t, e, n, r) {
            return function (t, e, n, r, s, i) {
                const o = e + n;
                return Bi(t, o, s) ? zi(t, o + 1, i ? r.call(i, s) : r(s)) : fl(t, o + 1)
            }(Kt(), re(), t, e, n, r)
        }

        function fl(t, e) {
            const n = t[e];
            return n === bs ? void 0 : n
        }

        function pl(t, e) {
            const n = Wt();
            let r;
            const s = t + ft;
            n.firstCreatePass ? (r = function (t, e) {
                if (e) for (let n = e.length - 1; n >= 0; n--) {
                    const r = e[n];
                    if (t === r.name) return r
                }
                throw new v("302", `The pipe '${t}' could not be found!`)
            }(e, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
            const i = r.factory || (r.factory = wt(r.type)), o = N(Qi);
            try {
                const t = Ue(!1), e = i();
                return Ue(t), function (t, e, n, r) {
                    n >= t.data.length && (t.data[n] = null, t.blueprint[n] = null), e[n] = r
                }(n, Kt(), s, e), e
            } finally {
                N(o)
            }
        }

        function ml(t, e, n, r) {
            const s = t + ft, i = Kt(), o = Lt(i, s);
            return function (t, e) {
                return Ui.isWrapped(e) && (e = Ui.unwrap(e), t[se()] = bs), e
            }(i, function (t, e) {
                return t[1].data[e].pure
            }(i, s) ? function (t, e, n, r, s, i, o) {
                const a = e + n;
                return Vi(t, a, s, i) ? zi(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : fl(t, a + 2)
            }(i, re(), e, o.transform, n, r, o) : o.transform(n, r))
        }

        function gl(t) {
            return e => {
                setTimeout(t, void 0, e)
            }
        }

        const yl = class extends r.a {
            constructor(t = !1) {
                super(), this.__isAsync = t
            }

            emit(t) {
                super.next(t)
            }

            subscribe(t, e, n) {
                var r, i, o;
                let a = t, l = e || (() => null), c = n;
                if (t && "object" == typeof t) {
                    const e = t;
                    a = null === (r = e.next) || void 0 === r ? void 0 : r.bind(e), l = null === (i = e.error) || void 0 === i ? void 0 : i.bind(e), c = null === (o = e.complete) || void 0 === o ? void 0 : o.bind(e)
                }
                this.__isAsync && (l = gl(l), a && (a = gl(a)), c && (c = gl(c)));
                const u = super.subscribe({next: a, error: l, complete: c});
                return t instanceof s.a && t.add(u), u
            }
        };

        function bl() {
            return this._results[Hi()]()
        }

        class _l {
            constructor(t = !1) {
                this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
                const e = Hi(), n = _l.prototype;
                n[e] || (n[e] = bl)
            }

            get changes() {
                return this._changes || (this._changes = new yl)
            }

            get(t) {
                return this._results[t]
            }

            map(t) {
                return this._results.map(t)
            }

            filter(t) {
                return this._results.filter(t)
            }

            find(t) {
                return this._results.find(t)
            }

            reduce(t, e) {
                return this._results.reduce(t, e)
            }

            forEach(t) {
                this._results.forEach(t)
            }

            some(t) {
                return this._results.some(t)
            }

            toArray() {
                return this._results.slice()
            }

            toString() {
                return this._results.toString()
            }

            reset(t, e) {
                const n = this;
                n.dirty = !1;
                const r = fn(t);
                (this._changesDetected = !function (t, e, n) {
                    if (t.length !== e.length) return !1;
                    for (let r = 0; r < t.length; r++) {
                        let s = t[r], i = e[r];
                        if (n && (s = n(s), i = n(i)), i !== s) return !1
                    }
                    return !0
                }(n._results, r, e)) && (n._results = r, n.length = r.length, n.last = r[this.length - 1], n.first = r[0])
            }

            notifyOnChanges() {
                !this._changes || !this._changesDetected && this._emitDistinctChangesOnly || this._changes.emit(this)
            }

            setDirty() {
                this.dirty = !0
            }

            destroy() {
                this.changes.complete(), this.changes.unsubscribe()
            }
        }

        class vl {
            constructor(t) {
                this.queryList = t, this.matches = null
            }

            clone() {
                return new vl(this.queryList)
            }

            setDirty() {
                this.queryList.setDirty()
            }
        }

        class wl {
            constructor(t = []) {
                this.queries = t
            }

            createEmbeddedView(t) {
                const e = t.queries;
                if (null !== e) {
                    const n = null !== t.contentQueries ? t.contentQueries[0] : e.length, r = [];
                    for (let t = 0; t < n; t++) {
                        const n = e.getByIndex(t);
                        r.push(this.queries[n.indexInDeclarationView].clone())
                    }
                    return new wl(r)
                }
                return null
            }

            insertView(t) {
                this.dirtyQueriesWithMatches(t)
            }

            detachView(t) {
                this.dirtyQueriesWithMatches(t)
            }

            dirtyQueriesWithMatches(t) {
                for (let e = 0; e < this.queries.length; e++) null !== Rl(t, e).matches && this.queries[e].setDirty()
            }
        }

        class Sl {
            constructor(t, e, n = null) {
                this.predicate = t, this.flags = e, this.read = n
            }
        }

        class Cl {
            constructor(t = []) {
                this.queries = t
            }

            elementStart(t, e) {
                for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
            }

            elementEnd(t) {
                for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
            }

            embeddedTView(t) {
                let e = null;
                for (let n = 0; n < this.length; n++) {
                    const r = null !== e ? e.length : 0, s = this.getByIndex(n).embeddedTView(t, r);
                    s && (s.indexInDeclarationView = n, null !== e ? e.push(s) : e = [s])
                }
                return null !== e ? new Cl(e) : null
            }

            template(t, e) {
                for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
            }

            getByIndex(t) {
                return this.queries[t]
            }

            get length() {
                return this.queries.length
            }

            track(t) {
                this.queries.push(t)
            }
        }

        class Tl {
            constructor(t, e = -1) {
                this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
            }

            elementStart(t, e) {
                this.isApplyingToNode(e) && this.matchTNode(t, e)
            }

            elementEnd(t) {
                this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
            }

            template(t, e) {
                this.elementStart(t, e)
            }

            embeddedTView(t, e) {
                return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new Tl(this.metadata)) : null
            }

            isApplyingToNode(t) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const e = this._declarationNodeIndex;
                    let n = t.parent;
                    for (; null !== n && 8 & n.type && n.index !== e;) n = n.parent;
                    return e === (null !== n ? n.index : -1)
                }
                return this._appliesToNextNode
            }

            matchTNode(t, e) {
                const n = this.metadata.predicate;
                if (Array.isArray(n)) for (let r = 0; r < n.length; r++) {
                    const s = n[r];
                    this.matchTNodeWithReadOption(t, e, El(e, s)), this.matchTNodeWithReadOption(t, e, Je(e, t, s, !1, !1))
                } else n === Ba ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Je(e, t, n, !1, !1))
            }

            matchTNodeWithReadOption(t, e, n) {
                if (null !== n) {
                    const r = this.metadata.read;
                    if (null !== r) if (r === da || r === Ya || r === Ba && 4 & e.type) this.addMatch(e.index, -2); else {
                        const n = Je(e, t, r, !1, !1);
                        null !== n && this.addMatch(e.index, n)
                    } else this.addMatch(e.index, n)
                }
            }

            addMatch(t, e) {
                null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
            }
        }

        function El(t, e) {
            const n = t.localNames;
            if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
            return null
        }

        function Ol(t, e, n, r) {
            return -1 === n ? function (t, e) {
                return 11 & t.type ? ua(t, e) : 4 & t.type ? Ka(t, e) : null
            }(e, t) : -2 === n ? function (t, e, n) {
                return n === da ? ua(e, t) : n === Ba ? Ka(e, t) : n === Ya ? nl(e, t) : void 0
            }(t, e, r) : tn(t, t[1], n, e)
        }

        function xl(t, e, n, r) {
            const s = e[19].queries[r];
            if (null === s.matches) {
                const r = t.data, i = n.matches, o = [];
                for (let t = 0; t < i.length; t += 2) {
                    const s = i[t];
                    o.push(s < 0 ? null : Ol(e, r[s], i[t + 1], n.metadata.read))
                }
                s.matches = o
            }
            return s.matches
        }

        function kl(t, e, n, r) {
            const s = t.queries.getByIndex(n), i = s.matches;
            if (null !== i) {
                const o = xl(t, e, s, n);
                for (let t = 0; t < i.length; t += 2) {
                    const n = i[t];
                    if (n > 0) r.push(o[t / 2]); else {
                        const s = i[t + 1], o = e[-n];
                        for (let t = pt; t < o.length; t++) {
                            const e = o[t];
                            e[17] === e[3] && kl(e[1], e, s, r)
                        }
                        if (null !== o[9]) {
                            const t = o[9];
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                kl(n[1], n, s, r)
                            }
                        }
                    }
                }
            }
            return r
        }

        function Al(t) {
            const e = Kt(), n = Wt(), r = ue();
            he(r + 1);
            const s = Rl(n, r);
            if (t.dirty && Ut(e) === (2 == (2 & s.metadata.flags))) {
                if (null === s.matches) t.reset([]); else {
                    const i = s.crossesNgTemplate ? kl(n, e, r, []) : xl(n, e, s, r);
                    t.reset(i, fa), t.notifyOnChanges()
                }
                return !0
            }
            return !1
        }

        function jl(t, e, n, r) {
            const s = Wt();
            if (s.firstCreatePass) {
                const i = Zt();
                (function (t, e, n) {
                    null === t.queries && (t.queries = new Cl), t.queries.track(new Tl(e, n))
                })(s, new Sl(e, n, r), i.index), function (t, e) {
                    const n = t.contentQueries || (t.contentQueries = []);
                    e !== (n.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
                }(s, t), 2 == (2 & n) && (s.staticContentQueries = !0)
            }
            !function (t, e, n) {
                const r = new _l(4 == (4 & n));
                Us(t, e, r, r.destroy), null === e[19] && (e[19] = new wl), e[19].queries.push(new vl(r))
            }(s, Kt(), n)
        }

        function Il() {
            return t = Kt(), e = ue(), t[19].queries[e].queryList;
            var t, e
        }

        function Rl(t, e) {
            return t.queries.getByIndex(e)
        }

        function Pl(t = P.Default) {
            const e = Ha(!0);
            if (null != e || t & P.Optional) return e;
            C("ChangeDetectorRef")
        }

        const Dl = new un("Application Initializer");
        let Nl = (() => {
            class t {
                constructor(t) {
                    this.appInits = t, this.resolve = ca, this.reject = ca, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                        this.resolve = t, this.reject = e
                    })
                }

                runInitializers() {
                    if (this.initialized) return;
                    const t = [], e = () => {
                        this.done = !0, this.resolve()
                    };
                    if (this.appInits) for (let n = 0; n < this.appInits.length; n++) {
                        const e = this.appInits[n]();
                        so(e) && t.push(e)
                    }
                    Promise.all(t).then(() => {
                        e()
                    }).catch(t => {
                        this.reject(t)
                    }), 0 === t.length && e(), this.initialized = !0
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(Dl, 8))
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();
        const Fl = new un("AppId"), Ll = {
            provide: Fl, useFactory: function () {
                return `${Ml()}${Ml()}${Ml()}`
            }, deps: []
        };

        function Ml() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }

        const Hl = new un("Platform Initializer"), Ul = new un("Platform ID"), ql = new un("appBootstrapListener");
        let $l = (() => {
            class t {
                log(t) {
                    console.log(t)
                }

                warn(t) {
                    console.warn(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();
        const zl = new un("LocaleId"), Bl = new un("DefaultCurrencyCode");

        class Vl {
            constructor(t, e) {
                this.ngModuleFactory = t, this.componentFactories = e
            }
        }

        const Gl = function (t) {
            return new hl(t)
        }, Kl = Gl, Wl = function (t) {
            return Promise.resolve(Gl(t))
        }, Ql = function (t) {
            const e = Gl(t), n = Ir(dt(t).declarations).reduce((t, e) => {
                const n = ht(e);
                return n && t.push(new al(n)), t
            }, []);
            return new Vl(e, n)
        }, Zl = Ql, Yl = function (t) {
            return Promise.resolve(Ql(t))
        };
        let Xl = (() => {
            class t {
                constructor() {
                    this.compileModuleSync = Kl, this.compileModuleAsync = Wl, this.compileModuleAndAllComponentsSync = Zl, this.compileModuleAndAllComponentsAsync = Yl
                }

                clearCache() {
                }

                clearCacheFor(t) {
                }

                getModuleId(t) {
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();
        const Jl = (() => Promise.resolve(0))();

        function tc(t) {
            "undefined" == typeof Zone ? Jl.then(() => {
                t && t.apply(null, null)
            }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }

        class ec {
            constructor({
                            enableLongStackTrace: t = !1,
                            shouldCoalesceEventChangeDetection: e = !1,
                            shouldCoalesceRunChangeDetection: n = !1
                        }) {
                if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new yl(!1), this.onMicrotaskEmpty = new yl(!1), this.onStable = new yl(!1), this.onError = new yl(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched();
                const r = this;
                r._nesting = 0, r._outer = r._inner = Zone.current, Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), r.shouldCoalesceEventChangeDetection = !n && e, r.shouldCoalesceRunChangeDetection = n, r.lastRequestAnimationFrameId = -1, r.nativeRequestAnimationFrame = function () {
                    let t = B.requestAnimationFrame, e = B.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && t && e) {
                        const n = t[Zone.__symbol__("OriginalDelegate")];
                        n && (t = n);
                        const r = e[Zone.__symbol__("OriginalDelegate")];
                        r && (e = r)
                    }
                    return {nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e}
                }().nativeRequestAnimationFrame, function (t) {
                    const e = () => {
                        !function (t) {
                            -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(B, () => {
                                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                    t.lastRequestAnimationFrameId = -1, sc(t), rc(t)
                                }, void 0, () => {
                                }, () => {
                                })), t.fakeTopEventTask.invoke()
                            }), sc(t))
                        }(t)
                    };
                    t._inner = t._inner.fork({
                        name: "angular",
                        properties: {isAngularZone: !0},
                        onInvokeTask: (n, r, s, i, o, a) => {
                            try {
                                return ic(t), n.invokeTask(s, i, o, a)
                            } finally {
                                (t.shouldCoalesceEventChangeDetection && "eventTask" === i.type || t.shouldCoalesceRunChangeDetection) && e(), oc(t)
                            }
                        },
                        onInvoke: (n, r, s, i, o, a, l) => {
                            try {
                                return ic(t), n.invoke(s, i, o, a, l)
                            } finally {
                                t.shouldCoalesceRunChangeDetection && e(), oc(t)
                            }
                        },
                        onHasTask: (e, n, r, s) => {
                            e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, sc(t), rc(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask))
                        },
                        onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
                    })
                }(r)
            }

            static isInAngularZone() {
                return !0 === Zone.current.get("isAngularZone")
            }

            static assertInAngularZone() {
                if (!ec.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
            }

            static assertNotInAngularZone() {
                if (ec.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
            }

            run(t, e, n) {
                return this._inner.run(t, e, n)
            }

            runTask(t, e, n, r) {
                const s = this._inner, i = s.scheduleEventTask("NgZoneEvent: " + r, t, nc, ca, ca);
                try {
                    return s.runTask(i, e, n)
                } finally {
                    s.cancelTask(i)
                }
            }

            runGuarded(t, e, n) {
                return this._inner.runGuarded(t, e, n)
            }

            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }

        const nc = {};

        function rc(t) {
            if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                t._nesting++, t.onMicrotaskEmpty.emit(null)
            } finally {
                if (t._nesting--, !t.hasPendingMicrotasks) try {
                    t.runOutsideAngular(() => t.onStable.emit(null))
                } finally {
                    t.isStable = !0
                }
            }
        }

        function sc(t) {
            t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId)
        }

        function ic(t) {
            t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function oc(t) {
            t._nesting--, rc(t)
        }

        class ac {
            constructor() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new yl, this.onMicrotaskEmpty = new yl, this.onStable = new yl, this.onError = new yl
            }

            run(t, e, n) {
                return t.apply(e, n)
            }

            runGuarded(t, e, n) {
                return t.apply(e, n)
            }

            runOutsideAngular(t) {
                return t()
            }

            runTask(t, e, n, r) {
                return t.apply(e, n)
            }
        }

        let lc = (() => {
            class t {
                constructor(t) {
                    this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                    })
                }

                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: () => {
                            this._didWork = !0, this._isZoneStable = !1
                        }
                    }), this._ngZone.runOutsideAngular(() => {
                        this._ngZone.onStable.subscribe({
                            next: () => {
                                ec.assertNotInAngularZone(), tc(() => {
                                    this._isZoneStable = !0, this._runCallbacksIfReady()
                                })
                            }
                        })
                    })
                }

                increasePendingRequestCount() {
                    return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                }

                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(), this._pendingCount
                }

                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }

                _runCallbacksIfReady() {
                    if (this.isStable()) tc(() => {
                        for (; 0 !== this._callbacks.length;) {
                            let t = this._callbacks.pop();
                            clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                        }
                        this._didWork = !1
                    }); else {
                        let t = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                    }
                }

                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                        source: t.source,
                        creationLocation: t.creationLocation,
                        data: t.data
                    })) : []
                }

                addCallback(t, e, n) {
                    let r = -1;
                    e && e > 0 && (r = setTimeout(() => {
                        this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks())
                    }, e)), this._callbacks.push({doneCb: t, timeoutId: r, updateCb: n})
                }

                whenStable(t, e, n) {
                    if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                    this.addCallback(t, e, n), this._runCallbacksIfReady()
                }

                getPendingRequestCount() {
                    return this._pendingCount
                }

                findProviders(t, e, n) {
                    return []
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(ec))
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })(), cc = (() => {
            class t {
                constructor() {
                    this._applications = new Map, fc.addToWindow(this)
                }

                registerApplication(t, e) {
                    this._applications.set(t, e)
                }

                unregisterApplication(t) {
                    this._applications.delete(t)
                }

                unregisterAllApplications() {
                    this._applications.clear()
                }

                getTestability(t) {
                    return this._applications.get(t) || null
                }

                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }

                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }

                findTestabilityInTree(t, e = !0) {
                    return fc.findTestabilityInTree(this, t, e)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();

        class uc {
            addToWindow(t) {
            }

            findTestabilityInTree(t, e, n) {
                return null
            }
        }

        function hc(t) {
            fc = t
        }

        let dc, fc = new uc, pc = !0, mc = !1;

        function gc() {
            if (mc) throw new Error("Cannot enable prod mode after platform setup.");
            pc = !1
        }

        const yc = new un("AllowMultipleToken");

        class bc {
            constructor(t, e) {
                this.name = t, this.token = e
            }
        }

        function _c(t, e, n = []) {
            const r = `Platform: ${e}`, s = new un(r);
            return (e = []) => {
                let i = vc();
                if (!i || i.injector.get(yc, !1)) if (t) t(n.concat(e).concat({provide: s, useValue: !0})); else {
                    const t = n.concat(e).concat({provide: s, useValue: !0}, {provide: yi, useValue: "platform"});
                    !function (t) {
                        if (dc && !dc.destroyed && !dc.injector.get(yc, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        dc = t.get(wc);
                        const e = t.get(Hl, null);
                        e && e.forEach(t => t())
                    }(Ii.create({providers: t, name: r}))
                }
                return function (t) {
                    const e = vc();
                    if (!e) throw new Error("No platform exists!");
                    if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return e
                }(s)
            }
        }

        function vc() {
            return dc && !dc.destroyed ? dc : null
        }

        let wc = (() => {
            class t {
                constructor(t) {
                    this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }

                bootstrapModuleFactory(t, e) {
                    const n = function (t, e) {
                        let n;
                        return n = "noop" === t ? new ac : ("zone.js" === t ? void 0 : t) || new ec({
                            enableLongStackTrace: (mc = !0, pc),
                            shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                            shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
                        }), n
                    }(e ? e.ngZone : void 0, {
                        ngZoneEventCoalescing: e && e.ngZoneEventCoalescing || !1,
                        ngZoneRunCoalescing: e && e.ngZoneRunCoalescing || !1
                    }), r = [{provide: ec, useValue: n}];
                    return n.run(() => {
                        const e = Ii.create({providers: r, parent: this.injector, name: t.moduleType.name}),
                            s = t.create(e), i = s.injector.get(kr, null);
                        if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.runOutsideAngular(() => {
                            const t = n.onError.subscribe({
                                next: t => {
                                    i.handleError(t)
                                }
                            });
                            s.onDestroy(() => {
                                Tc(this._modules, s), t.unsubscribe()
                            })
                        }), function (t, e, n) {
                            try {
                                const r = n();
                                return so(r) ? r.catch(n => {
                                    throw e.runOutsideAngular(() => t.handleError(n)), n
                                }) : r
                            } catch (r) {
                                throw e.runOutsideAngular(() => t.handleError(r)), r
                            }
                        }(i, n, () => {
                            const t = s.injector.get(Nl);
                            return t.runInitializers(), t.donePromise.then(() => (Yo(s.injector.get(zl, Qo) || Qo), this._moduleDoBootstrap(s), s))
                        })
                    })
                }

                bootstrapModule(t, e = []) {
                    const n = Sc({}, e);
                    return function (t, e, n) {
                        const r = new hl(n);
                        return Promise.resolve(r)
                    }(0, 0, t).then(t => this.bootstrapModuleFactory(t, n))
                }

                _moduleDoBootstrap(t) {
                    const e = t.injector.get(Cc);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t)); else {
                        if (!t.instance.ngDoBootstrap) throw new Error(`The module ${p(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }

                onDestroy(t) {
                    this._destroyListeners.push(t)
                }

                get injector() {
                    return this._injector
                }

                destroy() {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
                }

                get destroyed() {
                    return this._destroyed
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(Ii))
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();

        function Sc(t, e) {
            return Array.isArray(e) ? e.reduce(Sc, t) : Object.assign(Object.assign({}, t), e)
        }

        let Cc = (() => {
            class t {
                constructor(t, e, n, r, s) {
                    this._zone = t, this._injector = e, this._exceptionHandler = n, this._componentFactoryResolver = r, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: () => {
                            this._zone.run(() => {
                                this.tick()
                            })
                        }
                    });
                    const d = new i.a(t => {
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                            t.next(this._stable), t.complete()
                        })
                    }), f = new i.a(t => {
                        let e;
                        this._zone.runOutsideAngular(() => {
                            e = this._zone.onStable.subscribe(() => {
                                ec.assertNotInAngularZone(), tc(() => {
                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                                })
                            })
                        });
                        const n = this._zone.onUnstable.subscribe(() => {
                            ec.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                t.next(!1)
                            }))
                        });
                        return () => {
                            e.unsubscribe(), n.unsubscribe()
                        }
                    });
                    this.isStable = function (...t) {
                        let e = Number.POSITIVE_INFINITY, n = null, r = t[t.length - 1];
                        return Object(o.a)(r) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof i.a ? t[0] : Object(a.a)(e)(Object(l.a)(t, n))
                    }(d, f.pipe(t => {
                        return Object(u.a)()((e = h, function (t) {
                            let n;
                            n = "function" == typeof e ? e : function () {
                                return e
                            };
                            const r = Object.create(t, c.b);
                            return r.source = t, r.subjectFactory = n, r
                        })(t));
                        var e
                    }))
                }

                bootstrap(t, e) {
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    let n;
                    n = t instanceof oa ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                    const r = n.isBoundToModule ? void 0 : this._injector.get(Wa),
                        s = n.create(Ii.NULL, [], e || n.selector, r), i = s.location.nativeElement,
                        o = s.injector.get(lc, null), a = o && s.injector.get(cc);
                    return o && a && a.registerApplication(i, o), s.onDestroy(() => {
                        this.detachView(s.hostView), Tc(this.components, s), a && a.unregisterApplication(i)
                    }), this._loadComponent(s), s
                }

                tick() {
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        for (let t of this._views) t.detectChanges()
                    } catch (t) {
                        this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
                    } finally {
                        this._runningTick = !1
                    }
                }

                attachView(t) {
                    const e = t;
                    this._views.push(e), e.attachToAppRef(this)
                }

                detachView(t) {
                    const e = t;
                    Tc(this._views, e), e.detachFromAppRef()
                }

                _loadComponent(t) {
                    this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ql, []).concat(this._bootstrapListeners).forEach(e => e(t))
                }

                ngOnDestroy() {
                    this._views.slice().forEach(t => t.destroy()), this._onMicrotaskEmptySubscription.unsubscribe()
                }

                get viewCount() {
                    return this._views.length
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(ec), kn(Ii), kn(kr), kn(la), kn(Nl))
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();

        function Tc(t, e) {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }

        class Ec {
        }

        class Oc {
        }

        const xc = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"};
        let kc = (() => {
            class t {
                constructor(t, e) {
                    this._compiler = t, this._config = e || xc
                }

                load(t) {
                    return this.loadAndCompile(t)
                }

                loadAndCompile(t) {
                    let [e, r] = t.split("#");
                    return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => Ac(t, e, r)).then(t => this._compiler.compileModuleAsync(t))
                }

                loadFactory(t) {
                    let [e, r] = t.split("#"), s = "NgFactory";
                    return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => Ac(t, e, r))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(Xl), kn(Oc, 8))
            }, t.\u0275prov = T({token: t, factory: t.\u0275fac}), t
        })();

        function Ac(t, e, n) {
            if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
            return t
        }

        const jc = function (t) {
            return null
        }, Ic = _c(null, "core", [{provide: Ul, useValue: "unknown"}, {provide: wc, deps: [Ii]}, {
            provide: cc,
            deps: []
        }, {provide: $l, deps: []}]), Rc = [{provide: Cc, useClass: Cc, deps: [ec, Ii, kr, la, Nl]}, {
            provide: ol,
            deps: [ec],
            useFactory: function (t) {
                let e = [];
                return t.onStable.subscribe(() => {
                    for (; e.length;) e.pop()()
                }), function (t) {
                    e.push(t)
                }
            }
        }, {provide: Nl, useClass: Nl, deps: [[new Rn, Dl]]}, {provide: Xl, useClass: Xl, deps: []}, Ll, {
            provide: Ia,
            useFactory: function () {
                return qa
            },
            deps: []
        }, {
            provide: Pa, useFactory: function () {
                return $a
            }, deps: []
        }, {
            provide: zl, useFactory: function (t) {
                return Yo(t = t || "undefined" != typeof $localize && $localize.locale || Qo), t
            }, deps: [[new In(zl), new Rn, new Pn]]
        }, {provide: Bl, useValue: "USD"}];
        let Pc = (() => {
            class t {
                constructor(t) {
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(kn(Cc))
            }, t.\u0275mod = ot({type: t}), t.\u0275inj = E({providers: Rc}), t
        })()
    }, gRHU: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });
        var r = n("2fFW"), s = n("NJ4a");
        const i = {
            closed: !0, next(t) {
            }, error(t) {
                if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                Object(s.a)(t)
            }, complete() {
            }
        }
    }, jZKg: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });
        var r = n("HDdC"), s = n("quSY");

        function i(t, e) {
            return new r.a(n => {
                const r = new s.a;
                let i = 0;
                return r.add(e.schedule(function () {
                    i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
                })), r
            })
        }
    }, jhN1: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return M
        }), n.d(e, "b", function () {
            return R
        }), n.d(e, "c", function () {
            return F
        }), n.d(e, "d", function () {
            return S
        });
        var r = n("ofXK"), s = n("fXoL");

        class i extends r.r {
            constructor() {
                super()
            }

            supportsDOMEvents() {
                return !0
            }
        }

        class o extends i {
            static makeCurrent() {
                Object(r.v)(new o)
            }

            getProperty(t, e) {
                return t[e]
            }

            log(t) {
                window.console && window.console.log && window.console.log(t)
            }

            logGroup(t) {
                window.console && window.console.group && window.console.group(t)
            }

            logGroupEnd() {
                window.console && window.console.groupEnd && window.console.groupEnd()
            }

            onAndCancel(t, e, n) {
                return t.addEventListener(e, n, !1), () => {
                    t.removeEventListener(e, n, !1)
                }
            }

            dispatchEvent(t, e) {
                t.dispatchEvent(e)
            }

            remove(t) {
                return t.parentNode && t.parentNode.removeChild(t), t
            }

            getValue(t) {
                return t.value
            }

            createElement(t, e) {
                return (e = e || this.getDefaultDocument()).createElement(t)
            }

            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }

            getDefaultDocument() {
                return document
            }

            isElementNode(t) {
                return t.nodeType === Node.ELEMENT_NODE
            }

            isShadowRoot(t) {
                return t instanceof DocumentFragment
            }

            getGlobalEventTarget(t, e) {
                return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
            }

            getHistory() {
                return window.history
            }

            getLocation() {
                return window.location
            }

            getBaseHref(t) {
                const e = l || (l = document.querySelector("base"), l) ? l.getAttribute("href") : null;
                return null == e ? null : (n = e, a || (a = document.createElement("a")), a.setAttribute("href", n), "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname);
                var n
            }

            resetBaseElement() {
                l = null
            }

            getUserAgent() {
                return window.navigator.userAgent
            }

            performanceNow() {
                return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
            }

            supportsCookies() {
                return !0
            }

            getCookie(t) {
                return Object(r.u)(document.cookie, t)
            }
        }

        let a, l = null;
        const c = new s.r("TRANSITION_ID"), u = [{
            provide: s.d, useFactory: function (t, e, n) {
                return () => {
                    n.get(s.e).donePromise.then(() => {
                        const n = Object(r.t)();
                        Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                    })
                }
            }, deps: [c, r.c, s.s], multi: !0
        }];

        class h {
            static init() {
                Object(s.V)(new h)
            }

            addToWindow(t) {
                s.nb.getAngularTestability = (e, n = !0) => {
                    const r = t.findTestabilityInTree(e, n);
                    if (null == r) throw new Error("Could not find testability for element.");
                    return r
                }, s.nb.getAllAngularTestabilities = () => t.getAllTestabilities(), s.nb.getAllAngularRootElements = () => t.getAllRootElements(), s.nb.frameworkStabilizers || (s.nb.frameworkStabilizers = []), s.nb.frameworkStabilizers.push(t => {
                    const e = s.nb.getAllAngularTestabilities();
                    let n = e.length, r = !1;
                    const i = function (e) {
                        r = r || e, n--, 0 == n && t(r)
                    };
                    e.forEach(function (t) {
                        t.whenStable(i)
                    })
                })
            }

            findTestabilityInTree(t, e, n) {
                if (null == e) return null;
                const s = t.getTestability(e);
                return null != s ? s : n ? Object(r.t)().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
            }
        }

        const d = new s.r("EventManagerPlugins");
        let f = (() => {
            class t {
                constructor(t, e) {
                    this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
                }

                addEventListener(t, e, n) {
                    return this._findPluginFor(e).addEventListener(t, e, n)
                }

                addGlobalEventListener(t, e, n) {
                    return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                }

                getZone() {
                    return this._zone
                }

                _findPluginFor(t) {
                    const e = this._eventNameToPlugin.get(t);
                    if (e) return e;
                    const n = this._plugins;
                    for (let r = 0; r < n.length; r++) {
                        const e = n[r];
                        if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
                    }
                    throw new Error(`No event manager plugin found for event ${t}`)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(d), s.Tb(s.A))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        class p {
            constructor(t) {
                this._doc = t
            }

            addGlobalEventListener(t, e, n) {
                const s = Object(r.t)().getGlobalEventTarget(this._doc, t);
                if (!s) throw new Error(`Unsupported event target ${s} for event ${e}`);
                return this.addEventListener(s, e, n)
            }
        }

        let m = (() => {
            class t {
                constructor() {
                    this._stylesSet = new Set
                }

                addStyles(t) {
                    const e = new Set;
                    t.forEach(t => {
                        this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
                    }), this.onStylesAdded(e)
                }

                onStylesAdded(t) {
                }

                getAllStyles() {
                    return Array.from(this._stylesSet)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })(), g = (() => {
            class t extends m {
                constructor(t) {
                    super(), this._doc = t, this._hostNodes = new Map, this._hostNodes.set(t.head, [])
                }

                _addStylesToHost(t, e, n) {
                    t.forEach(t => {
                        const r = this._doc.createElement("style");
                        r.textContent = t, n.push(e.appendChild(r))
                    })
                }

                addHost(t) {
                    const e = [];
                    this._addStylesToHost(this._stylesSet, t, e), this._hostNodes.set(t, e)
                }

                removeHost(t) {
                    const e = this._hostNodes.get(t);
                    e && e.forEach(y), this._hostNodes.delete(t)
                }

                onStylesAdded(t) {
                    this._hostNodes.forEach((e, n) => {
                        this._addStylesToHost(t, n, e)
                    })
                }

                ngOnDestroy() {
                    this._hostNodes.forEach(t => t.forEach(y))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(r.c))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        function y(t) {
            Object(r.t)().remove(t)
        }

        const b = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, _ = /%COMP%/g;

        function v(t, e, n) {
            for (let r = 0; r < e.length; r++) {
                let s = e[r];
                Array.isArray(s) ? v(t, s, n) : (s = s.replace(_, t), n.push(s))
            }
            return n
        }

        function w(t) {
            return e => {
                if ("__ngUnwrap__" === e) return t;
                !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
            }
        }

        let S = (() => {
            class t {
                constructor(t, e, n) {
                    this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new C(t)
                }

                createRenderer(t, e) {
                    if (!t || !e) return this.defaultRenderer;
                    switch (e.encapsulation) {
                        case s.Q.Emulated: {
                            let n = this.rendererByCompId.get(e.id);
                            return n || (n = new T(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                        }
                        case 1:
                        case s.Q.ShadowDom:
                            return new E(this.eventManager, this.sharedStylesHost, t, e);
                        default:
                            if (!this.rendererByCompId.has(e.id)) {
                                const t = v(e.id, e.styles, []);
                                this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                            }
                            return this.defaultRenderer
                    }
                }

                begin() {
                }

                end() {
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(f), s.Tb(g), s.Tb(s.c))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        class C {
            constructor(t) {
                this.eventManager = t, this.data = Object.create(null)
            }

            destroy() {
            }

            createElement(t, e) {
                return e ? document.createElementNS(b[e] || e, t) : document.createElement(t)
            }

            createComment(t) {
                return document.createComment(t)
            }

            createText(t) {
                return document.createTextNode(t)
            }

            appendChild(t, e) {
                t.appendChild(e)
            }

            insertBefore(t, e, n) {
                t && t.insertBefore(e, n)
            }

            removeChild(t, e) {
                t && t.removeChild(e)
            }

            selectRootElement(t, e) {
                let n = "string" == typeof t ? document.querySelector(t) : t;
                if (!n) throw new Error(`The selector "${t}" did not match any elements`);
                return e || (n.textContent = ""), n
            }

            parentNode(t) {
                return t.parentNode
            }

            nextSibling(t) {
                return t.nextSibling
            }

            setAttribute(t, e, n, r) {
                if (r) {
                    e = r + ":" + e;
                    const s = b[r];
                    s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
                } else t.setAttribute(e, n)
            }

            removeAttribute(t, e, n) {
                if (n) {
                    const r = b[n];
                    r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
                } else t.removeAttribute(e)
            }

            addClass(t, e) {
                t.classList.add(e)
            }

            removeClass(t, e) {
                t.classList.remove(e)
            }

            setStyle(t, e, n, r) {
                r & (s.G.DashCase | s.G.Important) ? t.style.setProperty(e, n, r & s.G.Important ? "important" : "") : t.style[e] = n
            }

            removeStyle(t, e, n) {
                n & s.G.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
            }

            setProperty(t, e, n) {
                t[e] = n
            }

            setValue(t, e) {
                t.nodeValue = e
            }

            listen(t, e, n) {
                return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, w(n)) : this.eventManager.addEventListener(t, e, w(n))
            }
        }

        class T extends C {
            constructor(t, e, n, r) {
                super(t), this.component = n;
                const s = v(r + "-" + n.id, n.styles, []);
                e.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(_, r + "-" + n.id), this.hostAttr = "_nghost-%COMP%".replace(_, r + "-" + n.id)
            }

            applyToHost(t) {
                super.setAttribute(t, this.hostAttr, "")
            }

            createElement(t, e) {
                const n = super.createElement(t, e);
                return super.setAttribute(n, this.contentAttr, ""), n
            }
        }

        class E extends C {
            constructor(t, e, n, r) {
                super(t), this.sharedStylesHost = e, this.hostEl = n, this.shadowRoot = n.attachShadow({mode: "open"}), this.sharedStylesHost.addHost(this.shadowRoot);
                const s = v(r.id, r.styles, []);
                for (let i = 0; i < s.length; i++) {
                    const t = document.createElement("style");
                    t.textContent = s[i], this.shadowRoot.appendChild(t)
                }
            }

            nodeOrShadowRoot(t) {
                return t === this.hostEl ? this.shadowRoot : t
            }

            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }

            appendChild(t, e) {
                return super.appendChild(this.nodeOrShadowRoot(t), e)
            }

            insertBefore(t, e, n) {
                return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
            }

            removeChild(t, e) {
                return super.removeChild(this.nodeOrShadowRoot(t), e)
            }

            parentNode(t) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
            }
        }

        let O = (() => {
            class t extends p {
                constructor(t) {
                    super(t)
                }

                supports(t) {
                    return !0
                }

                addEventListener(t, e, n) {
                    return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
                }

                removeEventListener(t, e, n) {
                    return t.removeEventListener(e, n)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(r.c))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();
        const x = ["alt", "control", "meta", "shift"], k = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }, A = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }, j = {alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey};
        let I = (() => {
            class t extends p {
                constructor(t) {
                    super(t)
                }

                supports(e) {
                    return null != t.parseEventName(e)
                }

                addEventListener(e, n, s) {
                    const i = t.parseEventName(n), o = t.eventCallback(i.fullKey, s, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(() => Object(r.t)().onAndCancel(e, i.domEventName, o))
                }

                static parseEventName(e) {
                    const n = e.toLowerCase().split("."), r = n.shift();
                    if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                    const s = t._normalizeKey(n.pop());
                    let i = "";
                    if (x.forEach(t => {
                        const e = n.indexOf(t);
                        e > -1 && (n.splice(e, 1), i += t + ".")
                    }), i += s, 0 != n.length || 0 === s.length) return null;
                    const o = {};
                    return o.domEventName = r, o.fullKey = i, o
                }

                static getEventFullKey(t) {
                    let e = "", n = function (t) {
                        let e = t.key;
                        if (null == e) {
                            if (e = t.keyIdentifier, null == e) return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && A.hasOwnProperty(e) && (e = A[e]))
                        }
                        return k[e] || e
                    }(t);
                    return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), x.forEach(r => {
                        r != n && (0, j[r])(t) && (e += r + ".")
                    }), e += n, e
                }

                static eventCallback(e, n, r) {
                    return s => {
                        t.getEventFullKey(s) === e && r.runGuarded(() => n(s))
                    }
                }

                static _normalizeKey(t) {
                    switch (t) {
                        case"esc":
                            return "escape";
                        default:
                            return t
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(r.c))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })(), R = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = Object(s.Gb)({
                factory: function () {
                    return Object(s.Tb)(D)
                }, token: t, providedIn: "root"
            }), t
        })();

        function P(t) {
            return new D(t.get(r.c))
        }

        let D = (() => {
            class t extends R {
                constructor(t) {
                    super(), this._doc = t
                }

                sanitize(t, e) {
                    if (null == e) return null;
                    switch (t) {
                        case s.I.NONE:
                            return e;
                        case s.I.HTML:
                            return Object(s.cb)(e, "HTML") ? Object(s.vb)(e) : Object(s.ab)(this._doc, String(e)).toString();
                        case s.I.STYLE:
                            return Object(s.cb)(e, "Style") ? Object(s.vb)(e) : e;
                        case s.I.SCRIPT:
                            if (Object(s.cb)(e, "Script")) return Object(s.vb)(e);
                            throw new Error("unsafe value used in a script context");
                        case s.I.URL:
                            return Object(s.mb)(e), Object(s.cb)(e, "URL") ? Object(s.vb)(e) : Object(s.bb)(String(e));
                        case s.I.RESOURCE_URL:
                            if (Object(s.cb)(e, "ResourceURL")) return Object(s.vb)(e);
                            throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");
                        default:
                            throw new Error(`Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`)
                    }
                }

                bypassSecurityTrustHtml(t) {
                    return Object(s.db)(t)
                }

                bypassSecurityTrustStyle(t) {
                    return Object(s.gb)(t)
                }

                bypassSecurityTrustScript(t) {
                    return Object(s.fb)(t)
                }

                bypassSecurityTrustUrl(t) {
                    return Object(s.hb)(t)
                }

                bypassSecurityTrustResourceUrl(t) {
                    return Object(s.eb)(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(r.c))
            }, t.\u0275prov = Object(s.Gb)({
                factory: function () {
                    return P(Object(s.Tb)(s.o))
                }, token: t, providedIn: "root"
            }), t
        })();
        const N = [{provide: s.C, useValue: r.s}, {
            provide: s.D, useValue: function () {
                o.makeCurrent(), h.init()
            }, multi: !0
        }, {
            provide: r.c, useFactory: function () {
                return Object(s.tb)(document), document
            }, deps: []
        }], F = Object(s.R)(s.U, "browser", N), L = [[], {provide: s.X, useValue: "root"}, {
            provide: s.m, useFactory: function () {
                return new s.m
            }, deps: []
        }, {provide: d, useClass: O, multi: !0, deps: [r.c, s.A, s.C]}, {
            provide: d,
            useClass: I,
            multi: !0,
            deps: [r.c]
        }, [], {provide: S, useClass: S, deps: [f, g, s.c]}, {provide: s.F, useExisting: S}, {
            provide: m,
            useExisting: g
        }, {provide: g, useClass: g, deps: [r.c]}, {provide: s.M, useClass: s.M, deps: [s.A]}, {
            provide: f,
            useClass: f,
            deps: [d, s.A]
        }, []];
        let M = (() => {
            class t {
                constructor(t) {
                    if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }

                static withServerTransition(e) {
                    return {
                        ngModule: t,
                        providers: [{provide: s.c, useValue: e.appId}, {provide: c, useExisting: s.c}, u]
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(t, 12))
            }, t.\u0275mod = s.Ib({type: t}), t.\u0275inj = s.Hb({providers: L, imports: [r.b, s.f]}), t
        })();
        "undefined" != typeof window && window
    }, kJWO: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")()
    }, lJxs: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var r = n("7o/Q");

        function s(t, e) {
            return function (n) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new i(t, e))
            }
        }

        class i {
            constructor(t, e) {
                this.project = t, this.thisArg = e
            }

            call(t, e) {
                return e.subscribe(new o(t, this.project, this.thisArg))
            }
        }

        class o extends r.a {
            constructor(t, e, n) {
                super(t), this.project = e, this.count = 0, this.thisArg = n || this
            }

            _next(t) {
                let e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }
        }
    }, n6bG: function (t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t
        }

        n.d(e, "a", function () {
            return r
        })
    }, ngJS: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        const r = t => e => {
            for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete()
        }
    }, ofXK: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return v
        }), n.d(e, "b", function () {
            return vt
        }), n.d(e, "c", function () {
            return l
        }), n.d(e, "d", function () {
            return _t
        }), n.d(e, "e", function () {
            return S
        }), n.d(e, "f", function () {
            return h
        }), n.d(e, "g", function () {
            return C
        }), n.d(e, "h", function () {
            return b
        }), n.d(e, "i", function () {
            return lt
        }), n.d(e, "j", function () {
            return ut
        }), n.d(e, "k", function () {
            return dt
        }), n.d(e, "l", function () {
            return gt
        }), n.d(e, "m", function () {
            return yt
        }), n.d(e, "n", function () {
            return bt
        }), n.d(e, "o", function () {
            return w
        }), n.d(e, "p", function () {
            return c
        }), n.d(e, "q", function () {
            return St
        }), n.d(e, "r", function () {
            return a
        }), n.d(e, "s", function () {
            return wt
        }), n.d(e, "t", function () {
            return i
        }), n.d(e, "u", function () {
            return at
        }), n.d(e, "v", function () {
            return o
        });
        var r = n("fXoL");
        let s = null;

        function i() {
            return s
        }

        function o(t) {
            s || (s = t)
        }

        class a {
        }

        const l = new r.r("DocumentToken");
        let c = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = Object(r.Gb)({factory: u, token: t, providedIn: "platform"}), t
        })();

        function u() {
            return Object(r.Tb)(d)
        }

        const h = new r.r("Location Initialized");
        let d = (() => {
            class t extends c {
                constructor(t) {
                    super(), this._doc = t, this._init()
                }

                _init() {
                    this.location = i().getLocation(), this._history = i().getHistory()
                }

                getBaseHrefFromDOM() {
                    return i().getBaseHref(this._doc)
                }

                onPopState(t) {
                    i().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                }

                onHashChange(t) {
                    i().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                }

                get href() {
                    return this.location.href
                }

                get protocol() {
                    return this.location.protocol
                }

                get hostname() {
                    return this.location.hostname
                }

                get port() {
                    return this.location.port
                }

                get pathname() {
                    return this.location.pathname
                }

                get search() {
                    return this.location.search
                }

                get hash() {
                    return this.location.hash
                }

                set pathname(t) {
                    this.location.pathname = t
                }

                pushState(t, e, n) {
                    f() ? this._history.pushState(t, e, n) : this.location.hash = n
                }

                replaceState(t, e, n) {
                    f() ? this._history.replaceState(t, e, n) : this.location.hash = n
                }

                forward() {
                    this._history.forward()
                }

                back() {
                    this._history.back()
                }

                getState() {
                    return this._history.state
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(l))
            }, t.\u0275prov = Object(r.Gb)({factory: p, token: t, providedIn: "platform"}), t
        })();

        function f() {
            return !!window.history.pushState
        }

        function p() {
            return new d(Object(r.Tb)(l))
        }

        function m(t, e) {
            if (0 == t.length) return e;
            if (0 == e.length) return t;
            let n = 0;
            return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }

        function g(t) {
            const e = t.match(/#|\?|$/), n = e && e.index || t.length;
            return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }

        function y(t) {
            return t && "?" !== t[0] ? "?" + t : t
        }

        let b = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = Object(r.Gb)({factory: _, token: t, providedIn: "root"}), t
        })();

        function _(t) {
            const e = Object(r.Tb)(l).location;
            return new w(Object(r.Tb)(c), e && e.origin || "")
        }

        const v = new r.r("appBaseHref");
        let w = (() => {
            class t extends b {
                constructor(t, e) {
                    if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    this._baseHref = e
                }

                onPopState(t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }

                getBaseHref() {
                    return this._baseHref
                }

                prepareExternalUrl(t) {
                    return m(this._baseHref, t)
                }

                path(t = !1) {
                    const e = this._platformLocation.pathname + y(this._platformLocation.search),
                        n = this._platformLocation.hash;
                    return n && t ? `${e}${n}` : e
                }

                pushState(t, e, n, r) {
                    const s = this.prepareExternalUrl(n + y(r));
                    this._platformLocation.pushState(t, e, s)
                }

                replaceState(t, e, n, r) {
                    const s = this.prepareExternalUrl(n + y(r));
                    this._platformLocation.replaceState(t, e, s)
                }

                forward() {
                    this._platformLocation.forward()
                }

                back() {
                    this._platformLocation.back()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(c), r.Tb(v, 8))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), S = (() => {
            class t extends b {
                constructor(t, e) {
                    super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
                }

                onPopState(t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }

                getBaseHref() {
                    return this._baseHref
                }

                path(t = !1) {
                    let e = this._platformLocation.hash;
                    return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                }

                prepareExternalUrl(t) {
                    const e = m(this._baseHref, t);
                    return e.length > 0 ? "#" + e : e
                }

                pushState(t, e, n, r) {
                    let s = this.prepareExternalUrl(n + y(r));
                    0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s)
                }

                replaceState(t, e, n, r) {
                    let s = this.prepareExternalUrl(n + y(r));
                    0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s)
                }

                forward() {
                    this._platformLocation.forward()
                }

                back() {
                    this._platformLocation.back()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(c), r.Tb(v, 8))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), C = (() => {
            class t {
                constructor(t, e) {
                    this._subject = new r.n, this._urlChangeListeners = [], this._platformStrategy = t;
                    const n = this._platformStrategy.getBaseHref();
                    this._platformLocation = e, this._baseHref = g(E(n)), this._platformStrategy.onPopState(t => {
                        this._subject.emit({url: this.path(!0), pop: !0, state: t.state, type: t.type})
                    })
                }

                path(t = !1) {
                    return this.normalize(this._platformStrategy.path(t))
                }

                getState() {
                    return this._platformLocation.getState()
                }

                isCurrentPathEqualTo(t, e = "") {
                    return this.path() == this.normalize(t + y(e))
                }

                normalize(e) {
                    return t.stripTrailingSlash(function (t, e) {
                        return t && e.startsWith(t) ? e.substring(t.length) : e
                    }(this._baseHref, E(e)))
                }

                prepareExternalUrl(t) {
                    return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                }

                go(t, e = "", n = null) {
                    this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                }

                replaceState(t, e = "", n = null) {
                    this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                }

                forward() {
                    this._platformStrategy.forward()
                }

                back() {
                    this._platformStrategy.back()
                }

                onUrlChange(t) {
                    this._urlChangeListeners.push(t), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(t => {
                        this._notifyUrlChangeListeners(t.url, t.state)
                    }))
                }

                _notifyUrlChangeListeners(t = "", e) {
                    this._urlChangeListeners.forEach(n => n(t, e))
                }

                subscribe(t, e, n) {
                    return this._subject.subscribe({next: t, error: e, complete: n})
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(b), r.Tb(c))
            }, t.normalizeQueryParams = y, t.joinWithSlash = m, t.stripTrailingSlash = g, t.\u0275prov = Object(r.Gb)({
                factory: T,
                token: t,
                providedIn: "root"
            }), t
        })();

        function T() {
            return new C(Object(r.Tb)(b), Object(r.Tb)(c))
        }

        function E(t) {
            return t.replace(/\/index.html$/, "")
        }

        var O = function (t) {
            return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
        }({}), x = function (t) {
            return t[t.Format = 0] = "Format", t[t.Standalone = 1] = "Standalone", t
        }({}), k = function (t) {
            return t[t.Narrow = 0] = "Narrow", t[t.Abbreviated = 1] = "Abbreviated", t[t.Wide = 2] = "Wide", t[t.Short = 3] = "Short", t
        }({}), A = function (t) {
            return t[t.Short = 0] = "Short", t[t.Medium = 1] = "Medium", t[t.Long = 2] = "Long", t[t.Full = 3] = "Full", t
        }({}), j = function (t) {
            return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t
        }({});

        function I(t, e) {
            return L(Object(r.ib)(t)[r.Y.DateFormat], e)
        }

        function R(t, e) {
            return L(Object(r.ib)(t)[r.Y.TimeFormat], e)
        }

        function P(t, e) {
            return L(Object(r.ib)(t)[r.Y.DateTimeFormat], e)
        }

        function D(t, e) {
            const n = Object(r.ib)(t), s = n[r.Y.NumberSymbols][e];
            if (void 0 === s) {
                if (e === j.CurrencyDecimal) return n[r.Y.NumberSymbols][j.Decimal];
                if (e === j.CurrencyGroup) return n[r.Y.NumberSymbols][j.Group]
            }
            return s
        }

        const N = r.lb;

        function F(t) {
            if (!t[r.Y.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[r.Y.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
        }

        function L(t, e) {
            for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
            throw new Error("Locale data API: locale data undefined")
        }

        function M(t) {
            const [e, n] = t.split(":");
            return {hours: +e, minutes: +n}
        }

        const H = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
            U = {},
            q = /((?:[^GyYMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
        var $ = function (t) {
            return t[t.Short = 0] = "Short", t[t.ShortGMT = 1] = "ShortGMT", t[t.Long = 2] = "Long", t[t.Extended = 3] = "Extended", t
        }({}), z = function (t) {
            return t[t.FullYear = 0] = "FullYear", t[t.Month = 1] = "Month", t[t.Date = 2] = "Date", t[t.Hours = 3] = "Hours", t[t.Minutes = 4] = "Minutes", t[t.Seconds = 5] = "Seconds", t[t.FractionalSeconds = 6] = "FractionalSeconds", t[t.Day = 7] = "Day", t
        }({}), B = function (t) {
            return t[t.DayPeriods = 0] = "DayPeriods", t[t.Days = 1] = "Days", t[t.Months = 2] = "Months", t[t.Eras = 3] = "Eras", t
        }({});

        function V(t, e, n, r) {
            let s = function (t) {
                if (st(t)) return t;
                if ("number" == typeof t && !isNaN(t)) return new Date(t);
                if ("string" == typeof t) {
                    if (t = t.trim(), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)) {
                        const [e, n = 1, r = 1] = t.split("-").map(t => +t);
                        return G(e, n - 1, r)
                    }
                    const e = parseFloat(t);
                    if (!isNaN(t - e)) return new Date(e);
                    let n;
                    if (n = t.match(H)) return function (t) {
                        const e = new Date(0);
                        let n = 0, r = 0;
                        const s = t[8] ? e.setUTCFullYear : e.setFullYear, i = t[8] ? e.setUTCHours : e.setHours;
                        t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                        const o = Number(t[4] || 0) - n, a = Number(t[5] || 0) - r, l = Number(t[6] || 0),
                            c = Math.floor(1e3 * parseFloat("0." + (t[7] || 0)));
                        return i.call(e, o, a, l, c), e
                    }(n)
                }
                const e = new Date(t);
                if (!st(e)) throw new Error(`Unable to convert "${t}" into a date`);
                return e
            }(t);
            e = K(n, e) || e;
            let i, o = [];
            for (; e;) {
                if (i = q.exec(e), !i) {
                    o.push(e);
                    break
                }
                {
                    o = o.concat(i.slice(1));
                    const t = o.pop();
                    if (!t) break;
                    e = t
                }
            }
            let a = s.getTimezoneOffset();
            r && (a = rt(r, a), s = function (t, e, n) {
                const r = t.getTimezoneOffset();
                return function (t, e) {
                    return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                }(t, -1 * (rt(e, r) - r))
            }(s, r));
            let l = "";
            return o.forEach(t => {
                const e = function (t) {
                    if (nt[t]) return nt[t];
                    let e;
                    switch (t) {
                        case"G":
                        case"GG":
                        case"GGG":
                            e = Y(B.Eras, k.Abbreviated);
                            break;
                        case"GGGG":
                            e = Y(B.Eras, k.Wide);
                            break;
                        case"GGGGG":
                            e = Y(B.Eras, k.Narrow);
                            break;
                        case"y":
                            e = Z(z.FullYear, 1, 0, !1, !0);
                            break;
                        case"yy":
                            e = Z(z.FullYear, 2, 0, !0, !0);
                            break;
                        case"yyy":
                            e = Z(z.FullYear, 3, 0, !1, !0);
                            break;
                        case"yyyy":
                            e = Z(z.FullYear, 4, 0, !1, !0);
                            break;
                        case"Y":
                            e = et(1);
                            break;
                        case"YY":
                            e = et(2, !0);
                            break;
                        case"YYY":
                            e = et(3);
                            break;
                        case"YYYY":
                            e = et(4);
                            break;
                        case"M":
                        case"L":
                            e = Z(z.Month, 1, 1);
                            break;
                        case"MM":
                        case"LL":
                            e = Z(z.Month, 2, 1);
                            break;
                        case"MMM":
                            e = Y(B.Months, k.Abbreviated);
                            break;
                        case"MMMM":
                            e = Y(B.Months, k.Wide);
                            break;
                        case"MMMMM":
                            e = Y(B.Months, k.Narrow);
                            break;
                        case"LLL":
                            e = Y(B.Months, k.Abbreviated, x.Standalone);
                            break;
                        case"LLLL":
                            e = Y(B.Months, k.Wide, x.Standalone);
                            break;
                        case"LLLLL":
                            e = Y(B.Months, k.Narrow, x.Standalone);
                            break;
                        case"w":
                            e = tt(1);
                            break;
                        case"ww":
                            e = tt(2);
                            break;
                        case"W":
                            e = tt(1, !0);
                            break;
                        case"d":
                            e = Z(z.Date, 1);
                            break;
                        case"dd":
                            e = Z(z.Date, 2);
                            break;
                        case"E":
                        case"EE":
                        case"EEE":
                            e = Y(B.Days, k.Abbreviated);
                            break;
                        case"EEEE":
                            e = Y(B.Days, k.Wide);
                            break;
                        case"EEEEE":
                            e = Y(B.Days, k.Narrow);
                            break;
                        case"EEEEEE":
                            e = Y(B.Days, k.Short);
                            break;
                        case"a":
                        case"aa":
                        case"aaa":
                            e = Y(B.DayPeriods, k.Abbreviated);
                            break;
                        case"aaaa":
                            e = Y(B.DayPeriods, k.Wide);
                            break;
                        case"aaaaa":
                            e = Y(B.DayPeriods, k.Narrow);
                            break;
                        case"b":
                        case"bb":
                        case"bbb":
                            e = Y(B.DayPeriods, k.Abbreviated, x.Standalone, !0);
                            break;
                        case"bbbb":
                            e = Y(B.DayPeriods, k.Wide, x.Standalone, !0);
                            break;
                        case"bbbbb":
                            e = Y(B.DayPeriods, k.Narrow, x.Standalone, !0);
                            break;
                        case"B":
                        case"BB":
                        case"BBB":
                            e = Y(B.DayPeriods, k.Abbreviated, x.Format, !0);
                            break;
                        case"BBBB":
                            e = Y(B.DayPeriods, k.Wide, x.Format, !0);
                            break;
                        case"BBBBB":
                            e = Y(B.DayPeriods, k.Narrow, x.Format, !0);
                            break;
                        case"h":
                            e = Z(z.Hours, 1, -12);
                            break;
                        case"hh":
                            e = Z(z.Hours, 2, -12);
                            break;
                        case"H":
                            e = Z(z.Hours, 1);
                            break;
                        case"HH":
                            e = Z(z.Hours, 2);
                            break;
                        case"m":
                            e = Z(z.Minutes, 1);
                            break;
                        case"mm":
                            e = Z(z.Minutes, 2);
                            break;
                        case"s":
                            e = Z(z.Seconds, 1);
                            break;
                        case"ss":
                            e = Z(z.Seconds, 2);
                            break;
                        case"S":
                            e = Z(z.FractionalSeconds, 1);
                            break;
                        case"SS":
                            e = Z(z.FractionalSeconds, 2);
                            break;
                        case"SSS":
                            e = Z(z.FractionalSeconds, 3);
                            break;
                        case"Z":
                        case"ZZ":
                        case"ZZZ":
                            e = X($.Short);
                            break;
                        case"ZZZZZ":
                            e = X($.Extended);
                            break;
                        case"O":
                        case"OO":
                        case"OOO":
                        case"z":
                        case"zz":
                        case"zzz":
                            e = X($.ShortGMT);
                            break;
                        case"OOOO":
                        case"ZZZZ":
                        case"zzzz":
                            e = X($.Long);
                            break;
                        default:
                            return null
                    }
                    return nt[t] = e, e
                }(t);
                l += e ? e(s, n, a) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), l
        }

        function G(t, e, n) {
            const r = new Date(0);
            return r.setFullYear(t, e, n), r.setHours(0, 0, 0), r
        }

        function K(t, e) {
            const n = function (t) {
                return Object(r.ib)(t)[r.Y.LocaleId]
            }(t);
            if (U[n] = U[n] || {}, U[n][e]) return U[n][e];
            let s = "";
            switch (e) {
                case"shortDate":
                    s = I(t, A.Short);
                    break;
                case"mediumDate":
                    s = I(t, A.Medium);
                    break;
                case"longDate":
                    s = I(t, A.Long);
                    break;
                case"fullDate":
                    s = I(t, A.Full);
                    break;
                case"shortTime":
                    s = R(t, A.Short);
                    break;
                case"mediumTime":
                    s = R(t, A.Medium);
                    break;
                case"longTime":
                    s = R(t, A.Long);
                    break;
                case"fullTime":
                    s = R(t, A.Full);
                    break;
                case"short":
                    const e = K(t, "shortTime"), n = K(t, "shortDate");
                    s = W(P(t, A.Short), [e, n]);
                    break;
                case"medium":
                    const r = K(t, "mediumTime"), i = K(t, "mediumDate");
                    s = W(P(t, A.Medium), [r, i]);
                    break;
                case"long":
                    const o = K(t, "longTime"), a = K(t, "longDate");
                    s = W(P(t, A.Long), [o, a]);
                    break;
                case"full":
                    const l = K(t, "fullTime"), c = K(t, "fullDate");
                    s = W(P(t, A.Full), [l, c])
            }
            return s && (U[n][e] = s), s
        }

        function W(t, e) {
            return e && (t = t.replace(/\{([^}]+)}/g, function (t, n) {
                return null != e && n in e ? e[n] : t
            })), t
        }

        function Q(t, e, n = "-", r, s) {
            let i = "";
            (t < 0 || s && t <= 0) && (s ? t = 1 - t : (t = -t, i = n));
            let o = String(t);
            for (; o.length < e;) o = "0" + o;
            return r && (o = o.substr(o.length - e)), i + o
        }

        function Z(t, e, n = 0, r = !1, s = !1) {
            return function (i, o) {
                let a = function (t, e) {
                    switch (t) {
                        case z.FullYear:
                            return e.getFullYear();
                        case z.Month:
                            return e.getMonth();
                        case z.Date:
                            return e.getDate();
                        case z.Hours:
                            return e.getHours();
                        case z.Minutes:
                            return e.getMinutes();
                        case z.Seconds:
                            return e.getSeconds();
                        case z.FractionalSeconds:
                            return e.getMilliseconds();
                        case z.Day:
                            return e.getDay();
                        default:
                            throw new Error(`Unknown DateType value "${t}".`)
                    }
                }(t, i);
                if ((n > 0 || a > -n) && (a += n), t === z.Hours) 0 === a && -12 === n && (a = 12); else if (t === z.FractionalSeconds) return l = e, Q(a, 3).substr(0, l);
                var l;
                const c = D(o, j.MinusSign);
                return Q(a, e, c, r, s)
            }
        }

        function Y(t, e, n = x.Format, s = !1) {
            return function (i, o) {
                return function (t, e, n, s, i, o) {
                    switch (n) {
                        case B.Months:
                            return function (t, e, n) {
                                const s = Object(r.ib)(t), i = L([s[r.Y.MonthsFormat], s[r.Y.MonthsStandalone]], e);
                                return L(i, n)
                            }(e, i, s)[t.getMonth()];
                        case B.Days:
                            return function (t, e, n) {
                                const s = Object(r.ib)(t), i = L([s[r.Y.DaysFormat], s[r.Y.DaysStandalone]], e);
                                return L(i, n)
                            }(e, i, s)[t.getDay()];
                        case B.DayPeriods:
                            const a = t.getHours(), l = t.getMinutes();
                            if (o) {
                                const t = function (t) {
                                    const e = Object(r.ib)(t);
                                    return F(e), (e[r.Y.ExtraData][2] || []).map(t => "string" == typeof t ? M(t) : [M(t[0]), M(t[1])])
                                }(e), n = function (t, e, n) {
                                    const s = Object(r.ib)(t);
                                    F(s);
                                    const i = L([s[r.Y.ExtraData][0], s[r.Y.ExtraData][1]], e) || [];
                                    return L(i, n) || []
                                }(e, i, s), o = t.findIndex(t => {
                                    if (Array.isArray(t)) {
                                        const [e, n] = t, r = a >= e.hours && l >= e.minutes,
                                            s = a < n.hours || a === n.hours && l < n.minutes;
                                        if (e.hours < n.hours) {
                                            if (r && s) return !0
                                        } else if (r || s) return !0
                                    } else if (t.hours === a && t.minutes === l) return !0;
                                    return !1
                                });
                                if (-1 !== o) return n[o]
                            }
                            return function (t, e, n) {
                                const s = Object(r.ib)(t),
                                    i = L([s[r.Y.DayPeriodsFormat], s[r.Y.DayPeriodsStandalone]], e);
                                return L(i, n)
                            }(e, i, s)[a < 12 ? 0 : 1];
                        case B.Eras:
                            return function (t, e) {
                                return L(Object(r.ib)(t)[r.Y.Eras], e)
                            }(e, s)[t.getFullYear() <= 0 ? 0 : 1];
                        default:
                            throw new Error(`unexpected translation type ${n}`)
                    }
                }(i, o, t, e, n, s)
            }
        }

        function X(t) {
            return function (e, n, r) {
                const s = -1 * r, i = D(n, j.MinusSign), o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
                switch (t) {
                    case $.Short:
                        return (s >= 0 ? "+" : "") + Q(o, 2, i) + Q(Math.abs(s % 60), 2, i);
                    case $.ShortGMT:
                        return "GMT" + (s >= 0 ? "+" : "") + Q(o, 1, i);
                    case $.Long:
                        return "GMT" + (s >= 0 ? "+" : "") + Q(o, 2, i) + ":" + Q(Math.abs(s % 60), 2, i);
                    case $.Extended:
                        return 0 === r ? "Z" : (s >= 0 ? "+" : "") + Q(o, 2, i) + ":" + Q(Math.abs(s % 60), 2, i);
                    default:
                        throw new Error(`Unknown zone width "${t}"`)
                }
            }
        }

        function J(t) {
            return G(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
        }

        function tt(t, e = !1) {
            return function (n, r) {
                let s;
                if (e) {
                    const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1, e = n.getDate();
                    s = 1 + Math.floor((e + t) / 7)
                } else {
                    const t = J(n), e = function (t) {
                        const e = G(t, 0, 1).getDay();
                        return G(t, 0, 1 + (e <= 4 ? 4 : 11) - e)
                    }(t.getFullYear()), r = t.getTime() - e.getTime();
                    s = 1 + Math.round(r / 6048e5)
                }
                return Q(s, t, D(r, j.MinusSign))
            }
        }

        function et(t, e = !1) {
            return function (n, r) {
                return Q(J(n).getFullYear(), t, D(r, j.MinusSign), e)
            }
        }

        const nt = {};

        function rt(t, e) {
            t = t.replace(/:/g, "");
            const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
            return isNaN(n) ? e : n
        }

        function st(t) {
            return t instanceof Date && !isNaN(t.valueOf())
        }

        class it {
        }

        let ot = (() => {
            class t extends it {
                constructor(t) {
                    super(), this.locale = t
                }

                getPluralCategory(t, e) {
                    switch (N(e || this.locale)(t)) {
                        case O.Zero:
                            return "zero";
                        case O.One:
                            return "one";
                        case O.Two:
                            return "two";
                        case O.Few:
                            return "few";
                        case O.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(r.v))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })();

        function at(t, e) {
            e = encodeURIComponent(e);
            for (const n of t.split(";")) {
                const t = n.indexOf("="), [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
                if (r.trim() === e) return decodeURIComponent(s)
            }
            return null
        }

        let lt = (() => {
            class t {
                constructor(t, e, n, r) {
                    this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
                }

                set klass(t) {
                    this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                }

                set ngClass(t) {
                    this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Object(r.ob)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                }

                ngDoCheck() {
                    if (this._iterableDiffer) {
                        const t = this._iterableDiffer.diff(this._rawClass);
                        t && this._applyIterableChanges(t)
                    } else if (this._keyValueDiffer) {
                        const t = this._keyValueDiffer.diff(this._rawClass);
                        t && this._applyKeyValueChanges(t)
                    }
                }

                _applyKeyValueChanges(t) {
                    t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachRemovedItem(t => {
                        t.previousValue && this._toggleClass(t.key, !1)
                    })
                }

                _applyIterableChanges(t) {
                    t.forEachAddedItem(t => {
                        if ("string" != typeof t.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${Object(r.ub)(t.item)}`);
                        this._toggleClass(t.item, !0)
                    }), t.forEachRemovedItem(t => this._toggleClass(t.item, !1))
                }

                _applyClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !0)) : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])))
                }

                _removeClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !1)) : Object.keys(t).forEach(t => this._toggleClass(t, !1)))
                }

                _toggleClass(t, e) {
                    (t = t.trim()) && t.split(/\s+/g).forEach(t => {
                        e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.t), r.Kb(r.u), r.Kb(r.l), r.Kb(r.E))
            }, t.\u0275dir = r.Fb({
                type: t,
                selectors: [["", "ngClass", ""]],
                inputs: {klass: ["class", "klass"], ngClass: "ngClass"}
            }), t
        })();

        class ct {
            constructor(t, e, n, r) {
                this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
            }

            get first() {
                return 0 === this.index
            }

            get last() {
                return this.index === this.count - 1
            }

            get even() {
                return this.index % 2 == 0
            }

            get odd() {
                return !this.even
            }
        }

        let ut = (() => {
            class t {
                constructor(t, e, n) {
                    this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                }

                set ngForOf(t) {
                    this._ngForOf = t, this._ngForOfDirty = !0
                }

                set ngForTrackBy(t) {
                    this._trackByFn = t
                }

                get ngForTrackBy() {
                    return this._trackByFn
                }

                set ngForTemplate(t) {
                    t && (this._template = t)
                }

                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const n = this._ngForOf;
                        if (!this._differ && n) try {
                            this._differ = this._differs.find(n).create(this.ngForTrackBy)
                        } catch (e) {
                            throw new Error(`Cannot find a differ supporting object '${n}' of type '${t = n, t.name || typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                        }
                    }
                    var t;
                    if (this._differ) {
                        const t = this._differ.diff(this._ngForOf);
                        t && this._applyChanges(t)
                    }
                }

                _applyChanges(t) {
                    const e = [];
                    t.forEachOperation((t, n, r) => {
                        if (null == t.previousIndex) {
                            const n = this._viewContainer.createEmbeddedView(this._template, new ct(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                                s = new ht(t, n);
                            e.push(s)
                        } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n); else if (null !== n) {
                            const s = this._viewContainer.get(n);
                            this._viewContainer.move(s, r);
                            const i = new ht(t, s);
                            e.push(i)
                        }
                    });
                    for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
                    for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                        const t = this._viewContainer.get(n);
                        t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf
                    }
                    t.forEachIdentityChange(t => {
                        this._viewContainer.get(t.currentIndex).context.$implicit = t.item
                    })
                }

                _perViewChange(t, e) {
                    t.context.$implicit = e.item
                }

                static ngTemplateContextGuard(t, e) {
                    return !0
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(r.t))
            }, t.\u0275dir = r.Fb({
                type: t,
                selectors: [["", "ngFor", "", "ngForOf", ""]],
                inputs: {ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate"}
            }), t
        })();

        class ht {
            constructor(t, e) {
                this.record = t, this.view = e
            }
        }

        let dt = (() => {
            class t {
                constructor(t, e) {
                    this._viewContainer = t, this._context = new ft, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                }

                set ngIf(t) {
                    this._context.$implicit = this._context.ngIf = t, this._updateView()
                }

                set ngIfThen(t) {
                    pt("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                }

                set ngIfElse(t) {
                    pt("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                }

                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }

                static ngTemplateContextGuard(t, e) {
                    return !0
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.P), r.Kb(r.L))
            }, t.\u0275dir = r.Fb({
                type: t,
                selectors: [["", "ngIf", ""]],
                inputs: {ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse"}
            }), t
        })();

        class ft {
            constructor() {
                this.$implicit = null, this.ngIf = null
            }
        }

        function pt(t, e) {
            if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`)
        }

        class mt {
            constructor(t, e) {
                this._viewContainerRef = t, this._templateRef = e, this._created = !1
            }

            create() {
                this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef)
            }

            destroy() {
                this._created = !1, this._viewContainerRef.clear()
            }

            enforceState(t) {
                t && !this._created ? this.create() : !t && this._created && this.destroy()
            }
        }

        let gt = (() => {
            class t {
                constructor() {
                    this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1
                }

                set ngSwitch(t) {
                    this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0)
                }

                _addCase() {
                    return this._caseCount++
                }

                _addDefault(t) {
                    this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t)
                }

                _matchCase(t) {
                    const e = t == this._ngSwitch;
                    return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e
                }

                _updateDefaultCases(t) {
                    if (this._defaultViews && t !== this._defaultUsed) {
                        this._defaultUsed = t;
                        for (let e = 0; e < this._defaultViews.length; e++) this._defaultViews[e].enforceState(t)
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275dir = r.Fb({type: t, selectors: [["", "ngSwitch", ""]], inputs: {ngSwitch: "ngSwitch"}}), t
        })(), yt = (() => {
            class t {
                constructor(t, e, n) {
                    this.ngSwitch = n, n._addCase(), this._view = new mt(t, e)
                }

                ngDoCheck() {
                    this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(gt, 9))
            }, t.\u0275dir = r.Fb({
                type: t,
                selectors: [["", "ngSwitchCase", ""]],
                inputs: {ngSwitchCase: "ngSwitchCase"}
            }), t
        })(), bt = (() => {
            class t {
                constructor(t, e, n) {
                    n._addDefault(new mt(t, e))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(gt, 9))
            }, t.\u0275dir = r.Fb({type: t, selectors: [["", "ngSwitchDefault", ""]]}), t
        })(), _t = (() => {
            class t {
                constructor(t) {
                    this.locale = t
                }

                transform(e, n = "mediumDate", s, i) {
                    if (null == e || "" === e || e != e) return null;
                    try {
                        return V(e, n, i || this.locale, s)
                    } catch (o) {
                        throw function (t, e) {
                            return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.ub)(t)}'`)
                        }(t, o.message)
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Kb(r.v))
            }, t.\u0275pipe = r.Jb({name: "date", type: t, pure: !0}), t
        })(), vt = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = r.Ib({type: t}), t.\u0275inj = r.Hb({providers: [{provide: it, useClass: ot}]}), t
        })();
        const wt = "browser";
        let St = (() => {
            class t {
            }

            return t.\u0275prov = Object(r.Gb)({
                token: t,
                providedIn: "root",
                factory: () => new Ct(Object(r.Tb)(l), window)
            }), t
        })();

        class Ct {
            constructor(t, e) {
                this.document = t, this.window = e, this.offset = () => [0, 0]
            }

            setOffset(t) {
                this.offset = Array.isArray(t) ? () => t : t
            }

            getScrollPosition() {
                return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
            }

            scrollToPosition(t) {
                this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
            }

            scrollToAnchor(t) {
                if (!this.supportsScrolling()) return;
                const e = function (t, e) {
                    const n = t.getElementById(e) || t.getElementsByName(e)[0];
                    if (n) return n;
                    if ("function" == typeof t.createTreeWalker && t.body && (t.body.createShadowRoot || t.body.attachShadow)) {
                        const n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT);
                        let r = n.currentNode;
                        for (; r;) {
                            const t = r.shadowRoot;
                            if (t) {
                                const n = t.getElementById(e) || t.querySelector(`[name="${e}"]`);
                                if (n) return n
                            }
                            r = n.nextNode()
                        }
                    }
                    return null
                }(this.document, t);
                e && (this.scrollToElement(e), this.attemptFocus(e))
            }

            setHistoryScrollRestoration(t) {
                if (this.supportScrollRestoration()) {
                    const e = this.window.history;
                    e && e.scrollRestoration && (e.scrollRestoration = t)
                }
            }

            scrollToElement(t) {
                const e = t.getBoundingClientRect(), n = e.left + this.window.pageXOffset,
                    r = e.top + this.window.pageYOffset, s = this.offset();
                this.window.scrollTo(n - s[0], r - s[1])
            }

            attemptFocus(t) {
                return t.focus(), this.document.activeElement === t
            }

            supportScrollRestoration() {
                try {
                    if (!this.supportsScrolling()) return !1;
                    const t = Tt(this.window.history) || Tt(Object.getPrototypeOf(this.window.history));
                    return !(!t || !t.writable && !t.set)
                } catch (t) {
                    return !1
                }
            }

            supportsScrolling() {
                try {
                    return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
                } catch (t) {
                    return !1
                }
            }
        }

        function Tt(t) {
            return Object.getOwnPropertyDescriptor(t, "scrollRestoration")
        }
    }, pLZG: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var r = n("7o/Q");

        function s(t, e) {
            return function (n) {
                return n.lift(new i(t, e))
            }
        }

        class i {
            constructor(t, e) {
                this.predicate = t, this.thisArg = e
            }

            call(t, e) {
                return e.subscribe(new o(t, this.predicate, this.thisArg))
            }
        }

        class o extends r.a {
            constructor(t, e, n) {
                super(t), this.predicate = e, this.thisArg = n, this.count = 0
            }

            _next(t) {
                let e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e && this.destination.next(t)
            }
        }
    }, pbSD: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var r = n("EnSQ"), s = n("fXoL"), i = n("tk/3");
        let o = (() => {
            class t extends r.a {
                constructor(t) {
                    super(t)
                }

                getCurrencies() {
                    return this.sendGetRequest("/json/currencies.json", {}, !1)
                }

                getCountries() {
                    return this.sendGetRequest("/json/countries.json", {}, !1)
                }

                getEducations() {
                    return this.sendGetRequest("/json/education.json", {}, !1)
                }

                getProfessions() {
                    return this.sendGetRequest("/json/professions.json", {}, !1)
                }

                getInterests() {
                    return this.sendGetRequest("/json/interests.json", {}, !1)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(i.a))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })()
    }, quSY: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var r = n("DH7j"), s = n("XoHu"), i = n("n6bG");
        const o = (() => {
            function t(t) {
                return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t, e) => `${e + 1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
            }

            return t.prototype = Object.create(Error.prototype), t
        })();
        let a = (() => {
            class t {
                constructor(t) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                }

                unsubscribe() {
                    let e;
                    if (this.closed) return;
                    let {_parentOrParents: n, _ctorUnsubscribe: a, _unsubscribe: c, _subscriptions: u} = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this); else if (null !== n) for (let t = 0; t < n.length; ++t) n[t].remove(this);
                    if (Object(i.a)(c)) {
                        a && (this._unsubscribe = void 0);
                        try {
                            c.call(this)
                        } catch (h) {
                            e = h instanceof o ? l(h.errors) : [h]
                        }
                    }
                    if (Object(r.a)(u)) {
                        let t = -1, n = u.length;
                        for (; ++t < n;) {
                            const n = u[t];
                            if (Object(s.a)(n)) try {
                                n.unsubscribe()
                            } catch (h) {
                                e = e || [], h instanceof o ? e = e.concat(l(h.errors)) : e.push(h)
                            }
                        }
                    }
                    if (e) throw new o(e)
                }

                add(e) {
                    let n = e;
                    if (!e) return t.EMPTY;
                    switch (typeof e) {
                        case"function":
                            n = new t(e);
                        case"object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof t)) {
                                const e = n;
                                n = new t, n._subscriptions = [e]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    let {_parentOrParents: r} = n;
                    if (null === r) n._parentOrParents = this; else if (r instanceof t) {
                        if (r === this) return n;
                        n._parentOrParents = [r, this]
                    } else {
                        if (-1 !== r.indexOf(this)) return n;
                        r.push(this)
                    }
                    const s = this._subscriptions;
                    return null === s ? this._subscriptions = [n] : s.push(n), n
                }

                remove(t) {
                    const e = this._subscriptions;
                    if (e) {
                        const n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }

            var e;
            return t.EMPTY = ((e = new t).closed = !0, e), t
        })();

        function l(t) {
            return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), [])
        }
    }, "tk/3": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return O
        }), n.d(e, "b", function () {
            return q
        });
        var r = n("fXoL"), s = n("LRne"), i = n("HDdC"), o = n("bOdf"), a = n("pLZG"), l = n("lJxs"), c = n("ofXK");

        class u {
        }

        class h {
        }

        class d {
            constructor(t) {
                this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
                    this.headers = new Map, t.split("\n").forEach(t => {
                        const e = t.indexOf(":");
                        if (e > 0) {
                            const n = t.slice(0, e), r = n.toLowerCase(), s = t.slice(e + 1).trim();
                            this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s])
                        }
                    })
                } : () => {
                    this.headers = new Map, Object.keys(t).forEach(e => {
                        let n = t[e];
                        const r = e.toLowerCase();
                        "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r))
                    })
                } : this.headers = new Map
            }

            has(t) {
                return this.init(), this.headers.has(t.toLowerCase())
            }

            get(t) {
                this.init();
                const e = this.headers.get(t.toLowerCase());
                return e && e.length > 0 ? e[0] : null
            }

            keys() {
                return this.init(), Array.from(this.normalizedNames.values())
            }

            getAll(t) {
                return this.init(), this.headers.get(t.toLowerCase()) || null
            }

            append(t, e) {
                return this.clone({name: t, value: e, op: "a"})
            }

            set(t, e) {
                return this.clone({name: t, value: e, op: "s"})
            }

            delete(t, e) {
                return this.clone({name: t, value: e, op: "d"})
            }

            maybeSetNormalizedName(t, e) {
                this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
            }

            init() {
                this.lazyInit && (this.lazyInit instanceof d ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
            }

            copyFrom(t) {
                t.init(), Array.from(t.headers.keys()).forEach(e => {
                    this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
                })
            }

            clone(t) {
                const e = new d;
                return e.lazyInit = this.lazyInit && this.lazyInit instanceof d ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
            }

            applyUpdate(t) {
                const e = t.name.toLowerCase();
                switch (t.op) {
                    case"a":
                    case"s":
                        let n = t.value;
                        if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                        this.maybeSetNormalizedName(t.name, e);
                        const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                        r.push(...n), this.headers.set(e, r);
                        break;
                    case"d":
                        const s = t.value;
                        if (s) {
                            let t = this.headers.get(e);
                            if (!t) return;
                            t = t.filter(t => -1 === s.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                        } else this.headers.delete(e), this.normalizedNames.delete(e)
                }
            }

            forEach(t) {
                this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
            }
        }

        class f {
            encodeKey(t) {
                return p(t)
            }

            encodeValue(t) {
                return p(t)
            }

            decodeKey(t) {
                return decodeURIComponent(t)
            }

            decodeValue(t) {
                return decodeURIComponent(t)
            }
        }

        function p(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }

        class m {
            constructor(t = {}) {
                if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new f, t.fromString) {
                    if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function (t, e) {
                        const n = new Map;
                        return t.length > 0 && t.replace(/^\?/, "").split("&").forEach(t => {
                            const r = t.indexOf("="), [s, i] = -1 == r ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                                o = n.get(s) || [];
                            o.push(i), n.set(s, o)
                        }), n
                    }(t.fromString, this.encoder)
                } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
                    const n = t.fromObject[e];
                    this.map.set(e, Array.isArray(n) ? n : [n])
                })) : this.map = null
            }

            has(t) {
                return this.init(), this.map.has(t)
            }

            get(t) {
                this.init();
                const e = this.map.get(t);
                return e ? e[0] : null
            }

            getAll(t) {
                return this.init(), this.map.get(t) || null
            }

            keys() {
                return this.init(), Array.from(this.map.keys())
            }

            append(t, e) {
                return this.clone({param: t, value: e, op: "a"})
            }

            appendAll(t) {
                const e = [];
                return Object.keys(t).forEach(n => {
                    const r = t[n];
                    Array.isArray(r) ? r.forEach(t => {
                        e.push({param: n, value: t, op: "a"})
                    }) : e.push({param: n, value: r, op: "a"})
                }), this.clone(e)
            }

            set(t, e) {
                return this.clone({param: t, value: e, op: "s"})
            }

            delete(t, e) {
                return this.clone({param: t, value: e, op: "d"})
            }

            toString() {
                return this.init(), this.keys().map(t => {
                    const e = this.encoder.encodeKey(t);
                    return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
                }).filter(t => "" !== t).join("&")
            }

            clone(t) {
                const e = new m({encoder: this.encoder});
                return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat(t), e
            }

            init() {
                null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
                    switch (t.op) {
                        case"a":
                        case"s":
                            const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                            e.push(t.value), this.map.set(t.param, e);
                            break;
                        case"d":
                            if (void 0 === t.value) {
                                this.map.delete(t.param);
                                break
                            }
                        {
                            let e = this.map.get(t.param) || [];
                            const n = e.indexOf(t.value);
                            -1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                        }
                    }
                }), this.cloneFrom = this.updates = null)
            }
        }

        function g(t) {
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function y(t) {
            return "undefined" != typeof Blob && t instanceof Blob
        }

        function b(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        }

        class _ {
            constructor(t, e, n, r) {
                let s;
                if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                    switch (t) {
                        case"DELETE":
                        case"GET":
                        case"HEAD":
                        case"OPTIONS":
                        case"JSONP":
                            return !1;
                        default:
                            return !0
                    }
                }(this.method) || r ? (this.body = void 0 !== n ? n : null, s = r) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new d), this.params) {
                    const t = this.params.toString();
                    if (0 === t.length) this.urlWithParams = e; else {
                        const n = e.indexOf("?");
                        this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
                    }
                } else this.params = new m, this.urlWithParams = e
            }

            serializeBody() {
                return null === this.body ? null : g(this.body) || y(this.body) || b(this.body) || "string" == typeof this.body ? this.body : this.body instanceof m ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }

            detectContentTypeHeader() {
                return null === this.body || b(this.body) ? null : y(this.body) ? this.body.type || null : g(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof m ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
            }

            clone(t = {}) {
                const e = t.method || this.method, n = t.url || this.url, r = t.responseType || this.responseType,
                    s = void 0 !== t.body ? t.body : this.body,
                    i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                    o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
                let a = t.headers || this.headers, l = t.params || this.params;
                return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)), new _(e, n, s, {
                    params: l,
                    headers: a,
                    reportProgress: o,
                    responseType: r,
                    withCredentials: i
                })
            }
        }

        var v = function (t) {
            return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
        }({});

        class w {
            constructor(t, e = 200, n = "OK") {
                this.headers = t.headers || new d, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
            }
        }

        class S extends w {
            constructor(t = {}) {
                super(t), this.type = v.ResponseHeader
            }

            clone(t = {}) {
                return new S({
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }
        }

        class C extends w {
            constructor(t = {}) {
                super(t), this.type = v.Response, this.body = void 0 !== t.body ? t.body : null
            }

            clone(t = {}) {
                return new C({
                    body: void 0 !== t.body ? t.body : this.body,
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }
        }

        class T extends w {
            constructor(t) {
                super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url || "(unknown url)"}` : `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
            }
        }

        function E(t, e) {
            return {
                body: e,
                headers: t.headers,
                observe: t.observe,
                params: t.params,
                reportProgress: t.reportProgress,
                responseType: t.responseType,
                withCredentials: t.withCredentials
            }
        }

        let O = (() => {
            class t {
                constructor(t) {
                    this.handler = t
                }

                request(t, e, n = {}) {
                    let r;
                    if (t instanceof _) r = t; else {
                        let s, i;
                        s = n.headers instanceof d ? n.headers : new d(n.headers), n.params && (i = n.params instanceof m ? n.params : new m({fromObject: n.params})), r = new _(t, e, void 0 !== n.body ? n.body : null, {
                            headers: s,
                            params: i,
                            reportProgress: n.reportProgress,
                            responseType: n.responseType || "json",
                            withCredentials: n.withCredentials
                        })
                    }
                    const i = Object(s.a)(r).pipe(Object(o.a)(t => this.handler.handle(t)));
                    if (t instanceof _ || "events" === n.observe) return i;
                    const c = i.pipe(Object(a.a)(t => t instanceof C));
                    switch (n.observe || "body") {
                        case"body":
                            switch (r.responseType) {
                                case"arraybuffer":
                                    return c.pipe(Object(l.a)(t => {
                                        if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                        return t.body
                                    }));
                                case"blob":
                                    return c.pipe(Object(l.a)(t => {
                                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                        return t.body
                                    }));
                                case"text":
                                    return c.pipe(Object(l.a)(t => {
                                        if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                                        return t.body
                                    }));
                                case"json":
                                default:
                                    return c.pipe(Object(l.a)(t => t.body))
                            }
                        case"response":
                            return c;
                        default:
                            throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                    }
                }

                delete(t, e = {}) {
                    return this.request("DELETE", t, e)
                }

                get(t, e = {}) {
                    return this.request("GET", t, e)
                }

                head(t, e = {}) {
                    return this.request("HEAD", t, e)
                }

                jsonp(t, e) {
                    return this.request("JSONP", t, {
                        params: (new m).append(e, "JSONP_CALLBACK"),
                        observe: "body",
                        responseType: "json"
                    })
                }

                options(t, e = {}) {
                    return this.request("OPTIONS", t, e)
                }

                patch(t, e, n = {}) {
                    return this.request("PATCH", t, E(n, e))
                }

                post(t, e, n = {}) {
                    return this.request("POST", t, E(n, e))
                }

                put(t, e, n = {}) {
                    return this.request("PUT", t, E(n, e))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(u))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })();

        class x {
            constructor(t, e) {
                this.next = t, this.interceptor = e
            }

            handle(t) {
                return this.interceptor.intercept(t, this.next)
            }
        }

        const k = new r.r("HTTP_INTERCEPTORS");
        let A = (() => {
            class t {
                intercept(t, e) {
                    return e.handle(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })();
        const j = /^\)\]\}',?\n/;

        class I {
        }

        let R = (() => {
            class t {
                constructor() {
                }

                build() {
                    return new XMLHttpRequest
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), P = (() => {
            class t {
                constructor(t) {
                    this.xhrFactory = t
                }

                handle(t) {
                    if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                    return new i.a(e => {
                        const n = this.xhrFactory.build();
                        if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                            const e = t.detectContentTypeHeader();
                            null !== e && n.setRequestHeader("Content-Type", e)
                        }
                        if (t.responseType) {
                            const e = t.responseType.toLowerCase();
                            n.responseType = "json" !== e ? e : "text"
                        }
                        const r = t.serializeBody();
                        let s = null;
                        const i = () => {
                            if (null !== s) return s;
                            const e = 1223 === n.status ? 204 : n.status, r = n.statusText || "OK",
                                i = new d(n.getAllResponseHeaders()), o = function (t) {
                                    return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                                }(n) || t.url;
                            return s = new S({headers: i, status: e, statusText: r, url: o}), s
                        }, o = () => {
                            let {headers: r, status: s, statusText: o, url: a} = i(), l = null;
                            204 !== s && (l = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = l ? 200 : 0);
                            let c = s >= 200 && s < 300;
                            if ("json" === t.responseType && "string" == typeof l) {
                                const t = l;
                                l = l.replace(j, "");
                                try {
                                    l = "" !== l ? JSON.parse(l) : null
                                } catch (u) {
                                    l = t, c && (c = !1, l = {error: u, text: l})
                                }
                            }
                            c ? (e.next(new C({
                                body: l,
                                headers: r,
                                status: s,
                                statusText: o,
                                url: a || void 0
                            })), e.complete()) : e.error(new T({
                                error: l,
                                headers: r,
                                status: s,
                                statusText: o,
                                url: a || void 0
                            }))
                        }, a = t => {
                            const {url: r} = i(), s = new T({
                                error: t,
                                status: n.status || 0,
                                statusText: n.statusText || "Unknown Error",
                                url: r || void 0
                            });
                            e.error(s)
                        };
                        let l = !1;
                        const c = r => {
                            l || (e.next(i()), l = !0);
                            let s = {type: v.DownloadProgress, loaded: r.loaded};
                            r.lengthComputable && (s.total = r.total), "text" === t.responseType && n.responseText && (s.partialText = n.responseText), e.next(s)
                        }, u = t => {
                            let n = {type: v.UploadProgress, loaded: t.loaded};
                            t.lengthComputable && (n.total = t.total), e.next(n)
                        };
                        return n.addEventListener("load", o), n.addEventListener("error", a), n.addEventListener("timeout", a), n.addEventListener("abort", a), t.reportProgress && (n.addEventListener("progress", c), null !== r && n.upload && n.upload.addEventListener("progress", u)), n.send(r), e.next({type: v.Sent}), () => {
                            n.removeEventListener("error", a), n.removeEventListener("abort", a), n.removeEventListener("load", o), n.removeEventListener("timeout", a), t.reportProgress && (n.removeEventListener("progress", c), null !== r && n.upload && n.upload.removeEventListener("progress", u)), n.readyState !== n.DONE && n.abort()
                        }
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(I))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })();
        const D = new r.r("XSRF_COOKIE_NAME"), N = new r.r("XSRF_HEADER_NAME");

        class F {
        }

        let L = (() => {
            class t {
                constructor(t, e, n) {
                    this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                }

                getToken() {
                    if ("server" === this.platform) return null;
                    const t = this.doc.cookie || "";
                    return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Object(c.u)(t, this.cookieName), this.lastCookieString = t), this.lastToken
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(c.c), r.Tb(r.C), r.Tb(D))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), M = (() => {
            class t {
                constructor(t, e) {
                    this.tokenService = t, this.headerName = e
                }

                intercept(t, e) {
                    const n = t.url.toLowerCase();
                    if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                    const r = this.tokenService.getToken();
                    return null === r || t.headers.has(this.headerName) || (t = t.clone({headers: t.headers.set(this.headerName, r)})), e.handle(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(F), r.Tb(N))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), H = (() => {
            class t {
                constructor(t, e) {
                    this.backend = t, this.injector = e, this.chain = null
                }

                handle(t) {
                    if (null === this.chain) {
                        const t = this.injector.get(k, []);
                        this.chain = t.reduceRight((t, e) => new x(t, e), this.backend)
                    }
                    return this.chain.handle(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(r.Tb(h), r.Tb(r.s))
            }, t.\u0275prov = r.Gb({token: t, factory: t.\u0275fac}), t
        })(), U = (() => {
            class t {
                static disable() {
                    return {ngModule: t, providers: [{provide: M, useClass: A}]}
                }

                static withOptions(e = {}) {
                    return {
                        ngModule: t,
                        providers: [e.cookieName ? {
                            provide: D,
                            useValue: e.cookieName
                        } : [], e.headerName ? {provide: N, useValue: e.headerName} : []]
                    }
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = r.Ib({type: t}), t.\u0275inj = r.Hb({
                providers: [M, {
                    provide: k,
                    useExisting: M,
                    multi: !0
                }, {provide: F, useClass: L}, {provide: D, useValue: "XSRF-TOKEN"}, {
                    provide: N,
                    useValue: "X-XSRF-TOKEN"
                }]
            }), t
        })(), q = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = r.Ib({type: t}), t.\u0275inj = r.Hb({
                providers: [O, {
                    provide: u,
                    useClass: H
                }, P, {provide: h, useExisting: P}, R, {provide: I, useExisting: R}],
                imports: [[U.withOptions({cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN"})]]
            }), t
        })()
    }, tyNb: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return _e
        }), n.d(e, "b", function () {
            return Un
        }), n.d(e, "c", function () {
            return qn
        }), n.d(e, "d", function () {
            return Bn
        }), n.d(e, "e", function () {
            return $n
        }), n.d(e, "f", function () {
            return er
        }), n.d(e, "g", function () {
            return Vn
        });
        var r = n("ofXK"), s = n("fXoL"), i = n("Cfvw"), o = n("LRne"), a = n("XNiG"), l = n("9ppp");

        class c extends a.a {
            constructor(t) {
                super(), this._value = t
            }

            get value() {
                return this.getValue()
            }

            _subscribe(t) {
                const e = super._subscribe(t);
                return e && !e.closed && t.next(this._value), e
            }

            getValue() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new l.a;
                return this._value
            }

            next(t) {
                super.next(this._value = t)
            }
        }

        var u = n("z+Ro"), h = n("DH7j"), d = n("7o/Q");

        class f extends d.a {
            notifyNext(t, e, n, r, s) {
                this.destination.next(e)
            }

            notifyError(t, e) {
                this.destination.error(t)
            }

            notifyComplete(t) {
                this.destination.complete()
            }
        }

        class p extends d.a {
            constructor(t, e, n) {
                super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
            }

            _next(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }

            _error(t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }

            _complete() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }
        }

        var m = n("SeVD"), g = n("HDdC");

        function y(t, e, n, r, s = new p(t, n, r)) {
            if (!s.closed) return e instanceof g.a ? e.subscribe(s) : Object(m.a)(e)(s)
        }

        var b = n("yCtX");
        const _ = {};

        class v {
            constructor(t) {
                this.resultSelector = t
            }

            call(t, e) {
                return e.subscribe(new w(t, this.resultSelector))
            }
        }

        class w extends f {
            constructor(t, e) {
                super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
            }

            _next(t) {
                this.values.push(_), this.observables.push(t)
            }

            _complete() {
                const t = this.observables, e = t.length;
                if (0 === e) this.destination.complete(); else {
                    this.active = e, this.toRespond = e;
                    for (let n = 0; n < e; n++) this.add(y(this, t[n], void 0, n))
                }
            }

            notifyComplete(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }

            notifyNext(t, e, n) {
                const r = this.values, s = this.toRespond ? r[n] === _ ? --this.toRespond : this.toRespond : 0;
                r[n] = e, 0 === s && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
            }

            _tryResultSelector(t) {
                let e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }
        }

        const S = (() => {
            function t() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }

            return t.prototype = Object.create(Error.prototype), t
        })();
        var C = n("bHdf");

        function T(...t) {
            return Object(C.a)(1)(Object(o.a)(...t))
        }

        const E = new g.a(t => t.complete());

        function O(t) {
            return t ? function (t) {
                return new g.a(e => t.schedule(() => e.complete()))
            }(t) : E
        }

        function x(t) {
            return new g.a(e => {
                let n;
                try {
                    n = t()
                } catch (r) {
                    return void e.error(r)
                }
                return (n ? Object(i.a)(n) : O()).subscribe(e)
            })
        }

        var k = n("EQ5u"), A = n("lJxs"), j = n("zx2A");

        function I(t, e) {
            return "function" == typeof e ? n => n.pipe(I((n, r) => Object(i.a)(t(n, r)).pipe(Object(A.a)((t, s) => e(n, t, r, s))))) : e => e.lift(new R(t))
        }

        class R {
            constructor(t) {
                this.project = t
            }

            call(t, e) {
                return e.subscribe(new P(t, this.project))
            }
        }

        class P extends j.b {
            constructor(t, e) {
                super(t), this.project = e, this.index = 0
            }

            _next(t) {
                let e;
                const n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this._innerSub(e)
            }

            _innerSub(t) {
                const e = this.innerSubscription;
                e && e.unsubscribe();
                const n = new j.a(this), r = this.destination;
                r.add(n), this.innerSubscription = Object(j.c)(t, n), this.innerSubscription !== n && r.add(this.innerSubscription)
            }

            _complete() {
                const {innerSubscription: t} = this;
                t && !t.closed || super._complete(), this.unsubscribe()
            }

            _unsubscribe() {
                this.innerSubscription = void 0
            }

            notifyComplete() {
                this.innerSubscription = void 0, this.isStopped && super._complete()
            }

            notifyNext(t) {
                this.destination.next(t)
            }
        }

        const D = (() => {
            function t() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }

            return t.prototype = Object.create(Error.prototype), t
        })();

        function N(t) {
            return e => 0 === t ? O() : e.lift(new F(t))
        }

        class F {
            constructor(t) {
                if (this.total = t, this.total < 0) throw new D
            }

            call(t, e) {
                return e.subscribe(new L(t, this.total))
            }
        }

        class L extends d.a {
            constructor(t, e) {
                super(t), this.total = e, this.count = 0
            }

            _next(t) {
                const e = this.total, n = ++this.count;
                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
            }
        }

        function M(t, e) {
            let n = !1;
            return arguments.length >= 2 && (n = !0), function (r) {
                return r.lift(new H(t, e, n))
            }
        }

        class H {
            constructor(t, e, n = !1) {
                this.accumulator = t, this.seed = e, this.hasSeed = n
            }

            call(t, e) {
                return e.subscribe(new U(t, this.accumulator, this.seed, this.hasSeed))
            }
        }

        class U extends d.a {
            constructor(t, e, n, r) {
                super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0
            }

            get seed() {
                return this._seed
            }

            set seed(t) {
                this.hasSeed = !0, this._seed = t
            }

            _next(t) {
                if (this.hasSeed) return this._tryNext(t);
                this.seed = t, this.destination.next(t)
            }

            _tryNext(t) {
                const e = this.index++;
                let n;
                try {
                    n = this.accumulator(this.seed, t, e)
                } catch (r) {
                    this.destination.error(r)
                }
                this.seed = n, this.destination.next(n)
            }
        }

        var q = n("pLZG");

        function $(t) {
            return function (e) {
                const n = new z(t), r = e.lift(n);
                return n.caught = r
            }
        }

        class z {
            constructor(t) {
                this.selector = t
            }

            call(t, e) {
                return e.subscribe(new B(t, this.selector, this.caught))
            }
        }

        class B extends j.b {
            constructor(t, e, n) {
                super(t), this.selector = e, this.caught = n
            }

            error(t) {
                if (!this.isStopped) {
                    let n;
                    try {
                        n = this.selector(t, this.caught)
                    } catch (e) {
                        return void super.error(e)
                    }
                    this._unsubscribeAndRecycle();
                    const r = new j.a(this);
                    this.add(r);
                    const s = Object(j.c)(n, r);
                    s !== r && this.add(s)
                }
            }
        }

        var V = n("bOdf");

        function G(t) {
            return function (e) {
                return 0 === t ? O() : e.lift(new K(t))
            }
        }

        class K {
            constructor(t) {
                if (this.total = t, this.total < 0) throw new D
            }

            call(t, e) {
                return e.subscribe(new W(t, this.total))
            }
        }

        class W extends d.a {
            constructor(t, e) {
                super(t), this.total = e, this.ring = new Array, this.count = 0
            }

            _next(t) {
                const e = this.ring, n = this.total, r = this.count++;
                e.length < n ? e.push(t) : e[r % n] = t
            }

            _complete() {
                const t = this.destination;
                let e = this.count;
                if (e > 0) {
                    const n = this.count >= this.total ? this.total : this.count, r = this.ring;
                    for (let s = 0; s < n; s++) {
                        const s = e++ % n;
                        t.next(r[s])
                    }
                }
                t.complete()
            }
        }

        function Q(t = X) {
            return e => e.lift(new Z(t))
        }

        class Z {
            constructor(t) {
                this.errorFactory = t
            }

            call(t, e) {
                return e.subscribe(new Y(t, this.errorFactory))
            }
        }

        class Y extends d.a {
            constructor(t, e) {
                super(t), this.errorFactory = e, this.hasValue = !1
            }

            _next(t) {
                this.hasValue = !0, this.destination.next(t)
            }

            _complete() {
                if (this.hasValue) return this.destination.complete();
                {
                    let e;
                    try {
                        e = this.errorFactory()
                    } catch (t) {
                        e = t
                    }
                    this.destination.error(e)
                }
            }
        }

        function X() {
            return new S
        }

        function J(t = null) {
            return e => e.lift(new tt(t))
        }

        class tt {
            constructor(t) {
                this.defaultValue = t
            }

            call(t, e) {
                return e.subscribe(new et(t, this.defaultValue))
            }
        }

        class et extends d.a {
            constructor(t, e) {
                super(t), this.defaultValue = e, this.isEmpty = !0
            }

            _next(t) {
                this.isEmpty = !1, this.destination.next(t)
            }

            _complete() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }
        }

        var nt = n("SpAZ");

        function rt(t, e) {
            const n = arguments.length >= 2;
            return r => r.pipe(t ? Object(q.a)((e, n) => t(e, n, r)) : nt.a, N(1), n ? J(e) : Q(() => new S))
        }

        var st = n("5+tZ");

        function it() {
        }

        var ot = n("n6bG");

        function at(t, e, n) {
            return function (r) {
                return r.lift(new lt(t, e, n))
            }
        }

        class lt {
            constructor(t, e, n) {
                this.nextOrObserver = t, this.error = e, this.complete = n
            }

            call(t, e) {
                return e.subscribe(new ct(t, this.nextOrObserver, this.error, this.complete))
            }
        }

        class ct extends d.a {
            constructor(t, e, n, r) {
                super(t), this._tapNext = it, this._tapError = it, this._tapComplete = it, this._tapError = n || it, this._tapComplete = r || it, Object(ot.a)(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || it, this._tapError = e.error || it, this._tapComplete = e.complete || it)
            }

            _next(t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }

            _error(t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }

            _complete() {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }
        }

        var ut = n("x+ZX"), ht = n("quSY");

        class dt {
            constructor(t) {
                this.callback = t
            }

            call(t, e) {
                return e.subscribe(new ft(t, this.callback))
            }
        }

        class ft extends d.a {
            constructor(t, e) {
                super(t), this.add(new ht.a(e))
            }
        }

        class pt {
            constructor(t, e) {
                this.id = t, this.url = e
            }
        }

        class mt extends pt {
            constructor(t, e, n = "imperative", r = null) {
                super(t, e), this.navigationTrigger = n, this.restoredState = r
            }

            toString() {
                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
            }
        }

        class gt extends pt {
            constructor(t, e, n) {
                super(t, e), this.urlAfterRedirects = n
            }

            toString() {
                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
            }
        }

        class yt extends pt {
            constructor(t, e, n) {
                super(t, e), this.reason = n
            }

            toString() {
                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
            }
        }

        class bt extends pt {
            constructor(t, e, n) {
                super(t, e), this.error = n
            }

            toString() {
                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
            }
        }

        class _t extends pt {
            constructor(t, e, n, r) {
                super(t, e), this.urlAfterRedirects = n, this.state = r
            }

            toString() {
                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }

        class vt extends pt {
            constructor(t, e, n, r) {
                super(t, e), this.urlAfterRedirects = n, this.state = r
            }

            toString() {
                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }

        class wt extends pt {
            constructor(t, e, n, r, s) {
                super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = s
            }

            toString() {
                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
            }
        }

        class St extends pt {
            constructor(t, e, n, r) {
                super(t, e), this.urlAfterRedirects = n, this.state = r
            }

            toString() {
                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }

        class Ct extends pt {
            constructor(t, e, n, r) {
                super(t, e), this.urlAfterRedirects = n, this.state = r
            }

            toString() {
                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }

        class Tt {
            constructor(t) {
                this.route = t
            }

            toString() {
                return `RouteConfigLoadStart(path: ${this.route.path})`
            }
        }

        class Et {
            constructor(t) {
                this.route = t
            }

            toString() {
                return `RouteConfigLoadEnd(path: ${this.route.path})`
            }
        }

        class Ot {
            constructor(t) {
                this.snapshot = t
            }

            toString() {
                return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }

        class xt {
            constructor(t) {
                this.snapshot = t
            }

            toString() {
                return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }

        class kt {
            constructor(t) {
                this.snapshot = t
            }

            toString() {
                return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }

        class At {
            constructor(t) {
                this.snapshot = t
            }

            toString() {
                return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }

        class jt {
            constructor(t, e, n) {
                this.routerEvent = t, this.position = e, this.anchor = n
            }

            toString() {
                return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
            }
        }

        const It = "primary";

        class Rt {
            constructor(t) {
                this.params = t || {}
            }

            has(t) {
                return Object.prototype.hasOwnProperty.call(this.params, t)
            }

            get(t) {
                if (this.has(t)) {
                    const e = this.params[t];
                    return Array.isArray(e) ? e[0] : e
                }
                return null
            }

            getAll(t) {
                if (this.has(t)) {
                    const e = this.params[t];
                    return Array.isArray(e) ? e : [e]
                }
                return []
            }

            get keys() {
                return Object.keys(this.params)
            }
        }

        function Pt(t) {
            return new Rt(t)
        }

        function Dt(t) {
            const e = Error("NavigationCancelingError: " + t);
            return e.ngNavigationCancelingError = !0, e
        }

        function Nt(t, e, n) {
            const r = n.path.split("/");
            if (r.length > t.length) return null;
            if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
            const s = {};
            for (let i = 0; i < r.length; i++) {
                const e = r[i], n = t[i];
                if (e.startsWith(":")) s[e.substring(1)] = n; else if (e !== n.path) return null
            }
            return {consumed: t.slice(0, r.length), posParams: s}
        }

        function Ft(t, e) {
            const n = t ? Object.keys(t) : void 0, r = e ? Object.keys(e) : void 0;
            if (!n || !r || n.length != r.length) return !1;
            let s;
            for (let i = 0; i < n.length; i++) if (s = n[i], !Lt(t[s], e[s])) return !1;
            return !0
        }

        function Lt(t, e) {
            if (Array.isArray(t) && Array.isArray(e)) {
                if (t.length !== e.length) return !1;
                const n = [...t].sort(), r = [...e].sort();
                return n.every((t, e) => r[e] === t)
            }
            return t === e
        }

        function Mt(t) {
            return Array.prototype.concat.apply([], t)
        }

        function Ht(t) {
            return t.length > 0 ? t[t.length - 1] : null
        }

        function Ut(t, e) {
            for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function qt(t) {
            return Object(s.pb)(t) ? t : Object(s.qb)(t) ? Object(i.a)(Promise.resolve(t)) : Object(o.a)(t)
        }

        function $t(t, e, n) {
            return n ? function (t, e) {
                return Ft(t, e)
            }(t.queryParams, e.queryParams) && zt(t.root, e.root) : function (t, e) {
                return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Lt(t[n], e[n]))
            }(t.queryParams, e.queryParams) && Bt(t.root, e.root)
        }

        function zt(t, e) {
            if (!Qt(t.segments, e.segments)) return !1;
            if (t.numberOfChildren !== e.numberOfChildren) return !1;
            for (const n in e.children) {
                if (!t.children[n]) return !1;
                if (!zt(t.children[n], e.children[n])) return !1
            }
            return !0
        }

        function Bt(t, e) {
            return Vt(t, e, e.segments)
        }

        function Vt(t, e, n) {
            if (t.segments.length > n.length) return !!Qt(t.segments.slice(0, n.length), n) && !e.hasChildren();
            if (t.segments.length === n.length) {
                if (!Qt(t.segments, n)) return !1;
                for (const n in e.children) {
                    if (!t.children[n]) return !1;
                    if (!Bt(t.children[n], e.children[n])) return !1
                }
                return !0
            }
            {
                const r = n.slice(0, t.segments.length), s = n.slice(t.segments.length);
                return !!Qt(t.segments, r) && !!t.children.primary && Vt(t.children.primary, e, s)
            }
        }

        class Gt {
            constructor(t, e, n) {
                this.root = t, this.queryParams = e, this.fragment = n
            }

            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = Pt(this.queryParams)), this._queryParamMap
            }

            toString() {
                return Xt.serialize(this)
            }
        }

        class Kt {
            constructor(t, e) {
                this.segments = t, this.children = e, this.parent = null, Ut(e, (t, e) => t.parent = this)
            }

            hasChildren() {
                return this.numberOfChildren > 0
            }

            get numberOfChildren() {
                return Object.keys(this.children).length
            }

            toString() {
                return Jt(this)
            }
        }

        class Wt {
            constructor(t, e) {
                this.path = t, this.parameters = e
            }

            get parameterMap() {
                return this._parameterMap || (this._parameterMap = Pt(this.parameters)), this._parameterMap
            }

            toString() {
                return oe(this)
            }
        }

        function Qt(t, e) {
            return t.length === e.length && t.every((t, n) => t.path === e[n].path)
        }

        class Zt {
        }

        class Yt {
            parse(t) {
                const e = new he(t);
                return new Gt(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
            }

            serialize(t) {
                var e;
                return `/${te(t.root, !0)}${function (t) {
                    const e = Object.keys(t).map(e => {
                        const n = t[e];
                        return Array.isArray(n) ? n.map(t => `${ne(e)}=${ne(t)}`).join("&") : `${ne(e)}=${ne(n)}`
                    });
                    return e.length ? `?${e.join("&")}` : ""
                }(t.queryParams)}${"string" == typeof t.fragment ? `#${e = t.fragment, encodeURI(e)}` : ""}`
            }
        }

        const Xt = new Yt;

        function Jt(t) {
            return t.segments.map(t => oe(t)).join("/")
        }

        function te(t, e) {
            if (!t.hasChildren()) return Jt(t);
            if (e) {
                const e = t.children.primary ? te(t.children.primary, !1) : "", n = [];
                return Ut(t.children, (t, e) => {
                    e !== It && n.push(`${e}:${te(t, !1)}`)
                }), n.length > 0 ? `${e}(${n.join("//")})` : e
            }
            {
                const e = function (t, e) {
                    let n = [];
                    return Ut(t.children, (t, r) => {
                        r === It && (n = n.concat(e(t, r)))
                    }), Ut(t.children, (t, r) => {
                        r !== It && (n = n.concat(e(t, r)))
                    }), n
                }(t, (e, n) => n === It ? [te(t.children.primary, !1)] : [`${n}:${te(e, !1)}`]);
                return 1 === Object.keys(t.children).length && null != t.children.primary ? `${Jt(t)}/${e[0]}` : `${Jt(t)}/(${e.join("//")})`
            }
        }

        function ee(t) {
            return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function ne(t) {
            return ee(t).replace(/%3B/gi, ";")
        }

        function re(t) {
            return ee(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function se(t) {
            return decodeURIComponent(t)
        }

        function ie(t) {
            return se(t.replace(/\+/g, "%20"))
        }

        function oe(t) {
            return `${re(t.path)}${e = t.parameters, Object.keys(e).map(t => `;${re(t)}=${re(e[t])}`).join("")}`;
            var e
        }

        const ae = /^[^\/()?;=#]+/;

        function le(t) {
            const e = t.match(ae);
            return e ? e[0] : ""
        }

        const ce = /^[^=?&#]+/, ue = /^[^?&#]+/;

        class he {
            constructor(t) {
                this.url = t, this.remaining = t
            }

            parseRootSegment() {
                return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Kt([], {}) : new Kt([], this.parseChildren())
            }

            parseQueryParams() {
                const t = {};
                if (this.consumeOptional("?")) do {
                    this.parseQueryParam(t)
                } while (this.consumeOptional("&"));
                return t
            }

            parseFragment() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }

            parseChildren() {
                if ("" === this.remaining) return {};
                this.consumeOptional("/");
                const t = [];
                for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                let e = {};
                this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                let n = {};
                return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Kt(t, e)), n
            }

            parseSegment() {
                const t = le(this.remaining);
                if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                return this.capture(t), new Wt(se(t), this.parseMatrixParams())
            }

            parseMatrixParams() {
                const t = {};
                for (; this.consumeOptional(";");) this.parseParam(t);
                return t
            }

            parseParam(t) {
                const e = le(this.remaining);
                if (!e) return;
                this.capture(e);
                let n = "";
                if (this.consumeOptional("=")) {
                    const t = le(this.remaining);
                    t && (n = t, this.capture(n))
                }
                t[se(e)] = se(n)
            }

            parseQueryParam(t) {
                const e = function (t) {
                    const e = t.match(ce);
                    return e ? e[0] : ""
                }(this.remaining);
                if (!e) return;
                this.capture(e);
                let n = "";
                if (this.consumeOptional("=")) {
                    const t = function (t) {
                        const e = t.match(ue);
                        return e ? e[0] : ""
                    }(this.remaining);
                    t && (n = t, this.capture(n))
                }
                const r = ie(e), s = ie(n);
                if (t.hasOwnProperty(r)) {
                    let e = t[r];
                    Array.isArray(e) || (e = [e], t[r] = e), e.push(s)
                } else t[r] = s
            }

            parseParens(t) {
                const e = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                    const n = le(this.remaining), r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r) throw new Error(`Cannot parse url '${this.url}'`);
                    let s;
                    n.indexOf(":") > -1 ? (s = n.substr(0, n.indexOf(":")), this.capture(s), this.capture(":")) : t && (s = It);
                    const i = this.parseChildren();
                    e[s] = 1 === Object.keys(i).length ? i.primary : new Kt([], i), this.consumeOptional("//")
                }
                return e
            }

            peekStartsWith(t) {
                return this.remaining.startsWith(t)
            }

            consumeOptional(t) {
                return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
            }

            capture(t) {
                if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
            }
        }

        class de {
            constructor(t) {
                this._root = t
            }

            get root() {
                return this._root.value
            }

            parent(t) {
                const e = this.pathFromRoot(t);
                return e.length > 1 ? e[e.length - 2] : null
            }

            children(t) {
                const e = fe(t, this._root);
                return e ? e.children.map(t => t.value) : []
            }

            firstChild(t) {
                const e = fe(t, this._root);
                return e && e.children.length > 0 ? e.children[0].value : null
            }

            siblings(t) {
                const e = pe(t, this._root);
                return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
            }

            pathFromRoot(t) {
                return pe(t, this._root).map(t => t.value)
            }
        }

        function fe(t, e) {
            if (t === e.value) return e;
            for (const n of e.children) {
                const e = fe(t, n);
                if (e) return e
            }
            return null
        }

        function pe(t, e) {
            if (t === e.value) return [e];
            for (const n of e.children) {
                const r = pe(t, n);
                if (r.length) return r.unshift(e), r
            }
            return []
        }

        class me {
            constructor(t, e) {
                this.value = t, this.children = e
            }

            toString() {
                return `TreeNode(${this.value})`
            }
        }

        function ge(t) {
            const e = {};
            return t && t.children.forEach(t => e[t.value.outlet] = t), e
        }

        class ye extends de {
            constructor(t, e) {
                super(t), this.snapshot = e, Ce(this, t)
            }

            toString() {
                return this.snapshot.toString()
            }
        }

        function be(t, e) {
            const n = function (t, e) {
                    const n = new we([], {}, {}, "", {}, It, e, null, t.root, -1, {});
                    return new Se("", new me(n, []))
                }(t, e), r = new c([new Wt("", {})]), s = new c({}), i = new c({}), o = new c({}), a = new c(""),
                l = new _e(r, s, o, a, i, It, e, n.root);
            return l.snapshot = n.root, new ye(new me(l, []), n)
        }

        class _e {
            constructor(t, e, n, r, s, i, o, a) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this._futureSnapshot = a
            }

            get routeConfig() {
                return this._futureSnapshot.routeConfig
            }

            get root() {
                return this._routerState.root
            }

            get parent() {
                return this._routerState.parent(this)
            }

            get firstChild() {
                return this._routerState.firstChild(this)
            }

            get children() {
                return this._routerState.children(this)
            }

            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }

            get paramMap() {
                return this._paramMap || (this._paramMap = this.params.pipe(Object(A.a)(t => Pt(t)))), this._paramMap
            }

            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(A.a)(t => Pt(t)))), this._queryParamMap
            }

            toString() {
                return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
            }
        }

        function ve(t, e = "emptyOnly") {
            const n = t.pathFromRoot;
            let r = 0;
            if ("always" !== e) for (r = n.length - 1; r >= 1;) {
                const t = n[r], e = n[r - 1];
                if (t.routeConfig && "" === t.routeConfig.path) r--; else {
                    if (e.component) break;
                    r--
                }
            }
            return function (t) {
                return t.reduce((t, e) => ({
                    params: Object.assign(Object.assign({}, t.params), e.params),
                    data: Object.assign(Object.assign({}, t.data), e.data),
                    resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
                }), {params: {}, data: {}, resolve: {}})
            }(n.slice(r))
        }

        class we {
            constructor(t, e, n, r, s, i, o, a, l, c, u) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = c, this._resolve = u
            }

            get root() {
                return this._routerState.root
            }

            get parent() {
                return this._routerState.parent(this)
            }

            get firstChild() {
                return this._routerState.firstChild(this)
            }

            get children() {
                return this._routerState.children(this)
            }

            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }

            get paramMap() {
                return this._paramMap || (this._paramMap = Pt(this.params)), this._paramMap
            }

            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = Pt(this.queryParams)), this._queryParamMap
            }

            toString() {
                return `Route(url:'${this.url.map(t => t.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
            }
        }

        class Se extends de {
            constructor(t, e) {
                super(e), this.url = t, Ce(this, e)
            }

            toString() {
                return Te(this._root)
            }
        }

        function Ce(t, e) {
            e.value._routerState = t, e.children.forEach(e => Ce(t, e))
        }

        function Te(t) {
            const e = t.children.length > 0 ? ` { ${t.children.map(Te).join(", ")} } ` : "";
            return `${t.value}${e}`
        }

        function Ee(t) {
            if (t.snapshot) {
                const e = t.snapshot, n = t._futureSnapshot;
                t.snapshot = n, Ft(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Ft(e.params, n.params) || t.params.next(n.params), function (t, e) {
                    if (t.length !== e.length) return !1;
                    for (let n = 0; n < t.length; ++n) if (!Ft(t[n], e[n])) return !1;
                    return !0
                }(e.url, n.url) || t.url.next(n.url), Ft(e.data, n.data) || t.data.next(n.data)
            } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
        }

        function Oe(t, e) {
            var n, r;
            return Ft(t.params, e.params) && Qt(n = t.url, r = e.url) && n.every((t, e) => Ft(t.parameters, r[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || Oe(t.parent, e.parent))
        }

        function xe(t, e, n) {
            if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
                const r = n.value;
                r._futureSnapshot = e.value;
                const s = function (t, e, n) {
                    return e.children.map(e => {
                        for (const r of n.children) if (t.shouldReuseRoute(e.value, r.value.snapshot)) return xe(t, e, r);
                        return xe(t, e)
                    })
                }(t, e, n);
                return new me(r, s)
            }
            {
                if (t.shouldAttach(e.value)) {
                    const n = t.retrieve(e.value);
                    if (null !== n) {
                        const t = n.route;
                        return ke(e, t), t
                    }
                }
                const n = new _e(new c((r = e.value).url), new c(r.params), new c(r.queryParams), new c(r.fragment), new c(r.data), r.outlet, r.component, r),
                    s = e.children.map(e => xe(t, e));
                return new me(n, s)
            }
            var r
        }

        function ke(t, e) {
            if (t.value.routeConfig !== e.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
            if (t.children.length !== e.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
            e.value._futureSnapshot = t.value;
            for (let n = 0; n < t.children.length; ++n) ke(t.children[n], e.children[n])
        }

        function Ae(t) {
            return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        }

        function je(t) {
            return "object" == typeof t && null != t && t.outlets
        }

        function Ie(t, e, n, r, s) {
            let i = {};
            return r && Ut(r, (t, e) => {
                i[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`
            }), new Gt(n.root === t ? e : Re(n.root, t, e), i, s)
        }

        function Re(t, e, n) {
            const r = {};
            return Ut(t.children, (t, s) => {
                r[s] = t === e ? n : Re(t, e, n)
            }), new Kt(t.segments, r)
        }

        class Pe {
            constructor(t, e, n) {
                if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Ae(n[0])) throw new Error("Root segment cannot have matrix parameters");
                const r = n.find(je);
                if (r && r !== Ht(n)) throw new Error("{outlets:{}} has to be the last command")
            }

            toRoot() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
        }

        class De {
            constructor(t, e, n) {
                this.segmentGroup = t, this.processChildren = e, this.index = n
            }
        }

        function Ne(t, e, n) {
            if (t || (t = new Kt([], {})), 0 === t.segments.length && t.hasChildren()) return Fe(t, e, n);
            const r = function (t, e, n) {
                let r = 0, s = e;
                const i = {match: !1, pathIndex: 0, commandIndex: 0};
                for (; s < t.segments.length;) {
                    if (r >= n.length) return i;
                    const e = t.segments[s], o = n[r];
                    if (je(o)) break;
                    const a = `${o}`, l = r < n.length - 1 ? n[r + 1] : null;
                    if (s > 0 && void 0 === a) break;
                    if (a && l && "object" == typeof l && void 0 === l.outlets) {
                        if (!Ue(a, l, e)) return i;
                        r += 2
                    } else {
                        if (!Ue(a, {}, e)) return i;
                        r++
                    }
                    s++
                }
                return {match: !0, pathIndex: s, commandIndex: r}
            }(t, e, n), s = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < t.segments.length) {
                const e = new Kt(t.segments.slice(0, r.pathIndex), {});
                return e.children.primary = new Kt(t.segments.slice(r.pathIndex), t.children), Fe(e, 0, s)
            }
            return r.match && 0 === s.length ? new Kt(t.segments, {}) : r.match && !t.hasChildren() ? Le(t, e, n) : r.match ? Fe(t, 0, s) : Le(t, e, n)
        }

        function Fe(t, e, n) {
            if (0 === n.length) return new Kt(t.segments, {});
            {
                const r = function (t) {
                    return je(t[0]) ? t[0].outlets : {[It]: t}
                }(n), s = {};
                return Ut(r, (n, r) => {
                    "string" == typeof n && (n = [n]), null !== n && (s[r] = Ne(t.children[r], e, n))
                }), Ut(t.children, (t, e) => {
                    void 0 === r[e] && (s[e] = t)
                }), new Kt(t.segments, s)
            }
        }

        function Le(t, e, n) {
            const r = t.segments.slice(0, e);
            let s = 0;
            for (; s < n.length;) {
                const i = n[s];
                if (je(i)) {
                    const t = Me(i.outlets);
                    return new Kt(r, t)
                }
                if (0 === s && Ae(n[0])) {
                    r.push(new Wt(t.segments[e].path, He(n[0]))), s++;
                    continue
                }
                const o = je(i) ? i.outlets.primary : `${i}`, a = s < n.length - 1 ? n[s + 1] : null;
                o && a && Ae(a) ? (r.push(new Wt(o, He(a))), s += 2) : (r.push(new Wt(o, {})), s++)
            }
            return new Kt(r, {})
        }

        function Me(t) {
            const e = {};
            return Ut(t, (t, n) => {
                "string" == typeof t && (t = [t]), null !== t && (e[n] = Le(new Kt([], {}), 0, t))
            }), e
        }

        function He(t) {
            const e = {};
            return Ut(t, (t, n) => e[n] = `${t}`), e
        }

        function Ue(t, e, n) {
            return t == n.path && Ft(e, n.parameters)
        }

        class qe {
            constructor(t, e, n, r) {
                this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
            }

            activate(t) {
                const e = this.futureState._root, n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(e, n, t), Ee(this.futureState.root), this.activateChildRoutes(e, n, t)
            }

            deactivateChildRoutes(t, e, n) {
                const r = ge(e);
                t.children.forEach(t => {
                    const e = t.value.outlet;
                    this.deactivateRoutes(t, r[e], n), delete r[e]
                }), Ut(r, (t, e) => {
                    this.deactivateRouteAndItsChildren(t, n)
                })
            }

            deactivateRoutes(t, e, n) {
                const r = t.value, s = e ? e.value : null;
                if (r === s) if (r.component) {
                    const s = n.getContext(r.outlet);
                    s && this.deactivateChildRoutes(t, e, s.children)
                } else this.deactivateChildRoutes(t, e, n); else s && this.deactivateRouteAndItsChildren(e, n)
            }

            deactivateRouteAndItsChildren(t, e) {
                this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
            }

            detachAndStoreRouteSubtree(t, e) {
                const n = e.getContext(t.value.outlet);
                if (n && n.outlet) {
                    const e = n.outlet.detach(), r = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {componentRef: e, route: t, contexts: r})
                }
            }

            deactivateRouteAndOutlet(t, e) {
                const n = e.getContext(t.value.outlet), r = n && t.value.component ? n.children : e, s = ge(t);
                for (const i of Object.keys(s)) this.deactivateRouteAndItsChildren(s[i], r);
                n && n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated(), n.attachRef = null, n.resolver = null, n.route = null)
            }

            activateChildRoutes(t, e, n) {
                const r = ge(e);
                t.children.forEach(t => {
                    this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new At(t.value.snapshot))
                }), t.children.length && this.forwardEvent(new xt(t.value.snapshot))
            }

            activateRoutes(t, e, n) {
                const r = t.value, s = e ? e.value : null;
                if (Ee(r), r === s) if (r.component) {
                    const s = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(t, e, s.children)
                } else this.activateChildRoutes(t, e, n); else if (r.component) {
                    const e = n.getOrCreateContext(r.outlet);
                    if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                        const t = this.routeReuseStrategy.retrieve(r.snapshot);
                        this.routeReuseStrategy.store(r.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), $e(t.route)
                    } else {
                        const n = function (t) {
                            for (let e = t.parent; e; e = e.parent) {
                                const t = e.routeConfig;
                                if (t && t._loadedConfig) return t._loadedConfig;
                                if (t && t.component) return null
                            }
                            return null
                        }(r.snapshot), s = n ? n.module.componentFactoryResolver : null;
                        e.attachRef = null, e.route = r, e.resolver = s, e.outlet && e.outlet.activateWith(r, s), this.activateChildRoutes(t, null, e.children)
                    }
                } else this.activateChildRoutes(t, null, n)
            }
        }

        function $e(t) {
            Ee(t.value), t.children.forEach($e)
        }

        class ze {
            constructor(t, e) {
                this.routes = t, this.module = e
            }
        }

        function Be(t) {
            return "function" == typeof t
        }

        function Ve(t) {
            return t instanceof Gt
        }

        const Ge = Symbol("INITIAL_VALUE");

        function Ke() {
            return I(t => function (...t) {
                let e, n;
                return Object(u.a)(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && Object(h.a)(t[0]) && (t = t[0]), Object(b.a)(t, n).lift(new v(e))
            }(t.map(t => t.pipe(N(1), function (...t) {
                const e = t[t.length - 1];
                return Object(u.a)(e) ? (t.pop(), n => T(t, n, e)) : e => T(t, e)
            }(Ge)))).pipe(M((t, e) => {
                let n = !1;
                return e.reduce((t, r, s) => {
                    if (t !== Ge) return t;
                    if (r === Ge && (n = !0), !n) {
                        if (!1 === r) return r;
                        if (s === e.length - 1 || Ve(r)) return r
                    }
                    return t
                }, t)
            }, Ge), Object(q.a)(t => t !== Ge), Object(A.a)(t => Ve(t) ? t : !0 === t), N(1)))
        }

        let We = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275cmp = s.Eb({
                type: t,
                selectors: [["ng-component"]],
                decls: 1,
                vars: 0,
                template: function (t, e) {
                    1 & t && s.Lb(0, "router-outlet")
                },
                directives: function () {
                    return [Vn]
                },
                encapsulation: 2
            }), t
        })();

        function Qe(t, e = "") {
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                Ze(r, Ye(e, r))
            }
        }

        function Ze(t, e) {
            t.children && Qe(t.children, e)
        }

        function Ye(t, e) {
            return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }

        function Xe(t) {
            const e = t.children && t.children.map(Xe),
                n = e ? Object.assign(Object.assign({}, t), {children: e}) : Object.assign({}, t);
            return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== It && (n.component = We), n
        }

        function Je(t) {
            return t.outlet || It
        }

        function tn(t, e) {
            const n = t.filter(t => Je(t) === e);
            return n.push(...t.filter(t => Je(t) !== e)), n
        }

        const en = {matched: !1, consumedSegments: [], lastChild: 0, parameters: {}, positionalParamSegments: {}};

        function nn(t, e, n) {
            var r;
            if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? Object.assign({}, en) : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
            };
            const s = (e.matcher || Nt)(n, t, e);
            if (!s) return Object.assign({}, en);
            const i = {};
            Ut(s.posParams, (t, e) => {
                i[e] = t.path
            });
            const o = s.consumed.length > 0 ? Object.assign(Object.assign({}, i), s.consumed[s.consumed.length - 1].parameters) : i;
            return {
                matched: !0,
                consumedSegments: s.consumed,
                lastChild: s.consumed.length,
                parameters: o,
                positionalParamSegments: null !== (r = s.posParams) && void 0 !== r ? r : {}
            }
        }

        function rn(t, e, n, r, s = "corrected") {
            if (n.length > 0 && function (t, e, n) {
                return n.some(n => sn(t, e, n) && Je(n) !== It)
            }(t, n, r)) {
                const s = new Kt(e, function (t, e, n, r) {
                    const s = {};
                    s.primary = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                    for (const i of n) if ("" === i.path && Je(i) !== It) {
                        const n = new Kt([], {});
                        n._sourceSegment = t, n._segmentIndexShift = e.length, s[Je(i)] = n
                    }
                    return s
                }(t, e, r, new Kt(n, t.children)));
                return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: []}
            }
            if (0 === n.length && function (t, e, n) {
                return n.some(n => sn(t, e, n))
            }(t, n, r)) {
                const i = new Kt(t.segments, function (t, e, n, r, s, i) {
                    const o = {};
                    for (const a of r) if (sn(t, n, a) && !s[Je(a)]) {
                        const n = new Kt([], {});
                        n._sourceSegment = t, n._segmentIndexShift = "legacy" === i ? t.segments.length : e.length, o[Je(a)] = n
                    }
                    return Object.assign(Object.assign({}, s), o)
                }(t, e, n, r, t.children, s));
                return i._sourceSegment = t, i._segmentIndexShift = e.length, {segmentGroup: i, slicedSegments: n}
            }
            const i = new Kt(t.segments, t.children);
            return i._sourceSegment = t, i._segmentIndexShift = e.length, {segmentGroup: i, slicedSegments: n}
        }

        function sn(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path
        }

        function on(t, e, n, r) {
            return !!(Je(t) === r || r !== It && sn(e, n, t)) && ("**" === t.path || nn(e, t, n).matched)
        }

        function an(t, e, n) {
            return 0 === e.length && !t.children[n]
        }

        class ln {
            constructor(t) {
                this.segmentGroup = t || null
            }
        }

        class cn {
            constructor(t) {
                this.urlTree = t
            }
        }

        function un(t) {
            return new g.a(e => e.error(new ln(t)))
        }

        function hn(t) {
            return new g.a(e => e.error(new cn(t)))
        }

        function dn(t) {
            return new g.a(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
        }

        class fn {
            constructor(t, e, n, r, i) {
                this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = i, this.allowRedirects = !0, this.ngModule = t.get(s.y)
            }

            apply() {
                const t = rn(this.urlTree.root, [], [], this.config).segmentGroup, e = new Kt(t.segments, t.children);
                return this.expandSegmentGroup(this.ngModule, this.config, e, It).pipe(Object(A.a)(t => this.createUrlTree(pn(t), this.urlTree.queryParams, this.urlTree.fragment))).pipe($(t => {
                    if (t instanceof cn) return this.allowRedirects = !1, this.match(t.urlTree);
                    if (t instanceof ln) throw this.noMatchError(t);
                    throw t
                }))
            }

            match(t) {
                return this.expandSegmentGroup(this.ngModule, this.config, t.root, It).pipe(Object(A.a)(e => this.createUrlTree(pn(e), t.queryParams, t.fragment))).pipe($(t => {
                    if (t instanceof ln) throw this.noMatchError(t);
                    throw t
                }))
            }

            noMatchError(t) {
                return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
            }

            createUrlTree(t, e, n) {
                const r = t.segments.length > 0 ? new Kt([], {[It]: t}) : t;
                return new Gt(r, e, n)
            }

            expandSegmentGroup(t, e, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(Object(A.a)(t => new Kt([], t))) : this.expandSegment(t, n, e, n.segments, r, !0)
            }

            expandChildren(t, e, n) {
                const r = [];
                for (const s of Object.keys(n.children)) "primary" === s ? r.unshift(s) : r.push(s);
                return Object(i.a)(r).pipe(Object(V.a)(r => {
                    const s = n.children[r], i = tn(e, r);
                    return this.expandSegmentGroup(t, i, s, r).pipe(Object(A.a)(t => ({segment: t, outlet: r})))
                }), M((t, e) => (t[e.outlet] = e.segment, t), {}), function (t, e) {
                    const n = arguments.length >= 2;
                    return r => r.pipe(t ? Object(q.a)((e, n) => t(e, n, r)) : nt.a, G(1), n ? J(e) : Q(() => new S))
                }())
            }

            expandSegment(t, e, n, r, s, a) {
                return Object(i.a)(n).pipe(Object(V.a)(i => this.expandSegmentAgainstRoute(t, e, n, i, r, s, a).pipe($(t => {
                    if (t instanceof ln) return Object(o.a)(null);
                    throw t
                }))), rt(t => !!t), $((t, n) => {
                    if (t instanceof S || "EmptyError" === t.name) {
                        if (an(e, r, s)) return Object(o.a)(new Kt([], {}));
                        throw new ln(e)
                    }
                    throw t
                }))
            }

            expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
                return on(r, e, s, i) ? void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, s, i) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) : un(e) : un(e)
            }

            expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
                return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            }

            expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
                const s = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/") ? hn(s) : this.lineralizeSegments(n, s).pipe(Object(st.a)(n => {
                    const s = new Kt(n, {});
                    return this.expandSegment(t, s, e, n, r, !1)
                }))
            }

            expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
                const {matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c} = nn(e, r, s);
                if (!o) return un(e);
                const u = this.applyRedirectCommands(a, r.redirectTo, c);
                return r.redirectTo.startsWith("/") ? hn(u) : this.lineralizeSegments(r, u).pipe(Object(st.a)(r => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)))
            }

            matchSegmentAgainstRoute(t, e, n, r, s) {
                if ("**" === n.path) return n.loadChildren ? (n._loadedConfig ? Object(o.a)(n._loadedConfig) : this.configLoader.load(t.injector, n)).pipe(Object(A.a)(t => (n._loadedConfig = t, new Kt(r, {})))) : Object(o.a)(new Kt(r, {}));
                const {matched: i, consumedSegments: a, lastChild: l} = nn(e, n, r);
                if (!i) return un(e);
                const c = r.slice(l);
                return this.getChildConfig(t, n, r).pipe(Object(st.a)(t => {
                    const r = t.module, i = t.routes, {segmentGroup: l, slicedSegments: u} = rn(e, a, c, i),
                        h = new Kt(l.segments, l.children);
                    if (0 === u.length && h.hasChildren()) return this.expandChildren(r, i, h).pipe(Object(A.a)(t => new Kt(a, t)));
                    if (0 === i.length && 0 === u.length) return Object(o.a)(new Kt(a, {}));
                    const d = Je(n) === s;
                    return this.expandSegment(r, h, i, u, d ? It : s, !0).pipe(Object(A.a)(t => new Kt(a.concat(t.segments), t.children)))
                }))
            }

            getChildConfig(t, e, n) {
                return e.children ? Object(o.a)(new ze(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Object(o.a)(e._loadedConfig) : this.runCanLoadGuards(t.injector, e, n).pipe(Object(st.a)(n => n ? this.configLoader.load(t.injector, e).pipe(Object(A.a)(t => (e._loadedConfig = t, t))) : function (t) {
                    return new g.a(e => e.error(Dt(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
                }(e))) : Object(o.a)(new ze([], t))
            }

            runCanLoadGuards(t, e, n) {
                const r = e.canLoad;
                if (!r || 0 === r.length) return Object(o.a)(!0);
                const s = r.map(r => {
                    const s = t.get(r);
                    let i;
                    if (function (t) {
                        return t && Be(t.canLoad)
                    }(s)) i = s.canLoad(e, n); else {
                        if (!Be(s)) throw new Error("Invalid CanLoad guard");
                        i = s(e, n)
                    }
                    return qt(i)
                });
                return Object(o.a)(s).pipe(Ke(), at(t => {
                    if (!Ve(t)) return;
                    const e = Dt(`Redirecting to "${this.urlSerializer.serialize(t)}"`);
                    throw e.url = t, e
                }), Object(A.a)(t => !0 === t))
            }

            lineralizeSegments(t, e) {
                let n = [], r = e.root;
                for (; ;) {
                    if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Object(o.a)(n);
                    if (r.numberOfChildren > 1 || !r.children.primary) return dn(t.redirectTo);
                    r = r.children.primary
                }
            }

            applyRedirectCommands(t, e, n) {
                return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
            }

            applyRedirectCreatreUrlTree(t, e, n, r) {
                const s = this.createSegmentGroup(t, e.root, n, r);
                return new Gt(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
            }

            createQueryParams(t, e) {
                const n = {};
                return Ut(t, (t, r) => {
                    if ("string" == typeof t && t.startsWith(":")) {
                        const s = t.substring(1);
                        n[r] = e[s]
                    } else n[r] = t
                }), n
            }

            createSegmentGroup(t, e, n, r) {
                const s = this.createSegments(t, e.segments, n, r);
                let i = {};
                return Ut(e.children, (e, s) => {
                    i[s] = this.createSegmentGroup(t, e, n, r)
                }), new Kt(s, i)
            }

            createSegments(t, e, n, r) {
                return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, r) : this.findOrReturn(e, n))
            }

            findPosParam(t, e, n) {
                const r = n[e.path.substring(1)];
                if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
                return r
            }

            findOrReturn(t, e) {
                let n = 0;
                for (const r of e) {
                    if (r.path === t.path) return e.splice(n), r;
                    n++
                }
                return t
            }
        }

        function pn(t) {
            const e = {};
            for (const n of Object.keys(t.children)) {
                const r = pn(t.children[n]);
                (r.segments.length > 0 || r.hasChildren()) && (e[n] = r)
            }
            return function (t) {
                if (1 === t.numberOfChildren && t.children.primary) {
                    const e = t.children.primary;
                    return new Kt(t.segments.concat(e.segments), e.children)
                }
                return t
            }(new Kt(t.segments, e))
        }

        class mn {
            constructor(t) {
                this.path = t, this.route = this.path[this.path.length - 1]
            }
        }

        class gn {
            constructor(t, e) {
                this.component = t, this.route = e
            }
        }

        function yn(t, e, n) {
            const r = t._root;
            return _n(r, e ? e._root : null, n, [r.value])
        }

        function bn(t, e, n) {
            const r = function (t) {
                if (!t) return null;
                for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig
                }
                return null
            }(e);
            return (r ? r.module.injector : n).get(t)
        }

        function _n(t, e, n, r, s = {canDeactivateChecks: [], canActivateChecks: []}) {
            const i = ge(e);
            return t.children.forEach(t => {
                !function (t, e, n, r, s = {canDeactivateChecks: [], canActivateChecks: []}) {
                    const i = t.value, o = e ? e.value : null, a = n ? n.getContext(t.value.outlet) : null;
                    if (o && i.routeConfig === o.routeConfig) {
                        const l = function (t, e, n) {
                            if ("function" == typeof n) return n(t, e);
                            switch (n) {
                                case"pathParamsChange":
                                    return !Qt(t.url, e.url);
                                case"pathParamsOrQueryParamsChange":
                                    return !Qt(t.url, e.url) || !Ft(t.queryParams, e.queryParams);
                                case"always":
                                    return !0;
                                case"paramsOrQueryParamsChange":
                                    return !Oe(t, e) || !Ft(t.queryParams, e.queryParams);
                                case"paramsChange":
                                default:
                                    return !Oe(t, e)
                            }
                        }(o, i, i.routeConfig.runGuardsAndResolvers);
                        l ? s.canActivateChecks.push(new mn(r)) : (i.data = o.data, i._resolvedData = o._resolvedData), _n(t, e, i.component ? a ? a.children : null : n, r, s), l && a && a.outlet && a.outlet.isActivated && s.canDeactivateChecks.push(new gn(a.outlet.component, o))
                    } else o && vn(e, a, s), s.canActivateChecks.push(new mn(r)), _n(t, null, i.component ? a ? a.children : null : n, r, s)
                }(t, i[t.value.outlet], n, r.concat([t.value]), s), delete i[t.value.outlet]
            }), Ut(i, (t, e) => vn(t, n.getContext(e), s)), s
        }

        function vn(t, e, n) {
            const r = ge(t), s = t.value;
            Ut(r, (t, r) => {
                vn(t, s.component ? e ? e.children.getContext(r) : null : e, n)
            }), n.canDeactivateChecks.push(new gn(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s))
        }

        class wn {
        }

        function Sn(t) {
            return new g.a(e => e.error(t))
        }

        class Cn {
            constructor(t, e, n, r, s, i) {
                this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = s, this.relativeLinkResolution = i
            }

            recognize() {
                const t = rn(this.urlTree.root, [], [], this.config.filter(t => void 0 === t.redirectTo), this.relativeLinkResolution).segmentGroup,
                    e = this.processSegmentGroup(this.config, t, It);
                if (null === e) return null;
                const n = new we([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, It, this.rootComponentType, null, this.urlTree.root, -1, {}),
                    r = new me(n, e), s = new Se(this.url, r);
                return this.inheritParamsAndData(s._root), s
            }

            inheritParamsAndData(t) {
                const e = t.value, n = ve(e, this.paramsInheritanceStrategy);
                e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
            }

            processSegmentGroup(t, e, n) {
                return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
            }

            processChildren(t, e) {
                const n = [];
                for (const s of Object.keys(e.children)) {
                    const r = e.children[s], i = tn(t, s), o = this.processSegmentGroup(i, r, s);
                    if (null === o) return null;
                    n.push(...o)
                }
                const r = En(n);
                return r.sort((t, e) => t.value.outlet === It ? -1 : e.value.outlet === It ? 1 : t.value.outlet.localeCompare(e.value.outlet)), r
            }

            processSegment(t, e, n, r) {
                for (const s of t) {
                    const t = this.processSegmentAgainstRoute(s, e, n, r);
                    if (null !== t) return t
                }
                return an(e, n, r) ? [] : null
            }

            processSegmentAgainstRoute(t, e, n, r) {
                if (t.redirectTo || !on(t, e, n, r)) return null;
                let s, i = [], o = [];
                if ("**" === t.path) {
                    const r = n.length > 0 ? Ht(n).parameters : {};
                    s = new we(n, r, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, kn(t), Je(t), t.component, t, On(e), xn(e) + n.length, An(t))
                } else {
                    const r = nn(e, t, n);
                    if (!r.matched) return null;
                    i = r.consumedSegments, o = n.slice(r.lastChild), s = new we(i, r.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, kn(t), Je(t), t.component, t, On(e), xn(e) + i.length, An(t))
                }
                const a = function (t) {
                    return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                }(t), {
                    segmentGroup: l,
                    slicedSegments: c
                } = rn(e, i, o, a.filter(t => void 0 === t.redirectTo), this.relativeLinkResolution);
                if (0 === c.length && l.hasChildren()) {
                    const t = this.processChildren(a, l);
                    return null === t ? null : [new me(s, t)]
                }
                if (0 === a.length && 0 === c.length) return [new me(s, [])];
                const u = Je(t) === r, h = this.processSegment(a, l, c, u ? It : r);
                return null === h ? null : [new me(s, h)]
            }
        }

        function Tn(t) {
            const e = t.value.routeConfig;
            return e && "" === e.path && void 0 === e.redirectTo
        }

        function En(t) {
            const e = [], n = new Set;
            for (const r of t) {
                if (!Tn(r)) {
                    e.push(r);
                    continue
                }
                const t = e.find(t => r.value.routeConfig === t.value.routeConfig);
                void 0 !== t ? (t.children.push(...r.children), n.add(t)) : e.push(r)
            }
            for (const r of n) {
                const t = En(r.children);
                e.push(new me(r.value, t))
            }
            return e.filter(t => !n.has(t))
        }

        function On(t) {
            let e = t;
            for (; e._sourceSegment;) e = e._sourceSegment;
            return e
        }

        function xn(t) {
            let e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0;
            for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
            return n - 1
        }

        function kn(t) {
            return t.data || {}
        }

        function An(t) {
            return t.resolve || {}
        }

        function jn(t) {
            return I(e => {
                const n = t(e);
                return n ? Object(i.a)(n).pipe(Object(A.a)(() => e)) : Object(o.a)(e)
            })
        }

        class In extends class {
            shouldDetach(t) {
                return !1
            }

            store(t, e) {
            }

            shouldAttach(t) {
                return !1
            }

            retrieve(t) {
                return null
            }

            shouldReuseRoute(t, e) {
                return t.routeConfig === e.routeConfig
            }
        } {
        }

        const Rn = new s.r("ROUTES");

        class Pn {
            constructor(t, e, n, r) {
                this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
            }

            load(t, e) {
                if (e._loader$) return e._loader$;
                this.onLoadStartListener && this.onLoadStartListener(e);
                const n = this.loadModuleFactory(e.loadChildren).pipe(Object(A.a)(n => {
                    this.onLoadEndListener && this.onLoadEndListener(e);
                    const r = n.create(t);
                    return new ze(Mt(r.injector.get(Rn, void 0, s.q.Self | s.q.Optional)).map(Xe), r)
                }), $(t => {
                    throw e._loader$ = void 0, t
                }));
                return e._loader$ = new k.a(n, () => new a.a).pipe(Object(ut.a)()), e._loader$
            }

            loadModuleFactory(t) {
                return "string" == typeof t ? Object(i.a)(this.loader.load(t)) : qt(t()).pipe(Object(st.a)(t => t instanceof s.w ? Object(o.a)(t) : Object(i.a)(this.compiler.compileModuleAsync(t))))
            }
        }

        class Dn {
            constructor() {
                this.outlet = null, this.route = null, this.resolver = null, this.children = new Nn, this.attachRef = null
            }
        }

        class Nn {
            constructor() {
                this.contexts = new Map
            }

            onChildOutletCreated(t, e) {
                const n = this.getOrCreateContext(t);
                n.outlet = e, this.contexts.set(t, n)
            }

            onChildOutletDestroyed(t) {
                const e = this.getContext(t);
                e && (e.outlet = null)
            }

            onOutletDeactivated() {
                const t = this.contexts;
                return this.contexts = new Map, t
            }

            onOutletReAttached(t) {
                this.contexts = t
            }

            getOrCreateContext(t) {
                let e = this.getContext(t);
                return e || (e = new Dn, this.contexts.set(t, e)), e
            }

            getContext(t) {
                return this.contexts.get(t) || null
            }
        }

        class Fn {
            shouldProcessUrl(t) {
                return !0
            }

            extract(t) {
                return t
            }

            merge(t, e) {
                return t
            }
        }

        function Ln(t) {
            throw t
        }

        function Mn(t, e, n) {
            return e.parse("/")
        }

        function Hn(t, e) {
            return Object(o.a)(null)
        }

        let Un = (() => {
            class t {
                constructor(t, e, n, r, i, o, l, u) {
                    this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.lastLocationChangeInfo = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new a.a, this.errorHandler = Ln, this.malformedUriErrorHandler = Mn, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                        beforePreactivation: Hn,
                        afterPreactivation: Hn
                    }, this.urlHandlingStrategy = new Fn, this.routeReuseStrategy = new In, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.ngModule = i.get(s.y), this.console = i.get(s.W);
                    const h = i.get(s.A);
                    this.isNgZoneEnabled = h instanceof s.A && s.A.isInAngularZone(), this.resetConfig(u), this.currentUrlTree = new Gt(new Kt([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Pn(o, l, t => this.triggerEvent(new Tt(t)), t => this.triggerEvent(new Et(t))), this.routerState = be(this.currentUrlTree, this.rootComponentType), this.transitions = new c({
                        id: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {canActivateChecks: [], canDeactivateChecks: []},
                        guardsResult: null
                    }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                }

                setupNavigations(t) {
                    const e = this.events;
                    return t.pipe(Object(q.a)(t => 0 !== t.id), Object(A.a)(t => Object.assign(Object.assign({}, t), {extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)})), I(t => {
                        let n = !1, r = !1;
                        return Object(o.a)(t).pipe(at(t => {
                            this.currentNavigation = {
                                id: t.id,
                                initialUrl: t.currentRawUrl,
                                extractedUrl: t.extractedUrl,
                                trigger: t.source,
                                extras: t.extras,
                                previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {previousNavigation: null}) : null
                            }
                        }), I(t => {
                            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Object(o.a)(t).pipe(I(t => {
                                const n = this.transitions.getValue();
                                return e.next(new mt(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? E : Promise.resolve(t)
                            }), (r = this.ngModule.injector, s = this.configLoader, i = this.urlSerializer, a = this.config, I(t => function (t, e, n, r, s) {
                                return new fn(t, e, n, r, s).apply()
                            }(r, s, i, t.extractedUrl, a).pipe(Object(A.a)(e => Object.assign(Object.assign({}, t), {urlAfterRedirects: e}))))), at(t => {
                                this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {finalUrl: t.urlAfterRedirects})
                            }), function (t, e, n, r, s) {
                                return Object(st.a)(i => function (t, e, n, r, s = "emptyOnly", i = "legacy") {
                                    try {
                                        const a = new Cn(t, e, n, r, s, i).recognize();
                                        return null === a ? Sn(new wn) : Object(o.a)(a)
                                    } catch (a) {
                                        return Sn(a)
                                    }
                                }(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(Object(A.a)(t => Object.assign(Object.assign({}, i), {targetSnapshot: t}))))
                            }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), at(t => {
                                "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects);
                                const n = new _t(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.next(n)
                            }));
                            var r, s, i, a;
                            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                const {id: n, extractedUrl: r, source: s, restoredState: i, extras: a} = t,
                                    l = new mt(n, this.serializeUrl(r), s, i);
                                e.next(l);
                                const c = be(r, this.rootComponentType).snapshot;
                                return Object(o.a)(Object.assign(Object.assign({}, t), {
                                    targetSnapshot: c,
                                    urlAfterRedirects: r,
                                    extras: Object.assign(Object.assign({}, a), {
                                        skipLocationChange: !1,
                                        replaceUrl: !1
                                    })
                                }))
                            }
                            return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), E
                        }), jn(t => {
                            const {
                                targetSnapshot: e,
                                id: n,
                                extractedUrl: r,
                                rawUrl: s,
                                extras: {skipLocationChange: i, replaceUrl: o}
                            } = t;
                            return this.hooks.beforePreactivation(e, {
                                navigationId: n,
                                appliedUrlTree: r,
                                rawUrlTree: s,
                                skipLocationChange: !!i,
                                replaceUrl: !!o
                            })
                        }), at(t => {
                            const e = new vt(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            this.triggerEvent(e)
                        }), Object(A.a)(t => Object.assign(Object.assign({}, t), {guards: yn(t.targetSnapshot, t.currentSnapshot, this.rootContexts)})), function (t, e) {
                            return Object(st.a)(n => {
                                const {
                                    targetSnapshot: r,
                                    currentSnapshot: s,
                                    guards: {canActivateChecks: a, canDeactivateChecks: l}
                                } = n;
                                return 0 === l.length && 0 === a.length ? Object(o.a)(Object.assign(Object.assign({}, n), {guardsResult: !0})) : function (t, e, n, r) {
                                    return Object(i.a)(t).pipe(Object(st.a)(t => function (t, e, n, r, s) {
                                        const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                        if (!i || 0 === i.length) return Object(o.a)(!0);
                                        const a = i.map(i => {
                                            const o = bn(i, e, s);
                                            let a;
                                            if (function (t) {
                                                return t && Be(t.canDeactivate)
                                            }(o)) a = qt(o.canDeactivate(t, e, n, r)); else {
                                                if (!Be(o)) throw new Error("Invalid CanDeactivate guard");
                                                a = qt(o(t, e, n, r))
                                            }
                                            return a.pipe(rt())
                                        });
                                        return Object(o.a)(a).pipe(Ke())
                                    }(t.component, t.route, n, e, r)), rt(t => !0 !== t, !0))
                                }(l, r, s, t).pipe(Object(st.a)(n => n && "boolean" == typeof n ? function (t, e, n, r) {
                                    return Object(i.a)(e).pipe(Object(V.a)(e => T(function (t, e) {
                                        return null !== t && e && e(new Ot(t)), Object(o.a)(!0)
                                    }(e.route.parent, r), function (t, e) {
                                        return null !== t && e && e(new kt(t)), Object(o.a)(!0)
                                    }(e.route, r), function (t, e, n) {
                                        const r = e[e.length - 1],
                                            s = e.slice(0, e.length - 1).reverse().map(t => function (t) {
                                                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                                                return e && 0 !== e.length ? {node: t, guards: e} : null
                                            }(t)).filter(t => null !== t).map(e => x(() => {
                                                const s = e.guards.map(s => {
                                                    const i = bn(s, e.node, n);
                                                    let o;
                                                    if (function (t) {
                                                        return t && Be(t.canActivateChild)
                                                    }(i)) o = qt(i.canActivateChild(r, t)); else {
                                                        if (!Be(i)) throw new Error("Invalid CanActivateChild guard");
                                                        o = qt(i(r, t))
                                                    }
                                                    return o.pipe(rt())
                                                });
                                                return Object(o.a)(s).pipe(Ke())
                                            }));
                                        return Object(o.a)(s).pipe(Ke())
                                    }(t, e.path, n), function (t, e, n) {
                                        const r = e.routeConfig ? e.routeConfig.canActivate : null;
                                        if (!r || 0 === r.length) return Object(o.a)(!0);
                                        const s = r.map(r => x(() => {
                                            const s = bn(r, e, n);
                                            let i;
                                            if (function (t) {
                                                return t && Be(t.canActivate)
                                            }(s)) i = qt(s.canActivate(e, t)); else {
                                                if (!Be(s)) throw new Error("Invalid CanActivate guard");
                                                i = qt(s(e, t))
                                            }
                                            return i.pipe(rt())
                                        }));
                                        return Object(o.a)(s).pipe(Ke())
                                    }(t, e.route, n))), rt(t => !0 !== t, !0))
                                }(r, a, t, e) : Object(o.a)(n)), Object(A.a)(t => Object.assign(Object.assign({}, n), {guardsResult: t})))
                            })
                        }(this.ngModule.injector, t => this.triggerEvent(t)), at(t => {
                            if (Ve(t.guardsResult)) {
                                const e = Dt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                                throw e.url = t.guardsResult, e
                            }
                            const e = new wt(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                            this.triggerEvent(e)
                        }), Object(q.a)(t => {
                            if (!t.guardsResult) {
                                this.resetUrlToCurrentUrlTree();
                                const n = new yt(t.id, this.serializeUrl(t.extractedUrl), "");
                                return e.next(n), t.resolve(!1), !1
                            }
                            return !0
                        }), jn(t => {
                            if (t.guards.canActivateChecks.length) return Object(o.a)(t).pipe(at(t => {
                                const e = new St(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                this.triggerEvent(e)
                            }), I(t => {
                                let n = !1;
                                return Object(o.a)(t).pipe((r = this.paramsInheritanceStrategy, s = this.ngModule.injector, Object(st.a)(t => {
                                    const {targetSnapshot: e, guards: {canActivateChecks: n}} = t;
                                    if (!n.length) return Object(o.a)(t);
                                    let a = 0;
                                    return Object(i.a)(n).pipe(Object(V.a)(t => function (t, e, n, r) {
                                        return function (t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Object(o.a)({});
                                            const a = {};
                                            return Object(i.a)(s).pipe(Object(st.a)(s => function (t, e, n, r) {
                                                const s = bn(t, e, r);
                                                return qt(s.resolve ? s.resolve(e, n) : s(e, n))
                                            }(t[s], e, n, r).pipe(at(t => {
                                                a[s] = t
                                            }))), G(1), Object(st.a)(() => Object.keys(a).length === s.length ? Object(o.a)(a) : E))
                                        }(t._resolve, t, e, r).pipe(Object(A.a)(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), ve(t, n).resolve), null)))
                                    }(t.route, e, r, s)), at(() => a++), G(1), Object(st.a)(e => a === n.length ? Object(o.a)(t) : E))
                                })), at({
                                    next: () => n = !0, complete: () => {
                                        if (!n) {
                                            const n = new yt(t.id, this.serializeUrl(t.extractedUrl), "At least one route resolver didn't emit any value.");
                                            e.next(n), t.resolve(!1)
                                        }
                                    }
                                }));
                                var r, s
                            }), at(t => {
                                const e = new Ct(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                this.triggerEvent(e)
                            }))
                        }), jn(t => {
                            const {
                                targetSnapshot: e,
                                id: n,
                                extractedUrl: r,
                                rawUrl: s,
                                extras: {skipLocationChange: i, replaceUrl: o}
                            } = t;
                            return this.hooks.afterPreactivation(e, {
                                navigationId: n,
                                appliedUrlTree: r,
                                rawUrlTree: s,
                                skipLocationChange: !!i,
                                replaceUrl: !!o
                            })
                        }), Object(A.a)(t => {
                            const e = function (t, e, n) {
                                const r = xe(t, e._root, n ? n._root : void 0);
                                return new ye(r, e)
                            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                            return Object.assign(Object.assign({}, t), {targetRouterState: e})
                        }), at(t => {
                            this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
                        }), (a = this.rootContexts, l = this.routeReuseStrategy, c = t => this.triggerEvent(t), Object(A.a)(t => (new qe(l, t.targetRouterState, t.currentRouterState, c).activate(a), t))), at({
                            next() {
                                n = !0
                            }, complete() {
                                n = !0
                            }
                        }), (s = () => {
                            if (!n && !r) {
                                this.resetUrlToCurrentUrlTree();
                                const n = new yt(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
                                e.next(n), t.resolve(!1)
                            }
                            this.currentNavigation = null
                        }, t => t.lift(new dt(s))), $(n => {
                            if (r = !0, (s = n) && s.ngNavigationCancelingError) {
                                const r = Ve(n.url);
                                r || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                                const s = new yt(t.id, this.serializeUrl(t.extractedUrl), n.message);
                                e.next(s), r ? setTimeout(() => {
                                    const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                                    this.scheduleNavigation(e, "imperative", null, {
                                        skipLocationChange: t.extras.skipLocationChange,
                                        replaceUrl: "eager" === this.urlUpdateStrategy
                                    }, {resolve: t.resolve, reject: t.reject, promise: t.promise})
                                }, 0) : t.resolve(!1)
                            } else {
                                this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                const r = new bt(t.id, this.serializeUrl(t.extractedUrl), n);
                                e.next(r);
                                try {
                                    t.resolve(this.errorHandler(n))
                                } catch (i) {
                                    t.reject(i)
                                }
                            }
                            var s;
                            return E
                        }));
                        var s, a, l, c
                    }))
                }

                resetRootComponentType(t) {
                    this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                }

                getTransition() {
                    const t = this.transitions.value;
                    return t.urlAfterRedirects = this.browserUrlTree, t
                }

                setTransition(t) {
                    this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
                }

                initialNavigation() {
                    this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
                }

                setUpLocationChangeListener() {
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => {
                        const e = this.extractLocationChangeInfoFromEvent(t);
                        this.shouldScheduleNavigation(this.lastLocationChangeInfo, e) && setTimeout(() => {
                            const {source: t, state: n, urlTree: r} = e, s = {replaceUrl: !0};
                            if (n) {
                                const t = Object.assign({}, n);
                                delete t.navigationId, 0 !== Object.keys(t).length && (s.state = t)
                            }
                            this.scheduleNavigation(r, t, n, s)
                        }, 0), this.lastLocationChangeInfo = e
                    }))
                }

                extractLocationChangeInfoFromEvent(t) {
                    var e;
                    return {
                        source: "popstate" === t.type ? "popstate" : "hashchange",
                        urlTree: this.parseUrl(t.url),
                        state: (null === (e = t.state) || void 0 === e ? void 0 : e.navigationId) ? t.state : null,
                        transitionId: this.getTransition().id
                    }
                }

                shouldScheduleNavigation(t, e) {
                    if (!t) return !0;
                    const n = e.urlTree.toString() === t.urlTree.toString();
                    return !(e.transitionId === t.transitionId && n && ("hashchange" === e.source && "popstate" === t.source || "popstate" === e.source && "hashchange" === t.source))
                }

                get url() {
                    return this.serializeUrl(this.currentUrlTree)
                }

                getCurrentNavigation() {
                    return this.currentNavigation
                }

                triggerEvent(t) {
                    this.events.next(t)
                }

                resetConfig(t) {
                    Qe(t), this.config = t.map(Xe), this.navigated = !1, this.lastSuccessfulId = -1
                }

                ngOnDestroy() {
                    this.dispose()
                }

                dispose() {
                    this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0
                }

                createUrlTree(t, e = {}) {
                    const {relativeTo: n, queryParams: r, fragment: s, queryParamsHandling: i, preserveFragment: o} = e,
                        a = n || this.routerState.root, l = o ? this.currentUrlTree.fragment : s;
                    let c = null;
                    switch (i) {
                        case"merge":
                            c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                            break;
                        case"preserve":
                            c = this.currentUrlTree.queryParams;
                            break;
                        default:
                            c = r || null
                    }
                    return null !== c && (c = this.removeEmptyProps(c)), function (t, e, n, r, s) {
                        if (0 === n.length) return Ie(e.root, e.root, e, r, s);
                        const i = function (t) {
                            if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Pe(!0, 0, t);
                            let e = 0, n = !1;
                            const r = t.reduce((t, r, s) => {
                                if ("object" == typeof r && null != r) {
                                    if (r.outlets) {
                                        const e = {};
                                        return Ut(r.outlets, (t, n) => {
                                            e[n] = "string" == typeof t ? t.split("/") : t
                                        }), [...t, {outlets: e}]
                                    }
                                    if (r.segmentPath) return [...t, r.segmentPath]
                                }
                                return "string" != typeof r ? [...t, r] : 0 === s ? (r.split("/").forEach((r, s) => {
                                    0 == s && "." === r || (0 == s && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                }), t) : [...t, r]
                            }, []);
                            return new Pe(n, e, r)
                        }(n);
                        if (i.toRoot()) return Ie(e.root, new Kt([], {}), e, r, s);
                        const o = function (t, e, n) {
                                if (t.isAbsolute) return new De(e.root, !0, 0);
                                if (-1 === n.snapshot._lastPathIndex) {
                                    const t = n.snapshot._urlSegment;
                                    return new De(t, t === e.root, 0)
                                }
                                const r = Ae(t.commands[0]) ? 0 : 1;
                                return function (t, e, n) {
                                    let r = t, s = e, i = n;
                                    for (; i > s;) {
                                        if (i -= s, r = r.parent, !r) throw new Error("Invalid number of '../'");
                                        s = r.segments.length
                                    }
                                    return new De(r, !1, s - i)
                                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots)
                            }(i, e, t),
                            a = o.processChildren ? Fe(o.segmentGroup, o.index, i.commands) : Ne(o.segmentGroup, o.index, i.commands);
                        return Ie(o.segmentGroup, a, e, r, s)
                    }(a, this.currentUrlTree, t, c, l)
                }

                navigateByUrl(t, e = {skipLocationChange: !1}) {
                    const n = Ve(t) ? t : this.parseUrl(t), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    return this.scheduleNavigation(r, "imperative", null, e)
                }

                navigate(t, e = {skipLocationChange: !1}) {
                    return function (t) {
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e];
                            if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
                        }
                    }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                }

                serializeUrl(t) {
                    return this.urlSerializer.serialize(t)
                }

                parseUrl(t) {
                    let e;
                    try {
                        e = this.urlSerializer.parse(t)
                    } catch (n) {
                        e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                    }
                    return e
                }

                isActive(t, e) {
                    if (Ve(t)) return $t(this.currentUrlTree, t, e);
                    const n = this.parseUrl(t);
                    return $t(this.currentUrlTree, n, e)
                }

                removeEmptyProps(t) {
                    return Object.keys(t).reduce((e, n) => {
                        const r = t[n];
                        return null != r && (e[n] = r), e
                    }, {})
                }

                processNavigations() {
                    this.navigations.subscribe(t => {
                        this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new gt(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, t.resolve(!0)
                    }, t => {
                        this.console.warn("Unhandled Navigation Error: ")
                    })
                }

                scheduleNavigation(t, e, n, r, s) {
                    if (this.disposed) return Promise.resolve(!1);
                    const i = this.getTransition(),
                        o = "imperative" !== e && "imperative" === (null == i ? void 0 : i.source),
                        a = (this.lastSuccessfulId === i.id || this.currentNavigation ? i.rawUrl : i.urlAfterRedirects).toString() === t.toString();
                    if (o && a) return Promise.resolve(!0);
                    let l, c, u;
                    s ? (l = s.resolve, c = s.reject, u = s.promise) : u = new Promise((t, e) => {
                        l = t, c = e
                    });
                    const h = ++this.navigationId;
                    return this.setTransition({
                        id: h,
                        source: e,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: t,
                        extras: r,
                        resolve: l,
                        reject: c,
                        promise: u,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }), u.catch(t => Promise.reject(t))
                }

                setBrowserUrl(t, e, n, r) {
                    const s = this.urlSerializer.serialize(t);
                    r = r || {}, this.location.isCurrentPathEqualTo(s) || e ? this.location.replaceState(s, "", Object.assign(Object.assign({}, r), {navigationId: n})) : this.location.go(s, "", Object.assign(Object.assign({}, r), {navigationId: n}))
                }

                resetStateAndUrl(t, e, n) {
                    this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                }

                resetUrlToCurrentUrlTree() {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(s.N), s.Tb(Zt), s.Tb(Nn), s.Tb(r.g), s.Tb(s.s), s.Tb(s.x), s.Tb(s.i), s.Tb(void 0))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })(), qn = (() => {
            class t {
                constructor(t, e, n, r, s) {
                    this.router = t, this.route = e, this.commands = [], this.onChanges = new a.a, null == n && r.setAttribute(s.nativeElement, "tabindex", "0")
                }

                ngOnChanges(t) {
                    this.onChanges.next(this)
                }

                set routerLink(t) {
                    this.commands = null != t ? Array.isArray(t) ? t : [t] : []
                }

                onClick() {
                    const t = {
                        skipLocationChange: zn(this.skipLocationChange),
                        replaceUrl: zn(this.replaceUrl),
                        state: this.state
                    };
                    return this.router.navigateByUrl(this.urlTree, t), !0
                }

                get urlTree() {
                    return this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: zn(this.preserveFragment)
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Kb(Un), s.Kb(_e), s.Ub("tabindex"), s.Kb(s.E), s.Kb(s.l))
            }, t.\u0275dir = s.Fb({
                type: t,
                selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
                hostBindings: function (t, e) {
                    1 & t && s.Wb("click", function () {
                        return e.onClick()
                    })
                },
                inputs: {
                    routerLink: "routerLink",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    state: "state",
                    relativeTo: "relativeTo"
                },
                features: [s.xb]
            }), t
        })(), $n = (() => {
            class t {
                constructor(t, e, n) {
                    this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.onChanges = new a.a, this.subscription = t.events.subscribe(t => {
                        t instanceof gt && this.updateTargetUrlAndHref()
                    })
                }

                set routerLink(t) {
                    this.commands = null != t ? Array.isArray(t) ? t : [t] : []
                }

                ngOnChanges(t) {
                    this.updateTargetUrlAndHref(), this.onChanges.next(this)
                }

                ngOnDestroy() {
                    this.subscription.unsubscribe()
                }

                onClick(t, e, n, r, s) {
                    if (0 !== t || e || n || r || s) return !0;
                    if ("string" == typeof this.target && "_self" != this.target) return !0;
                    const i = {
                        skipLocationChange: zn(this.skipLocationChange),
                        replaceUrl: zn(this.replaceUrl),
                        state: this.state
                    };
                    return this.router.navigateByUrl(this.urlTree, i), !1
                }

                updateTargetUrlAndHref() {
                    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                }

                get urlTree() {
                    return this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: zn(this.preserveFragment)
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Kb(Un), s.Kb(_e), s.Kb(r.h))
            }, t.\u0275dir = s.Fb({
                type: t,
                selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
                hostVars: 2,
                hostBindings: function (t, e) {
                    1 & t && s.Wb("click", function (t) {
                        return e.onClick(t.button, t.ctrlKey, t.shiftKey, t.altKey, t.metaKey)
                    }), 2 & t && (s.Sb("href", e.href, s.jc), s.Ab("target", e.target))
                },
                inputs: {
                    routerLink: "routerLink",
                    target: "target",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    state: "state",
                    relativeTo: "relativeTo"
                },
                features: [s.xb]
            }), t
        })();

        function zn(t) {
            return "" === t || !!t
        }

        let Bn = (() => {
            class t {
                constructor(t, e, n, r, s, i) {
                    this.router = t, this.element = e, this.renderer = n, this.cdr = r, this.link = s, this.linkWithHref = i, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {exact: !1}, this.routerEventsSubscription = t.events.subscribe(t => {
                        t instanceof gt && this.update()
                    })
                }

                ngAfterContentInit() {
                    Object(o.a)(this.links.changes, this.linksWithHrefs.changes, Object(o.a)(null)).pipe(Object(C.a)()).subscribe(t => {
                        this.update(), this.subscribeToEachLinkOnChanges()
                    })
                }

                subscribeToEachLinkOnChanges() {
                    var t;
                    null === (t = this.linkInputChangesSubscription) || void 0 === t || t.unsubscribe();
                    const e = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref].filter(t => !!t).map(t => t.onChanges);
                    this.linkInputChangesSubscription = Object(i.a)(e).pipe(Object(C.a)()).subscribe(t => {
                        this.isActive !== this.isLinkActive(this.router)(t) && this.update()
                    })
                }

                set routerLinkActive(t) {
                    const e = Array.isArray(t) ? t : t.split(" ");
                    this.classes = e.filter(t => !!t)
                }

                ngOnChanges(t) {
                    this.update()
                }

                ngOnDestroy() {
                    var t;
                    this.routerEventsSubscription.unsubscribe(), null === (t = this.linkInputChangesSubscription) || void 0 === t || t.unsubscribe()
                }

                update() {
                    this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(() => {
                        const t = this.hasActiveLinks();
                        this.isActive !== t && (this.isActive = t, this.cdr.markForCheck(), this.classes.forEach(e => {
                            t ? this.renderer.addClass(this.element.nativeElement, e) : this.renderer.removeClass(this.element.nativeElement, e)
                        }))
                    })
                }

                isLinkActive(t) {
                    return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact)
                }

                hasActiveLinks() {
                    const t = this.isLinkActive(this.router);
                    return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Kb(Un), s.Kb(s.l), s.Kb(s.E), s.Kb(s.h), s.Kb(qn, 8), s.Kb($n, 8))
            }, t.\u0275dir = s.Fb({
                type: t,
                selectors: [["", "routerLinkActive", ""]],
                contentQueries: function (t, e, n) {
                    if (1 & t && (s.Db(n, qn, 1), s.Db(n, $n, 1)), 2 & t) {
                        let t;
                        s.fc(t = s.Xb()) && (e.links = t), s.fc(t = s.Xb()) && (e.linksWithHrefs = t)
                    }
                },
                inputs: {routerLinkActiveOptions: "routerLinkActiveOptions", routerLinkActive: "routerLinkActive"},
                exportAs: ["routerLinkActive"],
                features: [s.xb]
            }), t
        })(), Vn = (() => {
            class t {
                constructor(t, e, n, r, i) {
                    this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = i, this.activated = null, this._activatedRoute = null, this.activateEvents = new s.n, this.deactivateEvents = new s.n, this.name = r || It, t.onChildOutletCreated(this.name, this)
                }

                ngOnDestroy() {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }

                ngOnInit() {
                    if (!this.activated) {
                        const t = this.parentContexts.getContext(this.name);
                        t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                    }
                }

                get isActivated() {
                    return !!this.activated
                }

                get component() {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    return this.activated.instance
                }

                get activatedRoute() {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    return this._activatedRoute
                }

                get activatedRouteData() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                }

                detach() {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    this.location.detach();
                    const t = this.activated;
                    return this.activated = null, this._activatedRoute = null, t
                }

                attach(t, e) {
                    this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                }

                deactivate() {
                    if (this.activated) {
                        const t = this.component;
                        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                    }
                }

                activateWith(t, e) {
                    if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = t;
                    const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                        r = this.parentContexts.getOrCreateContext(this.name).children,
                        s = new Gn(t, r, this.location.injector);
                    this.activated = this.location.createComponent(n, this.location.length, s), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Kb(Nn), s.Kb(s.P), s.Kb(s.j), s.Ub("name"), s.Kb(s.h))
            }, t.\u0275dir = s.Fb({
                type: t,
                selectors: [["router-outlet"]],
                outputs: {activateEvents: "activate", deactivateEvents: "deactivate"},
                exportAs: ["outlet"]
            }), t
        })();

        class Gn {
            constructor(t, e, n) {
                this.route = t, this.childContexts = e, this.parent = n
            }

            get(t, e) {
                return t === _e ? this.route : t === Nn ? this.childContexts : this.parent.get(t, e)
            }
        }

        class Kn {
        }

        class Wn {
            preload(t, e) {
                return Object(o.a)(null)
            }
        }

        let Qn = (() => {
            class t {
                constructor(t, e, n, r, s) {
                    this.router = t, this.injector = r, this.preloadingStrategy = s, this.loader = new Pn(e, n, e => t.triggerEvent(new Tt(e)), e => t.triggerEvent(new Et(e)))
                }

                setUpPreloading() {
                    this.subscription = this.router.events.pipe(Object(q.a)(t => t instanceof gt), Object(V.a)(() => this.preload())).subscribe(() => {
                    })
                }

                preload() {
                    const t = this.injector.get(s.y);
                    return this.processRoutes(t, this.router.config)
                }

                ngOnDestroy() {
                    this.subscription && this.subscription.unsubscribe()
                }

                processRoutes(t, e) {
                    const n = [];
                    for (const r of e) if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                        const t = r._loadedConfig;
                        n.push(this.processRoutes(t.module, t.routes))
                    } else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(t, r)) : r.children && n.push(this.processRoutes(t, r.children));
                    return Object(i.a)(n).pipe(Object(C.a)(), Object(A.a)(t => {
                    }))
                }

                preloadConfig(t, e) {
                    return this.preloadingStrategy.preload(e, () => (e._loadedConfig ? Object(o.a)(e._loadedConfig) : this.loader.load(t.injector, e)).pipe(Object(st.a)(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(Un), s.Tb(s.x), s.Tb(s.i), s.Tb(s.s), s.Tb(Kn))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })(), Zn = (() => {
            class t {
                constructor(t, e, n = {}) {
                    this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                }

                init() {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                }

                createScrollEvents() {
                    return this.router.events.subscribe(t => {
                        t instanceof mt ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof gt && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
                    })
                }

                consumeScrollEvents() {
                    return this.router.events.subscribe(t => {
                        t instanceof jt && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                    })
                }

                scheduleScrollEvent(t, e) {
                    this.router.triggerEvent(new jt(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
                }

                ngOnDestroy() {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(Un), s.Tb(r.q), s.Tb(void 0))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();
        const Yn = new s.r("ROUTER_CONFIGURATION"), Xn = new s.r("ROUTER_FORROOT_GUARD"),
            Jn = [r.g, {provide: Zt, useClass: Yt}, {
                provide: Un,
                useFactory: function (t, e, n, s, i, o, a, l = {}, c, u) {
                    const h = new Un(null, t, e, n, s, i, o, Mt(a));
                    if (c && (h.urlHandlingStrategy = c), u && (h.routeReuseStrategy = u), function (t, e) {
                        t.errorHandler && (e.errorHandler = t.errorHandler), t.malformedUriErrorHandler && (e.malformedUriErrorHandler = t.malformedUriErrorHandler), t.onSameUrlNavigation && (e.onSameUrlNavigation = t.onSameUrlNavigation), t.paramsInheritanceStrategy && (e.paramsInheritanceStrategy = t.paramsInheritanceStrategy), t.relativeLinkResolution && (e.relativeLinkResolution = t.relativeLinkResolution), t.urlUpdateStrategy && (e.urlUpdateStrategy = t.urlUpdateStrategy)
                    }(l, h), l.enableTracing) {
                        const t = Object(r.t)();
                        h.events.subscribe(e => {
                            t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd()
                        })
                    }
                    return h
                },
                deps: [Zt, Nn, r.g, s.s, s.x, s.i, Rn, Yn, [class {
                }, new s.B], [class {
                }, new s.B]]
            }, Nn, {
                provide: _e, useFactory: function (t) {
                    return t.routerState.root
                }, deps: [Un]
            }, {provide: s.x, useClass: s.K}, Qn, Wn, class {
                preload(t, e) {
                    return e().pipe($(() => Object(o.a)(null)))
                }
            }, {provide: Yn, useValue: {enableTracing: !1}}];

        function tr() {
            return new s.z("Router", Un)
        }

        let er = (() => {
            class t {
                constructor(t, e) {
                }

                static forRoot(e, n) {
                    return {
                        ngModule: t,
                        providers: [Jn, ir(e), {
                            provide: Xn,
                            useFactory: sr,
                            deps: [[Un, new s.B, new s.J]]
                        }, {provide: Yn, useValue: n || {}}, {
                            provide: r.h,
                            useFactory: rr,
                            deps: [r.p, [new s.p(r.a), new s.B], Yn]
                        }, {provide: Zn, useFactory: nr, deps: [Un, r.q, Yn]}, {
                            provide: Kn,
                            useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Wn
                        }, {provide: s.z, multi: !0, useFactory: tr}, [or, {
                            provide: s.d,
                            multi: !0,
                            useFactory: ar,
                            deps: [or]
                        }, {provide: cr, useFactory: lr, deps: [or]}, {provide: s.b, multi: !0, useExisting: cr}]]
                    }
                }

                static forChild(e) {
                    return {ngModule: t, providers: [ir(e)]}
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(Xn, 8), s.Tb(Un, 8))
            }, t.\u0275mod = s.Ib({type: t}), t.\u0275inj = s.Hb({}), t
        })();

        function nr(t, e, n) {
            return n.scrollOffset && e.setOffset(n.scrollOffset), new Zn(t, e, n)
        }

        function rr(t, e, n = {}) {
            return n.useHash ? new r.e(t, e) : new r.o(t, e)
        }

        function sr(t) {
            return "guarded"
        }

        function ir(t) {
            return [{provide: s.a, multi: !0, useValue: t}, {provide: Rn, multi: !0, useValue: t}]
        }

        let or = (() => {
            class t {
                constructor(t) {
                    this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new a.a
                }

                appInitializer() {
                    return this.injector.get(r.f, Promise.resolve(null)).then(() => {
                        let t = null;
                        const e = new Promise(e => t = e), n = this.injector.get(Un), r = this.injector.get(Yn);
                        return "disabled" === r.initialNavigation ? (n.setUpLocationChangeListener(), t(!0)) : "enabled" === r.initialNavigation || "enabledBlocking" === r.initialNavigation ? (n.hooks.afterPreactivation = () => this.initNavigation ? Object(o.a)(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()) : t(!0), e
                    })
                }

                bootstrapListener(t) {
                    const e = this.injector.get(Yn), n = this.injector.get(Qn), r = this.injector.get(Zn),
                        i = this.injector.get(Un), o = this.injector.get(s.g);
                    t === o.components[0] && ("enabledNonBlocking" !== e.initialNavigation && void 0 !== e.initialNavigation || i.initialNavigation(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(s.s))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        function ar(t) {
            return t.appInitializer.bind(t)
        }

        function lr(t) {
            return t.bootstrapListener.bind(t)
        }

        const cr = new s.r("Router Initializer")
    }, vmXk: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });

        class r {
            constructor(t) {
                this.id = t._id, this.from = t.from, this.to = t.to, this.createdAt = new Date(t.createdAt)
            }

            get id() {
                return this._id
            }

            get from() {
                return this._from
            }

            get to() {
                return this._to
            }

            get createdAt() {
                return this._createdAt
            }

            set id(t) {
                this._id = t
            }

            set from(t) {
                t && ("string" == typeof t ? (this._from = new o, this._from.id = t) : this._from = (new o).initialize(t))
            }

            set to(t) {
                t && ("string" == typeof t ? (this._to = new o, this._to.id = t) : this._to = (new o).initialize(t))
            }

            set createdAt(t) {
                this._createdAt = t
            }

            toObject() {
                return {_id: this.id, createdAt: this.createdAt, from: this.from.toObject(), to: this.to.toObject()}
            }
        }

        class s {
            constructor() {
                this._image = null
            }

            initialize(t) {
                return this.id = t._id, this.from = t.from, this.to = t.to, this.text = t.text, this.createdAt = new Date(t.createdAt), this.image = t.image, this.state = t.state, this
            }

            get id() {
                return this._id
            }

            get from() {
                return this._from
            }

            get to() {
                return this._to
            }

            get text() {
                return this._text
            }

            get state() {
                return this._state
            }

            get createdAt() {
                return this._createdAt
            }

            get image() {
                return this._image
            }

            set id(t) {
                this._id = t
            }

            set from(t) {
                this._from = t
            }

            set to(t) {
                this._to = t
            }

            set text(t) {
                this._text = t
            }

            set state(t) {
                this._state = t
            }

            set createdAt(t) {
                this._createdAt = t
            }

            set image(t) {
                t && t.path && (this._image = t)
            }

            isMine(t) {
                return this.from === t
            }
        }

        var i = n("bl9C");

        class o {
            constructor() {
            }

            initialize(t) {
                return this.id = t._id, this.role = t.role, this.firstName = t.firstName, this.lastName = t.lastName, this.avatar = t.avatar, this.email = t.email, this.gender = t.gender, this.birthDate = new Date(t.birthDate), this.status = t.status, this.address = t.address, this.education = t.education, this.profession = t.profession, this.school = t.school, this.interests = t.interests, this.country = t.country, this.city = t.city, t.interests && this.sortInterests(), this.followed = t.followed, this.friend = t.friend, this.requests = t.requests, this.request = this.requests && this.requests.length ? this.requests[0].from.id == this.id ? "requesting" : "requested" : null, this.online = t.online, t.lastMessage && (this.lastMessage = (new s).initialize(t.lastMessage)), this
            }

            get id() {
                return this._id
            }

            get role() {
                return this._role
            }

            get firstName() {
                return this._firstName
            }

            get lastName() {
                return this._lastName
            }

            get fullName() {
                return this._firstName + " " + this._lastName
            }

            get email() {
                return this._email
            }

            get gender() {
                return this._gender
            }

            get birthDate() {
                return this._birthDate
            }

            get age() {
                if (this.birthDate) {
                    let t = (new Date).getTime() - this.birthDate.getTime();
                    return t = t / 1e3 / 60 / 60 / 24 / 365, Math.floor(t).toString()
                }
                return ""
            }

            get address() {
                return this._address
            }

            get status() {
                return this._status
            }

            get avatar() {
                return this._avatar
            }

            get education() {
                return this._education
            }

            get profession() {
                return this._profession
            }

            get school() {
                return this._school
            }

            get interests() {
                return this._interests
            }

            get city() {
                return this._city
            }

            get country() {
                return this._country
            }

            get followed() {
                return this._followed
            }

            get friend() {
                return this._friend
            }

            get request() {
                return this._request
            }

            get online() {
                return this._online
            }

            get lastMessage() {
                return this._lastMessage
            }

            get requests() {
                return this._requests
            }

            set id(t) {
                this._id = t
            }

            set role(t) {
                this._role = t
            }

            set firstName(t) {
                this._firstName = t
            }

            set lastName(t) {
                this._lastName = t
            }

            set email(t) {
                this._email = t
            }

            set birthDate(t) {
                this._birthDate = t
            }

            set gender(t) {
                this._gender = t
            }

            set address(t) {
                this._address = t
            }

            set avatar(t) {
                this._avatar = (t.includes(i.a.DOMAIN_URL) ? "" : i.a.DOMAIN_URL) + t
            }

            set status(t) {
                this._status = t
            }

            set education(t) {
                this._education = t
            }

            set profession(t) {
                this._profession = t
            }

            set school(t) {
                this._school = t
            }

            set country(t) {
                this._country = t
            }

            set city(t) {
                this._city = t
            }

            set interests(t) {
                this._interests = t, this.interests && this.sortInterests()
            }

            set followed(t) {
                this._followed = t
            }

            set friend(t) {
                this._friend = t
            }

            set request(t) {
                this._request = t
            }

            set online(t) {
                this._online = t
            }

            set lastMessage(t) {
                this._lastMessage = t
            }

            set requests(t) {
                this._requests = [], t && t.length && t.map(t => {
                    this._requests.push(new r(t))
                })
            }

            sortInterests() {
                this._interests = this._interests.sort((t, e) => t.length - e.length)
            }

            toObject() {
                return {
                    id: this.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    gender: this.gender,
                    city: this.city,
                    avatar: this.avatar,
                    birthDate: this.birthDate,
                    request: this.request,
                    friend: this.friend,
                    email: this.email,
                    address: this.address,
                    status: this.status,
                    education: this.education,
                    profession: this.profession,
                    school: this.school,
                    interests: this.interests,
                    country: this.country,
                    followed: this.followed,
                    requests: this.requests ? this.requests.map(t => t.toObject()) : void 0,
                    online: this.online,
                    lastMessage: this.lastMessage,
                    role: this.role
                }
            }
        }
    }, "x+ZX": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var r = n("7o/Q");

        function s() {
            return function (t) {
                return t.lift(new i(t))
            }
        }

        class i {
            constructor(t) {
                this.connectable = t
            }

            call(t, e) {
                const {connectable: n} = this;
                n._refCount++;
                const r = new o(t, n), s = e.subscribe(r);
                return r.closed || (r.connection = n.connect()), s
            }
        }

        class o extends r.a {
            constructor(t, e) {
                super(t), this.connectable = e
            }

            _unsubscribe() {
                const {connectable: t} = this;
                if (!t) return void (this.connection = null);
                this.connectable = null;
                const e = t._refCount;
                if (e <= 0) return void (this.connection = null);
                if (t._refCount = e - 1, e > 1) return void (this.connection = null);
                const {connection: n} = this, r = t._connection;
                this.connection = null, !r || n && r !== n || r.unsubscribe()
            }
        }
    }, yCtX: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var r = n("HDdC"), s = n("ngJS"), i = n("jZKg");

        function o(t, e) {
            return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t))
        }
    }, "z+Ro": function (t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" == typeof t.schedule
        }

        n.d(e, "a", function () {
            return r
        })
    }, zUnb: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n("jhN1"), s = n("fXoL"), i = n("R0Ic");

        function o() {
            return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
        }

        function a(t) {
            switch (t.length) {
                case 0:
                    return new i.d;
                case 1:
                    return t[0];
                default:
                    return new i.k(t)
            }
        }

        function l(t, e, n, r, s = {}, o = {}) {
            const a = [], l = [];
            let c = -1, u = null;
            if (r.forEach(t => {
                const n = t.offset, r = n == c, h = r && u || {};
                Object.keys(t).forEach(n => {
                    let r = n, l = t[n];
                    if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), l) {
                        case i.l:
                            l = s[n];
                            break;
                        case i.a:
                            l = o[n];
                            break;
                        default:
                            l = e.normalizeStyleValue(n, r, l, a)
                    }
                    h[r] = l
                }), r || l.push(h), u = h, c = n
            }), a.length) {
                const t = "\n - ";
                throw new Error(`Unable to animate due to the following errors:${t}${a.join(t)}`)
            }
            return l
        }

        function c(t, e, n, r) {
            switch (e) {
                case"start":
                    t.onStart(() => r(n && u(n, "start", t)));
                    break;
                case"done":
                    t.onDone(() => r(n && u(n, "done", t)));
                    break;
                case"destroy":
                    t.onDestroy(() => r(n && u(n, "destroy", t)))
            }
        }

        function u(t, e, n) {
            const r = n.totalTime,
                s = h(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == r ? t.totalTime : r, !!n.disabled),
                i = t._data;
            return null != i && (s._data = i), s
        }

        function h(t, e, n, r, s = "", i = 0, o) {
            return {element: t, triggerName: e, fromState: n, toState: r, phaseName: s, totalTime: i, disabled: !!o}
        }

        function d(t, e, n) {
            let r;
            return t instanceof Map ? (r = t.get(e), r || t.set(e, r = n)) : (r = t[e], r || (r = t[e] = n)), r
        }

        function f(t) {
            const e = t.indexOf(":");
            return [t.substring(1, e), t.substr(e + 1)]
        }

        let p = (t, e) => !1, m = (t, e) => !1, g = (t, e, n) => [];
        const y = o();
        (y || "undefined" != typeof Element) && (p = (t, e) => t.contains(e), m = (() => {
            if (y || Element.prototype.matches) return (t, e) => t.matches(e);
            {
                const t = Element.prototype,
                    e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
                return e ? (t, n) => e.apply(t, [n]) : m
            }
        })(), g = (t, e, n) => {
            let r = [];
            if (n) {
                const n = t.querySelectorAll(e);
                for (let t = 0; t < n.length; t++) r.push(n[t])
            } else {
                const n = t.querySelector(e);
                n && r.push(n)
            }
            return r
        });
        let b = null, _ = !1;

        function v(t) {
            b || (b = ("undefined" != typeof document ? document.body : null) || {}, _ = !!b.style && "WebkitAppearance" in b.style);
            let e = !0;
            return b.style && !function (t) {
                return "ebkit" == t.substring(1, 6)
            }(t) && (e = t in b.style, !e && _) && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in b.style), e
        }

        const w = m, S = p, C = g;

        function T(t) {
            const e = {};
            return Object.keys(t).forEach(n => {
                const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                e[r] = t[n]
            }), e
        }

        let E = (() => {
            class t {
                validateStyleProperty(t) {
                    return v(t)
                }

                matchesElement(t, e) {
                    return w(t, e)
                }

                containsElement(t, e) {
                    return S(t, e)
                }

                query(t, e, n) {
                    return C(t, e, n)
                }

                computeStyle(t, e, n) {
                    return n || ""
                }

                animate(t, e, n, r, s, o = [], a) {
                    return new i.d(n, r)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })(), O = (() => {
            class t {
            }

            return t.NOOP = new E, t
        })();
        const x = "ng-enter", k = "ng-leave", A = "ng-trigger", j = ".ng-trigger", I = "ng-animating",
            R = ".ng-animating";

        function P(t) {
            if ("number" == typeof t) return t;
            const e = t.match(/^(-?[\.\d]+)(m?s)/);
            return !e || e.length < 2 ? 0 : D(parseFloat(e[1]), e[2])
        }

        function D(t, e) {
            switch (e) {
                case"s":
                    return 1e3 * t;
                default:
                    return t
            }
        }

        function N(t, e, n) {
            return t.hasOwnProperty("duration") ? t : function (t, e, n) {
                let r, s = 0, i = "";
                if ("string" == typeof t) {
                    const n = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === n) return e.push(`The provided timing value "${t}" is invalid.`), {
                        duration: 0,
                        delay: 0,
                        easing: ""
                    };
                    r = D(parseFloat(n[1]), n[2]);
                    const o = n[3];
                    null != o && (s = D(parseFloat(o), n[4]));
                    const a = n[5];
                    a && (i = a)
                } else r = t;
                if (!n) {
                    let n = !1, i = e.length;
                    r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), n = !0), s < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), n = !0), n && e.splice(i, 0, `The provided timing value "${t}" is invalid.`)
                }
                return {duration: r, delay: s, easing: i}
            }(t, e, n)
        }

        function F(t, e = {}) {
            return Object.keys(t).forEach(n => {
                e[n] = t[n]
            }), e
        }

        function L(t, e, n = {}) {
            if (e) for (let r in t) n[r] = t[r]; else F(t, n);
            return n
        }

        function M(t, e, n) {
            return n ? e + ":" + n + ";" : ""
        }

        function H(t) {
            let e = "";
            for (let n = 0; n < t.style.length; n++) {
                const r = t.style.item(n);
                e += M(0, r, t.style.getPropertyValue(r))
            }
            for (const n in t.style) t.style.hasOwnProperty(n) && !n.startsWith("_") && (e += M(0, n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[n]));
            t.setAttribute("style", e)
        }

        function U(t, e, n) {
            t.style && (Object.keys(e).forEach(r => {
                const s = W(r);
                n && !n.hasOwnProperty(r) && (n[r] = t.style[s]), t.style[s] = e[r]
            }), o() && H(t))
        }

        function q(t, e) {
            t.style && (Object.keys(e).forEach(e => {
                const n = W(e);
                t.style[n] = ""
            }), o() && H(t))
        }

        function $(t) {
            return Array.isArray(t) ? 1 == t.length ? t[0] : Object(i.f)(t) : t
        }

        const z = new RegExp("{{\\s*(.+?)\\s*}}", "g");

        function B(t) {
            let e = [];
            if ("string" == typeof t) {
                let n;
                for (; n = z.exec(t);) e.push(n[1]);
                z.lastIndex = 0
            }
            return e
        }

        function V(t, e, n) {
            const r = t.toString(), s = r.replace(z, (t, r) => {
                let s = e[r];
                return e.hasOwnProperty(r) || (n.push(`Please provide a value for the animation param ${r}`), s = ""), s.toString()
            });
            return s == r ? t : s
        }

        function G(t) {
            const e = [];
            let n = t.next();
            for (; !n.done;) e.push(n.value), n = t.next();
            return e
        }

        const K = /-+([a-z0-9])/g;

        function W(t) {
            return t.replace(K, (...t) => t[1].toUpperCase())
        }

        function Q(t, e) {
            return 0 === t || 0 === e
        }

        function Z(t, e, n) {
            const r = Object.keys(n);
            if (r.length && e.length) {
                let i = e[0], o = [];
                if (r.forEach(t => {
                    i.hasOwnProperty(t) || o.push(t), i[t] = n[t]
                }), o.length) for (var s = 1; s < e.length; s++) {
                    let n = e[s];
                    o.forEach(function (e) {
                        n[e] = X(t, e)
                    })
                }
            }
            return e
        }

        function Y(t, e, n) {
            switch (e.type) {
                case 7:
                    return t.visitTrigger(e, n);
                case 0:
                    return t.visitState(e, n);
                case 1:
                    return t.visitTransition(e, n);
                case 2:
                    return t.visitSequence(e, n);
                case 3:
                    return t.visitGroup(e, n);
                case 4:
                    return t.visitAnimate(e, n);
                case 5:
                    return t.visitKeyframes(e, n);
                case 6:
                    return t.visitStyle(e, n);
                case 8:
                    return t.visitReference(e, n);
                case 9:
                    return t.visitAnimateChild(e, n);
                case 10:
                    return t.visitAnimateRef(e, n);
                case 11:
                    return t.visitQuery(e, n);
                case 12:
                    return t.visitStagger(e, n);
                default:
                    throw new Error(`Unable to resolve animation metadata node #${e.type}`)
            }
        }

        function X(t, e) {
            return window.getComputedStyle(t)[e]
        }

        const J = "*";

        function tt(t, e) {
            const n = [];
            return "string" == typeof t ? t.split(/\s*,\s*/).forEach(t => function (t, e, n) {
                if (":" == t[0]) {
                    const r = function (t, e) {
                        switch (t) {
                            case":enter":
                                return "void => *";
                            case":leave":
                                return "* => void";
                            case":increment":
                                return (t, e) => parseFloat(e) > parseFloat(t);
                            case":decrement":
                                return (t, e) => parseFloat(e) < parseFloat(t);
                            default:
                                return e.push(`The transition alias value "${t}" is not supported`), "* => *"
                        }
                    }(t, n);
                    if ("function" == typeof r) return void e.push(r);
                    t = r
                }
                const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                if (null == r || r.length < 4) return n.push(`The provided transition expression "${t}" is not supported`), e;
                const s = r[1], i = r[2], o = r[3];
                e.push(rt(s, o)), "<" != i[0] || s == J && o == J || e.push(rt(o, s))
            }(t, n, e)) : n.push(t), n
        }

        const et = new Set(["true", "1"]), nt = new Set(["false", "0"]);

        function rt(t, e) {
            const n = et.has(t) || nt.has(t), r = et.has(e) || nt.has(e);
            return (s, i) => {
                let o = t == J || t == s, a = e == J || e == i;
                return !o && n && "boolean" == typeof s && (o = s ? et.has(t) : nt.has(t)), !a && r && "boolean" == typeof i && (a = i ? et.has(e) : nt.has(e)), o && a
            }
        }

        const st = new RegExp("s*:selfs*,?", "g");

        function it(t, e, n) {
            return new ot(t).build(e, n)
        }

        class ot {
            constructor(t) {
                this._driver = t
            }

            build(t, e) {
                const n = new at(e);
                return this._resetContextStyleTimingState(n), Y(this, $(t), n)
            }

            _resetContextStyleTimingState(t) {
                t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
            }

            visitTrigger(t, e) {
                let n = e.queryCount = 0, r = e.depCount = 0;
                const s = [], i = [];
                return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(t => {
                    if (this._resetContextStyleTimingState(e), 0 == t.type) {
                        const n = t, r = n.name;
                        r.toString().split(/\s*,\s*/).forEach(t => {
                            n.name = t, s.push(this.visitState(n, e))
                        }), n.name = r
                    } else if (1 == t.type) {
                        const s = this.visitTransition(t, e);
                        n += s.queryCount, r += s.depCount, i.push(s)
                    } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                }), {type: 7, name: t.name, states: s, transitions: i, queryCount: n, depCount: r, options: null}
            }

            visitState(t, e) {
                const n = this.visitStyle(t.styles, e), r = t.options && t.options.params || null;
                if (n.containsDynamicStyles) {
                    const s = new Set, i = r || {};
                    if (n.styles.forEach(t => {
                        if (lt(t)) {
                            const e = t;
                            Object.keys(e).forEach(t => {
                                B(e[t]).forEach(t => {
                                    i.hasOwnProperty(t) || s.add(t)
                                })
                            })
                        }
                    }), s.size) {
                        const n = G(s.values());
                        e.errors.push(`state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)
                    }
                }
                return {type: 0, name: t.name, style: n, options: r ? {params: r} : null}
            }

            visitTransition(t, e) {
                e.queryCount = 0, e.depCount = 0;
                const n = Y(this, $(t.animation), e);
                return {
                    type: 1,
                    matchers: tt(t.expr, e.errors),
                    animation: n,
                    queryCount: e.queryCount,
                    depCount: e.depCount,
                    options: ct(t.options)
                }
            }

            visitSequence(t, e) {
                return {type: 2, steps: t.steps.map(t => Y(this, t, e)), options: ct(t.options)}
            }

            visitGroup(t, e) {
                const n = e.currentTime;
                let r = 0;
                const s = t.steps.map(t => {
                    e.currentTime = n;
                    const s = Y(this, t, e);
                    return r = Math.max(r, e.currentTime), s
                });
                return e.currentTime = r, {type: 3, steps: s, options: ct(t.options)}
            }

            visitAnimate(t, e) {
                const n = function (t, e) {
                    let n = null;
                    if (t.hasOwnProperty("duration")) n = t; else if ("number" == typeof t) return ut(N(t, e).duration, 0, "");
                    const r = t;
                    if (r.split(/\s+/).some(t => "{" == t.charAt(0) && "{" == t.charAt(1))) {
                        const t = ut(0, 0, "");
                        return t.dynamic = !0, t.strValue = r, t
                    }
                    return n = n || N(r, e), ut(n.duration, n.delay, n.easing)
                }(t.timings, e.errors);
                let r;
                e.currentAnimateTimings = n;
                let s = t.styles ? t.styles : Object(i.h)({});
                if (5 == s.type) r = this.visitKeyframes(s, e); else {
                    let s = t.styles, o = !1;
                    if (!s) {
                        o = !0;
                        const t = {};
                        n.easing && (t.easing = n.easing), s = Object(i.h)(t)
                    }
                    e.currentTime += n.duration + n.delay;
                    const a = this.visitStyle(s, e);
                    a.isEmptyStep = o, r = a
                }
                return e.currentAnimateTimings = null, {type: 4, timings: n, style: r, options: null}
            }

            visitStyle(t, e) {
                const n = this._makeStyleAst(t, e);
                return this._validateStyleAst(n, e), n
            }

            _makeStyleAst(t, e) {
                const n = [];
                Array.isArray(t.styles) ? t.styles.forEach(t => {
                    "string" == typeof t ? t == i.a ? n.push(t) : e.errors.push(`The provided style string value ${t} is not allowed.`) : n.push(t)
                }) : n.push(t.styles);
                let r = !1, s = null;
                return n.forEach(t => {
                    if (lt(t)) {
                        const e = t, n = e.easing;
                        if (n && (s = n, delete e.easing), !r) for (let t in e) if (e[t].toString().indexOf("{{") >= 0) {
                            r = !0;
                            break
                        }
                    }
                }), {type: 6, styles: n, easing: s, offset: t.offset, containsDynamicStyles: r, options: null}
            }

            _validateStyleAst(t, e) {
                const n = e.currentAnimateTimings;
                let r = e.currentTime, s = e.currentTime;
                n && s > 0 && (s -= n.duration + n.delay), t.styles.forEach(t => {
                    "string" != typeof t && Object.keys(t).forEach(n => {
                        if (!this._driver.validateStyleProperty(n)) return void e.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);
                        const i = e.collectedStyles[e.currentQuerySelector], o = i[n];
                        let a = !0;
                        o && (s != r && s >= o.startTime && r <= o.endTime && (e.errors.push(`The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`), a = !1), s = o.startTime), a && (i[n] = {
                            startTime: s,
                            endTime: r
                        }), e.options && function (t, e, n) {
                            const r = e.params || {}, s = B(t);
                            s.length && s.forEach(t => {
                                r.hasOwnProperty(t) || n.push(`Unable to resolve the local animation param ${t} in the given list of values`)
                            })
                        }(t[n], e.options, e.errors)
                    })
                })
            }

            visitKeyframes(t, e) {
                const n = {type: 5, styles: [], options: null};
                if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), n;
                let r = 0;
                const s = [];
                let i = !1, o = !1, a = 0;
                const l = t.steps.map(t => {
                    const n = this._makeStyleAst(t, e);
                    let l = null != n.offset ? n.offset : function (t) {
                        if ("string" == typeof t) return null;
                        let e = null;
                        if (Array.isArray(t)) t.forEach(t => {
                            if (lt(t) && t.hasOwnProperty("offset")) {
                                const n = t;
                                e = parseFloat(n.offset), delete n.offset
                            }
                        }); else if (lt(t) && t.hasOwnProperty("offset")) {
                            const n = t;
                            e = parseFloat(n.offset), delete n.offset
                        }
                        return e
                    }(n.styles), c = 0;
                    return null != l && (r++, c = n.offset = l), o = o || c < 0 || c > 1, i = i || c < a, a = c, s.push(c), n
                });
                o && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), i && e.errors.push("Please ensure that all keyframe offsets are in order");
                const c = t.steps.length;
                let u = 0;
                r > 0 && r < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == r && (u = 1 / (c - 1));
                const h = c - 1, d = e.currentTime, f = e.currentAnimateTimings, p = f.duration;
                return l.forEach((t, r) => {
                    const i = u > 0 ? r == h ? 1 : u * r : s[r], o = i * p;
                    e.currentTime = d + f.delay + o, f.duration = o, this._validateStyleAst(t, e), t.offset = i, n.styles.push(t)
                }), n
            }

            visitReference(t, e) {
                return {type: 8, animation: Y(this, $(t.animation), e), options: ct(t.options)}
            }

            visitAnimateChild(t, e) {
                return e.depCount++, {type: 9, options: ct(t.options)}
            }

            visitAnimateRef(t, e) {
                return {type: 10, animation: this.visitReference(t.animation, e), options: ct(t.options)}
            }

            visitQuery(t, e) {
                const n = e.currentQuerySelector, r = t.options || {};
                e.queryCount++, e.currentQuery = t;
                const [s, i] = function (t) {
                    const e = !!t.split(/\s*,\s*/).find(t => ":self" == t);
                    return e && (t = t.replace(st, "")), [t = t.replace(/@\*/g, j).replace(/@\w+/g, t => ".ng-trigger-" + t.substr(1)).replace(/:animating/g, R), e]
                }(t.selector);
                e.currentQuerySelector = n.length ? n + " " + s : s, d(e.collectedStyles, e.currentQuerySelector, {});
                const o = Y(this, $(t.animation), e);
                return e.currentQuery = null, e.currentQuerySelector = n, {
                    type: 11,
                    selector: s,
                    limit: r.limit || 0,
                    optional: !!r.optional,
                    includeSelf: i,
                    animation: o,
                    originalSelector: t.selector,
                    options: ct(t.options)
                }
            }

            visitStagger(t, e) {
                e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                const n = "full" === t.timings ? {duration: 0, delay: 0, easing: "full"} : N(t.timings, e.errors, !0);
                return {type: 12, animation: Y(this, $(t.animation), e), timings: n, options: null}
            }
        }

        class at {
            constructor(t) {
                this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
            }
        }

        function lt(t) {
            return !Array.isArray(t) && "object" == typeof t
        }

        function ct(t) {
            var e;
            return t ? (t = F(t)).params && (t.params = (e = t.params) ? F(e) : null) : t = {}, t
        }

        function ut(t, e, n) {
            return {duration: t, delay: e, easing: n}
        }

        function ht(t, e, n, r, s, i, o = null, a = !1) {
            return {
                type: 1,
                element: t,
                keyframes: e,
                preStyleProps: n,
                postStyleProps: r,
                duration: s,
                delay: i,
                totalTime: s + i,
                easing: o,
                subTimeline: a
            }
        }

        class dt {
            constructor() {
                this._map = new Map
            }

            consume(t) {
                let e = this._map.get(t);
                return e ? this._map.delete(t) : e = [], e
            }

            append(t, e) {
                let n = this._map.get(t);
                n || this._map.set(t, n = []), n.push(...e)
            }

            has(t) {
                return this._map.has(t)
            }

            clear() {
                this._map.clear()
            }
        }

        const ft = new RegExp(":enter", "g"), pt = new RegExp(":leave", "g");

        function mt(t, e, n, r, s, i = {}, o = {}, a, l, c = []) {
            return (new gt).buildKeyframes(t, e, n, r, s, i, o, a, l, c)
        }

        class gt {
            buildKeyframes(t, e, n, r, s, i, o, a, l, c = []) {
                l = l || new dt;
                const u = new bt(t, e, l, r, s, c, []);
                u.options = a, u.currentTimeline.setStyles([i], null, u.errors, a), Y(this, n, u);
                const h = u.timelines.filter(t => t.containsAnimation());
                if (h.length && Object.keys(o).length) {
                    const t = h[h.length - 1];
                    t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a)
                }
                return h.length ? h.map(t => t.buildKeyframes()) : [ht(e, [], [], [], 0, 0, "", !1)]
            }

            visitTrigger(t, e) {
            }

            visitState(t, e) {
            }

            visitTransition(t, e) {
            }

            visitAnimateChild(t, e) {
                const n = e.subInstructions.consume(e.element);
                if (n) {
                    const r = e.createSubContext(t.options), s = e.currentTimeline.currentTime,
                        i = this._visitSubInstructions(n, r, r.options);
                    s != i && e.transformIntoNewTimeline(i)
                }
                e.previousNode = t
            }

            visitAnimateRef(t, e) {
                const n = e.createSubContext(t.options);
                n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
            }

            _visitSubInstructions(t, e, n) {
                let r = e.currentTimeline.currentTime;
                const s = null != n.duration ? P(n.duration) : null, i = null != n.delay ? P(n.delay) : null;
                return 0 !== s && t.forEach(t => {
                    const n = e.appendInstructionToTimeline(t, s, i);
                    r = Math.max(r, n.duration + n.delay)
                }), r
            }

            visitReference(t, e) {
                e.updateOptions(t.options, !0), Y(this, t.animation, e), e.previousNode = t
            }

            visitSequence(t, e) {
                const n = e.subContextCount;
                let r = e;
                const s = t.options;
                if (s && (s.params || s.delay) && (r = e.createSubContext(s), r.transformIntoNewTimeline(), null != s.delay)) {
                    6 == r.previousNode.type && (r.currentTimeline.snapshotCurrentStyles(), r.previousNode = yt);
                    const t = P(s.delay);
                    r.delayNextStep(t)
                }
                t.steps.length && (t.steps.forEach(t => Y(this, t, r)), r.currentTimeline.applyStylesToKeyframe(), r.subContextCount > n && r.transformIntoNewTimeline()), e.previousNode = t
            }

            visitGroup(t, e) {
                const n = [];
                let r = e.currentTimeline.currentTime;
                const s = t.options && t.options.delay ? P(t.options.delay) : 0;
                t.steps.forEach(i => {
                    const o = e.createSubContext(t.options);
                    s && o.delayNextStep(s), Y(this, i, o), r = Math.max(r, o.currentTimeline.currentTime), n.push(o.currentTimeline)
                }), n.forEach(t => e.currentTimeline.mergeTimelineCollectedStyles(t)), e.transformIntoNewTimeline(r), e.previousNode = t
            }

            _visitTiming(t, e) {
                if (t.dynamic) {
                    const n = t.strValue;
                    return N(e.params ? V(n, e.params, e.errors) : n, e.errors)
                }
                return {duration: t.duration, delay: t.delay, easing: t.easing}
            }

            visitAnimate(t, e) {
                const n = e.currentAnimateTimings = this._visitTiming(t.timings, e), r = e.currentTimeline;
                n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
                const s = t.style;
                5 == s.type ? this.visitKeyframes(s, e) : (e.incrementTime(n.duration), this.visitStyle(s, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
            }

            visitStyle(t, e) {
                const n = e.currentTimeline, r = e.currentAnimateTimings;
                !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                const s = r && r.easing || t.easing;
                t.isEmptyStep ? n.applyEmptyStep(s) : n.setStyles(t.styles, s, e.errors, e.options), e.previousNode = t
            }

            visitKeyframes(t, e) {
                const n = e.currentAnimateTimings, r = e.currentTimeline.duration, s = n.duration,
                    i = e.createSubContext().currentTimeline;
                i.easing = n.easing, t.styles.forEach(t => {
                    i.forwardTime((t.offset || 0) * s), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe()
                }), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(r + s), e.previousNode = t
            }

            visitQuery(t, e) {
                const n = e.currentTimeline.currentTime, r = t.options || {}, s = r.delay ? P(r.delay) : 0;
                s && (6 === e.previousNode.type || 0 == n && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = yt);
                let i = n;
                const o = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!r.optional, e.errors);
                e.currentQueryTotal = o.length;
                let a = null;
                o.forEach((n, r) => {
                    e.currentQueryIndex = r;
                    const o = e.createSubContext(t.options, n);
                    s && o.delayNextStep(s), n === e.element && (a = o.currentTimeline), Y(this, t.animation, o), o.currentTimeline.applyStylesToKeyframe(), i = Math.max(i, o.currentTimeline.currentTime)
                }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(i), a && (e.currentTimeline.mergeTimelineCollectedStyles(a), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
            }

            visitStagger(t, e) {
                const n = e.parentContext, r = e.currentTimeline, s = t.timings, i = Math.abs(s.duration),
                    o = i * (e.currentQueryTotal - 1);
                let a = i * e.currentQueryIndex;
                switch (s.duration < 0 ? "reverse" : s.easing) {
                    case"reverse":
                        a = o - a;
                        break;
                    case"full":
                        a = n.currentStaggerTime
                }
                const l = e.currentTimeline;
                a && l.delayNextStep(a);
                const c = l.currentTime;
                Y(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - c + (r.startTime - n.currentTimeline.startTime)
            }
        }

        const yt = {};

        class bt {
            constructor(t, e, n, r, s, i, o, a) {
                this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = s, this.errors = i, this.timelines = o, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = yt, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = a || new _t(this._driver, e, 0), o.push(this.currentTimeline)
            }

            get params() {
                return this.options.params
            }

            updateOptions(t, e) {
                if (!t) return;
                const n = t;
                let r = this.options;
                null != n.duration && (r.duration = P(n.duration)), null != n.delay && (r.delay = P(n.delay));
                const s = n.params;
                if (s) {
                    let t = r.params;
                    t || (t = this.options.params = {}), Object.keys(s).forEach(n => {
                        e && t.hasOwnProperty(n) || (t[n] = V(s[n], t, this.errors))
                    })
                }
            }

            _copyOptions() {
                const t = {};
                if (this.options) {
                    const e = this.options.params;
                    if (e) {
                        const n = t.params = {};
                        Object.keys(e).forEach(t => {
                            n[t] = e[t]
                        })
                    }
                }
                return t
            }

            createSubContext(t = null, e, n) {
                const r = e || this.element,
                    s = new bt(this._driver, r, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(r, n || 0));
                return s.previousNode = this.previousNode, s.currentAnimateTimings = this.currentAnimateTimings, s.options = this._copyOptions(), s.updateOptions(t), s.currentQueryIndex = this.currentQueryIndex, s.currentQueryTotal = this.currentQueryTotal, s.parentContext = this, this.subContextCount++, s
            }

            transformIntoNewTimeline(t) {
                return this.previousNode = yt, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
            }

            appendInstructionToTimeline(t, e, n) {
                const r = {
                        duration: null != e ? e : t.duration,
                        delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                        easing: ""
                    },
                    s = new vt(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
                return this.timelines.push(s), r
            }

            incrementTime(t) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
            }

            delayNextStep(t) {
                t > 0 && this.currentTimeline.delayNextStep(t)
            }

            invokeQuery(t, e, n, r, s, i) {
                let o = [];
                if (r && o.push(this.element), t.length > 0) {
                    t = (t = t.replace(ft, "." + this._enterClassName)).replace(pt, "." + this._leaveClassName);
                    let e = this._driver.query(this.element, t, 1 != n);
                    0 !== n && (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)), o.push(...e)
                }
                return s || 0 != o.length || i.push(`\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`), o
            }
        }

        class _t {
            constructor(t, e, n, r) {
                this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
            }

            containsAnimation() {
                switch (this._keyframes.size) {
                    case 0:
                        return !1;
                    case 1:
                        return this.getCurrentStyleProperties().length > 0;
                    default:
                        return !0
                }
            }

            getCurrentStyleProperties() {
                return Object.keys(this._currentKeyframe)
            }

            get currentTime() {
                return this.startTime + this.duration
            }

            delayNextStep(t) {
                const e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
            }

            fork(t, e) {
                return this.applyStylesToKeyframe(), new _t(this._driver, t, e || this.currentTime, this._elementTimelineStylesLookup)
            }

            _loadKeyframe() {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
            }

            forwardFrame() {
                this.duration += 1, this._loadKeyframe()
            }

            forwardTime(t) {
                this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
            }

            _updateStyle(t, e) {
                this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
                    time: this.currentTime,
                    value: e
                }
            }

            allowOnlyTimelineStyles() {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }

            applyEmptyStep(t) {
                t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(t => {
                    this._backFill[t] = this._globalTimelineStyles[t] || i.a, this._currentKeyframe[t] = i.a
                }), this._currentEmptyStepKeyframe = this._currentKeyframe
            }

            setStyles(t, e, n, r) {
                e && (this._previousKeyframe.easing = e);
                const s = r && r.params || {}, o = function (t, e) {
                    const n = {};
                    let r;
                    return t.forEach(t => {
                        "*" === t ? (r = r || Object.keys(e), r.forEach(t => {
                            n[t] = i.a
                        })) : L(t, !1, n)
                    }), n
                }(t, this._globalTimelineStyles);
                Object.keys(o).forEach(t => {
                    const e = V(o[t], s, n);
                    this._pendingStyles[t] = e, this._localTimelineStyles.hasOwnProperty(t) || (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(t) ? this._globalTimelineStyles[t] : i.a), this._updateStyle(t, e)
                })
            }

            applyStylesToKeyframe() {
                const t = this._pendingStyles, e = Object.keys(t);
                0 != e.length && (this._pendingStyles = {}, e.forEach(e => {
                    this._currentKeyframe[e] = t[e]
                }), Object.keys(this._localTimelineStyles).forEach(t => {
                    this._currentKeyframe.hasOwnProperty(t) || (this._currentKeyframe[t] = this._localTimelineStyles[t])
                }))
            }

            snapshotCurrentStyles() {
                Object.keys(this._localTimelineStyles).forEach(t => {
                    const e = this._localTimelineStyles[t];
                    this._pendingStyles[t] = e, this._updateStyle(t, e)
                })
            }

            getFinalKeyframe() {
                return this._keyframes.get(this.duration)
            }

            get properties() {
                const t = [];
                for (let e in this._currentKeyframe) t.push(e);
                return t
            }

            mergeTimelineCollectedStyles(t) {
                Object.keys(t._styleSummary).forEach(e => {
                    const n = this._styleSummary[e], r = t._styleSummary[e];
                    (!n || r.time > n.time) && this._updateStyle(e, r.value)
                })
            }

            buildKeyframes() {
                this.applyStylesToKeyframe();
                const t = new Set, e = new Set, n = 1 === this._keyframes.size && 0 === this.duration;
                let r = [];
                this._keyframes.forEach((s, o) => {
                    const a = L(s, !0);
                    Object.keys(a).forEach(n => {
                        const r = a[n];
                        r == i.l ? t.add(n) : r == i.a && e.add(n)
                    }), n || (a.offset = o / this.duration), r.push(a)
                });
                const s = t.size ? G(t.values()) : [], o = e.size ? G(e.values()) : [];
                if (n) {
                    const t = r[0], e = F(t);
                    t.offset = 0, e.offset = 1, r = [t, e]
                }
                return ht(this.element, r, s, o, this.duration, this.startTime, this.easing, !1)
            }
        }

        class vt extends _t {
            constructor(t, e, n, r, s, i, o = !1) {
                super(t, e, i.delay), this.element = e, this.keyframes = n, this.preStyleProps = r, this.postStyleProps = s, this._stretchStartingKeyframe = o, this.timings = {
                    duration: i.duration,
                    delay: i.delay,
                    easing: i.easing
                }
            }

            containsAnimation() {
                return this.keyframes.length > 1
            }

            buildKeyframes() {
                let t = this.keyframes, {delay: e, duration: n, easing: r} = this.timings;
                if (this._stretchStartingKeyframe && e) {
                    const s = [], i = n + e, o = e / i, a = L(t[0], !1);
                    a.offset = 0, s.push(a);
                    const l = L(t[0], !1);
                    l.offset = wt(o), s.push(l);
                    const c = t.length - 1;
                    for (let r = 1; r <= c; r++) {
                        let o = L(t[r], !1);
                        o.offset = wt((e + o.offset * n) / i), s.push(o)
                    }
                    n = i, e = 0, r = "", t = s
                }
                return ht(this.element, t, this.preStyleProps, this.postStyleProps, n, e, r, !0)
            }
        }

        function wt(t, e = 3) {
            const n = Math.pow(10, e - 1);
            return Math.round(t * n) / n
        }

        class St {
        }

        class Ct extends St {
            normalizePropertyName(t, e) {
                return W(t)
            }

            normalizeStyleValue(t, e, n, r) {
                let s = "";
                const i = n.toString().trim();
                if (Tt[e] && 0 !== n && "0" !== n) if ("number" == typeof n) s = "px"; else {
                    const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    e && 0 == e[1].length && r.push(`Please provide a CSS unit value for ${t}:${n}`)
                }
                return i + s
            }
        }

        const Tt = (() => function (t) {
            const e = {};
            return t.forEach(t => e[t] = !0), e
        }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();

        function Et(t, e, n, r, s, i, o, a, l, c, u, h, d) {
            return {
                type: 0,
                element: t,
                triggerName: e,
                isRemovalTransition: s,
                fromState: n,
                fromStyles: i,
                toState: r,
                toStyles: o,
                timelines: a,
                queriedElements: l,
                preStyleProps: c,
                postStyleProps: u,
                totalTime: h,
                errors: d
            }
        }

        const Ot = {};

        class xt {
            constructor(t, e, n) {
                this._triggerName = t, this.ast = e, this._stateStyles = n
            }

            match(t, e, n, r) {
                return function (t, e, n, r, s) {
                    return t.some(t => t(e, n, r, s))
                }(this.ast.matchers, t, e, n, r)
            }

            buildStyles(t, e, n) {
                const r = this._stateStyles["*"], s = this._stateStyles[t], i = r ? r.buildStyles(e, n) : {};
                return s ? s.buildStyles(e, n) : i
            }

            build(t, e, n, r, s, i, o, a, l, c) {
                const u = [], h = this.ast.options && this.ast.options.params || Ot,
                    f = this.buildStyles(n, o && o.params || Ot, u), p = a && a.params || Ot,
                    m = this.buildStyles(r, p, u), g = new Set, y = new Map, b = new Map, _ = "void" === r,
                    v = {params: Object.assign(Object.assign({}, h), p)},
                    w = c ? [] : mt(t, e, this.ast.animation, s, i, f, m, v, l, u);
                let S = 0;
                if (w.forEach(t => {
                    S = Math.max(t.duration + t.delay, S)
                }), u.length) return Et(e, this._triggerName, n, r, _, f, m, [], [], y, b, S, u);
                w.forEach(t => {
                    const n = t.element, r = d(y, n, {});
                    t.preStyleProps.forEach(t => r[t] = !0);
                    const s = d(b, n, {});
                    t.postStyleProps.forEach(t => s[t] = !0), n !== e && g.add(n)
                });
                const C = G(g.values());
                return Et(e, this._triggerName, n, r, _, f, m, w, C, y, b, S)
            }
        }

        class kt {
            constructor(t, e) {
                this.styles = t, this.defaultParams = e
            }

            buildStyles(t, e) {
                const n = {}, r = F(this.defaultParams);
                return Object.keys(t).forEach(e => {
                    const n = t[e];
                    null != n && (r[e] = n)
                }), this.styles.styles.forEach(t => {
                    if ("string" != typeof t) {
                        const s = t;
                        Object.keys(s).forEach(t => {
                            let i = s[t];
                            i.length > 1 && (i = V(i, r, e)), n[t] = i
                        })
                    }
                }), n
            }
        }

        class At {
            constructor(t, e) {
                this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(t => {
                    this.states[t.name] = new kt(t.style, t.options && t.options.params || {})
                }), jt(this.states, "true", "1"), jt(this.states, "false", "0"), e.transitions.forEach(e => {
                    this.transitionFactories.push(new xt(t, e, this.states))
                }), this.fallbackTransition = new xt(t, {
                    type: 1,
                    animation: {type: 2, steps: [], options: null},
                    matchers: [(t, e) => !0],
                    options: null,
                    queryCount: 0,
                    depCount: 0
                }, this.states)
            }

            get containsQueries() {
                return this.ast.queryCount > 0
            }

            matchTransition(t, e, n, r) {
                return this.transitionFactories.find(s => s.match(t, e, n, r)) || null
            }

            matchStyles(t, e, n) {
                return this.fallbackTransition.buildStyles(t, e, n)
            }
        }

        function jt(t, e, n) {
            t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
        }

        const It = new dt;

        class Rt {
            constructor(t, e, n) {
                this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
            }

            register(t, e) {
                const n = [], r = it(this._driver, e, n);
                if (n.length) throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);
                this._animations[t] = r
            }

            _buildPlayer(t, e, n) {
                const r = t.element, s = l(0, this._normalizer, 0, t.keyframes, e, n);
                return this._driver.animate(r, s, t.duration, t.delay, t.easing, [], !0)
            }

            create(t, e, n = {}) {
                const r = [], s = this._animations[t];
                let o;
                const l = new Map;
                if (s ? (o = mt(this._driver, e, s, x, k, {}, {}, n, It, r), o.forEach(t => {
                    const e = d(l, t.element, {});
                    t.postStyleProps.forEach(t => e[t] = null)
                })) : (r.push("The requested animation doesn't exist or has already been destroyed"), o = []), r.length) throw new Error(`Unable to create the animation due to the following errors: ${r.join("\n")}`);
                l.forEach((t, e) => {
                    Object.keys(t).forEach(n => {
                        t[n] = this._driver.computeStyle(e, n, i.a)
                    })
                });
                const c = a(o.map(t => {
                    const e = l.get(t.element);
                    return this._buildPlayer(t, {}, e)
                }));
                return this._playersById[t] = c, c.onDestroy(() => this.destroy(t)), this.players.push(c), c
            }

            destroy(t) {
                const e = this._getPlayer(t);
                e.destroy(), delete this._playersById[t];
                const n = this.players.indexOf(e);
                n >= 0 && this.players.splice(n, 1)
            }

            _getPlayer(t) {
                const e = this._playersById[t];
                if (!e) throw new Error(`Unable to find the timeline player referenced by ${t}`);
                return e
            }

            listen(t, e, n, r) {
                const s = h(e, "", "", "");
                return c(this._getPlayer(t), n, s, r), () => {
                }
            }

            command(t, e, n, r) {
                if ("register" == n) return void this.register(t, r[0]);
                if ("create" == n) return void this.create(t, e, r[0] || {});
                const s = this._getPlayer(t);
                switch (n) {
                    case"play":
                        s.play();
                        break;
                    case"pause":
                        s.pause();
                        break;
                    case"reset":
                        s.reset();
                        break;
                    case"restart":
                        s.restart();
                        break;
                    case"finish":
                        s.finish();
                        break;
                    case"init":
                        s.init();
                        break;
                    case"setPosition":
                        s.setPosition(parseFloat(r[0]));
                        break;
                    case"destroy":
                        this.destroy(t)
                }
            }
        }

        const Pt = "ng-animate-queued", Dt = "ng-animate-disabled", Nt = ".ng-animate-disabled", Ft = [],
            Lt = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
            Mt = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0};

        class Ht {
            constructor(t, e = "") {
                this.namespaceId = e;
                const n = t && t.hasOwnProperty("value");
                if (this.value = null != (r = n ? t.value : t) ? r : null, n) {
                    const e = F(t);
                    delete e.value, this.options = e
                } else this.options = {};
                var r;
                this.options.params || (this.options.params = {})
            }

            get params() {
                return this.options.params
            }

            absorbOptions(t) {
                const e = t.params;
                if (e) {
                    const t = this.options.params;
                    Object.keys(e).forEach(n => {
                        null == t[n] && (t[n] = e[n])
                    })
                }
            }
        }

        const Ut = "void", qt = new Ht(Ut);

        class $t {
            constructor(t, e, n) {
                this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, Qt(e, this._hostClassName)
            }

            listen(t, e, n, r) {
                if (!this._triggers.hasOwnProperty(e)) throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`);
                if (null == n || 0 == n.length) throw new Error(`Unable to listen on the animation trigger "${e}" because the provided event is undefined!`);
                if ("start" != (s = n) && "done" != s) throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`);
                var s;
                const i = d(this._elementListeners, t, []), o = {name: e, phase: n, callback: r};
                i.push(o);
                const a = d(this._engine.statesByElement, t, {});
                return a.hasOwnProperty(e) || (Qt(t, A), Qt(t, "ng-trigger-" + e), a[e] = qt), () => {
                    this._engine.afterFlush(() => {
                        const t = i.indexOf(o);
                        t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e]
                    })
                }
            }

            register(t, e) {
                return !this._triggers[t] && (this._triggers[t] = e, !0)
            }

            _getTrigger(t) {
                const e = this._triggers[t];
                if (!e) throw new Error(`The provided animation trigger "${t}" has not been registered!`);
                return e
            }

            trigger(t, e, n, r = !0) {
                const s = this._getTrigger(e), i = new Bt(this.id, e, t);
                let o = this._engine.statesByElement.get(t);
                o || (Qt(t, A), Qt(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, o = {}));
                let a = o[e];
                const l = new Ht(n, this.id);
                if (!(n && n.hasOwnProperty("value")) && a && l.absorbOptions(a.options), o[e] = l, a || (a = qt), l.value !== Ut && a.value === l.value) {
                    if (!function (t, e) {
                        const n = Object.keys(t), r = Object.keys(e);
                        if (n.length != r.length) return !1;
                        for (let s = 0; s < n.length; s++) {
                            const r = n[s];
                            if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1
                        }
                        return !0
                    }(a.params, l.params)) {
                        const e = [], n = s.matchStyles(a.value, a.params, e), r = s.matchStyles(l.value, l.params, e);
                        e.length ? this._engine.reportError(e) : this._engine.afterFlush(() => {
                            q(t, n), U(t, r)
                        })
                    }
                    return
                }
                const c = d(this._engine.playersByElement, t, []);
                c.forEach(t => {
                    t.namespaceId == this.id && t.triggerName == e && t.queued && t.destroy()
                });
                let u = s.matchTransition(a.value, l.value, t, l.params), h = !1;
                if (!u) {
                    if (!r) return;
                    u = s.fallbackTransition, h = !0
                }
                return this._engine.totalQueuedPlayers++, this._queue.push({
                    element: t,
                    triggerName: e,
                    transition: u,
                    fromState: a,
                    toState: l,
                    player: i,
                    isFallbackTransition: h
                }), h || (Qt(t, Pt), i.onStart(() => {
                    Zt(t, Pt)
                })), i.onDone(() => {
                    let e = this.players.indexOf(i);
                    e >= 0 && this.players.splice(e, 1);
                    const n = this._engine.playersByElement.get(t);
                    if (n) {
                        let t = n.indexOf(i);
                        t >= 0 && n.splice(t, 1)
                    }
                }), this.players.push(i), c.push(i), i
            }

            deregister(t) {
                delete this._triggers[t], this._engine.statesByElement.forEach((e, n) => {
                    delete e[t]
                }), this._elementListeners.forEach((e, n) => {
                    this._elementListeners.set(n, e.filter(e => e.name != t))
                })
            }

            clearElementCache(t) {
                this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
                const e = this._engine.playersByElement.get(t);
                e && (e.forEach(t => t.destroy()), this._engine.playersByElement.delete(t))
            }

            _signalRemovalForInnerTriggers(t, e) {
                const n = this._engine.driver.query(t, j, !0);
                n.forEach(t => {
                    if (t.__ng_removed) return;
                    const n = this._engine.fetchNamespacesByElement(t);
                    n.size ? n.forEach(n => n.triggerLeaveAnimation(t, e, !1, !0)) : this.clearElementCache(t)
                }), this._engine.afterFlushAnimationsDone(() => n.forEach(t => this.clearElementCache(t)))
            }

            triggerLeaveAnimation(t, e, n, r) {
                const s = this._engine.statesByElement.get(t);
                if (s) {
                    const i = [];
                    if (Object.keys(s).forEach(e => {
                        if (this._triggers[e]) {
                            const n = this.trigger(t, e, Ut, r);
                            n && i.push(n)
                        }
                    }), i.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && a(i).onDone(() => this._engine.processLeaveNode(t)), !0
                }
                return !1
            }

            prepareLeaveAnimationListeners(t) {
                const e = this._elementListeners.get(t), n = this._engine.statesByElement.get(t);
                if (e && n) {
                    const r = new Set;
                    e.forEach(e => {
                        const s = e.name;
                        if (r.has(s)) return;
                        r.add(s);
                        const i = this._triggers[s].fallbackTransition, o = n[s] || qt, a = new Ht(Ut),
                            l = new Bt(this.id, s, t);
                        this._engine.totalQueuedPlayers++, this._queue.push({
                            element: t,
                            triggerName: s,
                            transition: i,
                            fromState: o,
                            toState: a,
                            player: l,
                            isFallbackTransition: !0
                        })
                    })
                }
            }

            removeNode(t, e) {
                const n = this._engine;
                if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e), this.triggerLeaveAnimation(t, e, !0)) return;
                let r = !1;
                if (n.totalAnimations) {
                    const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
                    if (e && e.length) r = !0; else {
                        let e = t;
                        for (; e = e.parentNode;) if (n.statesByElement.get(e)) {
                            r = !0;
                            break
                        }
                    }
                }
                if (this.prepareLeaveAnimationListeners(t), r) n.markElementAsRemoved(this.id, t, !1, e); else {
                    const r = t.__ng_removed;
                    r && r !== Lt || (n.afterFlush(() => this.clearElementCache(t)), n.destroyInnerAnimations(t), n._onRemovalComplete(t, e))
                }
            }

            insertNode(t, e) {
                Qt(t, this._hostClassName)
            }

            drainQueuedTransitions(t) {
                const e = [];
                return this._queue.forEach(n => {
                    const r = n.player;
                    if (r.destroyed) return;
                    const s = n.element, i = this._elementListeners.get(s);
                    i && i.forEach(e => {
                        if (e.name == n.triggerName) {
                            const r = h(s, n.triggerName, n.fromState.value, n.toState.value);
                            r._data = t, c(n.player, e.phase, r, e.callback)
                        }
                    }), r.markedForDestroy ? this._engine.afterFlush(() => {
                        r.destroy()
                    }) : e.push(n)
                }), this._queue = [], e.sort((t, e) => {
                    const n = t.transition.ast.depCount, r = e.transition.ast.depCount;
                    return 0 == n || 0 == r ? n - r : this._engine.driver.containsElement(t.element, e.element) ? 1 : -1
                })
            }

            destroy(t) {
                this.players.forEach(t => t.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, t)
            }

            elementContainsData(t) {
                let e = !1;
                return this._elementListeners.has(t) && (e = !0), e = !!this._queue.find(e => e.element === t) || e, e
            }
        }

        class zt {
            constructor(t, e, n) {
                this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (t, e) => {
                }
            }

            _onRemovalComplete(t, e) {
                this.onRemovalComplete(t, e)
            }

            get queuedPlayers() {
                const t = [];
                return this._namespaceList.forEach(e => {
                    e.players.forEach(e => {
                        e.queued && t.push(e)
                    })
                }), t
            }

            createNamespace(t, e) {
                const n = new $t(t, e, this);
                return this.bodyNode && this.driver.containsElement(this.bodyNode, e) ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
            }

            _balanceNamespaceList(t, e) {
                const n = this._namespaceList.length - 1;
                if (n >= 0) {
                    let r = !1;
                    for (let s = n; s >= 0; s--) if (this.driver.containsElement(this._namespaceList[s].hostElement, e)) {
                        this._namespaceList.splice(s + 1, 0, t), r = !0;
                        break
                    }
                    r || this._namespaceList.splice(0, 0, t)
                } else this._namespaceList.push(t);
                return this.namespacesByHostElement.set(e, t), t
            }

            register(t, e) {
                let n = this._namespaceLookup[t];
                return n || (n = this.createNamespace(t, e)), n
            }

            registerTrigger(t, e, n) {
                let r = this._namespaceLookup[t];
                r && r.register(e, n) && this.totalAnimations++
            }

            destroy(t, e) {
                if (!t) return;
                const n = this._fetchNamespace(t);
                this.afterFlush(() => {
                    this.namespacesByHostElement.delete(n.hostElement), delete this._namespaceLookup[t];
                    const e = this._namespaceList.indexOf(n);
                    e >= 0 && this._namespaceList.splice(e, 1)
                }), this.afterFlushAnimationsDone(() => n.destroy(e))
            }

            _fetchNamespace(t) {
                return this._namespaceLookup[t]
            }

            fetchNamespacesByElement(t) {
                const e = new Set, n = this.statesByElement.get(t);
                if (n) {
                    const t = Object.keys(n);
                    for (let r = 0; r < t.length; r++) {
                        const s = n[t[r]].namespaceId;
                        if (s) {
                            const t = this._fetchNamespace(s);
                            t && e.add(t)
                        }
                    }
                }
                return e
            }

            trigger(t, e, n, r) {
                if (Vt(e)) {
                    const s = this._fetchNamespace(t);
                    if (s) return s.trigger(e, n, r), !0
                }
                return !1
            }

            insertNode(t, e, n, r) {
                if (!Vt(e)) return;
                const s = e.__ng_removed;
                if (s && s.setForRemoval) {
                    s.setForRemoval = !1, s.setForMove = !0;
                    const t = this.collectedLeaveElements.indexOf(e);
                    t >= 0 && this.collectedLeaveElements.splice(t, 1)
                }
                if (t) {
                    const r = this._fetchNamespace(t);
                    r && r.insertNode(e, n)
                }
                r && this.collectEnterElement(e)
            }

            collectEnterElement(t) {
                this.collectedEnterElements.push(t)
            }

            markElementAsDisabled(t, e) {
                e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Qt(t, Dt)) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), Zt(t, Dt))
            }

            removeNode(t, e, n, r) {
                if (Vt(e)) {
                    const s = t ? this._fetchNamespace(t) : null;
                    if (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n) {
                        const n = this.namespacesByHostElement.get(e);
                        n && n.id !== t && n.removeNode(e, r)
                    }
                } else this._onRemovalComplete(e, r)
            }

            markElementAsRemoved(t, e, n, r) {
                this.collectedLeaveElements.push(e), e.__ng_removed = {
                    namespaceId: t,
                    setForRemoval: r,
                    hasAnimation: n,
                    removedBeforeQueried: !1
                }
            }

            listen(t, e, n, r, s) {
                return Vt(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {
                }
            }

            _buildInstruction(t, e, n, r, s) {
                return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, s)
            }

            destroyInnerAnimations(t) {
                let e = this.driver.query(t, j, !0);
                e.forEach(t => this.destroyActiveAnimationsForElement(t)), 0 != this.playersByQueriedElement.size && (e = this.driver.query(t, R, !0), e.forEach(t => this.finishActiveQueriedAnimationOnElement(t)))
            }

            destroyActiveAnimationsForElement(t) {
                const e = this.playersByElement.get(t);
                e && e.forEach(t => {
                    t.queued ? t.markedForDestroy = !0 : t.destroy()
                })
            }

            finishActiveQueriedAnimationOnElement(t) {
                const e = this.playersByQueriedElement.get(t);
                e && e.forEach(t => t.finish())
            }

            whenRenderingDone() {
                return new Promise(t => {
                    if (this.players.length) return a(this.players).onDone(() => t());
                    t()
                })
            }

            processLeaveNode(t) {
                const e = t.__ng_removed;
                if (e && e.setForRemoval) {
                    if (t.__ng_removed = Lt, e.namespaceId) {
                        this.destroyInnerAnimations(t);
                        const n = this._fetchNamespace(e.namespaceId);
                        n && n.clearElementCache(t)
                    }
                    this._onRemovalComplete(t, e.setForRemoval)
                }
                this.driver.matchesElement(t, Nt) && this.markElementAsDisabled(t, !1), this.driver.query(t, Nt, !0).forEach(t => {
                    this.markElementAsDisabled(t, !1)
                })
            }

            flush(t = -1) {
                let e = [];
                if (this.newHostElements.size && (this.newHostElements.forEach((t, e) => this._balanceNamespaceList(t, e)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (let n = 0; n < this.collectedEnterElements.length; n++) Qt(this.collectedEnterElements[n], "ng-star-inserted");
                if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                    const n = [];
                    try {
                        e = this._flushAnimations(n, t)
                    } finally {
                        for (let t = 0; t < n.length; t++) n[t]()
                    }
                } else for (let n = 0; n < this.collectedLeaveElements.length; n++) this.processLeaveNode(this.collectedLeaveElements[n]);
                if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(t => t()), this._flushFns = [], this._whenQuietFns.length) {
                    const t = this._whenQuietFns;
                    this._whenQuietFns = [], e.length ? a(e).onDone(() => {
                        t.forEach(t => t())
                    }) : t.forEach(t => t())
                }
            }

            reportError(t) {
                throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${t.join("\n")}`)
            }

            _flushAnimations(t, e) {
                const n = new dt, r = [], s = new Map, o = [], l = new Map, c = new Map, u = new Map, h = new Set;
                this.disabledNodes.forEach(t => {
                    h.add(t);
                    const e = this.driver.query(t, ".ng-animate-queued", !0);
                    for (let n = 0; n < e.length; n++) h.add(e[n])
                });
                const f = this.bodyNode, p = Array.from(this.statesByElement.keys()),
                    m = Wt(p, this.collectedEnterElements), g = new Map;
                let y = 0;
                m.forEach((t, e) => {
                    const n = x + y++;
                    g.set(e, n), t.forEach(t => Qt(t, n))
                });
                const b = [], _ = new Set, v = new Set;
                for (let i = 0; i < this.collectedLeaveElements.length; i++) {
                    const t = this.collectedLeaveElements[i], e = t.__ng_removed;
                    e && e.setForRemoval && (b.push(t), _.add(t), e.hasAnimation ? this.driver.query(t, ".ng-star-inserted", !0).forEach(t => _.add(t)) : v.add(t))
                }
                const w = new Map, S = Wt(p, Array.from(_));
                S.forEach((t, e) => {
                    const n = k + y++;
                    w.set(e, n), t.forEach(t => Qt(t, n))
                }), t.push(() => {
                    m.forEach((t, e) => {
                        const n = g.get(e);
                        t.forEach(t => Zt(t, n))
                    }), S.forEach((t, e) => {
                        const n = w.get(e);
                        t.forEach(t => Zt(t, n))
                    }), b.forEach(t => {
                        this.processLeaveNode(t)
                    })
                });
                const C = [], T = [];
                for (let i = this._namespaceList.length - 1; i >= 0; i--) this._namespaceList[i].drainQueuedTransitions(e).forEach(t => {
                    const e = t.player, s = t.element;
                    if (C.push(e), this.collectedEnterElements.length) {
                        const t = s.__ng_removed;
                        if (t && t.setForMove) return void e.destroy()
                    }
                    const i = !f || !this.driver.containsElement(f, s), a = w.get(s), h = g.get(s),
                        p = this._buildInstruction(t, n, h, a, i);
                    if (p.errors && p.errors.length) T.push(p); else {
                        if (i) return e.onStart(() => q(s, p.fromStyles)), e.onDestroy(() => U(s, p.toStyles)), void r.push(e);
                        if (t.isFallbackTransition) return e.onStart(() => q(s, p.fromStyles)), e.onDestroy(() => U(s, p.toStyles)), void r.push(e);
                        p.timelines.forEach(t => t.stretchStartingKeyframe = !0), n.append(s, p.timelines), o.push({
                            instruction: p,
                            player: e,
                            element: s
                        }), p.queriedElements.forEach(t => d(l, t, []).push(e)), p.preStyleProps.forEach((t, e) => {
                            const n = Object.keys(t);
                            if (n.length) {
                                let t = c.get(e);
                                t || c.set(e, t = new Set), n.forEach(e => t.add(e))
                            }
                        }), p.postStyleProps.forEach((t, e) => {
                            const n = Object.keys(t);
                            let r = u.get(e);
                            r || u.set(e, r = new Set), n.forEach(t => r.add(t))
                        })
                    }
                });
                if (T.length) {
                    const t = [];
                    T.forEach(e => {
                        t.push(`@${e.triggerName} has failed due to:\n`), e.errors.forEach(e => t.push(`- ${e}\n`))
                    }), C.forEach(t => t.destroy()), this.reportError(t)
                }
                const E = new Map, O = new Map;
                o.forEach(t => {
                    const e = t.element;
                    n.has(e) && (O.set(e, e), this._beforeAnimationBuild(t.player.namespaceId, t.instruction, E))
                }), r.forEach(t => {
                    const e = t.element;
                    this._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(t => {
                        d(E, e, []).push(t), t.destroy()
                    })
                });
                const A = b.filter(t => Jt(t, c, u)), j = new Map;
                Kt(j, this.driver, v, u, i.a).forEach(t => {
                    Jt(t, c, u) && A.push(t)
                });
                const I = new Map;
                m.forEach((t, e) => {
                    Kt(I, this.driver, new Set(t), c, i.l)
                }), A.forEach(t => {
                    const e = j.get(t), n = I.get(t);
                    j.set(t, Object.assign(Object.assign({}, e), n))
                });
                const P = [], D = [], N = {};
                o.forEach(t => {
                    const {element: e, player: i, instruction: o} = t;
                    if (n.has(e)) {
                        if (h.has(e)) return i.onDestroy(() => U(e, o.toStyles)), i.disabled = !0, i.overrideTotalTime(o.totalTime), void r.push(i);
                        let t = N;
                        if (O.size > 1) {
                            let n = e;
                            const r = [];
                            for (; n = n.parentNode;) {
                                const e = O.get(n);
                                if (e) {
                                    t = e;
                                    break
                                }
                                r.push(n)
                            }
                            r.forEach(e => O.set(e, t))
                        }
                        const n = this._buildAnimation(i.namespaceId, o, E, s, I, j);
                        if (i.setRealPlayer(n), t === N) P.push(i); else {
                            const e = this.playersByElement.get(t);
                            e && e.length && (i.parentPlayer = a(e)), r.push(i)
                        }
                    } else q(e, o.fromStyles), i.onDestroy(() => U(e, o.toStyles)), D.push(i), h.has(e) && r.push(i)
                }), D.forEach(t => {
                    const e = s.get(t.element);
                    if (e && e.length) {
                        const n = a(e);
                        t.setRealPlayer(n)
                    }
                }), r.forEach(t => {
                    t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                });
                for (let i = 0; i < b.length; i++) {
                    const t = b[i], e = t.__ng_removed;
                    if (Zt(t, k), e && e.hasAnimation) continue;
                    let n = [];
                    if (l.size) {
                        let e = l.get(t);
                        e && e.length && n.push(...e);
                        let r = this.driver.query(t, R, !0);
                        for (let t = 0; t < r.length; t++) {
                            let e = l.get(r[t]);
                            e && e.length && n.push(...e)
                        }
                    }
                    const r = n.filter(t => !t.destroyed);
                    r.length ? Yt(this, t, r) : this.processLeaveNode(t)
                }
                return b.length = 0, P.forEach(t => {
                    this.players.push(t), t.onDone(() => {
                        t.destroy();
                        const e = this.players.indexOf(t);
                        this.players.splice(e, 1)
                    }), t.play()
                }), P
            }

            elementContainsData(t, e) {
                let n = !1;
                const r = e.__ng_removed;
                return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
            }

            afterFlush(t) {
                this._flushFns.push(t)
            }

            afterFlushAnimationsDone(t) {
                this._whenQuietFns.push(t)
            }

            _getPreviousPlayers(t, e, n, r, s) {
                let i = [];
                if (e) {
                    const e = this.playersByQueriedElement.get(t);
                    e && (i = e)
                } else {
                    const e = this.playersByElement.get(t);
                    if (e) {
                        const t = !s || s == Ut;
                        e.forEach(e => {
                            e.queued || (t || e.triggerName == r) && i.push(e)
                        })
                    }
                }
                return (n || r) && (i = i.filter(t => !(n && n != t.namespaceId || r && r != t.triggerName))), i
            }

            _beforeAnimationBuild(t, e, n) {
                const r = e.element, s = e.isRemovalTransition ? void 0 : t,
                    i = e.isRemovalTransition ? void 0 : e.triggerName;
                for (const o of e.timelines) {
                    const t = o.element, a = t !== r, l = d(n, t, []);
                    this._getPreviousPlayers(t, a, s, i, e.toState).forEach(t => {
                        const e = t.getRealPlayer();
                        e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
                    })
                }
                q(r, e.fromStyles)
            }

            _buildAnimation(t, e, n, r, s, o) {
                const c = e.triggerName, u = e.element, h = [], f = new Set, p = new Set, m = e.timelines.map(e => {
                    const a = e.element;
                    f.add(a);
                    const d = a.__ng_removed;
                    if (d && d.removedBeforeQueried) return new i.d(e.duration, e.delay);
                    const m = a !== u, g = function (t) {
                            const e = [];
                            return Xt(t, e), e
                        }((n.get(a) || Ft).map(t => t.getRealPlayer())).filter(t => !!t.element && t.element === a),
                        y = s.get(a), b = o.get(a), _ = l(0, this._normalizer, 0, e.keyframes, y, b),
                        v = this._buildPlayer(e, _, g);
                    if (e.subTimeline && r && p.add(a), m) {
                        const e = new Bt(t, c, a);
                        e.setRealPlayer(v), h.push(e)
                    }
                    return v
                });
                h.forEach(t => {
                    d(this.playersByQueriedElement, t.element, []).push(t), t.onDone(() => function (t, e, n) {
                        let r;
                        if (t instanceof Map) {
                            if (r = t.get(e), r) {
                                if (r.length) {
                                    const t = r.indexOf(n);
                                    r.splice(t, 1)
                                }
                                0 == r.length && t.delete(e)
                            }
                        } else if (r = t[e], r) {
                            if (r.length) {
                                const t = r.indexOf(n);
                                r.splice(t, 1)
                            }
                            0 == r.length && delete t[e]
                        }
                        return r
                    }(this.playersByQueriedElement, t.element, t))
                }), f.forEach(t => Qt(t, I));
                const g = a(m);
                return g.onDestroy(() => {
                    f.forEach(t => Zt(t, I)), U(u, e.toStyles)
                }), p.forEach(t => {
                    d(r, t, []).push(g)
                }), g
            }

            _buildPlayer(t, e, n) {
                return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new i.d(t.duration, t.delay)
            }
        }

        class Bt {
            constructor(t, e, n) {
                this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new i.d, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
            }

            setRealPlayer(t) {
                this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(e => {
                    this._queuedCallbacks[e].forEach(n => c(t, e, void 0, n))
                }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
            }

            getRealPlayer() {
                return this._player
            }

            overrideTotalTime(t) {
                this.totalTime = t
            }

            syncPlayerEvents(t) {
                const e = this._player;
                e.triggerCallback && t.onStart(() => e.triggerCallback("start")), t.onDone(() => this.finish()), t.onDestroy(() => this.destroy())
            }

            _queueEvent(t, e) {
                d(this._queuedCallbacks, t, []).push(e)
            }

            onDone(t) {
                this.queued && this._queueEvent("done", t), this._player.onDone(t)
            }

            onStart(t) {
                this.queued && this._queueEvent("start", t), this._player.onStart(t)
            }

            onDestroy(t) {
                this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
            }

            init() {
                this._player.init()
            }

            hasStarted() {
                return !this.queued && this._player.hasStarted()
            }

            play() {
                !this.queued && this._player.play()
            }

            pause() {
                !this.queued && this._player.pause()
            }

            restart() {
                !this.queued && this._player.restart()
            }

            finish() {
                this._player.finish()
            }

            destroy() {
                this.destroyed = !0, this._player.destroy()
            }

            reset() {
                !this.queued && this._player.reset()
            }

            setPosition(t) {
                this.queued || this._player.setPosition(t)
            }

            getPosition() {
                return this.queued ? 0 : this._player.getPosition()
            }

            triggerCallback(t) {
                const e = this._player;
                e.triggerCallback && e.triggerCallback(t)
            }
        }

        function Vt(t) {
            return t && 1 === t.nodeType
        }

        function Gt(t, e) {
            const n = t.style.display;
            return t.style.display = null != e ? e : "none", n
        }

        function Kt(t, e, n, r, s) {
            const i = [];
            n.forEach(t => i.push(Gt(t)));
            const o = [];
            r.forEach((n, r) => {
                const i = {};
                n.forEach(t => {
                    const n = i[t] = e.computeStyle(r, t, s);
                    n && 0 != n.length || (r.__ng_removed = Mt, o.push(r))
                }), t.set(r, i)
            });
            let a = 0;
            return n.forEach(t => Gt(t, i[a++])), o
        }

        function Wt(t, e) {
            const n = new Map;
            if (t.forEach(t => n.set(t, [])), 0 == e.length) return n;
            const r = new Set(e), s = new Map;

            function i(t) {
                if (!t) return 1;
                let e = s.get(t);
                if (e) return e;
                const o = t.parentNode;
                return e = n.has(o) ? o : r.has(o) ? 1 : i(o), s.set(t, e), e
            }

            return e.forEach(t => {
                const e = i(t);
                1 !== e && n.get(e).push(t)
            }), n
        }

        function Qt(t, e) {
            if (t.classList) t.classList.add(e); else {
                let n = t.$$classes;
                n || (n = t.$$classes = {}), n[e] = !0
            }
        }

        function Zt(t, e) {
            if (t.classList) t.classList.remove(e); else {
                let n = t.$$classes;
                n && delete n[e]
            }
        }

        function Yt(t, e, n) {
            a(n).onDone(() => t.processLeaveNode(e))
        }

        function Xt(t, e) {
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                r instanceof i.k ? Xt(r.players, e) : e.push(r)
            }
        }

        function Jt(t, e, n) {
            const r = n.get(t);
            if (!r) return !1;
            let s = e.get(t);
            return s ? r.forEach(t => s.add(t)) : e.set(t, r), n.delete(t), !0
        }

        class te {
            constructor(t, e, n) {
                this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = (t, e) => {
                }, this._transitionEngine = new zt(t, e, n), this._timelineEngine = new Rt(t, e, n), this._transitionEngine.onRemovalComplete = (t, e) => this.onRemovalComplete(t, e)
            }

            registerTrigger(t, e, n, r, s) {
                const i = t + "-" + r;
                let o = this._triggerCache[i];
                if (!o) {
                    const t = [], e = it(this._driver, s, t);
                    if (t.length) throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join("\n - ")}`);
                    o = function (t, e) {
                        return new At(t, e)
                    }(r, e), this._triggerCache[i] = o
                }
                this._transitionEngine.registerTrigger(e, r, o)
            }

            register(t, e) {
                this._transitionEngine.register(t, e)
            }

            destroy(t, e) {
                this._transitionEngine.destroy(t, e)
            }

            onInsert(t, e, n, r) {
                this._transitionEngine.insertNode(t, e, n, r)
            }

            onRemove(t, e, n, r) {
                this._transitionEngine.removeNode(t, e, r || !1, n)
            }

            disableAnimations(t, e) {
                this._transitionEngine.markElementAsDisabled(t, e)
            }

            process(t, e, n, r) {
                if ("@" == n.charAt(0)) {
                    const [t, s] = f(n);
                    this._timelineEngine.command(t, e, s, r)
                } else this._transitionEngine.trigger(t, e, n, r)
            }

            listen(t, e, n, r, s) {
                if ("@" == n.charAt(0)) {
                    const [t, r] = f(n);
                    return this._timelineEngine.listen(t, e, r, s)
                }
                return this._transitionEngine.listen(t, e, n, r, s)
            }

            flush(t = -1) {
                this._transitionEngine.flush(t)
            }

            get players() {
                return this._transitionEngine.players.concat(this._timelineEngine.players)
            }

            whenRenderingDone() {
                return this._transitionEngine.whenRenderingDone()
            }
        }

        function ee(t, e) {
            let n = null, r = null;
            return Array.isArray(e) && e.length ? (n = re(e[0]), e.length > 1 && (r = re(e[e.length - 1]))) : e && (n = re(e)), n || r ? new ne(t, n, r) : null
        }

        let ne = (() => {
            class t {
                constructor(e, n, r) {
                    this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
                    let s = t.initialStylesByElement.get(e);
                    s || t.initialStylesByElement.set(e, s = {}), this._initialStyles = s
                }

                start() {
                    this._state < 1 && (this._startStyles && U(this._element, this._startStyles, this._initialStyles), this._state = 1)
                }

                finish() {
                    this.start(), this._state < 2 && (U(this._element, this._initialStyles), this._endStyles && (U(this._element, this._endStyles), this._endStyles = null), this._state = 1)
                }

                destroy() {
                    this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (q(this._element, this._startStyles), this._endStyles = null), this._endStyles && (q(this._element, this._endStyles), this._endStyles = null), U(this._element, this._initialStyles), this._state = 3)
                }
            }

            return t.initialStylesByElement = new WeakMap, t
        })();

        function re(t) {
            let e = null;
            const n = Object.keys(t);
            for (let r = 0; r < n.length; r++) {
                const s = n[r];
                se(s) && (e = e || {}, e[s] = t[s])
            }
            return e
        }

        function se(t) {
            return "display" === t || "position" === t
        }

        const ie = "animation", oe = "animationend";

        class ae {
            constructor(t, e, n, r, s, i, o) {
                this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = s, this._fillMode = i, this._onDoneFn = o, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = t => this._handleCallback(t)
            }

            apply() {
                !function (t, e) {
                    const n = fe(t, "").trim();
                    n.length && (function (t, e) {
                        let n = 0;
                        for (let r = 0; r < t.length; r++) "," === t.charAt(r) && n++
                    }(n), e = `${n}, ${e}`), de(t, "", e)
                }(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`), he(this._element, this._eventFn, !1), this._startTime = Date.now()
            }

            pause() {
                le(this._element, this._name, "paused")
            }

            resume() {
                le(this._element, this._name, "running")
            }

            setPosition(t) {
                const e = ce(this._element, this._name);
                this._position = t * this._duration, de(this._element, "Delay", `-${this._position}ms`, e)
            }

            getPosition() {
                return this._position
            }

            _handleCallback(t) {
                const e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
            }

            finish() {
                this._finished || (this._finished = !0, this._onDoneFn(), he(this._element, this._eventFn, !0))
            }

            destroy() {
                this._destroyed || (this._destroyed = !0, this.finish(), function (t, e) {
                    const n = fe(t, "").split(","), r = ue(n, e);
                    r >= 0 && (n.splice(r, 1), de(t, "", n.join(",")))
                }(this._element, this._name))
            }
        }

        function le(t, e, n) {
            de(t, "PlayState", n, ce(t, e))
        }

        function ce(t, e) {
            const n = fe(t, "");
            return n.indexOf(",") > 0 ? ue(n.split(","), e) : ue([n], e)
        }

        function ue(t, e) {
            for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
            return -1
        }

        function he(t, e, n) {
            n ? t.removeEventListener(oe, e) : t.addEventListener(oe, e)
        }

        function de(t, e, n, r) {
            const s = ie + e;
            if (null != r) {
                const e = t.style[s];
                if (e.length) {
                    const t = e.split(",");
                    t[r] = n, n = t.join(",")
                }
            }
            t.style[s] = n
        }

        function fe(t, e) {
            return t.style[ie + e] || ""
        }

        class pe {
            constructor(t, e, n, r, s, i, o, a) {
                this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = s, this._finalStyles = o, this._specialStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = i || "linear", this.totalTime = r + s, this._buildStyler()
            }

            onStart(t) {
                this._onStartFns.push(t)
            }

            onDone(t) {
                this._onDoneFns.push(t)
            }

            onDestroy(t) {
                this._onDestroyFns.push(t)
            }

            destroy() {
                this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
            }

            _flushDoneFns() {
                this._onDoneFns.forEach(t => t()), this._onDoneFns = []
            }

            _flushStartFns() {
                this._onStartFns.forEach(t => t()), this._onStartFns = []
            }

            finish() {
                this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
            }

            setPosition(t) {
                this._styler.setPosition(t)
            }

            getPosition() {
                return this._styler.getPosition()
            }

            hasStarted() {
                return this._state >= 2
            }

            init() {
                this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
            }

            play() {
                this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
            }

            pause() {
                this.init(), this._styler.pause()
            }

            restart() {
                this.reset(), this.play()
            }

            reset() {
                this._styler.destroy(), this._buildStyler(), this._styler.apply()
            }

            _buildStyler() {
                this._styler = new ae(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", () => this.finish())
            }

            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t => t()), e.length = 0
            }

            beforeDestroy() {
                this.init();
                const t = {};
                if (this.hasStarted()) {
                    const e = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(n => {
                        "offset" != n && (t[n] = e ? this._finalStyles[n] : X(this.element, n))
                    })
                }
                this.currentSnapshot = t
            }
        }

        class me extends i.d {
            constructor(t, e) {
                super(), this.element = t, this._startingStyles = {}, this.__initialized = !1, this._styles = T(e)
            }

            init() {
                !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(t => {
                    this._startingStyles[t] = this.element.style[t]
                }), super.init())
            }

            play() {
                this._startingStyles && (this.init(), Object.keys(this._styles).forEach(t => this.element.style.setProperty(t, this._styles[t])), super.play())
            }

            destroy() {
                this._startingStyles && (Object.keys(this._startingStyles).forEach(t => {
                    const e = this._startingStyles[t];
                    e ? this.element.style.setProperty(t, e) : this.element.style.removeProperty(t)
                }), this._startingStyles = null, super.destroy())
            }
        }

        class ge {
            constructor() {
                this._count = 0, this._head = document.querySelector("head")
            }

            validateStyleProperty(t) {
                return v(t)
            }

            matchesElement(t, e) {
                return w(t, e)
            }

            containsElement(t, e) {
                return S(t, e)
            }

            query(t, e, n) {
                return C(t, e, n)
            }

            computeStyle(t, e, n) {
                return window.getComputedStyle(t)[e]
            }

            buildKeyframeElement(t, e, n) {
                n = n.map(t => T(t));
                let r = `@keyframes ${e} {\n`, s = "";
                n.forEach(t => {
                    s = " ";
                    const e = parseFloat(t.offset);
                    r += `${s}${100 * e}% {\n`, s += " ", Object.keys(t).forEach(e => {
                        const n = t[e];
                        switch (e) {
                            case"offset":
                                return;
                            case"easing":
                                return void (n && (r += `${s}animation-timing-function: ${n};\n`));
                            default:
                                return void (r += `${s}${e}: ${n};\n`)
                        }
                    }), r += `${s}}\n`
                }), r += "}\n";
                const i = document.createElement("style");
                return i.textContent = r, i
            }

            animate(t, e, n, r, s, i = [], o) {
                const a = i.filter(t => t instanceof pe), l = {};
                Q(n, r) && a.forEach(t => {
                    let e = t.currentSnapshot;
                    Object.keys(e).forEach(t => l[t] = e[t])
                });
                const c = function (t) {
                    let e = {};
                    return t && (Array.isArray(t) ? t : [t]).forEach(t => {
                        Object.keys(t).forEach(n => {
                            "offset" != n && "easing" != n && (e[n] = t[n])
                        })
                    }), e
                }(e = Z(t, e, l));
                if (0 == n) return new me(t, c);
                const u = "gen_css_kf_" + this._count++, h = this.buildKeyframeElement(t, u, e);
                document.querySelector("head").appendChild(h);
                const d = ee(t, e), f = new pe(t, e, u, n, r, s, c, d);
                return f.onDestroy(() => {
                    var t;
                    (t = h).parentNode.removeChild(t)
                }), f
            }
        }

        class ye {
            constructor(t, e, n, r) {
                this.element = t, this.keyframes = e, this.options = n, this._specialStyles = r, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
            }

            _onFinish() {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
            }

            init() {
                this._buildPlayer(), this._preparePlayerBeforeStart()
            }

            _buildPlayer() {
                if (this._initialized) return;
                this._initialized = !0;
                const t = this.keyframes;
                this.domPlayer = this._triggerWebAnimation(this.element, t, this.options), this._finalKeyframe = t.length ? t[t.length - 1] : {}, this.domPlayer.addEventListener("finish", () => this._onFinish())
            }

            _preparePlayerBeforeStart() {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }

            _triggerWebAnimation(t, e, n) {
                return t.animate(e, n)
            }

            onStart(t) {
                this._onStartFns.push(t)
            }

            onDone(t) {
                this._onDoneFns.push(t)
            }

            onDestroy(t) {
                this._onDestroyFns.push(t)
            }

            play() {
                this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(t => t()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
            }

            pause() {
                this.init(), this.domPlayer.pause()
            }

            finish() {
                this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
            }

            reset() {
                this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
            }

            _resetDomPlayerState() {
                this.domPlayer && this.domPlayer.cancel()
            }

            restart() {
                this.reset(), this.play()
            }

            hasStarted() {
                return this._started
            }

            destroy() {
                this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
            }

            setPosition(t) {
                void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = t * this.time
            }

            getPosition() {
                return this.domPlayer.currentTime / this.time
            }

            get totalTime() {
                return this._delay + this._duration
            }

            beforeDestroy() {
                const t = {};
                this.hasStarted() && Object.keys(this._finalKeyframe).forEach(e => {
                    "offset" != e && (t[e] = this._finished ? this._finalKeyframe[e] : X(this.element, e))
                }), this.currentSnapshot = t
            }

            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t => t()), e.length = 0
            }
        }

        class be {
            constructor() {
                this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(_e().toString()), this._cssKeyframesDriver = new ge
            }

            validateStyleProperty(t) {
                return v(t)
            }

            matchesElement(t, e) {
                return w(t, e)
            }

            containsElement(t, e) {
                return S(t, e)
            }

            query(t, e, n) {
                return C(t, e, n)
            }

            computeStyle(t, e, n) {
                return window.getComputedStyle(t)[e]
            }

            overrideWebAnimationsSupport(t) {
                this._isNativeImpl = t
            }

            animate(t, e, n, r, s, i = [], o) {
                if (!o && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
                const a = {duration: n, delay: r, fill: 0 == r ? "both" : "forwards"};
                s && (a.easing = s);
                const l = {}, c = i.filter(t => t instanceof ye);
                Q(n, r) && c.forEach(t => {
                    let e = t.currentSnapshot;
                    Object.keys(e).forEach(t => l[t] = e[t])
                });
                const u = ee(t, e = Z(t, e = e.map(t => L(t, !1)), l));
                return new ye(t, e, a, u)
            }
        }

        function _e() {
            return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
        }

        var ve = n("ofXK");
        let we = (() => {
            class t extends i.b {
                constructor(t, e) {
                    super(), this._nextAnimationId = 0, this._renderer = t.createRenderer(e.body, {
                        id: "0",
                        encapsulation: s.Q.None,
                        styles: [],
                        data: {animation: []}
                    })
                }

                build(t) {
                    const e = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    const n = Array.isArray(t) ? Object(i.f)(t) : t;
                    return Te(this._renderer, null, e, "register", [n]), new Se(e, this._renderer)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(s.F), s.Tb(ve.c))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        class Se extends i.c {
            constructor(t, e) {
                super(), this._id = t, this._renderer = e
            }

            create(t, e) {
                return new Ce(this._id, t, e || {}, this._renderer)
            }
        }

        class Ce {
            constructor(t, e, n, r) {
                this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
            }

            _listen(t, e) {
                return this._renderer.listen(this.element, `@@${this.id}:${t}`, e)
            }

            _command(t, ...e) {
                return Te(this._renderer, this.element, this.id, t, e)
            }

            onDone(t) {
                this._listen("done", t)
            }

            onStart(t) {
                this._listen("start", t)
            }

            onDestroy(t) {
                this._listen("destroy", t)
            }

            init() {
                this._command("init")
            }

            hasStarted() {
                return this._started
            }

            play() {
                this._command("play"), this._started = !0
            }

            pause() {
                this._command("pause")
            }

            restart() {
                this._command("restart")
            }

            finish() {
                this._command("finish")
            }

            destroy() {
                this._command("destroy")
            }

            reset() {
                this._command("reset")
            }

            setPosition(t) {
                this._command("setPosition", t)
            }

            getPosition() {
                var t, e;
                return null !== (e = null === (t = this._renderer.engine.players[+this.id]) || void 0 === t ? void 0 : t.getPosition()) && void 0 !== e ? e : 0
            }
        }

        function Te(t, e, n, r, s) {
            return t.setProperty(e, `@@${n}:${r}`, s)
        }

        const Ee = "@", Oe = "@.disabled";
        let xe = (() => {
            class t {
                constructor(t, e, n) {
                    this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = (t, e) => {
                        e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                    }
                }

                createRenderer(t, e) {
                    const n = this.delegate.createRenderer(t, e);
                    if (!(t && e && e.data && e.data.animation)) {
                        let t = this._rendererCache.get(n);
                        return t || (t = new ke("", n, this.engine), this._rendererCache.set(n, t)), t
                    }
                    const r = e.id, s = e.id + "-" + this._currentId;
                    this._currentId++, this.engine.register(s, t);
                    const i = e => {
                        Array.isArray(e) ? e.forEach(i) : this.engine.registerTrigger(r, s, t, e.name, e)
                    };
                    return e.data.animation.forEach(i), new Ae(this, s, n, this.engine)
                }

                begin() {
                    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                }

                _scheduleCountTask() {
                    this.promise.then(() => {
                        this._microtaskId++
                    })
                }

                scheduleListenerCallback(t, e, n) {
                    t >= 0 && t < this._microtaskId ? this._zone.run(() => e(n)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => {
                        this._zone.run(() => {
                            this._animationCallbacksBuffer.forEach(t => {
                                const [e, n] = t;
                                e(n)
                            }), this._animationCallbacksBuffer = []
                        })
                    }), this._animationCallbacksBuffer.push([e, n]))
                }

                end() {
                    this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => {
                        this._scheduleCountTask(), this.engine.flush(this._microtaskId)
                    }), this.delegate.end && this.delegate.end()
                }

                whenRenderingDone() {
                    return this.engine.whenRenderingDone()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(s.F), s.Tb(te), s.Tb(s.A))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();

        class ke {
            constructor(t, e, n) {
                this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? t => e.destroyNode(t) : null
            }

            get data() {
                return this.delegate.data
            }

            destroy() {
                this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
            }

            createElement(t, e) {
                return this.delegate.createElement(t, e)
            }

            createComment(t) {
                return this.delegate.createComment(t)
            }

            createText(t) {
                return this.delegate.createText(t)
            }

            appendChild(t, e) {
                this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
            }

            insertBefore(t, e, n, r = !0) {
                this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, r)
            }

            removeChild(t, e, n) {
                this.engine.onRemove(this.namespaceId, e, this.delegate, n)
            }

            selectRootElement(t, e) {
                return this.delegate.selectRootElement(t, e)
            }

            parentNode(t) {
                return this.delegate.parentNode(t)
            }

            nextSibling(t) {
                return this.delegate.nextSibling(t)
            }

            setAttribute(t, e, n, r) {
                this.delegate.setAttribute(t, e, n, r)
            }

            removeAttribute(t, e, n) {
                this.delegate.removeAttribute(t, e, n)
            }

            addClass(t, e) {
                this.delegate.addClass(t, e)
            }

            removeClass(t, e) {
                this.delegate.removeClass(t, e)
            }

            setStyle(t, e, n, r) {
                this.delegate.setStyle(t, e, n, r)
            }

            removeStyle(t, e, n) {
                this.delegate.removeStyle(t, e, n)
            }

            setProperty(t, e, n) {
                e.charAt(0) == Ee && e == Oe ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
            }

            setValue(t, e) {
                this.delegate.setValue(t, e)
            }

            listen(t, e, n) {
                return this.delegate.listen(t, e, n)
            }

            disableAnimations(t, e) {
                this.engine.disableAnimations(t, e)
            }
        }

        class Ae extends ke {
            constructor(t, e, n, r) {
                super(e, n, r), this.factory = t, this.namespaceId = e
            }

            setProperty(t, e, n) {
                e.charAt(0) == Ee ? "." == e.charAt(1) && e == Oe ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
            }

            listen(t, e, n) {
                if (e.charAt(0) == Ee) {
                    const r = function (t) {
                        switch (t) {
                            case"body":
                                return document.body;
                            case"document":
                                return document;
                            case"window":
                                return window;
                            default:
                                return t
                        }
                    }(t);
                    let s = e.substr(1), i = "";
                    return s.charAt(0) != Ee && ([s, i] = function (t) {
                        const e = t.indexOf(".");
                        return [t.substring(0, e), t.substr(e + 1)]
                    }(s)), this.engine.listen(this.namespaceId, r, s, i, t => {
                        this.factory.scheduleListenerCallback(t._data || -1, n, t)
                    })
                }
                return this.delegate.listen(t, e, n)
            }
        }

        let je = (() => {
            class t extends te {
                constructor(t, e, n) {
                    super(t.body, e, n)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(ve.c), s.Tb(O), s.Tb(St))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac}), t
        })();
        const Ie = [{
            provide: O, useFactory: function () {
                return "function" == typeof _e() ? new be : new ge
            }
        }, {provide: new s.r("AnimationModuleType"), useValue: "BrowserAnimations"}, {
            provide: i.b,
            useClass: we
        }, {
            provide: St, useFactory: function () {
                return new Ct
            }
        }, {provide: te, useClass: je}, {
            provide: s.F, useFactory: function (t, e, n) {
                return new xe(t, e, n)
            }, deps: [r.d, te, s.A]
        }];
        let Re = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = s.Ib({type: t}), t.\u0275inj = s.Hb({providers: Ie, imports: [r.a]}), t
        })();
        var Pe = n("5eHb"), De = n("tk/3"), Ne = n("tyNb");
        let Fe = (() => {
            class t {
                constructor(t) {
                    this.router = t
                }

                canActivate() {
                    return !window.localStorage.getItem("token") || (this.router.navigateByUrl("/dashboard"), !1)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Tb(Ne.b))
            }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var Le = n("pbSD");
        let Me = (() => {
            class t {
                constructor(t) {
                    this.jsonService = t, this.title = "geloo-dashboard"
                }

                ngOnInit() {
                    this.getJsonData()
                }

                getJsonData() {
                    this.jsonService.getCountries().subscribe(t => {
                        localStorage.setItem("countries", JSON.stringify(t))
                    }), this.jsonService.getCurrencies().subscribe(t => {
                        localStorage.setItem("currencies", JSON.stringify(t))
                    }), this.jsonService.getEducations().subscribe(t => {
                        localStorage.setItem("educations", JSON.stringify(t))
                    }), this.jsonService.getProfessions().subscribe(t => {
                        localStorage.setItem("professions", JSON.stringify(t))
                    }), this.jsonService.getInterests().subscribe(t => {
                        localStorage.setItem("interests", JSON.stringify(t))
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(s.Kb(Le.a))
            }, t.\u0275cmp = s.Eb({
                type: t, selectors: [["app-root"]], decls: 1, vars: 0, template: function (t, e) {
                    1 & t && s.Lb(0, "router-outlet")
                }, directives: [Ne.g], styles: [""]
            }), t
        })();
        var He = n("vmXk");
        const Ue = [{
            path: "",
            component: Me,
            children: [{path: "", redirectTo: "auth", pathMatch: "full"}, {
                path: "auth",
                loadChildren: () => Promise.all([n.e(1), n.e(0), n.e(11)]).then(n.bind(null, "305l")).then(t => t.AuthModule),
                canActivate: [Fe]
            }, {
                path: "dashboard",
                loadChildren: () => Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "XoyV")).then(t => t.DashboardModule),
                canActivate: [(() => {
                    class t {
                        constructor(t) {
                            this.router = t
                        }

                        canActivate() {
                            if (!window.localStorage.getItem("token")) return this.router.navigateByUrl("/auth"), !1;
                            const t = (new He.a).initialize(JSON.parse(window.localStorage.getItem("user")));
                            return !(!t || "ADMIN" != t.role && "SUPER ADMIN" != t.role) || (localStorage.removeItem("token"), localStorage.removeItem("user"), this.router.navigateByUrl("/auth"), !1)
                        }
                    }

                    return t.\u0275fac = function (e) {
                        return new (e || t)(s.Tb(Ne.b))
                    }, t.\u0275prov = s.Gb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
                })()]
            }]
        }];
        let qe = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = s.Ib({type: t}), t.\u0275inj = s.Hb({imports: [[Ne.f.forRoot(Ue)], Ne.f]}), t
        })(), $e = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275mod = s.Ib({type: t, bootstrap: [Me]}), t.\u0275inj = s.Hb({
                providers: [],
                imports: [[r.a, Re, De.b, qe, Pe.a.forRoot({
                    positionClass: "toast-bottom-right",
                    newestOnTop: !0,
                    tapToDismiss: !0,
                    autoDismiss: !0,
                    maxOpened: 4,
                    timeOut: 1e3
                })]]
            }), t
        })();
        Object(s.S)(), r.c().bootstrapModule($e).catch(t => console.error(t))
    }, zn8P: function (t, e) {
        function n(t) {
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            })
        }

        n.keys = function () {
            return []
        }, n.resolve = n, t.exports = n, n.id = "zn8P"
    }, zx2A: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        }), n.d(e, "b", function () {
            return a
        }), n.d(e, "c", function () {
            return l
        });
        var r = n("7o/Q"), s = n("HDdC"), i = n("SeVD");

        class o extends r.a {
            constructor(t) {
                super(), this.parent = t
            }

            _next(t) {
                this.parent.notifyNext(t)
            }

            _error(t) {
                this.parent.notifyError(t), this.unsubscribe()
            }

            _complete() {
                this.parent.notifyComplete(), this.unsubscribe()
            }
        }

        class a extends r.a {
            notifyNext(t) {
                this.destination.next(t)
            }

            notifyError(t) {
                this.destination.error(t)
            }

            notifyComplete() {
                this.destination.complete()
            }
        }

        function l(t, e) {
            if (e.closed) return;
            if (t instanceof s.a) return t.subscribe(e);
            let n;
            try {
                n = Object(i.a)(t)(e)
            } catch (r) {
                e.error(r)
            }
            return n
        }
    }
}, [[0, 4]]]);