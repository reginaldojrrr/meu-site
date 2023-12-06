<script setup>
import customHeader from './components/customHeader.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import portfolio from './components/portfolio.vue'
import skills from './components/skills.vue'
import testimonies from './components/testimonies.vue'
</script>

<template>
  <customHeader></customHeader>
  <div class="container">
    <section class="row">
      <home></home>
    </section>
    <section class="row">
      <about></about>
    </section>
    <section class="row">
      <portfolio></portfolio>
    </section>
    <section class="row">
      <skills></skills>
    </section>
    <section class="row">
      <testimonies></testimonies>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1400px) {
  .container {
    max-width: 1760px;
    margin: 0 auto;
  }
}
</style>
