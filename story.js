const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story')

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random]
}

const storyText = 'It was 94 fahrenheit outside so :insterx: went for a walk. When they got to :insterty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds and it was a hot day.';
const insertX = ['willy the goblin', 'Big daddy', 'Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



randomize.addEventListener('click',result);
function result(){
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);


    if(customName.value !== ''){
        const name = customName.value;
        newStory = newStory.replaceAll('bob',name);

    }
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);
        newStory = newStory.replaceAll('94 fahrenheit', tempeature);
        newStory = newStory.replaceAll('300 pounds', weight);

    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}