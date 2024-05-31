<script lang="ts">
	import ProfileContent from "$lib/components/ProfileContent.svelte";
    import ContactButton from "$lib/components/ContactButton.svelte";
    import Intrument from "$lib/components/Intrument.svelte";
    import Project from "$lib/components/Project.svelte";
    import Header from "$lib/components/Header.svelte";
	import frontend_logo from "$lib/assets/frontend_logo.png";
    import html_logo from "$lib/assets/html5_logo.svg";
    import css_logo from "$lib/assets/css3_logo.svg";
	import javascript_logo from "$lib/assets/javascript_logo.svg";
	import typescript_logo from "$lib/assets/typescript_logo.svg";
	import svelte_logo from "$lib/assets/svelte_logo.svg";
	import socket_io_logo from "$lib/assets/socket-io_logo.svg";
	import backend_logo from "$lib/assets/backend_logo.png";
	import bash_logo from "$lib/assets/bash_logo.svg";
	import figma_logo from "$lib/assets/figma_logo.svg";
	import handlebars_logo from "$lib/assets/handlebars_logo.svg";
	import nest_logo from "$lib/assets/nest_logo.svg";
	import github_logo from "$lib/assets/github_logo.svg";
	import prisma_logo from "$lib/assets/prisma_logo.svg";
	import node_logo from "$lib/assets/node_logo.svg";
	import postgresql_logo from "$lib/assets/postgresql_logo.svg";
	import docker_logo from "$lib/assets/docker_logo.svg";
	import swagger_logo from "$lib/assets/swagger_logo.svg";
	import vscode_logo from "$lib/assets/vscode_logo.svg";
	import portfolio from "/portfolio.svg";
	import chat_ptk_logo from "/chat-ptk.png";
	import halva_logo from "/halva.png";
</script>

<svelte:head>
	<title>Портфолио</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="main">
	<section class="container">
		<section class="item profile">
			<Header/>
			<!-- ./header -->
			<div class="content">
				<ProfileContent 
					img={frontend_logo}
				>
					<span class="title-category" slot="title-h1">
						Frontend
					</span>
					
					<span slot="description">
						Опыт разработки клиентской части веб приложения состовляет 2 года. Первый год писав на чистом HTML и CSS. Второй год на Svelte + vite + TypeScript.
					</span>

					<div slot="stack" class="stack-content">
						<Intrument
							img={svelte_logo}
							name={"Svelte"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={javascript_logo}
							name={"JavaScript"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={typescript_logo}
							name={"TypeScript"}
							dots={["full", "full", "middle", "empty"]}
						/>
					</div>
					
					<div slot="tools" class="stack-content">
						<Intrument
							img={bash_logo}
							name={"Bash"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={socket_io_logo}
							name={"Socket io"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={vscode_logo}
							name={"VS Code"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={css_logo}
							name={"CSS"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={html_logo}
							name={"HTML"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={figma_logo}
							name={"Figma"}
							dots={["full", "full", "middle", "empty"]}
						/>
					</div>
				</ProfileContent>
				<!-- ./left card -->

				<ProfileContent 
					img={backend_logo}
				>
					<span class="title-category" slot="title-h1">
						Backend
					</span>
						
					<span slot="description">
						Опыт разработки серверной части составляет год. Первый месяц работал с Express и Fastify. Следующий месяц на Django от Python и все последующее время на Nest.js. 
					</span>

					<div slot="stack" class="stack-content">
						<Intrument
							img={nest_logo}
							name={"Nest"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={node_logo}
							name={"Node.js"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={typescript_logo}
							name={"TypeScript"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={swagger_logo}
							name={"Swagger"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={prisma_logo}
							name={"Prisma"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={socket_io_logo}
							name={"Socket io"}
							dots={["full", "full", "full", "middle"]}
						/>
					</div>
					
					<div slot="tools" class="stack-content">
						<Intrument
							img={bash_logo}
							name={"Bash"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={vscode_logo}
							name={"VS Code"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={docker_logo}
							name={"Docker"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={github_logo}
							name={"Git"}
							dots={["full", "full", "full", "middle"]}
						/>
						<Intrument
							img={handlebars_logo}
							name={"HBS"}
							dots={["full", "full", "middle", "empty"]}
						/>
						<Intrument
							img={postgresql_logo}
							name={"PostgreSQL"}
							dots={["full", "full", "middle", "empty"]}
						/>
					</div>
					</ProfileContent>
				<!-- ./right card -->
			</div>
			<!-- ./content -->
		</section>
		<!-- ./profile -->
		<h2 class="pre-title">
			Проекты
		</h2>
		<section class="item projects">
			<Project 
				image={chat_ptk_logo}
				name={"Чат ПТК"}
				description = {
					"Эта информационная система была создана как социальная сеть для студентов колледжей при НовГУ, а также для упрощения работы с сайтом portal.novsu.ru. В нем есть авторизация через аккаунт портала НовГУ, актуальные расписания и замены, чат группы и личные чаты, друзья и профиль. Этот проект я начал писать не зная ни одного настоящего инструмента или ЯП, но в течении разработки начал быстро осваиваться и расширять стек. Backend был написан на Nest.ts, со swagger для автоматической генерации документации по API, MVC для созданий отчетов, JWT для повышения безопасности, Bcrypt для хеширования паролей, ORM Prisma для работы с бд, Socket.io для работы с сокетами. Frontend разрабатывался на Svelte kit + TypeScript, с использованием JWT token."
				}
				skills={[
					"Svelte",
					"TypeScript",
					"JavaScript",
					"Node.js",
					"Nest.js",
					"Handlebars",
					"HTML",
					"CSS",
					"Docker",
					"Prisma",
					"PostgreSQL"
				]}
				site_url={"https://viseliza.site"}
				github_url={"https://github.com/viseliza/chat-ptk"}
			/>
			<Project 
				image={halva_logo}
				name={"Халва"}
				description = {
					"Этот скрипт, который был написан для акции в вк: https://vk.com/halvamall?w=wall-222600912_310. Суть акции в том, что пользователь должен собирать бонусы за минуту, после за эти бонусы можно было получить стикерпак, 3 голоса, промокод на VK Музыку на 30 дней. Суть скрипта состоит в том, чтобы собирать эти бонусы с помощью Socket.io, и после окончания игры заново запускать и собирать бонусы"
				}
				skills={[
					"JavaScript",
					"Node.js",
					"Socket.io"
				]}
				site_url={""}
				github_url={"https://github.com/viseliza/halva"}
			/>
			<Project 
				image={portfolio}
				name={"Сайт портфолио"}
				isThis={true}
				description = {
					"На этом сайте написана актуальная информация обо мне и чем я занимаюсь, акутальный стек, пул проектов и контакты для связи."
				}
				skills={[
					"Svelte",
					"TypeScript",
					"JavaScript",
					"HTML",
					"CSS",
					"Docker",
				]}
				site_url={"https://info.viseliza.site"}
				github_url={"https://github.com/viseliza/portfolio"}
			/>
		</section>
		<h2 class="pre-title">
			Контакты
		</h2>
	</section>
	<section class="item contacts">
		<ContactButton
			href={"mailto:nenyxen123@gmail.com"}
			icon={"fa fa-envelope"}
		/>
		<ContactButton
			href={"https://t.me/viseliza"}
			icon={"fab fa-telegram-plane"}
		/>
		<ContactButton
			href={"https://discordapp.com/users/1245324904115474528"}
			icon={"fab fa-discord"}
		/>
	</section>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 100%;
	}
	section {
		display: flex;
		flex-direction: column;
		max-width: 1000px;
		width: 100%;
	}
	.container .item {
		border-radius: 15px;
		margin: 10px 0;
	}
	.container .profile {
  		margin: 25px 0;
		display: flex;
		flex-direction: column;
	}
	.container .profile .content {
		height: 100%;
		display: flex;
		border-radius: 15px;
	}
	.container .profile .content .title-category::after {
		content: " ";
		border: 1px solid #747fe0;
		display: block;
		margin: 25px auto 0;
	}
	.stack-content {
		text-align: center;
		display: flex;
		width: 95%;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: rgba(255, 255, 255, .6);
		box-shadow: rgba(0,0,0,0.2) 0 8px 24px;
		padding: 10px 0;
		border-radius: 15px;
    }
	.pre-title {
		margin: 50px auto;
		&::after {
			content: " ";
			border: 4px solid #747fe0;
			display: block;
			margin: 25px auto 0;
			width: 50px;
		}
		&:last-child {
			margin-bottom: 10px;
		}
		&:last-child::after {
			content: none;
			border: none;
		}
	}
	.pre-title:last-child {
		margin-bottom: 20px;
	}
	.container .projects {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.contacts {
		display: flex;
		flex-direction: row;
		max-width: 100vw;
		width: 100%;
		justify-content: center;
		padding: 50px 0;
		background-image: linear-gradient(to bottom right, #747fe0, #4949ff);
	}
</style>
