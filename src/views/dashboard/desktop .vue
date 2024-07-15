<template>
  <main class="container-fluid">
    <downloads />
    <section class="mb-4">
      <h6 class="text-purple fs-2 text-semi-bold" style="margin-bottom: 20px">
        ACESSOS WEB | TRÁFEGO EM USÁRIOS ÚNICOS
      </h6>
      <div class="card shadow bg-purple" style="height: 200px">
        <div class="card-body px-4">
          <div class="d-flex flex-column justify-content-center h-100">
            <h1 class="mb-0 text-white" style="font-size: 62px">
              {{ userTrafficMetric.accesses_web }}
            </h1>
            <a href="palinha.com.br" target="_blank" class="mb-0 fs-2 text-bold text-white">
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
import Downloads from '@/views/dashboard/downloads.vue';
import MetricsMusicians from '@/views/dashboard/metrics-musicians.vue';
import MetricsContractings from '@/views/dashboard/metrics-contractings.vue';
import Transactions from '@/views/dashboard/transactions.vue';
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
