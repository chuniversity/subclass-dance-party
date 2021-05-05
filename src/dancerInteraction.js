var lineupDancers = function (dancerList) {
  var dancerSpacing = dancerList.length / 800;
  dancerList.forEach((dancer, index) => {
    dancer.css({
      'top': '400px',
      'left': dancerSpacing * index + 'px'
    });
  });
};