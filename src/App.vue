<template>
  <div id="app" class="main">
    <img :src="require('./assets/pizza.png')" class="image_main">
	<router-view class="content"></router-view>
  </div>
</template>

<script>
    import './styles/index.css'

    export default {
    
    }
</script>
