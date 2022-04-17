<template>
  <!--begin::Tables Widget 9-->
  <!--  begin::Create Role-->
  <div
    class="card"
    :class="widgetClasses"
    v-if="permissionsBooleanByName('role_table')"
  >
    <KTModalCard
      button-text="Add New Card"
      modal-id="kt_modal_permissions_role"
      style="display: none"
      class="modal-view-permission"
    ></KTModalCard>
    <PermissionsRoleModal
      user-perms-copy="user_perms"
      type-permission-copy="type_perms"
      v-bind:type-perms-name="type_perms_name"
      v-on:permission-load="
        permissionsRefresh();
        userPermissions();
      "
    ></PermissionsRoleModal>
    <!--  end::Permissions Role-->

    <!--    start::Main-Wrap Modal-->
    <KTModalCard
      button-text="Add New Card"
      modal-id="kt_modal_role"
      style="display: none"
      class="modal-view"
    ></KTModalCard>
    <RoleModal
      v-bind:update-id="updateId"
      v-on:table-load="tableData()"
      :create="create"
    ></RoleModal>
    <!--    end::Main-Wrap Modal-->

    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">{{ $t("roles") }}</span>

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
            RoleModal();
          "
          v-if="permissionsBooleanByName('create')"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="/media/icons/duotune/arrows/arr075.svg" />
          </span>
          {{ $t("new_role") }}
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
                  №
                </div>
              </th>
              <th class="min-w-150px">{{ $t("name") }}</th>
              <!--              <th class="min-w-150px"></th>-->
              <th class="min-w-150px"></th>
              <th class="min-w-100px align-self-end text-end">
                {{ $t("actions") }}
              </th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in roleData" :key="index">
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
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >

                      <!--                      <span-->
                      <!--                        class="text-muted fw-bold text-muted d-block fs-7"-->
                      <!--                        >{{ item.skills }}</span-->
                      <!--                      >-->
                    </div>
                  </div>
                </td>

                <!--                <td>-->
                <!--                  <a-->
                <!--                    href="#"-->
                <!--                    class="text-dark fw-bolder text-hover-primary d-block fs-6"-->
                <!--                    >{{ item.code }}</a-->
                <!--                  >-->
                <!--                  <span class="text-muted fw-bold text-muted d-block fs-7">{{-->
                <!--                    item.companySkills-->
                <!--                  }}</span>-->
                <!--                </td>-->

                <td class="text-end">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold"> </span>
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
                  <!--                    @click="-->
                  <!--                      // permissionsModalShow = true;-->
                  <!--                      userType = item.name;-->
                  <!--                      permissionsByRole(String(item.name).toLowerCase());-->
                  <!--                      permissionRoleModal();-->
                  <!--                    "-->
                  <!--                    class="-->
                  <!--                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm-->
                  <!--                      me-1-->
                  <!--                    "-->
                  <!--                    v-if="permissionsBooleanByName('perms')"-->
                  <!--                  >-->
                  <!--                    <span class="svg-icon svg-icon-3">-->
                  <!--                      <inline-svg-->
                  <!--                        src="/media/icons/duotune/general/gen019.svg"-->
                  <!--                      />-->
                  <!--                    </span>-->
                  <!--                  </a>-->

                  <a
                    @click="
                      // fillUpdateInputs(index);
                      fillUpdateInputs(item.id);
                      RoleModal();
                      create = 0;
                    "
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                    v-if="permissionsBooleanByName('update')"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    @click="
                      fillUpdateInputs(item.id);
                      create = 2;
                      RoleModal();
                    "
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                    "
                    v-if="permissionsBooleanByName('delete')"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="/media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
            <tr>
              <td>{{ $t("total") }} {{ roleData.length }}</td>
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
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
import KTModalCard from "@/components/cards/Card.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import PermissionsRoleModal from "@/components/modals/forms/PermissionsRoleModal.vue";
import RoleModal from "@/components/modals/forms/RoleModal.vue";

export default defineComponent({
  name: "kt-widget-9",
  data() {
    return {
      roleData: [{ id: 1 }],
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      createModalShow: false,
      updateModalShow: false,
      permissionsModalShow: false,
      allPermissions: [],
      user_perms: [],
      typePermissions: [],
      typesMap: Map,
      name: "",
      code: "",
      updatingIndex: 0,
      updatingId: 0,
      userType: "",
      type_perms_name: "",
      checkOn: false,
      deleteId: 0,
      deleteIndex: 0,
      updateId: -1,
      create: 1,
    };
  },
  components: {
    KTModalCard,
    PermissionsRoleModal,
    RoleModal,
  },
  props: {
    widgetClasses: String,
  },
  methods: {
    tableData() {
      axios
        .get("role/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            this.roleData = response.data;
            localStorage.setItem("roles", JSON.stringify(response.data));
            // for (let i = 0; i < this.roleData.length; i++) {
            //   for (let j = 0; j < this.roleData.length; j++) {
            //     if (this.roleData[i].id < this.roleData[j].id) {
            //       let c = this.roleData[i];
            //       this.roleData[i] = this.roleData[j];
            //       this.roleData[j] = c;
            //     }
            //   }
            // }
          }
        });
    },
    userPermissions() {
      try {
        this.user_perms = JSON.parse(
          String(localStorage.getItem("user_perms"))
        );
      } catch (err) {
        // console.log("Cant find user perms");
      }
    },
    permissionsRefresh() {
      let rawUserData: any = localStorage.getItem("userData");
      let userData = JSON.parse(rawUserData);
      const token: any = userData["token"];
      axios
        .post(
          "permission/list/" + userData["name"].toLowerCase(),
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          localStorage.setItem(
            "user_perms",
            JSON.stringify(response.data.list)
          );
          setTimeout(this.userPermissions, 100);
        });
    },
    permissionsByRole(role) {
      axios
        .post(
          "permission/class/" + role.toLowerCase(),
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          this.typePermissions = response.data;
          // try {
          //   this.typePermissions = this.typePermissions.sort((a, b) => {
          //     if (a["id"] < b["id"]) return -1;
          //     else return 1;
          //   });
          // } catch (err) {
          //   console.log("Cant sort type perms");
          // }
          this.type_perms_name = role;
        });
    },
    permissionsBooleanByName(name) {
      // debugger;
      for (const item of this.user_perms) {
        if (item["name"] === name) {
          return item["aboolean"];
        }
      }
      return true;
    },
    updatePermissions() {
      for (const item of this.typePermissions) {
        axios.post(
          "permission/update",
          {
            id: item["id"],
            aboolean: item["aboolean"],
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
      }
      this.permissionsRefresh();
      alert("Done");
    },
    deleteRole(id, row) {
      axios
        .delete("role/delete/" + id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Cant delete");
          } else {
            alert("Successfully deleted");
            this.roleData.splice(row, 1);
          }
        });
    },
    spliceDelete(index, range) {
      this.roleData.splice(index, range);
    },
    RoleModal() {
      let Element: HTMLElement = document.querySelector(
        ".modal-view button"
      ) as HTMLElement;
      Element.click();
    },
    permissionRoleModal() {
      let Element: HTMLElement = document.querySelector(
        ".modal-view-permission button"
      ) as HTMLElement;
      Element.click();
    },
    fillUpdateInputs(id) {
      this.updateId = id;
    },
    sendIndex(index) {
      return index;
    },
  },
  created() {
    const i18n = useI18n();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    this.tableData();
    this.userPermissions();
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
      setCurrentPageBreadcrumbs(translate("roles"), [
        translate("administration"),
      ]);
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
  color: white;
}

.modal-create form {
  background-color: black;
  width: 500px;
  height: 400px;
  display: flex;
  place-content: center;
  place-items: center;
}

.close {
  position: absolute;
  right: 0;
  top: 70px;
}
</style>
