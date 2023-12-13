import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./Event.css";

import _implicitScopedStylesheets from "./Event.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span${3}><img src="/public/assets/Ins4.jpg" alt="logo"${3}></span>`;
const $fragment2 = parseFragment`<span${3}><img src="/public/assets/Ins3.jpg" alt="logo"${3}></span>`;
const $fragment3 = parseFragment`<span${3}><img src="/public/assets/lessonback.jpg" alt="logo"${3}></span>`;
const $fragment4 = parseFragment`<span${3}><img src="/public/assets/Ins1.jpg" alt="logo"${3}></span>`;
const $fragment5 = parseFragment`<span${3}><img src="/public/assets/back25.jpg" alt="logo"${3}></span>`;
const $fragment6 = parseFragment`<span${3}><img src="/public/assets/Ins2.jpg" alt="logo"${3}></span>`;
const stc0 = {
  classMap: {
    "instructor": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "wrap2": true
  },
  key: 1
};
const stc2 = {
  "back2": true
};
const stc3 = {
  "gallery2": true
};
const stc4 = {
  classMap: {
    "eventRow2": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "eventCard2": true
  },
  key: 5
};
const stc6 = {
  key: 8
};
const stc7 = {
  classMap: {
    "eventCard2": true
  },
  key: 9
};
const stc8 = {
  key: 12
};
const stc9 = {
  classMap: {
    "eventCard2": true
  },
  key: 13
};
const stc10 = {
  key: 16
};
const stc11 = {
  classMap: {
    "eventRow2": true
  },
  key: 17
};
const stc12 = {
  classMap: {
    "eventCard2": true
  },
  key: 18
};
const stc13 = {
  key: 21
};
const stc14 = {
  classMap: {
    "eventCard2": true
  },
  key: 22
};
const stc15 = {
  key: 25
};
const stc16 = {
  classMap: {
    "eventCard2": true
  },
  key: 26
};
const stc17 = {
  key: 29
};
const stc18 = {
  "forward2": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("img", {
    classMap: stc2,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("back2")
    },
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleBack2Click))
    }
  }), api_element("div", {
    classMap: stc3,
    key: 3,
    on: {
      "mouseenter": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseEnter)),
      "mouseleave": _m2 || ($ctx._m2 = api_bind($cmp.handleMouseLeave))
    }
  }, [api_element("div", stc4, [api_element("div", stc5, [api_static_fragment($fragment1(), 7), api_element("h2", stc6, [api_text(api_dynamic_text($cmp.instructorsName1))])]), api_element("div", stc7, [api_static_fragment($fragment2(), 11), api_element("h2", stc8, [api_text(api_dynamic_text($cmp.instructorsName2))])]), api_element("div", stc9, [api_static_fragment($fragment3(), 15), api_element("h2", stc10, [api_text(api_dynamic_text($cmp.instructorsName3))])])]), api_element("div", stc11, [api_element("div", stc12, [api_static_fragment($fragment4(), 20), api_element("h2", stc13, [api_text(api_dynamic_text($cmp.instructorsName4))])]), api_element("div", stc14, [api_static_fragment($fragment5(), 24), api_element("h2", stc15, [api_text(api_dynamic_text($cmp.instructorsName5))])]), api_element("div", stc16, [api_static_fragment($fragment6(), 28), api_element("h2", stc17, [api_text(api_dynamic_text($cmp.instructorsName6))])])])]), api_element("img", {
    classMap: stc18,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("forward2")
    },
    key: 30,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleForward2Click))
    }
  })])])];
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
tmpl.stylesheetToken = "lwc-6qlu7v1vkun";
tmpl.legacyStylesheetToken = "pages-Event_Event";
freezeTemplate(tmpl);
