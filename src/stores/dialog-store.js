// In your useDialogStore definition

import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    layout: false,
    dialogWidth: '500px',
    dialogHeight: '300px',
    leftIconComponent: null,
    innerComponent: null,
  }),
  actions: {
    openDialog() {
      this.layout = true;
    },
    closeDialog() {
      this.layout = false;
    },
    setDialogWidth(width) {
      this.dialogWidth = width;
    },
    setDialogHeight(height) {
      this.dialogHeight = height;
    },
    setLeftIconComponent(leftIcon) {
      this.leftIconComponent = leftIcon;
    },
    setInnerComponent(inner) {
      this.innerComponent = inner;
    },
  },
});
