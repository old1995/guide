import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankDetailPage } from './rank-detail';

@NgModule({
  declarations: [
    RankDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RankDetailPage),
  ],
})
export class RankDetailPageModule {}
