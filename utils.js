function addEvent(el, type, fn) {
  if (el.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + type, function() {
      hande.call(el)
    }) 
  } else {
    el['on' + type] = fn;
  }
}

// 返回文档在垂直方向已滚动的像素值
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}
// 浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度。
function getViewportSize() {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    } else {
      return {
        width: document.documentElement.clientWidth,
        hegiht: document.documentElement.clientHeight
      }
    }
  }
}
// 窗口高度
function getScrollSize() {
	if (document.body.scrollWidth) {
  	return {
    	width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  } else {
  	return {
    	width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}