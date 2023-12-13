import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./Home.css";

import _implicitScopedStylesheets from "./Home.scoped.css?scoped=true";

import _componentsCustomCarousel from "components/customCarousel";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header${3}><div class="slds-grid slds-gutters ${0}" style="padding-left: 3rem; padding-right: 9rem;"${2}><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}><a href="/"${3}>HOME</a></span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}><a href="/courses"${3}>COURSES</a></span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}><a href="/about"${3}>ABOUT</a></span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>EVENTS</span></div><div class="slds-col slds-float_left navbutton${0}"${2}><span${3}>CONTACT</span></div><div class="slds-col slds-float_left navbutton join${0}"${2}><span${3}>ENROLL</span></div><div style="text-align: right;" class="slds-col slds-float_right slds-size_1-of-1 slds-large-size_4-of-12${0}"${2}><img src="/public/assets/motoriderLogo.png" alt="logo"${3}></div></div></header>`;
const $fragment2 = parseFragment`<div class="page2${0}"${2}><div class="entry${0}"${2}><h1${3}>Your academy journey starts here!</h1><h3${3}>We’ve created an enjoyable and supportive Advanced Rider course to give you additional knowledge and skills to make your on-road experiences safer and more fulfilling. We want to help you enjoy your passion, grow friendships, and create memorable experiences on your bike, now and in the future.</h3></div><div class="row1${0}"${2}><div class="card1${0}"${2}><img src="/public/assets/race.jpeg" alt="logo"${3}><h1${3}>Track</h1></div><div class="card1 middle${0}"${2}><img src="/public/assets/city.jpeg" alt="logo"${3}><h1${3}>City</h1></div><div class="card1${0}"${2}><img src="/public/assets/enduro.webp" alt="logo"${3}><h1${3}>Off-road</h1></div></div></div>`;
const $fragment3 = parseFragment`<div class="page3${0}"${2}><div class="row4${0}"${2}><div class="card4${0}"${2}><img src="/public/assets/add.jpg" alt="logo"${3}></div><div class="card4${0}"${2}><h2${3}>Course overview</h2><p${3}>What does becoming a more skilful rider mean to you? Better road positioning? Enhanced observation skills? Or simply greater bike control? Whichever aspect of riding you’re looking to improve, our course brings your skills up to an advanced level, helping you to get more out of riding and preparing you for any on-road scenario. For the course, you’ll be paired with one of our highly skilled Observers, themselves Advanced Riders who hold an additional Institute of the Motor Industry qualification. Our Observers will meet you in location that is convenient for you both. You can discuss where you’d like to meet your Observer once you have been assigned to your Local Group.</p></div></div><div class="row4${0}"${2}><div class="card4${0}"${2}><h2${3}>Course overview</h2><p${3}>What does becoming a more skilful rider mean to you? Better road positioning? Enhanced observation skills? Or simply greater bike control? Whichever aspect of riding you’re looking to improve, our course brings your skills up to an advanced level, helping you to get more out of riding and preparing you for any on-road scenario. For the course, you’ll be paired with one of our highly skilled Observers, themselves Advanced Riders who hold an additional Institute of the Motor Industry qualification. Our Observers will meet you in location that is convenient for you both. You can discuss where you’d like to meet your Observer once you have been assigned to your Local Group.</p></div><div class="card4${0}"${2}><img src="/public/assets/slider3.jpeg" alt="logo"${3}></div></div></div>`;
const $fragment4 = parseFragment`<span${3}><img src="/public/assets/yamaha.png" alt="logo"${3}></span>`;
const $fragment5 = parseFragment`<span${3}><img src="/public/assets/adv2.jpg" alt="logo"${3}></span>`;
const $fragment6 = parseFragment`<span${3}><img src="/public/assets/lesson.jpg" alt="logo"${3}></span>`;
const $fragment7 = parseFragment`<img src="/public/assets/racing.jpeg" alt="logo"${3}>`;
const $fragment8 = parseFragment`<span${3}><img src="/public/assets/back.jpeg" alt="logo"${3}></span>`;
const $fragment9 = parseFragment`<span${3}><img src="/public/assets/slider1.jpeg" alt="logo"${3}></span>`;
const $fragment10 = parseFragment`<button class="slds-button slds-button_success courseButton${0}"${2}>View All Courses</button>`;
const $fragment11 = parseFragment`<h1${3}>REQUEST A CALLBACK</h1>`;
const $fragment12 = parseFragment`<p${3}>If you need to speak to us about a general query fill in the form below and we will call you back within the same working day.</p>`;
const $fragment13 = parseFragment`<button class="slds-button leadSendButton${0}"${2}>Send</button>`;
const $fragment14 = parseFragment`<span${3}><img src="/public/assets/Ins4.jpg" alt="logo"${3}></span>`;
const $fragment15 = parseFragment`<span${3}><img src="/public/assets/Ins3.jpg" alt="logo"${3}></span>`;
const $fragment16 = parseFragment`<span${3}><img src="/public/assets/lessonback.jpg" alt="logo"${3}></span>`;
const $fragment17 = parseFragment`<span${3}><img src="/public/assets/Ins1.jpg" alt="logo"${3}></span>`;
const $fragment18 = parseFragment`<span${3}><img src="/public/assets/back25.jpg" alt="logo"${3}></span>`;
const $fragment19 = parseFragment`<span${3}><img src="/public/assets/Ins2.jpg" alt="logo"${3}></span>`;
const $fragment20 = parseFragment`<div class="blog${0}"${2}><h1${3}>GETTIN ON THE ROAD</h1><div class="row5${0}"${2}><div class="card5${0}"${2}><img src="/public/assets/back.jpeg" alt="logo"${3}><h3${3}>The art of motocycle maintenance</h3></div><div class="card5${0}"${2}><img src="/public/assets/racing.jpeg" alt="logo"${3}><h3${3}>Motocycle public transport </h3></div><div class="card5${0}"${2}><img src="/public/assets/race.jpeg" alt="logo"${3}><h3${3}>Choosing a roadbike</h3></div></div></div>`;
const $fragment21 = parseFragment`<div class="page6${0}"${2}><div class="mapArea${0}"${2}><div class="row6${0}"${2}><div class="card6${0}"${2}><h1${3}>FIND YOUR NEAREST LESSON</h1></div><div class="card6${0}"${2}><img src="/public/assets/map.png" alt="logo"${3}></div></div></div></div>`;
const $fragment22 = parseFragment`<footer${3}><div class="row2${0}"${2}><div class="card2${0}"${2}><img src="/public/assets/yamaha.png" alt="logo"${3}></div><div class="card2${0}"${2}><img src="/public/assets/bmw.png" alt="logo"${3}></div><div class="card2${0}"${2}><img src="/public/assets/ktm.png" alt="logo"${3}></div><div class="card2${0}"${2}><img src="/public/assets/kawasaki.png" alt="logo"${3}></div></div></footer>`;
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
  key: 9
};
const stc6 = {
  key: 11
};
const stc7 = {
  styleDecls: [["border-bottom-left-radius", "1rem", false], ["border-bottom-right-radius", "1rem", false]],
  key: 13
};
const stc8 = {
  classMap: {
    "page1": true
  },
  key: 15
};
const stc9 = {
  classMap: {
    "page4": true
  },
  key: 21
};
const stc10 = {
  classMap: {
    "siteevent": true
  },
  key: 22
};
const stc11 = {
  classMap: {
    "wrap": true
  },
  key: 23
};
const stc12 = {
  "back": true
};
const stc13 = {
  classMap: {
    "gallery": true
  },
  key: 25
};
const stc14 = {
  classMap: {
    "eventRow": true
  },
  key: 26
};
const stc15 = {
  classMap: {
    "eventCard": true
  },
  key: 27
};
const stc16 = {
  key: 30
};
const stc17 = {
  key: 31
};
const stc18 = {
  key: 32
};
const stc19 = {
  key: 33
};
const stc20 = {
  key: 34
};
const stc21 = {
  key: 35
};
const stc22 = {
  key: 36
};
const stc23 = {
  key: 37
};
const stc24 = {
  classMap: {
    "eventCard": true
  },
  key: 38
};
const stc25 = {
  key: 41
};
const stc26 = {
  key: 42
};
const stc27 = {
  classMap: {
    "eventCard": true
  },
  key: 43
};
const stc28 = {
  key: 46
};
const stc29 = {
  key: 47
};
const stc30 = {
  classMap: {
    "eventRow": true
  },
  key: 48
};
const stc31 = {
  classMap: {
    "eventCard": true
  },
  key: 49
};
const stc32 = {
  key: 52
};
const stc33 = {
  key: 53
};
const stc34 = {
  classMap: {
    "eventCard": true
  },
  key: 54
};
const stc35 = {
  key: 57
};
const stc36 = {
  key: 58
};
const stc37 = {
  classMap: {
    "eventCard": true
  },
  key: 59
};
const stc38 = {
  key: 62
};
const stc39 = {
  key: 63
};
const stc40 = {
  "forward": true
};
const stc41 = {
  classMap: {
    "callbackcard": true
  },
  key: 67
};
const stc42 = {
  classMap: {
    "inputs": true
  },
  key: 72
};
const stc43 = {
  classMap: {
    "slds-form": true,
    "form": true
  },
  key: 73
};
const stc44 = {
  classMap: {
    "slds-form-element": true,
    "inputbox": true
  },
  key: 74
};
const stc45 = {
  "slds-input": true
};
const stc46 = {
  classMap: {
    "slds-form-element": true,
    "inputbox": true
  },
  key: 76
};
const stc47 = {
  classMap: {
    "slds-form-element": true,
    "inputbox": true
  },
  key: 78
};
const stc48 = {
  classMap: {
    "slds-form-element": true,
    "inputbox": true
  },
  key: 80
};
const stc49 = {
  classMap: {
    "page5": true
  },
  key: 84
};
const stc50 = {
  classMap: {
    "ins": true
  },
  key: 85
};
const stc51 = {
  classMap: {
    "instructor": true
  },
  key: 86
};
const stc52 = {
  classMap: {
    "wrap2": true
  },
  key: 87
};
const stc53 = {
  "back2": true
};
const stc54 = {
  "gallery2": true
};
const stc55 = {
  classMap: {
    "eventRow2": true
  },
  key: 90
};
const stc56 = {
  classMap: {
    "eventCard2": true
  },
  key: 91
};
const stc57 = {
  key: 94
};
const stc58 = {
  classMap: {
    "eventCard2": true
  },
  key: 95
};
const stc59 = {
  key: 98
};
const stc60 = {
  classMap: {
    "eventCard2": true
  },
  key: 99
};
const stc61 = {
  key: 102
};
const stc62 = {
  classMap: {
    "eventRow2": true
  },
  key: 103
};
const stc63 = {
  classMap: {
    "eventCard2": true
  },
  key: 104
};
const stc64 = {
  key: 107
};
const stc65 = {
  classMap: {
    "eventCard2": true
  },
  key: 108
};
const stc66 = {
  key: 111
};
const stc67 = {
  classMap: {
    "eventCard2": true
  },
  key: 112
};
const stc68 = {
  key: 115
};
const stc69 = {
  "forward2": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, fid: api_scoped_frag_id, t: api_text, h: api_element, c: api_custom_element, gid: api_scoped_id, d: api_dynamic_text} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18, _m19, _m20, _m21} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2, [api_static_part(6, {
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
  }, [api_element("ul", stc3, [api_element("li", stc4, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 8
  }, [api_text("Base Training")])]), api_element("li", stc5, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 10
  }, [api_text("Track")])]), api_element("li", stc6, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 12
  }, [api_text("OffRoad")])]), api_element("li", stc7, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 14
  }, [api_text("City")])])])])]), api_element("div", stc8, [api_custom_element("components-custom-carousel", _componentsCustomCarousel, {
    props: {
      "slidesData": $cmp.slides
    },
    key: 16
  })]), api_static_fragment($fragment2(), 18, [api_static_part(7, {
    on: {
      "mouseover": _m4 || ($ctx._m4 = api_bind($cmp.handleMouseOver)),
      "mouseleave": _m5 || ($ctx._m5 = api_bind($cmp.handleMouseLeave))
    }
  }), api_static_part(11, {
    on: {
      "mouseover": _m6 || ($ctx._m6 = api_bind($cmp.handleMouseOver)),
      "mouseleave": _m7 || ($ctx._m7 = api_bind($cmp.handleMouseLeave))
    }
  }), api_static_part(15, {
    on: {
      "mouseover": _m8 || ($ctx._m8 = api_bind($cmp.handleMouseOver)),
      "mouseleave": _m9 || ($ctx._m9 = api_bind($cmp.handleMouseLeave))
    }
  })]), api_static_fragment($fragment3(), 20), api_element("div", stc9, [api_element("div", stc10, [api_element("div", stc11, [api_element("img", {
    classMap: stc12,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("back")
    },
    key: 24,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.handleBackClick))
    }
  }), api_element("div", stc13, [api_element("div", stc14, [api_element("div", stc15, [api_static_fragment($fragment4(), 29), api_element("div", stc16, [api_element("p", stc17, [api_text(api_dynamic_text($cmp.EventDate1))])]), api_element("div", stc18, [api_element("h2", stc19, [api_text(api_dynamic_text($cmp.EventName1))])]), api_element("div", stc20, [api_element("p", stc21, [api_text(api_dynamic_text($cmp.EventLocation1))]), api_element("p", stc22, [api_text(api_dynamic_text($cmp.EventType1))]), api_element("p", stc23, [api_text(api_dynamic_text($cmp.EventStage1))])])]), api_element("div", stc24, [api_static_fragment($fragment5(), 40), api_element("h2", stc25, [api_text(api_dynamic_text($cmp.EventName2))]), api_element("p", stc26, [api_text(api_dynamic_text($cmp.EventDate2))])]), api_element("div", stc27, [api_static_fragment($fragment6(), 45), api_element("h2", stc28, [api_text(api_dynamic_text($cmp.EventName3))]), api_element("p", stc29, [api_text(api_dynamic_text($cmp.EventDate3))])])]), api_element("div", stc30, [api_element("div", stc31, [api_static_fragment($fragment7(), 51), api_element("h2", stc32, [api_text(api_dynamic_text($cmp.EventName4))]), api_element("p", stc33, [api_text(api_dynamic_text($cmp.EventDate4))])]), api_element("div", stc34, [api_static_fragment($fragment8(), 56), api_element("h2", stc35, [api_text(api_dynamic_text($cmp.EventName5))]), api_element("p", stc36, [api_text(api_dynamic_text($cmp.EventDate5))])]), api_element("div", stc37, [api_static_fragment($fragment9(), 61), api_element("h2", stc38, [api_text(api_dynamic_text($cmp.EventName6))]), api_element("p", stc39, [api_text(api_dynamic_text($cmp.EventDate6))])])])]), api_element("img", {
    classMap: stc40,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("forward")
    },
    key: 64,
    on: {
      "click": _m11 || ($ctx._m11 = api_bind($cmp.handleForwardClick))
    }
  })])]), api_static_fragment($fragment10(), 66), api_element("div", stc41, [api_static_fragment($fragment11(), 69), api_static_fragment($fragment12(), 71), api_element("div", stc42, [api_element("div", stc43, [api_element("div", stc44, [api_element("input", {
    classMap: stc45,
    attrs: {
      "type": "text",
      "id": api_scoped_id("text-input-id-1"),
      "placeholder": "Name Surname",
      "name": "Name"
    },
    props: {
      "value": $cmp.leadRecord.Name
    },
    key: 75,
    on: {
      "change": _m12 || ($ctx._m12 = api_bind($cmp.changeHandler))
    }
  })]), api_element("div", stc46, [api_element("input", {
    classMap: stc45,
    attrs: {
      "type": "text",
      "id": api_scoped_id("text-input-id-2"),
      "placeholder": "Phone Number",
      "name": "Phone__c"
    },
    props: {
      "value": $cmp.leadRecord.Phone__c
    },
    key: 77,
    on: {
      "change": _m13 || ($ctx._m13 = api_bind($cmp.changeHandler))
    }
  })]), api_element("div", stc47, [api_element("input", {
    classMap: stc45,
    attrs: {
      "type": "text",
      "id": api_scoped_id("text-input-id-3"),
      "placeholder": "Email",
      "name": "email__c"
    },
    props: {
      "value": $cmp.leadRecord.email__c
    },
    key: 79,
    on: {
      "change": _m14 || ($ctx._m14 = api_bind($cmp.changeHandler))
    }
  })]), api_element("div", stc48, [api_element("input", {
    classMap: stc45,
    attrs: {
      "type": "text",
      "id": api_scoped_id("text-input-id-4"),
      "placeholder": "Subject",
      "name": "description__c"
    },
    props: {
      "value": $cmp.leadRecord.description__c
    },
    key: 81,
    on: {
      "change": _m15 || ($ctx._m15 = api_bind($cmp.changeHandler))
    }
  })])])]), api_static_fragment($fragment13(), 83, [api_static_part(0, {
    on: {
      "click": _m17 || ($ctx._m17 = api_bind($cmp.formSubmitHandler))
    }
  })])])]), api_element("div", stc49, [api_element("div", stc50, [api_element("div", stc51, [api_element("div", stc52, [api_element("img", {
    classMap: stc53,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("back2")
    },
    key: 88,
    on: {
      "click": _m18 || ($ctx._m18 = api_bind($cmp.handleBack2Click))
    }
  }), api_element("div", {
    classMap: stc54,
    key: 89,
    on: {
      "mouseenter": _m19 || ($ctx._m19 = api_bind($cmp.handleMouseEnter)),
      "mouseleave": _m20 || ($ctx._m20 = api_bind($cmp.handleMouseLeave))
    }
  }, [api_element("div", stc55, [api_element("div", stc56, [api_static_fragment($fragment14(), 93), api_element("h2", stc57, [api_text(api_dynamic_text($cmp.instructorsName1))])]), api_element("div", stc58, [api_static_fragment($fragment15(), 97), api_element("h2", stc59, [api_text(api_dynamic_text($cmp.instructorsName2))])]), api_element("div", stc60, [api_static_fragment($fragment16(), 101), api_element("h2", stc61, [api_text(api_dynamic_text($cmp.instructorsName3))])])]), api_element("div", stc62, [api_element("div", stc63, [api_static_fragment($fragment17(), 106), api_element("h2", stc64, [api_text(api_dynamic_text($cmp.instructorsName4))])]), api_element("div", stc65, [api_static_fragment($fragment18(), 110), api_element("h2", stc66, [api_text(api_dynamic_text($cmp.instructorsName5))])]), api_element("div", stc67, [api_static_fragment($fragment19(), 114), api_element("h2", stc68, [api_text(api_dynamic_text($cmp.instructorsName6))])])])]), api_element("img", {
    classMap: stc69,
    attrs: {
      "src": "/public/assets/ok.png",
      "id": api_scoped_id("forward2")
    },
    key: 116,
    on: {
      "click": _m21 || ($ctx._m21 = api_bind($cmp.handleForward2Click))
    }
  })])]), api_static_fragment($fragment20(), 118)])]), api_static_fragment($fragment21(), 120), api_static_fragment($fragment22(), 122)])])];
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
tmpl.stylesheetToken = "lwc-5bru29uac0a";
tmpl.legacyStylesheetToken = "pages-Home_Home";
freezeTemplate(tmpl);
