<template>
  <div
    class="
      d-flex
      flex-column flex-column-fluid
      bgi-position-y-bottom
      position-x-center
      bgi-no-repeat bgi-size-contain bgi-attachment-fixed
    "
    style="background-image: url('/media/illustrations/sketchy-1/14.png')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->
      <a class="mb-12" href="#">
        <!--        <img alt="Logo" src="media/logos/logo-1.svg" class="h-45px" />-->
        <!--        <h1>Dataprizma</h1>-->
      </a>
      <!--end::Logo-->

      <router-view></router-view>
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a
          class="text-muted text-hover-primary px-2"
          href="http://site.dataprizma.uz/about"
          >{{ $t("about") }}</a
        >

        <a
          class="text-muted text-hover-primary px-2"
          href="http://site.dataprizma.uz/contact"
          >{{ $t("contact") }}</a
        >

        <!--        <a href="#" class="text-muted text-hover-primary px-2">Contact Us</a>-->
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "auth",
  components: {},
  setup() {
    const store = useStore();
    const i18n = useI18n();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: "/media/flags/united-states.svg",
        name: "English",
      },
      es: {
        flag: "media/flags/spain.svg",
        name: "Spanish",
      },
      de: {
        flag: "media/flags/germany.svg",
        name: "German",
      },
      ja: {
        flag: "media/flags/japan.svg",
        name: "Japanese",
      },
      fr: {
        flag: "media/flags/france.svg",
        name: "French",
      },
      uz: {
        flag: "media/flags/uzbekistan.svg",
        name: "Uzbek",
      },
      ru: {
        flag: "media/flags/russia.svg",
        name: "Russian",
      },
    };

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });

    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = (lang) => {
      return i18n.locale.value === lang;
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value];
    });

    return {
      currentLanguage,
      currentLangugeLocale,
      setLang,
    };
  },
});
</script>
