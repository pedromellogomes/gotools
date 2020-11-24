<script>
	import { Leagues, League } from '../store';

	function onClickEvent(e) {
		League.set(e.target.defaultValue);
	}
</script>

<section>
	<p for="great">Baby</p>
	<input type="radio" name="league" value={Leagues.BABY} on:click={onClickEvent} />

	<p for="great">Great</p>
	<input type="radio" name="league" value={Leagues.GREAT} on:click={onClickEvent} checked />

	<p for="ultra">Ultra</p>
	<input type="radio" name="league" value={Leagues.ULTRA} on:click={onClickEvent} />
</section>

<style>
	section {
        margin: 10px;
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	p {
		grid-area: 1;
		margin: 0;
	}
</style>
