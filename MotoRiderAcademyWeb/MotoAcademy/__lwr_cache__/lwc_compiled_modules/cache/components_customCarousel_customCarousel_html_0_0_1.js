import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customCarousel.css";

import _implicitScopedStylesheets from "./customCarousel.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="activebutton${0}"${2}><h2${3}>Explore Courses</h2></div>`;
const $fragment2 = parseFragment`<a class="prev${0}"${2}>❮</a>`;
const $fragment3 = parseFragment`<a class="next${0}"${2}>❯</a>`;
const stc0 = {
  classMap: {
    "app": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-is-relative": true,
    "container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slideNumbers": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "text-section": true,
    "slds-p-around_medium": true
  },
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  key: 7
};
const stc6 = {
  classMap: {
    "slds-text-align_center": true,
    "slds-p-around_medium": true,
    "dotcontrol": true
  },
  key: 14
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, st: api_static_fragment, i: api_iterator, b: api_bind, sp: api_static_part, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, api_flatten([api_iterator($cmp.slidesData, function (slide) {
    return api_element("div", {
      className: slide.cardClasses,
      key: api_key(2, slide.slideIndex)
    }, [api_element("div", stc2, [api_text(api_dynamic_text(slide.slideIndex) + "/" + api_dynamic_text($cmp.slidesData.length) + " ")]), api_element("img", {
      attrs: {
        "src": slide.image
      },
      key: 4
    }), api_element("div", stc3, [api_element("p", stc4, [api_text(api_dynamic_text(slide.description))]), api_element("h1", stc5, [api_text(api_dynamic_text(slide.heading))]), api_static_fragment($fragment1(), 9)])]);
  }), api_static_fragment($fragment2(), 11, [api_static_part(0, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.backSlide))
    }
  })]), api_static_fragment($fragment3(), 13, [api_static_part(0, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.forwardSlide))
    }
  })])])), api_element("div", stc6, api_iterator($cmp.slidesData, function (slide) {
    return api_element("div", {
      className: slide.dotClases,
      attrs: {
        "data-id": slide.slideIndex
      },
      key: api_key(15, slide.slideIndex),
      on: {
        "click": _m4 || ($ctx._m4 = api_bind($cmp.currentSlide))
      }
    });
  }))])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-4av5rvq799d";
tmpl.legacyStylesheetToken = "components-customCarousel_customCarousel";
freezeTemplate(tmpl);
