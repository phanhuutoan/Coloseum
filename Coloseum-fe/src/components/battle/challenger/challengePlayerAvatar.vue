<template>
  <figure class="challenger">
    <img :src="imgChoose" :alt="challenger.img" />
    <div class="challenger__info">
      <h2 @click="showModal = !showModal">{{ challenger.score }}</h2>
      <h3>{{ challenger.username }}</h3>
      <change-score-tooltip
        :isShow="showModal"
        :position="'bottom: -7.2rem !important'"
        :name="challenger.username"
      />
    </div>
  </figure>
</template>

<script>
import changeScoreTooltip from '../../tooltips/changeScore';

export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    changeScoreTooltip,
  },
  computed: {
    challenger() {
      return this.$store.state.challenger;
    },
    imgChoose() {
      return this.challenger.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.challenger {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__info {
    position: relative;
    margin-top: 1rem;
    text-align: center;
    cursor: pointer;
  }
  h2 {
    color: rgb(230, 53, 8);
    padding: 0.5rem 1.2rem;
    background-color: #fff;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s;
    font-size: 2rem;

    &:hover {
      transform: scale(1.1);
    }
  }
  h3 {
    color: white;
    margin-bottom: 0;
  }
  img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 50%;
    border: 0.6rem solid rgb(240, 208, 149);
  }
}
</style>
