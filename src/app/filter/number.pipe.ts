import { Pipe, PipeTransform, NgModule  } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(str){
		return "(" + str.slice(0,2) + ")" +"-"+ "(" + str.slice(2,6) + ")" +"-"+ "(" + str.slice(6,10) + ")";
	}

}
