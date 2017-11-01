import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ViewChild } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  @ViewChild("header") header;
  article;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = navParams.data.article;
    console.log(this.article);
  }

  scrollEvent(e) {
    let opacity = (300 - e.scrollTop) / 300;//设置滚动距离300的时候导航栏消失
    this.header._elementRef.nativeElement.style.opacity = opacity;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
