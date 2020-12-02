# 2020-12-1
### 更新至webpack5.0以上热更新失效问题（在config上增加target：‘web’即可）

# 2020-11-6
### 简单完善swiper

# 2020-10-22
### 根据mask组件衍生出差不多的drawer组件

# 2020-10-20
### 完善anima组件，增加初始图片数字
### 补充Video组件说明

# 2020-10-17
### 优化anima组件增加fps(默认25)

# 2020-10-15
### 升级到webpack5.1（其他基本都可以复用没有什么改动）

# 2020-10-13
### 优化anima组件
### 从简单的img切换转换为性能更优的canvas
### 目前也有简单的例子

# 2020-10-12
### 新增anima组件
### 该组件简单封装播放图片动画的方法

# 2020-9-17
### 把之前写的简易swiper组件移了过来

# 2020-9-8
### 前几天研究了一下mobx
### 发现使用react-hook的最佳方案是使用useContext
### 那我还不如不用mobx直接用mobx官网上的例子完善一下useContext的使用就好了，做到类似与store的效果
### 少了mobx注入和调用，更加方便

# 2020-9-1
### 增加组件img和svga的例子
### 完善了svga组件
### 重新配置webpack为svga的打包方式

# 2020-8-6
### 新增简易组件msg

# 2020-7-21
### 删除多余代码
### useRenderTime函数的问题解决
### webpack-merge升至5.0导入方式修改

# 2020-7-15
### 重新增加dll

# 2020-6-2
### 移动端1px边框放大的问题
### 图片小bug

# 2020-5-29
### img组件面对绝对定位有问题，新增参数position

# 2020-5-28
### img组件代码不规范，导致低端机兼容性问题
### js压缩代码导致低端机兼容性问题

## 2020-5-27
### 组件优化，mask组件单个children不显示问题
### useCommon

## 2020-5-20
### 规范化与结构化（新增useCommon）

## 2020-5-19
### 经过实验，多页面mask组件还是写在内部比较好

## 2020-5-14
### 改成多页面应用，方便以后多页面的需求（首先在router.json定制多页面，再创建文件夹）

## 2020-5-9
### 新增img组件

## 2020-5-6
### body增加ontouchstart属性确保active伪类的正常展示

## 2020-4-29
### 新增loading组件

## 2020-4-23
### 完善mask组件

## 2020-4-22
### 新增svga动画

## 2020-4-21
### 修改了一下模板,之前是es6输出成es5，但是显示promise会有问题。现在改成直接es5，外加es2015.promise

## 2020-4-17
### 新建简单的typescript模版


### 规范化与结构化
#### 1.app文件夹内的内容就是需要编写的文件,其余都是打包相关的文件.
#### 2.common文件夹是公共组建(不轻易更改的),utils文件夹就是公共库.其余的文件夹就是页面文件夹(外部router.json来制定哪些页面)
#### 3.接着进入页面文件夹assets就是放css静态图片的。index.common.css就是页面reset的css之类的(***.common.css的后缀打包不会加hash码),其余的是入口文件.
#### 4.components文件夹内为自身组件.
#### 5.useCommon为自身的自定义useHook.

### 组件
### (全局参数setMask、setToast、setLoading、setMsg、setDrawer)

## mask组件
封装了简单的弹出样式，以及弹出的方法。
----
```
    setMask(0)  //调用(number,表示弹出第几个弹窗)
    setMask(null)  //关闭
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| children | dom | null | 就是内容 | 是 |

## drawer组件
封装了简单的弹出样式，以及弹出的方法。
----
```
    setDrawer(0)  //调用(number,表示弹出第几个弹窗)
    setDrawer(null)  //关闭
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| children | dom | null | 就是内容 | 是 |

## toast组件
封装了简单的toast样式
----
```
    setToast(123)  //调用
```
## msg组件(类似与toast但是无限叠加)
封装了简单的toast样式
----
```
    setMsg(123)  //调用
```

## loading组件
封装了简单的loading样式
----
```
    setLoading(true)  //打开
    setLoading(false)  //关闭
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| _show | bool | true | 是否显示(false表示不显示) | 是 |

## img组件
封装了简单的img样式(可以直接当作div使用，只是里面有一个图片未加载出来的loading动画)
目前不支持定位相关的内容
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| className | string | null | 就是clasName | 是 |
| children | dom | null | 就是内容 | 否 |


## svga组件
封装了svga.lite包的组建，方便展示svga格式的动画
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| svga | string | null | svga文件 | 是 |
| loop | number||boolean | 1 | 循环次数或者是否一直循环 | 否 |
| fillMode | string | forwards | 类似与anima的fillMode属性 | 否 |
----
## swiper组件
利用react-hook外加简单的css控制，制作一个简易的swiper组件。
```
    <Swiper 
        autoplay={1000} 
        loop={false} 
        min={20} 
        changeIndex={(e) => { console.log(e) }}
    >
        <div>1</div>
        <div>2</div>
    </Swiper>
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| autoplay | number | 86400000 | 自动切换时间 | 否 |
| loop | bool | true | 让Swiper看起来是循环 | 否 |
| min | number | 10 | 最小滑动距离(滑动大于此值时切换) | 否 |
| changeIndex | func | null | 返回当前的index | 否 |
| noTouch | bool | false | 禁止触碰 | 否 |
| init | number | 1 | 初始位置 | 否 |
| changeMove | array | [] | 修改位置(一个数值位置以及一个改变的值) | 否 |

## anima组件
一个非常简单的图片播放组件(固定25帧动画，有需要请在组件内修改)。
```
<Anima imgNumber={125} path='index/assets/anima/' play={anima} callback={() => { console.log('end') }} />
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| imgNumber | number | 无 | 图片的数量 | 是 |
| path | string | 无 | 图片的路径(需要带上当前目录,图片名字是数字下标加.anima的png文件才行) | 是 |
| paly | bool | 无 | 播放按钮 | 是 |
| initNumber | number | 0 | 动画图片的起始位置 | 否 |
| callback | func | null | 结束执行的函数 | 否 |
| width | number | null | canvas宽 | 否 |
| height | number | null | canvas长 | 否 |


## Video组件
播放mp4的组件
```
 <Video src={mp4Src} />
```
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| src | string | 无 | mp4的路径 | 是 |