import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {
    constructor() {}

    startTour() {
        console.log("Starting tour");
        const IntroJs = require('../../../../node_modules/intro.js/intro.js');
        let intro = IntroJs();

        // Initialize steps
        intro.setOptions({
            steps: [
                {
                    intro: "Welcome!",
                    position: 'left'
                }, {
                    element: '#heading1',
                    intro: "Heading 1",
                    position: 'right'
                }, {
                    element: '#heading2',
                    intro: "Heading 2",
                    position: 'right'
                }, {
                    element: document.querySelectorAll('.heading')[2],
                    intro: "Heading 3.",
                    position: 'right'
                }
            ]
        });

        // Start tutorial
        intro.start();
    }
}
