import { products } from './../mock-data/productList';
import { Injectable } from '@angular/core';
@Injectable()
export class ShowProductService {
    //#region getProduct
    getProduct() {
        let arr = products;
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }
    //#endregion
}