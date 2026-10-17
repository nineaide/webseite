'use client';
import { useSyncExternalStore } from 'react';
import {
  hasReceivedInquiry,
  inquiryServerSnapshot,
  subscribeInquiryStatus,
} from '../lib/inquiry-status';

export function useInquiryStatus() {
  return useSyncExternalStore(
    subscribeInquiryStatus,
    hasReceivedInquiry,
    inquiryServerSnapshot,
  );
}
