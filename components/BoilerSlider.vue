<template>
  <div class="container mx-auto py-8">
    <div class="p-4 rounded-lg shadow-md bg-slider_primary">
      <div class="flex justify-between  items-center mb-4">
        <div class="text-22px text-primary">
          Поможем выбрать идеальный котел под Ваши потребности
        </div>
        <span class="text-blue-900">1/4</span>
      </div>
      <hr class="mb-4 border-gray-300" />
      <div class="text-26px text-primary mb-5 mr-2.5">Какой тип установки требуется?</div>
      <div class="flex flex-row  mb-16">
        <div class="mx-1.5 my-1.5">
          <div class="text-center shadow-lg rounded-lg bg-white mr-2">
            <img :src="require('~/assets/images/wall_boiler.png')" alt="Напольный" class="w-48 h-48 object-cover mb-2"/>
          </div>
          <div class="text-gray-700 ">Настенный</div>
        </div>
        <div class="mx-1.5 my-1.5">
          <div class="text-center shadow-lg rounded-lg bg-white">
            <img :src="require('~/assets/images/floor_boiler.png')" alt="Напольный" class="w-48 h-48 object-cover mb-2" />
          </div>
          <div class="text-gray-700 ">Напольный</div>
        </div>
      </div>
      <div class="flex justify-between mb-5">
        <button class="text-14px text-white bg-slider_button pl-11 pr-7 py-0.5  rounded-full shadow-md">← НАЗАД</button>
        <button class="text-14px bg-secondary text-white pl-11 pr-7 py-2 rounded-full shadow-md">ДАЛЕЕ →</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
