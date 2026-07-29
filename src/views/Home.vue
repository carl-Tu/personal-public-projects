<script setup lang="ts">
const cards = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}))
</script>

<template>
  <div class="home-page">
    <h1 class="page-title">欢迎来到 My Space</h1>
    <div class="grid">
      <div v-for="card in cards" :key="card.id" class="grid-card">
        <span class="card-number">{{ card.id }}</span>
        <span class="card-label">{{ card.label }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-page {
  .page-title {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 32px;
    color: #f0f0f0;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .grid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 140px;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border: 1px solid #2a2a4a;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;

    &:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
      border-color: #4a6cf7;
      background: linear-gradient(135deg, #1e1e3a 0%, #1a2a5e 100%);
    }

    .card-number {
      font-size: 36px;
      font-weight: 700;
      color: #4a6cf7;
      transition: color 0.3s ease;
    }

    .card-label {
      margin-top: 8px;
      font-size: 13px;
      color: #888;
      transition: color 0.3s ease;
    }

    &:hover {
      .card-number {
        color: #6b8cff;
      }

      .card-label {
        color: #ccc;
      }
    }
  }
}
</style>
