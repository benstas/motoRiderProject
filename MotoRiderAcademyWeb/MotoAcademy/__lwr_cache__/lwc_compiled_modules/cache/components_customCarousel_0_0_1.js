import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./customCarousel.html";
/***********
 * enable-auto-scroll for autoScroll to enable
 * slide-timer for controlling the slider speed default is 3000
 * slides-data is the data and data should be in this format {image:'',heading:'',description:''}
 * show-full is for 100% width other wise use customWidth 
 * custom-width is use for controlling the width of the slider manually
 * 
 */
const CARD_VISIBLE_CLASSES = 'fade slds-show';
const CARD_HIDDEN_CLASSES = 'fade slds-hide';
const DOT_VISIBLE_CLASSES = 'dot active';
const DOT_HIDDEN_CLASSES = 'dot';
const DEFAULT_SLIDER_TIMER = 3000; // 3 second
const DEFAULT_SLIDER_WIDTH = 700;
class CustomCarousel extends LightningElement {
  constructor(...args) {
    super(...args);
    this.slides = [];
    this.slideIndex = 1;
    this.timer = void 0;
    this.slideTimer = DEFAULT_SLIDER_TIMER;
    this.enableAutoScroll = false;
    this.customWidth = DEFAULT_SLIDER_WIDTH;
    this.showFull = false;
  }
  get maxWidth() {
    return this.showFull ? `width:100%` : `width:${Number(this.customWidth)}px`;
  }
  get slidesData() {
    return this.slides;
  }
  set slidesData(data) {
    this.slides = data.map((item, index) => {
      return index === 0 ? {
        ...item,
        slideIndex: index + 1,
        cardClasses: CARD_VISIBLE_CLASSES,
        dotClases: DOT_VISIBLE_CLASSES
      } : {
        ...item,
        slideIndex: index + 1,
        cardClasses: CARD_HIDDEN_CLASSES,
        dotClases: DOT_HIDDEN_CLASSES
      };
    });
  }
  connectedCallback() {
    if (this.enableAutoScroll) {
      this.timer = window.setInterval(() => {
        this.slideSelectionHandler(this.slideIndex + 1);
      }, Number(this.slideTimer));
    }
  }
  disconnectedCallback() {
    if (this.enableAutoScroll) {
      window.clearInterval(this.timer);
    }
  }
  currentSlide(event) {
    let slideIndex = Number(event.target.dataset.id);
    this.slideSelectionHandler(slideIndex);
  }
  backSlide() {
    let slideIndex = this.slideIndex - 1;
    this.slideSelectionHandler(slideIndex);
  }
  forwardSlide() {
    let slideIndex = this.slideIndex + 1;
    this.slideSelectionHandler(slideIndex);
  }
  slideSelectionHandler(id) {
    if (id > this.slides.length) {
      this.slideIndex = 1;
    } else if (id < 1) {
      this.slideIndex = this.slides.length;
    } else {
      this.slideIndex = id;
    }
    this.slides = this.slides.map(item => {
      return this.slideIndex === item.slideIndex ? {
        ...item,
        cardClasses: CARD_VISIBLE_CLASSES,
        dotClases: DOT_VISIBLE_CLASSES
      } : {
        ...item,
        cardClasses: CARD_HIDDEN_CLASSES,
        dotClases: DOT_HIDDEN_CLASSES
      };
    });
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(CustomCarousel, {
  publicProps: {
    slideTimer: {
      config: 0
    },
    enableAutoScroll: {
      config: 0
    },
    customWidth: {
      config: 0
    },
    showFull: {
      config: 0
    },
    slidesData: {
      config: 3
    }
  },
  fields: ["slides", "slideIndex", "timer"]
});
export default _registerComponent(CustomCarousel, {
  tmpl: _tmpl,
  sel: "components-custom-carousel",
  apiVersion: 60
});