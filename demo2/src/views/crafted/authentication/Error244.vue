<template>
  <div class="d-flex flex-column flex-column-fluid">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
      <!--begin::Logo-->
      <router-link class="mb-10 pt-lg-10" to="/dashboard">
        <img alt="Logo" class="h-40px mb-5" src="/media/logos/logo-1.svg" />
      </router-link>
      <!--end::Logo-->

      <!--begin::Wrapper-->
      <div class="pt-lg-10 mb-10">
        <!--begin::Logo-->
        <h1 class="fw-bolder fs-4x text-gray-800 mb-10">Permission denied</h1>
        <!--end::Logo-->

        <!--begin::Message-->
        <div class="fw-bold fs-3 text-muted mb-15">
          Something went wrong! <br />
          Please try another email.
        </div>
        <!--end::Message-->

        <!--begin::Action-->
        <div class="text-center">
          <router-link class="btn btn-lg btn-primary fw-bolder" to="/sign-in"
          >Go to login page
          </router-link
          >
        </div>
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Illustration-->
      <div
        class="
          d-flex
          flex-row-auto
          bgi-no-repeat
          bgi-position-x-center
          bgi-size-contain
          bgi-position-y-bottom
          min-h-100px min-h-lg-350px
        "
        style="
          background-image: url(/public/media/illustrations/sketchy-1/17.png);
        "
      ></div>
      <!--end::Illustration-->
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a
          class="text-muted text-hover-primary px-2"
          href="https://keenthemes.com"
        >About</a
        >

        <a
          class="text-muted text-hover-primary px-2"
          href="mailto:support@keenthemes.com"
        >Contact</a
        >

        <a
          class="text-muted text-hover-primary px-2"
          href="https://1.envato.market/EA4JP"
        >Contact Us</a
        >
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "error-244",
  components: {},
  setup() {
    const store = useStore();

    localStorage.setItem("userData", "{\"token\": \"123\"}");

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  }
});
</script>
