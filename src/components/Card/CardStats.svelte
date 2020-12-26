<script>
    export let value;
</script>

<section>
    <div class="stat">
        <span>{value.ATK}</span>
        <label for="ATK">attack</label>
    </div>

    <div class="divider"></div>

    <div class="stat">
        <span>{value.DEF}</span>
        <label for="DEF">defense</label>
    </div>

    <div class="divider"></div>

    <div class="stat">
        <span>{value.STA}</span>
        <label for="STA">stamina</label>
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

    span {
        font-size: 16px;
        font-weight: 500;
    }

    label {
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 100;
        color: var(--grey);
    }

    .stat {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .divider {
        height: 20px;
        margin: 10px;
        align-self: center;
        border-left: 0.1em solid var(--light-grey);
        border-radius: 5px;
    }
</style>
