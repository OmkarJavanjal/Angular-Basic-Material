import { ElementRef } from "@angular/core";

export class MockElementRef extends ElementRef {
    constructor () {
        super(null);
        console.log('Mock element ref initialization complete', this);
    }
}
