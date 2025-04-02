export const convertMsToReadableString = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 30);
  const months = Math.floor((ms / (1000 * 60 * 60 * 24 * 30)) % 12);
  const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

  const parts = [
    years > 0 ? `${years}Y` : "",
    months > 0 ? `${months}M` : "",
    days > 0 ? `${days}D` : "",
    hours > 0 ? `${hours}H` : "",
    minutes > 0 ? `${minutes}M` : "",
    seconds > 0 ? `${seconds}S` : "",
  ];

  return parts.filter(Boolean).join(", "); // Filter out empty strings and join with commas
};
