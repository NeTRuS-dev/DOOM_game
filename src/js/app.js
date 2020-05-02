"use strict";

import '@/scss/style.scss';

import Vue from "vue";
import MainMenu from '@/js/components/main-menu';
import MainGame from '@/js/components/main-game';
import MainScore from '@/js/components/main-score';

new Vue({
    el: '#app',
    template: `
        <transition name="main">
            <main-menu @set-stage="current_stage=$event"
                       @set-player-name="player_name=$event"
                       v-if="current_stage===0"></main-menu>
            <main-game @set-stage="current_stage=$event"
                       :player_name="player_name"
                       @player-game-id="player_id=$event"
                       v-else-if="current_stage===1"></main-game>
            <main-score @set-stage="current_stage=$event"
                        :current_player_id="player_id"
                        v-else></main-score>
        </transition>
    `,
    data: {
        current_stage: 0,
        player_name: undefined,
        player_id: undefined,
    },
    methods: {
        resetProgress() {
            this.player_name = undefined;
            this.player_id = undefined;
        }
    },
    watch: {

        current_stage(new_val) {
            if (new_val === 0) {
                this.resetProgress();
            }
        }
    },
    components: {
        MainMenu,
        MainGame,
        MainScore,
    },
});
