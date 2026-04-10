<script setup lang="ts">
import { ref } from 'vue'
import { users } from '@/assets/users'

const _users = ref(users)

const _user = ref({ Name: '<b>John Doe</b>', Age: 30 })

setTimeout(() => {
  _user.value = { Name: '<b>Michał K</b>', Age: 30 }

  _users.value = users.filter((u) => u.Age > 40)
}, 5000)
</script>

<template>
  <div>
    <h1>TEMP</h1>
    <p>{{ _user.Name }}</p>
    <p v-html="_user.Name"></p>

    <input v-model.lazy.trim="_user.Name" />
    <input v-model="_user.Name" />

    <pre>{{ _users }}</pre>

    <div style="margin-top: 20px">
      <input type="submit" />
    </div>
  </div>
</template>
