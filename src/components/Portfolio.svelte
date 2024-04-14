<script>
    import DotsIcon from '$lib/images/icon/black_dots.svg?raw'
    import VisualDriverImage from '$lib/images/project/visual_driver.jpg'
</script>

<div class="flex flex-col gap-[100rem]">
    <div class="flex">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ПОРТФОЛИО
        </p>
        <p class="text-[32rem] font-sans w-full">
            Пет проекты и опенсорс
        </p>
        <div>
            {@html DotsIcon}
        </div>
    </div>
    <div class="max-w-[1720rem] flex flex-wrap gap-[80rem]">
        <div class="w-[820rem] h-[519rem] rounded-[7rem] overflow-hidden relative">
            <img class="w-full object-cover object-top scale-150" src={VisualDriverImage} alt="Visual Driver"/>
            <div class="absolute bottom-0 w-full h-[314rem] bg-[--blue]">

            </div>
        </div>
    </div>
</div>