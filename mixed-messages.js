//story idea generator

//object of data to choose from
const  storyData = {
  genre: ['historical fiction', 'romance', 'comedy', 'horror', 'narative', 'mystery', 'thriller', 'science fiction', 'western'],
  plot: ['"rags to riches"', '"voyage and return"', '"tragedy"', '"rebirth"', '"coming of age"', '"quest"'],
  characters: ['Nelson Mandela', 'Martha Stewert', 'Bart Simpson', 'Abe Lincoln', 'Bob Marley', 'Huey Lewis', 'Issa Rae', 'Ted Nugent', 'Janis Joplin', 'Tom Brady', 'Biggie Smalls'],
  setting: ['in the mountains', 'in a frozen wasteland', 'in Velaris', 'in a meadow', 'in a cove', 'in a post apocalyptic world', 'in a hounted house']  
}
//storing random choices in variables
let randomGenre = storyData.genre[Math.floor(Math.random() * storyData.genre.length)];
let randomPlot = storyData.plot[Math.floor(Math.random() * storyData.plot.length)];
let randomCharacter = storyData.characters[Math.floor(Math.random() * storyData.characters.length)];
let randomSetting = storyData.setting[Math.floor(Math.random() * storyData.setting.length)];
//creating a writing promt with random choices
const randomStoryIdea = () => {
  return `Write a ${randomPlot} in the ${randomGenre} genre set ${randomSetting} about ${randomCharacter}.`;
}