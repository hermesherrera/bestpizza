<template>
    <div class="container">
	<div class="item" v-for="store in storesList">
	    <div class="main_store">
		<div class="main_logo">
		    <img class="logo" :src=store.logo>
		</div>
		<div>{{ store.name }}</div>
		<div class="address">{{ store.address }}</div>
	    </div>
	</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
	computed: {
	    ...mapState(['storesList']),
	},
    }
</script>

<style scoped>
    .container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	overflow: auto;
	height: 400px;
    }

    .item {
	display: flex;
	padding: 10px;
	margin-top: 30px;
	margin-bottom: 30px;
    }

    .main_store {
	width: 120px;
    }

    .main_logo {
	display: flex;
	justify-content: space-between;
    }

    .logo {
	width: 120px;
	height: 120px;
    }

    .address {
	font-size: 12px;
	color: #abb2b9;
    }

    @media (min-width: 920px){
	.container {
	    height: 400px;
	    margin-top: 50px;
	}
    }

</style>
