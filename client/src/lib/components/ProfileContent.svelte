<script lang="ts">
    import html_logo from "$lib/assets/html5_logo.svg";
    export let img: string;
</script>


<section class="category">
    <div class="title-img">
        <img src={img} alt="category-img">
    </div>
    <h1>
        <slot name="title-h1">
            Неизвестно
        </slot>
    </h1>
    <div class="content">
        <span class="description">
            <slot name="description">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </slot>
        </span>
        <div class="stack">
            <div class="title_content">
                <h1>Рабочий стек</h1>
                <h1 class="h1-shadow">Рабочий стек</h1>
            </div>
                <slot name="stack">
                    <span>
                        <img src={html_logo} alt="logo">, Pug, Slim, CSS, Sass, Git
                    </span>
                </slot>
        </div>
        <div class="tools">
            <div class="title_content">
                <h1>Инструменты</h1>
                <h1 class="h1-shadow">Инструменты</h1>
            </div>
            <slot name="tools">
                <span>
                    Astro JS<br>Bitbucket<br>Bootstrap<br>Bulma<br>Codekit<br>Github<br>Netlify<br>Tailwind CSS<br>VS Code
                </span>
            </slot>
        </div>
    </div>
</section>


<style>
    .category {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 10px;
        box-shadow: rgba(0,0,0,0.2) 0 8px 24px;
        background-size: 25px 25px;
        background-image: repeating-linear-gradient(45deg, #e7e7e760 0, #e7e7e760 1px, #fff 0, #fff 50%);
        margin: 0 10px;  
        padding: 5px 0;  
    }
    .category:first-child {
        margin-left: 0;
    }
    .category:last-child {
        margin-right: 0
    }

    .category span {
        font-size: 16px;
        color: #000;
    }
    .category .title-img {
        margin: 15px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        border-radius: 50%;
        padding: 15px;
        background: #5BE9B9;
    }
    .category .title-img img {
        width: 60px;
        height: 60px;
    }
    .category h1 {
        font-size: 20px;
        font-weight: 700;
        margin: 10px 0 0;
    }
    .category .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
    }
    .category .content .description {
        margin: 10px;
        width: 95%;
        text-align: center;
        &::after {
            content: " ";
            border: 1px solid #747fe0;
            display: block;
            margin: 15px auto 0;
        }
    }
    .category .content div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 95%;
        position: relative;
    }

    .category .content div .title_content {
        position: relative;
        width: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #fff3;
        box-shadow: #0003 0 8px 24px;
        padding: 0 10px;
        border-radius: 15px;
        margin-top: 25px;
        top: 10px;
        align-self: flex-start;
    }
    .category .content div h1 {  
        font-size: 16px;
    }
    .category .content div h1.h1-shadow {
        position: absolute;
        top: 0;
        left: 7px;
        opacity: 0.15;
        white-space: nowrap;
        line-height: 1.6;
    }
    .category .content div span {
        text-align: center;
        display: flex;
    }
    .category .content .stack img {
        height: 25px;
        width: 25px;
    }
</style>