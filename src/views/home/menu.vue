<template>
    <b-sidebar
	id="bar_menu"
	backdrop-variant="dark"
	backdrop
	shadow
	right
	no-header
	bg-variant="white"
    >
	<div class="bar">
	    <b-icon
		class="h1 mb-2 icon_profile"
		icon="person-circle"
	    ></b-icon>
	    <div class="welcome">Bienvenid@ {{ login.user.name }}</div>
	    <div class="menu">
		<div><b-link class="link" href="/"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</b-link></div>
		<div><b-link class="link"><i class="fas fa-cog"></i> Cuenta</b-link></div>
	    </div>
	</div>
    </b-sidebar>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
	computed: {
	    ...mapState(['login'])
	}
    }
</script>

<style scoped>
    .icon_profile {
	margin: 15px;
    }

    .welcome {
	font-size: 20px;
	font-weight: bold;
	margin: 15px;
    }

    .menu {
	margin-top: 30px;
	line-height: 400%;
    }

    .link {
	text-decoration: none;
	color: black;
	margin-left: 20px;
    }

    .menu div:hover {
	background: #f1cf62;
    }
</style>
