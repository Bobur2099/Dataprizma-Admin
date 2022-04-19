<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-bold my-2">
      Projects
      <span class="fs-6 text-gray-400 ms-1">by Status</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          class="form-select form-select-white form-select-sm fw-bolder w-125px"
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
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->

  <!--begin::Row-->
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="50"
        :users="users1"
        icon="media/svg/brand-logos/plurk.svg"
        title="Fitnes App"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="30"
        :users="users2"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/disqus.svg"
        status="Pending"
        status-data-badge-color="badge-light"
        title="Leaf CRM"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="100"
        :users="users3"
        budget="$605,100.00"
        date="Mar 14, 2021"
        icon="media/svg/brand-logos/figma-1.svg"
        status="Completed"
        status-data-badge-color="badge-light-success"
        title="Atica Banking"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="60"
        :users="users4"
        budget="$36,400.00"
        icon="media/svg/brand-logos/sentry-3.svg"
        status="Pending"
        status-data-badge-color="badge-light"
        title="Finance Dispatch"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="40"
        :users="users5"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/xing-icon.svg"
        status="In Progress"
        title="9 Degree"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="70"
        :users="users6"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/tvit.svg"
        status="In Progress"
        title="GoPro App"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="30"
        :users="users7"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/aven.svg"
        status="In Progress"
        title="Buldozer CRM"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="10"
        :users="users8"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/treva.svg"
        status="Overdue"
        status-data-badge-color="badge-light-danger"
        title="Aviasales App"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        :progress="100"
        :users="users9"
        budget="$36,400.00"
        date="May 10, 2021"
        icon="media/svg/brand-logos/kanba.svg"
        status="Completed"
        status-data-badge-color="badge-light-success"
        title="Oppo CRM"
      ></KTCard>
    </div>
    <!--end::Row-->

    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-bold text-gray-700">
        Showing 1 to 10 of 50 entries
      </div>

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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTCard from "@/components/cards/Card1.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "projects",
  components: {
    KTCard
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Projects", ["Pages", "Profile"]);
    });

    const users1 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" }
    ];

    const users2 = [
      { name: "Alan Warden", initials: "A", state: "warning" },
      { name: "Brian Cox", src: "media/avatars/150-4.jpg" }
    ];

    const users3 = [
      { name: "Mad Masy", src: "media/avatars/150-1.jpg" },
      { name: "Cris Willson", src: "media/avatars/150-2.jpg" },
      { name: "Mike Garcie", initials: "M", state: "info" }
    ];

    const users4 = [
      { name: "Nich Warden", initials: "N", state: "warning" },
      { name: "Rob Otto", initials: "R", state: "success" }
    ];

    const users5 = [
      { name: "Francis Mitcham", src: "media/avatars/150-5.jpg" },
      { name: "Michelle Swanston", src: "media/avatars/150-13.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" }
    ];

    const users6 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" }
    ];

    const users7 = [
      { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
      { name: "Rabbin Watterman", initials: "S", state: "success" }
    ];

    const users8 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" }
    ];

    const users9 = [
      { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
      { name: "Rabbin Watterman", initials: "S", state: "danger" }
    ];

    return {
      users1,
      users2,
      users3,
      users4,
      users5,
      users6,
      users7,
      users8,
      users9
    };
  }
});
</script>
