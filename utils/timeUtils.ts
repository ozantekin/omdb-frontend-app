/**
 * Converts runtime in minutes (string or number) into a readable format like "1h 30m" or "30m".
 * @param runtime - Runtime as a string (e.g., "90 min") or number (e.g., 90).
 * @returns Formatted runtime (e.g., "1h 30m", "30m") or "N/A" if invalid.
 */

export const convertMinutesToReadableTime = (
  runtime: string | number | null | undefined
): string => {
  if (!runtime) return "N/A";

  const runtimeInMinutes =
    typeof runtime === "string"
      ? parseInt(runtime.replace(/[^0-9]/g, ""), 10)
      : runtime;

  if (isNaN(runtimeInMinutes) || runtimeInMinutes <= 0) return "N/A";

  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;

  if (hours === 0) return `${minutes}m`; // Only show minutes if hours is 0
  if (minutes === 0) return `${hours}h`; // Only show hours if minutes is 0

  return `${hours}h ${minutes}m`;
};
