<script>
    export let value;
</script>

<section>
    {#each value as {type, src}}
        <div class="type">
            <img {src} alt={type}/>
            <span>{type}</span>
        </div>
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        margin: 5px;
        padding: 0px 80px 0px 80px;
    }

    .type {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 5px;
    }

    img {
        margin: 5px;
        height: 25px;
        width: 25px;
    }

    span {
        text-transform: uppercase;
        font-weight: 500;
        color: var(--grey);
        font-size: small;
    }
</style>
