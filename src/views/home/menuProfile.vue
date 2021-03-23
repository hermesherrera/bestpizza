<template>
    <div class="profile">
	<b-icon
	    class="h1 mb-2"
	    icon="person-circle"
	></b-icon>
    </div>
</template>

<style scoped>
    .profile {
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	margin: 20px;
    }

    @media (max-width: 920px){
	.profile {
	    position: absolute;
	    left: calc(100% - 80px);
	}
    }
</style>
