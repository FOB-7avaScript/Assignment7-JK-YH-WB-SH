# Wanted Front-end onBoarding # 7

## Demo Link
🔗 Demo Page :


## 💬 프로젝트 개요
모두 컴퍼니 : To-Do-List 애플리케이션

## 😀 프로젝트 Memebers
|이름|GitHub|담당|
|------|---|---|
|이제경|[jejelee94’](https://github.com/jejelee94)|xx|
|한우빈|[hwb0218](https://github.com/hwb0218)|xx|
|이상훈|[simoniful](https://github.com/simoniful) |xx|
|장윤호|[yunojang](https://github.com/yunojang)|xx|

## 🪄 실행 방법

#### Project setup
`npm install`
#### Compiles and hot-reloads for development
`npm run serve`
#### Compiles and minifies for production
`npm run build`

## 🔧 Skills

- React, React Router, Styled Components, ES6+, TS


## 🐱‍👤 협업 Tool

- Slack, Git-Hub

## 🎬 기능구현 데모


## 👍🏻 구현 기능 상세

완료 기한을 포함한 To-Do 리스트 완성
생성, 삭제 및 완료 상태 전환 기능 구현

### 1. 기본 요구 사항

> - TypeScript 사용 환경 구성 및 기능 구현
> - LocalStorage를 사용해서 리스트 관리
> - ant.design 라이브러리 사용 숙달
> - 버그 수정 및 개선점 도출

> ### 과제 구현 목록
>
> - [x] 베이스 코드 기반 버그 수정
> - [x] ReactJS 기반으로 작성, TypeScript 사용 환경 구성
> - [x] 주어진 모듈과 그 기능만을 사용하며, 주어진 라이브러리 외에 추가로 사용하지 않도록 주의
> - [x] 완성 후 기능 추가, 버그 수정하기
> - [x] 예외 상황 modal 작동
> - [x] Notion 개선사항 및 로그인 관련 작성

### 2. 공통 컴포넌트 와 프로젝트 구조

#### 프로젝트 구조

```html
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📂template
 ┃ ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┃ ┗ 📜TodoCreate.tsx
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┗ 📜TodoFooter.tsx
 ┃ ┃ ┃ ┣ 📂head
 ┃ ┃ ┃ ┃ ┗ 📜TodoHead.tsx
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┣ 📂item
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TodoItem.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TodoList.tsx
 ┃ ┃ ┃ ┗ 📜TodoTemplate.tsx
 ┃ ┃ ┣ 📜TodoContainer.tsx
 ┃ ┃ ┗ 📜TodoService.tsx
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.prettierrc
 ┣ 📜App.tsx
 ┣ 📜index.js
 ┗ 📜react-app-env.d.ts
```

#### 공통 component

> - Loading, Spinner
> - TodoService 내 customHook

### 3. 상세 기능

#### 데이터 순번이 꼬이지 않도록 queue의 자료구조를 기반으로 local storage 관리 로직 구현

> - 리스트 생성, 삭제 시 데이터 Index 업데이트

#### ant.design 라이브러리를 활용하여 날짜 객체 관리 및 모달 구현

> - DatePicker를 이용한 완료 목표일 설정 및 UI 구현
> - 예외 상황(기입 데이터가 없을 시, 리스트 삭제 시) 모달을 띄워 사용자가 확인할 수 있도록 UI 구현

#### 버그 수정

> - 삭제 관련 로직 수정(이전 상태 값 비교 및 필터를 통한 구현과 데이터 업데이트를 통한 충돌 수정)
> - 상태 default 값 수정
> - local storage 관리 로직 구현을 통한 초기 로딩 및 추가/삭제에 대한 버그 수정

## Reference

- 이 프로젝트는 [모두컴퍼니](https://www.moduparking.com/)의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용하고 있는 data는 모두컴퍼니 측에서 제공받았습니다.

---