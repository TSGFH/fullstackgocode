function detectCollision(objects, point) {
  for (let i = 0; i < objects.length; i++) {
    const { x, y, width, height } = objects[i];  // Here we are destructuring each object
    if (
      point.x >= x && // notice that we no longer need to use the object.x we can simply use the new variables
      point.x <= x + width &&
      point.y >= y &&
      point.y <= y + height
    )
      return object;
  }
}

const myObjects = [
  { x: 10, y: 20, width: 30, height: 30 },
  { x: -40, y: 20, width: 30, height: 30 },
  { x: 0, y: 0, width: 10, height: 5 },
];