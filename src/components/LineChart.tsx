import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { format } from 'date-fns';

export interface IGraphData {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

export interface IExpectedData {
  graphData: IGraphData[];
  dateRangeData: string[];
}

export default function LineChart({ data }: { data: IExpectedData }) {
  const { graphData, dateRangeData } = data;
  const lastIndex = dateRangeData.length - 1;
  console.log(dateRangeData?.[0], 'dateRangeData');
  return (
    <>
      <div className="h-64">
        <ResponsiveLine
          data={graphData}
          margin={{ top: 100, right: 0, bottom: 20, left: 0 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors="#FF5403"
          lineWidth={1}
          enablePoints={false}
          pointSize={2}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          legends={[]}
        />
      </div>
      <div className="">
        <div className="my-3 flex items-center">
          <div className="h-1 w-1 rounded-full bg-[#DBDEE5]"></div>
          <div className="w-full border-t border-t-[#DBDEE5] "></div>
          <div className="h-1 w-1 rounded-full bg-[#DBDEE5]"></div>
        </div>
        {dateRangeData?.length > 1 && (
          <div className="flex justify-between">
            <div>{`${format(new Date(dateRangeData[lastIndex]), 'PP')}`}</div>
            <div>{`${format(new Date(dateRangeData[0]), 'PP')}`}</div>
          </div> //2022-03-03
        )}
      </div>
    </>
  );
}
