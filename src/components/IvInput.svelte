<script>
    export let value = undefined;
</script>	

<section>
	<label for="attack">ATK</label>
	<input type="number" min="0" max="15" bind:value={value.atk} id="attack" />
	<label for="defense">DEF</label>
	<input type="number" min="0" max="15" bind:value={value.def} id="defense"/>
	<label for="stamina">STA</label>
	<input type="number" min="0" max="15" bind:value={value.sta} id="stamina"/>
</section>

<style>
	section {
		display: grid;
		grid-gap: 15px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		justify-items: center;
	}

	label {
		align-self: center;
		grid-area: 1;
	}
	
    /* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		text-align: center;
		margin: 0;
	}
	
    /* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
		text-align: center;
		max-width: 50px;
    }
</style>
