# vue-switches

```bash
npm install --save github:bravf/vue-switches
```

```html
<vue-switches>
  <template v-slot="{ value, on, off, toggle }">
    <div v-if="value">这是一个弹层，balbabalbalblabla......</div>
    <button @click="on">显示弹层</button>
    <button @click="off">隐藏弹层</button>
    <button @click="toggle">toggle弹层</button>
  </template>
</vue-switches>
```
