<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-12">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Business Details</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please check out
        <a class="link-primary fw-bolder" href="#">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Business Name</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        name="businessName"
        value="Keenthemes Inc."
      />
      <ErrorMessage
        class="fv-plugins-message-container invalid-feedback"
        name="businessName"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Shortened Descriptor</span>

        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-html="true"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
        >
        </i>
      </label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        name="businessDescriptor"
        value="KEENTHEMES"
      />
      <!--end::Input-->
      <ErrorMessage
        class="fv-plugins-message-container invalid-feedback"
        name="businessDescriptor"
      ></ErrorMessage>

      <!--begin::Hint-->
      <div class="form-text">
        Customers will see this shortened version of your statement descriptor
      </div>
      <!--end::Hint-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Corporation Type</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        as="select"
        class="form-select form-select-lg form-select-solid"
        data-allow-clear="true"
        data-control="select2"
        data-hide-search="true"
        data-placeholder="Select..."
        name="businessType"
      >
        <option></option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        class="fv-plugins-message-container invalid-feedback"
        name="businessType"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">Business Description</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        name="businessDescription"
        rows="3"
        type="text"
      ></Field>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-0">
      <!--begin::Label-->
      <label class="fs-6 fw-bold form-label required">Contact Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        name="businessEmail"
        value="corp@support.com"
      />
      <!--end::Input-->
      <ErrorMessage
        class="fv-plugins-message-container invalid-feedback"
        name="businessEmail"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
