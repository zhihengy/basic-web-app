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
  if (query.toLowerCase().includes("multiplied")) {
    const regex = /what is (\d+) multiplied by (\d+)\?/i;
    const match = query.match(regex);

    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const result = num1 * num2;
      console.log(result); 
    } else {
      console.log("Unable to extract numbers from query");
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const regex = /what is (\d+) multiplied by (\d+)\?/i;
    const match = query.match(regex);

    if (match) {
      const num1 = parseInt(match[0]);
      const num2 = parseInt(match[1]);
      const result = num1 * num2;
      console.log(result); 
    } else {
      console.log("Unable to extract numbers from query");
    }
  }


  return "";
}
