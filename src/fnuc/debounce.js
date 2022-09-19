/**
 * 防抖
 * 防抖的意思是，在连续的操作中，无论进行了多长时间，
 * 只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。
 * 具体场景可以搜索框输入关键字过程中实时 请求服务器匹配搜索结果，
 * 如果不进行处理，那么就是输入框内容一直变化，导致一直发送请求。
 * 如果进行防抖处理，结果就是当我们输入内容完成后，
 * 一定时间(比如500ms)没有再 输入内容，这时再触发请求。
 * @description 防抖默认执行间隔 500ms(主要用途是在实时搜索)
 * @param Function callback, Number time
 * @param Number wait
 * @returns Function
 */
let timeout = null;
function debounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === "function" && func();
    }, wait);
  }
}
export default debounce;
