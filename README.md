# vue3-template
vue3-template是vue3的项目模板，使用了vue3、vite2、element-plus开发。目标是做一个开箱即用的前、中、后台前端方案。

## 特性
- 使用vue3+vite2开发
- 内置Mock数据方案(vite-plugin-mock)
- 动态路由
- 布局切换(master)
- 简易中、后台方案(admin)
- 简易前台方案(portal)

## TODO
+ [X] 中、后台方案
+ [X] 前台方案
+ [X] Mock
+ [X] 动态路由
+ [X] 布局切换

## 分支说明
- master: 可以对页面整体的布局进行切换, 并且相较于admin、portal分支会多出组件和demo, 布局类型为其他分支的集合。
- admin: 左侧导航栏
- portal: 顶部导航栏

## Build Setup
node version: >=12.0.0

vite version: >=2.0.0

* Installation dependencies
```
yarn install
```

* run
```
yarn install
```

* build
```
yarn build
```

* preview
```
yarn serve
```

## mock
项目已使用vite-plugin-mock方案，当请求的baseURL为 '/dev-api'或'/prod-api'时会代理到mock服务。  
如果想调用真实接口，可修改.env.development和.env.production中的VITE_APP_BASE_API。

## 动态路由
详见：目录/mock/system->getModules接口。