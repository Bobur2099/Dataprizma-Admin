<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_create_user"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>{{ $t("add_new_member") }}</h2>
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
            class="form"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span class="required">{{ $t("name") }}</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a card holder's name"
                ></i>
              </label>
              <!--end::Label-->

              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Name"
                name="nameOnCard"
                v-model="email"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nameOnCard" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label class="required fs-6 fw-bold form-label mb-2">Password</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="Password"
                  name="cardNumber"
                  v-model="password"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="cardNumber" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <div class="row fv-row">
              <!--begin::Col-->
              <div class="col-12">
                <Field
                  v-model="roleId"
                  name="expirationMonth"
                  class="form-select form-select-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Month"
                  as="select"
                >
                  <option v-bind:value="-1" selected>Choose the role</option>
                  <option
                    v-for="(item, index) in roleDatas"
                    v-bind:value="item.id"
                    v-bind:key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="expirationMonth" />
                  </div>
                </div>
              </div>
            </div>

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                type="reset"
                id="kt_modal_new_card_cancel"
                class="btn btn-white me-3 create-user-reset"
              >
                {{ $t("discard") }}
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
                class="btn btn-primary"
                @click="
                  createUser(newCardModalRef.value);
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
  data: function () {
    return {
      email: "",
      password: "",
      roleId: -1,
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      userDatas: [{ id: 1 }],
      roleDatas: [],
    };
  },
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  methods: {
    createUser(cardModel) {
      let userResponseDatas = {};
      userResponseDatas["email"] = this.email;
      userResponseDatas["password"] = this.password;
      userResponseDatas["roleId"] = Number(this.roleId);
      axios
        .post("/login/create", userResponseDatas, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
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
                confirmButton: "btn btn-danger",
              },
            }).then(() => {
              hideModal(cardModel);
            });
          } else {
            // alert("It was created");
            this.tableData();
            setTimeout(() => {
              Swal.fire({
                text: "Form has been successfully submitted!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(() => {
                // hideModal(cardModel);
                // this.roleId = -1;
                // this.email = "";
                // this.password = "";
                const Element: HTMLElement = document.querySelector("button[type=reset].create-user-reset") as HTMLElement;
                Element.click();
                this.$emit("table-load");
              });
            }, 2000);
          }
        });
    },
    tableData() {
      axios
        .get("login/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.userDatas = response.data;
            for (let i = 0; i < this.userDatas.length; i++) {
              for (let j = 0; j < this.userDatas.length; j++) {
                if (this.userDatas[i].id < this.userDatas[j].id) {
                  let c = this.userDatas[i];
                  this.userDatas[i] = this.userDatas[j];
                  this.userDatas[j] = c;
                }
              }
            }
          }
        });
      axios
        .get("role/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.roleDatas = response.data;
          }
        });
    },
  },
  created() {
    this.tableData();
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef:any = ref<null | HTMLElement>(null);

    const cardData = ref<CardData>({
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      expirationMonth: "",
      expirationYear: "",
      cvv: "",
    });

    const validationSchema = Yup.object().shape({
      nameOnCard: Yup.string().required().label("Name"),
      cardNumber: Yup.string().required().label("Card number"),
      expirationMonth: Yup.string().required().label("Month"),
      expirationYear: Yup.string().required().label("Year"),
      cvv: Yup.string().required().label("CVV"),
    });

    const submit = () => {
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
      if (!submitButtonRef.value) {
        return;
      }

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
      newCardModalRef,
    };
  },
});
</script>
