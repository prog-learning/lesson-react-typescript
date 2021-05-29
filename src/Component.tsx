import { VFC, ReactNode } from 'react';

/* 2パターンの型がある場合 */
type UseLabel = {
  label: string,
  size?: 'large' | 'middle' | 'small',
  disabled?: boolean,
};
type InChildren = {
  children: ReactNode, // VFCを使う場合はchildrenを自分で定義
  size?: 'large' | 'middle' | 'small',
  disabled?: boolean,
};
type ComponentProps = UseLabel | InChildren;

export const Component: VFC<ComponentProps> = ({
  label,
  size = 'middle',
  disabled = false,
  children,
}) => {
  console.log(`今回は${size}は実際に反映されません`);
  return (
    <button disabled={disabled}>
      {label ? label : children}
    </button>
  );
};
