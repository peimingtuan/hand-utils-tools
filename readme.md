##使用方式
import lHands from 'lhand-utils'
Vue.prototype.lHands = lHands

1.节流的使用
lHands.throttle(btnAClick, 2000)

2.防抖的使用
lHands.debounce(btnAClick, 2000)