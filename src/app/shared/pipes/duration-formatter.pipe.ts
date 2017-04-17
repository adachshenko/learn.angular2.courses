import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myDurationFormatter' })

export class DurationFormatterPipe implements PipeTransform {
 public transform(courseDuration: number): string {
    let hours: string = courseDuration >= 60
    ? `${Math.floor(courseDuration / 60)}h` : '';
    let minutes: string = courseDuration % 60 ? `${courseDuration % 60}min` : '';
    return `${hours} ${minutes}`;
  }
}
