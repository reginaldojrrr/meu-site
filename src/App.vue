<script setup>
import customHeader from './components/customHeader.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import portfolio from './components/portfolio.vue'
import skills from './components/skills.vue'
import testimonies from './components/testimonies.vue'
// import carousel from './components/carousel.vue'
import contact from './components/contact.vue'
import customFooter from './components/customFooter.vue'
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
    <!-- <section class="row">
      <carousel></carousel>
    </section> -->
    <section class="row">
      <contact></contact>
    </section>
  </div>
  <customFooter></customFooter>
</template>

<style lang="scss" scoped>

</style>
