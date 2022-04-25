<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      id="kt_login_signin_form"
      :validation-schema="login"
      class="form w-100"
      name="login"
      @submit="onSubmitLogin"
    >
      <div class="text-center">
        <img
          :src="'http://site.dataprizma.uz/' + logo"
          alt="Logo"
          class="h-75px"
        />
      </div>
      <!--begin::Heading-->
      <!--      <div class="text-center mb-10">-->
      <!--        &lt;!&ndash;begin::Title&ndash;&gt;-->
      <!--        <h1 class="text-dark mb-3">Sign In to Metronic</h1>-->
      <!--        &lt;!&ndash;end::Title&ndash;&gt;-->

      <!--        &lt;!&ndash;begin::Link&ndash;&gt;-->
      <!--        <div class="text-gray-400 fw-bold fs-4">-->
      <!--          New Here?-->

      <!--          <router-link to="/sign-up" class="link-primary fw-bolder">-->
      <!--            Create an Account-->
      <!--          </router-link>-->
      <!--        </div>-->
      <!--        &lt;!&ndash;end::Link&ndash;&gt;-->
      <!--      </div>-->
      <!--begin::Heading-->

      <!--      <div class="mb-10 bg-light-info p-8 rounded">-->
      <!--        <div class="text-info">-->
      <!--          Use account <strong>admin@demo.com</strong> and password-->
      <!--          <strong>demo</strong> to continue.-->
      <!--        </div>-->
      <!--      </div>-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bolder text-dark">{{
          $t("email")
        }}</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          autocomplete="off"
          class="form-control form-control-lg form-control-solid"
          name="email"
          type="text"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bolder text-dark fs-6 mb-0">{{
            $t("password")
          }}</label>
          <!--end::Label-->

          <!--begin::Link-->
          <router-link class="link-primary fs-6 fw-bolder" to="/password-reset">
            {{ $t("forgot_password") }}
          </router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
          autocomplete="off"
          class="form-control form-control-lg form-control-solid"
          name="password"
          type="password"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
          id="kt_sign_in_submit"
          ref="submitButton"
          class="btn btn-lg btn-primary w-100 mb-5"
          type="submit"
        >
          <span class="indicator-label"> {{ $t("continue") }} </span>

          <span class="indicator-progress">
            {{ $t("please_wait") }}
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->

        <!--        &lt;!&ndash;begin::Separator&ndash;&gt;-->
        <!--        <div class="text-center text-muted text-uppercase fw-bolder mb-5">-->
        <!--          or-->
        <!--        </div>-->
        <!--        &lt;!&ndash;end::Separator&ndash;&gt;-->

        <!--begin::Google link-->
        <a
          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
          href="#"
          @click="setLang('uz')"
        >
          <img
            alt="Logo"
            class="h-20px me-3"
            src="/media/flags/uzbekistan.svg"
          />
          {{ $t("change_uz") }}
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
          href="#"
          @click="setLang('ru')"
        >
          <img alt="Logo" class="h-20px me-3" src="media/flags/russia.svg" />
          {{ $t("change_ru") }}
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
          class="btn btn-flex flex-center btn-light btn-lg w-100"
          href="#"
          @click="setLang('en')"
        >
          <img
            alt="Logo"
            class="h-20px me-3"
            src="/media/flags/united-states.svg"
          />
          {{ $t("change_en") }}
        </a>
        <!--end::Google link-->

        <!--        &lt;!&ndash;begin::Google link&ndash;&gt;-->
        <!--        <a-->
        <!--          href="#"-->
        <!--          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"-->
        <!--        >-->
        <!--          <img-->
        <!--            alt="Logo"-->
        <!--            src="media/svg/brand-logos/google-icon.svg"-->
        <!--            class="h-20px me-3"-->
        <!--          />-->
        <!--          Continue with Google-->
        <!--        </a>-->
        <!--        &lt;!&ndash;end::Google link&ndash;&gt;-->

        <!--        &lt;!&ndash;begin::Google link&ndash;&gt;-->
        <!--        <a-->
        <!--          href="#"-->
        <!--          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"-->
        <!--        >-->
        <!--          <img-->
        <!--            alt="Logo"-->
        <!--            src="media/svg/brand-logos/facebook-4.svg"-->
        <!--            class="h-20px me-3"-->
        <!--          />-->
        <!--          Continue with Facebook-->
        <!--        </a>-->
        <!--        &lt;!&ndash;end::Google link&ndash;&gt;-->

        <!--        &lt;!&ndash;begin::Google link&ndash;&gt;-->
        <!--        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100">-->
        <!--          <img-->
        <!--            alt="Logo"-->
        <!--            src="media/svg/brand-logos/apple-black.svg"-->
        <!--            class="h-20px me-3"-->
        <!--          />-->
        <!--          Continue with Apple-->
        <!--        </a>-->
        <!--        &lt;!&ndash;end::Google link&ndash;&gt;-->
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
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import axios from "axios";
import requests from "@/request/dataprizma_request_links/request_links";
import { useI18n } from "vue-i18n";
import { setLocale } from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      logo: "",
    };
  },
  created() {
    localStorage.setItem("userData", '{"token": "123"}');
    localStorage.setItem("token", "");
    axios.defaults.baseURL = requests.dataprizma[0];
    axios.get("company/list").then((response) => {
      localStorage.setItem("companyIcon", response.data[0]["uploadPath"]);
      this.logo = localStorage.getItem("companyIcon") as string;
    });
    axios.defaults.baseURL = requests.dataprizma[1];
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

    setLocale({
      mixed: {
        required: i18n.t("forms_validation_required"),
      },
      string: {
        email: i18n.t("forms_validation_email"),
      },
    });

    const countries = {
      en: {
        flag: "media/flags/united-states.svg",
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
    // const requestLink = "http://192.168.6.4:8083/api/v1/";

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string()
        .email(i18n.t("forms_validation_email"))
        .required(i18n.t("forms_validation_required")),
      password: Yup.string().required(i18n.t("forms_validation_required")),
    });

    //Form submit function
    const onSubmitLogin = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Dummy delay
      setTimeout(() => {
        // Send login request

        let login = document.forms["login"];
        let email = login["email"].value;
        let password = login["password"].value;

        let request = {
          email: `${email}`,
          password: `${password}`,
        };
        request = JSON.parse(JSON.stringify(request));

        // debugger;

        axios.post("login/tokenizer", request).then((response) => {
          if (response.status !== 200) {
            throw response.status;
          }
        });

        axios
          .post("login/tokenizer", request)
          .then((response) => {
            if (response.status !== 200) {
              throw response.status;
            }

            localStorage.setItem("userData", JSON.stringify(response["data"]));
            localStorage.setItem(
              "token",
              JSON.stringify(response["data"]["token"])
            );
            // (function () {
            //   // Go to page after successfully login
            //   Swal.fire({
            //     text: "All is cool! Now you submit this form",
            //     icon: "success",
            //     buttonsStyling: false,
            //     confirmButtonText: "Ok, got it!",
            //     customClass: {
            //       confirmButton: "btn fw-bold btn-light-primary",
            //     },
            //   });
            // })();
          })
          .then(() => {
            router.push("/");
          })
          .catch(() => {
            Swal.fire({
              text: translate("incorrect_data"),
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: translate("try_again"),
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        //Deactivate indicator
        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
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
      onSubmitLogin,
      login,
      submitButton,
      currentLanguage,
      currentLangugeLocale,
      setLang,
    };
  },
});
</script>
