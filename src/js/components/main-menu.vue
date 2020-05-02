<template>
    <div class="background">
        <div class="start_info">
            <div class="input_player_name">
                <label for="name">Введите ваше имя </label>
                <input id="name" type="text" v-model="inputedData">
            </div>
            <button :disabled="!inputedData.trim()" class="btn"
                    @click="changeState">rip & tear
            </button>
            <a @click.prevent="showModal">Почитать правила</a>
        </div>
        <modal-window v-if="modalShowed" @hide-modal="modalShowed=false"></modal-window>
    </div>
</template>

<script>
    import modalWindow from "@/js/components/modal-window.vue";

    export default {
        name: "main-menu",
        data() {
            return {
                inputedData: '',
                modalShowed: false,
            }
        },
        methods: {
            showModal() {
                this.modalShowed = true;
            },
            changeState() {
                this.$emit('set-stage', 1);
                this.$emit('set-player-name', this.inputedData.trim());
            }
        },

        components: {
            modalWindow,
        },
    }
</script>

<style lang="scss" scoped>
    .background {
        background-image: url("../../resourses/doom.original.jpg");
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }

    .start_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 43%;
        top: 65%;

        .input_player_name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            label {
                margin-bottom: 0.8rem;
                color: white;
                font-weight: bolder;
                font-size: 1.5rem;
            }

            input {
                text-align: center;
                padding: 0.5rem 0;

            }
        }
    }

    a {
        cursor: pointer;
        font-size: 24px;
        margin-top: 25px;
        color: #d4d2d2;

        &:hover {
            color: white;

        }
    }

    button {
        background-color: darkred;
        margin-top: 1.4rem;
        transition: all linear 0.5s;

        &:hover {
            background-color: #A20000;
        }
    }
</style>