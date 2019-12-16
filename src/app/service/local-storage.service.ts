import { EventEmitter, Injectable } from '@angular/core';
/**
     ** @Injectable
     */
@Injectable()
/**
     * A class representing a LocalStorageService
     * @class  LocalStorageService
     */
export class LocalStorageService {
/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    constructor() { }
/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    private elemHeight: number[] = [];
/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    private heightUpdator: EventEmitter<number> = new EventEmitter<number>();

/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    private setelemHeight: number[] = [];
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    private heightUpdatorSet: EventEmitter<object> = new EventEmitter<object>();
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    private elementHeightIdentifire: object = {};

/** Max Height cal for multiple time use in single page */
/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    addHeightToArray(value: number, heightBox: string) {
        if (this.elementHeightIdentifire.hasOwnProperty(heightBox)) {
            this.elementHeightIdentifire[heightBox].push(value);
        } else {
            this.elementHeightIdentifire[heightBox] = [];
            this.elementHeightIdentifire[heightBox].push(value);
        }
        this.calMaxHeight(heightBox);
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    calMaxHeight(identifier): void {
        let maxHeight = 0;
        let emitObject = {
            heightFor: identifier,
            maxHeight: 0
        };
        this.elementHeightIdentifire[identifier].forEach(height => {
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        emitObject.maxHeight = maxHeight;
        this.heightUpdatorSet.emit(emitObject);
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    getAllMaxHeight(): EventEmitter<object> {
        return this.heightUpdatorSet;
    }

 /**Max Height cal for single use in single page*/
 /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    addToArray(value) {
        this.elemHeight.push(value);
        this.calculateMaxHeight();
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    calculateMaxHeight(): void {
        let maxHeight = 0;
        this.elemHeight.forEach(height => {
            if (maxHeight < height) {
                maxHeight = height;
            }
        });
        this.heightUpdator.emit(maxHeight);
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    getMaxHeight(): EventEmitter<number> {
        return this.heightUpdator;
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    public setLocalStorageData(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
        console.log( localStorage.setItem(key, JSON.stringify(data)));
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    public getLocalStorageData(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
    /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
    public removeLocalStorageData(key: string) {
        localStorage.removeItem(key);
    }


}
