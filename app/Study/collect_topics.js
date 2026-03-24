const element = maestro.copiedText;

if (element) {

  // chỉ lấy text có progress %
  if (element.match(/\d+%/)) {

    // bỏ phần %
    const topic = element.replace(/\s*\d+%/, "").trim();

    if (!output.topics.includes(topic)) {
      output.topics.push(topic);
    }

  }

}

console.log("Collected topics:", output.topics.join(", "));