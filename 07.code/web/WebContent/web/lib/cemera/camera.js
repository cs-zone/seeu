// Camera slideshow v1.0.7 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
define(function(require, exports, module)
{
     return function(jquery){
        ;
        (function(a) {
            a.fn.camera = function(b, c) {
                function bj(c) {
                    j.addClass("camerasliding");
                    R = false;
                    var d = parseFloat(a("div.cameraSlide.cameracurrent", k).index());
                    if (c > 0) {
                        var l = c - 1
                    } else if (d == B - 1) {
                        var l = 0
                    } else {
                        var l = d + 1
                    }
                    var m = a(".cameraSlide:eq(" + l + ")", k);
                    a(".cameraContent", g).fadeOut(600);
                    a(".camera_caption", g).show();
                    a(".camerarelative", m).append(a("> div ", j).eq(l).find("> div.camera_effected"));
                    a(".camera_target_content .cameraContent:eq(" + l + ")", f).append(a("> div ", j).eq(l).find("> div"));
                    if (!a(".imgLoaded", m).length) {
                        var n = v[l];
                        var o = new Image;
                        o.src = n;
                        m.css("visibility", "hidden");
                        m.prepend(a(o).attr("class", "imgLoaded").css("visibility", "hidden"));
                        var p, q;
                        if (!a(o).get(0).complete || p == "0" || q == "0" || typeof p === "undefined" || p === false || typeof q === "undefined" || q === false) {
                            a(".camera_loader", f).delay(500).fadeIn(400);
                            o.onload = function() {
                                var b = a(o).width();
                                var c = a(o).height();
                                a(o).attr("width", b).attr("height", c).attr("data-alignment", z[l]).attr("data-portrait", y[l]);
                                k.find(".cameraSlide_" + l).hide().css("visibility", "visible");
                                K();
                                bj(l + 1)
                            }
                        } else {
                            var p = a(o).width();
                            var q = a(o).height();
                            a(o).attr("width", p).attr("height", q).attr("data-alignment", z[l]).attr("data-portrait", y[l]);
                            k.find(".cameraSlide_" + l).hide().css("visibility", "visible");
                            K();
                            o.onload = function() {
                                bj(l + 1)
                            }
                        }
                    } else {
                        b.onLoaded.call(this);
                        if (a(".camera_loader", f).is(":visible")) {
                            a(".camera_loader", f).fadeOut(400)
                        } else {
                            a(".camera_loader", f).css({
                                visibility: "hidden"
                            });
                            a(".camera_loader", f).fadeOut(400, function() {
                                a(".camera_loader", f).css({
                                    visibility: "visible"
                                })
                            })
                        }
                        var w = b.rows,
                            x = b.cols,
                            A = 1,
                            C = 0,
                            D, F, G, H, I, J = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                        marginLeft = 0, marginTop = 0, opacityOnGrid = 0;
                        if (b.opacityOnGrid == true) {
                            opacityOnGrid = 0
                        } else {
                            opacityOnGrid = 1
                        }
                        var N = a(" > div", j).eq(l).attr("data-fx");
                        if (e() && b.mobileFx != "" && b.mobileFx != "default") {
                            H = b.mobileFx
                        } else {
                            if (typeof N !== "undefined" && N !== false && N !== "default") {
                                H = N
                            } else {
                                H = b.fx
                            }
                        }
                        if (H == "random") {
                            H = X(J);
                            H = H[0]
                        } else {
                            H = H;
                            if (H.indexOf(",") > 0) {
                                H = H.replace(/ /g, "");
                                H = H.split(",");
                                H = X(H);
                                H = H[0]
                            }
                        }
                        dataEasing = a(" > div", j).eq(l).attr("data-easing");
                        mobileEasing = a(" > div", j).eq(l).attr("data-mobileEasing");
                        if (e() && b.mobileEasing != "" && b.mobileEasing != "default") {
                            if (typeof mobileEasing !== "undefined" && mobileEasing !== false && mobileEasing !== "default") {
                                I = mobileEasing
                            } else {
                                I = b.mobileEasing
                            }
                        } else {
                            if (typeof dataEasing !== "undefined" && dataEasing !== false && dataEasing !== "default") {
                                I = dataEasing
                            } else {
                                I = b.easing
                            }
                        }
                        D = a(" > div", j).eq(l).attr("data-slideOn");
                        if (typeof D !== "undefined" && D !== false) {
                            O = D
                        } else {
                            if (b.slideOn == "random") {
                                var O = new Array("next", "prev");
                                O = X(O);
                                O = O[0]
                            } else {
                                O = b.slideOn
                            }
                        }
                        var P = a(" > div", j).eq(l).attr("data-time");
                        if (typeof P !== "undefined" && P !== false && P !== "") {
                            F = parseFloat(P)
                        } else {
                            F = b.time
                        }
                        var Q = a(" > div", j).eq(l).attr("data-transPeriod");
                        if (typeof Q !== "undefined" && Q !== false && Q !== "") {
                            G = parseFloat(Q)
                        } else {
                            G = b.transPeriod
                        }
                        if (!a(j).hasClass("camerastarted")) {
                            H = "simpleFade";
                            O = "next";
                            I = "";
                            G = 400;
                            a(j).addClass("camerastarted")
                        }
                        switch (H) {
                            case "simpleFade":
                                x = 1;
                                w = 1;
                                break;
                            case "curtainTopLeft":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "curtainTopRight":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "curtainBottomLeft":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "curtainBottomRight":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "curtainSliceLeft":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "curtainSliceRight":
                                if (b.slicedCols == 0) {
                                    x = b.cols
                                } else {
                                    x = b.slicedCols
                                }
                                w = 1;
                                break;
                            case "blindCurtainTopLeft":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "blindCurtainTopRight":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "blindCurtainBottomLeft":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "blindCurtainBottomRight":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "blindCurtainSliceTop":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "blindCurtainSliceBottom":
                                if (b.slicedRows == 0) {
                                    w = b.rows
                                } else {
                                    w = b.slicedRows
                                }
                                x = 1;
                                break;
                            case "stampede":
                                C = "-" + G;
                                break;
                            case "mosaic":
                                C = b.gridDifference;
                                break;
                            case "mosaicReverse":
                                C = b.gridDifference;
                                break;
                            case "mosaicRandom":
                                break;
                            case "mosaicSpiral":
                                C = b.gridDifference;
                                A = 1.7;
                                break;
                            case "mosaicSpiralReverse":
                                C = b.gridDifference;
                                A = 1.7;
                                break;
                            case "topLeftBottomRight":
                                C = b.gridDifference;
                                A = 6;
                                break;
                            case "bottomRightTopLeft":
                                C = b.gridDifference;
                                A = 6;
                                break;
                            case "bottomLeftTopRight":
                                C = b.gridDifference;
                                A = 6;
                                break;
                            case "topRightBottomLeft":
                                C = b.gridDifference;
                                A = 6;
                                break;
                            case "scrollLeft":
                                x = 1;
                                w = 1;
                                break;
                            case "scrollRight":
                                x = 1;
                                w = 1;
                                break;
                            case "scrollTop":
                                x = 1;
                                w = 1;
                                break;
                            case "scrollBottom":
                                x = 1;
                                w = 1;
                                break;
                            case "scrollHorz":
                                x = 1;
                                w = 1;
                                break
                        }
                        var T = 0;
                        var Y = w * x;
                        var Z = t - Math.floor(t / x) * x;
                        var _ = u - Math.floor(u / w) * w;
                        var ba;
                        var be;
                        var bf = 0;
                        var bg = 0;
                        var bk = new Array;
                        var bl = new Array;
                        var bm = new Array;
                        while (T < Y) {
                            bk.push(T);
                            bl.push(T);
                            E.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                            var bn = a(".cameraappended:eq(" + T + ")", k);
                            if (H == "scrollLeft" || H == "scrollRight" || H == "scrollTop" || H == "scrollBottom" || H == "scrollHorz") {
                                S.eq(l).clone().show().appendTo(bn)
                            } else {
                                if (O == "next") {
                                    S.eq(l).clone().show().appendTo(bn)
                                } else {
                                    S.eq(d).clone().show().appendTo(bn)
                                }
                            }
                            if (T % x < Z) {
                                ba = 1
                            } else {
                                ba = 0
                            }
                            if (T % x == 0) {
                                bf = 0
                            }
                            if (Math.floor(T / x) < _) {
                                be = 1
                            } else {
                                be = 0
                            }
                            bn.css({
                                height: Math.floor(u / w + be + 1),
                                left: bf,
                                top: bg,
                                width: Math.floor(t / x + ba + 1)
                            });
                            a("> .cameraSlide", bn).css({
                                height: u,
                                "margin-left": "-" + bf + "px",
                                "margin-top": "-" + bg + "px",
                                width: t
                            });
                            bf = bf + bn.width() - 1;
                            if (T % x == x - 1) {
                                bg = bg + bn.height() - 1
                            }
                            T++
                        }
                        switch (H) {
                            case "curtainTopLeft":
                                break;
                            case "curtainBottomLeft":
                                break;
                            case "curtainSliceLeft":
                                break;
                            case "curtainTopRight":
                                bk = bk.reverse();
                                break;
                            case "curtainBottomRight":
                                bk = bk.reverse();
                                break;
                            case "curtainSliceRight":
                                bk = bk.reverse();
                                break;
                            case "blindCurtainTopLeft":
                                break;
                            case "blindCurtainBottomLeft":
                                bk = bk.reverse();
                                break;
                            case "blindCurtainSliceTop":
                                break;
                            case "blindCurtainTopRight":
                                break;
                            case "blindCurtainBottomRight":
                                bk = bk.reverse();
                                break;
                            case "blindCurtainSliceBottom":
                                bk = bk.reverse();
                                break;
                            case "stampede":
                                bk = X(bk);
                                break;
                            case "mosaic":
                                break;
                            case "mosaicReverse":
                                bk = bk.reverse();
                                break;
                            case "mosaicRandom":
                                bk = X(bk);
                                break;
                            case "mosaicSpiral":
                                var bo = w / 2,
                                    bp, bq, br, bs = 0;
                                for (br = 0; br < bo; br++) {
                                    bq = br;
                                    for (bp = br; bp < x - br - 1; bp++) {
                                        bm[bs++] = bq * x + bp
                                    }
                                    bp = x - br - 1;
                                    for (bq = br; bq < w - br - 1; bq++) {
                                        bm[bs++] = bq * x + bp
                                    }
                                    bq = w - br - 1;
                                    for (bp = x - br - 1; bp > br; bp--) {
                                        bm[bs++] = bq * x + bp
                                    }
                                    bp = br;
                                    for (bq = w - br - 1; bq > br; bq--) {
                                        bm[bs++] = bq * x + bp
                                    }
                                }
                                bk = bm;
                                break;
                            case "mosaicSpiralReverse":
                                var bo = w / 2,
                                    bp, bq, br, bs = Y - 1;
                                for (br = 0; br < bo; br++) {
                                    bq = br;
                                    for (bp = br; bp < x - br - 1; bp++) {
                                        bm[bs--] = bq * x + bp
                                    }
                                    bp = x - br - 1;
                                    for (bq = br; bq < w - br - 1; bq++) {
                                        bm[bs--] = bq * x + bp
                                    }
                                    bq = w - br - 1;
                                    for (bp = x - br - 1; bp > br; bp--) {
                                        bm[bs--] = bq * x + bp
                                    }
                                    bp = br;
                                    for (bq = w - br - 1; bq > br; bq--) {
                                        bm[bs--] = bq * x + bp
                                    }
                                }
                                bk = bm;
                                break;
                            case "topLeftBottomRight":
                                for (var bq = 0; bq < w; bq++)
                                    for (var bp = 0; bp < x; bp++) {
                                        bm.push(bp + bq)
                                    }
                                bl = bm;
                                break;
                            case "bottomRightTopLeft":
                                for (var bq = 0; bq < w; bq++)
                                    for (var bp = 0; bp < x; bp++) {
                                        bm.push(bp + bq)
                                    }
                                bl = bm.reverse();
                                break;
                            case "bottomLeftTopRight":
                                for (var bq = w; bq > 0; bq--)
                                    for (var bp = 0; bp < x; bp++) {
                                        bm.push(bp + bq)
                                    }
                                bl = bm;
                                break;
                            case "topRightBottomLeft":
                                for (var bq = 0; bq < w; bq++)
                                    for (var bp = x; bp > 0; bp--) {
                                        bm.push(bp + bq)
                                    }
                                bl = bm;
                                break
                        }
                        b.onStartTransition.call(this);
                        a.each(bk, function(c, e) {
                            function o() {
                                b.onEndTransition.call(this);
                                a(this).addClass("cameraeased");
                                if (a(".cameraeased", k).length >= 0) {
                                    a(s).css({
                                        visibility: "visible"
                                    })
                                }
                                if (a(".cameraeased", k).length == Y) {
                                    bh();
                                    a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", g).each(function() {
                                        a(this).css("visibility", "hidden")
                                    });
                                    S.eq(l).show().css("z-index", "999").addClass("cameracurrent");
                                    S.eq(d).css("z-index", "1").removeClass("cameracurrent");
                                    a(".cameraContent", g).eq(l).addClass("cameracurrent");
                                    if (d >= 0) {
                                        a(".cameraContent", g).eq(d).removeClass("cameracurrent")
                                    }
                                    if (a("> div", j).eq(l).attr("data-video") != "hide" && a(".cameraContent.cameracurrent .imgFake", g).length) {
                                        a(".cameraContent.cameracurrent .imgFake", g).click()
                                    }
                                    var c = S.eq(l).find(".fadeIn").length;
                                    var e = a(".cameraContent", g).eq(l).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                                    if (c != 0) {
                                        a(".cameraSlide.cameracurrent .fadeIn", g).each(function() {
                                            if (a(this).attr("data-easing") != "") {
                                                var b = a(this).attr("data-easing")
                                            } else {
                                                var b = I
                                            }
                                            var d = a(this);
                                            if (typeof d.attr("data-outerWidth") === "undefined" || d.attr("data-outerWidth") === false || d.attr("data-outerWidth") === "") {
                                                var e = d.outerWidth();
                                                d.attr("data-outerWidth", e)
                                            } else {
                                                var e = d.attr("data-outerWidth")
                                            }
                                            if (typeof d.attr("data-outerHeight") === "undefined" || d.attr("data-outerHeight") === false || d.attr("data-outerHeight") === "") {
                                                var f = d.outerHeight();
                                                d.attr("data-outerHeight", f)
                                            } else {
                                                var f = d.attr("data-outerHeight")
                                            }
                                            var g = d.position();
                                            var h = g.left;
                                            var i = g.top;
                                            var j = d.attr("class");
                                            var k = d.index();
                                            var l = d.parents(".camerarelative").outerHeight();
                                            var m = d.parents(".camerarelative").outerWidth();
                                            if (j.indexOf("fadeIn") != -1) {
                                                d.animate({
                                                    opacity: 0
                                                }, 0).css("visibility", "visible").delay(F / c * .1 * (k - 1)).animate({
                                                    opacity: 1
                                                }, F / c * .15, b)
                                            } else {
                                                d.css("visibility", "visible")
                                            }
                                        })
                                    }
                                    a(".cameraContent.cameracurrent", g).show();
                                    if (e != 0) {
                                        a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", g).each(function() {
                                            if (a(this).attr("data-easing") != "") {
                                                var b = a(this).attr("data-easing")
                                            } else {
                                                var b = I
                                            }
                                            var c = a(this);
                                            var d = c.position();
                                            var f = d.left;
                                            var g = d.top;
                                            var h = c.attr("class");
                                            var i = c.index();
                                            var j = c.outerHeight();
                                            if (h.indexOf("moveFromLeft") != -1) {
                                                c.css({
                                                    left: "-" + t + "px",
                                                    right: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    left: d.left
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("moveFromRight") != -1) {
                                                c.css({
                                                    left: t + "px",
                                                    right: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    left: d.left
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("moveFromTop") != -1) {
                                                c.css({
                                                    top: "-" + u + "px",
                                                    bottom: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    top: d.top
                                                }, F / e * .15, b, function() {
                                                    c.css({
                                                        top: "auto",
                                                        bottom: 0
                                                    })
                                                })
                                            } else if (h.indexOf("moveFromBottom") != -1) {
                                                c.css({
                                                    top: u + "px",
                                                    bottom: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    top: d.top
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("fadeFromLeft") != -1) {
                                                c.animate({
                                                    opacity: 0
                                                }, 0).css({
                                                    left: "-" + t + "px",
                                                    right: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    left: d.left,
                                                    opacity: 1
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("fadeFromRight") != -1) {
                                                c.animate({
                                                    opacity: 0
                                                }, 0).css({
                                                    left: t + "px",
                                                    right: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    left: d.left,
                                                    opacity: 1
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("fadeFromTop") != -1) {
                                                c.animate({
                                                    opacity: 0
                                                }, 0).css({
                                                    top: "-" + u + "px",
                                                    bottom: "auto"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    top: d.top,
                                                    opacity: 1
                                                }, F / e * .15, b, function() {
                                                    c.css({
                                                        top: "auto",
                                                        bottom: 0
                                                    })
                                                })
                                            } else if (h.indexOf("fadeFromBottom") != -1) {
                                                c.animate({
                                                    opacity: 0
                                                }, 0).css({
                                                    bottom: "-" + j + "px"
                                                });
                                                c.css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    bottom: "0",
                                                    opacity: 1
                                                }, F / e * .15, b)
                                            } else if (h.indexOf("fadeIn") != -1) {
                                                c.animate({
                                                    opacity: 0
                                                }, 0).css("visibility", "visible").delay(F / e * .1 * (i - 1)).animate({
                                                    opacity: 1
                                                }, F / e * .15, b)
                                            } else {
                                                c.css("visibility", "visible")
                                            }
                                        })
                                    }
                                    a(".cameraappended", k).remove();
                                    j.removeClass("camerasliding");
                                    S.eq(d).hide();
                                    a("#" + i).animate({
                                        opacity: b.loaderOpacity
                                    }, 200);
                                    L = setInterval(function() {
                                        if (j.hasClass("stopped")) {
                                            clearInterval(L)
                                        }
                                        if (h != "pie") {
                                            if (bb <= 1.002 && !j.hasClass("stopped") && !j.hasClass("paused")) {
                                                bb = bb + .005
                                            } else if (bb <= 1 && (j.hasClass("stopped") || j.hasClass("paused"))) {
                                                bb = bb
                                            } else {
                                                if (!j.hasClass("stopped") && !j.hasClass("paused")) {
                                                    clearInterval(L);
                                                    W();
                                                    a("#" + i).animate({
                                                        opacity: 0
                                                    }, 200, function() {
                                                        clearTimeout(M);
                                                        M = setTimeout(bi, n);
                                                        bj();
                                                        b.onStartLoading.call(this)
                                                    })
                                                }
                                            }
                                            switch (U) {
                                                case "leftToRight":
                                                    a("#" + i).css({
                                                        right: a(".camera_bar_cont", V).width() - a(".camera_bar_cont", V).width() * bb
                                                    });
                                                    break;
                                                case "rightToLeft":
                                                    a("#" + i).css({
                                                        left: a(".camera_bar_cont", V).width() - a(".camera_bar_cont", V).width() * bb
                                                    });
                                                    break;
                                                case "topToBottom":
                                                    a("#" + i).css({
                                                        bottom: a(".camera_bar_cont", V).height() - a(".camera_bar_cont", V).height() * bb
                                                    });
                                                    break;
                                                case "bottomToTop":
                                                    a("#" + i).css({
                                                        top: a(".camera_bar_cont", V).height() - a(".camera_bar_cont", V).height() * bb
                                                    });
                                                    break
                                            }
                                        } else {
                                            bc = bb;
                                            bd.clearRect(0, 0, b.pieDiameter, b.pieDiameter);
                                            bd.globalCompositeOperation = "destination-over";
                                            bd.beginPath();
                                            bd.arc(b.pieDiameter / 2, b.pieDiameter / 2, b.pieDiameter / 2 - b.loaderStroke, 0, Math.PI * 2, false);
                                            bd.lineWidth = b.loaderStroke;
                                            bd.strokeStyle = b.loaderBgColor;
                                            bd.stroke();
                                            bd.closePath();
                                            bd.globalCompositeOperation = "source-over";
                                            bd.beginPath();
                                            bd.arc(b.pieDiameter / 2, b.pieDiameter / 2, b.pieDiameter / 2 - b.loaderStroke, 0, Math.PI * 2 * bc, false);
                                            bd.lineWidth = b.loaderStroke - b.loaderPadding * 2;
                                            bd.strokeStyle = b.loaderColor;
                                            bd.stroke();
                                            bd.closePath();
                                            if (bb <= 1.002 && !j.hasClass("stopped") && !j.hasClass("paused")) {
                                                bb = bb + .005
                                            } else if (bb <= 1 && (j.hasClass("stopped") || j.hasClass("paused"))) {
                                                bb = bb
                                            } else {
                                                if (!j.hasClass("stopped") && !j.hasClass("paused")) {
                                                    clearInterval(L);
                                                    W();
                                                    a("#" + i + ", .camera_canvas_wrap", V).animate({
                                                        opacity: 0
                                                    }, 200, function() {
                                                        clearTimeout(M);
                                                        M = setTimeout(bi, n);
                                                        bj();
                                                        b.onStartLoading.call(this)
                                                    })
                                                }
                                            }
                                        }
                                    }, F * .005)
                                }
                            }
                            if (e % x < Z) {
                                ba = 1
                            } else {
                                ba = 0
                            }
                            if (e % x == 0) {
                                bf = 0
                            }
                            if (Math.floor(e / x) < _) {
                                be = 1
                            } else {
                                be = 0
                            }
                            switch (H) {
                                case "simpleFade":
                                    height = u;
                                    width = t;
                                    opacityOnGrid = 0;
                                    break;
                                case "curtainTopLeft":
                                    height = 0, width = Math.floor(t / x + ba + 1), marginTop = "-" + Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "curtainTopRight":
                                    height = 0, width = Math.floor(t / x + ba + 1), marginTop = "-" + Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "curtainBottomLeft":
                                    height = 0, width = Math.floor(t / x + ba + 1), marginTop = Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "curtainBottomRight":
                                    height = 0, width = Math.floor(t / x + ba + 1), marginTop = Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "curtainSliceLeft":
                                    height = 0, width = Math.floor(t / x + ba + 1);
                                    if (e % 2 == 0) {
                                        marginTop = Math.floor(u / w + be + 1) + "px"
                                    } else {
                                        marginTop = "-" + Math.floor(u / w + be + 1) + "px"
                                    }
                                    break;
                                case "curtainSliceRight":
                                    height = 0, width = Math.floor(t / x + ba + 1);
                                    if (e % 2 == 0) {
                                        marginTop = Math.floor(u / w + be + 1) + "px"
                                    } else {
                                        marginTop = "-" + Math.floor(u / w + be + 1) + "px"
                                    }
                                    break;
                                case "blindCurtainTopLeft":
                                    height = Math.floor(u / w + be + 1), width = 0, marginLeft = "-" + Math.floor(t / x + ba + 1) + "px";
                                    break;
                                case "blindCurtainTopRight":
                                    height = Math.floor(u / w + be + 1), width = 0, marginLeft = Math.floor(t / x + ba + 1) + "px";
                                    break;
                                case "blindCurtainBottomLeft":
                                    height = Math.floor(u / w + be + 1), width = 0, marginLeft = "-" + Math.floor(t / x + ba + 1) + "px";
                                    break;
                                case "blindCurtainBottomRight":
                                    height = Math.floor(u / w + be + 1), width = 0, marginLeft = Math.floor(t / x + ba + 1) + "px";
                                    break;
                                case "blindCurtainSliceBottom":
                                    height = Math.floor(u / w + be + 1), width = 0;
                                    if (e % 2 == 0) {
                                        marginLeft = "-" + Math.floor(t / x + ba + 1) + "px"
                                    } else {
                                        marginLeft = Math.floor(t / x + ba + 1) + "px"
                                    }
                                    break;
                                case "blindCurtainSliceTop":
                                    height = Math.floor(u / w + be + 1), width = 0;
                                    if (e % 2 == 0) {
                                        marginLeft = "-" + Math.floor(t / x + ba + 1) + "px"
                                    } else {
                                        marginLeft = Math.floor(t / x + ba + 1) + "px"
                                    }
                                    break;
                                case "stampede":
                                    height = 0;
                                    width = 0;
                                    marginLeft = t * .2 * (c % x - (x - Math.floor(x / 2))) + "px";
                                    marginTop = u * .2 * (Math.floor(c / x) + 1 - (w - Math.floor(w / 2))) + "px";
                                    break;
                                case "mosaic":
                                    height = 0;
                                    width = 0;
                                    break;
                                case "mosaicReverse":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) + "px";
                                    marginTop = Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "mosaicRandom":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) * .5 + "px";
                                    marginTop = Math.floor(u / w + be + 1) * .5 + "px";
                                    break;
                                case "mosaicSpiral":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) * .5 + "px";
                                    marginTop = Math.floor(u / w + be + 1) * .5 + "px";
                                    break;
                                case "mosaicSpiralReverse":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) * .5 + "px";
                                    marginTop = Math.floor(u / w + be + 1) * .5 + "px";
                                    break;
                                case "topLeftBottomRight":
                                    height = 0;
                                    width = 0;
                                    break;
                                case "bottomRightTopLeft":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) + "px";
                                    marginTop = Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "bottomLeftTopRight":
                                    height = 0;
                                    width = 0;
                                    marginLeft = 0;
                                    marginTop = Math.floor(u / w + be + 1) + "px";
                                    break;
                                case "topRightBottomLeft":
                                    height = 0;
                                    width = 0;
                                    marginLeft = Math.floor(t / x + ba + 1) + "px";
                                    marginTop = 0;
                                    break;
                                case "scrollRight":
                                    height = u;
                                    width = t;
                                    marginLeft = -t;
                                    break;
                                case "scrollLeft":
                                    height = u;
                                    width = t;
                                    marginLeft = t;
                                    break;
                                case "scrollTop":
                                    height = u;
                                    width = t;
                                    marginTop = u;
                                    break;
                                case "scrollBottom":
                                    height = u;
                                    width = t;
                                    marginTop = -u;
                                    break;
                                case "scrollHorz":
                                    height = u;
                                    width = t;
                                    if (d == 0 && l == B - 1) {
                                        marginLeft = -t
                                    } else if (d < l || d == B - 1 && l == 0) {
                                        marginLeft = t
                                    } else {
                                        marginLeft = -t
                                    }
                                    break
                            }
                            var m = a(".cameraappended:eq(" + e + ")", k);
                            if (typeof L !== "undefined") {
                                clearInterval(L);
                                clearTimeout(M);
                                M = setTimeout(bi, G + C)
                            }
                            if (a(r).length) {
                                a(" ", f).removeClass("cameracurrent");
                                a(" ", f).eq(l).addClass("cameracurrent")
                            }
                            if (a(s).length) {
                                a("li", s).removeClass("cameracurrent");
                                a("li", s).eq(l).addClass("cameracurrent");
                                a("li", s).not(".cameracurrent").find("img").animate({
                                    opacity: .5
                                }, 0);
                                a("li.cameracurrent img", s).animate({
                                    opacity: 1
                                }, 0);
                                a("li", s).hover(function() {
                                    a("img", this).stop(true, false).animate({
                                        opacity: 1
                                    }, 150)
                                }, function() {
                                    if (!a(this).hasClass("cameracurrent")) {
                                        a("img", this).stop(true, false).animate({
                                            opacity: .5
                                        }, 150)
                                    }
                                })
                            }
                            var n = parseFloat(G) + parseFloat(C);
                            if (H == "scrollLeft" || H == "scrollRight" || H == "scrollTop" || H == "scrollBottom" || H == "scrollHorz") {
                                n = 0;
                                m.delay((G + C) / Y * bl[c] * A * .5).css({
                                    display: "block",
                                    height: height,
                                    "margin-left": marginLeft,
                                    "margin-top": marginTop,
                                    width: width
                                }).animate({
                                    height: Math.floor(u / w + be + 1),
                                    "margin-top": 0,
                                    "margin-left": 0,
                                    width: Math.floor(t / x + ba + 1)
                                }, G - C, I, o);
                                S.eq(d).delay((G + C) / Y * bl[c] * A * .5).animate({
                                    "margin-left": marginLeft * -1,
                                    "margin-top": marginTop * -1
                                }, G - C, I, function() {
                                    a(this).css({
                                        "margin-top": 0,
                                        "margin-left": 0
                                    })
                                })
                            } else {
                                n = parseFloat(G) + parseFloat(C);
                                if (O == "next") {
                                    m.delay((G + C) / Y * bl[c] * A * .5).css({
                                        display: "block",
                                        height: height,
                                        "margin-left": marginLeft,
                                        "margin-top": marginTop,
                                        width: width,
                                        opacity: opacityOnGrid
                                    }).animate({
                                        height: Math.floor(u / w + be + 1),
                                        "margin-top": 0,
                                        "margin-left": 0,
                                        opacity: 1,
                                        width: Math.floor(t / x + ba + 1)
                                    }, G - C, I, o)
                                } else {
                                    S.eq(l).show().css("z-index", "999").addClass("cameracurrent");
                                    S.eq(d).css("z-index", "1").removeClass("cameracurrent");
                                    a(".cameraContent", g).eq(l).addClass("cameracurrent");
                                    a(".cameraContent", g).eq(d).removeClass("cameracurrent");
                                    m.delay((G + C) / Y * bl[c] * A * .5).css({
                                        display: "block",
                                        height: Math.floor(u / w + be + 1),
                                        "margin-top": 0,
                                        "margin-left": 0,
                                        opacity: 1,
                                        width: Math.floor(t / x + ba + 1)
                                    }).animate({
                                        height: height,
                                        "margin-left": marginLeft,
                                        "margin-top": marginTop,
                                        width: width,
                                        opacity: opacityOnGrid
                                    }, G - C, I, o)
                                }
                            }
                        })
                    }
                }

                function bi() {
                    bb = 0;
                    if (h != "pie") {
                        switch (U) {
                            case "leftToRight":
                                a("#" + i).css({
                                    right: "auto"
                                });
                                break;
                            case "rightToLeft":
                                a("#" + i).css({
                                    left: "auto"
                                });
                                break;
                            case "topToBottom":
                                a("#" + i).css({
                                    bottom: "auto"
                                });
                                break;
                            case "bottomToTop":
                                a("#" + i).css({
                                    top: "auto"
                                });
                                break
                        }
                    } else {
                        bd.clearRect(0, 0, b.pieDiameter, b.pieDiameter)
                    }
                }

                function bh() {
                    if (a(s).length && !a(r).length) {
                        var b = a(s).outerWidth(),
                            c = a("ul > li", s).outerWidth(),
                            d = a("li.cameracurrent", s).position(),
                            e = a("ul > li", s).length * a("ul > li", s).outerWidth(),
                            g = a("ul", s).offset().left,
                            h = a("> div", s).offset().left,
                            i;
                        if (g < 0) {
                            i = "-" + (h - g)
                        } else {
                            i = h - g
                        }
                        if (bg == true) {
                            a("ul", s).width(a("ul > li", s).length * a("ul > li", s).outerWidth());
                            if (a(s).length && !a(r).lenght) {
                                f.css({
                                    marginBottom: a(s).outerHeight()
                                })
                            }
                            H();
                            a("ul", s).width(a("ul > li", s).length * a("ul > li", s).outerWidth());
                            if (a(s).length && !a(r).lenght) {
                                f.css({
                                    marginBottom: a(s).outerHeight()
                                })
                            }
                        }
                        bg = false;
                        a(".camera_prevThumbs", V).css("visibility", "visible");
                        a(".camera_nextThumbs", V).css("visibility", "visible");
                        var j = d.left,
                            k = d.left + a("li.cameracurrent", s).outerWidth();
                        if (j < a("li.cameracurrent", s).outerWidth()) {
                            j = 0
                        }
                        if (k - i > b) {
                            if (j + b < e) {
                                a("ul", s).animate({
                                    "margin-left": "-" + j + "px"
                                }, 500, H)
                            } else {
                                a("ul", s).animate({
                                    "margin-left": "-" + (a("ul", s).outerWidth() - b) + "px"
                                }, 500, H)
                            }
                        } else if (j - i < 0) {
                            a("ul", s).animate({
                                "margin-left": "-" + j + "px"
                            }, 500, H)
                        } else {
                            a("ul", s).css({
                                "margin-left": "auto",
                                "margin-right": "auto"
                            });
                            setTimeout(H, 100)
                        }
                    }
                }

                function Y(a) {
                    return Math.ceil(a) == Math.floor(a)
                }

                function X(a) {
                    for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
                    return a
                }

                function K() {
                    function d() {
                        t = f.width();
                        if (b.height.indexOf("%") != -1) {
                            var c = Math.round(t / (100 / parseFloat(b.height)));
                            if (b.minHeight != "" && c < parseFloat(b.minHeight)) {
                                u = parseFloat(b.minHeight)
                            } else {
                                u = c
                            }
                            f.css({
                                height: u
                            })
                        } else if (b.height == "auto") {
                            u = f.height()
                        } else {
                            u = parseFloat(b.height);
                            f.css({
                                height: u
                            })
                        }
                        a(".camerarelative", k).css({
                            width: t,
                            height: u
                        });
                        a(".imgLoaded", k).each(function() {
                            var c = a(this),
                                d = c.attr("width"),
                                e = c.attr("height"),
                                f = c.index(),
                                g, h, i = c.attr("data-alignment"),
                                j = c.attr("data-portrait");
                            if (typeof i === "undefined" || i === false || i === "") {
                                i = b.alignment
                            }
                            if (typeof j === "undefined" || j === false || j === "") {
                                j = b.portrait
                            }
                            if (j == false || j == "false") {
                                if (d / e < t / u) {
                                    var k = t / d;
                                    var l = Math.abs(u - e * k) * .5;
                                    switch (i) {
                                        case "topLeft":
                                            g = 0;
                                            break;
                                        case "topCenter":
                                            g = 0;
                                            break;
                                        case "topRight":
                                            g = 0;
                                            break;
                                        case "centerLeft":
                                            g = "-" + l + "px";
                                            break;
                                        case "center":
                                            g = "-" + l + "px";
                                            break;
                                        case "centerRight":
                                            g = "-" + l + "px";
                                            break;
                                        case "bottomLeft":
                                            g = "-" + l * 2 + "px";
                                            break;
                                        case "bottomCenter":
                                            g = "-" + l * 2 + "px";
                                            break;
                                        case "bottomRight":
                                            g = "-" + l * 2 + "px";
                                            break
                                    }
                                    c.css({
                                        height: e * k,
                                        "margin-left": 0,
                                        "margin-top": g,
                                        position: "absolute",
                                        visibility: "visible",
                                        width: t
                                    })
                                } else {
                                    var k = u / e;
                                    var l = Math.abs(t - d * k) * .5;
                                    switch (i) {
                                        case "topLeft":
                                            h = 0;
                                            break;
                                        case "topCenter":
                                            h = "-" + l + "px";
                                            break;
                                        case "topRight":
                                            h = "-" + l * 2 + "px";
                                            break;
                                        case "centerLeft":
                                            h = 0;
                                            break;
                                        case "center":
                                            h = "-" + l + "px";
                                            break;
                                        case "centerRight":
                                            h = "-" + l * 2 + "px";
                                            break;
                                        case "bottomLeft":
                                            h = 0;
                                            break;
                                        case "bottomCenter":
                                            h = "-" + l + "px";
                                            break;
                                        case "bottomRight":
                                            h = "-" + l * 2 + "px";
                                            break
                                    }
                                    c.css({
                                        height: u,
                                        "margin-left": h,
                                        "margin-top": 0,
                                        position: "absolute",
                                        visibility: "visible",
                                        width: d * k
                                    })
                                }
                            } else {
                                if (d / e < t / u) {
                                    var k = u / e;
                                    var l = Math.abs(t - d * k) * .5;
                                    switch (i) {
                                        case "topLeft":
                                            h = 0;
                                            break;
                                        case "topCenter":
                                            h = l + "px";
                                            break;
                                        case "topRight":
                                            h = l * 2 + "px";
                                            break;
                                        case "centerLeft":
                                            h = 0;
                                            break;
                                        case "center":
                                            h = l + "px";
                                            break;
                                        case "centerRight":
                                            h = l * 2 + "px";
                                            break;
                                        case "bottomLeft":
                                            h = 0;
                                            break;
                                        case "bottomCenter":
                                            h = l + "px";
                                            break;
                                        case "bottomRight":
                                            h = l * 2 + "px";
                                            break
                                    }
                                    c.css({
                                        height: u,
                                        "margin-left": h,
                                        "margin-top": 0,
                                        position: "absolute",
                                        visibility: "visible",
                                        width: d * k
                                    })
                                } else {
                                    var k = t / d;
                                    var l = Math.abs(u - e * k) * .5;
                                    switch (i) {
                                        case "topLeft":
                                            g = 0;
                                            break;
                                        case "topCenter":
                                            g = 0;
                                            break;
                                        case "topRight":
                                            g = 0;
                                            break;
                                        case "centerLeft":
                                            g = l + "px";
                                            break;
                                        case "center":
                                            g = l + "px";
                                            break;
                                        case "centerRight":
                                            g = l + "px";
                                            break;
                                        case "bottomLeft":
                                            g = l * 2 + "px";
                                            break;
                                        case "bottomCenter":
                                            g = l * 2 + "px";
                                            break;
                                        case "bottomRight":
                                            g = l * 2 + "px";
                                            break
                                    }
                                    c.css({
                                        height: e * k,
                                        "margin-left": 0,
                                        "margin-top": g,
                                        position: "absolute",
                                        visibility: "visible",
                                        width: t
                                    })
                                }
                            }
                        })
                    }
                    var c;
                    if (I == true) {
                        clearTimeout(c);
                        c = setTimeout(d, 200)
                    } else {
                        d()
                    }
                    I = true
                }

                function H() {
                    var b = a(s).width();
                    a("li", s).removeClass("camera_visThumb");
                    a("li", s).each(function() {
                        var c = a(this).position(),
                            d = a("ul", s).outerWidth(),
                            e = a("ul", s).offset().left,
                            f = a("> div", s).offset().left,
                            g = f - e;
                        if (g > 0) {
                            a(".camera_prevThumbs", V).removeClass("hideNav")
                        } else {
                            a(".camera_prevThumbs", V).addClass("hideNav")
                        }
                        if (d - g > b) {
                            a(".camera_nextThumbs", V).removeClass("hideNav")
                        } else {
                            a(".camera_nextThumbs", V).addClass("hideNav")
                        }
                        var h = c.left,
                            i = c.left + a(this).width();
                        if (i - g <= b && h - g >= 0) {
                            a(this).addClass("camera_visThumb")
                        }
                    })
                }

                function e() {
                    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
                        return true
                    }
                }
                var d = {
                    alignment: "center",
                    autoAdvance: true,
                    mobileAutoAdvance: true,
                    barDirection: "leftToRight",
                    barPosition: "bottom",
                    cols: 6,
                    easing: "easeInOutExpo",
                    mobileEasing: "",
                    fx: "random",
                    mobileFx: "",
                    gridDifference: 250,
                    height: "50%",
                    imagePath: "images/",
                    hover: true,
                    loader: "pie",
                    loaderColor: "#eeeeee",
                    loaderBgColor: "#222222",
                    loaderOpacity: .8,
                    loaderPadding: 2,
                    loaderStroke: 7,
                    minHeight: "200px",
                    navigation: true,
                    navigationHover: true,
                    mobileNavHover: true,
                    opacityOnGrid: false,
                    overlayer: true,
                    pagination: true,
                    playPause: true,
                    pauseOnClick: true,
                    pieDiameter: 38,
                    piePosition: "rightTop",
                    portrait: false,
                    rows: 4,
                    slicedCols: 12,
                    slicedRows: 8,
                    slideOn: "random",
                    thumbnails: false,
                    time: 7e3,
                    transPeriod: 1500,
                    onEndTransition: function() {},
                    onLoaded: function() {},
                    onStartLoading: function() {},
                    onStartTransition: function() {}
                };
                var b = a.extend({}, d, b);
                var f = a(this).addClass("camera_wrap");
                f.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
                var g = a(".camera_fakehover", f);
                g.append('<div class="camera_target"></div>');
                if (b.overlayer == true) {
                    g.append('<div class="camera_overlayer"></div>')
                }
                g.append('<div class="camera_target_content"></div>');
                var h;
                if (b.loader == "pie" && a.browser.msie && a.browser.version < 9) {
                    h = "bar"
                } else {
                    h = b.loader
                }
                if (h == "pie") {
                    g.append('<div class="camera_pie"></div>')
                } else if (h == "bar") {
                    g.append('<div class="camera_bar"></div>')
                } else {
                    g.append('<div class="camera_bar" style="display:none"></div>')
                }
                if (b.playPause == true) {
                    g.append('<div class="camera_commands"></div>')
                }
                if (b.navigation == true) {
                    g.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>')
                }
                if (b.thumbnails == true) {
                    f.append('<div class=" " />')
                }
                if (b.thumbnails == true && b.pagination != true) {
                    a(" ", f).wrap("<div />").wrap('<div class=" " />').wrap("<div />").wrap('<div class="camera_command_wrap" />')
                }
                if (b.pagination == true) {
                    f.append('<div class=" "></div>')
                }
                f.append('<div class="camera_loader"></div>');
                a(".camera_caption", f).each(function() {
                    a(this).wrapInner("<div />")
                });
                var i = "pie_" + f.index(),
                    j = a(".camera_src", f),
                    k = a(".camera_target", f),
                    l = a(".camera_target_content", f),
                    m = a(".camera_pie", f),
                    n = a(".camera_bar", f),
                    o = a(".camera_prev", f),
                    p = a(".camera_next", f),
                    q = a(".camera_commands", f),
                    r = a(".camera_pag", f),
                    s = a(".camera_thumbs_cont", f);
                var t, u;
                var v = new Array;
                a("> div", j).each(function() {
                    v.push(a(this).attr("data-src"));
                });
                var w = new Array;
                a("> div", j).each(function() {
                    if (a(this).attr("data-link")) {
                        w.push(a(this).attr("data-link"))
                    } else {
                        w.push("")
                    }
                });
                var x = new Array;
                a("> div", j).each(function() {
                    if (a(this).attr("data-target")) {
                        x.push(a(this).attr("data-target"))
                    } else {
                        x.push("")
                    }
                });
                var y = new Array;
                a("> div", j).each(function() {
                    if (a(this).attr("data-portrait")) {
                        y.push(a(this).attr("data-portrait"))
                    } else {
                        y.push("")
                    }
                });
                var z = new Array;
                a("> div", j).each(function() {
                    if (a(this).attr("data-alignment")) {
                        z.push(a(this).attr("data-alignment"))
                    } else {
                        z.push("")
                    }
                });
                var A = new Array;
                a("> div", j).each(function() {
                    if (a(this).attr("data-thumb")) {
                        A.push(a(this).attr("data-thumb"))
                    } else {
                        A.push("")
                    }
                });
                var B = v.length;
                a(l).append('<div class="cameraContents" />');
                var C;
                for (C = 0; C < B; C++) {
                    a(".cameraContents", l).append('<div class="cameraContent" />');
                    if (w[C] != "") {
                        var D = a("> div ", j).eq(C).attr("data-box");
                        if (typeof D !== "undefined" && D !== false && D != "") {
                            D = 'data-box="' + a("> div ", j).eq(C).attr("data-box") + '"'
                        } else {
                            D = ""
                        }
                        a(".camera_target_content .cameraContent:eq(" + C + ")", f).append('<a class="camera_link" href="' + w[C] + '" ' + D + ' target="' + x[C] + '"></a>')
                    }
                }
                a(".camera_caption", f).each(function() {
                    var b = a(this).parent().index(),
                        c = f.find(".cameraContent").eq(b);
                    a(this).appendTo(c)
                });
                k.append('<div class="cameraCont" />');
                var E = a(".cameraCont", f);
                var F;
                for (F = 0; F < B; F++) {
                    E.append('<div class="cameraSlide cameraSlide_' + F + '" />');
                    var G = a("> div:eq(" + F + ")", j);
                    k.find(".cameraSlide_" + F).clone(G)
                }
                a(window).bind("load resize", function() {
                    bh();
                    H()
                });
                E.append('<div class="cameraSlide cameraSlide_' + F + '" />');
                var I;
                f.show();
                var t = k.width();
                var u = k.height();
                var J;
                a(window).bind("resize", function() {
                    if (I == true) {
                        K()
                    }
                    a("ul", s).animate({
                        "margin-top": 0
                    }, 0, bh);
                    if (!j.hasClass("paused")) {
                        j.addClass("paused");
                        if (a(".camera_stop", V).length) {
                            a(".camera_stop", V).hide();
                            a(".camera_play", V).show();
                            if (h != "none") {
                                a("#" + i).hide()
                            }
                        } else {
                            if (h != "none") {
                                a("#" + i).hide()
                            }
                        }
                        clearTimeout(J);
                        J = setTimeout(function() {
                            j.removeClass("paused");
                            if (a(".camera_play", V).length) {
                                a(".camera_play", V).hide();
                                a(".camera_stop", V).show();
                                if (h != "none") {
                                    a("#" + i).fadeIn()
                                }
                            } else {
                                if (h != "none") {
                                    a("#" + i).fadeIn()
                                }
                            }
                        }, 1500)
                    }
                });
                var L, M;
                var N, O, P, q, r;
                var Q, R;
                if (e() && b.mobileAutoAdvance != "") {
                    O = b.mobileAutoAdvance
                } else {
                    O = b.autoAdvance
                }
                if (O == false) {
                    j.addClass("paused")
                }
                if (e() && b.mobileNavHover != "") {
                    P = b.mobileNavHover
                } else {
                    P = b.navigationHover
                }
                if (j.length != 0) {
                    var S = a(".cameraSlide", k);
                    S.wrapInner('<div class="camerarelative" />');
                    var T;
                    var U = b.barDirection;
                    var V = f;
                    a("iframe", g).each(function() {
                        var b = a(this);
                        var c = b.attr("src");
                        b.attr("data-src", c);
                        var d = b.parent().index(".camera_src > div");
                        a(".camera_target_content .cameraContent:eq(" + d + ")", f).append(b)
                    });

                    function W() {
                        a("iframe", g).each(function() {
                            a(".camera_caption", g).show();
                            var c = a(this);
                            var d = c.attr("data-src");
                            c.attr("src", d);
                            var e = b.imagePath + "blank.gif";
                            var h = new Image;
                            h.src = e;
                            if (b.height.indexOf("%") != -1) {
                                var i = Math.round(t / (100 / parseFloat(b.height)));
                                if (b.minHeight != "" && i < parseFloat(b.minHeight)) {
                                    u = parseFloat(b.minHeight)
                                } else {
                                    u = i
                                }
                            } else if (b.height == "auto") {
                                u = f.height()
                            } else {
                                u = parseFloat(b.height)
                            }
                            c.after(a(h).attr({
                                "class": "imgFake",
                                width: t,
                                height: u
                            }));
                            var j = c.clone();
                            c.remove();
                            a(h).bind("click", function() {
                                if (a(this).css("position") == "absolute") {
                                    a(this).remove();
                                    if (d.indexOf("vimeo") != -1 || d.indexOf("youtube") != -1) {
                                        if (d.indexOf("?") != -1) {
                                            autoplay = "&autoplay=1"
                                        } else {
                                            autoplay = "?autoplay=1"
                                        }
                                    } else if (d.indexOf("dailymotion") != -1) {
                                        if (d.indexOf("?") != -1) {
                                            autoplay = "&autoPlay=1"
                                        } else {
                                            autoplay = "?autoPlay=1"
                                        }
                                    }
                                    j.attr("src", d + autoplay);
                                    R = true
                                } else {
                                    a(this).css({
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        zIndex: 10
                                    }).after(j)
                                }
                            })
                        })
                    }
                    W();
                    if (b.hover == true) {
                        if (!e()) {
                            g.hover(function() {
                                j.addClass("paused")
                            }, function() {
                                j.removeClass("paused")
                            })
                        }
                    }
                    if (P == true) {
                        a(o, f).animate({
                            opacity: 0
                        }, 0);
                        a(p, f).animate({
                            opacity: 0
                        }, 0);
                        a(q, f).animate({
                            opacity: 0
                        }, 0);
                        if (e()) {
                            g.on("vmouseover", function() {
                                a(o, f).animate({
                                    opacity: 1
                                }, 200);
                                a(p, f).animate({
                                    opacity: 1
                                }, 200);
                                a(q, f).animate({
                                    opacity: 1
                                }, 200)
                            });
                            g.on("vmouseout", function() {
                                a(o, f).delay(500).animate({
                                    opacity: 0
                                }, 200);
                                a(p, f).delay(500).animate({
                                    opacity: 0
                                }, 200);
                                a(q, f).delay(500).animate({
                                    opacity: 0
                                }, 200)
                            })
                        } else {
                            g.hover(function() {
                                a(o, f).animate({
                                    opacity: 1
                                }, 200);
                                a(p, f).animate({
                                    opacity: 1
                                }, 200);
                                a(q, f).animate({
                                    opacity: 1
                                }, 200)
                            }, function() {
                                a(o, f).animate({
                                    opacity: 0
                                }, 200);
                                a(p, f).animate({
                                    opacity: 0
                                }, 200);
                                a(q, f).animate({
                                    opacity: 0
                                }, 200)
                            })
                        }
                    }
                    a(".camera_stop", V).on("click", function() {
                        O = false;
                        j.addClass("paused");
                        if (a(".camera_stop", V).length) {
                            a(".camera_stop", V).hide();
                            a(".camera_play", V).show();
                            if (h != "none") {
                                a("#" + i).hide()
                            }
                        } else {
                            if (h != "none") {
                                a("#" + i).hide()
                            }
                        }
                    });
                    a(".camera_play", V).on("click", function() {
                        O = true;
                        j.removeClass("paused");
                        if (a(".camera_play", V).length) {
                            a(".camera_play", V).hide();
                            a(".camera_stop", V).show();
                            if (h != "none") {
                                a("#" + i).show()
                            }
                        } else {
                            if (h != "none") {
                                a("#" + i).show()
                            }
                        }
                    });
                    if (b.pauseOnClick == true) {
                        a(".camera_target_content", g).mouseup(function() {
                            O = false;
                            j.addClass("paused");
                            a(".camera_stop", V).hide();
                            a(".camera_play", V).show();
                            a("#" + i).hide()
                        })
                    }
                    a(".cameraContent, .imgFake", g).hover(function() {
                        Q = true
                    }, function() {
                        Q = false
                    });
                    a(".cameraContent, .imgFake", g).bind("click", function() {
                        if (R == true && Q == true) {
                            O = false;
                            a(".camera_caption", g).hide();
                            j.addClass("paused");
                            a(".camera_stop", V).hide();
                            a(".camera_play", V).show();
                            a("#" + i).hide()
                        }
                    })
                }
                if (h != "pie") {
                    n.append('<span class="camera_bar_cont" />');
                    a(".camera_bar_cont", n).animate({
                        opacity: b.loaderOpacity
                    }, 0).css({
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        "background-color": b.loaderBgColor
                    }).append('<span id="' + i + '" />');
                    a("#" + i).animate({
                        opacity: 0
                    }, 0);
                    var Z = a("#" + i);
                    Z.css({
                        position: "absolute",
                        "background-color": b.loaderColor
                    });
                    switch (b.barPosition) {
                        case "left":
                            n.css({
                                right: "auto",
                                width: b.loaderStroke
                            });
                            break;
                        case "right":
                            n.css({
                                left: "auto",
                                width: b.loaderStroke
                            });
                            break;
                        case "top":
                            n.css({
                                bottom: "auto",
                                height: b.loaderStroke
                            });
                            break;
                        case "bottom":
                            n.css({
                                top: "auto",
                                height: b.loaderStroke
                            });
                            break
                    }
                    switch (U) {
                        case "leftToRight":
                            Z.css({
                                left: 0,
                                right: 0,
                                top: b.loaderPadding,
                                bottom: b.loaderPadding
                            });
                            break;
                        case "rightToLeft":
                            Z.css({
                                left: 0,
                                right: 0,
                                top: b.loaderPadding,
                                bottom: b.loaderPadding
                            });
                            break;
                        case "topToBottom":
                            Z.css({
                                left: b.loaderPadding,
                                right: b.loaderPadding,
                                top: 0,
                                bottom: 0
                            });
                            break;
                        case "bottomToTop":
                            Z.css({
                                left: b.loaderPadding,
                                right: b.loaderPadding,
                                top: 0,
                                bottom: 0
                            });
                            break
                    }
                } else {
                    m.append('<canvas id="' + i + '"></canvas>');
                    var _;
                    var Z = document.getElementById(i);
                    Z.setAttribute("width", b.pieDiameter);
                    Z.setAttribute("height", b.pieDiameter);
                    var ba;
                    switch (b.piePosition) {
                        case "leftTop":
                            ba = "left:0; top:0;";
                            break;
                        case "rightTop":
                            ba = "right:0; top:0;";
                            break;
                        case "leftBottom":
                            ba = "left:0; bottom:0;";
                            break;
                        case "rightBottom":
                            ba = "right:0; bottom:0;";
                            break
                    }
                    Z.setAttribute("style", "position:absolute; z-index:1002; " + ba);
                    var bb;
                    var bc;
                    if (Z && Z.getContext) {
                        var bd = Z.getContext("2d");
                        bd.rotate(Math.PI * (3 / 2));
                        bd.translate(-b.pieDiameter, 0)
                    }
                }
                if (h == "none" || O == false) {
                    a("#" + i).hide();
                    a(".camera_canvas_wrap", V).hide()
                }
                if (a(r).length) {
                    a(r).append('<ul class="camera_pag_ul" />');
                    var be;
                    for (be = 0; be < B; be++) {
                        a(".camera_pag_ul", f).append('<li class="pag_nav_' + be + '" style="position:relative; z-index:1002"><span><span>' + be + "</span></span></li>")
                    }
                    a(".camera_pag_ul li", f).hover(function() {
                        a(this).addClass("camera_hover");
                        if (a(".camera_thumb", this).length) {
                            var b = a(".camera_thumb", this).outerWidth(),
                                c = a(".camera_thumb", this).outerHeight(),
                                d = a(this).outerWidth();
                            a(".camera_thumb", this).show().css({
                                top: "-" + c + "px",
                                left: "-" + (b - d) / 2 + "px"
                            }).animate({
                                opacity: 1,
                                "margin-top": "-3px"
                            }, 200);
                            a(".thumb_arrow", this).show().animate({
                                opacity: 1,
                                "margin-top": "-3px"
                            }, 200)
                        }
                    }, function() {
                        a(this).removeClass("camera_hover");
                        a(".camera_thumb", this).animate({
                            "margin-top": "-20px",
                            opacity: 0
                        }, 200, function() {
                            a(this).css({
                                marginTop: "5px"
                            }).hide()
                        });
                        a(".thumb_arrow", this).animate({
                            "margin-top": "-20px",
                            opacity: 0
                        }, 200, function() {
                            a(this).css({
                                marginTop: "5px"
                            }).hide()
                        })
                    })
                }
                if (a(s).length) {
                    var bf;
                    if (!a(r).length) {
                        a(s).append("<div />");
                        a(s).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
                        a("> div", s).append("<ul />");
                        a.each(A, function(b, c) {
                            if (a("> div", j).eq(b).attr("data-thumb") != "") {
                                var d = a("> div", j).eq(b).attr("data-thumb"),
                                    e = new Image;
                                e.src = d;
                                a("ul", s).append('<li class="pix_thumb pix_thumb_' + b + '" />');
                                a("li.pix_thumb_" + b, s).append(a(e).attr("class", "camera_thumb"))
                            }
                        })
                    } else {
                        a.each(A, function(b, c) {
                            if (a("> div", j).eq(b).attr("data-thumb") != "") {
                                var d = a("> div", j).eq(b).attr("data-thumb"),
                                    e = new Image;
                                e.src = d;
                                a("li.pag_nav_" + b, r).append(a(e).attr("class", "camera_thumb").css({
                                    position: "absolute"
                                }).animate({
                                    opacity: 0
                                }, 0));
                                a("li.pag_nav_" + b + " > img", r).after('<div class="thumb_arrow" />');
                                a("li.pag_nav_" + b + " > .thumb_arrow", r).animate({
                                    opacity: 0
                                }, 0)
                            }
                        });
                        f.css({
                            marginBottom: a(r).outerHeight()
                        })
                    }
                } else if (!a(s).length && a(r).length) {
                    f.css({
                        marginBottom: a(r).outerHeight()
                    })
                }
                var bg = true;
                if (a(q).length) {
                    a(q).append('<div class="camera_play"> </div>').append('<div class="camera_stop"> </div>');
                    if (O == true) {
                        a(".camera_play", V).hide();
                        a(".camera_stop", V).show()
                    } else {
                        a(".camera_stop", V).hide();
                        a(".camera_play", V).show()
                    }
                }
                bi();
                a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", g).each(function() {
                    a(this).css("visibility", "hidden")
                });
                b.onStartLoading.call(this);
                bj();
                if (a(o).length) {
                    a(o).click(function() {
                        if (!j.hasClass("camerasliding")) {
                            var c = parseFloat(a(".cameraSlide.cameracurrent", k).index());
                            clearInterval(L);
                            W();
                            a("#" + i + ", .camera_canvas_wrap", f).animate({
                                opacity: 0
                            }, 0);
                            bi();
                            if (c != 0) {
                                bj(c)
                            } else {
                                bj(B)
                            }
                            b.onStartLoading.call(this)
                        }
                    })
                }
                if (a(p).length) {
                    a(p).click(function() {
                        if (!j.hasClass("camerasliding")) {
                            var c = parseFloat(a(".cameraSlide.cameracurrent", k).index());
                            clearInterval(L);
                            W();
                            a("#" + i + ", .camera_canvas_wrap", V).animate({
                                opacity: 0
                            }, 0);
                            bi();
                            if (c == B - 1) {
                                bj(1)
                            } else {
                                bj(c + 2)
                            }
                            b.onStartLoading.call(this)
                        }
                    })
                }
                if (e()) {
                    g.bind("swipeleft", function(c) {
                        if (!j.hasClass("camerasliding")) {
                            var d = parseFloat(a(".cameraSlide.cameracurrent", k).index());
                            clearInterval(L);
                            W();
                            a("#" + i + ", .camera_canvas_wrap", V).animate({
                                opacity: 0
                            }, 0);
                            bi();
                            if (d == B - 1) {
                                bj(1)
                            } else {
                                bj(d + 2)
                            }
                            b.onStartLoading.call(this)
                        }
                    });
                    g.bind("swiperight", function(c) {
                        if (!j.hasClass("camerasliding")) {
                            var d = parseFloat(a(".cameraSlide.cameracurrent", k).index());
                            clearInterval(L);
                            W();
                            a("#" + i + ", .camera_canvas_wrap", V).animate({
                                opacity: 0
                            }, 0);
                            bi();
                            if (d != 0) {
                                bj(d)
                            } else {
                                bj(B)
                            }
                            b.onStartLoading.call(this)
                        }
                    })
                }
                if (a(r).length) {
                    a(".camera_pag li", f).click(function() {
                        if (!j.hasClass("camerasliding")) {
                            var c = parseFloat(a(this).index());
                            var d = parseFloat(a(".cameraSlide.cameracurrent", k).index());
                            if (c != d) {
                                clearInterval(L);
                                W();
                                a("#" + i + ", .camera_canvas_wrap", V).animate({
                                    opacity: 0
                                }, 0);
                                bi();
                                bj(c + 1);
                                b.onStartLoading.call(this)
                            }
                        }
                    })
                }
                if (a(s).length) {
                    a(".pix_thumb img", s).click(function() {
                        if (!j.hasClass("camerasliding")) {
                            var c = parseFloat(a(this).parents("li").index());
                            var d = parseFloat(a(".cameracurrent", k).index());
                            if (c != d) {
                                clearInterval(L);
                                W();
                                a("#" + i + ", .camera_canvas_wrap", V).animate({
                                    opacity: 0
                                }, 0);
                                a(".pix_thumb", s).removeClass("cameracurrent");
                                a(this).parents("li").addClass("cameracurrent");
                                bi();
                                bj(c + 1);
                                bh();
                                b.onStartLoading.call(this)
                            }
                        }
                    });
                    a(".camera_thumbs_cont .camera_prevThumbs", V).hover(function() {
                        a(this).stop(true, false).animate({
                            opacity: 1
                        }, 250)
                    }, function() {
                        a(this).stop(true, false).animate({
                            opacity: .7
                        }, 250)
                    });
                    a(".camera_prevThumbs", V).click(function() {
                        var b = 0,
                            c = a(s).outerWidth(),
                            d = a("ul", s).offset().left,
                            e = a("> div", s).offset().left,
                            f = e - d;
                        a(".camera_visThumb", s).each(function() {
                            var c = a(this).outerWidth();
                            b = b + c
                        });
                        if (f - b > 0) {
                            a("ul", s).animate({
                                "margin-left": "-" + (f - b) + "px"
                            }, 500, H)
                        } else {
                            a("ul", s).animate({
                                "margin-left": 0
                            }, 500, H)
                        }
                    });
                    a(".camera_thumbs_cont .camera_nextThumbs", V).hover(function() {
                        a(this).stop(true, false).animate({
                            opacity: 1
                        }, 250)
                    }, function() {
                        a(this).stop(true, false).animate({
                            opacity: .7
                        }, 250)
                    });
                    a(".camera_nextThumbs", V).click(function() {
                        var b = 0,
                            c = a(s).outerWidth(),
                            d = a("ul", s).outerWidth(),
                            e = a("ul", s).offset().left,
                            f = a("> div", s).offset().left,
                            g = f - e;
                        a(".camera_visThumb", s).each(function() {
                            var c = a(this).outerWidth();
                            b = b + c
                        });
                        if (g + b + b < d) {
                            a("ul", s).animate({
                                "margin-left": "-" + (g + b) + "px"
                            }, 500, H)
                        } else {
                            a("ul", s).animate({
                                "margin-left": "-" + (d - c) + "px"
                            }, 500, H)
                        }
                    })
                }
            }
        })(jQuery);
        (function(a) {
            a.fn.cameraStop = function() {
                var b = a(this),
                    c = a(".camera_src", b),
                    d = "pie_" + b.index();
                c.addClass("stopped");
                if (a(".camera_showcommands").length) {
                    var e = a(".camera_thumbs_wrap", b)
                } else {
                    var e = b
                }
            }
        })(jQuery);
        (function(a) {
            a.fn.cameraPause = function() {
                var b = a(this);
                var c = a(".camera_src", b);
                c.addClass("paused")
            }
        })(jQuery);
        (function(a) {
            a.fn.cameraResume = function() {
                var b = a(this);
                var c = a(".camera_src", b);
                if (typeof autoAdv === "undefined" || autoAdv !== true) {
                    c.removeClass("paused")
                }
            }
        })(jQuery);
     };
});
