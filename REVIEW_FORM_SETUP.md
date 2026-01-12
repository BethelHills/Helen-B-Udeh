# Review Form Backend Integration Setup Guide

## Option 1: EmailJS Integration (Recommended - Same as Contact Form)

Since you're already using EmailJS for the contact form, this is the easiest option.

### Step 1: Create a New Email Template in EmailJS

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Click **"Create New Template"**
4. Name it something like "Review Form" or "Client Review"

### Step 2: Configure the Email Template

**Template Settings:**
- **Template Name**: Review Form (or any name you prefer)
- **Subject**: New Client Review from {{reviewer_name}}

**TO Field:**
```
helenudeh.va@gmail.com
```

**Reply-To Field:**
```
helenudeh.va@gmail.com
```

**Message Body:**
```
New Client Review Received

Name: {{reviewer_name}}
Role: {{reviewer_role}}
Company: {{reviewer_company}}

Review:
{{review_text}}

---
This review was submitted through The Pretty ProDesk website.
```

### Step 3: Get Your Template ID

1. After creating the template, you'll see a **Template ID** (e.g., `template_xyz123`)
2. Copy this Template ID

### Step 4: Update the Code

Open `script.js` and find the review form submission code (around line 239). Replace `'template_review'` with your actual Template ID:

```javascript
emailjs.send('service_fpa518p', 'YOUR_TEMPLATE_ID_HERE', templateParams)
```

**Example:**
```javascript
emailjs.send('service_fpa518p', 'template_xyz123', templateParams)
```

### Step 5: Test the Form

1. Open your website
2. Click "Leave a Review" button
3. Fill out the form and submit
4. Check your email (helenudeh.va@gmail.com) for the review

---

## Option 2: Custom Backend API (Advanced)

If you want to store reviews in a database or use a different service:

### Using a Backend Service (Node.js/Express Example)

1. Create an API endpoint on your server
2. Update the review form JavaScript to send a POST request:

```javascript
fetch('https://your-api.com/api/reviews', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        role: role,
        company: company,
        review: review
    })
})
.then(response => response.json())
.then(data => {
    // Handle success
})
.catch(error => {
    // Handle error
});
```

### Using Google Forms or Other Services

1. Create a Google Form for reviews
2. Get the form action URL
3. Update the form tag in `index.html`:

```html
<form id="review-form" action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank">
```

---

## Current Setup

The review form is currently configured to use EmailJS with:
- **Service ID**: `service_fpa518p` (same as contact form)
- **Template ID**: `template_review` (you need to create this and update the code)
- **Public Key**: `nFFvdIg6N1CqUuW1B` (already initialized)

## Quick Setup Checklist

- [ ] Create EmailJS template for reviews
- [ ] Copy Template ID
- [ ] Update `script.js` with your Template ID
- [ ] Test the form submission
- [ ] Verify emails are received

---

## Need Help?

If you need assistance with the setup, make sure:
1. EmailJS is properly initialized (already done in your code)
2. Your EmailJS account is active
3. The template variables match: `{{reviewer_name}}`, `{{reviewer_role}}`, `{{reviewer_company}}`, `{{review_text}}`
4. The TO email address is correct in your template

