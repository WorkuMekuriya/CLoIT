// loadingService.js or loadingService.ts

import { useQuasar } from 'quasar'

export function showLoading({ message = '', html = false, duration = 3000 }) {
  const $q = useQuasar()
  let timer

  $q.loading.show({
    message,
    html,
  })

  // hiding after duration
  timer = setTimeout(() => {
    $q.loading.hide()
    timer = undefined
  }, duration)
}
