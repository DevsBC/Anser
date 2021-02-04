import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'es':
        return 'Español';
      case 'en':
        return 'English';
      default:
        return '';
    }
  }

}
