// var thumbItem = document.getElementsByClassName('thumb-item'),
//     sliderItem = document.getElementsByClassName('slider-item');

// for(var i = 0; i < thumbItem.length; i++) {
//   (function(k) {
//     thumbItem[k].onclick = function() {
//       for(var j = 0; j < thumbItem.length; j++) {
//         thumbItem[j].className = 'thumb-item';
//         sliderItem[j].className = 'slider-item';
//       }
//       this.className += ' cur'
//       sliderItem[k].className += ' active'
//     }
//   })(i)
// }
;(function() {
  var Slider = function(opt) {
    this.sliderItem = document.getElementsByClassName(opt.sliderItem);
    this.thumbItem = document.getElementsByClassName(opt.thumbItem);
    this.bindClick()
  }
  Slider.prototype = {
    bindClick: function() {
      var slider = this.sliderItem;
      var thumbs = this.thumbItem;
      for(let i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function() {
          for(let j = 0; j < thumbs.length; j++) {
            thumbs[j].className = 'thumb-item';
            slider[j].className = 'slider-item';
          }
          slider[i].className += ' active'
          this.className += ' cur';
        }
      }
    }
  }
  window.Slider = Slider;
})();