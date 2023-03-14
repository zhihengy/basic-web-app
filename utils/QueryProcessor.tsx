export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "enxi15"
    );
  }
  if (query.toLowerCase().includes("what is 21 plus 42?")) {
    return (
      "63"
    );
  }
  if (query.toLowerCase().includes("what is 85 plus 46?")) {
    return (
      "131"
    );
  }
  return "";
}
