// Subclassing.

function User(name) {
	this.name = name;
	this.score = 0;
}

User.prototype.increaseScore = function () {
	this.score += 1;
};

function PaidUser(name) {
	User.call(this, name);
	this.credits = 25;
	this.reputation = 0;
}

PaidUser.prototype = Object.create(User.prototype);
PaidUser.prototype.increaseCredits = function (num) {
	this.credits += num;
};

const paidUser1 = new PaidUser('Ram');
console.dir(paidUser1);
console.dir(User);
