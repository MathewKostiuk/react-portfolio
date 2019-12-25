export function checkViewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

export function checkViewportHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export function isMobile() {
  return checkViewportWidth() < 720 ? true : false;
}
