<script lang="ts">
    import SquareIcon from '$lib/images/icon/black_square.svg?raw'
    import BracketsIcon from '$lib/images/icon/black_brackets.svg?raw'

    export let background: string;
    export let title: string;
    export let description: string;
    export let color: string;
    export let blockSize: number;
    export let height: number = 519;
    export let width: number = 820;
</script>

<div class="w-[820rem] rounded-[7rem] overflow-hidden" style="height: {height}rem; width: {width}rem">
    <img
        src={background}
        class="w-full object-cover object-center"
        alt="{background} logo"
        style="height: calc(100% - {blockSize}rem)"
    />

    <div class="w-full" style="background: var({color}); height: {blockSize}rem">
        <div class="p-[30rem] h-full flex justify-between gap-[20rem]">
            <div class="w-full flex flex-col justify-between">
                <p class="text-[72rem] font-bold font-oddval">
                    {@html title}
                </p>
                <p class="w-full text-[32rem] font-onest">
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