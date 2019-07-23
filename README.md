## mksign
----------------------------
author: bugszhou | Email:bugszhou@outlook.com <br>
description: A lib project with ziu

提供对API请求参数生成签名的基础库

### Usage

```shell
npm install -S mksign
```

使用默认的签名方式

```javascript
import { defaultSign } from 'mksign';

// 需要签名的数据
const secret = 'mock_secret';
const data = {
    param1: 'test',
    name: 'tom',
    sex: ''
};

const sign = defaultSign(data, [secret]);
```

- 默认签名机制：

1. 对参加签名的参数`data`的`key`值的`ASCII`码从小到大排序（字典排序），将指定的key值（即v1=value1&v2=value2&v3=value3）拼接成字符串stringA；
2. 在 stringA 最后拼接上`secret`得到待签名字符串stringB，并对stringB进行`sha256`运算，得到sign值。

> 1. 值为`null/undefined/''`的参数会直接忽略，不参与签名。


### API

#### defaultGetSignData(data:object, lastData: array[string, object])

对参加签名的参数`data`的`key`值的`ASCII`码从小到大排序（字典排序），将指定的key值（即v1=value1&v2=value2&v3=value3）拼接成字符串stringA；在 stringA 最后拼接上`lastData`得到待签名字符串stringB

#### defaultSign(data:object, lastData: array[string, object])

内部使用`defaultGetSignData`得到待签名字符串`stringB`，使用`sha256`对`stringB`运算得到签名值

#### getFilterData(data:object)

去除`data`中`null/undefined/''`的字段，并返回排序后的字段数组

```javascript
let filterData = getFilterData({
    v1: 1,
    v2: '',
    v3: null
});

console.log(filterData); // ['v1']
```

#### sort(data:object)

对参数`data`的`key`值的`ASCII`码从小到大排序（字典排序）,返回一个`key`数组

#### filterNull(data:object)

去除`data`中`null/undefined/''`的字段, 返回新的数据

```javascript
let filterData = filterNull({
    v1: 1,
    v2: '',
    v3: null
});
console.log(filterData); // {v1: 1}
```

#### getSignStr(data:array)

获取待签名字符串，`data`为key-value组成的二维数组；如果没有二维数组中的元素的数组长度为1，将拼接在字符串最后

```javascript
let signDataStr = getSignStr([['test'], ['v1', 1], ['v5', '2']]);

console.log(signDataStr); // v1=1&v5=2test
```
