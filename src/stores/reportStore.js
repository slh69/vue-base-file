import { defineStore } from 'pinia'



export const useReportStore = defineStore('reportStore', {
  state: () => ({
       selected: 'eod',
       showCalendarSelect: false

  
      }),
 

})