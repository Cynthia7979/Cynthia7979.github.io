# `globals()`
When I meet the case when I have to have a dictionary of mutable global variables, I always implement it this way:

```python
global_vars = {}
global global_vars

def some_function():
	global_vars['foo'] = 'bar'
```

When I write it like this, my IDE always suggests some annoying function called `globals()` - what in the world is that??

And apparently I learned it soon - it is a built-in "`global_vars`", a `dict` with everything I need from `global_vars`.
There is actually no need to create a global dictionary by my own, Python already does that for me.

I can use it like this:

```python
def some_function():
	globals()['foo'] = 'bar'
```

Better start using it soon!

[RETURN](/Tech%20Stuff)
{:.right}
