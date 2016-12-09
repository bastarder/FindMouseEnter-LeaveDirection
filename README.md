### 判断鼠标进入方向

首先, 在`mouseenter`事件中能获取到`event`;

**准备工作**：
	
```
  var w = e.target.clientWidth - 1,
      h = e.target.clientHeight - 1,
      left = e.offsetX - w / 2,
      top =  e.offsetY - h / 2,
      mx = e.movementX,
      my = e.movementY;
```

由上述可见，我们先通过 `e.offsetX ` 跟 `width` 来判断出, 触发事件的坐标是在 哪个方向;


比如 当 `left < 0` 说明坐标在左侧;

以此类推;

**问题所在**

左上角 既属于 `左` 又属于 `上`;

右下角 既属于 `右` 又属于 `下`;

**如何判断？**

举例：区分 `右` 与 `下`;

我们思考，假如鼠标从下方进入,那么触发事件的 `offsetY` 的值, 减去（从下往上移动量为负数） 鼠标Y轴移动的量（movementY）必定大于等于
`e.target.clientWidth`；

由此推断出： `top > 0 && (e.offsetY - my)) >= h`

当满足此条件时,是由`下方进入`；

其他方向也是如此;

**注意**

1.如果要判断鼠标离开,则不需要考虑 鼠标的移动量;（自己研究看看为什么）;

2. 有些浏览器 定位偏移值从0开始，所以会有`1px`误差,因此一开始将减`width`,`height`,去1,来兼容大部分情况;