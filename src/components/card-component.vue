<template>
  <div class="mb-4">
    <div class="card shadow" :class="backgroundColor" style="height: 200px">
      <div class="card-body px-4">
        <div v-if="!slotBody" class="h-100">
          <div
            v-if="!showConversion && !showVantagem"
            class="d-flex flex-column justify-content-center h-100"
          >
            <h1
              class="mb-0"
              :class="[backgroundColor ? 'text-white' : 'text-purple']"
              style="font-size: 62px"
            >
              {{ value }}
            </h1>
            <p
              class="mb-0 fs-2 text-bold"
              :class="[backgroundColor ? 'text-white' : 'text-orange']"
            >
              {{ text }}
            </p>
          </div>
          <div v-if="showConversion" class="row align-items-center">
            <div class="col-6 text-center border-end">
              <h1
                class="mb-0"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
                style="font-size: 114px"
              >
                100<span style="font-size: 56px">%</span>
              </h1>
              <p
                class="mb-0 fs-2 text-green text-bold"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
              >
                Conversão
              </p>
            </div>
            <div class="col-6 text-center">
              <h1
                class="mb-0 text-purple"
                :class="[backgroundColor ? 'text-white' : 'text-purple']"
                style="font-size: 62px"
              >
                {{ value }}
              </h1>
              <p
                class="mb-0 fs-2 text-orange text-bold"
                :class="[backgroundColor ? 'text-white' : 'text-orange']"
              >
                {{ text }}
              </p>
            </div>
          </div>
          <div v-if="showVantagem" class="row align-items-center h-100">
            <div class="col-6 text-center border-end">
              <h1
                class="mb-0"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
                style="font-size: 84px"
              >
                {{ simbol }}{{ value }}<span style="font-size: 56px">%</span>
              </h1>
              <p
                class="mb-0 text-green text-bold fs-5 mx-auto"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
                style="width: 148px"
              >
                {{ text }}
              </p>
            </div>
            <div class="col-6 text-center">
              <h1
                class="mb-0"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
                style="font-size: 64px"
              >
                {{ vantagemValue }}
              </h1>
              <p
                class="mb-0 text-green text-bold"
                :class="[backgroundColor ? 'text-white' : 'text-green']"
              >
                {{ vantagemText }}
              </p>
            </div>
          </div>
        </div>
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, useSlots } from 'vue';

defineProps({
  value: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: ''
  },
  vantagemValue: {
    type: Number,
    default: 0
  },
  vantagemText: {
    type: String,
    default: ''
  },
  showConversion: {
    type: Boolean,
    default: false
  },
  showVantagem: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  simbol: {
    type: String,
    default: ''
  }
});

const slot = useSlots();
const slotBody = ref(false);

function slots() {
  if (slot.body) slotBody.value = true;
}
onMounted(() => {
  slots();
});
</script>

<style lang="scss" scoped></style>
