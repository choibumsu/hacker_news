<template>
  <div></div>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("SET_ITEM", id);
  }
};
</script>

<style lang="scss" scoped></style>
