/**
 * @format
 */

'use strict';
import createDOM from './createDOM';

//是否正在拖拽
let isDragging = false;

//判断是否为ie8
let isIE8 = Number(document.documentMode) < 9;

//定义移动方向
let configDirection = {
  n: {
    top: true,
    height: -1
  }, //上
  w: {
    left: true,
    width: -1
  }, //左
  e: {
    width: 1
  }, //右
  s: {
    height: 1
  }, //下
  nw: {
    left: true,
    top: true,
    width: -1,
    height: -1
  }, //左下
  ne: {
    top: true,
    width: 1,
    height: -1
  }, //
  sw: {
    left: true,
    width: -1,
    height: 1
  },
  se: {
    width: 1,
    height: 1
  }
};

/**
 * @description 为元素绑定on事件
 * @param element 指定元素
 * @param event 事件名称（mouseon...）
 * @param fn 绑定事件
 */
function bindEvent(element, event, fn) {
  //attachEvent为ie特有
  if (element.attachEvent) {
    element.attachEvent('on' + event, fn);
  } else {
    element.addEventListener(event, fn, false);
  }
}

/**
 * @description 为元素解除绑定on事件
 * @param element 指定元素
 * @param event 事件名称（mouseon...）
 * @param fn 绑定事件
 */
function unbindEvent(element, event, fn) {
  //attachEvent为ie特有
  if (element.detachEvent) {
    element.detachEvent('on' + event, fn);
  } else {
    element.removeEventListener(event, fn);
  }
}

/**
 * @description 校正ie8浏览器钟x.y位置
 * @param event 事件对象
 */
function adjustEvent(event) {
  let scrollTop = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0);
  let scrollLeft = Math.max(window.scrollX || 0, document.documentElement.scrollLeft || 0);

  event.target = event.srcElement;
  event.pageX = scrollLeft + event.clientX;
  event.pageY = scrollTop + event.clientY;
}

/**
 * @description 拖拽事件
 * @param {} element  元素
 * @param {*} options 元素属性
 */
function draggable(element, options) {
  let moveFn = event => {
    if (isIE8) {
      adjustEvent(event);
    }
    if (options.drag) {
      options.drag(event);
    }
  };
  let upFn = event => {
    if (isIE8) {
      adjustEvent(event);
    }
    unbindEvent(document, 'mousemove', moveFn);
    unbindEvent(document, 'mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  bindEvent(element, 'mousedown', function(event) {
    if (isIE8) {
      adjustEvent(event);
    }
    if (isDragging) return;
    document.onselectstart = function() {
      return false;
    };
    document.ondragstart = function() {
      return false;
    };

    bindEvent(document, 'mousemove', moveFn);
    bindEvent(document, 'mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
}

/**
 * @description 获取元素相对父元素的位置
 * @param {dom} element 元素对象
 */
function getPosition(element) {
  let selfRect = element.getBoundingClientRect();
  let parentRect = element.offsetParent.getBoundingClientRect();

  return {
    left: selfRect.left - parentRect.left,
    top: selfRect.top - parentRect.top
  };
}

/**
 * @description 重新设置框框大小
 * @param {*} options
 */
function Resizer(options) {
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) this[prop] = options[prop];
  }
}

Resizer.prototype.doOnStateChange = function() {};

Resizer.prototype.makeDraggable = function(dom) {
  let self = this;
  let dragState = {};
  let containment;

  draggable(dom, {
    start: function(event) {
      let parentNode = dom.parentNode;
      containment = {
        left: 0,
        top: 0,
        width: parentNode.clientWidth,
        height: parentNode.clientHeight,
        right: parentNode.clientWidth,
        bottom: parentNode.clientHeight
      };

      dragState.startLeft = event.clientX;
      dragState.startTop = event.clientY;

      let position = getPosition(dom);

      dragState.resizerStartLeft = position.left;
      dragState.resizerStartTop = position.top;
      dragState.resizerStartWidth = dom.offsetWidth;
      dragState.resizerStartHeight = dom.offsetHeight;
    },
    drag: function(event) {
      let offsetLeft = event.clientX - dragState.startLeft;
      let offsetTop = event.clientY - dragState.startTop;

      let left = dragState.resizerStartLeft + offsetLeft;
      let top = dragState.resizerStartTop + offsetTop;

      if (left < containment.left) {
        left = containment.left;
      }

      if (top < containment.top) {
        top = containment.top;
      }

      if (left + dragState.resizerStartWidth > containment.right) {
        left = containment.right - dragState.resizerStartWidth;
      }

      if (top + dragState.resizerStartHeight > containment.bottom) {
        top = containment.bottom - dragState.resizerStartHeight;
      }

      dom.style.left = left + 'px';
      dom.style.top = top + 'px';

      self.doOnStateChange();
    },
    end: function() {
      dragState = {};
      if (self.doOnDragEnd) {
        self.doOnDragEnd();
      }
    }
  });
};

Resizer.prototype.bindResizeEvent = function(dom) {
  let self = this;
  let resizeState = {};
  let aspectRatio = self.aspectRatio;

  if (typeof aspectRatio !== 'number') {
    aspectRatio = undefined;
  }

  let makeResizable = function(bar) {
    let type = bar.className.split(' ')[0];
    let transformMap = configDirection[type.substr(4)];

    let containment;

    draggable(bar, {
      start: function(event) {
        let parentNode = dom.parentNode;
        containment = {
          left: 0,
          top: 0,
          width: parentNode.clientWidth,
          height: parentNode.clientHeight,
          right: parentNode.clientWidth,
          bottom: parentNode.clientHeight
        };

        resizeState.startWidth = dom.clientWidth;
        resizeState.startHeight = dom.clientHeight;
        resizeState.startLeft = event.clientX;
        resizeState.startTop = event.clientY;

        let position = getPosition(dom);
        resizeState.resizerStartLeft = position.left;
        resizeState.resizerStartTop = position.top;
      },
      drag: function(event) {
        let widthRatio = transformMap.width;
        let heightRatio = transformMap.height;

        let offsetLeft = event.clientX - resizeState.startLeft;
        let offsetTop = event.clientY - resizeState.startTop;

        let width,
          height,
          minWidth = 50,
          maxWidth = 10000,
          minHeight = 50,
          maxHeight = 10000;

        if (widthRatio !== undefined) {
          width = resizeState.startWidth + widthRatio * offsetLeft;
          if (width < minWidth) {
            width = minWidth;
          }

          if (maxWidth && width > maxWidth) {
            width = maxWidth;
          }
        }

        if (heightRatio !== undefined) {
          height = resizeState.startHeight + heightRatio * offsetTop;
          if (height < minHeight) {
            height = minHeight;
          }

          if (maxHeight && height > maxHeight) {
            height = maxHeight;
          }
        }

        if (aspectRatio !== undefined) {
          if (type === 'ord-n' || type === 'ord-s') {
            width = height * aspectRatio;
          } else if (type === 'ord-w' || type === 'ord-e') {
            height = width / aspectRatio;
          } else {
            if (width / height < aspectRatio) {
              height = width / aspectRatio;
            } else {
              width = height * aspectRatio;
            }
          }
        }

        let position = {
          left: resizeState.resizerStartLeft,
          top: resizeState.resizerStartTop
        };

        if (transformMap.left !== undefined) {
          position.left = resizeState.resizerStartLeft + (width - resizeState.startWidth) * widthRatio;
        }

        if (transformMap.top !== undefined) {
          position.top = resizeState.resizerStartTop + (height - resizeState.startHeight) * heightRatio;
        }

        //=== containment start

        if (width + position.left > containment.right) {
          width = containment.right - position.left;
        }

        if (position.left < containment.left) {
          width -= containment.left - position.left;
          position.left = containment.left;
        }

        if (height + position.top > containment.bottom) {
          height = containment.bottom - position.top;
        }

        if (position.top < containment.top) {
          height -= containment.top - position.top;
          position.top = containment.top;
        }

        //=== containment end

        if (aspectRatio !== undefined) {
          if (width / height < aspectRatio) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        }

        if (transformMap.left !== undefined) {
          position.left = resizeState.resizerStartLeft + (width - resizeState.startWidth) * widthRatio;
        }

        if (transformMap.top !== undefined) {
          position.top = resizeState.resizerStartTop + (height - resizeState.startHeight) * heightRatio;
        }

        dom.style.width = width + 'px';
        dom.style.height = height + 'px';

        if (position.left !== undefined) {
          dom.style.left = position.left + 'px';
        }

        if (position.top !== undefined) {
          dom.style.top = position.top + 'px';
        }

        self.doOnStateChange();
      },
      end: function() {
        if (self.doOnDragEnd) {
          self.doOnDragEnd();
        }
      }
    });
  };

  let bars = dom.querySelectorAll('.resize-bar');
  let handles = dom.querySelectorAll('.resize-handle');

  let i, j;

  for (i = 0, j = bars.length; i < j; i++) {
    makeResizable(bars[i]);
  }

  for (i = 0, j = handles.length; i < j; i++) {
    makeResizable(handles[i]);
  }
};

Resizer.prototype.render = function(container) {
  let self = this;

  let dom = createDOM({
    tag: 'div',
    className: 'resizer',
    content: [
      {
        tag: 'div',
        className: 'ord-n resize-bar'
      },
      {
        tag: 'div',
        className: 'ord-s resize-bar'
      },
      {
        tag: 'div',
        className: 'ord-w resize-bar'
      },
      {
        tag: 'div',
        className: 'ord-e resize-bar'
      },
      {
        tag: 'div',
        className: 'ord-nw resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-n resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-ne resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-w resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-e resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-sw resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-s resize-handle'
      },
      {
        tag: 'div',
        className: 'ord-se resize-handle'
      }
    ]
  });

  self.dom = dom;

  self.bindResizeEvent(dom);
  self.makeDraggable(dom);

  if (container) {
    container.appendChild(dom);
  }

  return dom;
};

export default Resizer;
