const { Given, When, Then } = require('@cucumber/cucumber');

//-----------------------------------------------------
//Inicia escenario 3

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/section/form/button/span');
    await this.driver.saveScreenshot('./screenshots/login.png');
    return await element.click();
});

When('I click publish a post', async function() {
    let element = await this.driver.$('#ember37');
    return await element.click();
});

When('I click on the redact post title inputbox', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter post title{string}', async function (post_title) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.setValue(post_title);
});

When('I click on the redact post body inputbox', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/p');
    return await element.click();
});

When('I enter post body{string}', async function (post_body) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/p');
    return await element.setValue(post_body);
});

When('I click on the publish button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]');
    await this.driver.saveScreenshot('./screenshots/publishPost.png');
    return await element.click();
});

When('I click on the publish button again', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I publish the post', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click on posts', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    await this.driver.saveScreenshot('./screenshots/postsList.png');
    return await element.click();
});

Then('I click on published', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    await this.driver.saveScreenshot('./screenshots/publishedPostsList.png');
    return await element.click();
});

When('I click on the post title', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]');
    return await element.click();
});

When('I click on the redact post title inputbox2', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter post edited title{string}', async function (post_title) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.setValue(post_title);
});

When('I click on update', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]');
    await this.driver.saveScreenshot('./screenshots/updatePost.png');
    return await element.click();
});

When('I click on the update button', async function() {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I click on posts2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    return await element.click();
});

When('I click on published2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    return await element.click();
});

//-----------------------------------------------------
//Inicia escenario 6

When('I click on the profile icon', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div');
    await this.driver.saveScreenshot('./screenshots/dashboard.png');
    return await element.click();
});

When('I click on logout', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    await this.driver.saveScreenshot('./screenshots/logout.png');
    return await element.click();
});

Then('I see a post detail', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/main/div/div/article[1]/div/a/header/h2');
    await this.driver.saveScreenshot('./screenshots/postDetail.png');
    return await element.click();
});

//-----------------------------------------------------
//Inicia escenario 8

When('I click on options', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/button');
    return await element.click();
});

When('I click on delete post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button');
    await this.driver.saveScreenshot('./screenshots/deletePost.png');
    return await element.click();
});

When('I click on delete button', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click on change access option', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[4]/div/span/select');
    await this.driver.saveScreenshot('./screenshots/changePostAccess.png');
    return await element.click();
});

When('I select paid members only', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[4]/div/span/select/option[3]');
    return await element.click();
});

When('I click on new post button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/a/span');
    return await element.click();
});

When('I click on post on lateral menu', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]');
    return await element.click();
});

When('I click on pages', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]/a');
    return await element.click();
});

When('I delete all the available posts2', async function () {
    let posts = await this.driver.$$('h3.gh-content-entry-title')
    let counter = posts.length
    while (counter > 0) {
        await new Promise(resolve => setTimeout(resolve, 50));
        await posts[0].click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let settingsBtn = await this.driver.$('button[title=Settings]')
        await settingsBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let deleteBtn = await this.driver.$('form > button')
        await deleteBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
        await confirmDeleteBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let backBtn = await this.driver.$('a[href="#/posts/"]');
        await backBtn.click();
        await new Promise(resolve => setTimeout(resolve, 50));
        posts = await this.driver.$$('h3.gh-content-entry-title');
        counter -= 1;
        await new Promise(resolve => setTimeout(resolve));
    }
});

//-------------------------------------------------------------
//Funciones Julián

const expect = require('chai').expect;

When('I click next', async function () {
  let element = await this.driver.$('#ember11');
  return await element.click();
})

When('I open my posts', async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
})

When('I click on "New Post" button', async function () {
  let element = await this.driver.$('a.view-actions-top-row');
  return await element.click();
})

When('I type a post title {kraken-string}', async function (title) {
  let element = await this.driver.$('textarea[placeholder="Post title"]');
  return await element.setValue(title);
});

When('I type a post body {kraken-string}', async function (body) {
  let element = await this.driver.$('div[data-kg="editor"]');
  return await element.setValue(body);
});

When('I click on "Add feature image"', async function () {
  let element = await this.driver.$('.gh-editor-feature-image-unsplash');
  return await element.click();
});

When('I click on "Insert image"', async function () {
  let element = await this.driver.$('div.gh-unsplash-photo-footer > a.gh-unsplash-button');
  return await element.click();
});

When('I click on "Remove image"', async function () {
  let element = await this.driver.$('.image-delete');
  return await element.click();
});

When('I click on "Publish" dropdown', async function () {
  let element = await this.driver.$('div.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
  return await element.click();
});

When('I click on "Publish" button', async function () {
  let element = await this.driver.$('button.gh-publishmenu-button');
  return await element.click();
});

When('I click on "Publish" confirmation button', async function () {
  let element = await this.driver.$('button.gh-btn-black.gh-btn-icon.ember-view');
  return await element.click();
});

When('I go back to admin dashboard', async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

Then('I should see {kraken-string}', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.true
})

When('I open any post as a user', async function () {
  let elements = await this.driver.$$('h2.post-card-title')
  let randomNumber = Math.floor(Math.random() * elements.length)
  let innerText = await elements[randomNumber].getText()
  await elements[randomNumber].click()
  let postTitleElement = await this.driver.$('h1.article-title')
  let postTitle = await postTitleElement.getText();
  let assertion = innerText === postTitle;
  expect(assertion).to.be.true
})

When('I click on any published post', async function () {
  let elements = await this.driver.$$("li.gh-list-row.gh-posts-list-item > a.gh-post-list-status > div > span.gh-content-status-published")
  let randomNumber = Math.floor(Math.random() * elements.length)
  await elements[randomNumber].click()
})

When('I Update the post', async function () {
  let element = await this.driver.$("header > section > div:first-child")
  await element.click()
  let updateBtn = await this.driver.$('div.gh-publishmenu-dropdown > footer > button.gh-publishmenu-button')
  await updateBtn.click()
})

When('I delete the post', async function () {
  let element = await this.driver.$('button[title=Settings]')
  await element.click()
  let deleteBtn = await this.driver.$('form > button')
  await deleteBtn.click()
  let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
  await confirmDeleteBtn.click()
})

When('I click on {kraken-string} post', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let postIndex = resolvedTexts.indexOf(title)
  await elements[postIndex].click()
})

When('I logout', async function () {
  let element = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await element.click()
  let logoutBtn = await this.driver.$('ul[role=menu] > :last-child')
  await logoutBtn.click()
})

Then('I should not see {kraken-string} post in admin dashboard', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.false
})

Then('I should not see {kraken-string} post in blog entries', async function (title) {
  let elements = await this.driver.$$('h2.post-card-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.false
})

Then('I compare the number of posts in admin dashboard and in blog', async function () {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let profileDropdown = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await profileDropdown.click()
  let logoutBtn = await this.driver.$('ul[role=menu] > :last-child')
  await logoutBtn.click()
  let postedTitles = await this.driver.$$('h2.post-card-title')
  let assertion = elements.length >= postedTitles.length
  expect(assertion).to.be.true
})

When('I delete all the available posts', async function () {
  let posts = await this.driver.$$('h3.gh-content-entry-title')
  let counter = posts.length
  while (counter > 0) {
    await new Promise(resolve => setTimeout(resolve, 500));
    await posts[0].click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let settingsBtn = await this.driver.$('button[title=Settings]')
    await settingsBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let deleteBtn = await this.driver.$('form > button')
    await deleteBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
    await confirmDeleteBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let backBtn = await this.driver.$('a[href="#/posts/"]');
    await backBtn.click();
    await new Promise(resolve => setTimeout(resolve, 500));
    posts = await this.driver.$$('h3.gh-content-entry-title');
    counter -= 1;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
})

Then('I should not see any posts', async function () {
  let posts = await this.driver.$$('h3.gh-content-entry-title')
  let assertion = posts.length === 0;
  expect(assertion).to.be.true
})

When('I change my password from {kraken-string} to {kraken-string}', async function (oldPassword, newPassword) {
  let element = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await element.click()
  await new Promise(resolve => setTimeout(resolve, 500));
  let profileBtn = await this.driver.$('ul[role=menu] > :nth-child(4)')
  await profileBtn.click()
  await new Promise(resolve => setTimeout(resolve, 500));
  let oldPasswordInput = await this.driver.$('#user-password-old')
  await oldPasswordInput.setValue(oldPassword)
  let newPasswordInput = await this.driver.$('#user-password-new')
  await newPasswordInput.setValue(newPassword)
  let confirmationInput = await this.driver.$('#user-new-password-verification')
  await confirmationInput.setValue(newPassword)
  await new Promise(resolve => setTimeout(resolve, 500));
  let confirmBtn = await this.driver.$('button.button-change-password')
  await confirmBtn.click()
})

Then("I validate I'm in the admin dashboard", async function () {
  let dashboardE = await this.driver.$('h2.gh-canvas-title');
  let dashboardTitle = await dashboardE.getText()
  let assertion = dashboardTitle === 'Dashboard'
  expect(assertion).to.be.true
})
