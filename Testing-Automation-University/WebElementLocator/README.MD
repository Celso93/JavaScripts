# Understand how to create a Webpage

https://testautomationu.applitools.com/web-element-locator-strategies/chapter1.html

# What is DOM ?

https://testautomationu.applitools.com/web-element-locator-strategies/chapter2.html

``` code
The Document Object Model, or DOM for short, is a programming interface for HTML and XML documents.
Works as a web page manipulator.

...there is a difference between an element and its locator.

Element: It's an object represeting a live rendered HTML elemento on page.

Locator: Query that finds a returns specific elements from the DOM. It's can be Id, name, class name, CSS selector and XPath.

DOM frameworks vs Selenium Webdriver.
Webdriver:
The main difference for WebDriver calls is they cannot change the state of elements. They can only access the state and send interactions.

Furthermore, WebDriver calls don't necessarily call JavaScript directly. They operate using the webDriver protocol as implemented by each browser type.
```

# Best way to target a element
https://testautomationu.applitools.com/web-element-locator-strategies/chapter3.html
https://testautomationu.applitools.com/web-element-locator-strategies/chapter4.html

```
"...The best philosophy is to write the simplest locator query that uniquely identifies the target element or elements..."

Atribute as Id and name can provide a unique ID.

IDs, names and class names are the easiest locators to use.

- CSS Selectors are expressions that use pattern matching to find elements on a webpage.

- Another very powerful facet of CSS Selector syntax is the ability to select elements based on their attributes.

- Keep that in mind as you start writing your own CSS Selectors. CSS Selectors are great web element locators.

- Always makes you're to test your CSS Selectors when writing them.

If I use the arrow bracket (>), that forces a direct parent-child relationship (ex. div.cw > div.result).

Examples:
  div.footer_cards a[data-id='tips'] > .footer_card_icon


```
