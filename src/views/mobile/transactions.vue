<template>
  <section style="margin-bottom: 40px">
    <div class="mb-4 d-flex justify-content-between align-items-center gap-4">
      <h6 class="mb-0 text-semi-bold text-purple fs-6">TRANSAÇÕES</h6>
      <dropdown-component @selected-filter="days = $event" collapse-enabled />
    </div>
    <div class="row">
      <card-component
        class="col-12 col-md-4"
        :value="transactionList[0]?.hiring"
        text="CONTRATAÇÕES"
      />
      <card-component
        class="col-12 col-md-4"
        :value="currencyCoin(calculateProfit())"
        text="TOTAL FATURADO"
      />
      <card-component
        class="col-12 col-md-4"
        :value="transactionList[0]?.billed_app"
        text="% APP"
      />
      <card-component class="col-12" background-color="bg-green">
        <template #body>
          <div class="d-flex justify-content-between align-items-center h-100">
            <div class="d-flex flex-column align-items-center w-100 border-end">
              <h1 class="mb-0 text-white" style="font-size: 28px">
                -{{ firstProfit()?.geteway_cost }}<span class="fs-5">%</span>
              </h1>
              <h6 class="mb-0 text-white fs-6">Custo Gateway</h6>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w-100">
              <h1 class="mb-0 text-white" style="font-size: 28px">
                -{{ firstProfit()?.tax_cost }}<span class="fs-5">%</span>
              </h1>
              <h6 class="mb-0 text-white fs-6 ms-4">Custo Fiscal</h6>
            </div>
          </div>
        </template>
      </card-component>
      <card-component class="col-12" background-color="bg-green">
        <template #body>
          <div class="d-flex align-items-center justify-content-between h-100">
            <h5 class="mb-0 text-white fs-5" style="font-size: 64px">
              <span class="fs-6 me-1">R$</span>{{ calculateProfit() }}
            </h5>
            <h6 class="mb-0 fs-6 text-white">LUCRO REAL</h6>
          </div>
        </template>
      </card-component>
    </div>
    <div class="mb-4 d-flex justify-content-end w-100">
      <button class="btn btn-sm bg-purple text-white" @click="showLineChart = !showLineChart">
        Mais detalhes
      </button>
    </div>
    <line-chart v-if="showLineChart" :data-series="profit()" :key="days" />
  </section>
</template>

<script setup lang="ts">
import LineChart from '@/components/line-chart.vue';
import DropdownComponent from '@/components/dropdown-component.vue';
import CardComponent from '@/components/card-component-mobile.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { metrics } from '@/stores';
import { Utils } from '@/utils';

defineProps({
  maxWidthCol: {
    type: Boolean,
    default: false
  }
});
const store = metrics();
const showLineChart = ref(false);
const transactionList = computed(() => {
  return store.getTransactions;
});
const days = ref(7);
const currencyCoin = Utils.formattedPrice;
const mobile = ref(false);

function profit() {
  if (transactionList.value.length) {
    const realProfits = transactionList.value.map((profit) => profit.real_profit);
    return realProfits.slice(0, days.value);
  }
  return [0];
}
function calculateProfit() {
  if (transactionList.value.length) {
    return transactionList.value.reduce((total, profit) => total + profit.real_profit, 0);
  }
}
function firstProfit() {
  if (transactionList.value.length) {
    return transactionList.value[0];
  }
}
function isMobile() {
  if (window.innerWidth <= 768) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
}
watch(days.value, () => {
  profit();
});
onMounted(() => {
  store.transactionsList();
  isMobile();
  window.addEventListener('resize', isMobile);
});
</script>

<style scoped></style>
