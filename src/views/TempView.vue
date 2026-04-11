<script setup lang="ts">
import { ref, computed } from 'vue'
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
</script>

<template>
  <div>
    <h1>TEMP</h1>
    <p class="user-name">{{ _user.Name }}</p>
    <p v-html="_user.Name"></p>

    <input v-model.lazy.trim="_user.Name" />
    <input v-model="_user.Name" />

    <pre>{{ _agedUsers }}</pre>

    <div style="margin-top: 20px">
      <input type="submit" />
    </div>
  </div>
</template>
<style scoped>
.user-name {
  font-size: v-bind('_fontSize');
}
</style>
