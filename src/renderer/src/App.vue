<script setup lang="ts">
import { onMounted } from 'vue'
import Versions from './components/Versions.vue'


const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

onMounted(() => {
  console.log('App.vue mounted')
})
</script>

<template>
  <Versions />
</template>
