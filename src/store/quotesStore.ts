import axios from "axios"
import { defineStore } from "pinia"
import { useNotificationStore } from '@/store/notificationStore';
import { Quote, Authors } from "@/interfaces/interfaces";

export const useQuotesStore = defineStore('quotesStore', () => {

  const notificationStore = useNotificationStore()

  const getRandomQuote = async (author: string = ''): Promise<Quote | undefined> => {
    try {
      let response;
      if (author) {
        response = await axios.get(`${process.env.VUE_APP_BASE_URL}/random?author=${author}`)
      }
      else {
        response = await axios.get(`${process.env.VUE_APP_BASE_URL}/random`)
      }
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        notificationStore.showNotification(error.response.status, error.response.statusText);
      } else {
        console.log("Unknown error:", error);
      }
    }
  }

  const getAuthors = async (page: number = 1): Promise<Authors | undefined> => {
    try {
      const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/authors?page=${page}&limit=150`)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        notificationStore.showNotification(error.response.status, error.response.statusText);
      } else {
        console.log("Unknown error:", error);
      }
    }
  }

  return { getRandomQuote, getAuthors }
})