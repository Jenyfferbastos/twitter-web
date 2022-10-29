import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonPrimaryProps {
  children: ReactNode;
  asChild?: boolean;
  size: string;
}

export function ButtonPrimary({ children, asChild }: ButtonPrimaryProps){
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
    className={clsx(
      'py-3 w-56 bg-primary-blue rounded-full text-white text-sm font-bold hover:py-4'
    )}
    >
      {children}
    </Comp>
  )
}