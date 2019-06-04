function dogController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('dog', {
    template: `
    <h1 class="dog">Dog</h1>
    <img src="./images/dog.jpeg" />
    <ul id="list">
                <li><a href="#!/home">Go to Home Page</li>
                <li><a href="#!/cat">See Cat Instead</a></li>
            </ul>
        `,
    controller: dogController
});