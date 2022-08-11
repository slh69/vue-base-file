<template>
  <div class="mt-10 bg-white border-2 border-gray-300 w-3/4 rounded-md mx-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"> 
      <FormKit
        type="select"
        name="selectReport"
        label="Select a Report"
        v-model="data.selected"
        :options="[
          { label: 'End of Day', value: 'eod'},
          { label: 'Birthday Report', value: 'bd'},
          { label: 'Anniversary Report', value: 'an' },
          { label: 'Last Visit Report', value: 'lv' },
          { label: 'New Patient Report', value: 'np' },
          { label: 'Non Compliance Report', value: 'nc'},
          { label: 'ReExam Report', value: 're'}
        ]"
          outer-class="bg-white mt-10"
          label-class="block mb-1 font-bold text-sm"
          inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 bg-white placeholder-gray-400"
          help-class="text-xs text-gray-500"
      />
      </div>
  </div>

</template>

<script setup>
import { useReportStore } from "../stores/reportStore"

const data = useReportStore();
</script>