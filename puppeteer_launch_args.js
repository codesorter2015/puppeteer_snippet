--disable-extensions-except
--load-extension
Ex:
 await puppeteer.launch({args: ['--disable-extensions-except=add_iframe', '--load-extension=add_iframe'],
 args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
