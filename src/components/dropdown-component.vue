<template>
<div   v-if="!collapseEnabled" style="width: 150px">
  <button
    class="btn border d-flex align-items-center btm-sm w-100 bg-orange text-white"
    style="height: 28px;"
  >
    Últimos 7 dias
  </button>
</div>
  <div v-else ref="dropdown" class="position-relative" style="width: 150px">
    <button
      class="btn border d-flex align-items-center btm-sm w-100"
      :class="[
        collapseShow
          ? 'border-bottom-0 rounded-bottom-0 text-black bg-white'
          : 'bg-orange text-white'
      ]"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
      @click="toggle"
      style="height: 28px"
    >
      {{ `Últimos ${selectedFilter} dias` }}
    </button>
    <div
      class="collapse position-absolute w-100 border rounded-bottom border-top-0"
      id="collapseExample"
      ref="collapse"
      style="z-index: 333"
    >
      <div class="card card-body h-auto" style="padding: 6px 12px">
        <ul class="list-unstyled">
          <li class="cursor-pointer" v-if="selectedFilter !== 7" @click="filterDays(7)">
            Últimos 7 dias
          </li>
          <li class="cursor-pointer" v-if="selectedFilter !== 30" @click="filterDays(30)">
            Últimos 30 dias
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from 'bootstrap';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  collapseEnabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['selectedFilter']);

const dropdown = ref(null);
const collapse = ref(null);
const collapseShow = ref(false);
const collapseInstance = ref(null);
const selectedFilter = ref(7);

const handleClickOutside = (event: Event) => {
  const isClickInsideComponent = !dropdown.value.contains(event.target);
  if (collapseInstance.value && collapseShow.value && isClickInsideComponent) {
    collapseInstance.value.hide();
    toggle();
  }
};
function toggle() {
  if (collapseShow.value) {
    setTimeout(() => {
      collapseShow.value = !collapseShow.value;
    }, 300);
  } else {
    collapseShow.value = !collapseShow.value;
  }
}

function filterDays(value) {
  selectedFilter.value = value;
  emit('selectedFilter', value);
}

onMounted(() => {
if(props.collapseEnabled){
  collapseInstance.value = new Collapse(collapse.value, {
    toggle: false
  });
}
  document.addEventListener('click', handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.border {
  border-color: rgba(0, 0, 0, 0.175) !important;
}
</style>
