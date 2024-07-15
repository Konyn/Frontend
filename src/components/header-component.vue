<template>
  <header style="margin-bottom: 40px">
    <div
      class="container-fluid position-relative d-flex justify-content-end h-100"
      style="max-width: 1440px"
    >
      <div
        v-if="maxWidthCol"
        class="position-absolute translate-middle-x start-50"
        style="top: 25%"
      >
        <img src="@/assets/image/logo-color.svg" height="69" width="85" />
      </div>
      <div v-else class="position-absolute translate-middle-x start-50 mt-4">
        <img src="@/assets/image/logo-color.svg" height="166" width="208" />
      </div>
      <div class="h-100 d-flex align-items-center">
        <button
          class="btn btm-sm border text-white fs-7"
          style="height: 38px; width: 100px"
          @click="logout"
        >
          <i class="bi bi-chevron-left fs-8 me-2" />
          Sair
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { auth } from '@/stores';
import { useRouter } from 'vue-router';

const store = auth();
const maxWidthCol = ref(false);
const router = useRouter();
const user = computed(() => {
  return store.getUser;
});
function colResize() {
  if (window.innerWidth < 768) {
    maxWidthCol.value = true;
  } else {
    maxWidthCol.value = false;
  }
}
function logout() {
  store.logout(user.value.token).then(() => {
    router.push('/login');
  });
}
onMounted(() => {
  colResize();
  window.addEventListener('resize', colResize);
});
</script>

<style scoped>
header {
  background-image: linear-gradient(to right, #600082, #820056);
  height: 135px;
}
</style>
