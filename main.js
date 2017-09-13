//Loops Lab 2
// #1
for (i = 50; i > 19; i --) {
	if (i % 3 === 0) {
		console.log(i);
	}
};

// #2
for (i = 0; i > 0; i++) {
	console.log(i);
};

// #3
const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
for (i = 0; i < classmates.length; i+=2) {
	console.log(classmates[i]); 
};

// #4
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const gFree = [];

for (let prop in menu) {	
		if (menu[prop].glutenFree === true) {
			gFree.push(menu[prop]);
		}
};
gFree;

// #5 STILL WORKING ON THIS 
const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
const goatStatus = [];

for (let prop in league) {
	if (league[prop].name === "NFL" || league[prop].name === "NBA") {
		for (let prop in league) {
			if(league[prop].goat === true) {
				goatStatus.push(league[prop]);
			}
		}
	}
};


