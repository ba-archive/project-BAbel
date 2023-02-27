<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vitepress';

const offlineReady = ref(false);
const onOfflineReady = () => {
  offlineReady.value = true;
};
const close = async () => {
  offlineReady.value = false;
};

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register');
  registerSW({
    immediate: true,
    onOfflineReady,
    onRegistered() {
      console.info('Service Worker registered');
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e);
    },
  });
});

onMounted(() => {
  const router = useRouter();
  const currentRoute = router.route.path;

  // handle 'Hydration completed but contains mismatches.' manually
  if ('/' !== currentRoute) {
    const VPContentElement: HTMLElement | null = document.querySelector(
      '.VPContent, .is-home'
    );
    const VPNavBarElement: HTMLElement | null =
      document.querySelector('.VPNavBar');
    if (VPContentElement) {
      VPContentElement.style.display = 'none';
    }
    if (VPNavBarElement) {
      if (
        1 === VPNavBarElement.classList.length &&
        'VPNavBar' === VPNavBarElement.classList[0]
      ) {
        VPNavBarElement.classList.add('has-sidebar', 'fill');
      }
    }
  }
});
</script>

<template>
  <template v-if="offlineReady">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-3">App ready to work offline</div>
      <button type="button" class="pwa-cancel" @click="close">Close</button>
    </div>
  </template>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast #pwa-message {
  margin-bottom: 8px;
}

.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
