import bShow from './b.js'
import cShow from './c.js'

const show = {
  a: () => {
    return `this is from a.js; ${bShow()}`
  },
  b: bShow,
  c: cShow

}
console.log('module a runs')

export default show