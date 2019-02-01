/**
 * @format
 * @description 创建dom元素
 * @param config 添加对象及内部元素
 * @param refs
 */

function createDOM(config, refs) {
  if (!config) return null;
  var dom, childElement;
  if (config.tag) {
    dom = document.createElement(config.tag);
    for (var prop in config) {
      if (config.hasOwnProperty(prop)) {
        if (prop === 'content' || prop === 'tag') continue;
        if (prop === 'key' && refs) {
          var key = config[prop];
          if (key) {
            refs[key] = dom;
          }
        }
        dom[prop] = config[prop];
      }
    }
    var content = config.content;
    if (content instanceof Array) {
      for (var i = 0, j = content.length; i < j; i++) {
        var child = content[i];
        childElement = createDOM(child, refs);
        dom.appendChild(childElement);
      }
    } else if (typeof content === 'string') {
      childElement = document.createTextNode(content);
      dom.appendChild(childElement);
    }
  }
  return dom;
}

export default createDOM;
