<template>

  <div class="mt-10 bg-white border-2 border-gray-300 w-3/4 rounded-md mx-auto">
    <div class="max-w-7xl mx-auto">
      <ReportTitle reportTitle="Birthday Report" />
    </div>
    <div class="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <BaseReport reportTitle="Birthday Report" reportSubtitle="Select a Month" :selectList="months" />
    </div>
        <div class="max-w-7xl flex justify-start mx-auto px-8 mb-10">
      <PCNButton
        buttonTitle="Generate Report" />
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseReport from './BaseReport.vue';
import ReportTitle from './ReportTitle.vue';
import PCNButton from './PCNButton.vue';
import { useReportStore } from "../stores/reportStore"

const data = useReportStore();


const months = ref([
  { id: 1, name: 'Select a Month', disabled: true},
  { id: 2, name: 'January' },
  { id: 3, name: 'February' },
  { id: 4, name: 'March' },
  { id: 5, name: 'April' },
  { id: 6, name: 'May' },
  { id: 7, name: 'June' },
  { id: 8, name: 'July' },
  { id: 9, name: 'August' },
  { id: 10, name: 'September' },
  { id: 11, name: 'October' },
  { id: 12, name: 'November' },
  { id: 13, name: 'December' },
])

</script>
