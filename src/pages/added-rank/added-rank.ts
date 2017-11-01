// import { ShowHotRankPipe } from './../../pipes/show-hot-rank/show-hot-rank';
import { RANKES } from './../../mock-data/rankList';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({ selector: 'page-added-rank', templateUrl: 'added-rank.html' })
export class AddedRankPage {

  rankList = [];
  low = new Date().getTime() - 24 * 7 * 60 * 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rankList = RANKES;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddedRankPage');
  }

}
