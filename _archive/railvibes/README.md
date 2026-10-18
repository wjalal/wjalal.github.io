# RailVibes (archived)

Removed from the site on 2026-10-18. Jekyll ignores `_archive/`, so nothing here is published.

To restore:

1. Append `railvibes.bib` to `_bibliography/papers.bib`.
2. Move `railvibes.pdf` to `assets/pdf/` and `railvibes.jpg` to `assets/img/publication_preview/`.
3. Add the badge colour back to `_data/venues.yml`:

   ```yaml
   "Dataset":
     color: "#2e7d32"
   ```

4. In `_data/cv.yml`, the "Research Student Assistant" entry used to end its rail-track bullet with: `, contributing to the <a href="/research/#quaium2025railvibes">RailVibes</a> derailment-detection dataset`.
5. Optionally rename the "Preprints" heading in `_pages/research.md` back to "Preprints and Manuscripts".
