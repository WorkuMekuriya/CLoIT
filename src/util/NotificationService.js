// loadingService.js or loadingService.ts

import { useQuasar } from 'quasar'

export function showLNotification({ message = '', html = false }) {
  const $q = useQuasar()

  $q.notify({
    message,
    html,
  })
}
