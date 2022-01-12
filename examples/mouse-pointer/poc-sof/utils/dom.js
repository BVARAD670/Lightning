export function setCollisionAndZIndex(element) {
  let parentElement = element.parent;
  let zIndex = 1;
  while (parentElement?.ref) {
    parentElement.collision = true;
    zIndex = (parentElement.zIndex > zIndex) ? parentElement.zIndex + 1 : zIndex;
    parentElement = parentElement.parent;
    if (!parentElement.ref && parentElement.parent?.ref) {
      parentElement = parentElement.parent;
    }
  }
  element.collision = true;
  element.zIndex = zIndex;
}
