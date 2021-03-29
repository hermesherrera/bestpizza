<template>
    <div class="profile">
	<b-icon
	    class="h1 mb-2"
	    icon="person-circle"
	    v-b-toggle.bar_menu
	></b-icon>
	<barMenu />
    </div>
</template>

<script>
    import barMenu from './menu.vue'

    export default {
	components: {
	    barMenu,
	}
    }
</script>

<style scoped>
    .profile {
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	margin: 20px;
	cursor: pointer;
    }

    @media (max-width: 920px){
	.profile {
	    position: absolute;
	    left: calc(100% - 80px);
	}
    }
</style>
