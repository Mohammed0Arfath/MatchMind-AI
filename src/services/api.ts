/**
 * Base utility for simulating network latency in a mock API environment.
 * Replaces synchronous static imports to test asynchronous data fetching.
 */
export function mockFetch<T>(data: T, delayMs = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayMs);
  });
}
