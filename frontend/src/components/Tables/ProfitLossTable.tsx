import React, { useState, useEffect, useRef } from 'react';

type DataRow = { label: string; [key: number]: number };

const ProfitLossTable: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTableOverflow = () => {
      if (tableRef.current) {
        setShowSidebar(
          tableRef.current.scrollWidth > tableRef.current.clientWidth,
        );
      }
    };

    checkTableOverflow();
    window.addEventListener('resize', checkTableOverflow);
    return () => window.removeEventListener('resize', checkTableOverflow);
  }, []);

  const data: DataRow[] = [
    {
      label: 'Sales',
      2024: 240893,
      2023: 225458,
      2022: 191754,
      2021: 164177,
      2020: 156949,
      2019: 146463,
      2018: 123104,
      2017: 117966,
      2016: 108646,
      2015: 94648,
      2014: 81809,
      2013: 62989,
    },
    {
      label: 'Expenses',
      2024: 176597,
      2023: 166199,
      2022: 138697,
      2021: 117631,
      2020: 114840,
      2019: 106957,
      2018: 90588,
      2017: 85655,
      2016: 77969,
      2015: 70167,
      2014: 56657,
      2013: 44950,
    },
    {
      label: 'Operating Profit',
      2024: 64296,
      2023: 59259,
      2022: 53057,
      2021: 46546,
      2020: 42109,
      2019: 39506,
      2018: 32516,
      2017: 32311,
      2016: 30677,
      2015: 24482,
      2014: 25153,
      2013: 18040,
    },
    {
      label: 'OPM %',
      2024: 27,
      2023: 26,
      2022: 28,
      2021: 28,
      2020: 27,
      2019: 27,
      2018: 26,
      2017: 27,
      2016: 28,
      2015: 26,
      2014: 31,
      2013: 29,
    },
    {
      label: 'Other Income',
      2024: 3464,
      2023: 3449,
      2022: 4018,
      2021: 1916,
      2020: 4592,
      2019: 4311,
      2018: 3642,
      2017: 4221,
      2016: 3084,
      2015: 3720,
      2014: 1637,
      2013: 1178,
    },
    {
      label: 'Interest',
      2024: 778,
      2023: 779,
      2022: 784,
      2021: 637,
      2020: 924,
      2019: 198,
      2018: 52,
      2017: 32,
      2016: 33,
      2015: 104,
      2014: 39,
      2013: 48,
    },
    {
      label: 'Depreciation',
      2024: 4985,
      2023: 5022,
      2022: 4065,
      2021: 3529,
      2020: 3529,
      2019: 2056,
      2018: 2014,
      2017: 1987,
      2016: 1888,
      2015: 1799,
      2014: 1349,
      2013: 1080,
    },
    {
      label: 'Profit before tax',
      2024: 61997,
      2023: 56907,
      2022: 52226,
      2021: 44296,
      2020: 42248,
      2019: 41563,
      2018: 34092,
      2017: 34513,
      2016: 31840,
      2015: 26298,
      2014: 25402,
      2013: 18090,
    },
    {
      label: 'Tax %',
      2024: 26,
      2023: 26,
      2022: 26,
      2021: 26,
      2020: 23,
      2019: 24,
      2018: 24,
      2017: 24,
      2016: 24,
      2015: 24,
      2014: 24,
      2013: 22,
    },
    {
      label: 'Net Profit',
      2024: 46099,
      2023: 42303,
      2022: 38449,
      2021: 32562,
      2020: 32447,
      2019: 31562,
      2018: 25880,
      2017: 26357,
      2016: 24338,
      2015: 20060,
      2014: 19332,
      2013: 14076,
    },
    {
      label: 'EPS in Rs',
      2024: 126.88,
      2023: 115.19,
      2022: 104.75,
      2021: 87.67,
      2020: 86.19,
      2019: 83.87,
      2018: 67.46,
      2017: 66.71,
      2016: 61.58,
      2015: 50.68,
      2014: 48.92,
      2013: 35.55,
    },
    {
      label: 'Dividend Payout %',
      2024: 58,
      2023: 100,
      2022: 41,
      2021: 43,
      2020: 85,
      2019: 36,
      2018: 37,
      2017: 35,
      2016: 35,
      2015: 78,
      2014: 33,
      2013: 31,
    },
  ];

  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  ];

  return (
    <div className="flex">
      <div className="flex-grow rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="text-xl font-bold mb-4">Profit & Loss Statement</h2>
        <p className="text-sm mb-4">
          Consolidated Figures in Rs. Crores /{' '}
          <a href="#" className="text-blue-600">
            View Standalone
          </a>
        </p>
        <div ref={tableRef} className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Item
                </th>
                {years.map((year) => (
                  <th
                    key={year}
                    className="py-4 px-4 font-medium text-black dark:text-white"
                  >
                    Mar {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''
                  }
                >
                  <td className="py-2 px-4 font-medium">{row.label}</td>
                  {years.map((year) => (
                    <td key={year} className="py-2 px-4 text-right">
                      {typeof row[year] === 'number'
                        ? row[year] % 1 === 0
                          ? row[year].toLocaleString()
                          : row[year].toFixed(2)
                        : row[year]}
                      {row.label.includes('%') && '%'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showSidebar && (
        <div className="w-64 ml-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-sm">
          <h3 className="text-lg font-semibold mb-2">Table Guide</h3>
          <p className="text-sm mb-2">Scroll horizontally to view all years.</p>
          <ul className="text-sm list-disc list-inside">
            {years.map((year) => (
              <li key={year}>Mar {year}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfitLossTable;
