'use client'

import Cryptos from './cryptos';
import SpareChangeRules from './spare-change';
import PayrollRules from './payroll';
import DonationsRules from './donations';
import HozonAIRules from './hozon-ai';

const RulesPage = () => {
    return (
      <>
          <div className="grid xl:grid-cols-8 gap-6 grid-cols-4">
              <div className="col-span-5 xl:col-span-4 md:col-span-2">
                  <Cryptos />
              </div>
              <div className="col-span-5 xl:col-span-4 md:col-span-2">
                  <SpareChangeRules />
              </div>
          </div>
          <div className="grid xl:grid-cols-8 gap-6 mt-16 md:grid-cols-4">
              <div className="col-span-5 xl:col-span-4 md:col-span-2">
                  {/* <DonationsRules /> */}
                  <PayrollRules />
              </div>
              <div className="col-span-5 xl:col-span-4 md:col-span-2">
                  <HozonAIRules />
              </div>
          </div>
      </>
    );
};

export default RulesPage;