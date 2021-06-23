const {Builder, By, Key, until} = require("selenium-webdriver");
const assert = require('assert');
const url = "https://backend-silvafacundo.cloud.okteto.net/login";


async function finalizePurchase(){ 
    let driver = await new Builder().forBrowser("chrome").build(),
        quantity = 5;

    await driver.get(url);
    await driver.findElement(By.name("email"))
        .sendKeys("test@test.com");
    await driver.findElement(By.name("password"))
        .sendKeys("Hola12345");
    await driver.findElement(By.css("form > button")).click();
        try {
            await driver.wait(
                until.elementLocated(
                    By.css('input.input')),10000);
                await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div[1]/div/div/div[2]/div[1]"))
                        ,10000);
                await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div[1]")).click();    
                await driver.wait(
                    until.elementLocated(
                        By.xpath("/html/body/div[1]/div/div/div[3]"))
                        ,10000);
                    
                for (let index = 1; index < quantity; index++) {
                    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[3]/div[2]/div/div[2]/div/p[2]"))
                    .click();
                }
                
                await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[3]/div[2]/div/footer/button[2]"))
                    .click();
                //agregados los productos 

                await driver.findElement(By.xpath("/html/body/div[1]/div/header/div/button")).click();
                
                // Click en boton comprar
                await driver.findElement(By.xpath("/html/body/div[1]/div/header/div/div/div/footer/button")).click();
                
                await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[4]/label")).click();
                await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/label")).click();
                
                await driver.findElement(By.xpath("/html/body/div[1]/div/div/button")).click();
        } catch (error) {
            console.log('Something was wrong!');
        }
}

finalizePurchase();