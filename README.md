# galacean产物资源路径替换脚本

## 背景
使用galacean引擎构建的产物发布在cdn上时，在小程序运行时不能正确处理相对路径，需手动修改json配置文件中的相对路径为cdn资源绝对路径

## 使用方法
1. 将打包后的构建产物解压，取出`.json`文件，修改命名为`main.json`并放入`source`文件夹。
2. 运行脚本`node index.js`，输入资源发布的cdn域名，以`/`结尾。
3. 将`dist`目录下替换后的`.json`文件替换原项目中文件，发布至cdn。

## 相关链接
[galacean](https://github.com/galacean)  
[Galacean Effects 微信小程序 Demo](https://github.com/galacean/galacean-effects-miniprogram-demo/tree/main)