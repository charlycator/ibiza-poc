'use client'

import { useState } from 'react';
import { MendableSearchBar } from "@mendable/search";

const style = { darkMode: false, accentColor: "#123456" }
const MENDABLE_API_KEY = process.env.MENDABLE as string;


const AcademyPage = () => {
  const [answer, setAnswer] = useState<string>('');

  const handleOnMessage = (question: string, ans: string) => {
    setAnswer(ans);
  }

  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold text-black dark:text-white">
        Hozon academy
      </h1>

      <h3 className="mb-8 text-xl font-semibold text-black dark:text-white">
        You can use our AI query bot to search for documentation and boost your knowledge!
      </h3>

      <MendableSearchBar
        anon_key={MENDABLE_API_KEY}
        style={style}
        showSimpleSearch
        onMessageForTracking={handleOnMessage} />


      {answer && (
        <div className="mt-16 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              ANSWER:
            </h3>
            <p className="mt-8 text-xl text-black dark:text-white">
              {answer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademyPage;