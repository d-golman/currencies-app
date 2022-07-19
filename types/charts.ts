export interface ILineChart {
    labels: string[],
    datasets: [
      {
        data: number[],
        color?: (opacity: number) => string,
        strokeWidth?: number,
      }
    ],
    legend?: string[]
}