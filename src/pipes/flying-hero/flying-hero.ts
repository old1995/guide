import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the FlyingHeroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({name: 'flyingHero'})
export class FlyingHeroPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value : string, exponent : string) {
    return value.toLowerCase();
  }
}
