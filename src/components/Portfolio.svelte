<script>
    import DotsIcon from "$lib/images/icon/black_dots.svg?raw";
    import SquareIcon from '$lib/images/icon/black_square.svg?raw'
    import BracketsIcon from '$lib/images/icon/black_brackets.svg?raw'
    import VisualDriverImage from "$lib/images/project/visual_driver.jpg";
</script>

<div class="flex flex-col gap-[100rem]">
    <div class="flex">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ПОРТФОЛИО
        </p>
        <p class="text-[32rem] font-sans w-full">Пет проекты и опенсорс</p>
        <div>
            {@html DotsIcon}
        </div>
    </div>

    <div class="max-w-[1720rem] flex flex-wrap gap-[80rem]">
        <div class="w-[820rem] h-[519rem] rounded-[7rem] overflow-hidden">
            <img
                src={VisualDriverImage}
                class="h-[calc(100%-314rem)] w-full object-cover object-center"
                alt="{VisualDriverImage} logo"
            />

            <div class="w-full h-[314rem] bg-[--blue]">
                <div class="p-[30rem] h-full flex justify-between gap-[20rem]">
                    <div class="w-[718rem] flex flex-col justify-between">
                        <p class="text-[72rem] font-bold font-oddval">
                            VISUAL<br />DRIVER
                        </p>
                        <p class="text-[32rem] font-sens">
                            Движок для Minecraft, общий набор визуальных решений
                        </p>
                    </div>
                    <div class="w-[22rem] h-full flex flex-col justify-between">
                        {@html SquareIcon}
                        {@html BracketsIcon}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>