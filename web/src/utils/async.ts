export async function sleep(duration = 3000) {
  return new Promise((res) => {
    setTimeout(() => res(''), duration);
  });
}
