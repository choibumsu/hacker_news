<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <div slot="time">{{ "Posted " + fetchedItem.time_ago }}</div>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <srction>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </srction>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  }
};
</script>
