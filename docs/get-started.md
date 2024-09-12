
# Javascript数据结构与算法

### JavaScript冒泡排序笔记

**冒泡排序是一种简单的排序算法。它通过反复交换相邻未按顺序排列的元素来逐步将较大的元素移动到数组的末尾。这个过程类似于“冒泡”，即较大的元素逐渐向上浮动到数组的最后位置。**

1. **比较相邻的两个元素，如果前一个元素比后一个元素大，则交换它们。**
2. **对每一对相邻元素重复上述步骤，从开始到结束，这样最大的元素会逐渐移动到数组的末尾。**
3. **忽略数组的最后一个元素（因为它已经是最大的），对剩余的数组重复上述步骤，直到所有元素都排好序。**

```javascript
// 冒泡排序函数
function bubbleSort(arr) {
    let len = arr.length;
    // 外层循环控制总共的遍历次数
    for (let i = 0; i < len; i++) {
        // 内层循环控制每次遍历的比较次数
        for (let j = 0; j < len - 1 - i; j++) {
            // 比较相邻的两个元素，如果前一个比后一个大，则交换它们
            if (arr[j] > arr[j + 1]) {
                // 交换元素
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 使用示例
let array = [5, 3, 8, 4, 2];
console.log("排序前：", array);
let sortedArray = bubbleSort(array);
console.log("排序后：", sortedArray);
```

1. **初始化** **： **

* `<span class="ne-text">len</span>`：存储数组的长度。
* **外层循环控制总共的遍历次数，范围从 **`<span class="ne-text">0</span>` 到 `<span class="ne-text">len</span>`，即需要遍历 `<span class="ne-text">len</span>` 次。
* **内层循环控制每次遍历的比较次数，范围从 **`<span class="ne-text">0</span>` 到 `<span class="ne-text">len - 1 - i</span>`，其中 `<span class="ne-text">i</span>` 是当前的遍历次数。随着每次遍历，最后一个元素已经是最大值，不需要再比较，因此范围减去 `<span class="ne-text">i</span>`。

2. **比较和交换** **： **

* **内层循环中，比较相邻的两个元素 **`<span class="ne-text">arr[j]</span>` 和 `<span class="ne-text">arr[j + 1]</span>`。
* **如果 **`<span class="ne-text">arr[j]</span>` 大于 `<span class="ne-text">arr[j + 1]</span>`，则交换它们的位置，确保较大的元素逐步向后移动。

3. **返回结果** **： **

* **所有遍历和比较完成后，返回排序后的数组。**

**冒泡排序的一个常见优化是设置一个标志来检测是否进行了交换。如果在一次完整的遍历中没有交换任何元素，则表示数组已经排序好，可以提前结束。**

```javascript
function bubbleSortOptimized(arr) {
    let len = arr.length;
    let swapped;
    for (let i = 0; i < len; i++) {
        swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // 记录交换动作
            }
        }
        if (!swapped) { // 如果没有交换，提前结束排序
            break;
        }
    }
    return arr;
}

// 使用示例
let arrayOptimized = [5, 3, 8, 4, 2];
console.log("优化前排序前：", arrayOptimized);
let sortedArrayOptimized = bubbleSortOptimized(arrayOptimized);
console.log("优化后排序后：", sortedArrayOptimized);
```

1. **初始化标志** **： **

* `<span class="ne-text">swapped</span>`：标志位，记录当前遍历是否进行了交换。

2. **检测交换** **： **

* **内层循环中，如果进行了交换，将 **`<span class="ne-text">swapped</span>` 设为 `<span class="ne-text">true</span>`。
* **如果一次完整的遍历后 **`<span class="ne-text">swapped</span>` 仍为 `<span class="ne-text">false</span>`，表示数组已经排序好，可以提前结束外层循环。

**冒泡排序是一种简单但效率较低的排序算法，特别适用于小规模数据集。优化后的版本通过检测交换动作，可以在某些情况下减少不必要的遍历，提升性能。**

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
               // 结构赋值交换变量
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                //相当于 
                // let temp=arr[j+1]
                // arr[j+1]=arr[j]
                // arr[j]=temp
            }
        }
    }
    return arr;
}
let x=bubbleSort([1,6,4,7,3,2,9])
console.log(x)
```

### 选择排序 (Selection Sort)

```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
```

### 插入排序 (Insertion Sort)

```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
```

### 快速排序 (Quick Sort)

```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== Math.floor(arr.length / 2)) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
```

### 归并排序 (Merge Sort)

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}
```

**可以使用以下代码来测试上述排序函数：**

```javascript
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);

console.log("Bubble Sort:", bubbleSort([...arr]));
console.log("Selection Sort:", selectionSort([...arr]));
console.log("Insertion Sort:", insertionSort([...arr]));
console.log("Quick Sort:", quickSort([...arr]));
console.log("Merge Sort:", mergeSort([...arr]));
```

**这些是常见排序算法的 JavaScript 实现，可以用于不同的场景和需求。**

[史上超强最常用SQL语句大全-CSDN博客](https://blog.csdn.net/promsing/article/details/112793260)

### Javascript栈结构

**下面是封装好的JavaScript栈结构类，并附带详细的注释和笔记：**

```javascript
// 定义一个栈结构类
class Stack {
    // 构造函数，初始化一个空数组来存储栈的元素
    constructor() {
        this.items = [];  // 存储栈元素的数组
    }

    // 入栈方法，向栈顶添加一个元素
    push(item) {
        this.items.push(item);
    }

    // 出栈方法，从栈顶移除一个元素，并返回该元素
    pop() {
        return this.items.pop();
    }

    // 获取栈顶元素的方法，但不移除该元素
    top() {
        return this.items[this.items.length - 1];
    }

    // 判断栈是否为空的方法
    isEmpty() {
        return this.items.length === 0;
    }

    // 获取栈中元素个数的方法
    size() {
        return this.items.length;
    }

    // 清空栈的方法
    clear() {
        this.items = [];
    }

    // 将栈中的元素转换为字符串的方法，用空格分隔每个元素
    toString() {
        return this.items.join(" ");
    }
}

// 创建一个栈实例
let stack = new Stack();

// 使用示例
stack.push(1);          // 入栈元素1
stack.push(2);          // 入栈元素2
console.log(stack.top());   // 输出栈顶元素，结果为2
console.log(stack.pop());   // 出栈，输出并移除栈顶元素，结果为2
console.log(stack.isEmpty()); // 判断栈是否为空，结果为false
console.log(stack.size());    // 获取栈中元素个数，结果为1
stack.clear();           // 清空栈
console.log(stack.isEmpty()); // 判断栈是否为空，结果为true
console.log(stack.toString()); // 将栈转换为字符串，结果为空字符串
```

1. **构造函数 (** `<strong><span class="ne-text">constructor</span></strong>` **)** **： **

* **构造函数用于初始化栈的内部数据结构。在这个例子中，使用一个数组 **`<span class="ne-text">items</span>` 来存储栈的元素。

2. **入栈 (** `<strong><span class="ne-text">push(item)</span></strong>` **)** **： **

* **入栈操作向栈顶添加一个新元素。调用数组的 **`<span class="ne-text">push</span>` 方法来实现。

3. **出栈 (** `<strong><span class="ne-text">pop()</span></strong>` **)** **： **

* **出栈操作从栈顶移除一个元素，并返回该元素。调用数组的 **`<span class="ne-text">pop</span>` 方法来实现。

4. **获取栈顶元素 (** `<strong><span class="ne-text">top()</span></strong>` **)** **： **

* **获取栈顶元素但不移除该元素。通过访问数组的最后一个元素实现。**

5. **判断栈是否为空 (** `<strong><span class="ne-text">isEmpty()</span></strong>` **)** **： **

* **检查栈是否为空。如果 **`<span class="ne-text">items</span>` 数组的长度为零，则栈为空。

6. **获取栈的大小 (** `<strong><span class="ne-text">size()</span></strong>` **)** **： **

* **返回栈中元素的个数。直接返回数组的长度。**

7. **清空栈 (** `<strong><span class="ne-text">clear()</span></strong>` **)** **： **

* **清空栈的所有元素。将 **`<span class="ne-text">items</span>` 数组重新赋值为空数组。

8. **将栈转换为字符串 (** `<strong><span class="ne-text">toString()</span></strong>` **)** **： **

* **返回栈中所有元素的字符串表示，元素之间用空格分隔。调用数组的 **`<span class="ne-text">join</span>` 方法实现。

**创建一个 **`<span class="ne-text">Stack</span>` 类的实例并演示常见操作，如入栈、出栈、获取栈顶元素、检查栈是否为空、获取栈的大小、清空栈和将栈转换为字符串。

**示例代码**

```javascript
// 定义一个将十进制数转换为二进制数的函数
function jinZhiZhuanHuan(num) {
    let number = num;  // 要转换的十进制数
    let string = "";   // 存储转换后的二进制字符串
    let stack = new Stack();  // 创建一个栈实例

    // 将十进制数转换为二进制数，存入栈中
    while (number > 0) {
        stack.push(number % 2);  // 将当前数对2取余（得到二进制的一个位）存入栈中
        number = Math.floor(number / 2);  // 将当前数除以2并向下取整
    }

    // 从栈中取出二进制位，组成二进制字符串
    while (!stack.isEmpty()) {
        string += stack.pop();  // 将栈顶元素（即二进制位）拼接到字符串中
    }

    return string;  // 返回转换后的二进制字符串
}
```

### Javascript队列结构

**下面是封装好的JavaScript队列结构类，并附带详细的注释和笔记：**

```javascript
// 定义一个队列结构类
class Queue {
    // 构造函数，初始化一个空数组来存储队列的元素
    constructor() {
        this.#items = [];  // 存储队列元素的数组
    }

    // 私有属性，用于存储队列的元素
    #items = [];

    // 入队方法，向队尾添加一个元素
    ru(item) {
        this.#items.push(item);
    }

    // 出队方法，从队头移除一个元素，并返回该元素
    chu() {
        return this.#items.shift();
    }

    // 获取队头元素的方法，但不移除该元素
    front() {
        return this.#items[0];
    }

    // 判断队列是否为空的方法
    isEmpty() {
        return this.#items.length === 0;
    }

    // 获取队列中元素个数的方法
    size() {
        return this.#items.length;
    }

    // 清空队列的方法
    clear() {
        this.#items = [];
    }

    // 将队列中的元素转换为字符串的方法，用空格分隔每个元素
    toString() {
        return this.#items.join(" ");
    }
}

// 创建一个队列实例
let queue = new Queue();

// 使用示例
queue.ru(1);             // 入队元素1
queue.ru(2);             // 入队元素2
console.log(queue.front());  // 输出队头元素，结果为1
console.log(queue.chu());    // 出队，输出并移除队头元素，结果为1
console.log(queue.isEmpty()); // 判断队列是否为空，结果为false
console.log(queue.size());    // 获取队列中元素个数，结果为1
queue.clear();            // 清空队列
console.log(queue.isEmpty()); // 判断队列是否为空，结果为true
console.log(queue.toString()); // 将队列转换为字符串，结果为空字符串
```

1. **构造函数 (** `<strong><span class="ne-text">constructor</span></strong>` **)** **： **

* **构造函数用于初始化队列的内部数据结构。在这个例子中，使用一个数组 **`<span class="ne-text">#items</span>` 来存储队列的元素。

2. **入队 (** `<strong><span class="ne-text">ru(item)</span></strong>` **)** **： **

* **入队操作向队尾添加一个新元素。调用数组的 **`<span class="ne-text">push</span>` 方法来实现。

3. **出队 (** `<strong><span class="ne-text">chu()</span></strong>` **)** **： **

* **出队操作从队头移除一个元素，并返回该元素。调用数组的 **`<span class="ne-text">shift</span>` 方法来实现。

4. **获取队头元素 (** `<strong><span class="ne-text">front()</span></strong>` **)** **： **

* **获取队头元素但不移除该元素。通过访问数组的第一个元素实现。**

5. **判断队列是否为空 (** `<strong><span class="ne-text">isEmpty()</span></strong>` **)** **： **

* **检查队列是否为空。如果 **`<span class="ne-text">#items</span>` 数组的长度为零，则队列为空。

6. **获取队列的大小 (** `<strong><span class="ne-text">size()</span></strong>` **)** **： **

* **返回队列中元素的个数。直接返回数组的长度。**

7. **清空队列 (** `<strong><span class="ne-text">clear()</span></strong>` **)** **： **

* **清空队列的所有元素。将 **`<span class="ne-text">#items</span>` 数组重新赋值为空数组。

8. **将队列转换为字符串 (** `<strong><span class="ne-text">toString()</span></strong>` **)** **： **

* **返回队列中所有元素的字符串表示，元素之间用空格分隔。调用数组的 **`<span class="ne-text">join</span>` 方法实现。

**创建一个 **`<span class="ne-text">Queue</span>` 类的实例并演示常见操作，如入队、出队、获取队头元素、检查队列是否为空、获取队列的大小、清空队列和将队列转换为字符串。

**击鼓传花**

```javascript
// 定义一个队列结构类
class Queue {
    // 构造函数，初始化一个空数组来存储队列的元素
    constructor() {
        this.#items = [];  // 存储队列元素的数组
    }

    // 私有属性，用于存储队列的元素
    #items = [];

    // 入队方法，向队尾添加一个元素
    ru(item) {
        this.#items.push(item);
    }

    // 出队方法，从队头移除一个元素，并返回该元素
    chu() {
        return this.#items.shift();
    }

    // 获取队头元素的方法，但不移除该元素
    front() {
        return this.#items[0];
    }

    // 判断队列是否为空的方法
    isEmpty() {
        return this.#items.length === 0;
    }

    // 获取队列中元素个数的方法
    size() {
        return this.#items.length;
    }

    // 清空队列的方法
    clear() {
        this.#items = [];
    }

    // 将队列中的元素转换为字符串的方法，用空格分隔每个元素
    toString() {
        return this.#items.join(" ");
    }
}

// 定义一个游戏函数
function game(list, num) {
    let queue = new Queue();
    // 将列表中的每个元素入队
    for (let i = 0; i < list.length; i++) {
        queue.ru(list[i]);
    }

    // 模拟游戏过程
    while (queue.size() > 1) {
        // 将前 num - 1 个元素出队并重新入队
        for (let j = 0; j < num - 1; j++) {
            queue.ru(queue.chu());
        }
        // 出队第 num 个元素（即淘汰该元素）
        console.log(queue.chu(), "淘汰了");
    }

    // 输出最后剩下的胜利者
    console.log(queue.chu(), "胜利了");
}

// 运行游戏函数
game(['kerwin', 'xiaoming', 'tiechui', 'gangdan', 'guludunzi'], 7);
```

### Javascript双端队列

**以下是带有注释和笔记的代码：**

```javascript
// 定义双端队列类
class Deque {
    constructor() {
        this.items = []; // 初始化一个空数组用于存储队列元素
    }

    // 从队列前端插入元素
    pushFront(value) {
        this.items.unshift(value); // 使用unshift方法在数组前端插入元素
    }

    // 从队列后端插入元素
    pushBack(value) {
        this.items.push(value); // 使用push方法在数组后端插入元素
    }

    // 从队列前端删除元素
    popFront() {
        return this.items.shift(); // 使用shift方法从数组前端删除元素并返回该元素
    }

    // 从队列后端删除元素
    popBack() {
        return this.items.pop(); // 使用pop方法从数组后端删除元素并返回该元素
    }

    // 返回队列的大小
    size() {
        return this.items.length; // 返回数组的长度，即队列的大小
    }

    // 检查队列是否为空
    isEmpty() {
        return this.items.length == 0; // 如果数组长度为0，则队列为空，返回true
    }

    // 查看队列前端的元素
    peekFront() {
        return this.items[0]; // 返回数组的第一个元素
    }

    // 查看队列后端的元素
    peekBack() {
        return this.items[this.items.length - 1]; // 返回数组的最后一个元素
    }

    // 将队列转换为字符串
    toString() {
        return this.items.join(""); // 将数组元素连接成字符串
    }

    // 清空队列
    clear() {
        this.items = []; // 将数组重置为空数组
    }
}

// 回文检查器函数
function huiwen(str) {
    // 将字符串转换为小写并去掉空格
    let string = str.toLowerCase();
    let strs = string.split(" ").join("");
    let deque = new Deque(); // 创建一个双端队列实例

    // 将字符串中的每个字符依次插入队列后端
    for (let i = 0; i < strs.length; i++) {
        deque.pushBack(strs[i]);
    }

    let isEqutry = true; // 初始化一个标志变量为true，用于判断是否为回文

    // 当队列的大小大于1时，进行比较
    while (deque.size() > 1) {
        // 如果从前端和后端取出的元素不相等，则不是回文
        if (deque.popBack() !== deque.popFront()) {
            isEqutry = false; // 设置标志变量为false
            break; // 跳出循环
        }
    }

    return isEqutry; // 返回是否为回文的结果
}

// 调用回文检查器函数并输出结果
console.log(huiwen("A a  b")); // 输出：false，因为 "A a b" 不是回文
```

1. **Deque类的定义** **： **

* **Deque（双端队列）是一种数据结构，允许从前端和后端进行插入和删除操作。**
* `<span class="ne-text">pushFront(value)</span>`和 `<span class="ne-text">pushBack(value)</span>`分别在前端和后端插入元素。
* `<span class="ne-text">popFront()</span>`和 `<span class="ne-text">popBack()</span>`分别从前端和后端删除元素。
* **其他方法包括** `<span class="ne-text">size()</span>`、`<span class="ne-text">isEmpty()</span>`、`<span class="ne-text">peekFront()</span>`、`<span class="ne-text">peekBack()</span>`、`<span class="ne-text">toString()</span>`和 `<span class="ne-text">clear()</span>`。

2. **回文检查器** **： **

* **回文是指正读和反读都相同的字符串。**
* `<span class="ne-text">huiwen</span>`函数用于检查输入字符串是否为回文。
* **函数首先将字符串转换为小写，并去掉所有空格。**
* **使用** `<span class="ne-text">Deque</span>`类，将字符串的每个字符依次插入到队列中。
* **然后通过比较从前端和后端取出的字符，检查它们是否相同。**
* **如果在比较过程中发现字符不相同，则该字符串不是回文。**

**Javascript链表 **

# Javascript API

### JavaScript DOM操作

![](https://img-blog.csdnimg.cn/img_convert/44e343e918282035f4716d02c2939e94.png)

### JavaScript 变量

![](https://img-blog.csdnimg.cn/img_convert/3aaab17d9c06bd8270ea299f53ec8206.png)

### JavaScript 运算符

![](https://img-blog.csdnimg.cn/img_convert/144c0e8754522719130b687f833b722a.png)

### JavaScript 流程语句

![](https://img-blog.csdnimg.cn/img_convert/9fe849b64d37fcfabc181fc9a7dc7f41.png)

### JavaScript 函数

![](https://img-blog.csdnimg.cn/img_convert/88bfda6834178531693f3c1590143116.png)

### JavaScript 数组

### JavaScript 字符串

![](https://img-blog.csdnimg.cn/img_convert/39cb9b798450e82aa84a18bf73337ed4.png)

### JavaScript 正则表达式

![](https://img-blog.csdnimg.cn/img_convert/4fb150ee235fb4467172f644ac1c4cd8.png)

# 手撕题

### proxy代理

```javascript
person = new Proxy(person, {
 get(target) {
   return target.age
 },
 set(target, key, newVal) {
   if(newVal < 0) {
     target.age = 0
   } else if(newVal > 150) {
     target.age = 150
   } else {
     target.age = newVal
   }
 }
})
const ok=computed(()={
 return person.age>150?"Over 150":person.age<0?"Under 0":person.age
})
const okk=computed(
 {
   get() {
  return person.age>150?"Over 150":person.age<0?"Under 0":person.age
 },
 set(){
   person.age=person.age>150?150:person.age<0?0:person.age
 }
 }
)
watch(count,(val,pre){
 console.log(count,pre)
})
```

### 手写节流防抖

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<input type="text" id="input">

</body>
<script>
	// 防抖
	let input=document.querySelector("#input")
	input.oninput=fangdou(function(){
		console.log(this.value)
	},3000)
	function fangdou(fn,delay){
     let timer=null
		 return function(){
			if(timer){
				clearTimeout(timer)
			}
			timer=setTimeout(()=>{
				fn.call(this)
				timer=true
			},delay)
		 }
	}
	// 节流
	// let input=document.querySelector("#input")
	// input.oninput=fangdou(function(){
	// 	console.log(this.value)
	// },1000)
	// function fangdou(fn,delay){
  //    let timer=true
	// 	 console.log(this)
	// 	 return function(){
	// 		if(timer){
	// 			timer=setTimeout(()=>{
	// 				console.log(this)
	// 			fn.call(this)
	// 			timer=true
	// 		},delay)
	// 		}
  //    timer=false
	// 	 }
	// }
</script>
</html>
```

### JS深拷贝与浅拷贝

**定义：在JS中，深拷贝和浅拷贝是针对对象（Object）和数组（Array）这类复杂数据类型复制时的概念。**

**浅拷贝： 当进行浅拷贝时，只是将对象或数组的引用复制一份给新的变量。这意味着新旧变量指向的是同一个内存空间中的数据结构，修改其中一个变量会影响到另一个变量，因为它们实际上是共享同一份数据。**

**深拷贝： 则是创建一个与原对象完全独立的对象副本，对于原对象内部所包含的所有层级的数据（包括嵌套的对象或数组），都会递归地进行复制，从而保证了新旧对象间不存在任何共享的引用。**
二、浅拷贝
1、Object.assign()
Object.assign() 基本用法：将一个或多个源对象的属性复制到目标对象，并返回目标对象。这一过程是浅拷贝的，即对于嵌套对象或数组，只是拷贝了引用而非创建新的对象。
示例：

```javascript
const obj = {
   a: 1,
   b: {
     c: 2
   },
   d: ["e"]
};
const cloneObj = Object.assign({}, obj);
cloneObj.b.c = 3; // 修改拷贝后的对象

console.log("obj: ", obj);
console.log("cloneObj: ", cloneObj);
```

![](https://img-blog.csdnimg.cn/direct/77ab37c0d6394ee293c28cf5bc816eb4.png)

**从结果可以看到，修改 clonedObj 的属性也会影响到原始对象 obj，所以Object.assign()实现的是浅拷贝。**

**2、利用es6扩展运算符（…）**
在ES6中，...运算符被称为扩展（Spread）运算符，可以用于数组和对象的浅拷贝。
示例1：拷贝对象

```javascript
const obj2 = {
  a: 1,
  b: {
    c: 2
  },
  d: ["hello"]
};
const cloneObj2 = { ...obj2 };
cloneObj2.b.c = 2222222;

console.log("obj2: ", obj2);
console.log("cloneObj2: ", cloneObj2);
```

![](https://img-blog.csdnimg.cn/direct/1b1437c8ce40477a9dcbe37267939a0e.png)

**结果：**

**示例2：拷贝数组**

```plain
const arr = ["1", { a: 2 }, 3, true, undefined];
const arrClone = [...arr];
arrClone[0] = "first"; // 修改数组第1个元素
arrClone[1].a = "hello"; // 修改数组第2个元素

console.log("arr: ", arr);
console.log("arrClone: ", arrClone);
```

![](https://img-blog.csdnimg.cn/direct/5f908442f85b4ae0a9dec66b59809f33.png)

**结果：**

**从...拷贝数组结果来看，原始数组和拷贝数组是独立的，但由于数组中包含的对象引用并未改变，所以修改拷贝数组中对象的属性时，原始数组中对应的对象也会受到影响。**

**也就是说，对于简单数组，...可以实现数组深拷贝，但是复杂数组…则不能用做实现深拷贝的方法。**

**二、深拷贝**
1、JSON 序列化和反序列化
利用 JSON 的序列化和反序列化可以实现对象的深拷贝。原理是：JSON.stringify()会递归遍历对象的所有属性（包括嵌套的对象和数组），将其转换为JSON字符串；然后JSON.parse()则会根据JSON字符串创建新的JavaScript对象。

**示例：**

```javascript
const obj1 = {
	a: 1,
	b: {
	   c: 2
	},
	d: ["hello"]
};
const cloneObj1 = JSON.parse(JSON.stringify(obj1));
cloneObj1.b.c = 3;

console.log("obj1: ", obj);
console.log("cloneObj1: ", cloneObj);
```

**结果：**

**从结果看到，修改拷贝后的对象其中的属性值，并不会改变原对象的属性值，所以实现的是一个深拷贝。**

**！！！注意这种方法有局限：**

**它不能处理函数和RegExp等非JSON兼容类型。**
对象中的循环引用会导致错误或丢失数据。
如果对象中有undefined、function或symbol类型的属性，它们在序列化过程中会被忽略。
对日期对象，JSON.stringify会将日期转换为字符串，所以反序列化后得到的是字符串而不是Date对象，如果需要保持日期类型，需要额外处理。

**2、js原生代码实现**
简单版：只考虑普通对象属性，不考虑内置对象和函数

```javascript
 function deepClone1(obj) {
   if (typeof obj !== "object") return;
   let newObj = obj instanceof Array ? [] : {};
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       newObj[key] =
         typeof obj[key] === "object" ? deepClone1(obj[key]) : obj[key];
     }
   }
   return newObj;
 }
  
// 测试
const obj5 = {
  a: 1,
  b: {
    c: 2
  },
  d: ["hello"],
  e: new Date(),
  f: new Error("error"),
  g: new RegExp("/^(.*\..{4}).*$/")
};
const cloneObj5 = deepClone1(obj5);
cloneObj5.b.c = "hhhhhh";

console.log("obj5: ", obj5);
console.log("cloneObj5: ", cloneObj5);
```

**结果：**![](https://img-blog.csdnimg.cn/direct/c54eb0e715264bc0b68ff00408e0a0f4.png)

**【推荐】复杂版：考虑内置对象比如Date、RegExp等对象和函数以及解决循环引用的问题。**
// 判断是否为object类型

```javascript
// 判断是否为object类型
function isObject(target) {
   return (
     (typeof target === "object" && target) || typeof target === "function"
   );
 }
function deepClone(data, map = new WeakMap()) {
	 // 基础类型直接返回值
	 if (!isObject(data)) {
	   return data;
	 }
	 // 日期或者正则对象则直接构造一个新的对象返回
	 if ([Date, RegExp].includes(data.constructor)) {
	   return new data.constructor(data);
	 }
	 // 处理函数对象
	 if (typeof data === "function") {
	   return new Function("return " + data.toString())();
	 }
	 // 如果该对象已存在，则直接返回该对象
	 const exist = map.get(data);
	 if (exist) {
	   return exist;
	 }
    // 处理Map对象
    if (data instanceof Map) {
      const result = new Map();
      map.set(data, result);
      data.forEach((val, key) => {
        // 注意：map中的值为object的话也得深拷贝
        if (isObject(val)) {
          result.set(key, deepClone(val));
        } else {
          result.set(key, val);
        }
      });
      return result;
    }
   // 处理Set对象
   if (data instanceof Set) {
     const result = new Set();
     map.set(data, result);
     data.forEach(val => {
       if (isObject(val)) {
         // 注意：set中的值为object的话也得深拷贝
         result.add(deepClone(val));
       } else {
         result.add(val);
       }
     });
     return result;
   }
  // 收集键名（考虑了以Symbol作为key以及不可枚举的属性）
   const keys = Reflect.ownKeys(data);
   // 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性以及对应的属性描述
   const allDesc = Object.getOwnPropertyDescriptors(data);
   // 结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链， 这里得到的result是对data的浅拷贝
   const result = Object.create(Object.getPrototypeOf(data), allDesc);
   // 新对象加入到map中，进行记录
   map.set(data, result);
   // Object.create()是浅拷贝，所以要判断并递归执行深拷贝
   keys.forEach(key => {
      const val = data[key];
      if (isObject(val)) {
        // 属性值为 对象类型 或 函数对象 的话也需要进行深拷贝
        result[key] = deepClone(val);
      } else {
        result[key] = val;
      }
    });
    return result;
}

// 测试
const obj4 = {
  a: 1,
  b: {
    c: 2
  },
  d: ["hello"],
  e: new Date(),
  f: new Error("error"),
  g: new RegExp("/^(.*\..{4}).*$/")
};
const cloneObj4 = deepClone(obj4);
cloneObj4.b.c = "hhhhhh";

console.log("obj4: ", obj4);
console.log("cloneObj4: ", cloneObj4);
```

**3、使用第三方库lodash等**

### Js 中 Object.keys() 方法：解析对象属性的利器

**Object.keys() 是 JavaScript 中用于获取对象自身可枚举属性名称的方法。虽然这个方法看似简单，但它在处理**[对象属性](https://so.csdn.net/so/search?q=%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7&spm=1001.2101.3001.7020)和操作数据时非常重要。下面我将详细解释 Object.keys() 的作用、语法和用法，以及它在实际编程中的应用。

*1.什么是 Object.keys()?*

**Object.keys() 是一个用于返回一个给定对象自身可枚举属性的名称的方法，返回的是一个由属性名称组成的数组。这个方法并不会列出**[原型链](https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1001.2101.3001.7020)上的属性，它只会返回对象自身的属性名称。

**Object.keys() 的语法非常简单：**

```javascript
Object.keys(obj)
```

**obj： 要获取属性名称的对象。**

**一个由给定对象自身可枚举的字符串键属性键组成的数组。**

**3.用法示例**

**如何使用 Object.keys()**

```javascript
// 简单数组
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']
 
// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']
 
// 键的顺序随机的类数组对象
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']
 
// getFoo 是一个不可枚举的属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

**4.应用场景**

**1.迭代对象属性**

**Object.keys() 可以用于迭代对象的属性，进行各种操作，比如计算属性的数量或者筛选特定类型的属性**

```javascript
const person = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com'
};
 
const propertyCount = Object.keys(person).length;
console.log(propertyCount); // Output: 3
```

**2.过滤属性**

**你可以使用 Object.keys() 结合 Array 的 filter 方法来过滤对象的特定属性。**

```javascript
const person = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com',
  isAdmin: true
};
 
const nonAdminKeys = Object.keys(person).filter(key => key !== 'isAdmin');
console.log(nonAdminKeys); // Output: ['name', 'age', 'email']
```

**3.遍历和映射属性**

**通过 Object.keys()，你可以遍历对象的属性，并进行操作或者映射。**

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35
};
 
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// firstName: John
// lastName: Doe
// age: 35
```

**5.注意事项**
Object.keys() 返回的属性名称是一个数组，属性的顺序与添加到对象中的顺序一致，但在一些 JavaScript 引擎中可能不一致。
它只返回对象自身可枚举的属性名称，不包括继承的属性名称。
6.总结
Object.keys() 是 JavaScript 中一个简单却强大的方法，它允许你获取对象的属性名称，并在实际编程中有着广泛的应用。通过该方法，你可以轻松地迭代对象属性、计算属性的数量、过滤特定类型的属性或者对属性进行遍历和映射。这使得它成为 JavaScript 开发中不可或缺的一部分。
