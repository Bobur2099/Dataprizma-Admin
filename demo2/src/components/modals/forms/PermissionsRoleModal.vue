<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_permissions_role"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Permissions</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
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
          <Form
            id="kt_modal_new_card_form"
            class="form"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <!--begin::Input group-->

            <!--begin::Input group-->
            <div style="overflow: scroll; height: 50vh">
              <template
                v-for="(value, key) in typePermissions"
                v-bind:key="key"
                v-bind:title="value"
              >
                <h1>{{ key }}</h1>
                <template
                  v-for="(item, index) in value"
                  v-bind:key="index"
                  v-bind:title="item['name']"
                >
                  <!--begin::Label-->
                  <div class="me-5">
                    <label
                      class="fs-6 fw-bold form-label"
                      v-bind:for="'permission-' + item.name"
                    >
                      {{
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
                      }}</label
                    >
                    <!--                <div class="fs-7 fw-bold text-gray-400">-->
                    <!--                  If you need more info, please check budget planning-->
                    <!--                </div>-->
                  </div>
                  <!--end::Label-->

                  <!--begin::Switch-->
                  <label
                    class="
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-bind:id="'permission-' + item.name"
                      v-bind:name="'permission-' + item.name"
                      v-model="item.aboolean"
                    />
                  </label>
                  <br />
                </template>
              </template>
              <!--end::Switch-->
              <!--end::Input group-->

              <!--begin::Actions-->
              <div class="text-center pt-15">
                <button
                  ref="submitButtonRef"
                  type="submit"
                  id="kt_modal_new_card_submit"
                  class="btn btn-primary"
                  @click="
                    updatePermissions();
                    submit();
                  "
                >
                  <span class="indicator-label"> {{ $t("submit") }} </span>
                  <span class="indicator-progress">
                    {{ $t("please_wait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
            </div>
            <!--end::Actions-->
          </Form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";
import axios from "axios";
import { useI18n } from "vue-i18n";

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "permissions-role-modal",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      typePermissions: { Page: [{ name: "dashboard" }] },
      user_perms: [],
    };
  },
  props: ["typePermissionsCopy", "typePermsName", "userPermsCopy"],
  components: {
    // ErrorMessage,
    // Field,
    Form,
  },
  methods: {
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
          "/permission/class/" + role.toLowerCase(),
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
        });
    },
    permissionsBooleanByName(name) {
      for (const item of this.user_perms) {
        if (item["name"] === name) {
          return item["aboolean"];
        }
      }
      return true;
    },
    updatePermissions() {
      // debugger;
      for (const item in this.typePermissions) {
        for (const value of this.typePermissions[item]) {
          axios.post(
            "permission/update",
            {
              id: value["id"],
              aboolean: value["aboolean"],
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
        }
      }
      this.permissionsRefresh();
      setTimeout(() => {
        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          this.$emit("permission-load");
        });
      }, 2000);
    },
  },
  watch: {
    typePermsName(newValue, oldValue) {
      this.permissionsByRole(newValue.toLowerCase());
      this.userPermissions();
      this.user_perms = this.userPermsCopy;
      this.typePermissions = this.typePermissionsCopy;
    },
  },
  //created
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const cardData = ref<CardData>({
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      expirationMonth: "",
      expirationYear: "",
      cvv: "",
    });

    const validationSchema = Yup.object().shape({
      nameOnCard: Yup.string().required().label("Name"),
      cardNumber: Yup.string().required().label("Card number"),
      expirationMonth: Yup.string().required().label("Month"),
      expirationYear: Yup.string().required().label("Year"),
      cvv: Yup.string().required().label("CVV"),
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }
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

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        // Swal.fire({
        //   text: "Form has been successfully submitted!",
        //   icon: "success",
        //   buttonsStyling: false,
        //   confirmButtonText: "Ok, got it!",
        //   customClass: {
        //     confirmButton: "btn btn-primary",
        //   },
        // }).then(() => {
        hideModal(newCardModalRef.value);
        //   });
      }, 2000);
    };

    return {
      cardData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>
