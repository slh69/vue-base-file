<template>
  <ReportSelect />
  <Reports v-show="data.selected.includes('eod')" /> 
  <BirthdayReport v-show="data.selected.includes('bd')"/>
  <NewPatientReport v-show="data.selected.includes('np')" />
  <NonComplianceReport v-show="data.selected.includes('nc')" />
  <AnniversariesReport v-show="data.selected.includes('an')" />   
  <ReExamReport v-show="data.selected.includes('re')" />
  <LastVisitReport v-show="data.selected.includes('lv')" /> 




</template>

<script setup>
import BirthdayReport from './components/BirthdayReport.vue';
import NewPatientReport from './components/NewPatientReport.vue';
import Reports from './components/Reports.vue';
import NonComplianceReport from './components/NonComplianceReport.vue';
import AnniversariesReport from './components/AnniversariesReport.vue';
import ReExamReport from './components/ReExamReport.vue';
import LastVisitReport from './components/LastVisitReport.vue';
import { useReportStore } from './stores/reportStore'
import ReportSelect from './components/ReportSelect.vue';
const data = useReportStore()
</script>
