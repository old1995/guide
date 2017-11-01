import { ChoosenPage } from './../choosen/choosen';
import { RankDetailPage } from './../rank-detail/rank-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeatureRank } from './../../mock-data/featureRank';
import { ShowFeatureRankService } from './../../service/showFeatureRank.service';
@IonicPage()
@Component({ selector: 'page-read', templateUrl: 'read.html', providers: [ShowFeatureRankService] })
export class ReadPage {
  nav = "choosen";
  featurelist: FeatureRank[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public getFeature: ShowFeatureRankService) { }

  getFeatureRank() {
    this
      .getFeature
      .getFeatureRank()
      .then(featurelsit => this.featurelist = featurelsit);
  }

  // ngOnInit() {   this.getFeatureRank(); }
  ionViewDidLoad() {
    this.getFeatureRank();
    console.log("get");
  }

  goToRankPage(list) {
    if (list.type == 1) {
      this
        .navCtrl
        .push(ChoosenPage, { list: list });
    } else {
      this
        .navCtrl
        .push(RankDetailPage, { list: list });
    }
  }
}
