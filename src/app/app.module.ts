import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { ChoosenPage } from './../pages/choosen/choosen';
import { ShowFeatureRankService } from './../service/showFeatureRank.service';
import { ShowProductService } from './../service/showProduct.service';
import { ShowHotRankPipe } from './../pipes/show-hot-rank/show-hot-rank';
import { AddedRankPage } from './../pages/added-rank/added-rank';
import { SevenDayHotRankPage } from './../pages/seven-day-hot-rank/seven-day-hot-rank';
import { ArticlePage } from './../pages/article/article';
import { RankDetailPage } from './../pages/rank-detail/rank-detail';
import { ReadPage } from './../pages/read/read';
import { RankingPage } from './../pages/ranking/ranking';
import { CityPage } from './../pages/city/city';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrderModule } from 'ngx-order-pipe';
import { ShowProductProvider } from '../providers/show-product/show-product';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CityPage,
    RankingPage,
    ReadPage,
    RankDetailPage,
    ArticlePage,
    SevenDayHotRankPage,
    AddedRankPage,
    ShowHotRankPipe,
    ChoosenPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule, OrderModule, IonicModule.forRoot(MyApp)//{tabsHideOnSubPages: 'true'}
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CityPage,
    RankingPage,
    ReadPage,
    RankDetailPage,
    ArticlePage,
    SevenDayHotRankPage,
    AddedRankPage,
    ChoosenPage,
    ProductDetailPage
  ],
  providers: [
    ShowFeatureRankService,
    ShowProductService,
    ShowHotRankPipe,
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ShowProductProvider
  ]
})
export class AppModule { }