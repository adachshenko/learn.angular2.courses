import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myOrderBy' })

export class OrderByPipe implements PipeTransform {
    public transform(arr: [{}], sortBy, sortDirection) {
        return arr.sort((a: Object, b: Object) => {
            return sortDirection === 'asc' ?
                a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
        });
    }
}
