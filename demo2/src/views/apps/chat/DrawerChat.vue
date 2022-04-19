<template>
  <!--begin::Heading-->
  <div class="d-flex flex-wrap flex-stack mb-6">
    <!--begin::Title-->
    <h3 class="fw-bolder my-2">
      My Contacts
      <span class="fs-6 text-gray-400 fw-bold ms-1">(59)</span>
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
        <option selected value="Online">Online</option>
        <option value="Pending">Pending</option>
        <option value="Declined">Declined</option>
        <option value="Accepted">Accepted</option>
      </select>
      <!--end::Select-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Heading-->

  <!--begin::Contacts-->
  <div class="row g-6 g-xl-9">
    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-1.jpg"
      avg-earnings="$14,560"
      name="Emma Smith"
      position="Art Director"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="danger"
      initials="M"
      name="Melody Macy"
      position="Marketing Analytic"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-2.jpg"
      avg-earnings="$14,560"
      name="Max Smith"
      position="Software Enginer"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-4.jpg"
      avg-earnings="$14,560"
      name="Sean Bean"
      position="Web Developer"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-15.jpg"
      avg-earnings="$14,560"
      name="Brian Cox"
      position="UI/UX Designer"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="warning"
      initials="M"
      name="Mikaela Collins"
      position="Head Of Marketing"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-8.jpg"
      avg-earnings="$14,560"
      name="Francis Mitcham"
      position="Software Arcitect"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="danger"
      initials="O"
      name="Olivia Wild"
      position="System Admin"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="primary"
      initials="N"
      name="Neil Owen"
      position="Account Manager"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-6.jpg"
      avg-earnings="$14,560"
      name="Dan Wilson"
      position="Web Desinger"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="true"
      avg-earnings="$14,560"
      color="danger"
      initials="E"
      name="Emma Bold"
      position="Corporate Finance"
      total-sales="$236,400"
    ></Card4>

    <Card4
      :connected="false"
      :online="false"
      avatar="media/avatars/150-7.jpg"
      avg-earnings="$14,560"
      name="Ana Crown"
      position="Customer Relationship"
      total-sales="$236,400"
    ></Card4>
  </div>
  <!--end::Contacts-->

  <!--begin::Pagination-->
  <div class="d-flex flex-stack flex-wrap pt-10">
    <div class="fs-6 fw-bold text-gray-700">Showing 1 to 10 of 50 entries</div>

    <!--begin::Pages-->
    <ul class="pagination">
      <li class="page-item previous">
        <a class="page-link" href="#"><i class="previous"></i></a>
      </li>

      <li class="page-item active">
        <a class="page-link" href="#">1</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">4</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">5</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">6</a>
      </li>

      <li class="page-item next">
        <a class="page-link" href="#"><i class="next"></i></a>
      </li>
    </ul>
    <!--end::Pages-->
  </div>
  <!--end::Pagination-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Card4 from "@/components/cards/Card4.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "drawer-chat",
  components: {
    Card4
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Drawer Chat", ["Chat"]);
    });
  }
});
</script>
