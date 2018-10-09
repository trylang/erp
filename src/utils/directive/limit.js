export default {
  bind(el, binding) {
    console.log('bind', el);
  },
  update(el, binding) {
    console.log('update', el);
    console.log('update', binding);
  },
  unbind(el, binding) {
    console.log('unbind', el);
    console.log('unbind', binding);
  }
}