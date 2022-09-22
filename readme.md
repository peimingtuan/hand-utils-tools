##使用方式
import EHands from 'Ehand-utils-tools'
Vue.prototype.EHands = EHands

1.节流的使用
EHands.throttle(btnAClick, 2000)

2.防抖的使用
EHands.debounce(btnAClick, 2000)

3.数据去重
EHands.uniqueBySet(Array)