export const delay = async () => {
  return new Promise((resolve, error) => {
    setTimeout(resolve, 1000);
  });
};
