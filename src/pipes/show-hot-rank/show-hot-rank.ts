import { Rank } from './../../mock-data/rank';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'showHotRank' })
export class ShowHotRankPipe implements PipeTransform {
  // 返回一周之内的榜单
  transform(value: Rank[], low: any) {
    return value.filter(Rank => Rank.time > low);
  }
}