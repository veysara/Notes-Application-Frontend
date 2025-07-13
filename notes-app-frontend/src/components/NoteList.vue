<template>
  <ul class="divide-y border p-4">
    <li v-for="note in notes" :key="note.id" class="py-2 flex justify-between">
      <div @click="() => onSelect(note)" class="cursor-pointer">
        <h3 class="text-lg font-bold">{{ note.title }}</h3>
        <p class="text-sm text-gray-500">{{ new Date(note.createdAt).toLocaleString() }}</p>
      </div>
      <button @click="() => onDelete(note.id)" class="text-red-500">Delete</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  notes: any[];
  onSelect: (note: any) => void;
  onDelete: (id: number) => void;
}>();
</script>
