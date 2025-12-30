var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "overleaf-intro",
  "level": "1",
  "url": "overleaf-intro.html",
  "type": "Lab",
  "number": "1",
  "title": "Intro to LaTeX on Overleaf",
  "body": " Intro to LaTeX on Overleaf   While there are options to download and fine-tune software for creating and processing \\LaTeX documents on your machine, as a beginner it can be a daunting task to get all of the appropriate software and settings just right. To make things easy for us, we will be using Overleaf, an online LaTeX editor.      Create an Overleaf account and create your first project.    Use LaTeX commands and parameters to change the title of your document.    Introduce yourself to me, writing a few sentences about yourself separated by line breaks.    Use LaTeX formatting commands to write out your schedule for the term.    Save, download, and share your LaTeX project.      Setting up your account   To begin, visit Overleaf and click the \"sign up\" icon in the top right. You may link to a Google account, or create an account manually with your email and password. You will need to confirm your email address, then enter some details about yourself. You do not need the premium version , so go ahead and \"skip\" when you are offered the option.  Finally, you will reach a page with three options:  Create a new project  Learn LaTeX with a tutorial  Browse templates  The LaTeX tutorial may be a helpful second resource, with a lot of overlap with these LaTeX labs. Feel free to bookmark the link if you want to visit the tutorial later. For now, click Create a new project and select Blank project . Enter a title in the format \"lastname-lab-1\" (with your last name in place of \"lastname\", e.g. \"ramsey-lab-1\") and click Create.     Your first project   Take a look at what you see in the project page:  Along the top navigation bar, you should see the typical options File, Edit, Insert, View, Format, Help. In the center is the name of your document, and clicking the name gives you a few different options. On the right are some icons and a button to Share and Upgrade.  In the left column, there is a File Tree. Sometimes LaTeX projects can get very large and feature a multitude of files, and this is a way to keep track of them all in a nice structure. There are also some options like Project Search, Integrations, Review Panel, and Chat. For now, we only need one file in our file tree, and we don't need those other options. You can click the X icon at the top of the column to close the File Tree.  Now there are two major sections of your project: On the left is a Code Editor, and on the right is a PDF. We will be making edits to the code in the editor on the left, and then Overleaf will \"compile\" that code to decide what the PDF will look like.    Take a look at the PDF on the right. At the top of the page is the title: lastname-lab-1. That's not a very nice looking title! While the \"lastname-lab-1\" format is great for the name of the project itself, it is not a great title for the document itself. How can we change it?  Look on the left. The code currently looks like this:  \\begin{verbatim} \\documentclass{article} \\usepackage{graphicx} % Required for inserting images \\title{ramsey-lab-1} \\author{Miranda Ramsey} \\date{January 2025} \\begin{document} \\maketitle \\section{Introduction} \\end{document}  Every line has something in common: they each begin with a backslash (\\) followed by a word, and some of them then have additional stuff inside of {curly braces}. These backslash-word-bracket chunks are called commands . All commands have a backslash followed by a word. Sometimes commands stand by themselves, like \\maketitle . Others require a little more details, called parameters , which work like function inputs to tell LaTeX what you want the command to do.  For example, look at the line: \\title{ramsey-lab-1} Here, \"title\" is the command, with \"ramsey-lab-1\" as a parameter. Change the title by replacing the parameter with a new one of your choice. \\title{My First \\LaTeX{} Project} Now, click the \"Recompile\" button above the PDF, and see your changes in effect!   See how I used the \\LaTeX{} command, with no parameters, in my title? LaTeX has a command for printing the LaTeX logo: . Try it for yourself!      Introducing yourself with content   LaTeX uses environments to organize and process the content of your document. Presently, we are using one environment: the document environment, which is passed through the \\begin command on line 8 and the \\end command on line 14. Everything inside of the document environment gets printed as a part of the document. The stuff before \\begin{document} is called the preamble , which we will talk about in another lab.  The document currently has two parts: the \\maketitle command which takes the title information in the preamble and outputs it in a nice centered format on the first page, and the \\section{Introduction} command which creates the nice header for our first section. Try typing something on lines 9, 11, and 13 and compile to see what happens.  Naturally, where ever you add text between these commands determines where Latex places that content in the document. The \\maketitle command specifically creates a title page, so anything before it ends up on its own page. Go ahead and delete anything you typed on the line before \\maketitle .  Edit your document to add the following content:   In the line of text before the \\section , introduce the project. Something like \"This is a lab to learn how to create simple documents in LaTeX.\"    After the \\section command, write a few lines about yourself. Try putting sentences on different lines in the code and compile. You'll notice that LaTeX places all of the sentences in the same paragraph: this is line number 1 line number 2 is here three lines are not enough the final line gets printed exactly the same as this is line number 1 line number 2 is here three lines are not enough the final line LaTeX ignores the first line break in your code - this is something that allows you to keep your code nice and tidy, which you will come to appreciate - so in order to get line breaks in your document, you have to tell LaTeX that is what you want. You can do this multiple ways: this is line number 1 line number 2 is here\\\\ three lines are not enough\\newline the final line That is, you can use a second line break in the code (leaving an empty line between paragraphs), you can use a double backslash \\\\ , or you can use the command \\newline .  Use line breaks to put each sentence you wrote about yourself on a new line.     \\documentclass{article} \\usepackage{graphicx} % Required for inserting images \\title{My First \\LaTeX{} Project} \\author{Miranda Ramsey} \\date{January 2025} \\begin{document} \\ \\maketitle This is a lab to learn how to create simple documents in LaTeX. \\section{Introduction} I am a math instructor living in Portland, Oregon. I earned my Master's degree from Portland State University in 2021. My focus in grad school was Discrete Math, and I wrote most of my assignments in LaTeX! \\end{document}     Sections, Lists, and Text Formatting   Lets add a bit more to your document.   First, add a subsection after your introduction using the command \\subsection*{My Schedule} . Note that I added a * here. LaTeX automatically numbers sections, subsections, and other blocks. This tells LaTeX to suppress the numbering of the subsection. Try it both with and without the *. You can also add a * to the \\section*{Introduction} command if you like.    After the subsection, create a list environment by adding the commands \\begin{itemize} and \\end{itemize} . To add list items, use \\item on a new line inside of the environment.   Remember to \\end{} all environments that you \\begin{} ! If you forget, you will get an error when you try to compile.     Create an \\item for each class you are taking, and after the item command, type the course number, title, and days\/times if applicable.  \\begin{itemize} \\item MTH231 Elements of Discrete Mathematics I Tuesday\/Thursday 1:00PM - 3:40PM \\item WR240 Creative Writing (Non-Fiction) M\/W 10:30AM - 12:20 PM \\item BAS650 Graduate Studies in Underwater Basketweaving Online N\/A \\end{itemize}  Compile to check your list. You should get a bulleted list. Would you prefer a numbered list? Try the enumerate environment instead of itemize .    Now lets add some flavor to your text. The following commands are the basic formatting options you may be familiar with:    \\textbf{...} creates text.     \\textit{...} creates text.     \\underline{...} creates text.     Implement these by putting each course number in bold text, each course title in underline, and each day\/time in italics.  \\begin{itemize} \\item \\textbf{MTH231} \\underline{Elements of Discrete Mathematics I} \\textit{Tu\/Th 1:00PM - 3:40PM} \\item \\textbf{WR240} ... \\end{itemize}  Note how I use the fact that LaTex ignores line breaks to organize my code in a structured way so I can read it easily. It may be a pain to have to manually break lines, but maybe you can see how convenient it is in the end!     That's all you are required to do for this lab, but feel free to play around within the document environment. Add more sections, more paragraphs, more lists and formatting, as you desire.     Saving and sharing your document   When you are finished with your document, there are two parts of your project that you may want to share.   Most of the time, you want to share the PDF output - after all, that's what you came here for! Next to the \"Recompile\" button is an icon to download the PDF of your document.    Sometimes you will want to share the source code itself. Perhaps you are collaborating with someone, or want someone to review your code, or perhaps you want to share your code with your instructor to get credit for completing a lab assignment. To get the source code, click the document title at the top of the screen, and select Download as source (.zip) . This will compress all of your source files into a .zip file and download it.  In this case, the whole project is in one file (main.tex), but that won't always be the case. Go ahead and download the source .zip file to your computer.   Now you can upload the PDF and\/or ZIP files. Follow the instructions for your lab assignment.   Congratulations! You've completed your first LaTeX project!    "
},
{
  "id": "overleaf-intro-3",
  "level": "2",
  "url": "overleaf-intro.html#overleaf-intro-3",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Create an Overleaf account and create your first project.    Use LaTeX commands and parameters to change the title of your document.    Introduce yourself to me, writing a few sentences about yourself separated by line breaks.    Use LaTeX formatting commands to write out your schedule for the term.    Save, download, and share your LaTeX project.    "
},
{
  "id": "overleaf-intro-5-2-5",
  "level": "2",
  "url": "overleaf-intro.html#overleaf-intro-5-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commands parameters "
},
{
  "id": "overleaf-intro-6-2-1",
  "level": "2",
  "url": "overleaf-intro.html#overleaf-intro-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "environments preamble "
},
{
  "id": "overleaf-intro-7-2-1",
  "level": "2",
  "url": "overleaf-intro.html#overleaf-intro-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "list "
},
{
  "id": "overleaf-intro-8-2-1",
  "level": "2",
  "url": "overleaf-intro.html#overleaf-intro-8-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source code "
},
{
  "id": "math-symbols",
  "level": "1",
  "url": "math-symbols.html",
  "type": "Lab",
  "number": "2",
  "title": "Math and Symbols",
  "body": " Math and Symbols   Consider the difference between and   Notice how much nicer and more professional the second line looks! The most useful aspect of LaTeX is the ability to typeset good-looking mathematics. In this lab, you will use the amsmath package to present math symbols, equations, and show your work on multi-step problems.      Include a package in the preamble of a LaTeX document.    Write statements including inline mathematics.    Use the equation environment to present standalone equations.    Use the align environment to show your work as you simplify expressions and solve equations.      Setting up your project     Begin by creating a new blank project. Navigate to and click \"New Project\" in the top right. Name your project \"lastname-lab-2\" and then change the title in the \\title{} command like you did in Lab 1.    In order to use math language we want to include a package . LaTeX is a flexible tool that allows for all sorts of typesetting options with countless commands, and if your file included the code to use all of them, it would be very large. Instead, the code to compile different kinds of LaTeX features are stored in different packages, and you can pick the package you want. In this case, Overleaf automatically includes the graphicx package on line 2.  \\documentclass{article} \\usepackage{graphicx} % Required for inserting images \\title{Lab 2: Math and Symbols} ...  We don't need the graphicx package, but we do need the amsmath package. This is a package created by the American Math Society that adds extra math commands to your LaTeX file. To use the amsmath package, simply substitute amsmath into the usepackage parameter instead of graphicx .    The % symbol after the command starts a comment . This is text that does not get compiled. On any line, anything after a % will be ignored, so you can leave yourself little messages and explanations.  The comment that is there is for the graphicx package and you don't need it. Put a different comment there that is relevant to you, explaining why you are including amsmath .    Now your project is ready for math!     Writing inline mathematics with $...$   By \"inline\", we mean the math that appears in the middle of normal text, like if I wanted to discuss or tell you that a quadratic equation has the form .  To start, change the name of your Introduction section to \"The Pythagorean Theorem\". Write a paragraph in this section describing what you know about the Pythagorean Theorem, including what the letters stand for and what the equation is. To get the nice math font to display, place dollar signs around the math. For instance, $f(x) = x^2 + 2$ will be compiled to .  The dollar signs offer a quick way to begin and end an \"inline math\" environment, without a traditional backslash command.     Displaying math with equation   Sometimes an equation is really important and we want to prominently display it in the center of the page. For this we will use the equation environment which displays math like this: We will use the Quadratic Formula to demonstrate this environment.    Create a new section titled \"The Quadratic Formula\". Introduce the formula by first explaining that it provides solutions to equations of the form To display the equation this way, include the following code: \\begin{equation*} ax^2 + bx + c = 0 \\end{equation*} Note the following:   The environment has a \\begin{} and \\end{} command with equation* passed as a parameter.    The parameter includes a *. If you remove the *, it labels the equation with a number that you can reference later (think about how often you see this in textbooks!). I chose to have a * here to suppress the number; it's up to you if you want to include it.    The equation inside does not need dollar sign $...$ tags.       Explain how the quadratic formula is used, in your own words. Use inline mathematics when appropriate to talk about variables. When you are ready to state the formula, you want it to look like this: In addition to the \\begin{equation*}...\\end{equation*} tags, you will need the following commands:    \\frac{}{} creates a fraction. The first parameter becomes the numerator, the second becomes the denominator. For example, \\frac{x+1}{2} becomes .     \\pm proves the \"plus or minus\" symbol.     \\sqrt{} creates a square root symbol. For example, \\sqrt{x^2 + 2x + 1} becomes .          Aligning mathematics with align   When evaluating expressions or solving equations, we like to have the equals signs vertically aligned. If you just write each line as a separate equation , you won't get good results. For example: \\begin{equation*} (x + 1)(x + 2) = x^2 + x + 2x + 2 \\end{equation*} \\begin{equation*} = x^2 + 3x + 2 \\end{equation*} will display as    What we actually want will look more like this: To accomplish this, we use the align environment. \\begin{align*} (x + 1)(x + 2) &= x^2 + x + 2x + 2\\\\ &= x^2 + 3x + 2 \\end{equation*} Note the following:   The environment has a \\begin{} and \\end{} command with align* passed as a parameter.    The line is ended with a double backslash (see Lab 1).    The alignment is controlled by an ampersand sign &. Wherever you place this on each line will determine how LaTeX aligns the lines vertically.      You can include more than one & on each line, but the results may be hard to predict with your intuition. Try it out and see what you get! Each line should have the same number of & signs.   Now to apply this in your document.   Create a new section titled \"Expressions and Equations\". In this section, replicate the following: In addition to the \\begin{align*}...\\end{align*} tags, you will need the following commands:    \\neq creates the \"not equal\" sign.       Create a new section titled \"Expressions and Equations\". In this section, replicate the following: In addition to the \\begin{align*}...\\end{align*} tags, you will need the following commands:    \\notin creates the \"not in\" sign.     \\{ ... \\} to create curly braces in your math. Since curly braces are so common in LaTeX, the compiler gets confused if you use them on their own. The backslashes tell the compiler that you intend to use them as braces.           Saving and sharing your document   When you are finished with your document, download the PDF and ZIP files to upload and submit for your lab assignment.    "
},
{
  "id": "math-symbols-3",
  "level": "2",
  "url": "math-symbols.html#math-symbols-3",
  "type": "Objectives",
  "number": "2",
  "title": "",
  "body": "   Include a package in the preamble of a LaTeX document.    Write statements including inline mathematics.    Use the equation environment to present standalone equations.    Use the align environment to show your work as you simplify expressions and solve equations.    "
},
{
  "id": "math-symbols-4-2-1-2-1",
  "level": "2",
  "url": "math-symbols.html#math-symbols-4-2-1-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "package "
},
{
  "id": "math-symbols-4-2-1-3-1",
  "level": "2",
  "url": "math-symbols.html#math-symbols-4-2-1-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comment "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
