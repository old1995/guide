import {RANKES} from './../../mock-data/rankList';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Slides} from 'ionic-angular';
// import { EventEmitter } from '@angular/core'; import {RANKES}
@IonicPage()
@Component({selector: 'page-rank-detail', templateUrl: 'rank-detail.html'})
export class RankDetailPage {
  @ViewChild(Slides)slides : Slides;

  nav : string = "comprehensive";
  one : string = "one";
  two : string = "two";
  list;
  lists;
  test;
  test1;
  name;
  rightList;
  // 指标长度
  zhibiaoLength;
  //指标数组，用于渲染segment
  zhibiaoList;
  n = 0;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    // 取参数
    this.list = navParams.data.list;
    // 取取得榜单名
    this.name = this.list.name;
    this.lists = RANKES;
    // 获取榜单列表中符合传参的数据
    this.rightList = this.getRightList();
    // 指标长度
    this.zhibiaoLength = this.rightList.list[0].sc.length;
    console.log(this.zhibiaoLength);
    //指标数组，用于渲染segment
    this.zhibiaoList = this.getZhiBiao();
  }

  ionViewDidLoad() {
    this.getlenglist();
  }

  getZhiBiao() {
    let arr = [];
    for (let i = 0, l = this.zhibiaoLength; i < l; i++) {
      let name = this.rightList.list[0].sc[i].name;
      arr.push({name, i});
    }
    console.log(arr);
    return arr;
  }

  //获取符合传参的榜单
  getRightList() {
    for (let i = 0, l = this.lists.length; i < l; i++) {
      return this
        .lists
        .find(list => list.name === this.name);
    }
  }

  getZhiBiaoName(nu : number) {
    const arr = [];
    for (let i = 0, l = this.rightList.list.length; i < l; i++) {
      let name = this.rightList.list[i].name;
      let score = this.rightList.list[i].sc[nu].score;
      arr.push({name, score});
    }
    return arr;
  }

  getAll() {
    const arr = [];
    for (let i = 0, l = this.zhibiaoLength; i < l; i++) {
      arr.push(this.getZhiBiaoName(i));
    }
    return arr;
  }

  getN(i) {
    this.n = i;
  }

  getlenglist() {
    let arr = [];
    for (let i = 0, l = this.zhibiaoLength; i < l; i++) {
      arr.push(i);
    };
    console.log(arr);
    return arr;
  }
}
