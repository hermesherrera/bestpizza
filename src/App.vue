<template>
  <div id="app" class="main">
    <div class="app">
	<img :src="require('./assets/pizza.png')" class="image_main">
	<router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
    import './styles/index.css'

    export default {
    
    }
</script>
