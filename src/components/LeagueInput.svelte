<script>
	import { Leagues, League } from '../store';

	function onClickEvent(e) {
		League.set(e.target.defaultValue);
	}
</script>

<section>
    <h1>Leagues</h1>
    <div class="league-options">
        <div class="option">
            <label for="great">Baby</label>
            <input type="radio" name="league" value={Leagues.BABY} on:click={onClickEvent} />
        </div>
        <div class="option">
            <label for="great">Great</label>
            <input type="radio" name="league" value={Leagues.GREAT} on:click={onClickEvent} checked />
        </div>
        <div class="option">
            <label for="ultra">Ultra</label>
            <input type="radio" name="league" value={Leagues.ULTRA} on:click={onClickEvent} />
        </div>
    </div>
</section>

<style>
	section {
		display: grid;
        justify-content: center;
	}

    .league-options {
        display: flex;
    }
    .option {
        display: flex;
        flex-direction: column;
        margin: 0px 10px 0px 10px;
    }
    h1 {
        color: var(--ligh-black);
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 500;
        padding: 5px;
        border-bottom: 0.2em solid var(--ligh-black);
        max-width: 150px;
    }

    label {
        color: var(--grey);
        font-weight: 100;
        font-size: small;
    }
</style>
