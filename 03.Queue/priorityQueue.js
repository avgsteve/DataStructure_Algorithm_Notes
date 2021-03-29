// 引用自 https://codepen.io/beaucarnes/pen/QpaQRG?editors=0012
// https://www.youtube.com/watch?v=bK7I79hcm08
// 已經加上一些修改，比較好懂

function PriorityQueue() {
	let collection = [];

	this.printCollection = function () {
		(console.log(collection));
		return collection;
	};

	// 另外加上的getter
	Object.defineProperty(this, 'size', {
		get() {
			return collection.length;
		},
		// set(value) {
		// }
	});

	this.enqueue = function (newItem) {

		if (this.isEmpty()) {
			collection.push(newItem);
		} else {
		
			let itemHasPriority = false;
			
			// 開始與每個元素比較優先權
			for (let i = 0; i < collection.length; i++) {
				if (newItem[1] < collection[i][1]) {
					// checking priorities  (index 1) of every item in current collection
					// smaller number means higher priority
					collection.splice(i, 0, newItem);
					itemHasPriority = true;
					break;
				}
			}

			if (!itemHasPriority) {
				collection.push(newItem);
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

	// this.size = function () {
	// 	return collection.length;
	// };
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
console.log(pq.size);

currentCollection = pq.printCollection();
console.log(currentCollection);

pq.dequeue();
console.log(pq.front());
pq.printCollection();
