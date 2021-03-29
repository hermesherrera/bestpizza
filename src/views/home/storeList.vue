<template>
    <div class="container">
	<div class="item" v-for="store in storesList">
	    <b-link 
		class="main_store"
		to="store"
		@click="setStoreDetails(store)"
	    >
		<div class="main_logo">
		    <img class="logo" :src=store.logo>
		</div>
		<div>{{ store.name }}</div>
		<div class="address">{{ store.address }}</div>
	    </b-link>
	</div>
	<storeNotFound v-if="storesList.length === 0" />
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import storeNotFound from './storeListNotFound.vue'

    export default {
	components: {
	    storeNotFound,
	},
	computed: {
	    ...mapState(['storesList']),
	},

	methods: {
	    ...mapMutations({setStoreDetails: 'SET_STORE_DETAILS'})
	}
    }
</script>

<style scoped>
    .container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
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
	text-decoration: none;
	color: black;
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
