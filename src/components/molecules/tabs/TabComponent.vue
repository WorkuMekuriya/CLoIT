<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-tabs v-model="tab" narrow-indicator dense align="justify">
        <q-tab name="mails" icon="mail" label="Tab 1" />
        <q-tab  name="alarms" icon="alarm" label="Tab 2" />
        <q-tab  name="movies" icon="movie" label="Tab 3" />
      </q-tabs>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      tab: ref('mails'),
    }
  },
}
</script>
