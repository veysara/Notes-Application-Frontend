<template>
  <form @submit.prevent="onSubmit" class="space-y-4 p-4 border rounded shadow">
    <input v-model="title" placeholder="Title" class="w-full p-2 border" required />
    <textarea v-model="content" placeholder="Content" class="w-full p-2 border" />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save Note</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';
import { createNote, updateNote } from '../services/noteService';

const props = defineProps<{
  selectedNote: any;
  onSaved: () => void;
}>();

const title = ref('');
const content = ref('');

watch(() => props.selectedNote, (newVal) => {
  title.value = newVal?.title ?? '';
  content.value = newVal?.content ?? '';
});

const onSubmit = async () => {
  if (props.selectedNote?.id) {
    await updateNote(props.selectedNote.id, {
      title: title.value,
      content: content.value
    });
  } else {
    await createNote({
      title: title.value,
      content: content.value
    });
  }
  props.onSaved();
  title.value = '';
  content.value = '';
};
</script>
