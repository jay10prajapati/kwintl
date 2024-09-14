import React, { useState, useEffect, useRef } from 'react';

type BalanceSheetItem = {
  item: string;
  [key: string]: string | number | boolean | BalanceSheetItem[] | undefined;
  isExpandable?: boolean;
  subItems?: BalanceSheetItem[];
};

const balanceSheetData: BalanceSheetItem[] = [
  {
    item: 'Equity Capital',
    Mar2024: 362,
    Mar2023: 366 /* ... add other years ... */,
    Mar2022: 366 /* ... add other years ... */,
    Mar2021: 366 /* ... add other years ... */,
    Mar2020: 366 /* ... add other years ... */,
  },
  {
    item: 'Reserves',
    Mar2024: 90127,
    Mar2023: 90058,
    Mar2022: 90058,
    Mar2021: 90058,
    Mar2020: 90058 /* ... */,
  },
  {
    item: 'Borrowings',
    Mar2024: 8021,
    Mar2023: 7688,
    Mar2022: 7818,
    Mar2021: 7795,
    Mar2020: 8174,
    isExpandable: true,
    subItems: [
      {
        item: 'Long term Borrowings',
        Mar2024: 0,
        Mar2023: 0,
        Mar2022: 0,
        Mar2021: 0,
        Mar2020: 0,
        // ... other years ...
      },
      {
        item: 'Short term Borrowings',
        Mar2024: 0,
        Mar2023: 0,
        Mar2022: 0,
        Mar2021: 0,
        Mar2020: 0,
        // ... other years ...
      },
      {
        item: 'Lease Liabilities',
        Mar2024: 8021,
        Mar2023: 7688,
        Mar2022: 7818,
        Mar2021: 7795,
        Mar2020: 8174,
        // ... other years ...
      },
      {
        item: 'Preference Capital',
        Mar2024: 0,
        Mar2023: 0,
        Mar2022: 0,
        Mar2021: 0,
        Mar2020: 0,
        // ... other years ...
      },
      {
        item: 'Other Borrowings',
        Mar2024: 0,
        Mar2023: 0,
        Mar2022: 0,
        Mar2021: 0,
        Mar2020: 0,
        // ... other years ...
      },
    ],
  },
  {
    item: 'Other Liabilities',
    Mar2024: 46962,
    Mar2023: 44747,
    Mar2022: 44747,
    Mar2021: 44747,
    Mar2020: 44747 /* ... */,
  },
  {
    item: 'Total Liabilities',
    Mar2024: 145472,
    Mar2023: 142859,
    Mar2022: 142859,
    Mar2021: 142859,
    Mar2020: 142859 /* ... */,
  },
  {
    item: 'Fixed Assets',
    Mar2024: 19604,
    Mar2023: 20515,
    Mar2022: 20515,
    Mar2021: 20515,
    Mar2020: 20515 /* ... */,
  },
  {
    item: 'CWIP',
    Mar2024: 1564,
    Mar2023: 1234,
    Mar2022: 1234,
    Mar2021: 1234,
    Mar2020: 1234 /* ... */,
  },
  {
    item: 'Investments',
    Mar2024: 31762,
    Mar2023: 37163,
    Mar2022: 37163,
    Mar2021: 37163,
    Mar2020: 37163 /* ... */,
  },
  {
    item: 'Other Assets',
    Mar2024: 92542,
    Mar2023: 83947,
    Mar2022: 83947,
    Mar2021: 83947,
    Mar2020: 83947 /* ... */,
  },
  {
    item: 'Total Assets',
    Mar2024: 145472,
    Mar2023: 142859,
    Mar2022: 142859,
    Mar2021: 142859,
    Mar2020: 142859 /* ... */,
  },
  {
    item: 'Cash and Bank Balances',
    Mar2024: 15234,
    Mar2023: 14567,
    Mar2022: 13890,
    Mar2021: 12345,
    Mar2020: 11234,
  },
  {
    item: 'Loans and Advances',
    Mar2024: 78234,
    Mar2023: 75678,
    Mar2022: 72345,
    Mar2021: 70123,
    Mar2020: 68901,
  },
];

const years = ['Mar 2024', 'Mar 2023', 'Mar 2022', 'Mar 2021', 'Mar 2020'];

const BalanceSheetTable: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
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

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="flex">
      <div className="flex-grow rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="text-xl font-bold mb-4">Balance Sheet</h2>
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
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {balanceSheetData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={
                      index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''
                    }
                  >
                    <td className="py-2 px-4">
                      {row.isExpandable && (
                        <button
                          onClick={() => toggleRow(index)}
                          className="mr-2"
                        >
                          {expandedRows.has(index) ? '-' : '+'}
                        </button>
                      )}
                      {row.item}
                    </td>
                    {years.map((year) => (
                      <td key={year} className="py-2 px-4">
                        {(row as any)[year.replace(' ', '')]}
                      </td>
                    ))}
                  </tr>
                  {row.isExpandable &&
                    expandedRows.has(index) &&
                    row.subItems?.map((subItem, subIndex) => (
                      <tr
                        key={`${index}-${subIndex}`}
                        className="bg-gray-50 dark:bg-gray-700"
                      >
                        <td className="py-2 px-4 pl-8">{subItem.item}</td>
                        {years.map((year) => (
                          <td key={year} className="py-2 px-4">
                            {(subItem as any)[year.replace(' ', '')]}
                          </td>
                        ))}
                      </tr>
                    ))}
                </React.Fragment>
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
              <li key={year}>{year}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BalanceSheetTable;
