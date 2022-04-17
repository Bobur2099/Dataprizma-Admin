<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_user"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px" v-if="create < 2">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>
            <span v-if="create == 1">{{ $t("create") }}</span
            ><span v-if="create == 0">{{ $t("update") }}</span>
            {{ $t("member") }}
          </h2>
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
                <span>{{ $t("email") }}</span>
              </label>
              <!--end::Label-->

              <Field
                type="text"
                class="form-control form-control-solid"
                name="email"
                v-model="email"
              />
              <div class="fv-plugins-message-container">
                <!--                <div class="fv-help-block">-->
                <!--                  <ErrorMessage name="nameOnCard" />-->
                <!--                </div>-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row" v-if="create === 1">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("password")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="password"
                  v-model="password"
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
                  <option v-bind:value="-1" selected>
                    {{ $t("choose_the_role") }}
                  </option>
                  <option
                    v-for="(item, index) in roleDatas"
                    v-bind:value="item.id"
                    v-bind:key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="fv-plugins-message-container">
                  <!--                  <div class="fv-help-block">-->
                  <!--                    <ErrorMessage name="expirationMonth" />-->
                  <!--                  </div>-->
                </div>
              </div>
            </div>

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                type="reset"
                id="kt_modal_new_card"
                class="btn btn-white me-3 reset create-user-reset"
              >
                {{ $t("discard") }}
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
                class="btn btn-primary"
                @click="
                  doRequest(create, updateId);
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

    <div
      class="modal-dialog modal-dialog-centered mw-1000px"
      v-if="create === 2"
    >
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>{{ $t("are_you_sure") }}</h2>
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
            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_fail_submit"
                class="btn btn-danger mx-5"
                @click="submit('cancel')"
              >
                <span class="indicator-label"> {{ $t("cancel") }} </span>
                <span class="indicator-progress">
                  {{ $t("please_wait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_success_submit"
                class="btn btn-primary"
                @click="
                  doRequest(create, updateId);
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
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";
import axios from "axios";
import requests from "@/request/dataprizma_request_links/request_links";
import { useI18n } from "vue-i18n";

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "user-modal",
  data: function () {
    return {
      email: "",
      password: "",
      roleId: -1,
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      userDatas: [{ id: 1 }],
      roleDatas: [],
      error: 0,
    };
  },
  props: ["updateId", "create"],
  components: {
    // ErrorMessage,
    Field,
    Form,
  },
  watch: {
    updateId(newValue) {
      const user_items = JSON.parse(Object(localStorage.getItem("users")));
      let user_item = {
        email: "",
        password: "",
        roleId: "",
        empty: true,
      };
      for (const item of user_items) {
        if (item.id === newValue) {
          user_item = Object(item);
        }
      }
      this.email = user_item.email;
      this.password = user_item.password;
      this.roleId = Number(user_item.roleId);
      if (user_item.empty) {
        this.roleId = -1;
      }
    },
    create(newValue) {
      newValue;
    },
  },
  methods: {
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
    createItem(datas) {
      axios
        .post(`login/create`, datas, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.$emit("table-load");
          }
        });
    },
    updateItem(id, datas) {
      axios
        .put(`login/update/${id}`, datas, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.$emit("table-load");
          }
        });
    },
    deleteItem(id) {
      axios
        .delete(`login/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          this.$emit("table-load");
        });
    },
    doRequest(create, id) {
      const keys = ["email", "password", "roleId"];

      let datas = {};
      datas[keys[0]] = this.email.trim();
      datas[keys[1]] = this.password.trim();
      datas[keys[2]] = Number(this.roleId);

      for (let i of keys) {
        if (
          (datas[i] === "undefined" || datas[i] === "" || datas[i] === null) &&
          create !== 2
        ) {
          this.error = 1;
          return;
        }
      }
      switch (create) {
        case 1:
          this.createItem(datas);
          break;
        case 0:
          this.updateItem(id, datas);
          break;
        default:
          this.deleteItem(id);
          break;
      }
      this.error = 0;
    },
  },
  created() {
    this.tableData();
  },
  setup() {
    const submitButtonRef: any = ref<null | HTMLButtonElement>(null);
    const newCardModalRef: any = ref<null | HTMLElement>(null);
    const instance = getCurrentInstance();
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

    const submit = (text) => {
      function successAlert(text) {
        Swal.fire({
          text: translate(text),
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newCardModalRef.value);
        });
      }

      function errorAlert(text) {
        Swal.fire({
          text: translate(text),
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: translate("try_again"),
          customClass: {
            confirmButton: "btn fw-bold btn-light-danger",
          },
        });
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      if (text === "cancel") {
        hideModal(newCardModalRef.value);
        submitButtonRef.value.disabled = false;
        submitButtonRef.value?.removeAttribute("data-kt-indicator");
      }

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;
          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        const error = instance?.data.error;
        const create = instance?.props.create;

        if (text !== "cancel") {
          if (error === 0) {
            if (create === 1) {
              successAlert("item_added");
            } else if (create === 0) {
              successAlert("item_edited");
            } else if (create === 2) {
              successAlert("item_deleted");
            }
          } else {
            if (error === 1) {
              errorAlert("input_empty");
            } else if (error === 2) {
              errorAlert("file_not_image");
            }
          }
        }
      }, 1000);
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
