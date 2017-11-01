import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ChoosenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-choosen', templateUrl: 'choosen.html'})
export class ChoosenPage {

  list;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.list = navParams.data.list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosenPage');
  }

}
