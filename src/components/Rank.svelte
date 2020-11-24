<script>
    import { Rank } from '../store';

    let ranking = [];
    Rank.subscribe((value) => {
        ranking = value.slice(0, 10);
    });

</script>

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>A/D/S</th>
            <th>CP</th>
            <th>ATK</th>
            <th>DEF</th>
            <th>STA</th>
        </tr>
    </thead>
    <tbody>
        {#each ranking as position, index}
            <tr>
                <td>{index + 1}</td>
                <td>{position.iv.ATK}/{position.iv.DEF}/{position.iv.STA}</td>
                <td>{position.cp}</td>
                <td>{position.baseStats.ATK}</td>
                <td>{position.baseStats.DEF}</td>
                <td>{position.baseStats.STA}</td>
            </tr>
        {/each}
    </tbody>
</table>



<style>
    table {
        padding: 2vw;
        border-radius: 10px;
        background-color: #fafafa;
    }
    td {
        padding: 10px;
    }
</style>
