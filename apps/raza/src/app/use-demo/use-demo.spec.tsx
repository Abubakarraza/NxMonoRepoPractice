import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useDemo from './use-demo';

describe('useDemo', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDemo());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
