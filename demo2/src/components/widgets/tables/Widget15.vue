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
      modal-id="kt_modal_dmain"
      style="display: none"
      class="modal-view"
    ></KTModalCard>
    <MainWrapModal
      v-bind:update-id="updateId"
      v-on:table-load="tableData()"
      :create="create"
    ></MainWrapModal>
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
        <span class="card-label fw-bolder fs-3 mb-1">Members Statistics</span>

        <!--        <span class="text-muted mt-1 fw-bold fs-7">Over 500 members</span>-->
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <a
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
          @click="
            fillUpdateInputs(-1);
            create = 1;
            MainWrapModal();
          "
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          New Item
        </a>
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
                  Id
                </div>
              </th>
              <th class="min-w-150px">Image</th>
              <th class="min-w-140px">Text</th>
              <th class="min-w-120px"></th>
              <th class="min-w-100px text-end">Actions</th>
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
                    {{ item.id }}
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <!--                    <div class="symbol symbol-45px me-5">-->
                    <!--                      <img :src="item.image" alt="" />-->
                    <!--                    </div>-->
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ item.uploadPath }}</a
                      >

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
                    >{{ item.text }}</a
                  >
                  <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                  <!--                    item.companySkills-->
                  <!--                  }}</span>-->
                </td>

                <td class="text-end">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        <!--                        {{ item.password }}-->
                      </span>
                    </div>
                    <!--                    <div class="d-flex flex-stack mb-2">-->
                    <!--                      <span class="text-muted me-2 fs-7 fw-bold">-->
                    <!--                        {{ item.value }}%-->
                    <!--                      </span>-->
                    <!--                    </div>-->

                    <!--                    <div class="progress h-6px w-100">-->
                    <!--                      <div-->
                    <!--                        class="progress-bar"-->
                    <!--                        :class="`bg-${item.color}`"-->
                    <!--                        role="progressbar"-->
                    <!--                        :style="{ width: item.value + '%' }"-->
                    <!--                        :aria-valuenow="item.value"-->
                    <!--                        aria-valuemin="0"-->
                    <!--                        aria-valuemax="100"-->
                    <!--                      ></div>-->
                    <!--                    </div>-->
                  </div>
                </td>

                <td class="text-end">
                  <!--                  <a-->
                  <!--                    class="-->
                  <!--                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm-->
                  <!--                      me-1-->
                  <!--                    "-->
                  <!--                  >-->
                  <!--                    <span class="svg-icon svg-icon-3">-->
                  <!--                      <inline-svg-->
                  <!--                        src="media/icons/duotune/general/gen019.svg"-->
                  <!--                      />-->
                  <!--                    </span>-->
                  <!--                  </a>-->

                  <a
                    @click="
                      fillUpdateInputs(item.id);
                      MainWrapModal();
                      create = 0;
                    "
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    @click="
                      /*deleteUser(item.id, index)*/
                      fillUpdateInputs(item.id);
                      create = 2;
                      MainWrapModal();
                    "
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="http://localhost:8080/media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
            <tr>
              <td>Avarage {{ datas.length }}</td>
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
import MainWrapModal from "@/components/modals/dataprizma/main/MainWrapModal.vue";
// import DeleteUserModal from "@/components/modals/forms/DeleteUserModal.vue";

export default defineComponent({
  name: "kt-widget-15",
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
    MainWrapModal,
    // DeleteUserModal,
  },
  props: {
    widgetClasses: String,
  },
  methods: {
    tableData() {
      axios.defaults.baseURL = "http://localhost:8084/api/v2/";
      axios.get("main-wrap/list").then((response) => {
        if (response.status !== 200) {
          alert("Error");
        } else {
          this.datas = response.data;
          localStorage.setItem("main-wrap", JSON.stringify(response.data));
        }
      });
      axios.defaults.baseURL = "http://localhost:8084/api/v1/";
    },
    fillUpdateInputs(id) {
      this.updateId = id;
    },
    MainWrapModal() {
      let Element: HTMLElement = document.querySelector(
        ".modal-view button"
      ) as HTMLElement;
      Element.click();
    },
  },
  created() {
    this.tableData();
  },
  setup() {
    const checked = ref(false);
    onMounted(() => {
      setCurrentPageBreadcrumbs("main Wrap", ["Dataprizma", "Main"]);
    });

    // const list = [
    //   {
    //     image: "media/avatars/150-11.jpg",
    //     name: "Ana Simmons",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "Intertico",
    //     companySkills: "Web, UI/UX Design",
    //     value: "50",
    //     color: "primary",
    //   },
    //   {
    //     image: "media/avatars/150-3.jpg",
    //     name: "Jessie Clarcson",
    //     skills: "C#, ASP.NET, MS SQL",
    //     companyName: "Agoda",
    //     companySkills: "Houses & Hotels",
    //     value: "70",
    //     color: "danger",
    //   },
    //   {
    //     image: "media/avatars/150-4.jpg",
    //     name: "Lebron Wayde",
    //     skills: "PHP, Laravel, VueJS",
    //     companyName: "RoadGee",
    //     companySkills: "Transportation",
    //     value: "60",
    //     color: "success",
    //   },
    //   {
    //     image: "media/avatars/150-5.jpg",
    //     name: "Natali Goodwin",
    //     skills: "Python, PostgreSQL, ReactJS",
    //     companyName: "The Hill",
    //     companySkills: "Insurance",
    //     value: "50",
    //     color: "warning",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "RoadGee",
    //     companySkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "RoadGee",
    //     companySkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "RoadGee",
    //     companySkills: "Art Director",
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
