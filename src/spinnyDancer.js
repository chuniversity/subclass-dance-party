var makeSpinnyDancer = function (top, left, timeBetweenSteps) {
  timeBetweenSteps = 100;
  //this = Object.create(makeSpinnyDanvcermakeSpinnyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  //return this;
};

//Bring in all methods from makeDancer to makeSpinnyDancer
makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
//Reassign prototype constructor from makeDancer to makeSpinnyDancer
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.oldStep = makeSpinnyDancer.prototype.step;

makeSpinnyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var styling = {
    'border-color': 'rgb(' + Math.floor(Math.random() * 256) + ',' +
      Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')',
    'border-radius': 0,
    'transform': 'rotate(' + Math.random() * 360 + 'deg)'
  }
  this.$node.css(styling);
};