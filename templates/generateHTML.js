//Pass the message HTML from createMessage fx to add each member to the page.
function createMainHTML(message){
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <style>
            /* styles go here if needed */
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
            <div class="columns is-multiline is-4">
                ${ message }
            </div>
        </section>
      </body>
    </html>`  
};

//Pass an object from teamArr using a loop to generated the message HTML for each obj.
function createMessage(obj){
    let specificInfo;
    switch(obj.getRole()) {
        case "Manager":
            specificInfo = `Office number: ${ obj.getOfficeNumber() }`;
            break;
        case "Engineer":
            specificInfo = `Github username: ${ obj.getGithub() }`;
            break;
        case "Intern":
            specificInfo = `School: ${ obj.getSchool() }`;
            break;
        default:
            console.log("No role found");
    }
    return `<div class="column is-one-third">
    <article class="message">
        <div class="message-header is-block">
          <p class="is-size-3">${ obj.getName() }</p>
          <p class="is-size-5">${ obj.getRole() }</p>
        </div>
        <div class="message-body">
          <p>ID: ${ obj.getId() }</p>
          <p>Email: ${ obj.getEmail() }</p>
          <p>${ specificInfo }</p>
        </div>
      </article>
</div>\n`
}

module.exports = {
    createMainHTML: createMainHTML,
    createMessage: createMessage
};


