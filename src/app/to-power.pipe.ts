import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPower'
})
export class ToPowerPipe implements PipeTransform {

  transform(value: any, raiseBy:number=1,reduceBy:number): any {
    return Math.pow(value,raiseBy)-reduceBy;
  }

}
