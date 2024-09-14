import React, { useRef } from 'react';
import BalanceSheetTable from '../../components/Tables/BalanceSheetTable';
import CashBalanceTable from '../../components/Tables/CashBalanceTable';

import ProfitLossTable from '../../components/Tables/ProfitLossTable'; // New import

const FinancialData: React.FC = () => {
  const balanceSheetRef = useRef<HTMLDivElement>(null);
  const cashBalanceRef = useRef<HTMLDivElement>(null);
  const profitLossRef = useRef<HTMLDivElement>(null); // New ref
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={menuRef}
        className="fixed top-20 left-0 right-0 bg-white dark:bg-gray-800 z-10"
      >
        <nav className="flex space-x-4 max-w-screen-xl mx-auto px-4">
          <button
            onClick={() => scrollToSection(profitLossRef)}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Profit & Loss
          </button>
          <button
            onClick={() => scrollToSection(balanceSheetRef)}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Balance Sheet
          </button>
          <button
            onClick={() => scrollToSection(cashBalanceRef)}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Cash Balance
          </button>
        </nav>
      </div>

      <div className="pt-[var(--menu-height)] grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12" ref={profitLossRef}>
          <h2 className="sticky top-[var(--menu-height)] bg-white dark:bg-gray-800 mb-4 text-2xl font-semibold text-black dark:text-white">
            Profit & Loss
          </h2>
          <ProfitLossTable />
        </div>
        <div className="col-span-12" ref={balanceSheetRef}>
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Balance Sheet
          </h2>
          <BalanceSheetTable />
        </div>
        <div className="col-span-12" ref={cashBalanceRef}>
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Cash Balance
          </h2>
          <CashBalanceTable />
        </div>
      </div>
    </>
  );
};

export default FinancialData;
