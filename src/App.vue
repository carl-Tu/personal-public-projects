<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabs = [
  { label: '首页', path: '/' },
  { label: '简历', path: '/resume' },
  { label: '免费网站汇总', path: '/websites' },
]
</script>

<template>
  <div class="app">
    <nav class="tab-bar">
      <button
        v-for="tab in tabs"
        :key="tab.path"
        class="tab-item"
        :class="{ active: route.path === tab.path }"
        @click="router.push(tab.path)"
      >
        {{ tab.label }}
      </button>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="less" scoped>
.app {
  min-height: 100vh;
  background: #0f0f1a;
  color: #e0e0e0;
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 2px;
  padding: 16px 16px 0;
  background: #0f0f1a;
  border-bottom: 1px solid #1e1e30;
}

.tab-item {
  padding: 10px 28px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 15px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s;

  &:hover {
    color: #ccc;
    background: #1a1a2e;
  }

  &.active {
    color: #fff;
    background: #1e1e30;
    font-weight: 600;
  }
}

.main-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>
