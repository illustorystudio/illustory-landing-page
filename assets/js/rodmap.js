!(function (t) {
  "use strict";
  var i = {
    init: function () {
      i.ready(), i.roadmapSwiper();
    },

    roadmapSwiper: function () {
      t(".fn_cs_roadmap .swiper-container").each(function () {
        var e = t(this),
          a = new Swiper(e, {
            loop: !1,
            speed: 1500,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            slidesPerView: 4,
            spaceBetween: 40,
            direction: "horizontal",
            loopAdditionalSlides: 10,
            watchSlidesProgress: !0,
            breakpoints: {
              768: { slidesPerView: 1 },
              1040: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            },
          }),
          n = 100 / (a.params.loop ? a.slides.length - 2 : a.slides.length),
          o = e.closest(".fn_cs_roadmap").find(".step_in");
        i.roadmapStep(a, o, n),
          a.on("slideChange", function () {
            i.roadmapStep(this, o, n);
          });
      });
    },
    roadmapStep: function (t, e, a) {
      var n,
        i = parseInt(t.currentBreakpoint);
      switch (i) {
        case 1400:
        case 1040:
        default:
          n = 4;
          break;
        case 1200:
          n = 3;
          break;
        case 768:
          n = 1;
      }
      e.css({ width: (t.activeIndex + n) * a + "%" });
    },

    ready: function () {
      t(
        ".metaportal_fn_walletbox, .metaportal_fn_wallet_closer, .metaportal_fn_leftnav, .metaportal_fn_leftnav_closer"
      ).removeClass("ready");
    },
  };
  t(document).ready(function () {
    i.init();
  });
})(jQuery);
