<template>
  <section style="margin-bottom: 40px">
    <div class="mb-4 d-flex justify-content-between align-items-center gap-4">
      <h6 class="mb-0 text-semi-bold text-purple fs-6">MÉTRICAS MÚSICOS</h6>
      <dropdown-component />
    </div>
    <div class="row">
      <card-component
        class="col-12 col-md-4"
        :value="musiciansMetric.total_registered"
        text="TOTAL DE
CADASTROS"
      />
      <card-component
        class="col-12 col-md-4"
        :value="musiciansMetric.active_musicians"
        text="MÚSICOS
ATIVOS"
      />
      <card-component
        class="col-12 col-md-4"
        :value="musiciansMetric.complete_profiles"
        text="PERFIS
COMPLETOS"
      />
      <div class="row">
        <card-component
          class="col-12 col-md-6"
          background-color="bg-orange"
          :value="25"
          height="95px"
          simbol="+"
          show-vantagem
          text="Porcentagem de cadastros"
          vantagem-text="Cadastros comparados
ao mesmo período anterior"
          vantagem-value="34534"
        />
        <card-component
          class="col-12 col-md-6"
          background-color="bg-orange"
          :value="25"
          height="95px"
          simbol="-"
          show-vantagem
          text="PORCENTAGEM DE CHURN"
          vantagem-text="Porcentagem de cadastros"
          vantagem-value="43675"
        />
      </div>
    </div>
    <div class="mb-4 d-flex justify-content-end w-100">
      <button class="btn btn-sm bg-purple text-white" @click="showLineChart = !showLineChart">
        Mais detalhes
      </button>
    </div>
  </section>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown-component.vue';
import CardComponent from '@/components/card-component-mobile.vue';
import { computed } from 'vue';
import { metrics } from '@/stores/index.js';

const store = metrics();
const musiciansMetric = computed(() => {
  return store.getMusicians;
});
</script>
