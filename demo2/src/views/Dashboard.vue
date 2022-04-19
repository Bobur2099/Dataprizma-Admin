<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <MixedWidget2
        chart-height="200"
        stroke-color="#cb1e46"
        widget-classes="card-xl-stretch mb-xl-8"
        widget-color="danger"
      ></MixedWidget2>
    </div>
    <div class="col-xxl-4">
      <ListWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></ListWidget5>
    </div>
    <div class="col-xxl-4">
      <MixedWidget7
        chart-color="primary"
        chart-height="150"
        widget-classes="card-xxl-stretch-50 mb-5 mb-xl-8"
      ></MixedWidget7>
      <MixedWidget10
        chart-color="primary"
        chart-height="168"
        widget-classes="card-xxl-stretch-50 mb-5 mb-xl-8"
      ></MixedWidget10>
    </div>
  </div>

  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-12">
      <ListWidget3 widget-classes="card-xxl-stretch mb-xl-3"></ListWidget3>
    </div>
    <!--    <div class="col-xxl-8">-->
    <!--      <TableWidget9-->
    <!--        widget-classes="card-xxl-stretch mb-5 mb-xl-8"-->
    <!--      ></TableWidget9>-->
    <!--    </div>-->
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <ListWidget2 widget-classes="card-xl-stretch mb-xl-8"></ListWidget2>
    </div>
    <div class="col-xxl-4">
      <ListWidget6 widget-classes="card-xl-stretch mb-xl-8"></ListWidget6>
    </div>
    <div class="col-xxl-4">
      <ListWidget1 widget-classes="card-xxl-stretch mb-xl-3"></ListWidget1>
    </div>
  </div>

  <div class="row g-5 gx-xxl-8">
    <div class="col-xxl-4">
      <MixedWidget5
        chart-color="success"
        chart-height="150"
        widget-classes="card-xl-stretch mb-xl-8"
      ></MixedWidget5>
    </div>
    <div class="col-xxl-8">
      <TableWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xxl-8"
      ></TableWidget5>
    </div>
    <!--    <div class="row gy-5 gx-xl-8">-->
    <!--      <div class="col-xxl-12">-->
    <!--        <TableWidget14-->
    <!--          widget-classes="card-xxl-stretch mb-5 mb-xl-8"-->
    <!--        ></TableWidget14>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import TableWidget14 from "@/components/widgets/tables/Widget14.vue";
// import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import TableWidget5 from "@/components/widgets/tables/Widget5.vue";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import axios from "axios";
import router from "@/router";

export default defineComponent({
  name: "dashboard",
  components: {
    // TableWidget14,
    // TableWidget9,
    TableWidget5,
    ListWidget1,
    ListWidget2,
    ListWidget3,
    ListWidget5,
    ListWidget6,
    MixedWidget2,
    MixedWidget5,
    MixedWidget7,
    MixedWidget10
  },
  setup() {
    let rawUserData: any = localStorage.getItem("userData");
    let userData = JSON.parse(rawUserData);
    let token: any = "";
    let name: any = "";
    try {
      token = userData["token"];
      name = userData["name"];
    } catch (err) {
      token = "";
      name = "";
    }
    // const requestLink = "http://192.168.6.4:8083/api/v1/";

    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      axios
        .post(
          "permission/list/" + name.toLowerCase(),
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then((response) => {
          localStorage.setItem(
            "user_perms",
            JSON.stringify(response.data.list)
          );
        })
        .catch((err) => {
          router.push({ name: "sign-in" });
        });
    } catch (err) {
      router.push({ name: "sign-in" });
    }

    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  }
});
</script>
