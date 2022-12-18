detectCollision = (objects, point) => {
    const test = {x,y,width,height};
    const test2 = {x:point.x, y:point.y};
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      if (
        point.x >= object.x &&
        point.x <= object.x + object.width &&
        point.y >= object.y &&
        point.y <= object.y + object.height
      )
        return object;
    }
  }
  
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ];


//   const { id, title, date } = note