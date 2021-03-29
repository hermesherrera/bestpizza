<template>
    <div class="not_found">
	<div><i class="fas fa-store-slash icon"></i></div>
	<div class="text">No se ha encontrado la pizzería</div>
    </div>
</template>

<style scoped>
    .not_found {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	flex-flow: column;
    }

    .text {
	text-align: center;
	font-size: 24px;
	color: #626567;
    }

    .icon {
	font-size: 80px;
	color: #626567;
	margin-bottom: 20px;
    }
</style>
