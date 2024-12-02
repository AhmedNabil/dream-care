'use client'

export const runtime = 'edge';

import dynamic from 'next/dynamic';
import Image from 'next/image'

const VocodeAppDynamic = dynamic(() => import('@/components/vocode-app'), { ssr: false });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-900 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p className="text-lg text-center font-semibold dark:text-white">
        DreamCare AI voice-based large language model is designed to be a healthcare assistant for seamless patient's intake journey.
      </p>
      <div className="flex flex-col items-center justify-center py-4">
        <VocodeAppDynamic defaultBackendUrl={(window.location.protocol === 'https:' ? 'wss:' : 'ws:') + "//" + window.location.host + "/api/python/conversation"} isInputEditable={false} />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>

    </main>
  );
}
