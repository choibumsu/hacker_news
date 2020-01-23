<template>
  <div>
    <p v-for="(item, index) in fetchedAsk" :key="index">
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"])
    // ...mapState({
    //   ask: state => state.ask
    // })

    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style></style>
