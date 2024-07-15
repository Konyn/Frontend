<template>
  <main class="container-fluid">
    <downloads />
    <section class="mb-4">
      <h6 class="text-purple fs-6 text-semi-bold" style="margin-bottom: 20px">
        ACESSOS WEB | TRÁFEGO EM USÁRIOS ÚNICOS
      </h6>
      <div class="card shadow bg-purple" style="height: 62px">
        <div class="card-body px-4">
          <div class="d-flex align-items-center justify-content-between h-100">
            <h1 class="mb-0 text-white fs-1">
              {{ userTrafficMetric.accesses_web }}
            </h1>
            <a href="palinha.com.br" target="_blank" class="mb-0 fs-6 text-bold text-white">
              palinha.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
    <metrics-musicians />
    <metrics-contractings />
    <transactions />
  </main>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import Downloads from '@/views/mobile/downloads.vue';
import MetricsMusicians from '@/views/mobile/metrics-musicians.vue';
import MetricsContractings from '@/views/mobile/metrics-contractings.vue';
import Transactions from '@/views/mobile/transactions.vue';
import { metrics } from '@/stores';

const store = metrics();
const userTrafficMetric = computed(() => {
  return store.getUserTraffic;
});
onMounted(() => {
  store.downloadsMetrics();
  store.contractingMetrics();
  store.musiciansMetrics();
  store.userTrafficMetrics();
});
</script>
