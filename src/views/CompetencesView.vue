<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { competences } from '@/assets/competences'
import CompetenceCard from '@/components/CompetenceCard.vue'

// #region LIST
const _competences = ref(competences)
const _filteredCompetences = computed(() => {
  return _competences.value.filter((competence) => competence.Name.toLowerCase().includes(_searchText.value.toLowerCase()))
})
setTimeout(() => {
  _competences.value.push({ Id: 11, Name: 'Bootstrap 4', Level: 4, Picture: 'bootstrap.svg', Description: 'Wersja 4' })
}, 5000)
//#endregion LIST

// #region SEARCH
const _searchText = ref('')
//#endregion SEARCH

// #region DISPLAY
const _gapSize = ref('1rem')
const _alert = ref('')
//#endregion DISPLAY

watch(
  () => _competences.value,
  () => {
    _alert.value = 'Wykryto zmianę!!'
    setTimeout(() => {
      _alert.value = ''
    }, 5000)
  },
  { deep: true },
)
</script>

<template>
  <div class="flex justify-center w-full!">
    <div class="join w-[50%]!">
      <button class="btn join-item text-white bg-green-800">Podaj nazwę kompetencji</button>
      <input type="text" class="w-full!" v-model="_searchText" />
    </div>
  </div>
  <div class="flex flex-wrap justify-center card-spacing">
    <CompetenceCard v-for="competence in _filteredCompetences" :key="competence.Id" :competence="competence" />
  </div>
  <div v-show="_alert" class="toast">
    <div class="alert alert-info">
      <span>{{ _alert }}</span>
    </div>
  </div>
</template>
<style scoped>
.card-spacing {
  gap: v-bind('_gapSize');
}
</style>
