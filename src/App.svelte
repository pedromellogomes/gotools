<script>
    import SearchPokemon from "./components/SearchPokemon.svelte";
    import IvInput from "./components/IvInput.svelte";
    import LeagueInput from "./components/LeagueInput.svelte";
    import Rank from "./components/Rank.svelte";
    import RankPosition from "./components/RankPosition.svelte";
</script>

<main>
    <h1>GO Tools</h1>
    <section>
        <div class="data-input">
            <SearchPokemon />
            <IvInput />
            <LeagueInput />
        </div>
        <div class="position">
            <RankPosition />
        </div>
        <div class="rank">
            <Rank />
        </div>
    </section>
</main>



<style>
    :root {
        --white: #fafafa;
        --black: #333533;
    }
	:global(body) {
        font-family: 'Rubik', sans-serif;
        background-color: var(--black);
        padding: 0;
	}

    main {
        text-align: center;
    }

    h1 {
        color: var(--white);
        font-size: 3em;
    }

    section {
        display: grid;
        justify-items: center;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: 1fr;
    }

    .data-input {
        padding: 10px 40px 10px;
        border-radius: 10px;
        background-color: var(--white);
        justify-self: end;
    }

    .rank {
        justify-self: start;
    }
	@media(max-width: 800px) {
        section {
            grid-template-columns: 1fr;
        }
        .data-input {
            justify-self: center;
        }
        .rank {
           justify-self: center;
        }
	}
</style>
