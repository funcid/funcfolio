<script lang="ts">
	import LinkIcon from '$lib/images/icon/link.svg?raw'

	export let color: string;
    export let media: string;
    export let link: string;
</script>

<button on:click={() => window.open(link)} class="text-[32rem] text-black h-[83rem] flex items-center justify-center gap-[50rem] px-[30rem] rounded-[7rem]" style="background-color: var({ color })">
    {media} {@html LinkIcon} 
</button>
