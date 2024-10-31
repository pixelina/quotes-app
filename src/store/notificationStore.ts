import { defineStore } from "pinia"
import { ref } from "vue"
import { Notification } from "@/interfaces/interfaces";

export const useNotificationStore = defineStore('notificationStore', () => {
  const notification = ref<Notification>({
    isShown: false,
    status: 0,
    message: ''
  })

  const showNotification = (status: number, message: string): void => {
    notification.value.isShown = true;
    notification.value.status = status;
    notification.value.message = message;
    setTimeout(() => {
      notification.value.isShown = false;
      notification.value.status = 0;
      notification.value.message = '';
    }, 3000)
  }

  return { notification, showNotification }
})