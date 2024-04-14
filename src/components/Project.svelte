<script lang="ts">
    import SquareIcon from '$lib/images/icon/black_square.svg?raw'
    import BracketsIcon from '$lib/images/icon/black_brackets.svg?raw'

    export let background: string;
    export let title: string;
    export let description: string;
    export let color: string;
    export let blockSize: number;
</script>

<div class="w-[820rem] h-[519rem] rounded-[7rem] overflow-hidden">
    <img
        src={background}
        class="h-[calc(100%-{blockSize}rem)] w-full object-cover object-center"
        alt="{background} logo"
    />

    <div class="w-full h-[{blockSize}rem] bg-[{color}]">
        <div class="p-[30rem] h-full flex justify-between gap-[20rem]">
            <div class="w-[718rem] flex flex-col justify-between">
                <p class="text-[72rem] font-bold font-oddval">
                    {title}
                </p>
                <p class="text-[32rem] font-onest">
                    {description}
                </p>
            </div>
            <div class="w-[22rem] h-full flex flex-col justify-between">
                {@html SquareIcon}
                {@html BracketsIcon}
            </div>
        </div>
    </div>
</div>