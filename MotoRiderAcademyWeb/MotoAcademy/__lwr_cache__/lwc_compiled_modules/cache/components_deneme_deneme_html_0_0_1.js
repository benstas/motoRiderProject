import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./deneme.css";

import _implicitScopedStylesheets from "./deneme.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h2 style="font-size: 4rem;"${3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsum!</h2>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
tmpl.stylesheetToken = "lwc-3p1g5edsrfq";
tmpl.legacyStylesheetToken = "components-deneme_deneme";
freezeTemplate(tmpl);
