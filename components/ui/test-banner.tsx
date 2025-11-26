'use client';

import { StickyBanner } from './sticky-banner';

export function TestBanner() {
  return (
    <StickyBanner className="bg-linear-to-r from-amber-400 to-amber-500 flex-col gap-2 absolute z-400 ">
      <p className="mx-0 max-w-[90%] text-center text-slate-900 font-semibold drop-shadow-md">
        🧪 The site is in test mode. We will announce the official version soon.
      </p>
      <p className="mx-0 max-w-[90%] text-center text-slate-900 font-semibold drop-shadow-md">
        🧪 Sayt sinov rejimida. Tez orada rasmiy versiyasini e'lon qilamiz.
      </p>
    </StickyBanner>
  );
}
