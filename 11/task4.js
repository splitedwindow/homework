function getSeconds(count, type) {
  if (type === "minutes") {
    return count * 60;
  } else if (type === "hours") {
    return count * 3600;
  } else {
    return -1;
  }
}
