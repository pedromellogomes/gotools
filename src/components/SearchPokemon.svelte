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
			<img src="whoisthispokemon.png" alt="pokemon"/>
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
	}

	img {
		display: flex;
		justify-self: center;
	}

	input {
        max-width: 170px;
        padding-left: 15px;
        padding-right: 15px;
		justify-self: center;
        color: var(--ligh-black);
        text-align: center;
        text-transform: capitalize;
        font-weight: 500;
        font-size: x-large;
        border: none;
        border-bottom: 5px solid #6DEEB8;
        background-color: transparent;
	}

</style>
