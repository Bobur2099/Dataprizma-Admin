<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader :title="pageTitle"></KTHeader>

      <!-- begin:: Content Head -->
      <KTToolbar
        v-if="subheaderDisplay"
        :breadcrumbs="breadcrumbs"
        :title="pageTitle"
      />
      <!-- end:: Content Head -->

      <!-- begin:: Content -->
      <div
        id="kt_content"
        :class="{
          'container-fluid': contentWidthFluid,
          'container-xxl': !contentWidthFluid,
        }"
        class="d-flex flex-column-fluid align-items-start"
      >
        <!-- begin:: Aside Left -->
        <KTAside
          v-if="asideEnabled"
          :darkLogo="themeDarkLogo"
          :lightLogo="themeLightLogo"
        ></KTAside>
        <!-- end:: Aside Left -->
        <!-- begin:: Content Body -->
        <div class="content flex-row-fluid">
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <!--  <KTExplore></KTExplore>-->
  <KTDrawerMessenger></KTDrawerMessenger>
  <KTUserMenu></KTUserMenu>
  <KTCreateApp></KTCreateApp>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
import { Actions } from "@/store/enums/StoreEnums";
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent
} from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo
} from "@/core/helpers/config";
import axios from "axios";
// import router from "@/router";

export default defineComponent({
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTToolbar,
    KTScrollTop,
    KTCreateApp,
    KTUserMenu,
    // KTExplore,
    KTDrawerMessenger,
    KTLoader
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      //check if current user is authenticated
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: "sign-in" });
      // }

      let signed_in: any = localStorage.getItem("sign_in");

      if (signed_in == "false") {
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

        if (token === "123") {
          router.push({ name: "sign-in" });
          token = "";
        }

        axios
          .post(
            "login/check",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then((response) => {
            if (response.status !== 200) {
              localStorage.setItem("token", "");
              router.push({ name: "401" });
              token = "";
            }
          })
          .catch(() => {
            localStorage.setItem("token", "");
            router.push({ name: "401" });
            token = "";
          });

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
            });
        } catch (err) {
          router.push({ name: "sign-in" });
        }

        let getPermissionDashBooleanByType = (type) => {
          let permissionDto = userData["permissionDtoList"];
          for (let i = 0; i < permissionDto.length; i++) {
            if (
              permissionDto[i]["type"] === type &&
              permissionDto[i]["name"] === "dashboard"
            ) {
              return permissionDto[i]["aboolean"];
            }
          }
          return 0;
        };


        if (token === "undefined" || token === "" || token === null) {
          localStorage.setItem("sign_in", "true");
          router.push({ name: "sign-in" });
        } else if (
          getPermissionDashBooleanByType(userData["name"].toLowerCase()) ===
          false &&
          userData["name"] !== "Admin"
        ) {
          router.push({ name: "244" });
          localStorage.setItem("token", "");
        } else {
          router.push("/");
        }
      }

      DrawerComponent.bootstrap();
      ScrollComponent.bootstrap();
      DrawerComponent.updateAll();
      ScrollComponent.updateAll();

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        DrawerComponent.hideAll();

        // check if current user is authenticated
        // if (!store.getters.isUserAuthenticated) {
        //   router.push({ name: "sign-in" });
        // }

        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      themeLightLogo,
      themeDarkLogo
    };
  }
});
</script>
