<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--      &lt;!&ndash;begin::Activities&ndash;&gt;-->
      <!--      <div class="d-flex align-items-center ms-1 ms-lg-3">-->
      <!--        &lt;!&ndash;begin::drawer toggle&ndash;&gt;-->
      <!--        <div-->
      <!--          class="-->
      <!--            btn btn-icon btn-active-light-primary-->
      <!--            w-30px-->
      <!--            h-30px-->
      <!--            w-md-40px-->
      <!--            h-md-40px-->
      <!--          "-->
      <!--          id="kt_activities_toggle"-->
      <!--        >-->
      <!--          <span class="svg-icon svg-icon-1">-->
      <!--            <inline-svg src="/media/icons/duotune/general/gen032.svg" />-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        &lt;!&ndash;end::drawer toggle&ndash;&gt;-->
      <!--      </div>-->
      <!--      &lt;!&ndash;end::Activities&ndash;&gt;-->

      <!--      &lt;!&ndash;begin::Quick links&ndash;&gt;-->
      <!--      <div class="d-flex align-items-center ms-1 ms-lg-3">-->
      <!--        &lt;!&ndash;begin::Menu&ndash;&gt;-->
      <!--        <div-->
      <!--          class="-->
      <!--            btn btn-icon btn-active-light-primary-->
      <!--            w-30px-->
      <!--            h-30px-->
      <!--            w-md-40px-->
      <!--            h-md-40px-->
      <!--          "-->
      <!--          data-kt-menu-trigger="click"-->
      <!--          data-kt-menu-attach="parent"-->
      <!--          data-kt-menu-placement="bottom-end"-->
      <!--          data-kt-menu-flip="bottom"-->
      <!--        >-->
      <!--          <span class="svg-icon svg-icon-1">-->
      <!--            <inline-svg src="/media/icons/duotune/general/gen025.svg" />-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        <KTQuickLinksMenu></KTQuickLinksMenu>-->
      <!--        &lt;!&ndash;end::Menu&ndash;&gt;-->
      <!--      </div>-->
      <!--      &lt;!&ndash;end::Quick links&ndash;&gt;-->

      <!--      &lt;!&ndash;begin::Chat&ndash;&gt;-->
      <!--      <div class="d-flex align-items-center ms-1 ms-lg-3">-->
      <!--        &lt;!&ndash;begin::Menu wrapper&ndash;&gt;-->
      <!--        <div-->
      <!--          class="-->
      <!--            btn btn-icon btn-active-light-primary-->
      <!--            position-relative-->
      <!--            w-30px-->
      <!--            h-30px-->
      <!--            w-md-40px-->
      <!--            h-md-40px-->
      <!--          "-->
      <!--          id="kt_drawer_chat_toggle"-->
      <!--        >-->
      <!--          <span class="svg-icon svg-icon-1">-->
      <!--            <inline-svg src="/media/icons/duotune/communication/com012.svg" />-->
      <!--          </span>-->

      <!--          <span-->
      <!--            class="-->
      <!--              bullet bullet-dot-->
      <!--              bg-success-->
      <!--              h-6px-->
      <!--              w-6px-->
      <!--              position-absolute-->
      <!--              translate-middle-->
      <!--              top-0-->
      <!--              start-50-->
      <!--              animation-blink-->
      <!--            "-->
      <!--          >-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        &lt;!&ndash;end::Menu wrapper&ndash;&gt;-->
      <!--      </div>-->
      <!--      &lt;!&ndash;end::Chat&ndash;&gt;-->

      <!--      &lt;!&ndash;begin::Notifications&ndash;&gt;-->
      <!--      <div class="d-flex align-items-center ms-1 ms-lg-3">-->
      <!--        &lt;!&ndash;begin::Menu&ndash;&gt;-->
      <!--        <div-->
      <!--          class="-->
      <!--            btn btn-icon btn-active-light-primary-->
      <!--            position-relative-->
      <!--            w-30px-->
      <!--            h-30px-->
      <!--            w-md-40px-->
      <!--            h-md-40px-->
      <!--          "-->
      <!--          data-kt-menu-trigger="click"-->
      <!--          data-kt-menu-attach="parent"-->
      <!--          data-kt-menu-placement="bottom-end"-->
      <!--          data-kt-menu-flip="bottom"-->
      <!--        >-->
      <!--          <span class="svg-icon svg-icon-1">-->
      <!--            <inline-svg src="/media/icons/duotune/general/gen022.svg" />-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        <KTNotificationsMenu></KTNotificationsMenu>-->
      <!--        &lt;!&ndash;end::Menu&ndash;&gt;-->
      <!--      </div>-->
      <!--      &lt;!&ndash;end::Notifications&ndash;&gt;-->

      <!--begin::User-->
      <div
        id="kt_header_user_menu_toggle"
        class="d-flex align-items-center me-n3 ms-1 ms-lg-3"
      >
        <!--begin::Menu-->
        <div
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          data-kt-menu-attach="parent"
          data-kt-menu-flip="bottom"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-trigger="click"
        >
          <img
            :src="`/media/avatars/blank.png`"
            alt="metronic"
            class="h-25px w-25px rounded"
          />
        </div>
        <KTUserMenu></KTUserMenu>
        <!--end::Menu-->
      </div>
      <!--end::User -->
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    // KTNotificationsMenu,
    // KTQuickLinksMenu,
    KTUserMenu
  }
});
</script>
