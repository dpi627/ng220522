import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: string, maskSymbol: string, showChars: number = 3): string {
    let mask: string = '';
    for (let i = 0; i < value.length - showChars * 2; i++) {
      mask += maskSymbol;
    }

    return (
      value.substring(0, showChars) +
      mask +
      value.substring(value.length - showChars, value.length)
    );
  }
}
