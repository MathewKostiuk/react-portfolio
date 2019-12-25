export function checkViewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
