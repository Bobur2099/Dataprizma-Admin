<template>
  <!--begin::Modal - New Card-->
  <div
    id="kt_modal_service"
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
            {{ $t("service") }}
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
                $t("primary_text_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryUz"
                  class="form-control form-control-solid d-none"
                  name="primaryUz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updatePrimaryUz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryUz" />
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
                $t("primary_text_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryRu"
                  class="form-control form-control-solid d-none"
                  name="primaryRu"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updatePrimaryRu"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryRu" />
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
                $t("primary_text_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updatePrimaryEn"
                  class="form-control form-control-solid d-none"
                  name="primaryEn"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updatePrimaryEn"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="primaryEn" />
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
                  class="form-control form-control-solid d-none"
                  name="textUz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextUz"
                  name="textUz"
                ></textarea>
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
                  class="form-control form-control-solid d-none"
                  name="textRu"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextRu"
                  name="textUz"
                ></textarea>
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
                  class="form-control form-control-solid d-none"
                  name="textEn"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextEn"
                  name="textUz"
                ></textarea>
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
              <label class="fs-6 fw-bold form-label mb-2">{{
                $t("sphere_text_1_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText1Uz"
                  class="form-control form-control-solid d-none"
                  name="sphereText1Uz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText1Uz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText1Uz" />
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
                $t("sphere_text_1_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText1Ru"
                  class="form-control form-control-solid d-none"
                  name="sphereText1Ru"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText1Ru"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText1Ru" />
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
                $t("sphere_text_1_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText1En"
                  class="form-control form-control-solid d-none"
                  name="sphereText1En"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText1En"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText1En" />
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
                $t("sphere_text_2_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText2Uz"
                  class="form-control form-control-solid d-none"
                  name="sphereText2Uz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText2Uz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText2Uz" />
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
                $t("sphere_text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText2Ru"
                  class="form-control form-control-solid d-none"
                  name="sphereText2Ru"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText2Ru"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText2Ru" />
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
                $t("sphere_text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText2En"
                  class="form-control form-control-solid d-none"
                  name="sphereText2En"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText2En"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText2En" />
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
                $t("sphere_text_3_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText3Uz"
                  class="form-control form-control-solid d-none"
                  name="sphereText3Uz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText3Uz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText3Uz" />
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
                $t("sphere_text_3_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText3Ru"
                  class="form-control form-control-solid d-none"
                  name="sphereText3Ru"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText3Ru"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText3Ru" />
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
                $t("sphere_text_3_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateSphereText3En"
                  class="form-control form-control-solid d-none"
                  name="sphereText3En"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateSphereText3En"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="sphereText3En" />
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
                $t("text_1_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextFirstUz"
                  class="form-control form-control-solid d-none"
                  name="textFirstUz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextFirstUz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textFirstUz" />
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
                $t("text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextFirstRu"
                  class="form-control form-control-solid d-none"
                  name="textFirstRu"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextFirstRu"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textFirstRu" />
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
                $t("text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextFirstEn"
                  class="form-control form-control-solid d-none"
                  name="textFirstEn"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextFirstEn"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textFirstEn" />
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
                $t("text_2_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextSecondUz"
                  class="form-control form-control-solid d-none"
                  name="textSecondUz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextSecondUz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textSecondUz" />
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
                $t("text_2_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextSecondRu"
                  class="form-control form-control-solid d-none"
                  name="textSecondRu"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextSecondRu"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textSecondRu" />
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
                $t("text_2_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextSecondEn"
                  class="form-control form-control-solid d-none"
                  name="textSecondEn"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextSecondEn"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textSecondEn" />
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
                $t("text_3_uz")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextThirdUz"
                  class="form-control form-control-solid d-none"
                  name="textThirdUz"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextThirdUz"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textThirdUz" />
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
                $t("text_3_ru")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextThirdRu"
                  class="form-control form-control-solid d-none"
                  name="textThirdRu"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextThirdRu"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textThirdRu" />
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
                $t("text_3_en")
              }}</label>
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  v-model="updateTextThirdEn"
                  class="form-control form-control-solid d-none"
                  name="textThirdEn"
                  type="text"
                />
                <textarea
                  class="form-control form-control-solid"
                  v-model="updateTextThirdEn"
                  name="textUz"
                ></textarea>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="textThirdEn" />
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
                id="kt_modal_new_card"
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

    <!--start::Read modal dialog-->
    <div
      v-if="create === 3"
      class="modal-dialog modal-dialog-centered mw-1000px"
    >
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>
            <span>{{ $t("read") }}</span>
            {{ $t("service") }}
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
          <div v-for="(item, index) in datas" :key="index">
            <!--begin::Label-->
            <label
              class="fw-bold form-label mb-2"
              style="font-size: 20px"
              v-if="
                index !== 'file' && index !== 'id' && index !== 'uploadPath'
              "
            >
              {{ $t(translatedWords[index]) }}
            </label>
            <!--end::Label-->
            <div
              v-if="
                index !== 'file' && index !== 'id' && index !== 'uploadPath'
              "
              style="font-size: 18px; margin-bottom: 16px"
            >
              {{ datas[index] }}
            </div>
          </div>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Read modal dialog-->
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
      datas: {
        headerUz: "",
        headerRu: "",
        headerEn: "",
        primaryUz: "",
        primaryRu: "",
        primaryEn: "",
        textUz: "",
        textRu: "",
        textEn: "",
        sphereText1Uz: "",
        sphereText1Ru: "",
        sphereText1En: "",
        sphereText2Uz: "",
        sphereText2Ru: "",
        sphereText2En: "",
        sphereText3Uz: "",
        sphereText3Ru: "",
        sphereText3En: "",
        textFirstUz: "",
        textFirstRu: "",
        textFirstEn: "",
        textSecondUz: "",
        textSecondRu: "",
        textSecondEn: "",
        textThirdUz: "",
        textThirdRu: "",
        textThirdEn: "",
      },
      translatedWords: {
        headerUz: "header_uz",
        headerRu: "header_ru",
        headerEn: "header_en",
        primaryUz: "paragraph_uz",
        primaryRu: "paragraph_ru",
        primaryEn: "paragraph_en",
        textUz: "text_uz",
        textRu: "text_ru",
        textEn: "text_en",
        sphereText1Uz: "sphere_text_1_uz",
        sphereText1Ru: "sphere_text_1_ru",
        sphereText1En: "sphere_text_1_en",
        sphereText2Uz: "sphere_text_2_uz",
        sphereText2Ru: "sphere_text_2_ru",
        sphereText2En: "sphere_text_2_en",
        sphereText3Uz: "sphere_text_3_uz",
        sphereText3Ru: "sphere_text_3_ru",
        sphereText3En: "sphere_text_3_en",
        textFirstUz: "text_1_uz",
        textFirstRu: "text_1_ru",
        textFirstEn: "text_1_en",
        textSecondUz: "text_2_uz",
        textSecondRu: "text_2_ru",
        textSecondEn: "text_2_en",
        textThirdUz: "text_3_uz",
        textThirdRu: "text_3_ru",
        textThirdEn: "text_3_en",
      },
      responseError: 200,
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
      const service_items = JSON.parse(Object(localStorage.getItem("service")));
      let service_item = {
        headerEn: "",
        headerRu: "",
        headerUz: "",
        primaryEn: "",
        primaryRu: "",
        primaryUz: "",
        sphereText1En: "",
        sphereText1Ru: "",
        sphereText1Uz: "",
        sphereText2En: "",
        sphereText2Ru: "",
        sphereText2Uz: "",
        sphereText3En: "",
        sphereText3Ru: "",
        sphereText3Uz: "",
        textEn: "",
        textFirstEn: "",
        textFirstRu: "",
        textFirstUz: "",
        textRu: "",
        textSecondEn: "",
        textSecondRu: "",
        textSecondUz: "",
        textThirdEn: "",
        textThirdRu: "",
        textThirdUz: "",
        textUz: "",
      };
      for (const item of service_items) {
        if (item.id === newValue) {
          service_item = Object(item);
          for (let property in service_item) {
            if (service_item[property] === null) {
              service_item[property] = "";
            }
          }
          break;
        }
      }
      this.updateHeaderUz = service_item.headerUz;
      this.datas.headerUz = service_item.headerUz;
      this.updateHeaderRu = service_item.headerRu;
      this.datas.headerRu = service_item.headerRu;
      this.updateHeaderEn = service_item.headerEn;
      this.datas.headerEn = service_item.headerEn;

      this.updatePrimaryUz = service_item.primaryUz;
      this.datas.primaryUz = service_item.primaryUz;
      this.updatePrimaryRu = service_item.primaryRu;
      this.datas.primaryRu = service_item.primaryRu;
      this.updatePrimaryEn = service_item.primaryEn;
      this.datas.primaryEn = service_item.primaryEn;

      this.updateTextUz = service_item.textUz;
      this.datas.textUz = service_item.textUz;
      this.updateTextRu = service_item.textRu;
      this.datas.textRu = service_item.textRu;
      this.updateTextEn = service_item.textEn;
      this.datas.textEn = service_item.textEn;

      this.updateSphereText1Uz = service_item.sphereText1Uz;
      this.datas.sphereText1Uz = service_item.sphereText1Uz;
      this.updateSphereText1Ru = service_item.sphereText1Ru;
      this.datas.sphereText1Ru = service_item.sphereText1Ru;
      this.updateSphereText1En = service_item.sphereText1En;
      this.datas.sphereText1En = service_item.sphereText1En;

      this.updateSphereText2Uz = service_item.sphereText2Uz;
      this.datas.sphereText2Uz = service_item.sphereText2Uz;
      this.updateSphereText2Ru = service_item.sphereText2Ru;
      this.datas.sphereText2Ru = service_item.sphereText2Ru;
      this.updateSphereText2En = service_item.sphereText2En;
      this.datas.sphereText2En = service_item.sphereText2En;

      this.updateSphereText3Uz = service_item.sphereText3Uz;
      this.datas.sphereText3Uz = service_item.sphereText3Uz;
      this.updateSphereText3Ru = service_item.sphereText3Ru;
      this.datas.sphereText3Ru = service_item.sphereText3Ru;
      this.updateSphereText3En = service_item.sphereText3En;
      this.datas.sphereText3En = service_item.sphereText3En;

      this.updateTextFirstUz = service_item.textFirstUz;
      this.datas.textFirstUz = service_item.textFirstUz;
      this.updateTextFirstRu = service_item.textFirstRu;
      this.datas.textFirstRu = service_item.textFirstRu;
      this.updateTextFirstEn = service_item.textFirstEn;
      this.datas.textFirstEn = service_item.textFirstEn;

      this.updateTextSecondUz = service_item.textSecondUz;
      this.datas.textSecondUz = service_item.textSecondUz;
      this.updateTextSecondRu = service_item.textSecondRu;
      this.datas.textSecondRu = service_item.textSecondRu;
      this.updateTextSecondEn = service_item.textSecondEn;
      this.datas.textSecondEn = service_item.textSecondEn;

      this.updateTextThirdUz = service_item.textThirdUz;
      this.datas.textThirdUz = service_item.textThirdUz;
      this.updateTextThirdRu = service_item.textThirdRu;
      this.datas.textThirdRu = service_item.textThirdRu;
      this.updateTextThirdEn = service_item.textThirdEn;
      this.datas.textThirdEn = service_item.textThirdEn;
    },
    clearInputs() {
      this.updateHeaderUz = "";
      this.updateHeaderRu = "";
      this.updateHeaderEn = "";

      this.updatePrimaryUz = "";
      this.updatePrimaryRu = "";
      this.updatePrimaryEn = "";

      this.updateTextUz = "";
      this.updateTextRu = "";
      this.updateTextEn = "";

      this.updateSphereText1Uz = "";
      this.updateSphereText1Ru = "";
      this.updateSphereText1En = "";

      this.updateSphereText2Uz = "";
      this.updateSphereText2Ru = "";
      this.updateSphereText2En = "";

      this.updateSphereText3Uz = "";
      this.updateSphereText3Ru = "";
      this.updateSphereText3En = "";

      this.updateTextFirstUz = "";
      this.updateTextFirstRu = "";
      this.updateTextFirstEn = "";

      this.updateTextSecondUz = "";
      this.updateTextSecondRu = "";
      this.updateTextSecondEn = "";

      this.updateTextThirdUz = "";
      this.updateTextThirdRu = "";
      this.updateTextThirdEn = "";
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
        })
        .catch((err) => {
          this.responseError = err.response.status;
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
      primaryEn: Yup.string().required(),
      primaryRu: Yup.string().required(),
      primaryUz: Yup.string().required(),
      sphereText1En: Yup.string().required(),
      sphereText1Ru: Yup.string().required(),
      sphereText1Uz: Yup.string().required(),
      sphereText2En: Yup.string().required(),
      sphereText2Ru: Yup.string().required(),
      sphereText2Uz: Yup.string().required(),
      sphereText3En: Yup.string().required(),
      sphereText3Ru: Yup.string().required(),
      sphereText3Uz: Yup.string().required(),
      textEn: Yup.string().required(),
      textFirstEn: Yup.string().required(),
      textFirstRu: Yup.string().required(),
      textFirstUz: Yup.string().required(),
      textRu: Yup.string().required(),
      textSecondEn: Yup.string().required(),
      textSecondRu: Yup.string().required(),
      textSecondUz: Yup.string().required(),
      textThirdEn: Yup.string().required(),
      textThirdRu: Yup.string().required(),
      textThirdUz: Yup.string().required(),
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
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>

<style>
textarea {
  height: 250px;
  resize: none;
}
</style>
