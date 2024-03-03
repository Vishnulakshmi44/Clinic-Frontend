import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(DoctorDetails: any[], searchTerm: String, propsName: string): any[] {
    const result: any[] = []
    if (!DoctorDetails || searchTerm == '' || propsName == '') {
      return DoctorDetails
    }
    DoctorDetails.forEach((list: any) => {
      if (list[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
        result.push(list)
    })


    return result;
  }
}