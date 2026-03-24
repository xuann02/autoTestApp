if (output.prevCount === output.topics.length) {
  console.log("No new topics → stop scrolling")
  // maestro.stopFlow()
  output.stop = true
}

output.prevCount = output.topics.length

console.log("\nTotal topics:", output.topics.length);