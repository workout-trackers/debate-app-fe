import { Provider } from 'react-redux';
import { store } from '@/lib/redux';

import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
