<template>
    <div class="modal-manual">
        <div class="modal-bg-manual" @click="$emit('hide-modal')"></div>
        <div class="modal-body-manual">
            <h1 class="text-center mt-5">Привет, мир</h1><br>
            <p class="text-center">Эта игра была создана для того, чтобы в неё играть, любое распростронение контента
                незаконно:)</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal-window",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

    .modal-manual {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;

        .modal-bg-manual {
            width: 100%;
            height: 100%;
            z-index: 100;
            background-color: rgba(0, 0, 0, 0.7);

        }

        .modal-body-manual {
            padding: 2rem 1.5rem;
            position: absolute;
            z-index: 101;
            left: 25%;
            top: 30%;
            width: 50%;
            height: 40%;
            background-color: white;
            text-align: center;
            border-radius: 1rem;

        }
    }

</style>