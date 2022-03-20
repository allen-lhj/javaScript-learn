
var sTopBtn = document.getElementsByClassName('s-top-btn')[0],
    header = document.getElementsByClassName('list-hd')[0];
addEvent(window, 'scroll', function() {
  var sTop = getScrollOffset().top;
  // 有滚动条就出现回到顶部图标
  sTop ? sTopBtn.style.display = 'block' 
       : sTopBtn.style.display = 'none' 
})

addEvent(sTopBtn, 'click', function() {
  window.scrollTo(0, 0);
})

addEvent(header, 'click', function() {
  window.scrollTo(0, 0);
})