import { LightningElement, track } from "lwc";
const SERVER_URL = 'http://localhost:3004'
const BACKEND_URL = 'http://localhost:3002'

export default class Event extends LightningElement {

    @track instructorsRecords


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
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(updateGallery2);
    }


    handleMouseEnter() {
        const h2Elements = this.template.querySelectorAll('.eventCard2 h2');
        h2Elements.forEach((h2) => {
            h2.style.transition = 'opacity 1s ease-in-out';
            h2.style.opacity = '1';


        });
    }

    handleMouseLeave() {
        const h2Elements = this.template.querySelectorAll('.eventCard2 h2');
        h2Elements.forEach((h2) => {
            h2.style.transition = 'opacity 0.5s ease-in-out';
            h2.style.opacity = '0';
            

        });
    }


    @track instructors = [];
    @track instructorsName1;
    @track instructorsName2;
    @track instructorsName3;
    @track instructorsName4;
    @track instructorsName5;
    @track instructorsName6;
    @track instructorsMail1;
    @track instructorsMail2;
    @track instructorsMail3;
    @track instructorsMail4;
    @track instructorsMail5;
    @track instructorsMail6;

    assignInstructorsNames() {
        if (this.instructors.length > 0) {
            this.instructorsName1 = this.instructors[0].Name || '';
            this.instructorsName2 = this.instructors.length > 1 ? this.instructors[1].Name || '' : '';
            this.instructorsName3 = this.instructors.length > 1 ? this.instructors[2].Name || '' : '';
            this.instructorsName4 = this.instructors.length > 1 ? this.instructors[3].Name || '' : '';
            this.instructorsName5 = this.instructors.length > 1 ? this.instructors[4].Name || '' : '';
            this.instructorsName6 = this.instructors.length > 1 ? this.instructors[5].Name || '' : '';
            this.instructorsMail1 = this.instructors[0].Email__c || '';
            this.instructorsMail2 = this.instructors.length > 1 ? this.instructors[1].	Email__c || '' : '';
            this.instructorsMail3 = this.instructors.length > 1 ? this.instructors[2].	Email__c || '' : '';
            this.instructorsMail4 = this.instructors.length > 1 ? this.instructors[3].	Email__c || '' : '';
            this.instructorsMail5 = this.instructors.length > 1 ? this.instructors[4].	Email__c || '' : '';
            this.instructorsMail6 = this.instructors.length > 1 ? this.instructors[5].	Email__c || '' : '';
        }
    }


    async connectedCallback(){
        const instructors = await this.getInstructors()
        this.assignInstructorsNames();
        console.log("Instructors", instructors)


    }
    async getInstructors(){
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
    async makeApiRequest(url, method='GET', data= null){
        try{
            const requestOptions={
                method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:data ? JSON.stringify(data):null
            }
            const response = await fetch(url, requestOptions)
            if(!response.ok){
                throw new Error(response.statusText)
        }
        return response.json()
    }
    catch(error){
        console.log("Error Occurred", error)}
    }

    

}
