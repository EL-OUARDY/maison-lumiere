import React from 'react';
import { IFragrance } from '@/lib/demo';
import clsx from 'clsx';

interface Props {
  features: IFragrance['features'];
  className?: string;
}

function FragranceFeatures({ features, className }: Props) {
  return (
    <div className={clsx('', className)}>
      <p className="mb-2 text-base font-semibold uppercase">Features:</p>

      <div className="grid gap-2">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center gap-2">
            <feature.icon className="size-5" />
            {feature.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FragranceFeatures;
