# Event handling in Javascript

## Story - GDPR Compliance

> EU laws require every website to be transparent about their use of cookies. GDPR (General Data Protection Regulation) states that a website owner is required to get concent from the users to use cookies/tracking codes on their website.

> The coffee break took a little longer than expected, so your website builder collegue already threw some guidelines together. You only have to provide business logic for your tasks

**Your job as a developer is to make your company's website GDPR compliant.**


## What you are going learn

You'll have to:

* Attach event handlers on DOM nodes
* Get information from the event objects
* Parse the DOM
* Append CSS classes to DOM nodes
* Remove DOM nodes

## Setup

1) We created a minimalistic website with the corresponding css, js and html files.

    You can serve the website with: `npm start`

2) Tests are provided! You'll be able to check your work. On each branch that you work on, you'll find tests that are related to the task you are working on.

    You can run the tests as easy as: `npm run test`

3) Some tasks are located on different branches, use `git checkout` when needed

## Tasks

### Save cookie preference

>The legal team would like you to update the user preference when a checkbox is clicked.

1) `git checkout branch task-1-save-cookie-preference`

2) Use an event handler(s) to update the predefined COOKIE_SETTING variable when a checkbox is clicked.

    Pass the changed setting to the saveSetting function.

    **Hint:** Use the information provided by the event object

### Legal update!

>The legal team requires some modifications on the settings modal. They'd like you to wire up the buttons your sitebuilder colleague added. They no longer need you to track the checkboxes directly...

1) `git checkout branch task-2-legal-update`

2) Parse the DOM when the 'Allow selection' button is clicked and pass the cookie preferences to the saveSettings function

    **Hint:** The input parameters are provided by the js doc above the saveSettings function.

### Why is the 'necessary' checkbox disabled?

>The support team is flooded with emails. Customers want to know why the 'necessary' checkbox disabled.

1) Show an alert box when the necessary checkbox is clicked explaining why it is implemented this way.

    Use the text provided in the website.html

### Cookie banner

>Weeks passed and you almost forgot about the cookie policy. The legal team now wants you to wire up the cookie banner with the settings modal.

1) `git checkout branch task-4-cookie-banner`

2) Expected behavior:

    * 'Show details' button should show the settings modal and close the banner

    * 'Allow all cookies' should close the banner

        **Hint:** Use the css classes provided in the styles.css file

### Delete cookies

>The Legal team would like you to provide the user a cookie deletion functionality. The dropdown and cookie deletion logic has already been written.

The dropdown contains the names of the used cookies of the website. When a dropdown item is selected, it deletes the corresponding cookie.

1) `git checkout branch task-5-delete-cookies`

2) Delete the item from the dropdown which has been selected.

## Good luck!
