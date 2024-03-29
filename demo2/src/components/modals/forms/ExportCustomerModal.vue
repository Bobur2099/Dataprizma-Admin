<template>
  <div
    id="kt_customers_export_modal"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Export Customers</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_customers_export_close"
            class="btn btn-icon btn-sm btn-active-icon-primary"
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
          <el-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            @submit.prevent="submit()"
          >
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5"
              >Select Date Range:</label
              >
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="name">
                <el-date-picker v-model="formData.dateRange" type="daterange">
                </el-date-picker>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5"
              >Select Export Format:</label
              >
              <!--end::Label-->

              <!--begin::Input-->
              <el-select v-model="formData.exportFormat" class="d-block">
                <el-option key="excel" label="Excel" value="excel" />
                <el-option key="pdf" label="PDF" value="pdf" />
                <el-option key="cvs" label="CVS" value="cvs" />
                <el-option key="zip" label="ZIP" value="zip" />
              </el-select>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Row-->
            <div class="row fv-row mb-15">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5">Payment Type:</label>
              <!--end::Label-->

              <!--begin::Radio group-->
              <div class="d-flex flex-column">
                <el-radio
                  v-model="formData.paymentType"
                  class="mb-5"
                  label="All"
                ></el-radio>
                <el-radio
                  v-model="formData.paymentType"
                  class="mb-5"
                  label="Visa"
                ></el-radio>
                <el-radio
                  v-model="formData.paymentType"
                  class="mb-5"
                  label="Mastercard"
                ></el-radio>
                <el-radio
                  v-model="formData.paymentType"
                  label="American Express"
                ></el-radio>
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Row-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                id="kt_customers_export_cancel"
                class="btn btn-light me-3"
                type="reset"
              >
                Discard
              </button>

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
            <!--end::Actions-->
          </el-form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<style lang="scss">
.el-date-editor--daterange.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "export-customers-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);
    const state = reactive({
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }
      ]
    });

    const formData = ref({
      dateRange: [],
      exportFormat: "",
      paymentType: ""
    });

    const rules = ref({
      dateRange: [
        {
          required: true,
          message: "Date range is required",
          trigger: "change"
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
              window.location.reload();
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
      ...toRefs(state),
      formData,
      rules,
      submit,
      formRef,
      loading
    };
  }
});
</script>
