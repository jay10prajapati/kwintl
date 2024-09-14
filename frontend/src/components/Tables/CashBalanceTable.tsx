import React from 'react';

const cashBalanceData = [
  {
    date: '2023-01-01',
    openingBalance: '$1,000,000',
    inflows: '$500,000',
    outflows: '$450,000',
    closingBalance: '$1,050,000',
  },
  {
    date: '2023-02-01',
    openingBalance: '$1,050,000',
    inflows: '$550,000',
    outflows: '$500,000',
    closingBalance: '$1,100,000',
  },
  {
    date: '2023-03-01',
    openingBalance: '$1,100,000',
    inflows: '$600,000',
    outflows: '$525,000',
    closingBalance: '$1,175,000',
  },
  {
    date: '2023-04-01',
    openingBalance: '$1,175,000',
    inflows: '$575,000',
    outflows: '$550,000',
    closingBalance: '$1,200,000',
  },
  {
    date: '2023-05-01',
    openingBalance: '$1,200,000',
    inflows: '$625,000',
    outflows: '$575,000',
    closingBalance: '$1,250,000',
  },
];

const CashBalanceTable: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Date
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Opening Balance
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Inflows
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Outflows
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Closing Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {cashBalanceData.map((item, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  {item.date}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {item.openingBalance}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {item.inflows}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {item.outflows}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {item.closingBalance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashBalanceTable;
