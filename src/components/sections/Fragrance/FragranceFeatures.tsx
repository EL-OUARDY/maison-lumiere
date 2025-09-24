import React from 'react';
import clsx from 'clsx';
import { IFragrance } from '@/lib/models';

interface Props {
  features: IFragrance['features'];
  className?: string;
}

function FragranceFeatures({ features, className }: Props) {
  return (
    <div className={clsx('', className)}>
      <p className="mb-2 text-base font-semibold uppercase">Features:</p>

      <div className="grid gap-2">
        <p className="flex items-center gap-2">
          <features.profile.icon className="size-5" />
          {features.profile.label}
        </p>
        <p className="flex items-center gap-2">
          <features.mood.icon className="size-5" />
          {features.mood.label}
        </p>
      </div>
    </div>
  );
}

export default FragranceFeatures;
