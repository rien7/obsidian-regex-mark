# Obsidian Regex Mark

Obsidian Regex Mark is a plugin for [Obsidian](https://obsidian.md/) that allows you to add custom CSS classes to text based on regular expressions.

## Usage

Add a regular expression and a CSS class to the plugin settings. The plugin will then add the CSS class to any text that matches the regular expression.

And `data-contents` will be added to the span tag

### Example

The following regular expression will add the CSS class `comment` to any text that matches the regular expression.

```
regex: //.*$
class: comment
```

And the following text

```markdown
This is a normal line of text. //This is a comment.
```

will be converted to

```html
<p>This is a normal line of text. <span class="comment" data-contents="//This is a comment">//This is a comment.</span></p>
```

### Next steps

You can then use the CSS class to style the text in your CSS snippet or any other usages.

## Roadmap

- [x] Basic functionality
- [ ] Add support for capturing groups