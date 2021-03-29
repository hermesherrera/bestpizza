<template>
    <div class="container">
	<div class="product" v-for="product in products">
	    <div class="image"><img :src="product.img"></div>
	    <div class="name">{{ product.name }}</div>
	</div>
    </div>    
</template>

<script>
    export default {
	props: {
	    products: [Array, Object]
	},
    }
</script>

<style scoped>
    .container {
	display: flex;
	justify-content: space-between;
	flex-flow: wrap;
	overflow: auto;
    }

    .product {
	border-radius: 5px 5px 5px 5px;
	height: 150px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);  
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #f1cf62;
	margin: 15px;
	width: 100%;
	transition: all 0.25s;
    }

    .product:hover {
	transform: translateY(-10px);
    }

    .image img {
	width: 150px;
	height: 150px;
    }

    .name {
	font-size: 14px;
	padding: 10px;
    }

    @media (min-width: 920px){
	.product {
	    width: 45%;
	}
    }
</style>
