<script>
    import DotsIcon from '$lib/images/black_dots.svg?raw'
    import MtsImage from '$lib/images/mts.png'
</script>

<div class="flex flex-col gap-[100rem]">
    <div class="flex">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ОПЫТ
        </p>
        <p class="text-[32rem] font-sans w-full">
            Должности
        </p>
        <div>
            {@html DotsIcon}
        </div>
    </div>
    <div class="w-full flex gap-[80rem]">
        <div class="w-[820rem] h-[160rem] flex gap-[30rem]">
            <img src={MtsImage} alt="MTS Digital"/>
            <div class="flex flex-col h-full justify-between">
                <p class="text-[56rem] font-bold font-oddval">МТС БАНК</p>
                <p class="font-sans text-[24rem]/[128%]">
                    Москва, c 2023 г.<br/>
                    Lead Software Engineer
                </p>
            </div>
        </div>


        <div>
            Сбер
        </div>
        <div>
            Криста
        </div>
    </div>
</div>