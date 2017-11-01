import {ProductDetailPage} from './../product-detail/product-detail';
import {RankDetailPage} from './../rank-detail/rank-detail';
import {RANKES} from './../../mock-data/rankList';
import {RankingPage} from './../ranking/ranking';
import {ShowProductService} from './../../service/showProduct.service';
import {AddedRankPage} from './../added-rank/added-rank';
import {SevenDayHotRankPage} from './../seven-day-hot-rank/seven-day-hot-rank';
import {ARTICLEES} from './../../mock-data/articleList';
import {ArticlePage} from './../article/article';
import {products} from './../../mock-data/productList';
import {Logo1, logo2, logo3} from './../../mock-data/logo';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {App, ViewController} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  logo1 = [];
  logo2 = [];
  logo3 = [];
  product = [];
  articles = [];
  rankList = [];
  setName : string = '';
  constructor(public viewCtrl : ViewController, public appCtrl : App, public navCtrl : NavController, public productService : ShowProductService) {
    this.logo1 = Logo1;
    this.logo2 = logo2;
    this.logo3 = logo3;
    this.rankList = RANKES;
    this.product = products.slice(0, 6);
    this.articles = ARTICLEES;
  }

  goToArticle(article) {
    this
      .navCtrl
      .push(ArticlePage, {article: article});
  }
  goToSevenHotRank() {
    this
      .navCtrl
      .push(SevenDayHotRankPage);
  }
  goToAddedRank() {
    this
      .navCtrl
      .push(AddedRankPage);
  }

  goToRankingPage(logo) {
    this.setName = logo.logoName;
    this
      .navCtrl
      .push(RankingPage, {'setName': this.setName});
  }

  goToRankDetailPage(list) {
    this
      .navCtrl
      .push(RankDetailPage, {list: list})
  }

  goToProductDetailPage(product) {
    this
      .navCtrl
      .push(ProductDetailPage, {product: product})
  };

  change() : any {
    this.product = this
      .productService
      .getProduct()
      .slice(0, 6);
    console.log(this.product);
  }

  set(logo) {
    this.setName = logo.logoName;
  }

  print(list) {
    console.log(list);
  }

}
