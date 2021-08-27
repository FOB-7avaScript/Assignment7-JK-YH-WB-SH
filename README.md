# Wanted Front-end onBoarding # 8

## Demo Link
🔗 Demo Page : https://modoo-company.netlify.app/

## 💬 프로젝트 개요
모두 컴퍼니 : To-Do-List 애플리케이션

## 😀 프로젝트 Memebers
|이름|GitHub|담당|
|------|---|---|
|이제경|[jejelee94](https://github.com/jejelee94)|레이아웃, UI 보완, 배포|
|한우빈|[hwb0218](https://github.com/hwb0218)|Tab UI, Sorting 기능 구현, Status 필터링|
|이상훈|[simoniful](https://github.com/simoniful) |CRUD 기능 구현, Scrum진행, Data 관리 로직|
|장윤호|[yunojang](https://github.com/yunojang)|Drag & Drop 애니메이션 구현|

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

- Slack, Git-Hub, GatherTown, LiveShare

## 🎬 기능구현 데모

![1](https://user-images.githubusercontent.com/75239459/131143446-1e0136d8-fb8d-486a-bd92-3f0519af6508.gif)
![2](https://user-images.githubusercontent.com/75239459/131143470-78189297-c27b-4960-bcb3-fac7facd0da9.gif)
![3](https://user-images.githubusercontent.com/75239459/131143476-9a7ec012-8af7-400b-a531-a51f222e12c4.gif)
![4](https://user-images.githubusercontent.com/75239459/131143484-c4ae283d-b5fe-4c56-bec5-0b7b76bc9580.gif)

## 👍🏻 구현 기능 상세
> - 간단한 투두리스트 애플리케이션에 적합한 UI/UX를 구성할 수 있다.
> - 간단한 투두리스트 애플리케이션에 적합한 데이터 구조를 정의하고 조작할 수 있다.

### 1. 필수 요구 사항
> - 투두리스트에 적합한 기능을 구현하기 위해 데이터를 조작할 수 있다.
> - 적절한 header를 만들고, 스크롤시 Header가 사라지지 않고 화면 상단에 고정되도록 한다.
> - 투두리스트에 적절한 애니메이션을 추가할 수 있다 (Drag and Drop으로 Task의 순서를 변경한다)
> - 필수 기능: Task 목록 조회 / 새로운 Task 추가 / Task 삭제
> - 최소 두가지 이상의 조건으로 Task를 필터링 (ex. 상태, 생성일, 생성자, 중요도)
> - Task의 상태 변경 (ex. 진행중 → 완료)

### 2. 추가 요구 사항

> -  필수 구현 항목에 덧붙여 필요한 **데이터 속성을 추가하여 정의**할 수 있다
> -  최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
> -  최소 요구사항에 덧붙여 추가하고 싶은 UI/UX 및 애니매이션을 추가적으로 구현.
> -  최소 요구사항에 덧붙여 필요한 데이터 속성을 추가하여 정의할 수 있다
> -  최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
> -  최소 요구사항에 덧붙여 추가하고 싶은 투두리스트에 적절한 UI/UX를 추가할 수 있다.

### 3. 과제 구현 목록
> - [x] 투두리스트에 적합한 기능을 구현하기 위해 데이터를 조작
> - [x] 스크롤 시 Header가 사라지지 않고 화면 상단에 고정
> - [x] 필수적으로 추가해야할 기능: Task 목록 조회, 새로운 Task 추가, Task 삭제
> - [x] 투두리스트에 적절한 애니메이션을 추가(Drag and Drop으로 Task의 순서를 변경한다)
> - [x] 최소 두가지 이상의 조건으로 Task를 필터링 (ex. 상태, 생성일, 생성자, 중요도)
> - [x] Task의 상태 변경 (ex. 진행중 → 완료)
> - [x] 버그 수정

## 📚공통 컴포넌트 와 프로젝트 구조

### 1. 프로젝트 구조

```html
📦src
 ┣ 📂components
 ┃ ┣ 📜TodoContainer.tsx
 ┃ ┣ 📜TodoFooter.tsx
 ┃ ┣ 📜TodoHeader.tsx
 ┃ ┣ 📜TodoItem.tsx
 ┃ ┣ 📜TodoList.tsx
 ┃ ┗ 📜types.ts
 ┣ 📂hooks
 ┃ ┗ 📜useTodo.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.ts
 ┣ 📂utils
 ┃ ┣ 📜config.ts
 ┃ ┗ 📜storage.ts
 ┣ 📜.DS_Store
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.prettierrc
 ┣ 📜App.tsx
 ┣ 📜index.js
 ┗ 📜react-app-env.d.ts
```

### 2. 공통 component

> - Header, List, Footer 기반 레이아웃 별 컴포넌트 분리
> - useTodo custom hook 활용

## 상세 기능

### 1. To-Do List App 만들기(UI & Data)
> - 적절한 header를 만들고, widget으로 기능하도록 UI  구현
> - 보여주고자 하는 List의 상태에 따른 데이터 구성
  ```jsx
  {
   reatedAt: "2021-08-27"
   dueDate: "2021-08-27"
   id: 0
   isImportant: false
   status: 0
   taskName: "가"
   updatedAt: "2021-08-27"
  }
  ```
> - Task 목록 조회, 새로운 Task 추가, Task 삭제 기능 구현
> - Drag and Drop으로 Task의 순서 변경 기능 구현
> - Tab UI를 추가적으로 구현하여 sorting 기능 다원화
> - ToDo 리스트의 상태값 변경(ToDo, Doing, Done, Important)과 변경 시 updatedAt 항목 변화

### 2. 버그 수정
> - 새로고침 시 데이터 유지, tab 기능 동작 시 적절한 데이터 분리
> - Drag & Drop 이벤트에서 조건 분리를 통한 이벤트 Throttling


## Reference

- 이 프로젝트는 [모두컴퍼니](https://www.moduparking.com/)의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용하고 있는 data는 모두컴퍼니 측에서 제공받았습니다.

---
