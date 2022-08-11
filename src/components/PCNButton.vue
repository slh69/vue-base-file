<template>
    <button type="button" class="px-2.5 py-1.5 border border-transparent text-sm font-medium rounded text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{buttonTitle}}</button>
    </template>

<script setup>

defineProps({
    buttonTitle: String
})
</script>