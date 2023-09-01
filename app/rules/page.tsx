'use client'

import Cryptos from './cryptos';
import SpareChangeRules from './spare-change';
import PayrollRules from './payroll';
import DonationsRules from './donations';
import HozonAIRules from './hozon-ai';

const RulesPage = () => {
    return (
        <>
            <div className="grid xl:grid-cols-9 gap-8 md:grid-cols-4">
                <div className="col-span-5 xl:col-span-3 md:col-span-2">
                    <Cryptos />
                </div>
                <div className="col-span-5 xl:col-span-3 md:col-span-2">
                    <SpareChangeRules />
                </div>
                <div className="col-span-5 xl:col-span-3 md:col-span-2">
                    <PayrollRules />
                </div>
            </div>
            <div className="grid xl:grid-cols-6 gap-6 mt-16 md:grid-cols-4">
                <div className="col-span-5 xl:col-span-3 md:col-span-2">
                    <DonationsRules />
                </div>
                <div className="col-span-5 xl:col-span-3 md:col-span-2">
                    <HozonAIRules />
                </div>
            </div>
        </>
    );
};

export default RulesPage;