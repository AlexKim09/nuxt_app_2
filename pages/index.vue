<template>
  <div class="bg-white text-gray-900">
    <header class="container mx-auto flex justify-between items-center">
      <div>
        <img :src="require('~/assets/images/logo.svg')" style="width: 160px; height: 21.844px" alt="Navien Logo">
        <span class="text-10px text-black">ОТОПИТЕЛЬНЫЕ СИСТЕМЫ В КАЗАХСТАНЕ</span>
      </div>
      <nav class="flex space-x-6 font-MullerRegular text-primary">
        <a href="#" class="text-16px">Подобрать котел</a>
        <a href="#" class="text-16px">О компании</a>
        <a href="#" class="text-16px">Преимущества Navien</a>
        <a href="#" class="text-16px">Контакты</a>
      </nav>
      <div class="text-right">
        <div class="text-12px text-secondary font-bold font-custom">Звоните, мы сейчас работаем</div>
        <div class="text-primary font-bold text-30px">8 8000 700 222</div>
        <div class="text-14px text-primary">Заказать звонок</div>
      </div>
    </header>
    <FirstBlock />
    <section>
      <div class="py-4 container mx-auto">
        <div class="text-32px  text-primary">
          <strong>Рассчитать стоимость</strong> отопления для Вашего дома
          <div class=" bg-secondary mt-8 mr-3" style="width: 100px; height: 2px"></div>
        </div>
      </div>
    </section>
    <section>
      <BoilerSlider />
    </section>
    <section>
      <NavienAdvantages />
    </section>
  </div>
</template>

<script setup>

import FirstBlock from '../components/FirstBlock.vue'
import BoilerSlider from '../components/BoilerSlider.vue'
import NavienAdvantages from '../components/NavienAdvantages.vue'
// import CircleElement from '~/components/CircleElement.vue'

</script>
