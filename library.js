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
