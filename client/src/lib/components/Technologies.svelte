<script lang="ts">
    let isTechnologies = [true, false, false, false, false];
    let currentIndex = 0;
    const technologies = [
        ["Python", "JavaScript", "Java", "C#", "Pascal", "Kotlin", "C++", "HTML", "CSS"],
        ["Nest.js", "Svelte", "TypeScript", "Socket io", "Prisma", "Cron", "Django"],
        ["Модуль", "MVC"],
        ["VS Code", "Node.js", "npm", "Prettier", "Google Chrome", "Firefox"],
        ["Ответственность", "Дисциплина", "Тайм-менеджмент", "Саморазвитие", "Честность"]
    ]

    function swapTechnologie(technologieIndex: number) { 
        isTechnologies = isTechnologies.map((isTechnologies, index) => isTechnologies = index != technologieIndex ? false : true);
        currentIndex = technologieIndex;
    }
</script>

<section class="technologies-block">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <section class="technologies-choose">
        <span on:click={() => swapTechnologie(0)} class="technologie technologie_{isTechnologies[0]}">Языки программирования</span>
        <span on:click={() => swapTechnologie(1)} class="technologie technologie_{isTechnologies[1]}">Технологии</span>
        <span on:click={() => swapTechnologie(2)} class="technologie technologie_{isTechnologies[2]}">Паттерны</span>
        <span on:click={() => swapTechnologie(3)} class="technologie technologie_{isTechnologies[3]}">Инструменты</span>
        <span on:click={() => swapTechnologie(4)} class="technologie technologie_{isTechnologies[4]}">Гибкие навыки</span>
    </section>
    <section class="technologies">
        {#each technologies[currentIndex] as item}
            <span class="item">{item}</span>
        {/each}
    </section>
</section>

<style>

.technologies-block {
    display: flex;
    flex-direction: column;
}

.technologies-block .technologies-choose, .technologies {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}

.technologies-block .technologies-choose .technologie {
    font-weight: 700;
    margin: 0 5px;
    transition: border .3s linear;
    padding: 5px 10px;
    border-radius: 10px;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
}
.technologies-block .technologies-choose .technologie.technologie_false {
    border: 2px solid transparent;
    &:hover {
        cursor: pointer;
    }
}
.technologies-block .technologies-choose .technologie.technologie_true {
    border: 2px solid rgba(0,0,0,0.7);
}

.technologies-block .technologies .item {
    margin: 5px;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 700;
    background-color: #991b1b;
    color: #e7e7e7;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
}

</style>