<template>
    <div>
	<b-input-group size="sm">
	    <b-form-input 
		:placeholder=placeholder	
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
    export default {
	props: {
	    placeholder: String
	}
    }
</script>
