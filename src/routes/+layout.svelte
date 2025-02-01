<script>
	import "../app.css";
	import Introduction from "../components/Introduction.svelte";
	import Portfolio from "../components/Portfolio.svelte";
	import Photos from "../components/Photos.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-[#fafafa] to-white">
	<!-- Фоновая карта мира -->
	<div class="fixed inset-0 -z-20">
		<svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
			<path 
				fill="currentColor" 
				class="text-black/[0.03]"
				d="M1553.1 371.4c-7.8-.7-15.5-1.3-23.1-1.9v339c7.6.6 15.3 1.2 23.1 1.9 19.4 1.7 39.9 3.7 59.4 5.7-41.1 4.2-83.5 8.5-123.6 11.1-40.8 2.6-76.9 3.9-109.1 3.9-32.1 0-68.3-1.3-109.1-3.9-40.1-2.6-82.5-6.9-123.6-11.1-19.5-2-40-4-59.4-5.7z"
			/>
		</svg>
	</div>

	<!-- Верхняя часть -->
	<div class="w-full min-h-[800rem] py-[60rem] lg:py-[100rem] bg-gradient-to-br from-[--skyblue]/30 via-white to-[--pink]/20 flex items-center justify-center relative overflow-hidden">
		<div class="w-full max-w-[1440rem] px-[20rem] lg:px-[80rem]">
			<Introduction />
		</div>
	</div>

	<!-- Основной контент -->
	<div class="w-full flex justify-center">
		<div class="w-full max-w-[1440rem] px-[20rem] lg:px-[80rem] flex flex-col gap-[100rem] lg:gap-[200rem] pb-[80rem] lg:pb-[150rem] mt-[60rem] lg:-mt-[100rem] relative z-10">
			<!-- Секции -->
			<div class="flex flex-col gap-[80rem] lg:gap-[150rem]">
				<!-- Работа -->
				<div class="bg-white/70 backdrop-blur-md rounded-[30rem] lg:rounded-[50rem] p-[30rem] lg:p-[80rem] shadow-[0_20rem_60rem_rgba(0,0,0,0.03)]">
					<Portfolio />
				</div>

				<!-- Отдых -->
				<div class="bg-white/70 backdrop-blur-md rounded-[30rem] lg:rounded-[50rem] p-[30rem] lg:p-[80rem] shadow-[0_20rem_60rem_rgba(0,0,0,0.03)]">
					<Photos />
				</div>
			</div>

			<!-- Футер -->
			<Footer />
		</div>
	</div>

	<!-- Фоновые декоративные элементы -->
	<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-[40%] left-[20%] w-[600rem] lg:w-[800rem] h-[600rem] lg:h-[800rem] rounded-full bg-[--skyblue]/5 blur-[150rem] animate-pulse-slow" />
		<div class="absolute bottom-[20%] right-[30%] w-[600rem] lg:w-[800rem] h-[600rem] lg:h-[800rem] rounded-full bg-[--purpur]/5 blur-[150rem] animate-pulse-slow delay-2000" />
	</div>
</div>

<style>
	.shadow-xl {
		box-shadow: 0 20rem 60rem rgba(0, 0, 0, 0.05);
	}

	@keyframes pulse-slow {
		0%, 100% { opacity: 0.7; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.05); }
	}

	.animate-pulse-slow {
		animation: pulse-slow 8s ease-in-out infinite;
	}

	.delay-1000 {
		animation-delay: -2s;
	}

	.delay-2000 {
		animation-delay: -4s;
	}

	.delay-3000 {
		animation-delay: -6s;
	}
</style>
