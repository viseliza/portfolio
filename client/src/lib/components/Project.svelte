<script lang="ts">
	import github_logo from "$lib/assets/github_logo.svg";

    export let image: string;
    export let name: string;
    export let description: string;
    export let skills: string[];
    export let site_url: string;
    export let github_url: string;
    export let isThis = false;
</script>

<section class="project">
    <div class="left">
        <img style="height: {image.includes("chat-ptk") ? 75 : 100}%;" src={image} alt="">
    </div>
    <div class="middle"></div>
    <div class="right">
        <h3>
            {name}
            {#if isThis}
                (<span class="this">this</span>)
            {/if}
        </h3>
        <span class="description">{description}</span>
        <section class="list skills">
            {#each skills as skill}
                <div class="item skill">{skill}</div>
            {/each}
        </section>
        <section class="list links">
            {#if site_url}
                <a target="_blank" href={site_url} class="item link">
                    <span>Live demo</span>
                    <i class="fa fa-external-link"></i>
                </a>
            {/if}
            <a target="_blank" href={github_url} class="item link link-github">
                <img style="width: 14px; height: 14px; margin-right: 8px;" src={github_logo} alt="github">  
                <span style="margin-right: 0;">Live demo</span>
            </a>
        </section>
    </div>
</section>

<style>
    .project {
        width: 100%;
        height: 400px;
        display: flex;
        box-shadow: rgba(0,0,0, 0.2) -5px 5px, rgba(0,0,0, 0.2) -10px 10px, rgba(0,0,0, 0.2) -15px 15px;    
        border: 1px solid #0003;
        background-color: #fff;
        margin: 30px 0;
        position: relative;
    }
    .project:first-child {
        margin-top: 0;
    }
    .project:last-child {
        margin-bottom: 0;
    }
    .project .left {
        background-color: #0003;
        display: flex;
        align-items: center;
    }
    .project .left img {
        height: 100%;
        width: 300px;
        object-fit: cover;
        padding-left: 10px;
    }
    .project .middle {
        max-width: 50px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg,#0000,rgb(255, 255, 255));
        position: absolute;
        left: 260px;
    }
    .project .right {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto; 
        padding: 50px;
    }
    .project .right h3 {
        color: #525f7f;
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 20px;
    }
    .project .right h3 .this {  
        color: #3294c9;
        font-weight: 700;
    }
    .project .right .description {
        flex: 1 1 auto;
        overflow-y: auto;
        text-align: justify;
        padding-right: 10px;
    }
    .project .right .list {
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        flex-wrap: wrap;
    }
    .project .right .list .item {
        padding: 8px;
        border: 2px solid #92eac0;
        border-radius: 4px;
        font-size: 14px;  
        font-weight: 600;
        margin: 5px 10px 5px 0;
        display: flex;
        align-items: center;
    }
    .project .right .list .links {
        margin-bottom: 0;
    }
    .project .right .list .link {
        padding: 10px;
        background-color: rgb(73, 73, 255);
        border: none;
        color: #e7e7e7;
		box-shadow: #0003 0 8px 24px;
        transition: background .3s linear;
        &:hover {
            cursor: pointer;
            background-color: rgb(57, 57, 197);
        }
    }
    .project .right .list .link.link-github {
        background-color: #fff;

        color: rgb(73, 73, 255);
        &:hover {
            cursor: pointer;
            background-color: #d8d8d8;
        }
    }
    .project .right .list .link span {
        margin-right: 8px;
    }
    .project .right .list .item:last-child {
        margin-right: 0;
    }
</style>