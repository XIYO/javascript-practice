import remarkToc from 'https://esm.sh/remark-toc@9';
import {remark} from 'https://esm.sh/remark@15'

const doc = `
# TOC

# remkar-toc 테스트

마크다운을 변화하면 toc 가 만들어지 않는다. 원인을 찾아보자...

## Contents

## 내용1

내용입니다.

## 내용2

내용입니다.!
`

const file = await remark()
    .use(remarkToc, {heading: 'TOC'})
    .process(doc)

console.error(String(file))