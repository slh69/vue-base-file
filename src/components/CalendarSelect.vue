<template>
  <div class="max-w-7xl flex gap-4 px-4 pt-6 sm:px-6 lg:px-8">
    <div class="w-1/2">
         <FormKit
        type="date"
        label="Start Date"
          outer-class="mb-5"
          label-class="block mb-1 font-bold text-sm"
          inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500"
      />

    </div>

   <div class="w-1/2">
      <FormKit
        type="date"
        label="End Date"
          outer-class="mb-5"
          label-class="block mb-1 font-bold text-sm"
          inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500"
      />
   </div>

   
  </div>
</template>

<script>




</script>
