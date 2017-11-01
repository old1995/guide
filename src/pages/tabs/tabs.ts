import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from './../about/about';
import { ReadPage } from './../read/read';
import { CityPage } from './../city/city';
import { RankingPage } from './../ranking/ranking';
@Component({ templateUrl: 'tabs.html' })
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RankingPage;
  tab3Root = CityPage;
  tab4Root = ReadPage
  tab5Root = AboutPage;

  constructor() { }
}
