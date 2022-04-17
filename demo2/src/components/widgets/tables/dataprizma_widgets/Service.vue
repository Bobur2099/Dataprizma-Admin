<template>
  <!--begin::Tables Widget 14-->
  <div class="card" :class="widgetClasses">
    <!--    begin::Create User-->
    <!--    <KTModalCard-->
    <!--      button-text="Add New Card"-->
    <!--      modal-id="kt_modal_create_user"-->
    <!--      style="display: none"-->
    <!--    ></KTModalCard>-->
    <!--    <CreateUserModal v-on:table-load="tableData()"></CreateUserModal>-->
    <!--    end::Create User-->

    <!--    begin::Update User-->
    <KTModalCard
      button-text="Add New Card"
      modal-id="kt_modal_service"
      style="display: none"
      class="modal-view"
    ></KTModalCard>
    <ServiceModal
      v-bind:update-id="updateId"
      v-on:table-load="tableData()"
      :create="create"
    ></ServiceModal>
    <!--    end::Update User-->

    <!--  start::Delete Role-->
    <!--    <KTModalCard-->
    <!--      button-text="Add New Card"-->
    <!--      modal-id="kt_modal_delete_user"-->
    <!--      style="display: none"-->
    <!--    ></KTModalCard>-->
    <!--    <DeleteUserModal-->
    <!--      v-bind:delete-id="deleteId"-->
    <!--      v-bind:delete-index="deleteIndex"-->
    <!--      v-on:splice="spliceDelete(deleteIndex, 1)"-->
    <!--    ></DeleteUserModal>-->
    <!--  end::Delete Role-->

    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1"
          >{{ $t("service") }} {{ $t("page") }} {{ $t("items") }}</span
        >

        <!--        <span class="text-muted mt-1 fw-bold fs-7">Over 500 members</span>-->
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
      >
        <!--        <a-->
        <!--          class="btn btn-sm btn-light-primary"-->
        <!--          data-bs-toggle="modal"-->
        <!--          data-bs-target="#kt_modal_invite_friends"-->
        <!--          @click="-->
        <!--            fillUpdateInputs(-1);-->
        <!--            create = 1;-->
        <!--            ServiceModal();-->
        <!--          "-->
        <!--        >-->
        <!--          <span class="svg-icon svg-icon-3">-->
        <!--            <inline-svg src="/media/icons/duotune/arrows/arr075.svg" />-->
        <!--          </span>-->
        <!--          {{ $t("new_item") }}-->
        <!--        </a>-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table table-row-dashed table-row-gray-300
            align-middle
            gs-0
            gy-4
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div
                  class="
                    form-check form-check-sm form-check-custom form-check-solid
                  "
                >
                  №
                </div>
              </th>
              <th class="min-w-100px">{{ $t("image") }}</th>
              <th class="min-w-100px">{{ $t("header_uz") }}</th>
              <th class="min-w-100px">{{ $t("header_ru") }}</th>
              <th class="min-w-100px">{{ $t("header_en") }}</th>
              <th class="min-w-100px">{{ $t("primary_text_uz") }}</th>
              <th class="min-w-100px">{{ $t("primary_text_ru") }}</th>
              <th class="min-w-100px">{{ $t("primary_text_en") }}</th>
              <th class="min-w-100px">{{ $t("text_uz") }}</th>
              <th class="min-w-100px">{{ $t("text_ru") }}</th>
              <th class="min-w-100px">{{ $t("text_en") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_1_uz") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_1_ru") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_1_en") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_2_uz") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_2_ru") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_2_en") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_3_uz") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_3_ru") }}</th>
              <th class="min-w-100px">{{ $t("sphere_text_3_en") }}</th>
              <th class="min-w-100px">{{ $t("text_1_uz") }}</th>
              <th class="min-w-100px">{{ $t("text_1_ru") }}</th>
              <th class="min-w-100px">{{ $t("text_1_en") }}</th>
              <th class="min-w-100px">{{ $t("text_2_uz") }}</th>
              <th class="min-w-100px">{{ $t("text_2_ru") }}</th>
              <th class="min-w-100px">{{ $t("text_2_en") }}</th>
              <th class="min-w-100px">{{ $t("text_3_uz") }}</th>
              <th class="min-w-100px">{{ $t("text_3_ru") }}</th>
              <th class="min-w-100px">{{ $t("text_3_en") }}</th>
              <th class="min-w-100px text-end">{{ $t("actions") }}</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in datas" :key="index">
              <tr>
                <td>
                  <div
                    class="
                      form-check
                      form-check-sm
                      form-check-custom
                      form-check-solid
                    "
                  >
                    {{ index + 1 }}
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <!--                    <div class="symbol symbol-45px me-5">-->
                    <!--                      <img :src="item.image" alt="" />-->
                    <!--                    </div>-->
                    <div class="d-flex justify-content-start flex-column">
                      <photo-provider>
                        <photo-consumer
                          :intro="
                            'http://site.dataprizma.uz/' + item.uploadPath
                          "
                          :src="'http://site.dataprizma.uz/' + item.uploadPath"
                        >
                          <img
                            :src="
                              'http://site.dataprizma.uz/' + item.uploadPath
                            "
                            width="50"
                            height="50"
                            class="view-box"
                          />
                        </photo-consumer>
                      </photo-provider>

                      <!--                      <span-->
                      <!--                        class="text-muted fw-bold text-muted d-block fs-7"-->
                      <!--                        >{{ item.skills }}</span-->
                      <!--                      >-->
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.headerUz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.headerRu }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.headerEn }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.primaryUz }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.primaryRu }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.primaryEn }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textUz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textRu }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textEn }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText1Uz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText1Ru }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText1En }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText2Uz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText2Ru }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText2En }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText3Uz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText3Ru }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.sphereText3En }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textFirstUz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textFirstRu }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textFirstEn }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textSecondUz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textSecondRu }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textSecondEn }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textThirdUz }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textThirdRu }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.textThirdEn }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.ServiceSkills-->
                  <!--                  }}</span>-->
                </td>

                <!--                <td class="text-end">-->
                <!--                  <div class="d-flex flex-column w-100 me-2">-->
                <!--                    <div class="d-flex flex-stack mb-2">-->
                <!--                      <span class="text-muted me-2 fs-7 fw-bold">-->
                <!--                        &lt;!&ndash;                        {{ item.password }}&ndash;&gt;-->
                <!--                      </span>-->
                <!--                    </div>-->
                <!--                    &lt;!&ndash;                    <div class="d-flex flex-stack mb-2">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      <span class="text-muted me-2 fs-7 fw-bold">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        {{ item.value }}%&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      </span>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->

                <!--                    &lt;!&ndash;                    <div class="progress h-6px w-100">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      <div&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        class="progress-bar"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        :class="`bg-${item.color}`"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        role="progressbar"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        :style="{ width: item.value + '%' }"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        :aria-valuenow="item.value"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        aria-valuemin="0"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        aria-valuemax="100"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      ></div>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->
                <!--                  </div>-->
                <!--                </td>-->

                <td class="text-end">
                  <!--                  <a-->
                  <!--                    class="-->
                  <!--                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm-->
                  <!--                      me-1-->
                  <!--                    "-->
                  <!--                  >-->
                  <!--                    <span class="svg-icon svg-icon-3">-->
                  <!--                      <inline-svg-->
                  <!--                        src="/media/icons/duotune/general/gen019.svg"-->
                  <!--                      />-->
                  <!--                    </span>-->
                  <!--                  </a>-->

                  <a
                    @click="
                      fillUpdateInputs(item.id);
                      ServiceModal();
                      create = 0;
                    "
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <!--                  <a-->
                  <!--                    @click="-->
                  <!--                      /*deleteUser(item.id, index)*/-->
                  <!--                      fillUpdateInputs(item.id);-->
                  <!--                      create = 2;-->
                  <!--                      ServiceModal();-->
                  <!--                    "-->
                  <!--                    class="-->
                  <!--                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm-->
                  <!--                    "-->
                  <!--                  >-->
                  <!--                    <span class="svg-icon svg-icon-3">-->
                  <!--                      <inline-svg-->
                  <!--                        src="/media/icons/duotune/general/gen027.svg"-->
                  <!--                      />-->
                  <!--                    </span>-->
                  <!--                  </a>-->
                </td>
              </tr>
            </template>
            <tr>
              <td>{{ $t("total") }} {{ datas.length }}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 14-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import KTModalCard from "@/components/cards/Card.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
// import CreateUserModal from "@/components/modals/forms/CreateUserModal.vue";
import ServiceModal from "@/components/modals/dataprizma/service/ServiceModal.vue";
import requests from "@/request/dataprizma_request_links/request_links";
import { useI18n } from "vue-i18n";
// import DeleteUserModal from "@/components/modals/forms/DeleteUserModal.vue";

export default defineComponent({
  name: "kt-widget-23",
  data() {
    return {
      datas: [{ id: 1 }],
      // roleDatas: [],
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      // createModalShow: false,
      // email: "",
      // password: "",
      // role: "0",
      // updateEmail: "",
      // updatePassword: "",
      // updateRole: "0",
      // userId: 0,
      // userIndex: -1,
      image: "",
      text: "",
      updateId: -1,
      create: 1,
      // deleteId: 0,
      // deleteIndex: 0,
    };
  },
  components: {
    KTModalCard,
    // CreateUserModal,
    ServiceModal,
    // DeleteUserModal,
  },
  props: {
    widgetClasses: String,
  },
  methods: {
    tableData() {
      axios.defaults.baseURL = requests.dataprizma[0];
      axios.get("service/list").then((response) => {
        if (response.status !== 200) {
          alert("Error");
        } else {
          this.datas = response.data;
          localStorage.setItem("service", JSON.stringify(response.data));
        }
      });
      axios.defaults.baseURL = requests.dataprizma[1];
    },
    fillUpdateInputs(id) {
      this.updateId = id;
    },
    ServiceModal() {
      let Element: HTMLElement = document.querySelector(
        ".modal-view button"
      ) as HTMLElement;
      Element.click();
    },
  },
  created() {
    const i18n = useI18n();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    this.tableData();
  },
  setup() {
    const checked = ref(false);
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

    onMounted(() => {
      setCurrentPageBreadcrumbs(translate("service"), ["Dataprizma"]);
    });

    // const list = [
    //   {
    //     image: "media/avatars/150-11.jpg",
    //     name: "Ana Simmons",
    //     skills: "HTML, JS, ReactJS",
    //     ServiceName: "Intertico",
    //     ServiceSkills: "Web, UI/UX Design",
    //     value: "50",
    //     color: "primary",
    //   },
    //   {
    //     image: "media/avatars/150-3.jpg",
    //     name: "Jessie Clarcson",
    //     skills: "C#, ASP.NET, MS SQL",
    //     ServiceName: "Agoda",
    //     ServiceSkills: "Houses & Hotels",
    //     value: "70",
    //     color: "danger",
    //   },
    //   {
    //     image: "media/avatars/150-4.jpg",
    //     name: "Lebron Wayde",
    //     skills: "PHP, Laravel, VueJS",
    //     ServiceName: "RoadGee",
    //     ServiceSkills: "Transportation",
    //     value: "60",
    //     color: "success",
    //   },
    //   {
    //     image: "media/avatars/150-5.jpg",
    //     name: "Natali Goodwin",
    //     skills: "Python, PostgreSQL, ReactJS",
    //     ServiceName: "The Hill",
    //     ServiceSkills: "Insurance",
    //     value: "50",
    //     color: "warning",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     ServiceName: "RoadGee",
    //     ServiceSkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     ServiceName: "RoadGee",
    //     ServiceSkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     ServiceName: "RoadGee",
    //     ServiceSkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    // ];

    return {
      // list,
      checked,
    };
  },
});
</script>

<style scoped>
.modal-create {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  place-content: center;
  place-items: center;
  display: flex;
  text-align: center;
  font-size: 20px;
  color: white;
  z-index: 2;
}

.modal-create h3 {
  font-size: 46px;
  font-family: Arial, sans-serif;
}

.close {
  position: absolute;
  right: 0;
  top: 70px;
}
</style>
