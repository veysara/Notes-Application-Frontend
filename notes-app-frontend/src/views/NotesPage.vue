<template>
  <div class="max-w-2xl mx-auto mt-10">
    <NoteForm :selectedNote="selectedNote" :onSaved="loadNotes" />
    <hr class="my-6" />
    <NoteList :notes="notes" :onSelect="selectNote" :onDelete="deleteNoteHandler" />
    <h1>hello sara</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { deleteNote, getNotes } from '../services/noteService';

const notes = ref([]);
const selectedNote = ref(null);

const loadNotes = async () => {
  const res = await getNotes();
  notes.value = res.data;
  selectedNote.value = null;
};

const selectNote = (note: any) => {
  selectedNote.value = note;
};

const deleteNoteHandler = async (id: number) => {
  await deleteNote(id);
  await loadNotes();
};

onMounted(() => {
  loadNotes();
});
</script>
