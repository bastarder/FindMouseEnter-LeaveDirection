function getDirection(e, enter){
  var w = e.target.clientWidth - 1,
      h = e.target.clientHeight - 1,
      left = e.offsetX - w / 2,
      top =  e.offsetY - h / 2,
      mx = enter ? e.movementX : 0,
      my = enter ? e.movementY : 0,
      direction = -1;
      // 0 上 1 下 2 左 3 右

  if(top < 0 && (h - e.offsetY + my) >= h ){
    direction = 0;
  };
  if(top > 0 && (e.offsetY + (-my)) >= h ){
    direction = 1;
  };
  if(left < 0 && (w-e.offsetX + mx) >= w ){
    direction = 2;
  };
  if(left > 0 && (e.offsetX + (-mx)) >= w){
    direction = 3;
  }; 
  return direction;
}

