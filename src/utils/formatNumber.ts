export default function FormatNumber(num: number) {
  return num > 1000000
    ? `${(num / 1000000).toFixed(1)}M`
    : `${(num / 1000).toFixed(1)}K`;
}
