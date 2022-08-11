<template>
    <div class="py-4 border-b border-gray-200 sm:px-6">
      <h3 class="text-xl leading-tight font-md text-indigo-600">{{reportTitle}}</h3>
    </div>
</template>

<script setup>
defineProps({
    reportTitle: String
})
</script>