<!-- <template>
  <div class="circle-container">
    <div class="outer-circle">
      <div class="middle-circle">
        <div class="inner-circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
  <style scoped>
  .circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outer-circle, .middle-circle, .inner-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: #ed8b00;
    border-radius: 3000px;
    background-position: center center;
  }

  .outer-circle {
    width: 40px;
    height: 40px;
    border-width: 1px;
  }

  .middle-circle {
    width: 26px;
    height: 26px;
    border-width: 1px;
    border-color: #ed8b00;
  }

  .inner-circle {
    width: 10px;
    height: 10px;
    background-color: #ea8a2b; /* Цвет заполнения */
  }
  </style> -->

  <!-- <template>
    <div class="flex justify-around py-8">
      <div class="text-center">
        <div class="flex justify-center items-center mb-2">
          <div class="outer-circle flex items-center justify-center">
            <div class="middle-circle flex items-center justify-center">
              <div class="inner-circle bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">3 года</span>
          <p class="text-gray-600">гарантии оборудования</p>
        </div>
      </div>
      <div class="text-center">
        <div class="flex justify-center items-center mb-2">
          <div class="outer-circle flex items-center justify-center">
            <div class="middle-circle flex items-center justify-center">
              <div class="inner-circle bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">30%</span>
          <p class="text-gray-600">экономии расходов</p>
        </div>
      </div>
      <div class="text-center">
        <div class="flex justify-center items-center mb-2">
          <div class="outer-circle flex items-center justify-center">
            <div class="middle-circle flex items-center justify-center">
              <div class="inner-circle bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">15 лет</span>
          <p class="text-gray-600">срок эксплуатации</p>
        </div>
      </div>
    </div>
  </template>

<script setup>

</script>

  <style scoped>
  .outer-circle {
    width: 40px;
    height: 40px;
    border: 2px solid #ea8a2b;
    border-radius: 50%;
  }

  .middle-circle {
    width: 20px;
    height: 20px;
    border: 2px solid #ea8a2b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  inner-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  </style> -->
  <!-- <template>
    <div class="flex justify-around  py-8">
      <div class="relative">
        <div class="flex justify-center items-center mb-2">
        <div class="outer-circle">
          <div class="inner-circle"></div>
        </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">3 года</span>
          <p class="text-gray-600">гарантии оборудования</p>
        </div>
      </div>
      <div class="text-center">
        <div class="flex justify-center items-center mb-2">
          <div class="outer-circle">
            <div class="inner-circle"></div>
          </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">30%</span>
          <p class="text-gray-600">экономии расходов</p>
        </div>
      </div>
      <div class="text-center">
        <div class="flex justify-center items-center mb-2">
          <div class="outer-circle">
            <div class="inner-circle"></div>
          </div>
        </div>
        <div>
          <span class="text-2xl font-bold text-blue-900">15 лет</span>
          <p class="text-gray-600">срок эксплуатации</p>
        </div>
      </div>
    </div>
  </template>

<script>

</script>

  <style scoped>
  .outer-circle {
    width: 24px;
    height: 24px;
    border: 2px solid #ea8a2b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner-circle {
    width: 8px;
    height: 8px;
    background-color: #ea8a2b;
    border-radius: 50%;
  }
  </style> -->
  <template>
    <div class="  flex justify-around">
        <div class="flex items-center space-x-4">
        <div class="relative">
            <div class="outer-circle"></div>
            <div class="middle-circle"></div>
            <div class="inner-circle"></div>
        </div>
        <div>
            <span class="text-2xl font-bold text-blue-900">3 года</span>
            <p class="text-gray-600">гарантии оборудования</p>
        </div>
        </div>
        <div class="flex items-center space-x-4">
        <div class="relative">
            <div class="outer-circle"></div>
            <div class="middle-circle"></div>
            <div class="inner-circle"></div>
        </div>
        </div>
        <div class="flex items-center space-x-4">
      <div class="relative">
        <div class="outer-circle"></div>
        <div class="middle-circle"></div>
        <div class="inner-circle"></div>
      </div>

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
    width: 24px;
    height: 24px;
    border: 2px solid #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .middle-circle {
    width: 16px;
    height: 16px;
    border: 2px solid #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .inner-circle {
    width: 8px;
    height: 8px;
    background-color: #ea8a2b;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
