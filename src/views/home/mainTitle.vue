<template>
    <div class="main_title">
	<div class="title">
	    {{ title }}
	</div>
	    <div class="line"></div>
    </div>
</template>

<script>
    export default {
	props: {
	    title: String
	}
    }
</script>

<style scoped>
    .main_title {
	text-align: center;
	margin-top: 100px;
    }
    .title {
	font-size: 20px;
	color: #626567;
	text-align: left;
	margin-left: 10px;
    }

    .line {
	border-bottom: 2px solid #dc7633;
	width: 100px;
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
	    font-size: 14px;
	    margin-left: 10px;
	    margin-right: 10px;
	}

	.line {
	    width: 20%;
	}
    }
</style>
