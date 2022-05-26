import { chromium } from "playwright";

const mangas = [
    {
        name: 'Quintillizas - 01',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-01/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        }
    },
    {
        name: 'Quintillizas - 02',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-02/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        }
    },
    {
        name: 'Quintillizas - 03',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-03/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 04',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-04/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 05',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-05/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 06',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-06/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 07',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-07/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 08',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-08/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 09',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-09/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 10',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-10/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        }
    },
    {
        name: 'Quintillizas - 11',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-11/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 12',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-12/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 13',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-13/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    },
    {
        name: 'Quintillizas - 14',
        url: 'https://www.lacomiqueria.com.ar/productos/somos-quintillizas-go-toubun-no-hanayome-03/',
        checkStock: async ({ browser, url }) => {
            const page = await browser.newPage();
            await page.goto(url);

            const content = await page.inputValue('input[data-store=product-buy-button]');
            const stock = content.toLowerCase().includes('sin stock') == false;
            return stock;
        } 
    }
]

//setInterval(() => {
    ;(async () => {
        const browser = await chromium.launch();
    
        for(var manga of mangas) {
            const { name, url, checkStock } = manga;
            
            const result = await checkStock({ browser, url });
    
            console.log(result ? `${name}: HAY STOCK BOLUDOOOO` : `${name}: No hay stock :(`);
        }
    
    })()    
//}, 30000);
