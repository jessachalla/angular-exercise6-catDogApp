function catController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('cat', {
    template: `
    <h1 class="cat">Cat</h1>
    <img src="./images/cat.jpeg" />
    <ul id="list">
                <li><a href="#!/home">Go to Home Page</li>
                <li><a href="#!/dog">See Dog Instead</a></li>
            </ul>
        `,
    controller: catController
});