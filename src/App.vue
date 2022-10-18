<script setup>
import { onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
const { ipcRenderer } = require('electron')
const { resolve } = require('path')

ipcRenderer.on('close-window', async () => {
  let flag = await ElMessageBox.confirm('退出？', '提示', {
    type: 'warning',
    cancelButtonText: '取消',
    confirmButtonText: '确定',
  })
  if (flag === 'confirm') {
    ipcRenderer.send('close-window-callback')
  }
})

onMounted(() => {
  setTimeout(() => {
    ipcRenderer.send('show-window')
  }, 1000)
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
