<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_update_user"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Update member</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
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
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span class="required">Email</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a card holder's name"
                ></i>
              </label>
              <!--end::Label-->

              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Name"
                name="nameOnCard"
                v-model="updateEmail"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nameOnCard" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
<!--            <div class="d-flex flex-column mb-7 fv-row">-->
<!--              &lt;!&ndash;begin::Label&ndash;&gt;-->
<!--              <label class="required fs-6 fw-bold form-label mb-2"-->
<!--                >Password</label-->
<!--              >-->
<!--              &lt;!&ndash;end::Label&ndash;&gt;-->

<!--              &lt;!&ndash;begin::Input wrapper&ndash;&gt;-->
<!--              <div class="position-relative">-->
<!--                &lt;!&ndash;begin::Input&ndash;&gt;-->
<!--                <Field-->
<!--                  type="text"-->
<!--                  class="form-control form-control-solid"-->
<!--                  placeholder="Password"-->
<!--                  name="cardNumber"-->
<!--                  v-model="updatePassword"-->
<!--                />-->
<!--                <div class="fv-plugins-message-container">-->
<!--                  <div class="fv-help-block">-->
<!--                    <ErrorMessage name="cardNumber" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;end::Input&ndash;&gt;-->
<!--              </div>-->
<!--              &lt;!&ndash;end::Input wrapper&ndash;&gt;-->
<!--            </div>-->
            <!--end::Input group-->

            <div class="row fv-row">
              <!--begin::Col-->
              <div class="col-12">
                <Field
                  v-model="updateRole"
                  name="expirationMonth"
                  class="form-select form-select-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Month"
                  as="select"
                >
                  <option value="nothing">Choose the role</option>
                  <option
                    v-for="(item, index) in roleDatas"
                    v-bind:value="item.id"
                    v-bind:key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="expirationMonth" />
                  </div>
                </div>
              </div>
            </div>

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                type="reset"
                id="kt_modal_new_card_cancel"
                class="btn btn-white me-3"
              >
                Discard
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
                class="btn btn-primary"
                @click="
                  updateUser(userId, userId);
                  submit();
                "
              >
                <span class="indicator-label"> Submit </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
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

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "update-role-modal",
  data: function () {
    return {
      name: "",
      code: "",
      token: JSON.parse(String(localStorage.getItem("userData")))["token"],
      userDatas: [{ id: 1 }],
      roleDatas: [],
      updateEmail: "",
      updatePassword: "",
      updateRole: "0",
      userId: 0,
      userIndex: -1,
    };
  },
  props: ["updateIndex"],
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  methods: {
    tableData() {
      axios
        .get("login/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            console.log(response.data);
            this.userDatas = response.data;
            for (let i = 0; i < this.userDatas.length; i++) {
              for (let j = 0; j < this.userDatas.length; j++) {
                if (this.userDatas[i].id < this.userDatas[j].id) {
                  let c = this.userDatas[i];
                  this.userDatas[i] = this.userDatas[j];
                  this.userDatas[j] = c;
                }
              }
            }
          }
        });
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
            console.log(response.data);
            this.roleDatas = response.data;
          }
        });
    },
    fillUpdateInputs(index) {
      this.updateEmail = this.userDatas[index]["email"];
      this.updatePassword = "";
      this.updateRole = String(this.userDatas[index]["roleId"]);
      this.userIndex = index;
      this.userId = this.userDatas[index]["id"];
    },
    updateUser(index, id) {
      let userResponseDatas = {};
      userResponseDatas["email"] = this.updateEmail;
      userResponseDatas["password"] = this.updatePassword;
      userResponseDatas["roleId"] = Number(this.updateRole);
      console.log(userResponseDatas);
      axios
        .put("/login/update/" + id, userResponseDatas, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("It was not edited");
          } else {
            debugger;
            // alert("It was edited");
            this.$emit("table-load");
          }
        });
    },
  },
  watch: {
    updateIndex(newValue, oldValue) {
      this.tableData();
      console.log("It was changed", newValue, oldValue);
      this.fillUpdateInputs(newValue);
    },
  },
  created() {
    this.tableData();
  },
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

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newCardModalRef.value);
        });
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
