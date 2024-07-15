const getters = {
  getLoading: (state) => state.loading,
  getErros: (state) => state.errors,
  getTransactions: (state) => state.transactions,
  getDownloads: (state) => state.downloads,
  getMusicians: (state) => state.musicians,
  getUserTraffic: (state) => state.userTraffic,
  getContracting: (state) => state.contracting
};

export default getters;
