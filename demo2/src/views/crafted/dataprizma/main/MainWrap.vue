<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <TableWidget15 class="col-xxl-12"></TableWidget15>
  </div>
  <!-- end:: Body -->
</template>

<script lang="ts">
// import router from "@/router";
import TableWidget15 from "@/components/widgets/tables/Widget15.vue";

export default {
  name: "MainWrap",
  components: {
    TableWidget15,
  },
};
</script>
