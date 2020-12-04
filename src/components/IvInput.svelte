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
    <div class="input-iv">
        <input type="number" id="ATK" bind:value={iv.ATK} on:change={handleChange}/>
        <label for="ATK">ATK</label>
    </div>

    <div class="divider"></div>
    <div class="input-iv">
        <input type="number" id="DEF" bind:value={iv.DEF} on:change={handleChange}/>
        <label for="DEF">DEF</label>
    </div>
    <div class="divider"></div>

    <div class="input-iv">
    	<input type="number" id="STA" bind:value={iv.STA} on:change={handleChange}/>
        <label for="STA">STA</label>
    </div>

</section>

<style>
	section {
        display: flex;
        flex-direction: row;
        align-content: space-around;
        margin: 10px 0px 10px 0px;
        border-bottom: 0.1em solid var(--light-grey);
	}

    .input-iv {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    label {
        color: var(--grey);
        font-weight: 100;
        font-size: small;
    }
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
        max-width: 50px;
        color: var(--ligh-black);
		text-align: center;
        font-weight: 500;
        border: none;
        background-color: transparent;
	}
	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
        margin: 0;
		max-width: 50px;
        color: var(--ligh-black);
		text-align: center;
        font-weight: 500;
        border: none;
        background-color: transparent;
	}

    .divider {
        height: 25px;
        align-self: center;
        border-width: 0.1em;
        border-style: solid;
        border-color: var(--light-grey);
    }
</style>
