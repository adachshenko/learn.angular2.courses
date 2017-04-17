import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myFilterBy' })

export class FilterByPipe implements PipeTransform {
    public transform(arr, filterBy, value) {
        return arr.filter((object: Object) => {
            return ~(object[filterBy].toLowerCase().indexOf(value));
        });
    }
}
