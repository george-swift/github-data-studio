import Chart from 'chart.js/auto'
import theme from '../styles/theme'

const buildScales = (axes: boolean) => {
  const scales = {
    x: {
      grid: {
        offset: false,
      },
      fontSize: 12,
      fontFamily: theme.fonts.inter,
    },
    y: {
      beginAtZero: true,
      fontSize: 12,
      fontFamily: theme.fonts.inter,
    },
  }

  return axes ? scales : null
}

const buildLegend = (legend: boolean) => {
  const customLegend = {
    position: 'right',
    labels: {
      fontFamily: theme.fonts.inter,
    },
  }

  return legend ? customLegend : null
}

const buildChart = (config: any) => {
  const {
    ctx,
    chartType,
    labels,
    data,
    backgroundColor,
    borderColor,
    axes,
    legend,
  } = config
  return new Chart(ctx, {
    type: chartType,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
          hoverOffset: 3,
        },
      ],
    },
    options: {
      scales: buildScales(axes),
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        titleFontFamily: theme.fonts.inter,
        bodyFontFamily: theme.fonts.inter,
        cornerRadius: 3,
      },
      plugins: {
        legend: buildLegend(legend),
      },
    },
  })
}

export default buildChart
