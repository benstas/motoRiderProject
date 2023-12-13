import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./Home.html";
const SERVER_URL = 'http://localhost:3004';
const BACKEND_URL = 'http://localhost:3002';
const DEFAULT_LEAD_FORM = {
  Name: "",
  Phone__c: "",
  email__c: "",
  description__c: ""
};
class Home extends LightningElement {
  constructor(...args) {
    super(...args);
    // ------------------------------------------------------------------------------------------
    // slider
    this.slides = [{
      image: `/public/assets/slider1.jpeg`,
      heading: 'Learn To Drive With Confidence',
      description: 'Grow Up Your Driving Skills'
    }, {
      image: `/public/assets/slider 2.jpeg`,
      heading: 'Learn To Drive With Confidence',
      description: 'Grow Up Your Driving Skills'
    }, {
      image: `/public/assets/slider3.jpeg`,
      heading: 'Learn To Drive With Confidence',
      description: 'Grow Up Your Driving Skills'
    }];
    this.menuClass = 'slds-hide';
    this._timeoutId = void 0;
    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------
    // eventCards
    this.eventRecords = void 0;
    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------
    // eventcard backend com
    this.events = [];
    this.EventName1 = void 0;
    this.EventName2 = void 0;
    this.EventName3 = void 0;
    this.EventName4 = void 0;
    this.EventName5 = void 0;
    this.EventName6 = void 0;
    // ------------------------------------------------------------------------------------------
    // inst card back comm
    this.instructorsRecords = void 0;
    this.instructors = [];
    // --------------------------------------------------------------------------------------------------------------
    // ------leadform-------
    this.leadRecord = DEFAULT_LEAD_FORM;
  }
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  // menu  
  handleMouseOver(event) {
    const middleCard = this.template.querySelector('.middle');
    middleCard.style.marginTop = '-60px';
    if (event.target.classList.contains('middle')) {
      middleCard.style.marginTop = '-20px';
    }
  }
  handleMouseLeave(event) {
    const middleCard = this.template.querySelector('.middle');
    middleCard.style.marginTop = '20px'; // Orjinal değerine dönmesi
  }

  showMenu(event) {
    clearTimeout(this._timeoutId);
    this.menuClass = 'slds-show';
  }
  hideMenu(event) {
    this._timeoutId = setTimeout(() => {
      this.menuClass = 'slds-hide';
    }, 300);
  }
  // ------------------------------------------------------------------------------------------
  // eventcard movement
  handleBackClick() {
    const viewportWidth = window.innerWidth; // Viewport genişliğini alır
    const scrollAmount = -0.9 * viewportWidth; // -900 değerine denk gelecek şekilde hesaplar

    this.scrollGallery(scrollAmount);
  }
  handleForwardClick() {
    const viewportWidth = window.innerWidth; // Viewport genişliğini alır
    const scrollAmount = 0.9 * viewportWidth; // -900 değerine denk gelecek şekilde hesaplar

    this.scrollGallery(scrollAmount);
  }
  scrollGallery(change) {
    const gallery = this.template.querySelector('.gallery');
    const startTime = performance.now();
    const startScroll = gallery.scrollLeft;
    const duration = 2000; // Geçiş süresi (ms) - 3 saniye olarak ayarlandı

    function updateGallery(timestamp) {
      const elapsed = timestamp - startTime;
      gallery.scrollLeft = easeInOut(elapsed, startScroll, change, duration);
      if (elapsed < duration) {
        requestAnimationFrame(updateGallery);
      }
    }
    function easeInOut(t, b, c, d) {
      // Easing fonksiyonu (isteğe bağlı olarak kullanabilirsiniz)
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(updateGallery);
  }
  assignEventNames() {
    if (this.events.length > 0) {
      this.EventName1 = this.events[0].Name__c || '';
      this.EventName2 = this.events.length > 1 ? this.events[1].Name__c || '' : '';
      this.EventName3 = this.events.length > 1 ? this.events[2].Name__c || '' : '';
      this.EventName4 = this.events.length > 1 ? this.events[3].Name__c || '' : '';
      this.EventName5 = this.events.length > 1 ? this.events[4].Name__c || '' : '';
      this.EventName6 = this.events.length > 1 ? this.events[5].Name__c || '' : '';
      this.EventDate1 = this.events[0].Start_DateTime__c || '';
      this.EventDate2 = this.events.length > 1 ? this.events[1].Start_DateTime__c || '' : '';
      this.EventDate3 = this.events.length > 1 ? this.events[2].Start_DateTime__c || '' : '';
      this.EventDate4 = this.events.length > 1 ? this.events[3].Start_DateTime__c || '' : '';
      this.EventDate5 = this.events.length > 1 ? this.events[4].Start_DateTime__c || '' : '';
      this.EventDate6 = this.events.length > 1 ? this.events[5].Start_DateTime__c || '' : '';
    }
  }
  async getEvents() {
    try {
      const url = `${BACKEND_URL}/eventdata`;
      const eventsData = await this.makeApiRequest(url);
      if (eventsData) {
        this.events = eventsData;
      }
    } catch (error) {
      console.error('Error Occurred', error);
    }
  }
  async makeApiRequest(url, method = 'GET', data = null) {
    try {
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      console.log("Error Occurred", error);
    }
  }
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  // inst card effect
  handleMouseEnter() {
    const h2Elements = this.template.querySelectorAll('.eventCard2 h2');
    h2Elements.forEach(h2 => {
      h2.style.transition = 'opacity 1s ease-in-out';
      h2.style.opacity = '1';
    });
  }
  handleMouseLeave() {
    const h2Elements = this.template.querySelectorAll('.eventCard2 h2');
    h2Elements.forEach(h2 => {
      h2.style.transition = 'opacity 0.5s ease-in-out';
      h2.style.opacity = '0';
    });
  }
  handleBack2Click() {
    const viewportWidth = window.innerWidth; // Viewport genişliğini alır
    const scrollAmount = -0.9 * viewportWidth; // -900 değerine denk gelecek şekilde hesaplar
    this.scrollGallery2(scrollAmount);
  }
  handleForward2Click() {
    const viewportWidth = window.innerWidth; // Viewport genişliğini alır
    const scrollAmount = 0.9 * viewportWidth; // -900 değerine denk gelecek şekilde hesaplar

    this.scrollGallery2(scrollAmount);
  }
  scrollGallery2(change) {
    const gallery2 = this.template.querySelector('.gallery2');
    const startTime = performance.now();
    const startScroll = gallery2.scrollLeft;
    const duration = 2000; // Geçiş süresi (ms) - 3 saniye olarak ayarlandı

    function updateGallery2(timestamp) {
      const elapsed = timestamp - startTime;
      gallery2.scrollLeft = easeInOut(elapsed, startScroll, change, duration);
      if (elapsed < duration) {
        requestAnimationFrame(updateGallery2);
      }
    }
    function easeInOut(t, b, c, d) {
      // Easing fonksiyonu (isteğe bağlı olarak kullanabilirsiniz)
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(updateGallery2);
  }
  assignInstructorsNames() {
    if (this.instructors.length > 0) {
      this.instructorsName1 = this.instructors[0].Name || '';
      this.instructorsName2 = this.instructors.length > 1 ? this.instructors[1].Name || '' : '';
      this.instructorsName3 = this.instructors.length > 1 ? this.instructors[2].Name || '' : '';
      this.instructorsName4 = this.instructors.length > 1 ? this.instructors[3].Name || '' : '';
      this.instructorsName5 = this.instructors.length > 1 ? this.instructors[4].Name || '' : '';
      this.instructorsName6 = this.instructors.length > 1 ? this.instructors[5].Name || '' : '';
      this.instructorsMail1 = this.instructors[0].Email__c || '';
      this.instructorsMail2 = this.instructors.length > 1 ? this.instructors[1].Email__c || '' : '';
      this.instructorsMail3 = this.instructors.length > 1 ? this.instructors[2].Email__c || '' : '';
      this.instructorsMail4 = this.instructors.length > 1 ? this.instructors[3].Email__c || '' : '';
      this.instructorsMail5 = this.instructors.length > 1 ? this.instructors[4].Email__c || '' : '';
      this.instructorsMail6 = this.instructors.length > 1 ? this.instructors[5].Email__c || '' : '';
    }
  }
  async connectedCallback() {
    const instructors = await this.getInstructors();
    this.assignInstructorsNames();
    console.log("Instructors", instructors);
    const events = await this.getEvents();
    console.log("Events", events);
    this.assignEventNames();
  }
  async getInstructors() {
    try {
      const url = `${BACKEND_URL}/instructordata`;
      const instructorsData = await this.makeApiRequest(url);
      if (instructorsData) {
        this.instructors = instructorsData;
      }
    } catch (error) {
      console.error('Error Occurred', error);
    }
  }
  async makeApiRequest(url, method = 'GET', data = null) {
    try {
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      console.log("Error Occurred", error);
    }
  }
  changeHandler(event) {
    const {
      name,
      value
    } = event.target;
    // const name = event.target.name
    // const value = event.target.value
    this.leadRecord = {
      ...this.leadRecord,
      [name]: value
    };
  }
  formSubmitHandler(event) {
    event.preventDefault();
    console.log("this.leadRecord", JSON.stringify(this.leadRecord));
  }
  formSubmitHandler(event) {
    event.preventDefault();
    fetch('http://localhost:3002/createLead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.leadRecord)
    }).then(response => response.json()).then(data => {
      console.log('Yeni lead oluşturuldu:', data);
      // Burada sunucudan gelen yanıtı işleyebilirsiniz
    }).catch(error => {
      console.error('Hata:', error);
    });
  }
  // --------------------------------------------------------------------------------------------------------------
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Home, {
  track: {
    menuClass: 1,
    eventRecords: 1,
    events: 1,
    EventName1: 1,
    EventName2: 1,
    EventName3: 1,
    EventName4: 1,
    EventName5: 1,
    EventName6: 1,
    instructorsRecords: 1,
    instructors: 1
  },
  fields: ["slides", "_timeoutId", "leadRecord"]
});
export default _registerComponent(Home, {
  tmpl: _tmpl,
  sel: "pages-home",
  apiVersion: 60
});