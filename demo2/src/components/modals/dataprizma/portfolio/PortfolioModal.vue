<template>
  <!--begin::Modal - New Card-->
  <div
    id="kt_modal_portfolio"
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
            <span v-if="create == 1"> {{ $t("create") }}</span
            ><span v-if="create == 0"> {{ $t("update") }}</span>
            {{ $t("portfolio") }} {{ $t("content") }}
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
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("header_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateHeaderUz"
                  class="form-control form-control-solid"
                  name="headerUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="headerUz" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("header_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateHeaderRu"
                  class="form-control form-control-solid"
                  name="headerRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="headerRu" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("header_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateHeaderEn"
                  class="form-control form-control-solid"
                  name="headerEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="headerEn" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextUz"
                  class="form-control form-control-solid"
                  name="textUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textUz" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextRu"
                  class="form-control form-control-solid"
                  name="textRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textRu" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextEn"
                  class="form-control form-control-solid"
                  name="textEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textEn" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("budget") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateBudget"
                  class="form-control form-control-solid"
                  name="budget"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="budget" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("location") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateLocation"
                  class="form-control form-control-solid"
                  name="location"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="location" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("client_name_uz") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateClientNameUz"
                  class="form-control form-control-solid"
                  name="clientNameUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="clientNameUz" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("client_name_ru") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateClientNameRu"
                  class="form-control form-control-solid"
                  name="clientNameRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="clientNameRu" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("client_name_en") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateClientNameEn"
                  class="form-control form-control-solid"
                  name="clientNameEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="clientNameEn" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">
                {{ $t("start_date") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateStartDate"
                  class="form-control form-control-solid"
                  name="startDate"
                  type="date"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="startDate" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("end_date")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateEndDate"
                  class="form-control form-control-solid"
                  name="endDate"
                  type="date"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="endDate" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <div class="text-center pt-15">
              <button
                id="kt_modal_new_card"
                class="btn btn-white me-3 reset"
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

export default defineComponent({
  name: "portfolio-modal",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      updateFile: new File([new Blob()], ""),
      updateHeaderUz: "",
      updateHeaderRu: "",
      updateHeaderEn: "",
      updateTextUz: "",
      updateTextRu: "",
      updateTextEn: "",
      updateBudget: "",
      updateLocation: "",
      updateClientNameUz: "",
      updateClientNameRu: "",
      updateClientNameEn: "",
      updateStartDate: "",
      updateEndDate: "",
      responseError: 200,
      error: 0,
    };
  },
  props: ["updateId", "create"],
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  watch: {
    updateId(newValue) {
      const portfolio_items = JSON.parse(
        Object(localStorage.getItem("portfolio"))
      );
      let portfolio_item = {
        budget: "",
        clientNameEn: "",
        clientNameRu: "",
        clientNameUz: "",
        endDate: "",
        headerEn: "",
        headerRu: "",
        headerUz: "",
        location: "",
        startDate: "",
        textEn: "",
        textRu: "",
        textUz: "",
      };
      for (const item of portfolio_items) {
        if (item.id === newValue) {
          portfolio_item = Object(item);
          for (let property in portfolio_item) {
            if (portfolio_item[property] === null) {
              portfolio_item[property] = "";
            }
          }
          break;
        }
      }
      let startDate = portfolio_item.startDate.split(".");
      let endDate = portfolio_item.endDate.split(".");
      let updateStartDate =
        startDate[2] + "-" + startDate[1] + "-" + startDate[0];
      let updateEndDate = endDate[2] + "-" + endDate[1] + "-" + endDate[0];

      this.updateBudget = portfolio_item.budget;
      this.updateClientNameEn = portfolio_item.clientNameEn;
      this.updateClientNameRu = portfolio_item.clientNameRu;
      this.updateClientNameUz = portfolio_item.clientNameUz;
      this.updateEndDate = updateEndDate;
      this.updateHeaderEn = portfolio_item.headerEn;
      this.updateHeaderRu = portfolio_item.headerRu;
      this.updateHeaderUz = portfolio_item.headerUz;
      this.updateLocation = portfolio_item.location;
      this.updateStartDate = updateStartDate;
      this.updateTextEn = portfolio_item.textEn;
      this.updateTextRu = portfolio_item.textRu;
      this.updateTextUz = portfolio_item.textUz;
    },
    create(newValue) {
      newValue;
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
    createItem(datas) {
      axios
        .post(`portfolio/create`, datas, {
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
        .put(`portfolio/update/${id}`, datas, {
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
    deleteItem(id) {
      axios
        .delete(`portfolio/delete/${id}`, {
          headers: {
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
        "headerUz",
        "headerRu",
        "headerEn",
        "textUz",
        "textRu",
        "textEn",
        "budget",
        "location",
        "clientNameUz",
        "clientNameRu",
        "clientNameEn",
        "startDate",
        "endDate",
      ];

      let startDate = this.updateStartDate.split("-");
      let endDate = this.updateEndDate.split("-");
      let updateStartDate =
        startDate[2] + "." + startDate[1] + "." + startDate[0];
      let updateEndDate = endDate[2] + "." + endDate[1] + "." + endDate[0];

      let datas = new FormData();
      datas.append(keys[0], this.updateFile[0]);
      datas.append(keys[1], this.updateHeaderUz.trim());
      datas.append(keys[2], this.updateHeaderRu.trim());
      datas.append(keys[3], this.updateHeaderEn.trim());
      datas.append(keys[4], this.updateTextUz.trim());
      datas.append(keys[5], this.updateTextRu.trim());
      datas.append(keys[6], this.updateTextEn.trim());
      datas.append(keys[7], this.updateBudget.trim());
      datas.append(keys[8], this.updateLocation.trim());
      datas.append(keys[9], this.updateClientNameUz.trim());
      datas.append(keys[10], this.updateClientNameRu.trim());
      datas.append(keys[11], this.updateClientNameEn.trim());
      datas.append(keys[12], updateStartDate);
      datas.append(keys[13], updateEndDate);

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
    });

    const validationSchema = Yup.object().shape({
      file: Yup.array()
        .required(translate("forms_validation_file"))
        .label("File"),
      budget: Yup.string().required(),
      clientNameEn: Yup.string().required(),
      clientNameRu: Yup.string().required(),
      clientNameUz: Yup.string().required(),
      endDate: Yup.string().required(),
      headerEn: Yup.string().required(),
      headerRu: Yup.string().required(),
      headerUz: Yup.string().required(),
      location: Yup.string().required(),
      startDate: Yup.string().required(),
      textEn: Yup.string().required(),
      textRu: Yup.string().required(),
      textUz: Yup.string().required(),
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

        if (responseError === 500) {
          errorAlert("Too much text was given to input");
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
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>
