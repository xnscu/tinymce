<script setup>
import editorOptions from "./editor.js";
import Editor from "@tinymce/tinymce-vue";

const props = defineProps({
  size: {
    type: [String, Number],
    required: false,
    default: '2M',
  },
  height: { type: [String, Number], required: false, default: 800 },
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);

</script>
<template>
  <Editor
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :init="editorOptions"
  />
</template>
