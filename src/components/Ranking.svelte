<script>
    export let ranking = [
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
        { position: 1, cp: 1500, attack: 8, defense: 15, stamina: 15 },
    ];
</script>

<table>
    <thead>
        <tr>
            <th>N॰</th>
            <th>CP</th>
            <th>ATK</th>
            <th>DEF</th>
            <th>STA</th>
        </tr>
    </thead>
    <tbody>
        {#each ranking as position}
            <tr>
                <td>{position.position}</td>
                <td>{position.cp}</td>
                <td>{position.attack}</td>
                <td>{position.defense}</td>
                <td>{position.stamina}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        margin: 50px;
        padding: 20px;
        background-color: #f15252;
        border-radius: 5px;
    }
    td {
        padding: 10px;
    }
</style>