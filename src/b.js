import cShow from './c.js'
const show = () => {
  return `this is from b.js; ${cShow()}`
};
console.log('module b runs')

export default show