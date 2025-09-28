export const extractInitials = (name: string) => {
  return name
    ?.split(" ")
    ?.map((str) => str[0]?.toUpperCase())
    .filter((_, i) => i < 2)
    .join("");
};
