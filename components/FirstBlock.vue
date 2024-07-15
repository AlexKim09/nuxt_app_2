<template>
  <div class="container mx-auto flex flex-col md:flex-row items-center">
    <div class="md:text-left md:w-1/2 md:pr-8">
      <h1 class="text-46px text-primary">
        <strong>
          Отопительные котлы<br>
        </strong>
        в Казахстане по оптовым <br> ценам
        <strong>с гарантией</strong>
        до 3 лет
      </h1>
      <div class=" mb-8 flex flex-row">
        <div class=" bg-secondary mt-3 mr-3" style="width: 90px; height: 2px"></div>
        <p class="text-18px">
          сократите расходы на отопление до 30%<br> благодаря передовым технологиям Navien
        </p>
      </div>
      <div class="flex items-center mb-8">
        <button class="bg-secondary text-white px-8 py-4 rounded-full text-14px font-bold mr-4">УЗНАТЬ СТОИМОСТЬ</button>
        <p class="text-16px">Пройдите тест чтобы<br> рассчитать стоимость</p>
      </div>
      <div class="flex justify-around ">
        <div class="flex items-center mr-3 gap-8">
          <div class="relative">
            <div class="outer-circle"></div>
            <div class="middle-circle"></div>
            <div class="inner-circle"></div>
          </div>
          <div class="">
            <div class="text-22px font-bold">3 года</div>
            <p class="text-14px text-neutral">гарантии оборудования</p>
          </div>
        </div>
        <div class="flex items-center mr-3 gap-8">
          <div class="relative">
            <div class="outer-circle"></div>
            <div class="middle-circle"></div>
            <div class="inner-circle"></div>
          </div>
          <div class="">
            <div class="text-22px font-bold">30%</div>
            <p class="text-14px text-neutral">экономии расходов</p>
          </div>
        </div>
        <div class="flex items-center mr-3 gap-8">
          <div class="relative">
            <div class="outer-circle"></div>
            <div class="middle-circle"></div>
            <div class="inner-circle"></div>
          </div>
          <div class="">
            <div class="text-22px font-bold">15 лет</div>
            <p class="text-14px text-neutral">срок эксплуатации</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img :src="require('~/assets/images/FirstImage.jpg')" style="width: 654px; height: 654px" alt="Heating Systems" class="rounded-full border-8 border-secondary">
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
  .relative {
    position: relative;
  }

  .outer-circle {
    width: 40px;
    height: 40px;
    border: 1px solid #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .middle-circle {
    width: 26px;
    height: 26px;
    border: 1px solid #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .inner-circle {
    width: 10px;
    height: 10px;
    background-color: #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
