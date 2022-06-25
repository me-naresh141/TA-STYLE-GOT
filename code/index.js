function myFunction(got) {
  let rootUl = document.querySelector('ul')
  got.houses.forEach((allhouses) => {
    allhouses.people.forEach((elm) => {
      let li = document.createElement('li')
      li.className = `li`
      let nameBox = document.createElement('div')
      nameBox.className = `nameBox`
      let image = document.createElement(`img`)
      image.classList.add('image')
      image.src = elm.image
      let name = document.createElement('h2')
      name.className = `name`
      name.innerText = elm.name
      let pera = document.createElement(`p`)
      pera.className = `pera`
      pera.innerText = elm.description
      let btn = document.createElement(`button`)
      btn.className = `btn`
      btn.innerText = `learn more !`
      nameBox.append(image, name)
      li.append(nameBox, pera, btn)
      rootUl.append(li)
    })
  })
}
myFunction(got)
