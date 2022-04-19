<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget1
        background="abstract-4.svg"
        description="Create a headline that is informative<br/>
      and will capture readers"
        time="3:30PM - 4:20PM"
        title="Meeting Schedule"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget1>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget1
        background="abstract-2.svg"
        description="Great blog posts don’t just happen Even the best bloggers need it"
        time="03 May 2020"
        title="Meeting Schedule"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget1>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget1
        background="abstract-1.svg"
        description="AirWays A Front-end solution for airlines build with ReactJS"
        time="10AM Jan, 2021"
        title="UI Conference"
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></StatisticsWidget1>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget2
        avatar="media/svg/avatars/029-boy-11.svg"
        description="System & Software Architect"
        title="Arthur Goldstain"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget2>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget2
        avatar="media/svg/avatars/014-girl-7.svg"
        description="Marketing & Fanance Manager"
        title="Lisa Bold"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget2>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget2
        avatar="media/svg/avatars/004-boy-1.svg"
        description="Customer Support Team"
        title="Nick Stone"
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></StatisticsWidget2>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget3
        :height="150"
        change="+100"
        color="success"
        description="Your Weekly Sales Chart"
        title="Weekly Sales"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget3>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget3
        :height="150"
        change="-260"
        color="danger"
        description="Marketplace Authors Chart"
        title="Authors Progress"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget3>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget3
        :height="150"
        change="+180"
        color="primary"
        description="Marketplace Sales Chart"
        title="Sales Progress"
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></StatisticsWidget3>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget4
        :height="150"
        change="+256"
        color="info"
        description="Sales Change"
        svg-icon="/media/icons/duotune/ecommerce/ecm002.svg"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget4>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget4
        :height="150"
        change="750$"
        color="success"
        description="Weekly Income"
        svg-icon="/media/icons/duotune/general/gen025.svg"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget4
      >
      ->
    </div>

    <div class="col-xl-4">
      <StatisticsWidget4
        :height="150"
        change="+6.6K"
        color="primary"
        description="New Users"
        svg-icon="/media/icons/duotune/finance/fin006.svg"
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></StatisticsWidget4>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget5
        color="danger"
        description="Lands, Houses"
        icon-color="white"
        svg-icon="/media/icons/duotune/ecommerce/ecm002.svg"
        title="Shopping Chart"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        color="primary"
        description="Flats, Shared Rooms, Duplex"
        icon-color="white"
        svg-icon="/media/icons/duotune/ecommerce/ecm008.svg"
        title="Appartments"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        color="success"
        description="50% Increased for FY20"
        icon-color="white"
        svg-icon="/media/icons/duotune/graphs/gra005.svg"
        title="Sales Stats"
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></StatisticsWidget5>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-3">
      <StatisticsWidget5
        color="white"
        description="SAP UI Progress"
        icon-color="primary"
        svg-icon="/media/icons/duotune/general/gen032.svg"
        title="500M$"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        color="dark"
        description="New Customers"
        icon-color="white"
        svg-icon="/media/icons/duotune/ecommerce/ecm008.svg"
        title="+3000"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        color="warning"
        description="Milestone Reached"
        icon-color="white"
        svg-icon="/media/icons/duotune/finance/fin006.svg"
        title="$50,000"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        color="info"
        description="Milestone Reached"
        icon-color="white"
        svg-icon="/media/icons/duotune/graphs/gra007.svg"
        title="$50,000"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget5>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget6
        color="success"
        description="Project Progress"
        progress="50%"
        title="Avarage"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget6>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget6
        color="warning"
        description="Company Finance"
        progress="15%"
        title="48k Goal"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget6>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget6
        color="primary"
        description="Marketing Analysis"
        progress="76%"
        title="400k Impressions"
        widget-classes="card-xl-stretch mb-xl-8"
      ></StatisticsWidget6>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import StatisticsWidget1 from "@/components/widgets/statsistics/Widget1.vue";
import StatisticsWidget2 from "@/components/widgets/statsistics/Widget2.vue";
import StatisticsWidget3 from "@/components/widgets/statsistics/Widget3.vue";
import StatisticsWidget4 from "@/components/widgets/statsistics/Widget4.vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import StatisticsWidget6 from "@/components/widgets/statsistics/Widget6.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-statistics",
  components: {
    StatisticsWidget1,
    StatisticsWidget2,
    StatisticsWidget3,
    StatisticsWidget4,
    StatisticsWidget5,
    StatisticsWidget6
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Statistics", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  }
});
</script>
