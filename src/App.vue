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

window.onload = function() {
            window.scroll(0, 0);
        };
</script>

<template>
  <customHeader></customHeader>
  <div class="container">
    <section class="row">
      <home></home>
    </section>
    <section class="row">
      <span id="about"></span>
      <about></about>
    </section>
    <section class="row">
      <span id="portfolio"></span>
      <portfolio></portfolio>
    </section>
    <section class="row">
      <span id="skills"></span>
      <skills></skills>
    </section>
    <section class="row">
      <span id="testimonies"></span>
      <testimonies></testimonies>
    </section>
    <!-- <section class="row">
      <carousel></carousel>
    </section> -->
    <section class="row">
      <span id="contact"></span>
      <contact></contact>
    </section>
  </div>
  <customFooter></customFooter>
</template>

<style lang="scss" scoped>

</style>
