<script lang="ts">
    export let img;
    export let name;
    export let dots = ["full", "full", "middle", "empty"];
</script>

<div class="stack-item">
    <div class="left">
        <img src={img} alt="nest logo">
    </div>		
    <div class="right">
        <span class="title">{name}</span>
        <div class="dots">
            <div class="dot {dots[0]}"></div>
            <div class="dot {dots[1]}"></div>
            <div class="dot {dots[2]}"></div>
            <div class="dot {dots[3]}"></div>
        </div>
    </div>
</div>	

<style>
    .stack-item {
		margin: 10px;
		display: flex;
		flex-direction: row;
	}
	.stack-item .left {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}
	.stack-item .left img {
		height: 35px;
		width: 35px;
	}
	.stack-item .right {
		display: flex;
		flex-direction: column;
		font-weight: 600;
		align-items: center;
	}
	.dots {
		display: flex;
		flex-direction: row;
		margin-top: 5px;
	}
	.dots .dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-right: 5px;
		box-shadow: #00000070 0 8px 24px;
	}
	.dots .dot:last-child {
		margin-right: 0;
	}
	.dots .dot.full {
		background: #000;
	}
	.dots .dot.middle {
		background: #000;
		width: 8px;
		height: 8px;
		border: 2px solid #c3c3c3;
	}
	.dots .dot.empty {
		background: #c3c3c3;
	}
</style>