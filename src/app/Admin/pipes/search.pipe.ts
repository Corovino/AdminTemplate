import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if( args === undefined){
       return value;
    }
    return value.filter( (item) => {
      return item.name.toLowerCase().includes( args.toLowerCase());
    });
  }

}
