# 用nodejs搭建简易的HTTP服务器

## 目的

* 学习nodejs相关知识
* 测试一些需要连接服务器的功能，可以自定义服务器返回给客户端的数据格式，例如文本、图片、json文件、xml文件等。

## 下载nodejs

下载地址：https://nodejs.org/en/download/

目前nodejs最新版本是v6.10.0。例如Windows 64中使用的nodejs：https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi

## 启动Server

```language
$ node index.js
Server has started.
```

## 支持的URL

```language
http://localhost:8888
http://localhost:8888/get?type=text
http://localhost:8888/get?type=image
http://localhost:8888/get?type=bigimage
```
## 效果

可以参考：http://blog.csdn.net/u013553529/article/details/57646352

## 参考

Node入门：http://www.nodebeginner.org/index-zh-cn.html

