import { indexLogo } from './../../mock-data/indexLogo';
import { Pipe, PipeTransform } from '@angular/core';
// import {indexLogo}
/**
 * Generated class for the ShowlogoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'showlogo',
})
export class ShowlogoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(selectLogo: indexLogo[], type) {
    return selectLogo.filter(indexLogo => indexLogo.index == type)
  }
}
