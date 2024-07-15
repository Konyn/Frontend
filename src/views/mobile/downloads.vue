<template>
  <section style="margin-bottom: 40px">
    <div class="mb-4 d-flex justify-content-between align-items-center gap-4">
      <h6 class="mb-0 text-semi-bold text-purple fs-6">DOWNLOADS</h6>
      <dropdown-component />
    </div>
    <div>
      <div class="row">
        <card-component-mobile
          class="col-12 col-md-4"
          :value="downloadsList.total_downloads"
          text="TOTAL DOWNLOADS"
        />
        <card-component-mobile
          class="col-12 col-md-4"
          :value="downloadsList.total_ios"
          text="TOTAL IOS"
        />
        <card-component-mobile
          class="col-12 col-md-4"
          :value="downloadsList.total_android"
          text="TOTAL ANDROID"
        />
        <card-component-mobile
          class="col-12 col-md-6"
          show-conversion
          :value="userTrafficMetric.accesses_ios"
          text="ACESSOS IOS"
        />
        <card-component-mobile
          class="col-12 col-md-6"
          show-conversion
          :value="userTrafficMetric.accesses_google"
          text="ACESSOS GOOGLE"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DropdownComponent from '@/components/dropdown-component.vue';
import { metrics } from '@/stores';
import { computed } from 'vue';
import CardComponentMobile from '@/components/card-component-mobile.vue';

defineProps({
  maxWidthCol: {
    type: Boolean,
    default: false
  }
});
const store = metrics();
const downloadsList = computed(() => {
  return store.getDownloads;
});
const userTrafficMetric = computed(() => {
  return store.getUserTraffic;
});
</script>

<style scoped></style>
