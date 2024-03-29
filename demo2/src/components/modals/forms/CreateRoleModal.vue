<template>
  <!--begin::Modal - New Card-->
  <div
    id="kt_modal_create_role"
    ref="newCardModalRef"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>{{ $t("add_new_role") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <!--begin::Form-->
          <Form
            id="kt_modal_new_card_form"
            :validation-schema="validationSchema"
            class="form"
            @submit="submit"
          >
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span>{{ $t("name") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="name"
                class="form-control form-control-solid"
                name="name"
                placeholder=""
                type="text"
              />
              <div class="fv-plugins-message-container">
                <!--                <div class="fv-help-block">-->
                <!--                  <ErrorMessage name="nameOnCard" />-->
                <!--                </div>-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                  $t("code")
                }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="code"
                  class="form-control form-control-solid"
                  name="code"
                  placeholder="Enter role code"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <!--                  <div class="fv-help-block">-->
                  <!--                    <ErrorMessage name="cardNumber" />-->
                  <!--                  </div>-->
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                id="kt_modal_new_card_cancel"
                class="btn btn-white me-3 create-role-reset"
                type="reset"
              >
                {{ $t("discard") }}
              </button>

              <button
                id="kt_modal_new_card_submit"
                ref="submitButtonRef"
                class="btn btn-primary"
                type="submit"
                @click="
                  createRole();
                  submit();
                "
              >
                <span class="indicator-label"> {{ $t("submit") }} </span>
                <span class="indicator-progress">
                  {{ $t("please_wait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
            <!--end::Actions-->
          </Form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";
import axios from "axios";
import { useI18n } from "vue-i18n";

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "create-role-modal",
  data: function() {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"]
    };
  },
  components: {
    // ErrorMessage,
    Field,
    Form
  },
  methods: {
    createRole() {
      let roleResponseDatas = {};
      roleResponseDatas["name"] = this.name;
      roleResponseDatas["code"] = this.code;
      axios
        .post("/role/create", roleResponseDatas, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        .then((response) => {
          if (response.status !== 200) {
            // alert("It was not created");
            Swal.fire({
              text: "Form submitted with errors!",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-danger"
              }
            });
          } else {
            // alert("It was created");
            // this.$emit("table-load");
            // this.name = "";
            // this.code = "";
            setTimeout(() => {
              Swal.fire({
                text: "Form has been successfully submitted!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn btn-primary"
                }
              }).then(() => {
                // hideModal(cardModel);
                // this.roleId = -1;
                // this.email = "";
                // this.password = "";
                const Element: HTMLElement = document.querySelector(
                  "button[type=reset].create-role-reset"
                ) as HTMLElement;
                Element.click();
                this.$emit("table-load");
              });
            }, 2000);
          }
        });
    }
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const cardData = ref<CardData>({
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      expirationMonth: "",
      expirationYear: "",
      cvv: ""
    });

    const validationSchema = Yup.object().shape({
      nameOnCard: Yup.string().required().label("Name"),
      cardNumber: Yup.string().required().label("Card number"),
      expirationMonth: Yup.string().required().label("Month"),
      expirationYear: Yup.string().required().label("Year"),
      cvv: Yup.string().required().label("CVV")
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }
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

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        // Swal.fire({
        //   text: "Form has been successfully submitted!",
        //   icon: "success",
        //   buttonsStyling: false,
        //   confirmButtonText: "Ok, got it!",
        //   customClass: {
        //     confirmButton: "btn btn-primary",
        //   },
        // }).then(() => {
        hideModal(newCardModalRef.value);
        // });
      }, 2000);
    };

    return {
      cardData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef
    };
  }
});
</script>
