<template>
    <div class="login">
	<img :src="require('../../assets/logo.png')" class="logo_login">

	<h2 class="mt-3">Bienvenido</h2>

	<div class="subtitle mt-3">A las mejores pizzas del país</div>

	<div class="mt-3 div50">
	    <b-input-group>
		<b-form-input
		    placeholder="Usuario (email)"
		    autofocus
		    v-model="username"
		    :state="validateState('username')"
		    aria-describedby="feddback-username"
		></b-form-input>
		<b-input-group-append>
		    <b-input-group-text>
			<b-icon icon="person-fill"></b-icon>
		    </b-input-group-text>
		</b-input-group-append>
		<b-form-invalid-feedback id="feddback-username">
		    El nombre de usuario es requerido 
		</b-form-invalid-feedback>
	    </b-input-group>
	</div>

	<div class="mt-3 div50">
	    <b-input-group>
		<b-form-input 
		    type="password"
		    placeholder="Contraseña"
		    v-model="password"
		    :state="validateState('password')"
		    aria-describedby="feddback-password"
		></b-form-input>
		<b-input-group-append>
		    <b-input-group-text>
			<b-icon icon="key"></b-icon>
		    </b-input-group-text>
		</b-input-group-append>
		<b-form-invalid-feedback id="feddback-password">
		    La contraseña es requerida 
		</b-form-invalid-feedback>
	    </b-input-group>
	</div>

	<b-link class="mt-3 links" @click="showToast('Información', 'Lo sentimos, en el momento esta opci√≥n no se encuentra disponible', 'warning')">
	    ¿Olvidaste tu contraseña?
	</b-link>
	
	<div class="mt-3 div50">
	    <b-button
		variant="primary"
		block
		size="lg"
		@click="login"
	    >
		Iniciar sesión
	    </b-button>
	</div>
    </div>
</template>

<script>
    import '../styles.css'
    import { required } from "vuelidate/lib/validators"

    export default {
	data (){
	    return {
		username: null,
		password: null,
	    }
	},

	validations: {
            username: { required },
            password: { required },
        },

	methods: {
	    showToast(title, content, variant){
		this.$bvToast.toast(content, {
		    title: title,
		    toaster: 'b-toaster-top-center',
		    solid: true,
		    appendToast: false,
		    variant: variant,
		})
	    },

	    validateState(name) {
                const { $dirty, $error } = this.$v[name]
                return $dirty ? !$error : null
            },

	    login(){
		this.$v.$touch()
		if (this.$v.$anyError) { return }
		axios
		    .get(`https://jsonplaceholder.typicode.com/users?email=${this.username}`)
		    .then(response => {
			if (response.data.length > 0){
			    this.showToast('Información', `Bienvenido ${response.data[0].name}`, 'success')
			    this.$router.push('home')
			} else {
			    this.showToast('Error', 'El usuario y/o contraseña errados', 'danger')
			}
		    })
	    },
	}
    }
</script>
