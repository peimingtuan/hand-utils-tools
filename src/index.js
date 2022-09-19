//函数节流
import throttle from "./fnuc/throttle";
import debounce from "./fnuc/debounce";
//数据去重
import { uniqueBySet } from "./array/unique";

const HandTools = {
  version() {
    console.log("hand-utils-tools version:1.0.0");
  },
  throttle,
  debounce,
  uniqueBySet,
};
export default HandTools;
