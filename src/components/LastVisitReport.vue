<template>
<div class="mt-10 mb-5 bg-white border-2 border-gray-300 w-3/4 rounded-md mx-auto">
 
    <div>
    <div class="max-w-7xl mx-auto">
      <ReportTitle reportTitle="Last Visit Report" />
    </div>
    <div class="max-w-7xl flex mt-10 justify-start mx-auto px-8 mb-10">
      <div class="flex gap-4">
        <PCNButton buttonTitle="Today" />
        <PCNButton buttonTitle="This Week" />
        <PCNButton buttonTitle="This Month" />
        <PCNButton buttonTitle="Last Week" />
        <PCNButton buttonTitle="Last Month" />
        <PCNButton buttonTitle="Custom" @click="data.showCalendarSelect = !data.showCalendarSelect" />

    </div>
    </div>    
    </div>
    <div class="max-w-7xl mx-auto">
      <CalendarSelect v-show="data.showCalendarSelect" />
    </div>
    <div class="max-w-7xl flex justify-start mx-auto px-8 mb-10">
      <PCNButton
        buttonTitle="Generate Report" v-show="data.showCalendarSelect" />
    </div>
  </div>

</template>

<script setup>
import CalendarSelect from './CalendarSelect.vue';
import PCNButton from './PCNButton.vue';
import { useReportStore } from "../stores/reportStore"
import ReportTitle from './ReportTitle.vue';

const data = useReportStore();

</script>

