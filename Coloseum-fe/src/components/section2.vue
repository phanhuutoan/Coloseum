<template>
  <div class="section-2">
    <ranking></ranking>
    <challenger-helpers></challenger-helpers>
  </div>
</template>

<script>
import challengerHelpers from './battle/helpers/challengerHelpers';
import ranking from './battle/helpers/ranking';

export default {
  components: {
    challengerHelpers,
    ranking,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

  .section-2{
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
  }
</style>
