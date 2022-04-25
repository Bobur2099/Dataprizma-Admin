<template>
  <!--begin::Menu-->
  <div
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-600
      menu-state-bg-light-primary
      fw-bold
      py-4
      fs-6
      w-275px
    "
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--        &lt;!&ndash;begin::Avatar&ndash;&gt;-->
        <!--        <div class="symbol symbol-50px me-5">-->
        <!--          <img alt="Logo" src="media/avatars/150-25.jpg" />-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Avatar&ndash;&gt;-->

        <!--begin::Username-->
        <div class="d-flex flex-column">
          <!--          <div class="fw-bolder d-flex align-items-center fs-5">-->
          <!--            Max Smith-->
          <!--            <span-->
          <!--              class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2"-->
          <!--              >Pro</span-->
          <!--            >-->
          <!--          </div>-->
          <a class="fw-bold text-muted text-hover-primary fs-7" href="#">{{
            email
          }}</a>
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->

    <!--    &lt;!&ndash;begin::Menu separator&ndash;&gt;-->
    <!--    <div class="separator my-2"></div>-->
    <!--    &lt;!&ndash;end::Menu separator&ndash;&gt;-->

    <!--    &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--    <div class="menu-item px-5">-->
    <!--      <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--        My Profile-->
    <!--      </router-link>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--    &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--    <div class="menu-item px-5">-->
    <!--      <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--        <span class="menu-text">My Projects</span>-->
    <!--        <span class="menu-badge">-->
    <!--          <span class="badge badge-light-danger badge-circle fw-bolder fs-7"-->
    <!--            >3</span-->
    <!--          >-->
    <!--        </span>-->
    <!--      </router-link>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--    &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--    <div-->
    <!--      class="menu-item px-5"-->
    <!--      data-kt-menu-trigger="hover"-->
    <!--      data-kt-menu-placement="left-start"-->
    <!--      data-kt-menu-flip="center, top"-->
    <!--    >-->
    <!--      <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--        <span class="menu-title">My Subscription</span>-->
    <!--        <span class="menu-arrow"></span>-->
    <!--      </router-link>-->

    <!--      &lt;!&ndash;begin::Menu sub&ndash;&gt;-->
    <!--      <div class="menu-sub menu-sub-dropdown w-175px py-4">-->
    <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--        <div class="menu-item px-3">-->
    <!--          <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--            Referrals-->
    <!--          </router-link>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--        <div class="menu-item px-3">-->
    <!--          <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--            Billing-->
    <!--          </router-link>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--        <div class="menu-item px-3">-->
    <!--          <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--            Payments-->
    <!--          </router-link>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--        <div class="menu-item px-3">-->
    <!--          <router-link-->
    <!--            to="/pages/profile/overview"-->
    <!--            class="menu-link d-flex flex-stack px-5"-->
    <!--          >-->
    <!--            Statements-->

    <!--            <i-->
    <!--              class="fas fa-exclamation-circle ms-2 fs-7"-->
    <!--              data-bs-toggle="tooltip"-->
    <!--              title="View your statements"-->
    <!--            ></i>-->
    <!--          </router-link>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--        &lt;!&ndash;begin::Menu separator&ndash;&gt;-->
    <!--        <div class="separator my-2"></div>-->
    <!--        &lt;!&ndash;end::Menu separator&ndash;&gt;-->

    <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--        <div class="menu-item px-3">-->
    <!--          <div class="menu-content px-3">-->
    <!--            <label-->
    <!--              class="form-check form-switch form-check-custom form-check-solid"-->
    <!--            >-->
    <!--              <input-->
    <!--                class="form-check-input w-30px h-20px"-->
    <!--                type="checkbox"-->
    <!--                value="1"-->
    <!--                checked="checked"-->
    <!--                name="notifications"-->
    <!--              />-->
    <!--              <span class="form-check-label text-muted fs-7">-->
    <!--                Notifications-->
    <!--              </span>-->
    <!--            </label>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->
    <!--      </div>-->
    <!--      &lt;!&ndash;end::Menu sub&ndash;&gt;-->
    <!--    </div>-->
    <!--    &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--    &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--    <div class="menu-item px-5">-->
    <!--      <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--        My Statements-->
    <!--      </router-link>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--    &lt;!&ndash;begin::Menu separator&ndash;&gt;-->
    <!--    <div class="separator my-2"></div>-->
    <!--    &lt;!&ndash;end::Menu separator&ndash;&gt;-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      data-kt-menu-flip="center, top"
      data-kt-menu-placement="left-start"
      data-kt-menu-trigger="hover"
    >
      <!--      <router-link to="/pages/profile/overview" class="menu-link px-5">-->
      <div class="menu-link px-5">
        <span class="menu-title position-relative">
          {{ $t("Language") }}
          <span
            class="
              fs-8
              rounded
              bg-light
              px-3
              py-2
              position-absolute
              translate-middle-y
              top-50
              end-0
            "
          >
            {{ currentLangugeLocale.name }}
            <img
              :src="currentLangugeLocale.flag"
              alt="metronic"
              class="w-15px h-15px rounded-1 ms-2"
            />
          </span>
        </span>
      </div>
      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            :class="{ active: currentLanguage('uz') }"
            class="menu-link d-flex px-5"
            href="#"
            @click="setLang('uz')"
          >
            <span class="symbol symbol-20px me-4">
              <img
                alt="metronic"
                class="rounded-1"
                src="/media/flags/uzbekistan.svg"
              />
            </span>
            {{ $t("Uzbek") }}
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            :class="{ active: currentLanguage('ru') }"
            class="menu-link d-flex px-5"
            href="#"
            @click="setLang('ru')"
          >
            <span class="symbol symbol-20px me-4">
              <img
                alt="metronic"
                class="rounded-1"
                src="/media/flags/russia.svg"
              />
            </span>
            {{ $t("Russian") }}
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            :class="{ active: currentLanguage('en') }"
            class="menu-link d-flex px-5"
            href="#"
            @click="setLang('en')"
          >
            <span class="symbol symbol-20px me-4">
              <img
                alt="metronic"
                class="rounded-1"
                src="/media/flags/united-states.svg"
              />
            </span>
            {{ $t("English") }}
          </a>
        </div>
        <!--end::Menu item-->

        <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
        <!--        <div class="menu-item px-3">-->
        <!--          <a-->
        <!--            @click="setLang('es')"-->
        <!--            href="#"-->
        <!--            class="menu-link d-flex px-5"-->
        <!--            :class="{ active: currentLanguage('es') }"-->
        <!--          >-->
        <!--            <span class="symbol symbol-20px me-4">-->
        <!--              <img-->
        <!--                class="rounded-1"-->
        <!--                src="media/flags/spain.svg"-->
        <!--                alt="metronic"-->
        <!--              />-->
        <!--            </span>-->
        <!--            Spanish-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

        <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
        <!--        <div class="menu-item px-3">-->
        <!--          <a-->
        <!--            @click="setLang('de')"-->
        <!--            href="#"-->
        <!--            class="menu-link d-flex px-5"-->
        <!--            :class="{ active: currentLanguage('de') }"-->
        <!--          >-->
        <!--            <span class="symbol symbol-20px me-4">-->
        <!--              <img-->
        <!--                class="rounded-1"-->
        <!--                src="media/flags/germany.svg"-->
        <!--                alt="metronic"-->
        <!--              />-->
        <!--            </span>-->
        <!--            German-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

        <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
        <!--        <div class="menu-item px-3">-->
        <!--          <a-->
        <!--            @click="setLang('ja')"-->
        <!--            href="#"-->
        <!--            class="menu-link d-flex px-5"-->
        <!--            :class="{ active: currentLanguage('ja') }"-->
        <!--          >-->
        <!--            <span class="symbol symbol-20px me-4">-->
        <!--              <img-->
        <!--                class="rounded-1"-->
        <!--                src="media/flags/japan.svg"-->
        <!--                alt="metronic"-->
        <!--              />-->
        <!--            </span>-->
        <!--            Japanese-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->

        <!--        &lt;!&ndash;begin::Menu item&ndash;&gt;-->
        <!--        <div class="menu-item px-3">-->
        <!--          <a-->
        <!--            @click="setLang('fr')"-->
        <!--            href="#"-->
        <!--            class="menu-link d-flex px-5"-->
        <!--            :class="{ active: currentLanguage('fr') }"-->
        <!--          >-->
        <!--            <span class="symbol symbol-20px me-4">-->
        <!--              <img-->
        <!--                class="rounded-1"-->
        <!--                src="media/flags/france.svg"-->
        <!--                alt="metronic"-->
        <!--              />-->
        <!--            </span>-->
        <!--            French-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Menu item&ndash;&gt;-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--      &lt;!&ndash;begin::Menu item&ndash;&gt;-->
    <!--      <div class="menu-item px-5 my-1">-->
    <!--        <router-link to="/pages/profile/overview" class="menu-link px-5">-->
    <!--          Account Settings-->
    <!--        </router-link>-->
    <!--      </div>-->
    <!--      &lt;!&ndash;end::Menu item&ndash;&gt;-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a class="menu-link px-5" @click="signOut()"> {{ $t("Sign out") }} </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    // setTimeout(() => {
    let obj = JSON.stringify(localStorage.getItem("userData"));
    obj = JSON.parse(JSON.parse(obj));
    this.email = obj["email"];
    // }, 500);
  },
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();

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
        flag: "/media/flags/uzbekistan.svg",
        name: "O'zbek",
      },
      ru: {
        flag: "/media/flags/russia.svg",
        name: "Русский",
      },
    };

    const signOut = () => {
      store
        .dispatch(Actions.LOGOUT)
        .then(() => router.push({ name: "sign-in" }));
    };

    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
      location.reload();
    };

    const currentLanguage = (lang) => {
      return i18n.locale.value === lang;
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value];
    });

    return {
      signOut,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
    };
  },
});
</script>
