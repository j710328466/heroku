const firtsMenu = []
JSON.parse(localStorage.getItem('nemus')).forEach(el => {
  if (el.parentId === 'biRoot') {
    firtsMenu.push(el)
  }
})
const newMenus = firtsMenu.sort(this._compare('sort'))
newMenus.forEach(menu => {
  menu.childs = []
  JSON.parse(localStorage.getItem('nemus')).forEach(el => {
    if (el.parentId === menu.id) {
      menu.childs.push(el)
    }
  })
})

export default newMenus


