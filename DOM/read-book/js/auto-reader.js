;(function() {
  var wHeight = getViewportSize().height,
      sHeight = getScrollSize().height,
      playing = false,
      t = null;
  var AutoReader = function(opt) {
    this.playBtn = opt.playBtn;
    this.sTopBtn = opt.sTopBtn;
    var _self = this;
    addEvent(this.sTopBtn, 'click', function() {
      window.scrollTo(0, 0);
      clearInterval(t);
      playing = false;
      _self.playBtn.style.backgroundImage = 'url(img/play.png)';
    })
    
    addEvent(window, 'scroll', function() {
      _self.sTopBtnShow();
    })

    addEvent(this.playBtn, 'click', function() {
      _self.setAutoPlay.call(_self.playBtn);
    })
  }

  AutoReader.prototype = {
    sTopBtnShow: function() {
      var sTop = getScrollOffset().top,
          sTopBtn = this.sTopBtn;
      // 有滚动条就出现回到顶部图标
      sTopBtn.style.display = sTop ? 'block' : 'none';
    },
    setAutoPlay: function() {
      var sTop = getScrollOffset().top,
          _self = this;
      // 文档的高度 = 窗口的高度加滚动距离
      if (sHeight === wHeight + sTop) {
        return;
      }

      if (!playing) {
        t = setInterval(function() {
          let sTop = getScrollOffset().top;
          console.log(sHeight, wHeight, sTop)
          if (sHeight <= wHeight + sTop) {
            _self.style.backgroundImage = 'url(img/play.png)';
            playing = false;
            clearInterval(t);
            return;
          } else {
            window.scrollBy(0, 1);
            _self.style.backgroundImage = 'url(img/pause.png)';
          }
        },1)

        playing = true;
      } else {
        // 暂停
        clearInterval(t);
        _self.style.backgroundImage = 'url(img/play.png)';
        playing = false;
      }
    }
  }

  window.AutoReader = AutoReader;
})()