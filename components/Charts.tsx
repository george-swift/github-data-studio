import { useState, useEffect } from 'react'
import useRefs from 'react-use-refs'
import {
  LanguageDataType,
  RepoDataType,
  selectReposFrom,
} from '../utils/shared'
import {
  buildChart,
  languageColors,
  backgroundColor,
  borderColor,
} from '../utils'
import { Container } from '../styles'
import ChartSyles from './styles/ChartStyles'
import { useCallback } from 'react'

interface ChartProps {
  langData: LanguageDataType[]
  repoData: RepoDataType[]
}

const Charts = ({ langData, repoData }: ChartProps) => {
  const [langCtx, starCtx, metricsCtx] = useRefs<HTMLCanvasElement>(null)
  const [langChartData, setLangChartData] = useState<number[]>()
  const [starChartData, setStarChartData] = useState<number[]>()
  const [metricsChartData, setMetricsChartData] = useState<number[]>()

  const initLangChart = useCallback(() => {
    const labels = langData.map((language) => language.label)
    const data = langData.map((language) => language.value)
    setLangChartData(data)

    if (data.length) {
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color?.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      )
      const borderColor = langData.map((language) => `${language.color}`)
      const chartType: Chart.ChartType = 'pie'
      const axes = false
      const legend = true
      const config = {
        ctx: langCtx.current,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend,
      }
      buildChart(config)
    }
  }, [langCtx, langData])

  const initStarChart = useCallback(() => {
    const limit = 5
    const sortProperty = 'stargazers_count'
    const mostStarredRepos = selectReposFrom({ repoData, sortProperty, limit })
    const labels = mostStarredRepos.map((repository) => repository.name)
    const data = mostStarredRepos.map((repository) => repository[sortProperty])
    setStarChartData(data)

    if (data.length) {
      const chartType: Chart.ChartType = 'bar'
      const axes = true
      const legend = false
      const config = {
        ctx: starCtx.current,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend,
      }
      buildChart(config)
    }
  }, [starCtx, repoData])

  const initMetricsChart = useCallback(() => {
    const relevantMetrics = repoData.filter(
      (repository) => !repository.fork && repository.stargazers_count > 0
    )
    const uniqueLanguages = new Set(
      relevantMetrics.map((repository) => repository.language)
    )
    const labels = Array.from(uniqueLanguages.values()).filter(
      (language) => language
    )
    const data = labels.map((language) => {
      const repositories = relevantMetrics.filter(
        (repository) => repository.language === language
      )
      const totalStars = repositories
        .map((repository) => repository.stargazers_count)
        .reduce((a, b) => a + b, 0)
      return totalStars
    })
    setMetricsChartData(data)

    if (data.length) {
      const chartType: Chart.ChartType = 'doughnut'
      const axes = false
      const legend = true
      const borderColor = labels.map((label) => languageColors[label])
      const backgroundColor = borderColor.map((color) => `${color}B3`)
      const config = {
        ctx: metricsCtx.current,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend,
      }
      buildChart(config)
    }
  }, [metricsCtx, repoData])

  useEffect(() => {
    if (langData.length && repoData.length) {
      initLangChart()
      initStarChart()
      initMetricsChart()
    }
  }, [
    initLangChart,
    initMetricsChart,
    initStarChart,
    langData.length,
    repoData.length,
  ])

  const chartSize = 300
  const langChartError = !(langChartData && langChartData.length)
  const starChartError = !(starChartData && starChartData.length)
  const metricsChartError = !(metricsChartData && metricsChartData.length)

  return (
    <Container>
      <ChartSyles className="container">
        <section className="chart">
          <h2>Top Languages</h2>
          <div>
            {langChartError && <p>Nothing to see here!</p>}
            <canvas ref={langCtx} width={chartSize} height={chartSize} />
          </div>
        </section>

        <section className="chart">
          <h2>Most Starred</h2>
          <div>
            {starChartError && <p>Nothing to see here!</p>}
            <canvas ref={starCtx} width={chartSize} height={chartSize} />
          </div>
        </section>

        <section className="chart">
          <h2>Stars per Language</h2>
          <div>
            {metricsChartError && <p>Nothing to see here!</p>}
            <canvas ref={metricsCtx} width={chartSize} height={chartSize} />
          </div>
        </section>
      </ChartSyles>
    </Container>
  )
}

export default Charts
