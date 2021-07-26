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
