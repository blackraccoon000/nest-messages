# nest-cli

❯ npm install -g @nestjs/cli

```
changed 268 packages, and audited 269 packages in 18s

39 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
❯ nest new messages
zsh: correct 'nest' to 'Xnest' [nyae]? ⚡
```

n 押下 -> We will scaffold your app in a few seconds..

setup start

```
CREATE messages/.eslintrc.js (631 bytes)
CREATE messages/.prettierrc (51 bytes)
CREATE messages/README.md (3339 bytes)
CREATE messages/nest-cli.json (64 bytes)
CREATE messages/package.json (1964 bytes)
CREATE messages/tsconfig.build.json (97 bytes)
CREATE messages/tsconfig.json (365 bytes)
CREATE messages/src/app.controller.spec.ts (617 bytes)
CREATE messages/src/app.controller.ts (274 bytes)
CREATE messages/src/app.module.ts (249 bytes)
CREATE messages/src/app.service.ts (142 bytes)
CREATE messages/src/main.ts (208 bytes)
CREATE messages/test/app.e2e-spec.ts (630 bytes)
CREATE messages/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? yarn
✔ Installation in progress... ☕

🚀  Successfully created project messages
👉  Get started with the following commands:

$ cd messages
$ yarn run start


                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.


               🍷  Donate: https://opencollective.com/nest

```

# create setup

|                  Pipe                  |             MessageController              |     MessageService      | MessageRepository |
| :------------------------------------: | :----------------------------------------: | :---------------------: | :---------------: |
| Validate data contained in the request | Route the request to a particular function | Run some business logic | Access a database |
|                                        |               MessageModule                |                         |                   |

## 実行

`"start:dev": "nest start --watch"`

上記実行で起動

localhost:3000 でアクセス可能 Hello World が出る。

```
[13:37:18] Found 0 errors. Watching for file changes.

[Nest] 50748  - 2021/07/26 13:37:23     LOG [NestFactory] Starting Nest application...
[Nest] 50748  - 2021/07/26 13:37:23     LOG [InstanceLoader] AppModule dependencies initialized +67ms
[Nest] 50748  - 2021/07/26 13:37:23     LOG [RoutesResolver] AppController {/}: +26ms
[Nest] 50748  - 2021/07/26 13:37:23     LOG [RouterExplorer] Mapped {/, GET} route +6ms
[Nest] 50748  - 2021/07/26 13:37:23     LOG [NestApplication] Nest application successfully started +5ms
```

## はじめから作成してみる。

src ディレクトリの main.ts 以外のファイルを削除

`❯ nest generate module messages`

```
❯ nest generate module messages
CREATE src/messages/messages.module.ts (85 bytes)
```

```js
// messages.module.ts
import { Module } from '@nestjs/common'

@Module({})
export class MessagesModule {}
```

```js
// main.ts
import { NestFactory } from '@nestjs/core'
import { MessagesModule } from './messages/messages.module'

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule)
  await app.listen(3000)
}
bootstrap()
```

### Controller の作成

`❯ nest generate controller messages/messages --flat`

```
❯ nest generate controller messages/messages --flat
CREATE src/messages/messages.controller.spec.ts (506 bytes)
CREATE src/messages/messages.controller.ts (105 bytes)
UPDATE src/messages/messages.module.ts (181 bytes)
```

```js
// messages.module.ts
import { Module } from '@nestjs/common'
import { MessagesController } from './messages.controller'

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
```

Controller が自動で追加されている。

## コマンド分解

| nest generate |        controller         |                         messages/messages                         |                      --flat                       |
| :-----------: | :-----------------------: | :---------------------------------------------------------------: | :-----------------------------------------------: |
|               | Type of class to generate | Place the file in the messages folder / Call the class "messages" | Don`t create an extra folder called "controllers" |

--flat をつけると余分なフォルダを作成しない。
細かく分けたい場合には--flat は外す。好み。

# Route

GET localhost:3000/messages/:id -> Controller(リクエストを特定の機能にルーティングします。) -> Service(Business Logic) -> Repository(Access Database)

### .e.g

request
GET /messages -> List All messages
POST /messages -> Create a message
GET /messages/:id -> Get a particular message

Option #1

@Controller()
export class MessagesController {
@Get("/messages")
listMessages()
@Post("/messages")
createMessage()
@Get("/messages/:id")
getMessage()
}

## API Clients

VSCode Rest Client Extension

https://marketplace.visualstudio.com/items?itemName=humao.rest-client

参考
https://qiita.com/kawasukeeee/items/7bc5d948e3029c8a3a23

超便利。

## HTTP Request

Start Line -> POST /messages/5?validate=true HTTP/1.1
`5 -> @Param("id")`
`validate=true -> @Query()`

Headers -> {
Host:localhost:3000
Content-Type:application/json
}
`@Headers()`

Body -> {
"content":"hi there!"
}
`@Body()`

### 実践

```ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common'

@Controller('messages') // ここで既に"/messages"ディレクトリが指定されている
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body: any) {
    console.log(body)
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id)
  }
}
```

#### rest

```http
POST http://localhost:3000/messages
content-type: application/json

{
    "content": "hi,there! I`m REST Client"
}
```

#### console.log

{ content: 'hi,there! I`m REST Client' }

#### rest

```http
GET http://localhost:3000/messages/xxxx
```

#### console.log

xxxx
