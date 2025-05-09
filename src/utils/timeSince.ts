function daysSinceDate (dateString: string) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
}

function yearsSinceDate (date: string) {
  const pastDate = new Date(date)
  const now = new Date();
  const diffInMilliseconds = now.getTime() - pastDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffInYears);
}

export { daysSinceDate, yearsSinceDate };
