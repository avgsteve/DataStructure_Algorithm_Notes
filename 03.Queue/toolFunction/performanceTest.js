exports.getPerformanceStartTime = () => {
  return process.hrtime();
};


exports.logPerformanceTime = (performanceStartTime) => {

  const NS_PER_SEC = 1e9;

  const timeDifference =
    process.hrtime(performanceStartTime);
  // 回傳 [second, nanosecond]

  const timeDifferenceNanoseconds =
    timeDifference[0] * NS_PER_SEC + timeDifference[1];

  console.log(
    `Benchmark took ${timeDifferenceNanoseconds} nanoseconds (equals to ${parseFloat(
      timeDifferenceNanoseconds / 1000000
    ).toFixed(6)} ms)`
  );

};

exports.logMemoryUsage = () => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used} MB`);
};