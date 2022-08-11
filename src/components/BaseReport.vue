<template>
  <div>
    <div class="border-2 border-gray-300 rounded-lg overflow-hidden">
    <select class="p-2 w-full  bg-white text" >
      <option v-for="option in selectList"  >{{ option.name }}</option>
    </select>
    </div>
  </div>
  


</template>

<script setup>

defineProps({
  selectList: { type: Array, required: true },
});
</script>
