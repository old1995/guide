import { RANKES } from './../../mock-data/rankList';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ selector: 'page-product-detail', templateUrl: 'product-detail.html' })
export class ProductDetailPage {

  @ViewChild("header") header;

  product;
  // 根据 product 的 name 找到对应的榜单;
  list;
  //品牌和指标数组
  PZ = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.data.product;
    this.list = RANKES.find(list => list.name === this.product.belongToRank);
    console.log(this.list);
    // console.log(this.fenlei().sort(
    //   function (a, b) {
    //     return a.score - b.score;
    //   }
    // ));
    this.PZ = this.getBrandAndZhibiao();
  }

  ionViewDidLoad() {
    // console.log(this.list.list[0].sc.length);
    this.fenlei();
  }

  scrollEvent(e) {
    let opacity = (e.scrollTop - 300) / 100; //设置滚动距离300的时候导航栏消失
    this.header._elementRef.nativeElement.style.opacity = opacity;
    console.log(opacity);
  }


  // 合并品牌名称和指标数组
  // getBrandAndZhibiao() {
  //   let productList = this.list.list;
  //   let arr = [];
  //   for (let i = 0, l = productList.length; i < l; i++) {
  //     // let array = [];
  //     let brandName = productList[i].name;
  //     let zhibiaoListName = productList[i].sc
  //     let zhibiaoListScore = productList[i].sc
  //     arr.push({ brandName, zhibiaoListName, zhibiaoListScore });
  //   }
  //   console.log(arr);
  //   return arr;
  // }

  getBrandAndZhibiao() {
    let productList = this.list.list;
    let arr = [];
    for (let i = 0, l = productList.length; i < l; i++) {
      // let array = [];
      let brandName = productList[i].name;
      let sc = productList[i].sc;
      let scA = [];
      for (let i = 0, l = sc.length; i < l; i++) {
        let name = sc[i].name;
        let score = sc[i].score;
        scA.push({ brandName, name, score });
      }
      arr.push(scA);
    }
    console.log(arr);
    return arr;
  }

  compare(score) {
    return function (a, b) {
      var value1 = a[score];
      var value2 = b[score];
      return value1 - value2;
    }
  }

  // fenlei() {
  //   let arr = [];
  //   let list = this.PZ;
  //   let listLength = list.length;
  //   let zhibiaoLength = list[0].length;
  //   for (let i = 0, j = 0, l = listLength; i < l; i++) {
  //     let sc = list[i];
  //     let cc = [];
  //     for (let i = 0, l = zhibiaoLength; i < l; i++) {
  //       let cc = [];
  //       cc.push(sc[i]);
  //     }
  //     console.log(cc);
  //   }

  // }
  fenlei() {
    let arr = [];
    let list = this.PZ;
    let listLength = list.length;
    for (let i = 0, l = listLength; i < l; i++) {
      arr.push(list[i][1]);
    }
    console.log(arr);
    return arr;
  }
}
