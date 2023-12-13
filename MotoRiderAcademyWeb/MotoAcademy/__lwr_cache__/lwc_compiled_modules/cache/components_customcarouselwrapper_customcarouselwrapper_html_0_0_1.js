import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customCarouselWrapper.css";

import _implicitScopedStylesheets from "./customCarouselWrapper.scoped.css?scoped=true";

import _cCustomCarousel from "c/customCarousel";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("c-custom-carousel", _cCustomCarousel, {
    props: {
      "slidesData": $cmp.slides
    },
    key: 0
  })];
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
tmpl.stylesheetToken = "lwc-g1nkddp66l";
tmpl.legacyStylesheetToken = "components-customCarouselWrapper_customCarouselWrapper";
freezeTemplate(tmpl);
