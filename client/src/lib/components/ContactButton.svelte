<script lang="ts">
    export let href: string;
    export let icon: string;
</script>

<a href={href} target="_blank">
    <i class={icon}></i>
</a>

<style>
    a {
        padding: 15px;
		box-shadow: #0003 0 8px 24px;
        border-radius: 50%;
        display: flex;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.7);
        transition: background .4s linear, color .4s linear;
        margin: 0 25px;
        background-color: #e7e7e7;
    }
    a:first-child {
        margin-left: 0;
    }
    a:last-child {
        margin-right: 0;
    }
    a:hover {
        color: #e7e7e7;
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>