import {RankDetailPage} from './../rank-detail/rank-detail';
// import { ShowHotRankPipe } from './../../pipes/show-hot-rank/show-hot-rank';
import {RANKES} from './../../mock-data/rankList';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({selector: 'page-seven-day-hot-rank', templateUrl: 'seven-day-hot-rank.html'})
export class SevenDayHotRankPage {

  rankList = [];
  low = new Date().getTime();
  high = this.low - 24 * 7 * 60 * 100;
  value = 'hotValue';
  // 是否翻转数组（从高到低排列）
  reverse : boolean = true;
  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.rankList = RANKES;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SevenDayHotRankPage');
  }

  goToRankDetailPage(list) {
    this
      .navCtrl
      .push(RankDetailPage, {list: list})
  }
}