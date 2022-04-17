<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      @submit="onSubmitForgotPassword"
      id="kt_login_password_reset_form"
      :validation-schema="forgotPassword"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">{{ $t("forgot_password") }}</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">
          {{ $t("enter_email_reset") }}
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-label fw-bolder text-gray-900 fs-6">{{
          $t("email")
        }}</label>
        <Field
          class="form-control form-control-solid"
          type="email"
          placeholder=""
          name="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex flex-wrap justify-content-center pb-lg-0">
        <button
          type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
          class="btn btn-lg btn-primary fw-bolder me-4"
        >
          <span class="indicator-label"> {{ $t("submit") }} </span>
          <span class="indicator-progress">
            {{ $t("please_wait") }}
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <router-link
          to="/sign-in"
          class="btn btn-lg btn-light-primary fw-bolder"
          >{{ $t("cancel") }}</router-link
        >
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const i18n = useI18n();
    const { t, te } = useI18n();

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: "/media/flags/united-states.svg",
        name: "English",
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

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const forgotPassword = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
    });

    //Form submit function
    const onSubmitForgotPassword = (values) => {
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      localStorage.setItem("token", "");
      localStorage.setItem("sign_in", "false");

      // dummy delay
      setTimeout(() => {
        // Send login request
        values.to = values.email;
        delete values.email;
        values.config = {
          headers: { "content-type": "multipart/form-data" },
        };
        store
          .dispatch(Actions.FORGOT_PASSWORD, values)
          .then(() => {
            Swal.fire({
              text: translate("submitted"),
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              // router.push({ name: "sign-in" });
            });
          })
          .catch(() => {
            // Alert then login failed
            Swal.fire({
              text: store.getters.getErrors[0],
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: translate("try_again"),
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

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
      onSubmitForgotPassword,
      forgotPassword,
      submitButton,
      currentLanguage,
      currentLangugeLocale,
      setLang,
    };
  },
});
</script>
