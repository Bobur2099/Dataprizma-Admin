<template>
  <!--begin::Modal - New Card-->
  <div
    id="kt_modal_advertise"
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
            {{ $t("create") }} {{ $t("main") }}
            {{ $t("content") }}
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
                $t("topic_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTopicUz"
                  class="form-control form-control-solid"
                  name="topicUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="topicUz" />
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
                $t("topic_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTopicRu"
                  class="form-control form-control-solid"
                  name="topicRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="topicRu" />
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
                $t("topic_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTopicEn"
                  class="form-control form-control-solid"
                  name="topicEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="topicEn" />
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
                $t("paragraph_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateParagraphUz"
                  class="form-control form-control-solid"
                  name="paragraphUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="paragraphUz" />
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
                $t("paragraph_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateParagraphRu"
                  class="form-control form-control-solid"
                  name="paragraphRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="paragraphRu" />
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
                $t("paragraph_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateParagraphEn"
                  class="form-control form-control-solid"
                  name="paragraphEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="paragraphEn" />
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
              <label class="fs-6 fw-bold form-label mb-2"
                >{{ $t("primary") }} {{ $t("text_uz") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryTextUz"
                  class="form-control form-control-solid"
                  name="primaryTextUz"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryTextUz" />
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
              <label class="fs-6 fw-bold form-label mb-2"
                >{{ $t("primary") }} {{ $t("text_ru") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryTextRu"
                  class="form-control form-control-solid"
                  name="primaryTextRu"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryTextRu" />
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
              <label class="fs-6 fw-bold form-label mb-2"
                >{{ $t("primary") }} {{ $t("text_en") }}</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryTextEn"
                  class="form-control form-control-solid"
                  name="primaryTextEn"
                  type="text"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryTextEn" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
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
  name: "advertise",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      updateFile: new File([new Blob()], ""),
      updateTopicUz: "",
      updateTopicRu: "",
      updateTopicEn: "",
      updateHeaderUz: "",
      updateHeaderRu: "",
      updateHeaderEn: "",
      updateParagraphUz: "",
      updateParagraphRu: "",
      updateParagraphEn: "",
      updatePrimaryTextUz: "",
      updatePrimaryTextRu: "",
      updatePrimaryTextEn: "",
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
      const advertise_items = JSON.parse(
        Object(localStorage.getItem("advertise"))
      );
      let advertise_item = {
        headerEn: "",
        headerRu: "",
        headerUz: "",
        paragraphEn: "",
        paragraphRu: "",
        paragraphUz: "",
        primaryTextEn: "",
        primaryTextRu: "",
        primaryTextUz: "",
        topicEn: "",
        topicRu: "",
        topicUz: "",
      };
      for (const item of advertise_items) {
        if (item.id === newValue) {
          advertise_item = Object(item);
          for (let property in advertise_item) {
            if (advertise_item[property] === null) {
              advertise_item[property] = "";
            }
          }
          break;
        }
      }
      this.updateHeaderEn = advertise_item.headerEn;
      this.updateHeaderRu = advertise_item.headerRu;
      this.updateHeaderUz = advertise_item.headerUz;
      this.updateParagraphEn = advertise_item.paragraphEn;
      this.updateParagraphRu = advertise_item.paragraphRu;
      this.updateParagraphUz = advertise_item.paragraphUz;
      this.updatePrimaryTextEn = advertise_item.primaryTextEn;
      this.updatePrimaryTextRu = advertise_item.primaryTextRu;
      this.updatePrimaryTextUz = advertise_item.primaryTextUz;
      this.updateTopicEn = advertise_item.topicEn;
      this.updateTopicRu = advertise_item.topicRu;
      this.updateTopicUz = advertise_item.topicUz;
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
        .post(`advertise/create`, datas, {
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
        .put(`advertise/update/${id}`, datas, {
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
        .delete(`advertise/delete/${id}`, {
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
        "topicUz",
        "topicRu",
        "topicEn",
        "headerUz",
        "headerRu",
        "headerEn",
        "paragraphUz",
        "paragraphRu",
        "paragraphEn",
        "primaryUz",
        "primaryRu",
        "primaryEn",
      ];

      let datas = new FormData();
      datas.append(keys[0], this.updateFile[0]);
      datas.append(keys[1], this.updateTopicUz.trim());
      datas.append(keys[2], this.updateTopicRu.trim());
      datas.append(keys[3], this.updateTopicEn.trim());
      datas.append(keys[4], this.updateHeaderUz.trim());
      datas.append(keys[5], this.updateHeaderRu.trim());
      datas.append(keys[6], this.updateHeaderEn.trim());
      datas.append(keys[7], this.updateParagraphUz.trim());
      datas.append(keys[8], this.updateParagraphRu.trim());
      datas.append(keys[9], this.updateParagraphEn.trim());
      datas.append(keys[10], this.updatePrimaryTextUz.trim());
      datas.append(keys[11], this.updatePrimaryTextRu.trim());
      datas.append(keys[12], this.updatePrimaryTextEn.trim());

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
      headerEn: Yup.string().required(),
      headerRu: Yup.string().required(),
      headerUz: Yup.string().required(),
      paragraphEn: Yup.string().required(),
      paragraphRu: Yup.string().required(),
      paragraphUz: Yup.string().required(),
      primaryTextEn: Yup.string().required(),
      primaryTextRu: Yup.string().required(),
      primaryTextUz: Yup.string().required(),
      topicEn: Yup.string().required(),
      topicRu: Yup.string().required(),
      topicUz: Yup.string().required(),
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
