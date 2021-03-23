<template>
    <div class="container_home">
	<div class="content_home">
	    <menuProfile />
	    <mainTitle title="Pizzerías" />
	    <secondTitle title="Tiendas" description="Escoge tu pizzería favorita" />
	    <searchBar placeholder="Buscar una pizzería"/>
	    <storeList />
	</div>
    </div>
</template>

<script>
    import menuProfile from './menuProfile.vue'
    import mainTitle from './mainTitle.vue'
    import secondTitle from './secondTitle.vue'
    import searchBar from './searchBar.vue'
    import storeList from './storeList.vue'

    export default {
	data() {
	    return {
		dataStores: storesList,
	    }
	},

	components: {
	    menuProfile,
	    mainTitle,
	    secondTitle,
	    searchBar,
	    storeList,
	},
    }
</script>

<style scoped>
    .container_home {
	align-self: flex-end;
    }

    .content_home {
	margin-left: 20px;
	margin-right: 20px;
    }
</style>
