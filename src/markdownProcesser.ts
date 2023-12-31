import { SettingOption } from './setting'

export function MarkdownProcesser(data: SettingOption[], element: HTMLElement) {
  const paragraph = element.findAll('p')

  for (const p of paragraph) {
    let ignore = true
    for (const d of data) {
      if (!d.regex || !d.class || d.regex === '' || d.class === '')
        continue
      const regex = new RegExp(d.regex, 'g')
      if (regex.test(p.textContent || '')) {
        ignore = false
        break
      }
    }
    if (ignore)
      continue

    const treeWalker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT)
    const textNodes = []
    while (treeWalker.nextNode()) {
      textNodes.push(treeWalker.currentNode)
    } 
    for (const node of textNodes) {
      let text = node.textContent
      if (text) {
        for (const d of data) {
          if (!d.regex || !d.class || d.regex === '' || d.class === '')
            continue
          const regex = new RegExp(d.regex, 'g')
          text = text.replace(regex, `<span class="${d.class}" data-contents="$&">$&</span>`)
        }
        const span = document.createElement('span')
        span.innerHTML = text
        if (node.parentNode)
          node.parentNode.replaceChild(span, node)
      }
    }
  }
}