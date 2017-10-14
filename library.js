class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut = true){
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let lengthofArray = this.ratings.length;

    let result = ratingSum / lengthOfArray;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages, ratings, isCheckedOut) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this._pages = pages;

  }

    get author() {
    return this._author;
  };

  get pages() {
    return this._pages;
  };

  getAverageRating(){
    let total = 0;
    this._ratings.forEach(function(rating){
      let total = total + rating;
    })
    let result = total / this._ratings.length;
  };

 toggleCheckOutStatus() {
    this._isCheckedOut= !this._isCheckedOut;
  }

  addRating(){

  };
}

class Movie extends Media{
  constructor(director, title, runTime, isCheckedOut, ratings){
    super(title);
    this._director = director;
    this._runTime = runTime;
    super(isCheckedOut);
    super(ratings);
  }

  get director() {
    return this._director
  }

  get runTime() {
    return this._runTime
  }

   getAverageRating(){

  };

 toggleCheckOutStatus() {
    this._isCheckedOut= !this._isCheckedOut;
  }

  addRating(){

  };
}

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything);
