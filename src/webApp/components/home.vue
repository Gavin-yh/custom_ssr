<template>
  <div class="hello">
    <h1>hello world</h1>
    <button @click="increment">加一</button>
    <button @click="decrement">加一</button>
    <div>{{count}}</div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    ...mapGetters({
      count: "getCount"
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
