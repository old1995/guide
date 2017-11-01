import { NgModule } from '@angular/core';
import { FlyingHeroPipe } from './flying-hero/flying-hero';
import { ShowHotRankPipe } from './show-hot-rank/show-hot-rank';
@NgModule({
	declarations: [FlyingHeroPipe,
    ShowHotRankPipe],
	imports: [],
	exports: [FlyingHeroPipe,
    ShowHotRankPipe]
})
export class PipesModule {}
