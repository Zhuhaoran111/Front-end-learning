<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-father">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">方案1</div>
          <div class="swiper-slide">方案2</div>
          <div class="swiper-slide">方案3</div>
          <div class="swiper-slide">方案4</div>
          <div class="swiper-slide">方案5</div>
          <div class="swiper-slide">方案6</div>
          <div class="swiper-slide">方案7</div>
        </div>
      </div>
      <div class="swiper-button-next" @click="prev"></div>
      <div class="swiper-button-prev" @click="next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {

  data() {
    return {

    }
  },
  mounted() {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  },
  methods: {

  }
}
</script>


<style lang="scss">
@import url('../antv-g6/css/sipwer.css');

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 550px;
  height: 40px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 14px !important;
  font-weight: 600;
}

.swiper-button-next,
.swiper-button-prev {
  color: #0796ff !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.swiper-father {
  width: 650px;
  height: 40px;
  position: relative;
  margin-top: 20px
}</style>
