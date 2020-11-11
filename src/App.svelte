<script>
	import SearchPokemon from "./components/SearchPokemon.svelte";
	import IvInput from "./components/IvInput.svelte";
	import Ranking from "./components/Ranking.svelte";

	let pokemon;
	let iv = { atk: 0, def: 15, sta: 15 };
	let league = 1500;

	$: ranking = calcRanking(pokemon, league);
	function calcRanking(pokemon, league) {
		return [{}];
	}

	$: position = calcPosition(ranking, iv);
	function calcPosition(rangkin, iv) {
		return {};
	};
	
</script>

<main>
	<header>
	</header>
	<aside>

	</aside>
	<section>
		<SearchPokemon bind:value={pokemon} />
		<IvInput bind:value={iv} />
		<Ranking />
	</section>
	<footer>
	</footer>
</main>



<style>
	:global(body) {
		padding: 0;
		color: white; /* color: #f15252; */ 
		background-color: #2c2f33;
	}

	main {
		display: grid;
		height: 100%;
		grid-gap: 10px;
		justify-items: center;
		align-items: center;
		grid-template-columns: 1fr 4fr 1fr;
		grid-template-rows: 1fr 6fr 1fr;
		grid-template-areas:
            "nav nav nav"
            "aside1 content aside2"
            "aside1 content aside2";
	}

	header {
		background-color: green;
		grid-area: nav;
	}

	aside {
		background-color: blue;
		grid-area: aside1;
	}	
	section {
		grid-area: content;
	}

	footer {
		background-color: darkslateblue;
		grid-area: aside2;
	}

	@media(max-width: 800px) {
		main {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 6fr 1fr;
			grid-template-areas:
            "nav"
            "aside1"
            "content"
			"aside2";
		}
	}
</style>
