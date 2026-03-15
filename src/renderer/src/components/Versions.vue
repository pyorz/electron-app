<template>
  <div class="box">
    <!-- <button class="btn" type="button" @click="createContentByJSX">JSX666</button>
    <button class="btn" type="button" @click="createContentByText">文本</button>
    <button class="btn" type="button" @click="createContentByRenderFunction">渲染函数</button>
    <button class="btn" type="button" @click="createContentByFunction">函数</button>
    <button class="btn" type="button" @click="createContentByComponent">组件</button> -->
  </div>
</template>

<script lang="tsx" setup>
import WinBody from './WinBody.vue'
import '@dongls/xwindow/dist/index.css'
import { h, onMounted } from 'vue'
import { useWindow } from '@dongls/xwindow'
import type { UseBlankWindowOptions, WindowBody } from '@dongls/xwindow'
import { useBlankWindow, BlankWindow, WindowMenus } from '@dongls/xwindow'
import Modal from './Modal.vue'

function useModal(title: string, body: WindowBody, params: UseBlankWindowOptions = {}) {
  params.height = params.height ?? '320px'

  // 这里使用空白窗口，实现自定义
  return useBlankWindow(title, <Modal>{body}</Modal>, params)
}

function createContentByJSX(): void {
  useWindow('窗口1', <div class="example-body">这段文本是使用JSX创建的。</div>)
}

function createContentByText(): void {
  useWindow('窗口2', '这段本文可以直接展示。')
}

function createContentByRenderFunction(): void {
  useWindow('窗口3', h('div', { className: 'example-body' }, '这段文本是通过Vue提供的渲染函数创建的。'))
}

function createContentByFunction(): void {
  useWindow('窗口4', () => <div class="example-body">这段文本是通过返回VNode节点的函数创建的。</div>)
}

function createContentByComponent(): void {
  useWindow('窗口5', <WinBody text="这段文本通过组件创建的。" />)
}
onMounted(() => {
  createContentByComponent()
  window.addEventListener('mousemove', (event) => {
    console.log('mousemove', event)
    let flag = event.target === document.documentElement
    if (flag) {
      window.api.setIgnoreMouseEvents(true, { forward: true })
    } else {
      window.api.setIgnoreMouseEvents(false)
    }
  })
  window.api.setIgnoreMouseEvents(true, { forward: true })
})
</script>
<style lang="less" scoped>
.xwindow {
  pointer-events: auto;
}
</style>
