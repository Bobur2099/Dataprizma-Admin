    <template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      name="login"
    >
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
        <label class="form-label fs-6 fw-bolder text-dark">Email</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
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
          <label class="form-label fw-bolder text-dark fs-6 mb-0"
            >Password</label
          >
          <!--end::Label-->

          <!--begin::Link-->
          <router-link to="/password-reset" class="link-primary fs-6 fw-bolder">
            Forgot Password ?
          </router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
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
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continue </span>

          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->

        <!--begin::Separator-->
        <div class="text-center text-muted text-uppercase fw-bolder mb-5">
          or
        </div>
        <!--end::Separator-->

        <!--begin::Google link-->
        <a
          href="#"
          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            src="media/svg/brand-logos/google-icon.svg"
            class="h-20px me-3"
          />
          Continue with Google
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
          href="#"
          class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            src="media/svg/brand-logos/facebook-4.svg"
            class="h-20px me-3"
          />
          Continue with Facebook
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100">
          <img
            alt="Logo"
            src="media/svg/brand-logos/apple-black.svg"
            class="h-20px me-3"
          />
          Continue with Apple
        </a>
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import axios from "axios";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  created() {
    localStorage.setItem("userData", '{"token": "123"}');
    localStorage.setItem("token", "");
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    // const requestLink = "http://192.168.6.4:8083/api/v1/";

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
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
        console.log(email, password);

        let request = {
          email: `${email}`,
          password: `${password}`,
        };
        request = JSON.parse(JSON.stringify(request));

        // debugger;

        axios.post("login/tokenizer", request).then((response) => {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            throw response.status;
          }
        });

        axios
          .post("login/tokenizer", request)
          .then((response) => {
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " +
                  response.status
              );
              throw response.status;
            }

            console.log(response);
            localStorage.setItem("userData", JSON.stringify(response["data"]));
            localStorage.setItem("token", JSON.stringify(response["data"]["token"]));
            (function () {
              // Go to page after successfully login
              Swal.fire({
                text: "All is cool! Now you submit this form",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            })();
          })
          .then(() => {
            router.push("/");
          })
          .catch(() => {
            Swal.fire({
              text: "The login detail is incorrect",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
            console.log("Error happened");
          });

        //Deactivate indicator
        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
    };
  },
});
</script>
