import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

export function initVeeValidate() {
  // Updating default vee-validate configuration
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
    generateMessage: localize({
      en: {
        messages: {
          required: "This field is required",
        },
      },
      ar: {
        messages: {
          required: "هذا الحقل مطلوب",
        },
      },
    }),
  });
}
