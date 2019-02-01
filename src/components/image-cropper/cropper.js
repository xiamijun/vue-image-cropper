/**
 * @format
 */
import createDOM from '@/utils/createDOM.js';
import Resizer from '@/utils/resize.js';

//预加载元素
let preLoadElement;

//ie浏览器版本
let ieVersion = Number(document.documentMode);

/**
 * @description 获取图片大小
 * @param {*} src 图片路径
 * @param {*} callback 回调函数
 */
function getImageSize(src, callback) {
  if (ieVersion < 10) {
    if (!preLoadElement) {
      preLoadElement = document.createElement('div');
      preLoadElement.style.position = 'absolute';
      preLoadElement.style.width = '1px';
      preLoadElement.style.height = '1px';
      preLoadElement.style.left = '-9999px';
      preLoadElement.style.top = '-9999px';
      //filter 用于定于元素(通常是 <img>)的可视效果。
      preLoadElement.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)';
      document.body.insertBefore(preLoadElement, document.body.firstChild);
    }

    preLoadElement.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;

    let size = {
      width: preLoadElement.offsetWidth,
      height: preLoadElement.offsetHeight
    };

    if (typeof callback === 'function') {
      callback(size);
    }
  } else {
    let image = new Image();
    image.onload = function() {
      let size = {
        width: image.width,
        height: image.height
      };
      if (typeof callback === 'function') {
        callback(size);
      }
    };
    image.src = src;
  }
}

/**
 * @description 创建对象
 * @param {*} options 配置选项
 */
function Cropper(options) {
  //实例化对象
  let cropper = this;
  if (!(this instanceof Cropper)) {
    cropper = new Cropper();
  }

  //对象属性拷贝
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) cropper[prop] = options[prop];
  }

  if (cropper.element) {
    cropper.render(cropper.element);
  }

  //默认宽高比为1
  if (!cropper.aspectRatio) {
    cropper.aspectRatio = 1;
  }

  return cropper;
}

/**
 * @description 设置拖拽框大小及位置
 */
Cropper.prototype.resetResizer = function() {
  //拖拽框
  let resizer = this.resizer;
  //外部框框
  let cropperRect = this.cropperRect;
  //宽高比
  let aspectRatio = this.aspectRatio;
  //宽高像素比不为数字时给一个默认值
  if (typeof aspectRatio !== 'number') {
    aspectRatio = 1;
  }

  //设定宽高,参数无效时默认值为图片的一半,超出图片区域时默认为图片的宽度
  let width;
  if (this.width > 0 && typeof this.width == 'number') {
    width = this.width > cropperRect.width ? cropperRect.width : this.width;
  } else {
    width = cropperRect.width / 2;
  }
  let height;
  if (this.height > 0 && typeof this.height == 'number') {
    height = this.height > cropperRect.height ? cropperRect.height : this.height;
  } else {
    height = width / aspectRatio;
  }

  //设置拖拽框的大小
  let resizerDom = resizer.dom;
  resizerDom.style.width = width + 'px';
  resizerDom.style.height = height + 'px';

  //如果配置了拖拽框的位置就按配置的来否则就居中
  //x
  if (this.x > 0 && typeof this.x == 'number') {
    //如果x设置超出了图片的区域则放置在图片边上
    if (this.x > cropperRect.width - width) {
      resizerDom.style.left = cropperRect.width - width + 'px';
    } else {
      resizerDom.style.left = this.x + 'px';
    }
  } else if (cropperRect) {
    resizerDom.style.left = (cropperRect.width - width) / 2 + 'px';
  } else {
    resizerDom.style.left = '';
  }

  //y
  if (this.y > 0 && typeof this.y == 'number') {
    //如果y设置超出了图片的区域则放置在图片底部
    if (this.y > cropperRect.height - height) {
      resizerDom.style.top = cropperRect.height - height + 'px';
    } else {
      resizerDom.style.top = this.y + 'px';
    }
  } else if (cropperRect) {
    resizerDom.style.top = (cropperRect.height - height) / 2 + 'px';
  } else {
    resizerDom.style.top = '';
  }

  resizer.doOnStateChange();
  resizer.doOnDragEnd();
};

//设置父级元素的图片源
Cropper.prototype.setImage = function(src) {
  let element = this.element;
  let sourceImage = element.querySelector('img');
  let resizeImage = this.refs.image;

  let self = this;

  //图片为空时
  if (src === undefined || src === null) {
    resizeImage.src = sourceImage.src = '';
    resizeImage.style.width = resizeImage.style.height = resizeImage.style.left = resizeImage.style.top = '';
    sourceImage.style.width = sourceImage.style.height = sourceImage.style.left = sourceImage.style.top = '';

    //更新预览视图
    self.updatePreview('');

    self.dom.style.display = 'none';
    self.resetResizer();

    self.dom.style.left = self.dom.style.top = '';
    self.dom.style.width = element.offsetWidth + 'px';
    self.dom.style.height = element.offsetHeight + 'px';

    self.croppedRect = {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };

    self.onCroppedRectChange && self.onCroppedRectChange(self.croppedRect);

    return;
  }

  //获取图片大小后渲染预览图
  getImageSize(src, function(size) {
    if (ieVersion < 10) {
      //ie9以下使用css渲染本地图片方式
      resizeImage.src = sourceImage.src = '';
      resizeImage.style.filter = sourceImage.style.filter =
        'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
      sourceImage.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
      resizeImage.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
    } else {
      //其他浏览器直接复制src
      resizeImage.src = sourceImage.src = src;
    }

    self.imageSize = size;

    let elementWidth = element.offsetWidth;
    let elementHeight = element.offsetHeight;

    let dom = self.dom;

    let cropperRect = {};
    //图片大小等比缩放到父级容器的宽度之内
    if (size.width / size.height > elementWidth / elementHeight) {
      cropperRect.width = elementWidth;
      cropperRect.height = (elementWidth * size.height) / size.width;
      cropperRect.top = (elementHeight - cropperRect.height) / 2;
      cropperRect.left = 0;
    } else {
      cropperRect.height = elementHeight;
      cropperRect.width = (elementHeight * size.width) / size.height;
      cropperRect.top = 0;
      cropperRect.left = (elementWidth - cropperRect.width) / 2;
    }

    self.cropperRect = cropperRect;

    for (let style in cropperRect) {
      if (cropperRect.hasOwnProperty(style)) {
        dom.style[style] = sourceImage.style[style] = resizeImage.style[style] = cropperRect[style] + 'px';
      }
    }

    self.dom.style.display = '';
    self.resetResizer();
    self.updatePreview(src);
  });
};

//添加预览对象
Cropper.prototype.addPreview = function(preview) {
  let previews = this.previews;
  if (!previews) {
    previews = this.previews = [];
  }
  previews.push(preview);
};

//渲染
Cropper.prototype.render = function(container) {
  let resizer = new Resizer({
    aspectRatio: this.aspectRatio
  });
  let refs = {};
  //创建遮罩层
  let dom = createDOM(
    {
      tag: 'div',
      className: 'cropper',
      content: [
        {
          tag: 'div',
          className: 'mask'
        }
      ]
    },
    refs
  );

  let resizerDom = resizer.render(dom);

  // 创建图片区域
  let img = createDOM(
    {
      tag: 'div',
      className: 'wrapper',
      content: [
        {
          tag: 'img',
          key: 'image',
          src: ''
        }
      ]
    },
    refs
  );

  let self = this;
  self.refs = refs;
  //拖拽时更新预览图片
  resizer.doOnStateChange = function() {
    let left = parseInt(resizerDom.style.left, 10) || 0;
    let top = parseInt(resizerDom.style.top, 10) || 0;

    let image = refs.image;

    image.style.left = -left + 'px';
    image.style.top = -top + 'px';

    self.updatePreview();
  };

  resizer.doOnDragEnd = function() {
    let left = parseInt(resizerDom.style.left, 10) || 0;
    let top = parseInt(resizerDom.style.top, 10) || 0;
    let resizerWidth = resizerDom.offsetWidth;
    let resizerHeight = resizerDom.offsetHeight;

    let imageSize = self.imageSize;
    let cropperRect = self.cropperRect;
    //预览部分进行等比缩放
    if (cropperRect) {
      let scale = cropperRect.width / imageSize.width;

      self.croppedRect = {
        width: Math.floor(resizerWidth / scale),
        height: Math.floor(resizerHeight / scale),
        left: Math.floor(left / scale),
        top: Math.floor(top / scale)
      };

      self.onCroppedRectChange && self.onCroppedRectChange(self.croppedRect);
    }
  };
  self.resizer = resizer;
  self.dom = dom;

  resizerDom.insertBefore(img, resizerDom.firstChild);

  container.appendChild(dom);

  self.dom.style.display = 'none';
};

//更新预览图片
Cropper.prototype.updatePreview = function(src) {
  let imageSize = this.imageSize;
  let cropperRect = this.cropperRect;
  if (!imageSize || !cropperRect) return;

  let previews = this.previews || [];

  let resizerDom = this.resizer.dom;
  let resizerLeft = parseInt(resizerDom.style.left, 10) || 0;
  let resizerTop = parseInt(resizerDom.style.top, 10) || 0;

  let resizerWidth = resizerDom.offsetWidth;
  let resizerHeight = resizerDom.offsetHeight;

  for (let i = 0, j = previews.length; i < j; i++) {
    let previewElement = previews[i];
    let previewImage = previewElement.querySelector('img');
    let previewWrapper = previewElement.querySelector('div');

    if (!previewImage) continue;

    if (src === '') {
      previewImage.style.width = previewImage.style.height = previewImage.style.left = previewImage.style.top = '';
      previewImage.src = '';
    } else {
      if (ieVersion < 10) {
        if (src) {
          previewImage.src = '';
          previewImage.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
          previewImage.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
          previewImage.style.width = cropperRect.width + 'px';
          previewImage.style.height = cropperRect.height + 'px';
        }
      } else if (src) {
        previewImage.src = src;
      }

      let elementWidth = previewElement.offsetWidth;
      let elementHeight = previewElement.offsetHeight;

      let scale = elementWidth / resizerWidth;

      if (previewWrapper) {
        let elementRatio = elementWidth / elementHeight;
        let resizerRatio = resizerWidth / resizerHeight;

        if (elementRatio < resizerRatio) {
          previewWrapper.style.width = elementWidth + 'px';
          previewWrapper.style.height = (resizerHeight * elementWidth) / resizerWidth + 'px';
          previewWrapper.style.top = (elementHeight - previewWrapper.clientHeight) / 2 + 'px';
          previewWrapper.style.left = '';
        } else {
          let visibleWidth = (resizerWidth * elementHeight) / resizerHeight;
          scale = visibleWidth / resizerWidth;
          previewWrapper.style.height = elementHeight + 'px';
          previewWrapper.style.width = visibleWidth + 'px';
          previewWrapper.style.left = (elementWidth - previewWrapper.clientWidth) / 2 + 'px';
          previewWrapper.style.top = '';
        }
      }

      previewImage.style.width = scale * cropperRect.width + 'px';
      previewImage.style.height = scale * cropperRect.height + 'px';
      previewImage.style.left = -resizerLeft * scale + 'px';
      previewImage.style.top = -resizerTop * scale + 'px';
    }
  }
};

export default Cropper;
