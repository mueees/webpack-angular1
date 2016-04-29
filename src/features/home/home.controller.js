export default class HomeController {
    constructor() {
        this.name = 'World';

        console.log('Home controller');
    }

    changeName() {
        this.name = 'angular-tips';
    }
}