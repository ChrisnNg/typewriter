

const sentence = function(sentence) {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50); // <= 1s delay to make it noticeable. Can dial it down later.
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, 50 * sentence.length);
};

sentence("hello there from lighthouse labs");