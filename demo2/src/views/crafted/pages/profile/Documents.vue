<template>
  <!--begin::Documents toolbar-->
  <div class="d-flex flex-wrap flex-stack mb-6">
    <!--begin::Title-->
    <h3 class="fw-bolder my-2">
      My Documents
      <span class="fs-6 text-gray-400 fw-bold ms-1">100+ resources</span>
    </h3>
    <!--end::Title-->

    <!--begin::Controls-->
    <div class="d-flex my-2">
      <!--begin::Search-->
      <div class="d-flex align-items-center position-relative me-4">
        <span class="svg-icon svg-icon-3 position-absolute ms-3">
          <inline-svg src="/media/icons/duotune/general/gen021.svg" />
        </span>
        <input
          id="kt_filter_search"
          class="form-control form-control-white form-control-sm w-150px ps-9"
          placeholder="Search"
          type="text"
        />
      </div>
      <!--end::Search-->

      <a
        class="btn btn-primary btn-sm"
        data-bs-toggle="tooltip"
        href="#"
        title="Coming soon"
      >
        File Manager
      </a>
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Documents toolbar-->

  <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
    <KTFolder files="7" folder-name="Finance"></KTFolder>

    <KTFolder files="3" folder-name="Customers"></KTFolder>

    <KTFolder files="25" folder-name="CRM Project"></KTFolder>

    <div class="col d-none d-xl-block"></div>

    <div class="col d-none d-xl-block"></div>
  </div>

  <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
    <KTFile
      created-at="3 days ago"
      file-title="Project Reqs.."
      file-type="pdf"
    ></KTFile>

    <KTFile
      created-at="3 days ago"
      file-title="CRM App Docs.."
      file-type="doc"
    ></KTFile>

    <KTFile
      created-at="4 days ago"
      file-title="User CRUD Styles"
      file-type="css"
    ></KTFile>

    <KTFile
      created-at="5 days ago"
      file-title="Metronic Logo"
      file-type="ai"
    ></KTFile>

    <KTFile
      created-at="1 week ago"
      file-title="Orders backup"
      file-type="sql"
    ></KTFile>
  </div>

  <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
    <KTFile
      created-at="2 weeks ago"
      file-title="UTAIR CRM API Co.."
      file-type="xml"
    ></KTFile>

    <KTFile
      created-at="3 weeks ago"
      file-title="Tower Hill App.."
      file-type="tif"
    ></KTFile>

    <div class="col d-none d-xl-block"></div>

    <div class="col d-none d-xl-block"></div>

    <div class="col d-none d-xl-block"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTFolder from "@/components/files/Folder.vue";
import KTFile from "@/components/files/File.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "documents",
  components: {
    KTFolder,
    KTFile
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Documents", ["Pages", "Profile"]);
    });
  }
});
</script>
