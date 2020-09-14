<template>
  <div>该订单id：{{a}}</div>
</template>

<script>
export default {
  data() {
    return {
      a: this.$route.params.id,
    };
  },
  created(){
      console.log(this.$route)
  }
};
</script>

<style>
</style>