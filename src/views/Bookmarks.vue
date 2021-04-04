<template>
  <div>
    <place-list :dataList="$store.state.place.bookmarks" />
  </div>
</template>

<script>
import PlaceList from "./../components/PlaceList";

export default {
  name: "Bookmarks",
  components: { PlaceList },
};
</script>

<style></style>
