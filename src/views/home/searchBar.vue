<template>
    <div class="mt-3">
	<b-input-group size="sm">
	    <b-form-input 
		:placeholder=placeholder	
		@input="storesListFilter"
	    ></b-form-input>
	    <b-input-group-append>
		<b-input-group-text>
		    <b-icon icon="search"></b-icon>
		</b-input-group-text>
	    </b-input-group-append>
	</b-input-group>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
	props: {
	    placeholder: String
	},

	methods: {
	    ...mapActions(['storesListFilter'])
	},

    }
</script>
