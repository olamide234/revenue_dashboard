import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface IGraphData {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

export default function LineChart({ data }: { data: IGraphData[] }) {
  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 100, right: 0, bottom: 5, left: 0 }}
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
      <div className="">
        <div className="flex items-center my-3">
          <div className="h-1 w-1 rounded-full bg-[#DBDEE5]"></div>
          <div className="w-full border-t border-t-[#DBDEE5] "></div>
          <div className="h-1 w-1 rounded-full bg-[#DBDEE5]"></div>
        </div>
        <div className="flex justify-between">
          <div>Apr 1, 2022</div>
          <div>Apr 30, 2022</div>
        </div>
      </div>
    </>
  );
}
