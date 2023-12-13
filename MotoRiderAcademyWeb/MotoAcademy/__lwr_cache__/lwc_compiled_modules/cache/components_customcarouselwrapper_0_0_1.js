import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./customCarouselWrapper.html";
class CustomCarouselWrapper extends LightningElement {
  constructor(...args) {
    super(...args);
    this.slides = [{
      image: `/public/assets/map.png`,
      heading: 'Caption one',
      description: 'You can add description of first slide here'
    }, {
      image: `/public/assets/map.png`,
      heading: 'Caption Two',
      description: 'You can add description of second slide here'
    }, {
      image: `/public/assets/map.png`,
      heading: 'Caption Three',
      description: 'You can add description of third slide here'
    }];
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(CustomCarouselWrapper, {
  fields: ["slides"]
});
export default _registerComponent(CustomCarouselWrapper, {
  tmpl: _tmpl,
  sel: "components-custom-carousel-wrapper",
  apiVersion: 60
});