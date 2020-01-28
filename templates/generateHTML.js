//Pass the message HTML from createMessage fx to add each member to the page.
function createMainHTML(message){
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <style>
            /* styles go here */
        </style>
      </head>
      <body>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Team Profile Generator
                    </h1>
                    <h2 class="subtitle">
                        @E-Huynh
                    </h2>
                </div>
            </div>
        </section>
        <section>
            ${ message }
        </section>
      </body>
    </html>`  
};

//Pass an object from teamArr using a loop to generated the message HTML for each obj.
function createMessage(obj){
    return `<article class="message">
  <div class="message-header">
    <p>${ obj.name }</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    <p>${ obj.role }</p>
    <p>${ obj.id }</p>
    <p>${ obj.email }</p>
  </div>
</article>`
}

module.exports = generateHTML;