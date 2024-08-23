import { CaseData } from "./types/graph-types";
// convert data to smaller readable form
export const aggregateDataByMonth = (data: Record<string, number>): CaseData[] => {
    const aggregatedData: Record<string, number> = {};
  
    Object.keys(data).forEach((date) => {
      const [month, , year] = date.split("/");
      const monthYear = `${month}/${year}`;
  
      if (!aggregatedData[monthYear]) {
        aggregatedData[monthYear] = 0;
      }
  
      aggregatedData[monthYear] += data[date];
    });
  
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    return Object.entries(aggregatedData).map(([date, cases]) => {
      const [month, year] = date.split("/");
      const monthName = monthNames[parseInt(month, 10) - 1];
      return { date: `${monthName} ${year}`, cases };
    });
  };