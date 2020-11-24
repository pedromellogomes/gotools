<script>
    import { pokeList } from '../data/data';
	import { Pokemon } from '../store';
	import { pokeAPI } from '../services/go-service';

	let src, name;
	Pokemon.subscribe(value => {
		src = value.sprites.front_default;
		name = value.name;
	});

	function handleChange(e) {
		let found = pokeList.find(pokemon => pokemon.name === e.target.value);
		if(found) pokeAPI(found.name).then(value => Pokemon.set(value));
	}
</script>

<section>
	{#if $Pokemon}
		<img {src} alt="pokemon"/>
	{:else}
		<p>
			Loading...
		</p>
	{/if}
	<input list="poke-list" type="text" bind:value={name} on:change={handleChange}/>
	<datalist id="poke-list">
		{#each pokeList as poke}
			<option value="{poke.name}">{poke.full_name}</option>
		{/each}
	</datalist>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 2fr 1fr;
	}

	img {
		display: flex;
		justify-self: center;
	}

	input {
		text-align: center;
	}


</style>
