<template>
  <section style="margin-bottom: 40px">
    <div class="mb-4 d-flex justify-content-between align-items-center gap-4">
      <h6 class="mb-0 text-semi-bold text-purple fs-6">MÉTRICAS CONTRATANTES</h6>
      <dropdown-component />
    </div>
    <div class="row">
      <card-component
        class="col-12 col-md-6"
        background-color="bg-purple"
        :value="25"
        simbol="+"
        height="95px"
        show-vantagem
        text="PESSOA FÍSICA"
        vantagem-text="Cadastros comparados
ao mesmo período anterior"
        :vantagem-value="contractingMetric.physical_person"
      />
      <card-component
        class="col-12 col-md-6"
        background-color="bg-purple"
        :value="25"
        simbol="+"
        height="95px"
        show-vantagem
        text="PESSOA JURÍDICA"
        vantagem-text="Cadastros comparados
ao mesmo período anterior"
        :vantagem-value="contractingMetric.legal_person"
      />
    </div>
    <div class="mb-4 d-flex justify-content-end w-100">
      <button class="btn btn-sm bg-purple text-white">Mais detalhes</button>
    </div>
  </section>
</template>

<script setup>
import DropdownComponent from '@/components/dropdown-component.vue';
import CardComponent from '@/components/card-component-mobile.vue';
import { metrics } from '@/stores/index.js';
import { computed } from 'vue';

const store = metrics();
const contractingMetric = computed(() => {
  return store.getContracting;
});
</script>
