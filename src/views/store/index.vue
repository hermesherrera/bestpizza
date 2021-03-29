<template>
    <div class="container_details">
	<b-link to="home" class="link">
	    <i class="fas fa-arrow-left go_back"></i>
	</b-link>
	<detailsStore />
	<listProducts :products="storeDetails.products" />
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import detailsStore from './details.vue'
    import listProducts from './listProducts.vue'

    export default {
	components: {
	    detailsStore,
	    listProducts,
	},

	computed: {
	    ...mapState(['storeDetails']),
	}
    }
</script>

<style scoped>
    .container_details {
	align-self: flex-end;
    }

    .go_back {
	font-size: 20px;
	position: absolute;
	left: calc(100% - 40px);
	top: 20px;
    }

    .link {
	text-decoration: none;
	color: black;
    }

    @media (min-width: 350px) and (max-width: 575px) {
	.go_back {
	    top: 150px;
	}
    }

    @media (min-width: 576px) and (max-width: 919px) {
	.go_back {
	    top: 150px;
	    left: calc(100% - 100px);
	}
    }
</style>
