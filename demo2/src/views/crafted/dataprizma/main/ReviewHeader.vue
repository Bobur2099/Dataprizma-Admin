<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <TableWidget20 class="col-xxl-12"></TableWidget20>
  </div>
  <!-- end:: Body -->
</template>

<script lang="ts">
// import router from "@/router";
import TableWidget20 from "@/components/widgets/tables/dataprizma_widgets/Review.vue";

export default {
  name: "ServicesCarousel",
  components: {
    TableWidget20,
  },
};
</script>
