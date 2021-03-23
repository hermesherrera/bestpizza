<template>
    <div class="main_title">
	<div class="title">{{ title }}</div>
	<div class="description">{{ description }}</div>
    </div>
</template>

<script>
    export default {
	props: {
	    title: String,
	    description: String
	}
    }
</script>

<style scoped>
    .main_title {
	margin-top: 100px;
    }

    .title {
	font-size: 26px;
	font-weight: bold;
    }

    .description {
	font-size: 14px;
	font-weight: normal;
	color: #626567;
    }

    @media (max-width: 920px) {
	.main_title {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    margin-top: 0px;
	}
	.title {
	    font-size: 20px;
	}
    }
</style>
