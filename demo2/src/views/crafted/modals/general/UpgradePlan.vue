<template>
  <KTModalCard
    button-text="Upgrade Plan"
    description="Click on the below buttons to launch <br/>a upgrade plan example."
    image="media/illustrations/sketchy-1/8.png"
    modal-id="kt_modal_upgrade_plan"
    title="Upgrade Plan Modal Example"
  ></KTModalCard>
  <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "upgrade-plan",
  components: {
    KTModalCard,
    KTUpgradePlanModal
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Upgrade Plan", ["Modals", "General"]);
    });
  }
});
</script>
