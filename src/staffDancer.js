var makeStaffDancer = function (top, left, staffDancerName) {
  //this = Object.create(MakeBlinkyDancer.prototype);
  makeDancer.call(this, top, left, 0);
  var $staffImg = $('<img src=\'lib/' + staffDancerName + '.png\'>');
  this.$node.append($staffImg);
  this.$node.css({
    'border-radius': 0,
    'border-width': 0
  })
  //return this;
};

//Bring in all methods from makeDancer to MakeBlinkyDancer
makeStaffDancer.prototype = Object.create(makeDancer.prototype);
//Reassign prototype constructor from makeDancer to MakeBlinkyDancer
makeStaffDancer.prototype.constructor = makeStaffDancer;

// makeStaffDancer.prototype.oldStep = makeStaffDancer.prototype.step;


// makeStaffDancer.prototype.step = function () {
//   // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.step.call(this)
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };
