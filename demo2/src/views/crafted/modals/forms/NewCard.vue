<template>
  <KTModalCard
    button-text="Add New Card"
    description="Click on the below buttons to launch <br/>a new card example."
    image="media/illustrations/sketchy-1/6.png"
    modal-id="kt_modal_new_card"
    title="New Card Modal Example"
  ></KTModalCard>

  <KTNewCardModal></KTNewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewCardModal from "@/components/modals/forms/NewCardModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "new-card",
  components: {
    KTModalCard,
    KTNewCardModal
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("New Card", ["Modals", "Forms"]);
    });
  }
});
</script>
