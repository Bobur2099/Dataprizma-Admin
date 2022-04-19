<template>
  <!--begin::Campaigns toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Title-->
    <h2 class="fw-bold my-2">
      Campaigns
      <span class="fs-4 text-gray-400 ms-1">30 Days</span>
    </h2>
    <!--end::Title-->

    <!--begin::Controls-->
    <div class="d-flex align-items-center my-2">
      <!--begin::Select wrapper-->
      <div class="w-100px me-5">
        <!--begin::Select-->
        <select
          class="form-select form-select-white form-select-sm"
          data-control="select2"
          data-hide-search="true"
          name="status"
        >
          <option selected value="1">30 Days</option>
          <option value="2">90 Days</option>
          <option value="3">6 Months</option>
          <option value="4">1 Year</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->

      <button
        class="btn btn-primary btn-sm"
        data-bs-toggle="tooltip"
        title="Coming soon"
      >
        Plan Campaigns
      </button>
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Campaigns toolbar-->
  <div class="row g-6 g-xl-9">
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="$500.00"
          footer-data="+40.5%"
          footer-text="more impressions"
          icon="media/svg/brand-logos/twitch.svg"
          indicator-label="MRR"
          indicator-value="0.5%"
          title="Twitch Posts"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="807k"
          footer-data="+17.62%"
          footer-text="Followers growth"
          icon="media/svg/brand-logos/twitter.svg"
          indicator-label="New trials"
          indicator-value="5%"
          title="Twitter Followers"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Down-left"
          card-classes="h-100"
          color="danger"
          content="1,073"
          footer-data="+10.45%"
          footer-text="Less comments than usual"
          icon="media/svg/brand-logos/spotify.svg"
          indicator-label="Impressions"
          indicator-value="40%"
          title="Spotify Listeners"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="97"
          footer-data="+26.1%"
          footer-text="More posts"
          icon="media/svg/brand-logos/pinterest-p.svg"
          indicator-label="Spend"
          indicator-value="10%"
          title="Pinterest Posts"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Down-left"
          card-classes="h-100"
          color="danger"
          content="4,109"
          footer-data="+32.8%"
          footer-text="Less contributions"
          icon="media/svg/brand-logos/github.svg"
          indicator-label="Dispute"
          indicator-value="40%"
          title="Github Contributes"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="354"
          footer-data="+29.45%"
          footer-text="Subscribers growth"
          icon="media/svg/brand-logos/youtube-3.svg"
          indicator-label="Subscribers"
          indicator-value="40%"
          title="Youtube Subscribers"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="566"
          footer-data="+11.4%"
          footer-text="more clicks"
          icon="media/svg/brand-logos/telegram.svg"
          indicator-label="Profit"
          indicator-value="40%"
          title="Telegram Posts"
        ></Card2>
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <Card2
          arrow="Up-right"
          card-classes="h-100"
          color="success"
          content="2.1M"
          footer-data="-46.7%"
          footer-text="more adds"
          icon="media/svg/brand-logos/reddit.svg"
          indicator-label="Retention"
          indicator-value="0.0%"
          title="Reddit Awards"
        ></Card2>
      </div>
    </div>
  </div>

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
import Card2 from "@/components/cards/Card2.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "campaigns",
  components: {
    Card2
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Campaigns", ["Pages", "Profile"]);
    });
  }
});
</script>
