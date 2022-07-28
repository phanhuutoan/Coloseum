<template>
  <div class="bar">
    <div class="bar-normal">
      <normal-player-avatar
        v-for="player in normalPlayers"
        :key="player.username"
        :name="player.username"
        :img="player.img"
        :score="player.score"
        @changeChallenger="onChangeChallenger($event)"
      />
    </div>
    <div class="bar-main">
      <challenge-player-avatar></challenge-player-avatar>
    </div>
      <audio :src="changeChallengerAudio" type="audio/mpeg" ref="changeChallenger"></audio>
  </div>
</template>
<script>
import challengePlayerAvatar from './battle/challenger/challengePlayerAvatar';
import normalPlayerAvatar from './battle/challenger/normalPlayerAvatar';
import changeChallenger from '../assets/audio/changeChallenger.mp3';

export default {
  data() {
    return {
      changeChallengerAudio: changeChallenger,
    };
  },
  components: {
    challengePlayerAvatar,
    normalPlayerAvatar,
  },
  computed: {
    normalPlayers() {
      return this.$store.state.normalPlayer;
    },
  },
  methods: {
    onChangeChallenger(playerName) {
      console.log(playerName);
      this.$store.commit('changeChallenger', playerName);
      this.$refs.changeChallenger.play();
    },
  },
};
</script>
<style lang="scss" scoped>
.bar {
  display: flex;

  &-normal {
    background-color: rgb(183, 54, 93);
    min-height: 22rem;
    width: 100%;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 9.5rem;
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
    flex: 2;
  }

  &-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(137, 67, 158);
    border-top-right-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    flex: 1
  }
}
</style>
