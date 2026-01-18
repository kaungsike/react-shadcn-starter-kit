export function formatDateForLoginToast(date: Date = new Date()): string {
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    hour12: true
  });
}