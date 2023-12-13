import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./About.css";

import _implicitScopedStylesheets from "./About.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header${3}><div class="slds-grid slds-gutters ${0}" style="padding-left: 3rem; padding-right: 9rem;"${2}><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>HOME</span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>COURSES</span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}><a href="/about"${3}>ABOUT</a></span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>EVENTS</span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>CONTACT</span></div><div class="slds-col slds-float_left navbutton join${0}"${2}><span${3}>ENROLL</span></div><div style="text-align: right;" class="slds-col slds-float_right slds-size_1-of-1 slds-large-size_4-of-12${0}"${2}><img src="/public/assets/motoriderLogo.png" alt="logo"${3}></div></div></header>`;
const $fragment2 = parseFragment`<div class="title${0}"${2}><h1${3}>About Us</h1></div>`;
const $fragment3 = parseFragment`<div class="row4${0}"${2}><div class="card4${0}"${2}><img src="/public/assets/lesson.jpg" alt="logo"${3}></div><div class="card4 page1${0}"${2}><h1${3}>Learn To Drive, Drive With Safety And Control.</h1><p${3}>To learn to drive safely and with control, first familiarize yourself with the vehicle and obey traffic laws. Keep a safe following distance, use turn signals, and regularly check mirrors and blind spots.</p><div class="list${0}"${2}><div class="video${0}"${2}></div><ul${3}><li${3}>Quick Tips and Advice</li><li${3}>Road test preparation</li><li${3}>We are certified</li><li${3}>Fast Service</li><li${3}>Basic driving skills</li><li${3}>Award Win</li></ul></div><div class="activebutton${0}"${2}><h2${3}>Explore Courses</h2></div></div></div>`;
const $fragment4 = parseFragment`<div class="row4${0}"${2}><div class="card4${0}"${2}><h2${3}>Lorem ipsum dolor sit.</h2><p${3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae deserunt quo harum excepturi aperiam obcaecati atque maxime ex autem suscipit repellendus, in asperiores quas dolorum. Numquam eaque molestiae dignissimos quae beatae harum illo, porro corrupti culpa, consequuntur rerum deserunt?</p></div><div class="card4${0}"${2}><img style="border-radius: 360px;" src="/public/assets/add.jpg" alt="logo"${3}></div></div>`;
const stc0 = {
  classMap: {
    "site": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "body": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "coursesMenu": true
  },
  key: 4
};
const stc3 = {
  key: 6
};
const stc4 = {
  key: 7
};
const stc5 = {
  attrs: {
    "href": "#"
  },
  key: 8
};
const stc6 = {
  key: 9
};
const stc7 = {
  attrs: {
    "href": "#"
  },
  key: 10
};
const stc8 = {
  key: 11
};
const stc9 = {
  attrs: {
    "href": "#"
  },
  key: 12
};
const stc10 = {
  key: 13
};
const stc11 = {
  attrs: {
    "href": "#"
  },
  key: 14
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2, [api_static_part(5, {
    on: {
      "mouseover": _m0 || ($ctx._m0 = api_bind($cmp.showMenu)),
      "mouseleave": _m1 || ($ctx._m1 = api_bind($cmp.hideMenu))
    }
  })]), api_element("div", stc1, [api_element("div", stc2, [api_element("div", {
    className: $cmp.menuClass,
    key: 5,
    on: {
      "mouseover": _m2 || ($ctx._m2 = api_bind($cmp.showMenu)),
      "mouseleave": _m3 || ($ctx._m3 = api_bind($cmp.hideMenu))
    }
  }, [api_element("ul", stc3, [api_element("li", stc4, [api_element("a", stc5, [api_text("Base Training")])]), api_element("li", stc6, [api_element("a", stc7, [api_text("Track")])]), api_element("li", stc8, [api_element("a", stc9, [api_text("OffRoad")])]), api_element("li", stc10, [api_element("a", stc11, [api_text("City")])])])])]), api_static_fragment($fragment2(), 16), api_static_fragment($fragment3(), 18), api_static_fragment($fragment4(), 20)])]), api_text("</div>")];
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
tmpl.stylesheetToken = "lwc-1nmsfhd1q3i";
tmpl.legacyStylesheetToken = "pages-About_About";
freezeTemplate(tmpl);
