// Capture links container
const linksContainer = document.querySelector('.links')

// Create a new link entry
function createNewEntry(link, i) {
  // create the button
  const button = document.createElement('button')
  button.classList.add('button')

  // create anchor
  const anchor = document.createElement('a')
  anchor.setAttribute('href', linksArray[i].url)
  anchor.setAttribute('target', '_blank')
  anchor.innerText = linksArray[i].name

  // append anchor to button
  button.appendChild(anchor)

  return button
}

// add links to page
function addLinks() {
  // loop through links array and create a new entry for each element in the array
  for (let i = 0; i < linksArray.length; i++) {
    // creating entry
    const newEntry = createNewEntry(linksArray[i], i)
    // adding new entry to the container
    linksContainer.appendChild(newEntry)
  }
}

addLinks()
