<script>
    import { IV } from '../store';

	let iv;
	IV.subscribe(value => iv = value);

    function handleChange(e) {
        if(e.target.value >= 0 && e.target.value <= 15) {
            iv[e.target.id] = parseInt(e.target.value);
            IV.set(iv);
        } else {
            iv[e.target.id] = 0;
            IV.set(iv);
        }
    }
</script>

<section>
	<p>ATK</p>
	<input type="number" id="ATK" bind:value={iv.ATK} on:change={handleChange}/>
	<p>DEF</p>
	<input type="number" id="DEF" bind:value={iv.DEF} on:change={handleChange}/>
	<p>STA</p>
	<input type="number" id="STA" bind:value={iv.STA} on:change={handleChange}/>
</section>

<style>
	section {
        margin: 10px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 15px;
		justify-items: center;
	}
	p {
		align-self: center;
		grid-area: 1;
        margin: 0;
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
