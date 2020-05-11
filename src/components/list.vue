<template>
  <div class="list"> 
      <div v-for="(item,index) in getList" :key = index>
          <p>{{item.title}}</p>
      </div>
  </div>
</template>

<script>
//ssr时，生命周期只有两个可以用，mounted beforemounted,
//在后台主要是字符串，如果用虚拟dom，性能就高了
import {mapGetters} from 'vuex'
const fetchInitialData = ({store}) => {
    return store.dispatch('getList')
}
export default {
  name: 'list',
  asyncData:fetchInitialData,   // 给entry-server留个标记，给异步的数据，告诉让ssr来这里找，然后先去请求数据。
  computed: {
      ...mapGetters({
          getList: 'getList'
      })
  },
  mounted() {
      fetchInitialData({store: this.$store})  //触发这个变化，获取数据。
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
