## `"RSS Feeds`" 测试用例

1.编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。

```
    it('URL are defined and not empty', function() {
      allFeeds.forEach(function(index) {
        expect(index.url).toBeTruthy();
      });
    });
```

2.编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。

```
    it('name are defined and not be empty', function() {
      allFeeds.forEach(function(index) {
        expect(index.name).toBeTruthy();
      });
    });
```

## `"The menu`" 测试用例

1. 编写一个测试用例保证菜单元素默认是隐藏的。
2. 判断body标签是否有`".menu-hidden`" class，如果有表示隐藏了。
3. 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。
4. 一般我们在测试 **字符串是否为空** 或者 **变量的值是否为null** 时会使用 `toBeTruthy()` ；而当知道预期结果是一个布尔值时，推荐使用更具体、更安全的 `toBe(true)`。

```
    it(' The menu default is hidden', function() {
      expect($body.hasClass('menu-hidden')).toBeTruthy();
    });

    it('click menu icon can change state', function() {
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).not.toBe(true);
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBe(true);
    });
```

## `"Initial Entries`"测试用例

1.编写一个测试保证 loadFeed 函数被调用而且工作正常,判断 `".feed`"容器元素 里面有`" .entry`"的元素。使用`"beforeEach()`"和异步的`"done()`"函数。

```
    it('There is a loadFeed and it can work', function() {
      expect($(".feed .entry").length).not.toBe(0);
    });
```

## `"New Feed Selection`"测试用例

1.编写一个测试保证当用 `loadFeed` 函数加载一个新源的时候内容会真的改变。调用`"loadFeed(3, done)`" 不同的值，使用`"beforeEach()`"和异步的`"done()`"函数。

```
    it('load new content', function() {
      expect(content1).not.toBe(content2);
    });
```
