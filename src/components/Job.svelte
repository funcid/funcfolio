<script lang="ts">
	export let icon: string;
    export let jobName: string;
    export let date: string;
    export let position: string;
</script>

<div class="min-w-[820rem] h-[160rem] flex gap-[30rem]">
    <img src={icon} alt={jobName}/>
    <div class="flex flex-col h-full justify-between">
        <p class="text-[56rem] font-bold font-oddval">{jobName}</p>
        <p class="font-sans text-[24rem]/[128%]">
            {date}<br/>
            {position}
        </p>
    </div>
</div>
