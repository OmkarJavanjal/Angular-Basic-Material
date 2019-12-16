import { Injectable } from '@angular/core';

@Injectable()
export class LoadScriptsService {

    constructor() { }

    static loadScript(scriptPath: string, onloadCallback) {
        let scr = document.createElement('script');
        scr.src = scriptPath;
        scr.type = "text/javascript";
        scr.onload = onloadCallback;
        document.getElementsByTagName('body')[0].appendChild(scr);
    }
}
