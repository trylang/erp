<script>
  import Vue from 'vue';
  Vue.directive('number', {
    bind(el, binding, vnode) {
      const ev = binding.arg;
      console.log(ev);
      console.log(el);
      console.log(vnode);
    }
  })
</script>