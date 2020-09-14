<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <nuxt-link :to="'/order/'+item.id">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "订单一", id: 1 },
        { name: "订单二", id: 2 },
        { name: "订单三", id: 3 },
      ],
    };
  },
};
</script>

<style>
</style>