import { Article } from './article';

export const ARTICLEES: Article[] = [
    {
        id: 1,
        title: "第一篇文章",
        subTitle: "文章的描述",
        // pushtime: 2012 / 12 / 12,
        author: "张三",
        articleImgSrc: 'assets/img/zgr.gif',
        time: "2017/07/20",
        body: [
            {
                productId: 1,
                productName: "洁面乳1",
                price: 180,
                desc: 'This is descriptionThis is descriptionThis is descriptionThis is descriptionThis is descriptionThis is descriptionThis is descriptionThis is descriptionThis is description',
                img: 'assets/img/p3.jpg'
            }, {
                productId: 2,
                productName: "洁面乳2",
                price: 220,
                desc: 'This is description',
                img: 'assets/img/p3.jpg'
            }, {
                productId: 3,
                productName: "洁面乳3",
                price: 222,
                desc: 'This is description',
                img: 'assets/img/p3.jpg'
            }, {
                productId: 4,
                productName: "洁面乳4",
                price: 180,
                desc: 'This is description',
                img: 'assets/img/p3.jpg'
            }
        ]
    }, {
        id: 2,
        title: "第二篇文章",
        author: "张三",
        subTitle: "文章的描述",
        articleImgSrc: 'assets/img/zgr.gif',
        time: "2017/07/20",
        body: [
            {
                productId: 5,
                productName: "洁面乳5",
                price: 188,
                desc: 'This is description',
                img: 'assets/img/p4.jpg'
            }, {
                productId: 6,
                productName: "洁面乳6",
                price: 21,
                desc: 'This is description',
                img: 'assets/img/p4.jpg'
            }, {
                productId: 7,
                productName: "洁面乳3",
                price: 23,
                desc: 'This is description',
                img: 'assets/img/p3.jpg'
            }, {
                productId: 8,
                price: 220,
                productName: "洁面乳4",
                desc: 'This is description',
                img: 'assets/img/p3.jpg'
            }
        ]
    }
]