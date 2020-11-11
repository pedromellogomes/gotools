<script lang="ts">
    import { pokemons } from "../data/Pokemons";
    export let value = undefined;

	
	let name = 'Azumarill';
	$: if(name !== "") {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
		.then(async (res) => {
			value = await res.json()
		}).catch(async (err) => undefined);
	}
</script>

<main>
	{#if value}
		<img src="{value.sprites.front_default}" alt="pokemon"/>
	{:else}
		<p>
			NaN	
		</p>
	{/if}
	<input list="poke-list" type="text" bind:value={name} />
	<datalist id="poke-list">
		{#each pokemons as poke}
			<option value="{poke.name}">{poke.full_name}</option>
		{/each}
	</datalist>
</main>

<style>
	main {
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
