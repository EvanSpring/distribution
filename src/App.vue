<template>
  <div>
    <loading v-show="loading"></loading>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import loading from 'components/loading/loading';
  /* eslint-disable no-unused-vars */
  import { mapGetters, mapActions } from 'vuex';
  /* eslint-disable no-unused-vars */
  import rem from 'common/js/rem';

  export default {
    computed: mapGetters(['loading']),
    components: {
      loading
    },
    created() {
      this.$store.dispatch('hideLoading');
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
