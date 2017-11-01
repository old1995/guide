import { FEATURERANKLIST } from './../mock-data/featureRankList';
import { FeatureRank } from './../mock-data/featureRank';
import { Injectable } from '@angular/core';
@Injectable()

export class ShowFeatureRankService {
    // getFeatureRank() {     return FEATURERANKLIST; } #region 返回精选榜
    getFeatureRank(): Promise<FeatureRank[]> {
        return Promise.resolve(FEATURERANKLIST)
    }
    //#endregion
}