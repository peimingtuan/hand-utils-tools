/**
 * @description [弃用]利用forEach循环结合indexOf()方法重新返回一个新的数组
 * @param Array arr
 * @returns Array
 * @deprecated 有新方案推荐使用uniqueBySet()
 */
function uniqueByIndexOf(arr) {
  const result = [];
  if (arr) {
    //遍历原始数组
    arr.forEach((item) => {
      //检测result数组中是否存在目标中的每一个数据
      if (result.indexOf(item) === -1) {
        //如果有插入到新数组中
        result.push(item);
      }
    });
  }
  return result;
}

/**
 * @description [弃用]利用对象属性结合数组加标存贮的方式
 * @param Array arr
 * @returns Array
 * @deprecated 有新方案推荐使用uniqueBySet()
 */
function uniqueByObjectKey(arr) {
  const result = [];
  const temporary = {};
  if (arr) {
    arr.forEach((item) => {
      if (temporary[item] === undefined) {
        temporary[item] = true;
        result.push(item);
      }
    });
  }
  return result;
}

/**
 * @description [推荐·数组去重]利用ES6的Set集合对象进行去重
 * @param Array arr
 * @returns Array
 */
export const uniqueBySet = (arr) => {
  let result = [];
  if (arr) {
    //将数组转化为Set集合对象
    let set = new Set(arr);
    result = [...set];
  }
  return result;
};
