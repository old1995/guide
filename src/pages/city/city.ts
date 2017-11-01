import { RANKES } from './../../mock-data/rankList';
import { RankDetailPage } from './../rank-detail/rank-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({ selector: 'page-city', templateUrl: 'city.html' })
export class CityPage {
  is = true;
  rankList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rankList = RANKES;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }
  goToRankDetail() {
    this
      .navCtrl
      .push(RankDetailPage);
    const ti = new Date();
    console.log(ti);
  };

}
