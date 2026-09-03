const sharp = require('C:/Users/DELLL/.gemini/antigravity/scratch/mina-furniture/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const uploadDir = 'C:/Users/DELLL/.gemini/antigravity/brain/d184cc7a-3773-4158-b9dc-8139df516308/.user_uploaded';
const outputDir = path.resolve(__dirname, '../public/images/fashion');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 2 rows x 3 cols grid processing
async function processGrid2x3(filename, items) {
  const filePath = path.join(uploadDir, filename);
  console.log(`Processing 2x3 grid: ${filename}...`);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const colWidth = Math.floor(width / 3);
  const rowHeight = Math.floor(height / 2);

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      const idx = r * 3 + c;
      const item = items[idx];
      if (!item) continue;

      const left = c * colWidth;
      const top = r * rowHeight;
      const outPath = path.join(outputDir, `${item.id}.jpg`);

      await sharp(filePath)
        .extract({ left, top, width: colWidth, height: rowHeight })
        .jpeg({ quality: 90, mozjpeg: true })
        .toFile(outPath);

      console.log(`  Saved: ${item.id}.jpg [${item.category}]`);
    }
  }
}

// 1 row x 2 cols grid processing (Collage 6)
async function processGrid1x2(filename, items) {
  const filePath = path.join(uploadDir, filename);
  console.log(`Processing 1x2 grid: ${filename}...`);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const colWidth = Math.floor(width / 2);
  const rowHeight = height;

  for (let c = 0; c < 2; c++) {
    const item = items[c];
    if (!item) continue;

    const left = c * colWidth;
    const top = 0;
    const outPath = path.join(outputDir, `${item.id}.jpg`);

    await sharp(filePath)
      .extract({ left, top, width: colWidth, height: rowHeight })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(outPath);

    console.log(`  Saved: ${item.id}.jpg [${item.category}]`);
  }
}

async function run() {
  try {
    // 1. Collage 1 (media_1788417286064.jpg)
    await processGrid2x3('media_1788417286064.jpg', [
      { id: 'kemis_gold_tilet_studio', category: 'kemis' },
      { id: 'kemis_event_ivory_gold', category: 'bridal' },
      { id: 'crop_kemis_twopiece_mirror', category: 'fusion' },
      { id: 'editorial_dramatic_habesha_wrap', category: 'editorial' },
      { id: 'kemis_crimson_panel_front', category: 'kemis' },
      { id: 'kemis_crimson_panel_back', category: 'kemis' },
    ]);

    // 2. Collage 2 (media_1788417295451.jpg)
    await processGrid2x3('media_1788417295451.jpg', [
      { id: 'kemis_highlow_train_couture', category: 'fusion' },
      { id: 'kemis_silver_column_gown', category: 'bridal' },
      { id: 'kemis_emerald_gold_flare', category: 'bridal' },
      { id: 'kemis_olive_corset_duotone', category: 'fusion' },
      { id: 'kemis_black_corset_vest_mesob', category: 'fusion' },
      { id: 'fusion_trousers_gold_cape_robe', category: 'fusion' },
    ]);

    // 3. Collage 3 (media_1788417307136.jpg)
    await processGrid2x3('media_1788417307136.jpg', [
      { id: 'kemis_royal_purple_seated', category: 'kemis' },
      { id: 'kemis_gold_border_pinkbg', category: 'kemis' },
      { id: 'kemis_brickred_starburst_ballgown', category: 'bridal' },
      { id: 'gown_amber_gold_metallic', category: 'bridal' },
      { id: 'kemis_fuchsia_diamond_tilet', category: 'kemis' },
      { id: 'kemis_mint_emerald_twotone', category: 'kemis' },
    ]);

    // 4. Collage 4 (media_1788417318055.jpg)
    await processGrid2x3('media_1788417318055.jpg', [
      { id: 'serk_reception_green_dress_model', category: 'showroom' },
      { id: 'serk_rental_ivory_offshoulder', category: 'rental' },
      { id: 'serk_rental_navy_velvet_kaftan', category: 'rental' },
      { id: 'serk_showroom_rose_gold_kemis', category: 'rental' },
      { id: 'serk_rental_yellow_tilet_dress', category: 'rental' },
      { id: 'serk_reception_gold_logo_wall', category: 'showroom' },
    ]);

    // 5. Collage 5 (media_1788417345329.jpg)
    await processGrid2x3('media_1788417345329.jpg', [
      { id: 'serk_showroom_mirror_gold_scoop', category: 'showroom' },
      { id: 'serk_rental_strapless_entrance', category: 'rental' },
      { id: 'men_habesha_cross_shirt', category: 'men' },
      { id: 'serk_boutique_bronze_hem_mesob', category: 'kemis' },
      { id: 'kemis_crimson_straps_spotlight', category: 'kemis' },
      { id: 'men_gold_mannequin_royal_tunic', category: 'men' },
    ]);

    // 6. Collage 6 (media_1788417359198.jpg)
    await processGrid1x2('media_1788417359198.jpg', [
      { id: 'men_rosegold_embroidery_suit', category: 'men' },
      { id: 'couples_purple_kemis_matching', category: 'couples' },
    ]);

    console.log('\n--- SUCCESS: All 32 fashion photographs extracted and optimized! ---');
  } catch (err) {
    console.error('Error processing collages:', err);
  }
}

run();
