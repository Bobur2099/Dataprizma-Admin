<template>
  <KTModalCard
    button-text="Create API Key"
    description="Click on the below buttons to launch <br/>a new API Key creation example."
    image="media/illustrations/sketchy-1/16.png"
    modal-id="kt_modal_create_api_key"
    title="Create API Key Modal Example"
  ></KTModalCard>

  <KTCreateAPIKeyModal></KTCreateAPIKeyModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTCreateAPIKeyModal from "@/components/modals/forms/CreateAPIKeyModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "create-api-key",
  components: {
    KTModalCard,
    KTCreateAPIKeyModal
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Create API Key", ["Modals", "Forms"]);
    });
  }
});
</script>
