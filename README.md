# small-ui

```
    作者: 小谢(谢楚锋)
    时间: 2020-06-05
    参考element-ui和iview,bootstrap其他UI库整理的自己一套UI
```

## 使用的vue-cli 3.0的脚手架
```
(源码运行修改)
npm install  安装
npm run dev  运行
npm run build  打包
```

## 组件集合功能和参数

###样式类型默认有以下几种
####只要有type字段的组件，就有这几个类型
####primary ，info ，warning ， success ， danger




### alert(提示框)
```
   参数                       默认值            参数类型
   type (类型)                primary            String  
   effect (主题)              light              String
   showClose(是否显示关闭)    false              Boolean
   showIcon(是否显示icon)     false              Boolean   
   title (标题)               --                 String
   description (内容)         --                 String
   
   
   事件                           可获取参数
   close (点击关闭触发)               --
```


### aside(左侧栏布局)
```
   参数                       默认值            参数类型
   width (类型)               200                Number  
```


### backtop(返回顶部栏)
```
   参数                                   默认值            参数类型
   right (固定右边距离)                     40                String  
   bottom (固定下方距离)                    40                String 
   visibilityHeight(距离底部的距离显示)     200               Number
   
   
```

### breadcrumb(面包屑)
```
   参数                                   默认值            参数类型
   type (分界符)                            >                String  
   
   事件                           可获取参数
   click (点击关闭触发)            breadcrumb-item的 name 和 row
```

### breadcrumb-item(面包屑列表)
```
   参数                                   默认值            参数类型
   isClick (是否可点击)                    false             Boolean  
   name (名称)                              --               String
   row (任何参数)                           --                任意
```

### breadcrumb(面包屑)
```
   参数                                   默认值            参数类型
   type (分界符)                            >                String  
   
   事件                           可获取参数
   click (点击关闭触发)            breadcrumb-item的 name 和 row
```




























