<template>
  <div class="flex">
    <LeftMenuFun></LeftMenuFun>
    <div>
      <TopMenu></TopMenu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunctionLayout',
}
</script>
<script setup>
import LeftMenuFun from '../components/common/FunLeftMenu.vue'
import TopMenu from '../components/common/TopMenu.vue'
</script>

<style lang="scss" scoped></style>
