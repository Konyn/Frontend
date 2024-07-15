<template>
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
export default {
  props: {
    dataSeries: {
      type: Array,
      default: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    }
  },
  data() {
    return {
      series: [
        {
          name: 'Faturamento',
          data: this.dataSeries
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 4,
          curve: 'straight'
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: this.generateDays()
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: (val) => {
                  return val + ' R$';
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1'
        }
      }
    };
  },
  methods: {
    generateDays() {
      let date = [];
      for (let i = 1; i < this.dataSeries.length + 1; i++) {
        date.push(`${i} Jan`);
      }
      return date;
    }
  },
};
</script>

<style scoped></style>
