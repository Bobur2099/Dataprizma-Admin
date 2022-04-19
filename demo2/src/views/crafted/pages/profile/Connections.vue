<template>
  <!--begin::Followers toolbar-->
  <div class="d-flex flex-wrap flex-stack mb-6">
    <!--begin::Title-->
    <h3 class="fw-bolder my-2">
      My Connections
      <span class="fs-6 text-gray-400 fw-bold ms-1">(29)</span>
    </h3>
    <!--end::Title-->

    <!--begin::Controls-->
    <div class="d-flex my-2">
      <!--begin::Select-->
      <select
        class="form-select form-select-white form-select-sm w-125px"
        data-control="select2"
        data-hide-search="true"
        name="status"
      >
        <option selected value="Active">Active</option>
        <option value="Approved">In Progress</option>
        <option value="Declined">To Do</option>
        <option value="In Progress">Completed</option>
      </select>
      <!--end::Select-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Followers toolbar-->

  <!--begin::Row-->
  <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
    <!--begin::Followers-->
    <Card3
      :connected="true"
      :online="true"
      avatar="media/avatars/150-12.jpg"
      avg-earnings="$14,560"
      name="Patric Watson"
      position="Art Director at Novica Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="false"
      avatar="media/avatars/150-1.jpg"
      avg-earnings="$14,560"
      name="Olivia Larson"
      position="Art Director at Seal Inc."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="true"
      :online="true"
      avg-earnings="$14,560"
      color="warning"
      initials="A"
      name="Adam Williams"
      position="System Arcitect at Wolto Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="true"
      :online="true"
      avg-earnings="$14,560"
      color="primary"
      initials="P"
      name="Paul Marcus"
      position="Art Director at Novica Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="false"
      avg-earnings="$14,560"
      color="success"
      initials="N"
      name="Neil Owen"
      position="Accountant at Numbers Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="info"
      initials="S"
      name="Sean Paul"
      position="Developer at Loop Inc"
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="true"
      :online="false"
      avatar="media/avatars/150-2.jpg"
      avg-earnings="$14,560"
      name="Kitona Johnson"
      position="Web Designer at Nextop Ltd."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="false"
      avatar="media/avatars/150-11.jpg"
      avg-earnings="$14,560"
      name="Robert Doe"
      position="Marketing Analytic at Avito Ltd."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="false"
      avatar="media/avatars/150-7.jpg"
      avg-earnings="$14,560"
      name="Soul Jacob"
      position="Art Director at Novica Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="true"
      :online="true"
      avatar="media/avatars/150-13.jpg"
      avg-earnings="$14,560"
      name="Nina Strong"
      position="CTO at Kilp Ltd."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="true"
      avatar="media/avatars/150-12.jpg"
      avg-earnings="$14,560"
      name="Patric Watson"
      position="Art Director at Novica Co."
      total-sales="$236,400"
    ></Card3>

    <Card3
      :connected="false"
      :online="false"
      avatar="media/avatars/150-1.jpg"
      avg-earnings="$14,560"
      name="Olivia Larson"
      position="Art Director at Seal Inc."
      total-sales="$236,400"
    ></Card3>
    <!--end::Followers-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Card3 from "@/components/cards/Card3.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "connections",
  components: {
    Card3
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Connections", ["Pages", "Profile"]);
    });
  }
});
</script>
