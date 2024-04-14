<script>
    import DotsIcon from "$lib/images/icon/black_dots.svg?raw";
    import Project from "./Project.svelte";
    import Projects from "../constants/projects"
</script>

<div class="flex flex-col gap-[100rem]">
    <div class="flex">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ПОРТФОЛИО
        </p>
        <p class="text-[32rem] font-onest w-full">Пет проекты и опенсорс</p>
        <div>
            {@html DotsIcon}
        </div>
    </div>

    <div class="max-w-[1720rem] flex flex-wrap gap-[80rem]">
        {#each [...Projects] as elem}
            <Project
                background={elem.background}
                title={elem.title}
                description={elem.description}
                color={elem.color}
                blockSize={elem.blockSize}
                height={elem.height}
                width={elem.width}
            />
        {/each}
    </div>
</div>
