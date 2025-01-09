const jsonfile = require('jsonfile');
const path = require('path');

// Path to your Prettier config (.prettierrc)
const prettierConfigPath = path.resolve(__dirname, '.prettierrc');

// Path to your VSCode workspace settings
const vscodeSettingsPath = path.resolve(__dirname, '.vscode', 'settings.json');

// Read .prettierrc
jsonfile.readFile(prettierConfigPath, (err, prettierConfig) => {
  if (err) {
    console.error('Error reading .prettierrc:', err);
    return;
  }

  // Get the tabWidth from Prettier config
  const tabWidth = prettierConfig.tabWidth;

  // Read VSCode workspace settings
  jsonfile.readFile(vscodeSettingsPath, (err, vscodeSettings) => {
    if (err) {
      console.error('Error reading VSCode settings:', err);
      return;
    }

    // Update editor.tabSize to match Prettier's tabWidth
    vscodeSettings['editor.tabSize'] = tabWidth;

    // Write the updated settings back to VSCode settings file
    jsonfile.writeFile(
      vscodeSettingsPath,
      vscodeSettings,
      { spaces: 2 },
      (err) => {
        if (err) {
          console.error('Error writing VSCode settings:', err);
          return;
        }

        console.log(`Successfully synced editor.tabSize to ${tabWidth}`);
      }
    );
  });
});
