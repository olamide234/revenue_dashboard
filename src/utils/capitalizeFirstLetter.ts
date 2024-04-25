function capitalizeFirstLetter(sentence: string): string {
  const words = sentence.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a sentence
  const capitalizedSentence = capitalizedWords.join(' ');

  return capitalizedSentence;
}

export default capitalizeFirstLetter;
