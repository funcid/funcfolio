<script>
    import '../app.css';
    import Introduction from '../components/Introduction.svelte';
	import Experience from '../components/Experience.svelte';
    import Portfolio from '../components/Portfolio.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<div class="p-[100rem] text-[32rem] flex flex-col gap-[200rem]">
	<Introduction/>
	<Experience/>
	<Portfolio/>
	<Footer/>
</div>