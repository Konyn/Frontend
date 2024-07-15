import httpService from '@/service/http-service.js';

const actions = {
  transactionsList() {
    return new Promise((resolve, reject) => {
      httpService
        .get('/transactions')
        .then((response) => {
          this.transactions = response.data.data;
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        });
    });
  },
  downloadsMetrics() {
    return new Promise((resolve, reject) => {
      httpService
        .get('/downloads')
        .then((response) => {
          this.downloads = response.data.data[0];
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        });
    });
  },
  contractingMetrics() {
    return new Promise((resolve, reject) => {
      httpService
        .get('/contracting')
        .then((response) => {
          this.contracting = response.data.data[0];
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        });
    });
  },
  musiciansMetrics() {
    return new Promise((resolve, reject) => {
      httpService
        .get('/musicians')
        .then((response) => {
          this.musicians = response.data.data[0];
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        });
    });
  },
  userTrafficMetrics() {
    return new Promise((resolve, reject) => {
      httpService
        .get('/user-traffic')
        .then((response) => {
          this.userTraffic = response.data.data[0];
          resolve();
        })
        .catch((error) => {
          this.errors = error;
          reject();
        });
    });
  }
};
export default actions;
