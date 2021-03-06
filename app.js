/// <reference path="./ractive.d.ts"/>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
    });
}
class Item {
    constructor(candy, stardust) {
        this.candy = candy;
        this.stardust = stardust;
    }
}
var stardusts = [
    new Item(1, 200), new Item(1, 400), new Item(1, 600), new Item(1, 800), new Item(1, 1000),
    new Item(2, 1300), new Item(2, 1600), new Item(2, 1900), new Item(2, 2200), new Item(2, 2500),
    new Item(3, 3000), new Item(3, 3500),
    new Item(4, 4000), new Item(4, 4500), new Item(4, 5000),
    new Item(6, 6000),
    new Item(8, 7000),
    new Item(10, 8000),
    new Item(12, 9000),
    new Item(15, 10000),
    new Item(99, 20000),
];
var r = new Ractive({
    el: '#container',
    template: '#template',
    data: {
        stardusts: stardusts,
        calcStardust: (from, to) => {
            let stardust = 0;
            for (let i = from; i < to; i++) {
                if (stardusts[i].stardust == 10000) {
                    stardust += stardusts[i].stardust * 2;
                }
                else {
                    stardust += stardusts[i].stardust * 4;
                }
            }
            return stardust;
        },
        calcCandy: (from, to) => {
            let candy = 0;
            for (let i = from; i < to; i++) {
                if (stardusts[i].stardust == 10000) {
                    candy += stardusts[i].candy * 2;
                }
                else {
                    candy += stardusts[i].candy * 4;
                }
            }
            return candy;
        },
    },
});
