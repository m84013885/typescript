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


### 组件
### (全局参数setMask、setToast、setLoading)

## mask组件
封装了简单的弹出样式，以及弹出的方法。
----
```
    setMask(0)  //调用(number,表示弹出第几个弹窗)
    setMask(null)  //关闭
```

## toast组件
封装了简单的toast样式
----
```
    setToast(123)  //调用
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
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| className | string | null | 就是clasName | 是 |
| children | dom | null | 就是内容 | 否 |