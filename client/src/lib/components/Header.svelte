<script lang="ts">
    import Technologies from "./Technologies.svelte";
import placeholder from "/50x50.svg";
</script>

<section class="header">
	<section class="top">
		<section class="left">
			<img src={placeholder} alt="placeholder">
		</section>
		<section class="right">
			<div class="title">
				<h1>Иванов Владислав Витальевич</h1>
				<h1 class="h1-shadow">Иванов Владислав Витальевич</h1>
			</div>
			<div class="description">
				<p><b>Пол</b>: Мужской</p>
				<p><b>Возраст</b>: 18 лет</p>
				<p><b>Город</b>: Великий Новгород</p>
				<p><b>Место учебы</b>: Политехнический колледж НовГУ, 4 курс</p>
			</div>
		</section>
	</section>
	<!-- ./section.top -->

	<section class="about">
		<div class="content">
			<span>
				<b>Обо мне</b>: Программирование для меня как хобби и работа. В основном использую Linux (Fedora). В колледже изучал языки: Python, Java, C++, C#, Kotlin, JavaScript. Пока что опыта коммерческой работы не было, кроме заказов сделать курсовую работу. Я быстро обучаюсь и готов выкладовать максимум сил в любимое дело, чтобы получать больше опыта и знаний.<br>В колледже дают только базовую информацию, по этому начал сам обучаться в области разработки сайтов. Начал с Django на Python, после перешел в разработку на JavaScript. Для клиентской части выбрал Svelte и для серверной Nest, но готов изучать и другие фреймворки. 
			</span>
		</div>
	</section>
	<!-- ./section.about -->
	
	<section class="bottom">
		<Technologies/>
	</section>
	<!-- ./section.bottom -->
</section>

<style>

	.header {
		background-size: 25px 25px;
  		background-image: repeating-linear-gradient(45deg,#e7e7e760 0,#e7e7e760 1px,#fff 0,#fff 50%);
		background-color: #fff;
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		box-shadow: #0003 0 8px 24px;
		padding: 25px;
		border-radius: 15px;
	}

	/********* TOP  **********/
	.header .top {
		display: flex;
		flex-direction: row;
	}
	.header .top .left {
		margin-right: 30px;
	}
	.header .top .left img {
		height: 150px;
		width: 150px;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
	}
	.header .top .right {
		display: flex;
		flex-direction: column;
	}
	.header .top .right .title {
		display: flex;
		position: relative;
		margin-bottom: 20px;
	}
	.header .top .right .title h1 {
		font-size: 20px;
		font-weight: 700;
	}
	.header .top .right .title .h1-shadow {
		position: absolute;
		top: 0;
		left: -2px;
		opacity: 0.15;
		white-space: nowrap;
		line-height: 1.5;
	}

	/********* ABOUT  **********/
	.header .about {
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 15px;
		margin: 20px 0;
	}
	
	.header .about .content {
		display: flex;
		width: 100%;
		background-color: #fff9;
		box-shadow: #0003 0 8px 24px;
		border-radius: 15px;
		word-wrap: anywhere;
	}
	.header .about .content span {
		padding: 20px;
		text-align: justify;
	}
	/********* BOTTOM  **********/
	.header .bottom {
		padding: 20px;
		display: flex;
		background-color: #fff9;
		box-shadow: #0003 0 8px 24px;
		border-radius: 15px;
		word-wrap: anywhere;
	}
</style>