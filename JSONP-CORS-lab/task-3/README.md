# Adding the Analytics Script Files - for AJAX

Let's write the AJAX-POST trace file first, and we call it `trace_jsonp.js`. We will store this file inside the project location:

```
+
|
+---- public/
|           |
|           +-- trace_ajax.js
|           |
|           +-- test_ajax.html
|
+---- api/
|        |
|        +-- api.js
|
+-- app.js
```

## Complete trace_ajax.js

In the incomplete code below, finish the following sub-tasks:

1. Create a `script` tag object;
2. The `src` field of the `script` tag is: [http://your-project.herokuapp.com/api/jsonp](http://your-project.herokuapp.com/api/jsonp);
3. Append this `script` tag object to `document.body`;

```javascript
function tracker() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "URL", true);   // plug in the correct URL //

	// Complete it by referring to our lecture notes //
}

window.addEventListener("load", tracker, false);
```

## Write a testing HTML page inside the project

Let's write a testing HTML, called `test_jsonp.html` to trigger the download of `trace_ajax.js`:

```html
<html>
	<body>
	</body>
	<script src="http://your-project.herokuapp.com/trace_ajax.js"></script>
</html>
```

## Testing

- Commit all your code;

- Type `git push heroku master`;

- Type `heroku open`;

- Visit [http://your-project.herokuapp.com/test_ajax.html](http://your-project.herokuapp.com/test_ajax.html) and use the Developer Tool in order to see if a request is send to `/api/ajax`.


## Adding the CORS header

If you wish to allow the AJAX script works when testing the program under the local host: `heroku local`, please modify the `api/api.js`

```javascript
router.route('/ajax').post(function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");  ## new stuff
    res.send({msg: 'request received'});
});
```

---
[Dr. WONG Tsz Yeung](http://www.cse.cuhk.edu.hk/~tywong)

