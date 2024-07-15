import httpService from '@/service/http-service.js';

const actions = {
  login(payload) {
    this.loading = true;
    return new Promise((resolve, reject) => {
      httpService
        .post('/login', payload)
        .then((response) => {
          this.user = response.data.data;
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        })
        .finally(() => {
          this.loading = false;
        });
    });
  },
  logout(payload) {
    return new Promise((resolve, reject) => {
      httpService
        .post('/logout', { token: payload })
        .then(() => {
          this.user = {};
          const keys = Object.keys(localStorage);
          keys.forEach((key) => {
            if (key.startsWith('user')) localStorage.removeItem(key);
          });
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
};
export default actions;
