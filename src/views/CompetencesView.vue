<script setup lang="ts">
import { ref } from 'vue'
import { competences } from '@/assets/competences'

// #region LIST
const _competences = ref(competences)

//#endregion LIST

// #region SEARCH
const _searchText = ref('')
//#endregion SEARCH
</script>

<template>
  <div class="flex justify-center w-full!">
    <div class="join w-[50%]!">
      <button class="btn join-item text-white bg-green-800">Podaj nazwę kompetencji</button>
      <input type="text" class="w-full!" v-model="_searchText" />
    </div>
  </div>
  <div class="flex flex-wrap justify-center gap-3">
    <template v-for="competence in _competences" :key="competence.Id">
      <div v-if="competence.Level" class="card bg-base-100 w-48 shadow-sm">
        <h2 class="text-center text-xl uppercase">{{ competence.Name }}</h2>
        <img :src="`assets/${competence.Picture}`" />
        <div class="card-body">
          <!--<p :style="{color: competence.Level > 3 ? 'green' : (competence.Level <3 ? 'red' : 'black')}">Poziom: {{competence.Level}}</p> -->
          <p :class="[competence.Level < 3 ? 'text-red-500' : competence.Level > 3 ? 'text-green-500' : '']">Poziom: {{ competence.Level }}</p>
          <p v-if="competence.Description">Opis: {{ competence.Description }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
