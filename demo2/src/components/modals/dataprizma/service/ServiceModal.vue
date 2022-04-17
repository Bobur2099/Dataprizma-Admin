<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_service"
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
            <span v-if="create == 1"> {{ $t("create") }}</span
            ><span v-if="create == 0"> {{ $t("update") }}</span> Dataprizma
            {{ $t("service") }} {{ $t("content") }}
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
            class="form row"
            @submit="submit"
            :validation-schema="validationSchema"
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
                type="file"
                class="form-control form-control-solid file"
                ref="file-upload"
                name="file"
                @change="fileChosen($event)"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <!--                  <ErrorMessage name="nameOnCard" />-->
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
                  type="text"
                  class="form-control form-control-solid"
                  name="header-uz"
                  v-model="updateHeaderUz"
                />
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
                  type="text"
                  class="form-control form-control-solid"
                  name="header-ru"
                  v-model="updateHeaderRu"
                />
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
                  type="text"
                  class="form-control form-control-solid"
                  name="header-en"
                  v-model="updateHeaderEn"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("primary_text_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="primary-uz"
                  v-model="updatePrimaryUz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("primary_text_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="primary-ru"
                  v-model="updatePrimaryRu"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("primary_text_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="primary-en"
                  v-model="updatePrimaryEn"
                />
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
                  type="text"
                  class="form-control form-control-solid"
                  name="text-uz"
                  v-model="updateTextUz"
                />
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
                  type="text"
                  class="form-control form-control-solid"
                  name="text-ru"
                  v-model="updateTextRu"
                />
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
                  type="text"
                  class="form-control form-control-solid"
                  name="text-en"
                  v-model="updateTextEn"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_1_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-1-uz"
                  v-model="updateSphereText1Uz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_1_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-1-ru"
                  v-model="updateSphereText1Ru"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_1_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-1-en"
                  v-model="updateSphereText1En"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_2_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-2-uz"
                  v-model="updateSphereText2Uz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-2-ru"
                  v-model="updateSphereText2Ru"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-2-en"
                  v-model="updateSphereText2En"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_3_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-3-uz"
                  v-model="updateSphereText3Uz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_3_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-3-ru"
                  v-model="updateSphereText3Ru"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_3_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="sphere-text-3-en"
                  v-model="updateSphereText3En"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_1_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-1-uz"
                  v-model="updateTextFirstUz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-1-ru"
                  v-model="updateTextFirstRu"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-1-en"
                  v-model="updateTextFirstEn"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_2_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-2-uz"
                  v-model="updateTextSecondUz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-2-ru"
                  v-model="updateTextSecondRu"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-2-en"
                  v-model="updateTextSecondEn"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_3_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-3-uz"
                  v-model="updateTextThirdUz"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_3_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-3-ru"
                  v-model="updateTextThirdRu"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row col-6">
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("text_3_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  name="text-3-en"
                  v-model="updateTextThirdEn"
                />
                <!--end::Input-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                type="reset"
                id="kt_modal_new_card"
                class="btn btn-white me-3 reset"
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
                <span class="indicator-label"> Cancel </span>
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

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "about-modal",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      updateFile: new File([new Blob()], ""),
      updateHeaderUz: "",
      updateHeaderRu: "",
      updateHeaderEn: "",
      updatePrimaryUz: "",
      updatePrimaryRu: "",
      updatePrimaryEn: "",
      updateTextUz: "",
      updateTextRu: "",
      updateTextEn: "",
      updateSphereText1Uz: "",
      updateSphereText1Ru: "",
      updateSphereText1En: "",
      updateSphereText2Uz: "",
      updateSphereText2Ru: "",
      updateSphereText2En: "",
      updateSphereText3Uz: "",
      updateSphereText3Ru: "",
      updateSphereText3En: "",
      updateTextFirstUz: "",
      updateTextFirstRu: "",
      updateTextFirstEn: "",
      updateTextSecondUz: "",
      updateTextSecondRu: "",
      updateTextSecondEn: "",
      updateTextThirdUz: "",
      updateTextThirdRu: "",
      updateTextThirdEn: "",
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
      newValue;
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
        .post(`service/create`, datas, {
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
        .put(`service/update/${id}`, datas, {
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
        .delete(`service/delete/${id}`, {
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
        "primaryUz",
        "primaryRu",
        "primaryEn",
        "textUz",
        "textRu",
        "textEn",
        "sphereText1Uz",
        "sphereText1Ru",
        "sphereText1En",
        "sphereText2Uz",
        "sphereText2Ru",
        "sphereText2En",
        "sphereText3Uz",
        "sphereText3Ru",
        "sphereText3En",
        "text1Uz",
        "text1Ru",
        "text1En",
        "text2Uz",
        "text2Ru",
        "text2En",
        "text3Uz",
        "text3Ru",
        "text3En",
      ];

      let datas = new FormData();
      datas.append(keys[0], this.updateFile[0]);
      datas.append(keys[1], this.updateHeaderUz.trim());
      datas.append(keys[2], this.updateHeaderRu.trim());
      datas.append(keys[3], this.updateHeaderEn.trim());
      datas.append(keys[4], this.updatePrimaryUz.trim());
      datas.append(keys[5], this.updatePrimaryRu.trim());
      datas.append(keys[6], this.updatePrimaryEn.trim());
      datas.append(keys[7], this.updateTextUz.trim());
      datas.append(keys[8], this.updateTextRu.trim());
      datas.append(keys[9], this.updateTextEn.trim());
      datas.append(keys[10], this.updateSphereText1Uz.trim());
      datas.append(keys[11], this.updateSphereText1Ru.trim());
      datas.append(keys[12], this.updateSphereText1En.trim());
      datas.append(keys[13], this.updateSphereText2Uz.trim());
      datas.append(keys[14], this.updateSphereText2Ru.trim());
      datas.append(keys[15], this.updateSphereText2En.trim());
      datas.append(keys[16], this.updateSphereText3Uz.trim());
      datas.append(keys[17], this.updateSphereText3Ru.trim());
      datas.append(keys[18], this.updateSphereText3En.trim());
      datas.append(keys[19], this.updateTextFirstUz.trim());
      datas.append(keys[20], this.updateTextFirstRu.trim());
      datas.append(keys[21], this.updateTextFirstEn.trim());
      datas.append(keys[22], this.updateTextSecondUz.trim());
      datas.append(keys[23], this.updateTextSecondRu.trim());
      datas.append(keys[24], this.updateTextSecondEn.trim());
      datas.append(keys[25], this.updateTextThirdUz.trim());
      datas.append(keys[26], this.updateTextThirdRu.trim());
      datas.append(keys[27], this.updateTextThirdEn.trim());

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
