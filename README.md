# Week Widget

A minimal Notion widget that displays the current week number based on a custom starting date.

```
WEEK
12
```

The widget is designed to be embedded into Notion, but it can be used anywhere a webpage can be embedded.

---

## How it works

- Week 0 starts on **Sunday, July 19, 2026**.
- Every Sunday, the week number increments by one.
- The cycle continues until **Week 52**.
- After Week 52, it automatically resets to **Week 0** and repeats.

Example:

| Date             | Display |
| Jul 19 – Jul 25  | Week 0  |
| Jul 26 – Aug 1   | Week 1  |
| Aug 2 – Aug 8    | Week 2  | 
| ................ | ....... |
| Week 52          | Week 52 |
| Following Sunday | Week 0 |

---

## Files

```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Customization

### Change the starting week

Open `script.js`.

```javascript
const START_DATE = new Date(2026, 6, 19);
```

Replace it with your preferred starting Sunday.

---

### Change text color

In `style.css`:

```css
:root{
    --text:#ffffff;
}
```

Example:

```css
--text:#000000;
```

---

### Change font size

```css
.number{
    font-size:72px;
}
```

---

## Deployment

Deploy to any static hosting provider such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

After deployment, copy the public URL and paste it into a Notion **Embed** block.

---

