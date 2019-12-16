import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, showMask :boolean): string {
    console.log(value);
    if (!showMask || value.length < 10) {
      return value;
    }
    return "XXX-XX" + value.slice(6)
  }

}

