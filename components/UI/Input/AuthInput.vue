<template>
  <div
    class="w-full font-medium flex flex-col text-[#D7D7D7] outline-none overflow-hidden bg-transparent opacity-[0.8029] text-[18px]"
  >
    <Label v-if="label" :class="labelClasses" class="text-[#FFFFFF]">{{ label }}</Label>
    <!-- <div class="lg:pl-4 pl-2"><slot></slot></div> -->
    <input
      :class="error ? 'border-[#DA5252]' : ' border-[#FFFFFF61]'"
      class="w-full text-[20px] font-medium placeholder:text-[#848484] bg-[#FFFFFF21] border-[1px] text-[#D7D7D7] outline-none rounded-[8px] !p-[8px_16px_8px_16px]"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Label = defineAsyncComponent(() => import("./Label.vue"));
defineProps({
  modelValue: String | Number,
  type: String,
  placeholder: String,
  error: Boolean,
  errorsMsg: String,
  label: String,
  labelClasses: String,
  disabled: Boolean,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>
