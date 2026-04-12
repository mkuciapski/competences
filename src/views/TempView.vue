<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import { users } from '@/assets/users'

const _users = ref(users)
const _user = ref({ Name: '<b>John Doe</b>', Age: 30 })

setTimeout(() => {
  _user.value = { Name: '<b>Michał K</b>', Age: 30 }
  // _users.value = users.filter((u) => u.Age > 40)
  _users.value.push({ Name: '<b>Donald Kowalski</b>', Age: 60 })
  _users.value[0].Age = 70
}, 5000)

const _fontSize = ref('12px')
setTimeout(() => {
  _fontSize.value = new Date().getSeconds() + 'px'
}, 5000)

const _agedUsers = computed((previous) => {
  console.warn('previous aged users', previous)
  return _users.value.filter((user) => user.Age > 50)
})

const _showFlightPanel = ref(false)

const _flight = ref({
  City: '',
  Tickets: 0,
})

watch(_showFlightPanel, (current, previous) => {
  if (!previous && current) {
    console.log(`${previous}:${current}`)
    _flight.value = { City: '', Tickets: 0 }
  }
})

const _message = ref('')
/*watch(
  () => _flight.value,
  (current, previous) => {
    const dangerousCities = ['Beirut', 'Sopot']

    if (current.Tickets < 1) _message.value = 'Proszę prowadzić liczbę biletów'
    else if (dangerousCities.includes(current.City)) _message.value = 'Nie jedź do tego miasta'
    else _message.value = ''
  },
  { deep: true, immediate: true },
)*/
watchEffect(() => {
  const dangerousCities = ['Beirut', 'Sopot']

  if (_flight.value.Tickets < 1) _message.value = 'Proszę prowadzić liczbę biletów'
  else if (dangerousCities.includes(_flight.value.City)) _message.value = 'Nie jedź do tego miasta'
  else _message.value = ''
})
</script>

<template>
  <!-- <div>
    <h1>TEMP</h1>
    <p class="user-name">{{ _user.Name }}</p>
    <p v-html="_user.Name"></p>

    <input v-model.lazy.trim="_user.Name" />
    <input v-model="_user.Name" />

    <pre>{{ _agedUsers }}</pre>

    <div style="margin-top: 20px">
      <input type="submit" />
    </div>
  </div> -->
  <input type="checkbox" v-model="_showFlightPanel" />
  <div class="border-1 rounded-lg" v-show="_showFlightPanel">
    <input placeholder="lokalizacja" v-model="_flight.City" />
    <input min="0" step="1" v-model="_flight.Tickets" />
    <p class="text-red-700">{{ _message }}</p>
  </div>
</template>
<style scoped>
.user-name {
  font-size: v-bind('_fontSize');
}
</style>
