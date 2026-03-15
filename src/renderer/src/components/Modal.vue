<template>
  <div v-if="win" class="example-modal">
    <div class="example-modal-header">
      <div class="example-modal-title">{{ win.options.title }}</div>
      <div class="example-modal-menus">
        <WindowMenus :instance="win" />
      </div>
    </div>
    <div class="example-modal-body">
      <slot :instance="win" />
    </div>
    <div class="example-modal-footer">
      <button type="button" class="btn btn-small" @click="onCancel()">取消</button>
      <button type="button" class="btn btn-small" @click="onConfirm()">确定</button>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { useWindowApi, WindowMenus } from '@dongls/xwindow'

const win = useWindowApi()

function onCancel(): void {
  win?.dispatchCancel().catch((e) => console.error(e))
}

function onConfirm(): void {
  win?.dispatchConfirm().catch((e) => console.error(e))
}
</script>
<style lang="less" scoped>
.example-modal {
  pointer-events: auto;
  background-color: #fff;
}
</style>
