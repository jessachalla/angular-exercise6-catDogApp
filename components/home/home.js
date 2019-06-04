
function homeController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('home', {
    template: `

    <nav id="header">
            <ul id="list">
                <li><a href="#!/cat">Cat</a></li>
                <li><a href="#!/dog">Dog</a></li>
            </ul>
        </nav>
        `,
    controller: homeController
});