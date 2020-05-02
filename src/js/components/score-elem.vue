<template>
    <div class='score-elem' :class="{'current-elem':isCurrent}">
        <div>{{elem.number}}</div>
        <div>{{elem.player_name}}</div>
        <div>{{elem.demons_killed}}</div>
        <div>{{elem.time_alive}}</div>
    </div>
</template>

<script>
    export default {
        name: "score-elem",
        props: {
            elem: Object,
            index: Number,
            isCurrent: Boolean,
        }
    }
</script>
