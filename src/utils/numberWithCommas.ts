export default function numberWithCommas(x: number) {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  }
  
  export function numberWithCommasNR(x: number) {
    return Number(x).toLocaleString("en-US");
  }