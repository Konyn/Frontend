<template>
  <div class="container-fluid">
    <div class="d-flex flex-column align-items-center justify-content-center h-100">
      <div class="card border-0 w-100" style="border-radius: 19px">
        <div class="card-body p-4">
          <h1 class="text-orange text-semi-bold fs-1 text-center mt-3" style="margin-bottom: 40px">
            Login de administrador
          </h1>
          <form @submit.prevent="login">
            <div class="position-relative mb-4">
              <label
                class="position-absolute top-50 translate-middle-y ms-3"
                :class="{ 'top-0': inputFocus === 'email' || fields.email !== '' }"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                v-model="fields.email"
                @focusin="inputFocus = 'email'"
                @focusout="inputFocus = null"
              />
            </div>
            <div class="position-relative mb-4">
              <label
                class="position-absolute ms-3 top-50 translate-middle-y"
                :class="{ 'top-0': inputFocus === 'password' || fields.password !== '' }"
                >Senha</label
              >
              <input
                type="password"
                class="form-control"
                v-model="fields.password"
                @focusin="inputFocus = 'password'"
                @focusout="inputFocus = null"
              />
            </div>
            <button class="btn bg-orange text-white w-100 mb-3" style="">
              <span v-if="!loading">Acessar</span>
              <div v-else class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { auth } from '@/stores';
import { useRouter } from 'vue-router';

const inputFocus = ref<string | null>(null);
const fields = reactive({
  email: '',
  password: ''
});
const store = auth();
const router = useRouter();
const loading = computed(() => {
  return store.loading;
});
function login() {
  store.login(fields).then(() => {
    router.push('/dashboard-desktop');
  });
}
</script>

<style scoped lang="scss">
.container-fluid {
  height: calc(100vh - 300px);
  .card {
    max-width: 570px;
    box-shadow: 9px 9px 28px 0 rgba(0, 0, 0, 0.25);

    form {
      .top-0 {
        top: 0 !important;
        background-color: #ffffff;
      }
      input {
        border-radius: 48px;
        height: 40px;
      }
      button {
        border-radius: 48px;
        height: 40px;
      }
    }
  }
}
</style>
