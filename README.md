## Vue-seed-spa Project

## 目录结构说明

<pre>
vue-seed-spa
│  .babelrc                  //babel配置
│  .eslintignore             //eslint忽略配置
│  .eslintrc.js              //eslint配置
│  .gitignore                //git忽略配置
│  index.html                //主页
│  package-lock.json         //package锁定文件
│  package.json              //package配置
│  pathmap.json              //webpack alias配置
│  README.md                 //readme
│  
├─build                      //构建配置目录
│      build.js
│      proxy.js
│      utils.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.dev.server.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│
├─config                    //构建全局配置目录
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│
└─src
    │  App.vue             //页面根组件
    │  index.js            //入口文件
    │  
    ├─api                  //api定义目录
    │      index.js
    │      user.js
    │
    ├─assets               //静态资源目录
    │  ├─fonts             //字体
    │  ├─images            //图片
    │  │      logo.png
    │  │      study.png
    │  │
    │  ├─js                //脚本
    │  │      common.js
    │  │
    │  └─styles            //样式
    ├─components           //组件目录
    │            
    │
    ├─config              //全局配置目录
    │  │  index.js        //项目整体配置文件
    │  │  
    │  └─interceptor      //拦截器配置
    │          axios.js   //请求拦截器配置
    │          router.js  //路由跳转拦截器
    │
    ├─plugins             //插件相关，数据请求等实例
    │      api.js
    │      axios.js
    │      eventbus.js
    │      index.js
    │
    ├─router              //路由配置
    │      index.js
    │      routers.js
    │
    ├─store               //vuex目录
    │  │  index.js
    │  │  
    │  └─modules
    │          app.js
    │
    └─utils               //工具类
    │      index.js
    │
    └─views             	//页面
 
</pre>

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```
