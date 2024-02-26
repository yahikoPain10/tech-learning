-c config
-r recursive
-d outDir

-R readme Defaultls to README.md in the rootDir
  the README file's contents will be rendered in HTML 
  in the generated documentation's index.html file.

-u tutorials-dir
  Feature to provide detailed instructions for using your API
  such as getting started guide...

If you want to customize your own template
- copy paste node_modules/jsdoc/templates/default in the root directory
- and then change from the *.tmpl files or from the publisher.js file