<script>
    import { Position } from '../store';
</script>

<section>
    <div class="position">
        <h1>#{$Position.index + 1} - {$Position.pokemon.cp}</h1>
    </div>
    <div class="base-stats">
        <h2>ATK: {$Position.pokemon.baseStats.ATK} - SHADOW: {$Position.pokemon.shadowStats.ATK}</h2>
        <h2>DEF: {$Position.pokemon.baseStats.DEF} - SHADOW: {$Position.pokemon.shadowStats.DEF}</h2>
        <h2>STA: {$Position.pokemon.baseStats.STA} - SHADOW: {$Position.pokemon.shadowStats.STA}</h2>
    </div>

</section>


<style>
    section {
        color: var(--white);
    }

    h1 {
        font-size: 3em;
    }

</style>
