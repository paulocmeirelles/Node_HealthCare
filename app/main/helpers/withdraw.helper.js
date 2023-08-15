function diffDate(date1, date2) {
  const timeDifference = Math.abs(new Date(date2) - new Date(date1));
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
}

export default {
  diffDate,
};
