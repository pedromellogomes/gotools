<script>
    import  CardTypes from './CardTypes.svelte';
    import  CardStats from './CardStats.svelte';
    import { Pokemon, Position } from '../../store.js';


    let position, cp, src, name, types, stats;

    Position.subscribe((value) => {
        position = value.index + 1;
        cp = value.pokemon.cp;
        stats = value.pokemon.baseStats;
    });

    Pokemon.subscribe((value) => {
        src = value.sprites.front_default;
        name = value.name;

        types = [];
        for(const element of value.types) {
            const type = element.type.name;
            types.push({ type: type, src: `./assets/icon/${type}.webp` });
        }
    });
</script>



<section class="card">
    <div class="card-head">
        <h1>
            #<span>{position}</span>
            <br>
            CP<span>{cp}</span>
        </h1>
        <img {src} alt="pokemon"/>
    </div>

    <div class="card-body">
        <div class="name">
            {name}
            <div class="health-bar"></div>
        </div>

        <CardTypes bind:value={types} />

        <CardStats bind:value={stats} />
    </div>
</section>

<style>
    .card {
        display: grid;
        text-align: center;
        justify-items: center;
        margin: 5px;
    }

    .card-head {
        color: var(--white);
        z-index: 1;
    }

    span {
        font-size: 24px;
    }

    .card-body {
        position: relative;
        top: -50px;
        padding: 25px;
        border-radius: 3px;
        background-color: var(--white);
        color: var(--ligh-black);
    }

    .name {
        display: flex;
        flex-direction: column;
        padding: 10px;
        text-transform: capitalize;
        font-weight: 500;
        font-size: x-large;
    }

    .health-bar {
        width: 170px;
        margin: 8px;
        align-self: center;
        border-radius: 5px;
        border-bottom: 5px solid #6DEEB8;
    }
</style>
