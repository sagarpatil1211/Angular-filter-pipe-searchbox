import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any):any {
   
    return (value || []).filter((search:any)=>{
      return search.state.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }

}
