<template>
  <div class="LeftMenuFun">
    <div class="relative pt-23px pl-26px w-200px">
      <img class="w-97px h-28px" src="@/assets/images/logo.png" />
      <img
        class="absolute top-14px left-127px w-48px"
        src="@/assets/images/version-type.png"
      />
    </div>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftMenuFun',
}
</script>
<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.LeftMenuFun {
  width: 200px;
  background: #2a2b34;
  height: 100vh;
}
</style>
