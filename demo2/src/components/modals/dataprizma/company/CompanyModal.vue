<template>
  <!--begin::Modal - New Card-->
  <div
    id="kt_modal_company"
    ref="newCardModalRef"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div v-if="create < 2" class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>
            <span v-if="create === 1"> {{ $t("create") }}</span
            ><span v-if="create === 0"> {{ $t("update") }}</span>
            {{ $t("company") }}
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
            :validation-schema="validationSchema"
            class="form row"
            @submit="submit"
          >
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("file") }}</span>
              </label>
              <!--end::Label-->

              <Field
                ref="file-upload"
                class="form-control form-control-solid file"
                name="file"
                type="file"
                @change="fileChosen($event)"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="file" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("email") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateEmail"
                class="form-control form-control-solid"
                name="email"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("address_uz") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateAddressUz"
                class="form-control form-control-solid"
                name="addressUz"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="addressUz" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("address_ru") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateAddressRu"
                class="form-control form-control-solid"
                name="addressRu"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="addressRu" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("address_en") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateAddressEn"
                class="form-control form-control-solid"
                name="addressEn"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="addressEn" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("phone") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updatePhone"
                class="form-control form-control-solid"
                name="phone"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("map_x") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateMapX"
                class="form-control form-control-solid"
                name="mapX"
                type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="mapX" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span> {{ $t("map_y") }}</span>
              </label>
              <!--end::Label-->

              <Field
                v-model="updateMapY"
                class="form-control form-control-solid"
                name="mapY"
                type="text"
              />

              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="mapY" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                id="kt_modal_new_card_submit"
                ref="submitButtonRef"
                class="btn btn-primary"
                type="submit"
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
              <button
                id="kt_modal_reset"
                class="btn btn-white me-3 reset"
                @click="clearInputs()"
              >
                {{ $t("discard") }}
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
      v-if="create === 2"
      class="modal-dialog modal-dialog-centered mw-1000px"
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
            :validation-schema="validationSchema"
            class="form"
            @submit="submit"
          >
            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                id="kt_modal_fail_submit"
                ref="submitButtonRef"
                class="btn btn-danger mx-5"
                type="submit"
                @click="submit('cancel')"
              >
                <span class="indicator-label"> Cancel </span>
                <span class="indicator-progress">
                  {{ $t("please_wait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button
                id="kt_modal_success_submit"
                ref="submitButtonRef"
                class="btn btn-primary"
                type="submit"
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
import { setLocale } from "yup";

// interface CardData {
//   nameOnCard: string;
//   cardNumber: string;
//   expirationMonth: string;
//   expirationYear: string;
//   cvv: string;
// }

export default defineComponent({
  name: "contact-modal",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      updateFile: new File([new Blob()], ""),
      updateEmail: "",
      updatePhone: "",
      updateAddressUz: "",
      updateAddressRu: "",
      updateAddressEn: "",
      updateMapX: "",
      updateMapY: "",
      responseError: 200,
      responseErrorObject: {},
      error: 0,
    };
  },
  props: ["updateId", "create", "openModal"],
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  watch: {
    updateId(newValue) {
      this.autocompleteFields(newValue);
    },
    create(newValue) {
      newValue;
    },
    openModal(newValue) {
      this.autocompleteFields(this.updateId);
    },
  },
  methods: {
    fileChosen(e) {
      this.updateFile = e.target.files;
      const formCleaner = document.querySelectorAll(".reset")[0];

      function func() {
        e.target.value = "";
        formCleaner.removeEventListener("click", func);
      }

      formCleaner.addEventListener("click", func);
    },
    isImage(file) {
      return (
        file !== undefined &&
        (file.name.endsWith(".jpg") ||
          file.name.endsWith(".jpeg") ||
          file.name.endsWith(".png") ||
          file.name.endsWith(".svg"))
      );
    },
    autocompleteFields(newValue) {
      const company_items = JSON.parse(Object(localStorage.getItem("company")));
      let company_item = {
        email: "",
        phone: "",
        addressUz: "",
        addressRu: "",
        addressEn: "",
        x: "",
        y: "",
      };
      for (const item of company_items) {
        if (item.id === newValue) {
          company_item = Object(item);
          for (let property in company_item) {
            if (company_item[property] === null) {
              company_item[property] = "";
            }
          }
          break;
        }
      }
      this.updateEmail = company_item.email;
      this.updatePhone = company_item.phone;
      this.updateAddressUz = company_item.addressUz;
      this.updateAddressRu = company_item.addressRu;
      this.updateAddressEn = company_item.addressEn;
      this.updateMapX = company_item.x;
      this.updateMapY = company_item.y;
    },
    clearInputs() {
      this.updateEmail = "";
      this.updatePhone = "";
      this.updateAddressUz = "";
      this.updateAddressRu = "";
      this.updateAddressEn = "";
      this.updateMapX = "";
      this.updateMapY = "";
    },
    createItem(datas) {
      axios
        .post(`company/create`, datas, {
          headers: {
            "Content-Type": "multipart/form-data",
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
        .put(`company/update/${id}`, datas, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.$emit("table-load");
          }
        })
        .catch((err) => {
          this.responseError = err.response.status;
          this.responseErrorObject = Object(err.response);
        });
    },
    deleteItem(id) {
      axios
        .delete(`company/delete/${id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          this.$emit("table-load");
        });
    },
    doRequest(create, id) {
      axios.defaults.baseURL = requests.dataprizma[0];
      const keys = [
        "file",
        "email",
        "addressUz",
        "addressRu",
        "addressEn",
        "phone",
        "x",
        "y",
      ];

      this.responseError = 200;
      this.responseErrorObject = {};

      let datas = new FormData();
      datas.append(keys[0], this.updateFile[0]);
      datas.append(keys[1], this.updateEmail.trim());
      datas.append(keys[2], this.updateAddressUz.trim());
      datas.append(keys[3], this.updateAddressRu.trim());
      datas.append(keys[4], this.updateAddressEn.trim());
      datas.append(keys[5], this.updatePhone.trim());
      datas.append(keys[6], this.updateMapX.trim());
      datas.append(keys[7], this.updateMapY.trim());

      for (let i of keys) {
        if (
          (datas.get(i) === "undefined" ||
            datas.get(i) === "" ||
            datas.get(i) === null) &&
          create !== 2
        ) {
          this.error = 1;
          return;
        }
      }
      if (!this.isImage(this.updateFile[0]) && create !== 2) {
        this.error = 2;
        return;
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
      axios.defaults.baseURL = requests.dataprizma[1];
      this.error = 0;
    },
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);
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

    setLocale({
      mixed: {
        required: i18n.t("forms_validation_required"),
      },
      string: {
        email: i18n.t("forms_validation_email"),
      },
    });

    const validationSchema = Yup.object().shape({
      file: Yup.array()
        .required(translate("forms_validation_file"))
        .label("File"),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
      addressUz: Yup.string().required(),
      addressRu: Yup.string().required(),
      addressEn: Yup.string().required(),
      mapX: Yup.string().required(),
      mapY: Yup.string().required(),
    });

    const submit = (text) => {
      if (!submitButtonRef.value) {
        return;
      }

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

      function errorAlert(text, doThen = false) {
        Swal.fire({
          text: translate(text),
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: translate("try_again"),
          customClass: {
            confirmButton: "btn fw-bold btn-light-danger",
          },
        }).then(() => {
          if (doThen) {
            location.reload();
          }
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
        const responseError = instance?.data.responseError;
        const responseErrorObject = instance?.data.responseErrorObject;

        if (responseError === 500) {
          errorAlert("Invalid data was given");
        } else if (responseError === 401) {
          errorAlert("You are not authorized", true);
        }

        if (text !== "cancel" && responseError === 200) {
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
      }, 2000);
    };

    return {
      // cardData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>
