<script>
    import '../app.css';
	import PlusIcon from '$lib/images/plus.svg?raw'
	import DotsIcon from '$lib/images/dots.svg?raw'
	import SquareIcon from '$lib/images/square.svg?raw'
    import SocialMedia from '../components/SocialMedia.svelte';
</script>

<div class="p-[100rem] text-[32rem] flex">
    <div class="flex gap-[80rem]">
        <div class="bg-avatar w-[820rem] h-[514rem] bg-center bg-cover rounded-[7rem] relative overflow-hidden">
			<div class="absolute bottom-0 left-0 backdrop-blur-[100rem] bg-black/10 w-full h-[234rem]">
				<div class="p-[30rem] text-[56rem] text-white font-bold font-oddval">
					АРТЁМ ЦАРЮК
				</div>
				<div class="px-[30rem] text-[32rem] text-white">
					Java/Kotlin разработчик
				</div>
				<div class="absolute bottom-0 left-0 p-[30rem]">
					{@html PlusIcon}
				</div>
				<div class="absolute bottom-0 right-0 p-[30rem]">
					{@html DotsIcon}
				</div>
				<div class="absolute top-0 right-0 p-[30rem]">
					{@html SquareIcon}
				</div>
			</div>
		</div>
        <div class="w-[820rem] h-[119rem] flex flex-col gap-[80rem]">
			<div class="w-[656rem] text-[32rem]/[150%]">
				Обладаю обширным опытом в создании Java-сервисов и обработке данных с целью аналитического использования.
			</div>
			<div class="text-[32rem] text-black flex gap-[20rem]">
				<SocialMedia media="VK" link="https://vk.com/funcid" color="--blue"/>
				<SocialMedia media="TELEGRAM" link="https://t.me/funcid" color="--skyblue"/>
				<SocialMedia media="GITHUB" link="https://github.com/funcid" color="--green"/>
			</div>
        </div>
    </div>

</div>