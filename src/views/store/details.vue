<template>
    <div class="container">
	<div class="circle">
	    <div>
		<img class="logo" :src="storeDetails.logo">
	    </div>
	    <div class="name">{{ storeDetails.name }}</div>
	    <div class="address">{{ storeDetails.address }}</div>
	</div>
	<div class="description">{{ storeDetails.description }}</div>
	<div class="social">
	    <b-link :href="storeDetails.instagram" class="link" target="_blank"><i class="fab fa-instagram social_icon" v-if="storeDetails.instagram"></i></b-link>
	    <b-link :href="storeDetails.facebook" class="link" target="_blank"><i class="fab fa-facebook-square social_icon" v-if="storeDetails.facebook"></i></b-link>
	</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
	computed: {
	    ...mapState(['storeDetails']),
	},

	mounted(){
	    if (this.storeDetails.length === 0){
		this.$router.push({ name: 'home' })
	    }
	}
    }
</script>

<style scoped>
    .container {
	margin-top: 10px;
	margin-bottom: 10px;
	width: 280px;
	height: 370px;
	border-radius: 15px 15px 15px 15px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
    }

    .circle {
	background-color: #f1cf62;
	width: 200px;
	height: 200px;
	border-radius: 100px 100px 100px 100px;
	margin-top: 50px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
    }

    .logo {
	width: 120px;
	height: 120px;
	position: relative;
	top: -20px;
    }

    .name {
	font-size: 20px;
	font-weight: bold;
	position: relative;
	top: -15px;
    }

    .address {
	color: #626567;
	position: relative;
	top: -15px;
    }

    .description {
	color: #626567;
	text-align: center;
    }

    .social {
	margin-top: 25px;
	font-size: 25px;
    }

    .social_icon {
	margin-right: 10px;
    }

    .link {
	color: black;
	text-decoration: none;
    }

    @media (min-width: 920px){
	.container {
	    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
	}
    }
</style>
