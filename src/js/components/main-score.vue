<template>
    <div class="wrapper">
        <div class="scores_body">
            <template v-for="(elem,index) of scores">
                <div v-if="index===10" class="score-elem">
                    <span v-for="n in 4">...</span>
                </div>
                <score-elem
                        :elem="elem"
                        :key="index"
                        :index="index"
                        :isCurrent="isCurrent(elem)">
                </score-elem>
            </template>

        </div>
        <button class="btn try-again"
                @click="$emit('set-stage',0)">Попробовать ещё раз
        </button>
    </div>
</template>

<script>
    import ScoreElem from "@/js/components/score-elem";

    export default {
        name: "main-score",
        props: {
            current_player_id: Number
        },
        data() {
            return {
                scores: [],
            }
        },
        methods: {
            isCurrent(elem) {
                return Number.parseInt(elem.id) === this.current_player_id;
            }
        },
        mounted() {
            fetch('/server_get_rating.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({player_id: this.current_player_id})

            })
                .then(response => response.json())
                .then(data => {
                    this.scores = data;
                })
                .catch(() => {
                });
        },
        components: {ScoreElem},

    }


</script>

<style lang="scss" scoped>
    .wrapper {
        background-image: url("../../resourses/game_bg.jpg");
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .scores_body {
            width: 70%;
            height: auto;
            font-size: 2rem;
            background-color: brown;
            border-radius: 1rem;
            padding: 1rem;
        }

        .try-again {
            margin-top: 1%;
        }
    }

    .score-elem {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 0 1.5rem;

        &.current-elem {
            font-size: 2.2rem;
            color: #ba8b00;
        }

        > div, > span {
            width: (100%/4);
            text-align: center;
        }

    }
</style>