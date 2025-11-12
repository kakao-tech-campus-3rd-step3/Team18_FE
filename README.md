# 전남대 동아리 통합 플랫폼

> 전남대학교 학부생을 위한 **동아리 통합 플랫폼**  
> 흩어진 동아리 정보를 한 곳에서 확인하고, 지원과 관리를 간편하게 할 수 있는 서비스입니다.

## 프로젝트 소개

기존에는 동아리 정보가 파편화되어 있어 지원자는 필요한 정보를 모으기 어렵고,  
동아리 회장은 지원자 관리와 모집 공지를 체계적으로 하기 어려웠습니다.

이 플랫폼은 **지원자 · 동아리원 · 동아리 회장** 각각의 불편함을 해결하는 것을 목표로 합니다.

- **지원자**는 한눈에 동아리를 탐색하고, 모집 일정 캘린더와 후기를 참고하여 지원할 수 있습니다.
- **동아리원**은 활동 후기를 작성·공유할 수 있습니다.
- **동아리 회장**은 공지사항 게시, 지원자 명단 관리, 합불 결과 전송 등 **모집·관리 업무를 간소화**할 수 있습니다.

---

## 기술 스택

#### 기술 스택 (Tech Stack)

<p align="left"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /> </p>

#### 스타일링 (Styling)

<p align="left"> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white" alt="Emotion" /> <img src="https://img.shields.io/badge/reset--css-000000?style=for-the-badge&logo=csswizardry&logoColor=white" alt="reset-css" /> </p>

#### 상태 관리 및 데이터 통신 (State & Data Fetching)

<p align="left"> <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query" /> <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" /> </p>

#### 코드 품질 및 워크플로우 (Code Quality & Workflow)

<p align="left"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" /> <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" /> <img src="https://img.shields.io/badge/Husky-E34F26?style=for-the-badge&logo=husky&logoColor=white" alt="Husky" /> </p>


# 📌 Feature List

## 📌 주요 기능 (Feature List)

- **메인 UI**: 동아리 목록, 배너, 분류 및 검색 기능
- **공지사항**: 목록 확인, 세부 페이지
- **동아리 페이지**: 상세 정보, 활동 후기 작성/열람, 동아리 지원
- **동아리 회장 기능**: 로그인/로그아웃 (카카오 OAuth), 대시보드, 합불 결과 전송, 지원서 열람, 지원 폼 및 동아리 상세 정보 수정

> 상세 내용: [Feature List](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Feature-List)

## 📌 공통 UI 컴포넌트

- **Button**: 활성/비활성 상태, 다양한 사이즈 및 스타일
- **Dropdown**: 선택 리스트, 클릭/호버 동작, 커스텀 스타일
- **Form**: InputField, TextAreaField 등 폼 UI
- **Navigation**: 메뉴, 로고, 로그인/로그아웃
- **Footer**: 사이트 정보 및 연락 이메일 표시
- **SectionTitle / Text / EmptyState / LoadingSpinner**: UI 일관성 유지

> 상세 내용: [Architecture](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Architecture)

---

## 📌 Git & 버전 관리, 커밋, PR

- Git 브랜치 전략, 커밋 메시지 컨벤션, Pull Request(PR) 규칙 등 협업 관련 내용
- 상세 내용: [Development Rules](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Development-Rules)

---

## 📌 코드 스타일 및 품질

- Prettier, ESLint, TypeScript 활용 방식
- 명명 규칙 및 타입 관리
- 상세 내용: [Development Rules](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Development-Rules)

---

## 📌 아키텍처 및 폴더 구조

- 페이지 기반 폴더 구조
- 공통 컴포넌트, hooks, providers 구조
- 상세 내용: [Architecture](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Architecture)

---

## 📌 라우트 구조

- 관리자(Admin) 및 공통(Common) 페이지 URL 구조
- 각 페이지별 역할과 라우팅 관계
- 상세 내용: [Routes](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Routes)

---

## 📌 컴포넌트 설계 원칙

- 단일 책임 원칙(SRP)
- 관심사 분리 (비즈니스/도메인/UI 로직 분리)
- 상세 내용: [Architecture](https://github.com/kakao-tech-campus-3rd-step3/Team18_FE/wiki/Architecture)

---

## 📌 실행 방법

**Repository 클론**

```bash
git clone https://github.com/kakao-tech-campus-3rd-step3/Team18_FE.git
cd Team18_FE
```

**의존성 설치**
```bash
npm install
```

**환경 변수 설정**
프로젝트 루트에 .env 파일 생성 후 아래 내용을 작성합니다.
VITE_KAKAO_REST_API_KEY는 개인적으로 발급받아 설정해야 합니다.

```bash
VITE_API_BASE_URL=https://dongarium.co.kr/api
VITE_KAKAO_REST_API_KEY=...
VITE_KAKAO_REDIRECT_URI=https://dongarium.co.kr/login/redirect
VITE_LOGOUT_REDIRECT_URI=https://dongarium.co.kr/api/auth/kakao/logout
```

**개발 서버 실행**
```bash
npm run dev
```
---
---

## 👥 팀소개
**전남대학교 Team18_FE - 동아리 통합 플랫폼 「동아리움 (dongari-um)」**  
> Kakao Tech Campus 3기 | 프론트엔드 개발팀  


| [![kanghaeun](https://avatars.githubusercontent.com/u/145974230?v=4)](https://github.com/kanghaeun) | [![ganimjeong](https://avatars.githubusercontent.com/u/86656605?v=4)](https://github.com/ganimjeong) | [![aaaaaattt](https://avatars.githubusercontent.com/u/115975877?v=4)](https://github.com/aaaaaattt) |
|:--:|:--:|:--:|
| [@kanghaeun](https://github.com/kanghaeun) | [@ganimjeong](https://github.com/ganimjeong) | [@aaaaaattt](https://github.com/aaaaaattt) |
| 플래너 | 메이커 | FE 테크리더 |



