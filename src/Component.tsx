import { VFC, ReactNode } from 'react';

/* Functional Component の型 ほぼ全部いり */

type ComponentProps = {
  label?: string,
  size?: 'large' | 'middle' | 'small',
  disabled?: boolean,
  children?: ReactNode, // VFCを使う場合はchildrenを自分で定義
};

/* VFCを使う */
export const Component: VFC<ComponentProps> = ({
  label,
  size,
  disabled,
  children,
}) => {
  console.log(`今回は${size}は実際に反映されません`);
  return (
    <button disabled={disabled}>
      {label}
    </button>
  );
};
