/**
 * 函数节流
 * 节流的意思是，规定时间内，只触发一次。比如我们设定500ms，在这个时间内，
 * 无论点击按钮多少次，它都只会触发一次。
 * 具体场景可以是抢购时候，由于有无数人 快速点击按钮，如果每次点击都发送请求，
 * 就会给服务器造成巨大的压力，但是我们进行节流后，就会大大减少请求的次数。
 */

let timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === "function" && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}
export default throttle;
