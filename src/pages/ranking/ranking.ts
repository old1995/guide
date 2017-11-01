import { rankArray } from './../../mock-data/rankArray';
import { Logo1, logo2, logo3 } from './../../mock-data/logo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {rankArray}
@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  lg = "logo";
  logo = [];
  logo1 = [];
  logo2 = [];
  logo3 = [];
  list;
  listtest;
  name;
  nameByHomePage; //从RankingPage 传过来的名字
  rankArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.logo1 = Logo1;
    this.logo2 = logo2;
    this.logo3 = logo3;
    this.rankArray = rankArray;
    this.listtest = this.rankArray[0];

    this.logo = this.logo1.concat(this.logo2, this.logo3);

    this.nameByHomePage = this.navParams.get('setName');
    this.list = this.nameByHomePage ? this.rankArray.find(list => list.name === this.nameByHomePage) : this.rankArray[0];
    // console.log(this.list);

  }

  ionViewDidLoad() {
  }

  pushName(item) {
    this.name = item.logoName;
    this.list = this.getList(item.name);
    console.log(this.list);
  }

  getList(name) {
    for (let i = 0, l = this.rankArray.length; i < l; i++) {
      return this.rankArray.find(list => list.name === this.name);
    }
  }

  showList(name) {

  }

}
