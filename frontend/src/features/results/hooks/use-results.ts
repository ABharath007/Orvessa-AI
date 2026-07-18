"use client";

import { mockResult } from "../mock/results.mock";

export function useResults() {
  return {
    data: mockResult,
    isLoading: false,
  };
}