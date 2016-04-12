# Adding the Analytics Script Files - for JSONP

Let's write the JSONP trace file first, and we call it `trace_jsonp.js`. We will store this file inside the project location:

```
+
|
+---- public/
|           |
|           +-- trace_jsonp.js
|           |
|           +-- test_jsonp.html
|
+---- api/
|        |
|        +-- api.js
|
+-- app.js
```

## Complete trace_jsonp.js

In the incomplete code below, finish the following sub-tasks:

1. Create a `script` tag object;
2. The `src` field of the `script` tag is: [http://your-project.herokuapp.com/api/jsonp](http://your-project.herokuapp.com/api/jsonp);
3. Append this `script` tag object to `document.body`;

```javascript
function tracker() {
	// Complete it by referring to our lecture notes //
}

window.addEventListener("load", tracker, false);
```

## Write a testing HTML page inside the project

Let's write a testing HTML, called `test_jsonp.html` to trigger the download of `trace_jsonp.js`:

```html
<html>
	<body>
	</body>
	<script src="http://your-project.herokuapp.com/trace_jsonp.js"></script>
</html>
```

## Testing

- Commit all your code;

- Type `git push heroku master`;

- Type `heroku open`;

- Visit [http://your-project.herokuapp.com/test_jsonp.html](http://your-project.herokuapp.com/test_jsonp.html) and use the Developer Tool in order to see if a request is send to `/api/jsonp`.


## Any possible processing inside trace_jsonp.js?

Of course, you can refer to [our example tracking script](https://github.com/tywong/csci4140-analytics/blob/master/public/js/trace_jsonp.js) to learn how we can read the cookie stored inside browser, and then embed it inside the JSONP request.

---
[Dr. WONG Tsz Yeung](http://www.cse.cuhk.edu.hk/~tywong)

