<template>
  <div class="win-body">
    <p>{{ props.text }}</p>
  </div>
</template>
<script lang="ts" setup>
import { } from 'vue'

const props = defineProps<{
  text: string
}>()
</script>
<style lang="less" scoped></style>
