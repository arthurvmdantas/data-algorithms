# template-parcel
Template for static HTML + Parcel + Autoprefixer.

## Scripts
**npm start** - Initialize Parcel's development server

**npm build** - Bundle the project

## Notes
When targeting for GitHub Pages, change the **build** script to:
```JSON
{
  "build": "parcel build --public-url ./",
}
```
