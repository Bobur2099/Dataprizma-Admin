<template>
  <div
    id="kt_modal_add_event"
    ref="newTargetModalRef"
    aria-modal="true"
    class="modal fade show"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <el-form
          id="kt_modal_add_event_form"
          ref="formRef"
          :model="targetData"
          :rules="rules"
          class="form fv-plugins-bootstrap5 fv-plugins-framework"
          @submit.prevent="submit()"
        >
          <div class="modal-header">
            <h2 class="fw-bolder">Add a New Event</h2>
            <div
              id="kt_modal_add_event_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
            </div>
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Input group-->
            <div class="fv-row mb-9 fv-plugins-icon-container">
              <!--begin::Label-->
              <label class="fs-6 fw-bold required mb-2">Event Name</label>
              <!--end::Label-->
              <!--begin::Input-->
              <el-form-item prop="eventName">
                <el-input
                  v-model="targetData.eventName"
                  name="eventName"
                  type="text"
                />
              </el-form-item>
              <!--end::Input-->
              <div class="fv-plugins-message-container invalid-feedback"></div>
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-9">
              <!--begin::Label-->
              <label class="fs-6 fw-bold mb-2">Event Description</label>
              <!--end::Label-->
              <!--begin::Input-->
              <el-input
                v-model="targetData.eventDescription"
                name="eventDescription"
                placeholder=""
                type="text"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-9">
              <!--begin::Label-->
              <label class="fs-6 fw-bold mb-2">Event Location</label>
              <!--end::Label-->
              <!--begin::Input-->
              <el-input
                v-model="targetData.eventLocation"
                name="eventLocation"
                placeholder=""
                type="text"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-9">
              <!--begin::Checkbox-->
              <label class="form-check form-check-custom form-check-solid">
                <el-checkbox v-model="targetData.allDay" type="checkbox" />
                <span class="form-check-label fw-bold">All Day</span>
              </label>
              <!--end::Checkbox-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="row row-cols-lg-2 g-10">
              <div class="col">
                <div
                  class="
                    fv-row
                    mb-9
                    fv-plugins-icon-container fv-plugins-bootstrap5-row-valid
                  "
                >
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2 required"
                  >Event Start Date</label
                  >
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-date-picker
                    v-model="targetData.eventStartDate"
                    name="eventStartDate"
                    type="text"
                  />
                  <!--end::Input-->
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
              </div>
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="row row-cols-lg-2 g-10">
              <div class="col">
                <div
                  class="
                    fv-row
                    mb-9
                    fv-plugins-icon-container fv-plugins-bootstrap5-row-valid
                  "
                >
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2 required"
                  >Event End Date</label
                  >
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-date-picker
                    v-model="targetData.eventEndDate"
                    name="eventName"
                    type="text"
                  />
                  <!--end::Input-->
                  <div
                    class="fv-plugins-message-container invalid-feedback"
                  ></div>
                </div>
              </div>
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Modal body-->
          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              id="kt_modal_add_event_cancel"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              type="reset"
            >
              Cancel
            </button>
            <!--end::Button-->
            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
          <div></div>
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface NewAddressData {
  eventName: string;
  eventDescription: string;
  eventLocation: string;
  allDay: boolean;
  eventStartDate: string;
  eventEndDate: string;
}

export default defineComponent({
  name: "new-event-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const targetData = ref<NewAddressData>({
      eventName: "",
      eventDescription: "",
      eventLocation: "",
      allDay: true,
      eventStartDate: "",
      eventEndDate: ""
    });

    const rules = ref({
      eventName: [
        {
          required: true,
          message: "Please input event name",
          trigger: "blur"
        }
      ]
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary"
              }
            }).then(() => {
              hideModal(newTargetModalRef.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
          return false;
        }
      });
    };

    return {
      formRef,
      newTargetModalRef,
      loading,
      targetData,
      rules,
      submit
    };
  }
});
</script>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
