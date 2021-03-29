// 引用自 https://codepen.io/beaucarnes/pen/QpaQRG?editors=0012
// https://www.youtube.com/watch?v=bK7I79hcm08
// 已經加上修改

function PriorityQueue() {
	let collection = [];


	this.printCollection = function () {
		(console.log(collection));
		return collection;
	};


	this.enqueue = function (element) {

		if (this.isEmpty()) {

			collection.push(element);

		} else {

			let added = false;

			// 需要追蹤目前Queue內的數量
			for (let i = 0; i < collection.length; i++) {
				if (element[1] < collection[i][1]) { //checking priorities
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element);
			}
		}
	};
	this.dequeue = function () {
		let value = collection.shift();
		return value[0];
	};
	this.front = function () {
		return collection[0];
	};
	this.size = function () {
		return collection.length;
	};
	this.isEmpty = function () {
		return (collection.length === 0);
	};
}

let pq = new PriorityQueue();
let currentCollection;

pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
console.log(pq.front());

pq.enqueue(['Ewa Mitulska-Wójcik', 1]);
pq.enqueue(['Briana Swift', 2]); // 會排在優先順序同樣為 2 的 Beau Carnes 後面
console.log(pq.front());

currentCollection = pq.printCollection();
console.log(currentCollection);

pq.dequeue();
console.log(pq.front());
pq.printCollection();
