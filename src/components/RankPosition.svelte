<script>
    import App from '../App.svelte';
import { Pokemon, Position } from '../store';

    Position.subscribe((value) => {
        console.log(value);
    })
</script>

<section>
    <div class="position">
        <h1>#{$Position.index + 1} - {$Position.pokemon.cp}</h1>

    </div>
    <div class="base-stats">
        <h2>ATK: {$Position.pokemon.baseStats.ATK}</h2>
        <h2>DEF: {$Position.pokemon.baseStats.DEF}</h2>
        <h2>STA: {$Position.pokemon.baseStats.STA}</h2>
    </div>

</section>


<style>
    section {
        color: var(--white);
    }

    h1 {
        font-size: 3em;
    }

    .base-stats {
    }
</style>
