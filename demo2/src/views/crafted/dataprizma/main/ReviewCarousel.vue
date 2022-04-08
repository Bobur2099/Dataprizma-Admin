<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <TableWidget21 class="col-xxl-12"></TableWidget21>
  </div>
  <!-- end:: Body -->
</template>

<script lang="ts">
// import router from "@/router";
import TableWidget21 from "@/components/widgets/tables/dataprizma_widgets/ReviewCarousel.vue";

export default {
  name: "ServicesCarousel",
  components: {
    TableWidget21,
  },
};
</script>
