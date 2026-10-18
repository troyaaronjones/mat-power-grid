const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '../dist/grid-example');
const PORT = 8080;

// Simple static file server
const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypeMap = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  const contentType = contentTypeMap[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

async function captureScreenshots() {
  server.listen(PORT);
  console.log(`Server listening on http://localhost:${PORT}`);

  const outputDir = path.join(__dirname, '../docs/images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 2 // Crisp screenshots
  });

  const page = await context.newPage();

  try {
    console.log('Navigating to demo page...');
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // 1. Overview Grid
    console.log('Capturing overview-grid.png...');
    await page.screenshot({ path: path.join(outputDir, 'overview-grid.png') });

    // 2. Column Control
    console.log('Capturing column-control.png...');
    const columnControlBtn = page.locator('button:has-text("Column Preferences"), button:has-text("Column Control"), .column-control-btn, mat-icon:has-text("view_column")').first();
    if (await columnControlBtn.isVisible()) {
      await columnControlBtn.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(outputDir, 'column-control.png') });
      // Close dropdown by clicking header or ESC
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    } else {
      console.log('Column control button not directly located, capturing fallback view...');
      await page.screenshot({ path: path.join(outputDir, 'column-control.png') });
    }

    // 3. Server-Side & Multi-Filtering Tab
    console.log('Switching to Server-Side tab...');
    await page.click('text="Server-Side & Multi-Filtering"');
    await page.waitForTimeout(1000);

    // Open first filter dropdown if available
    const firstFilterTrigger = page.locator('mat-icon:has-text("filter_list"), mat-icon:has-text("arrow_drop_down"), .mpg-filter-trigger, .mat-mdc-select-trigger').first();
    if (await firstFilterTrigger.isVisible()) {
      await firstFilterTrigger.click();
      await page.waitForTimeout(500);
    }
    console.log('Capturing server-filtering.png...');
    await page.screenshot({ path: path.join(outputDir, 'server-filtering.png') });

    // Close menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 4. Master-Detail Expansion Tab
    console.log('Switching to Master-Detail Expansion tab...');
    await page.click('text="Master-Detail Expansion"');
    await page.waitForTimeout(1000);

    // Click first expandable row
    const expandRow = page.locator('mat-row, .mat-mdc-row, tr').first();
    if (await expandRow.isVisible()) {
      await expandRow.click();
      await page.waitForTimeout(500);
    }
    console.log('Capturing master-detail-grid.png...');
    await page.screenshot({ path: path.join(outputDir, 'master-detail-grid.png') });

    console.log('Successfully captured all screenshots in docs/images/');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    await browser.close();
    server.close();
  }
}

captureScreenshots();
