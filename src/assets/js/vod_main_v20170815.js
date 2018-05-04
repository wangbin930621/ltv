//播放器配置
var xLVideoPlayer = function() {
        function a() { f++;
            this.id = "XLPlayer_" + f + (new Date).valueOf() }
        var c = function() {
                function a() { if (!B) { try { var s = m.getElementsByTagName("body")[0].appendChild(m.createElement("span"));
                            s.parentNode.removeChild(s) } catch (W) { return } B = !0; for (var s = F.length, b = 0; b < s; b++) F[b]() } }

                function d(s) { B ? s() : F[F.length] = s }

                function f(s) {
                    if (typeof u.addEventListener != h) u.addEventListener("load", s, !1);
                    else if (typeof m.addEventListener != h) m.addEventListener("load", s, !1);
                    else if (typeof u.attachEvent !=
                        h) V(u, "onload", s);
                    else if ("function" == typeof u.onload) { var a = u.onload;
                        u.onload = function() { a();
                            s() } } else u.onload = s
                }

                function n() { var s = m.getElementsByTagName("body")[0],
                        a = m.createElement(l);
                    a.setAttribute("type", G); var b = s.appendChild(a); if (b) { var c = 0;
                        (function() { if (typeof b.GetVariable != h) { var d = b.GetVariable("$version");
                                d && (d = d.split(" ")[1].split(","), k.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)]) } else if (10 > c) { c++;
                                setTimeout(arguments.callee, 10); return } s.removeChild(a);
                            b = null;
                            e() })() } else e() }

                function e() {
                    var s = x.length;
                    if (0 < s)
                        for (var a = 0; a < s; a++) {
                            var b = x[a].id,
                                c = x[a].callbackFn,
                                d = { success: !1, id: b };
                            if (0 < k.pv[0]) {
                                var e = v(b);
                                if (e)
                                    if (!C(x[a].swfVersion) || k.wk && 312 > k.wk)
                                        if (x[a].expressInstall && L()) {
                                            d = {};
                                            d.data = x[a].expressInstall;
                                            d.width = e.getAttribute("width") || "0";
                                            d.height = e.getAttribute("height") || "0";
                                            e.getAttribute("class") && (d.styleclass = e.getAttribute("class"));
                                            e.getAttribute("align") && (d.align = e.getAttribute("align"));
                                            for (var g = {}, e = e.getElementsByTagName("param"), f = e.length, l = 0; l <
                                                f; l++) "movie" != e[l].getAttribute("name").toLowerCase() && (g[e[l].getAttribute("name")] = e[l].getAttribute("value"));
                                            M(d, g, b, c)
                                        } else y(e), c && c(d);
                                else t(b, !0), c && (d.success = !0, d.ref = r(b), c(d))
                            } else t(b, !0), c && ((b = r(b)) && typeof b.SetVariable != h && (d.success = !0, d.ref = b), c(d))
                        }
                }

                function r(s) { var a = null;
                    (s = v(s)) && "OBJECT" == s.nodeName && (typeof s.SetVariable != h ? a = s : (s = s.getElementsByTagName(l)[0]) && (a = s)); return a }

                function L() { return !H && C("6.0.65") && (k.win || k.mac) && !(k.wk && 312 > k.wk) }

                function M(a, b, d, c) {
                    H = !0;
                    N = c || null;
                    Q = { success: !1, id: d };
                    var e = v(d);
                    if (e) {
                        "OBJECT" == e.nodeName ? (E = z(e), I = null) : (E = e, I = d);
                        a.id = R;
                        if (typeof a.width == h || !/%$/.test(a.width) && 310 > parseInt(a.width, 10)) a.width = "310";
                        if (typeof a.height == h || !/%$/.test(a.height) && 137 > parseInt(a.height, 10)) a.height = "137";
                        m.title = m.title.slice(0, 47) + " - Flash Player Installation";
                        c = k.ie && k.win ? "ActiveX" : "PlugIn";
                        c = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + c + "&MMdoctitle=" + m.title;
                        b.flashvars = typeof b.flashvars !=
                            h ? b.flashvars + ("&" + c) : c;
                        k.ie && k.win && 4 != e.readyState && (c = m.createElement("div"), d += "SWFObjectNew", c.setAttribute("id", d), e.parentNode.insertBefore(c, e), e.style.display = "none", function() { 4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10) }());
                        O(a, b, d)
                    }
                }

                function y(a) {
                    if (k.ie && k.win && 4 != a.readyState) {
                        var b = m.createElement("div");
                        a.parentNode.insertBefore(b, a);
                        b.parentNode.replaceChild(z(a), b);
                        a.style.display = "none";
                        (function() {
                            4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee,
                                10)
                        })()
                    } else a.parentNode.replaceChild(z(a), a)
                }

                function z(a) { var b = m.createElement("div"); if (k.win && k.ie) b.innerHTML = a.innerHTML;
                    else if (a = a.getElementsByTagName(l)[0])
                        if (a = a.childNodes)
                            for (var d = a.length, c = 0; c < d; c++) 1 == a[c].nodeType && "PARAM" == a[c].nodeName || 8 == a[c].nodeType || b.appendChild(a[c].cloneNode(!0)); return b }

                function O(a, b, c) {
                    var d, e = v(c);
                    if (k.wk && 312 > k.wk) return d;
                    if (e)
                        if (typeof a.id == h && (a.id = c), k.ie && k.win) {
                            var g = "",
                                f;
                            for (f in a) a[f] != Object.prototype[f] && ("data" == f.toLowerCase() ? b.movie =
                                a[f] : "styleclass" == f.toLowerCase() ? g += ' class="' + a[f] + '"' : "classid" != f.toLowerCase() && (g += " " + f + '="' + a[f] + '"'));
                            f = "";
                            for (var r in b) b[r] != Object.prototype[r] && (f += '<param name="' + r + '" value="' + b[r] + '" />');
                            e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + g + ">" + f + "</object>";
                            J[J.length] = a.id;
                            d = v(a.id)
                        } else {
                            r = m.createElement(l);
                            r.setAttribute("type", G);
                            for (var p in a) a[p] != Object.prototype[p] && ("styleclass" == p.toLowerCase() ? r.setAttribute("class", a[p]) : "classid" != p.toLowerCase() &&
                                r.setAttribute(p, a[p]));
                            for (g in b) b[g] != Object.prototype[g] && "movie" != g.toLowerCase() && (a = r, f = g, p = b[g], c = m.createElement("param"), c.setAttribute("name", f), c.setAttribute("value", p), a.appendChild(c));
                            e.parentNode.replaceChild(r, e);
                            d = r
                        }
                    return d
                }

                function S(a) {
                    var b = v(a);
                    b && "OBJECT" == b.nodeName && (k.ie && k.win ? (b.style.display = "none", function() { if (4 == b.readyState) { var c = v(a); if (c) { for (var d in c) "function" == typeof c[d] && (c[d] = null);
                                    c.parentNode.removeChild(c) } } else setTimeout(arguments.callee, 10) }()) :
                        b.parentNode.removeChild(b))
                }

                function v(a) { var b = null; try { b = m.getElementById(a) } catch (c) {} return b }

                function V(a, b, c) { a.attachEvent(b, c);
                    D[D.length] = [a, b, c] }

                function C(a) { var b = k.pv;
                    a = a.split(".");
                    a[0] = parseInt(a[0], 10);
                    a[1] = parseInt(a[1], 10) || 0;
                    a[2] = parseInt(a[2], 10) || 0; return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1 }

                function q(a, b, c, d) {
                    if (!k.ie || !k.mac) {
                        var e = m.getElementsByTagName("head")[0];
                        e && (c = c && "string" == typeof c ? c : "screen", d && (P = w = null), w && P == c || (d = m.createElement("style"),
                            d.setAttribute("type", "text/css"), d.setAttribute("media", c), w = e.appendChild(d), k.ie && k.win && typeof m.styleSheets != h && 0 < m.styleSheets.length && (w = m.styleSheets[m.styleSheets.length - 1]), P = c), k.ie && k.win ? w && typeof w.addRule == l && w.addRule(a, b) : w && typeof m.createTextNode != h && w.appendChild(m.createTextNode(a + " {" + b + "}")))
                    }
                }

                function t(a, b) { if (T) { var c = b ? "visible" : "hidden";
                        B && v(a) ? v(a).style.visibility = c : q("#" + a, "visibility:" + c) } }

                function K(a) {
                    return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent !=
                        h ? encodeURIComponent(a) : a
                }
                var h = "undefined",
                    l = "object",
                    G = "application/x-shockwave-flash",
                    R = "SWFObjectExprInst",
                    u = window,
                    m = document,
                    A = navigator,
                    U = !1,
                    F = [function() { U ? n() : e() }],
                    x = [],
                    J = [],
                    D = [],
                    E, I, N, Q, B = !1,
                    H = !1,
                    w, P, T = !0,
                    k = function() {
                        var a = typeof m.getElementById != h && typeof m.getElementsByTagName != h && typeof m.createElement != h,
                            b = A.userAgent.toLowerCase(),
                            c = A.platform.toLowerCase(),
                            d = c ? /win/.test(c) : /win/.test(b),
                            c = c ? /mac/.test(c) : /mac/.test(b),
                            b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,
                                "$1")) : !1,
                            e = !+"\v1",
                            g = [0, 0, 0],
                            f = null;
                        if (typeof A.plugins != h && typeof A.plugins["Shockwave Flash"] == l) !(f = A.plugins["Shockwave Flash"].description) || typeof A.mimeTypes != h && A.mimeTypes[G] && !A.mimeTypes[G].enabledPlugin || (U = !0, e = !1, f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), g[0] = parseInt(f.replace(/^(.*)\..*$/, "$1"), 10), g[1] = parseInt(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10), g[2] = /[a-zA-Z]/.test(f) ? parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                        else if (typeof u.ActiveXObject != h) try {
                            var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            r && (f = r.GetVariable("$version")) && (e = !0, f = f.split(" ")[1].split(","), g = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)])
                        } catch (k) {}
                        return { w3: a, pv: g, wk: b, ie: e, win: d, mac: c }
                    }();
                (function() {
                    k.w3 && ((typeof m.readyState != h && "complete" == m.readyState || typeof m.readyState == h && (m.getElementsByTagName("body")[0] || m.body)) && a(), B || (typeof m.addEventListener != h && m.addEventListener("DOMContentLoaded", a, !1), k.ie && k.win && (m.attachEvent("onreadystatechange", function() {
                        "complete" == m.readyState && (m.detachEvent("onreadystatechange",
                            arguments.callee), a())
                    }), u == top && function() { if (!B) { try { m.documentElement.doScroll("left") } catch (c) { setTimeout(arguments.callee, 0); return } a() } }()), k.wk && function() { B || (/loaded|complete/.test(m.readyState) ? a() : setTimeout(arguments.callee, 0)) }(), f(a)))
                })();
                (function() { k.ie && k.win && window.attachEvent("onunload", function() { for (var a = D.length, b = 0; b < a; b++) D[b][0].detachEvent(D[b][1], D[b][2]);
                        a = J.length; for (b = 0; b < a; b++) S(J[b]); for (var d in k) k[d] = null;
                        k = null; for (var e in c) c[e] = null;
                        c = null }) })();
                return {
                    registerObject: function(a,
                        b, c, d) { if (k.w3 && a && b) { var e = {};
                            e.id = a;
                            e.swfVersion = b;
                            e.expressInstall = c;
                            e.callbackFn = d;
                            x[x.length] = e;
                            t(a, !1) } else d && d({ success: !1, id: a }) },
                    getObjectById: function(a) { if (k.w3) return r(a) },
                    embedSWF: function(a, b, c, e, f, r, p, m, q, n) {
                        var y = { success: !1, id: b };
                        k.w3 && !(k.wk && 312 > k.wk) && a && b && c && e && f ? (t(b, !1), d(function() {
                            c += "";
                            e += "";
                            var d = {};
                            if (q && typeof q === l)
                                for (var g in q) d[g] = q[g];
                            d.data = a;
                            d.width = c;
                            d.height = e;
                            g = {};
                            if (m && typeof m === l)
                                for (var k in m) g[k] = m[k];
                            if (p && typeof p === l)
                                for (var z in p) g.flashvars = typeof g.flashvars !=
                                    h ? g.flashvars + ("&" + z + "=" + p[z]) : z + "=" + p[z];
                            if (C(f)) k = O(d, g, b), d.id == b && t(b, !0), y.success = !0, y.ref = k;
                            else { if (r && L()) { d.data = r;
                                    M(d, g, b, n); return } t(b, !0) } n && n(y)
                        })) : n && n(y)
                    },
                    switchOffAutoHideShow: function() { T = !1 },
                    ua: k,
                    getFlashPlayerVersion: function() { return { major: k.pv[0], minor: k.pv[1], release: k.pv[2] } },
                    hasFlashPlayerVersion: C,
                    createSWF: function(a, b, c) { if (k.w3) return O(a, b, c) },
                    showExpressInstall: function(a, b, c, d) { k.w3 && L() && M(a, b, c, d) },
                    removeSWF: function(a) { k.w3 && S(a) },
                    createCSS: function(a, b, c, d) {
                        k.w3 &&
                            q(a, b, c, d)
                    },
                    addDomLoadEvent: d,
                    addLoadEvent: f,
                    getQueryParamValue: function(a) { var b = m.location.search || m.location.hash; if (b) { /\?/.test(b) && (b = b.split("?")[1]); if (null == a) return K(b); for (var b = b.split("&"), c = 0; c < b.length; c++)
                                if (b[c].substring(0, b[c].indexOf("=")) == a) return K(b[c].substring(b[c].indexOf("=") + 1)) } return "" },
                    expressInstallCallback: function() { if (H) { var a = v(R);
                            a && E && (a.parentNode.replaceChild(E, a), I && (t(I, !0), k.ie && k.win && (E.style.display = "block")), N && N(Q));
                            H = !1 } }
                }
            }(),
            f = 0,
            d = { vod: { flashUrl: "http://player.cztv.com/newplayer/vod/pc/YFPlayer_cztv_vod_2017113002.swf", h5Url: "" }, live: { flashUrl: "XLPL.swf", h5Url: "" } };
        a.prototype = {
            creatPlayer: function(a) { var g = a.flashvars,
                    f = d.vod.flashUrl,
                    n = { quality: "high", bgcolor: "#000000", allowscriptaccess: "always", allowfullscreen: "true" },
                    e = { id: this.id, name: this.id };
                a.hasOwnProperty("type") && (f = d[a.type].flashUrl); for (var r in a.params) n[r] = a.params[r];
                c.embedSWF(f, a.id, a.width, a.height, "10.2.0", "http://tv.cztv.com/bluetv/vod/playerProductInstall.swf", g, n, e) },
            getPlayer: function() { return c.getObjectById(this.id) },
            getVideoTime: function() { return this.getPlayer().getVideoTime() },
            seekTo: function(a) { this.getPlayer().seekTo(a) }
        };
        return a
    }();
    