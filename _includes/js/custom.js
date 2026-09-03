// Keep sidebar sections expanded across page navigation.
//
// This site does a full page reload on every navigation (it's not a
// single-page app), and Just the Docs' built-in activateNav() only expands
// the current page's own ancestor chain on each fresh load -- any other
// section the user had open is discarded, since nothing persists that state
// between loads. This restores it via sessionStorage.

jtd.onReady(function () {
  var STORAGE_KEY = "jtdExpandedNavItems"

  function getStoredExpanded() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || []
    } catch (e) {
      return []
    }
  }

  function setStoredExpanded(hrefs) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(hrefs))
    } catch (e) {
      // sessionStorage unavailable (e.g. private browsing) -- degrade silently.
    }
  }

  function navItemHref(navListItem) {
    var link = navListItem.querySelector(":scope > a.nav-list-link")
    return link ? link.getAttribute("href") : null
  }

  function persistExpandedState() {
    var hrefs = []
    document
      .querySelectorAll("#site-nav .nav-list-item.active")
      .forEach(function (item) {
        var href = navItemHref(item)
        if (href) hrefs.push(href)
      })
    setStoredExpanded(hrefs)
  }

  // Restore any sections the user had expanded on a previous page, in
  // addition to whatever Just the Docs already expanded for the current
  // page's own ancestor chain.
  var expanded = getStoredExpanded()
  if (expanded.length) {
    document
      .querySelectorAll("#site-nav .nav-list-item")
      .forEach(function (item) {
        var href = navItemHref(item)
        if (href && expanded.indexOf(href) !== -1) {
          item.classList.add("active")
          var expander = item.querySelector(":scope > button.nav-list-expander")
          if (expander) expander.setAttribute("aria-expanded", "true")
        }
      })
  }

  // Record the merged state (current page's auto-expanded ancestors plus
  // whatever was just restored), then keep it in sync with every manual
  // expand/collapse click. Just the Docs' own click handler (registered
  // earlier, in just-the-docs.js) runs first and toggles the .active class
  // synchronously before this listener runs, since both are registered on
  // `document` for the same event and listeners fire in registration order.
  persistExpandedState()
  jtd.addEvent(document, "click", function (e) {
    var target = e.target
    while (
      target &&
      !(target.classList && target.classList.contains("nav-list-expander"))
    ) {
      target = target.parentNode
    }
    if (target) {
      persistExpandedState()
    }
  })
})
