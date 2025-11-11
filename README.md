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

- **React 19**, **TypeScript 5**, **Vite 7**
- **Emotion**: CSS-in-JS 스타일링
- **React Query**: 서버 상태 관리
- **React Hook Form**: 폼 상태 관리
- **Axios**: HTTP 통신
- **reset-css**: 스타일 초기화
- **ESLint**, **Prettier**, **TypeScript**: 코드 품질 및 빌드 도구
- **jest/vitest** : (테스트)
- **husky/lint-staged** : (커밋 훅)

# 📌 Feature List

### 메인 UI

- 동아리 목록 확인 가능
- 배너 표시
- 분류 및 검색 기능 지원

#### 웹 메인

<img width="600" height="550" alt="웹 메인" src="https://github.com/user-attachments/assets/3b14fb2c-2b70-4744-870c-8cb2f0ebae67" />

### 공지사항

#### 공지사항 목록

<img width="600" height="451" alt="image" src="https://github.com/user-attachments/assets/14026815-031e-4ff6-bd80-47ab7d765ff6" />

#### 공지사항 세부 페이지

<img width="600" height="325" alt="image" src="https://github.com/user-attachments/assets/17021e90-5258-4b9a-9529-ef004d0478a3" />

### 동아리 페이지

#### 동아리 상세 페이지 (후기 제외)

<img width="600" height="767" alt="image" src="https://github.com/user-attachments/assets/7133f5fd-caa6-40d6-b611-3c530bf14eed" />

#### 활동 후기 작성 / 열람

<img width="600" height="681" alt="image" src="https://github.com/user-attachments/assets/3753254d-e0ed-42f0-b2da-f613a35b685c" />

#### 동아리 지원 페이지

<img width="600" height="1158" alt="image" src="https://github.com/user-attachments/assets/9a87fddc-aa09-4021-98c9-5d02e0e21c78" />

# 동아리 회장 기능

#### 로그인 / 로그아웃 (카카오 OAuth 기반 인증)

#### 대시보드 (지원자 관리, 합불 결과 체크 / 필터링)

#### 합불 결과 전송 기능

<img width="600" height="419" alt="image" src="https://github.com/user-attachments/assets/45ae673c-7376-4b01-98b2-265afe1d93d4" />

#### 지원자 지원서 열람

<img width="600" height="353" alt="image" src="https://github.com/user-attachments/assets/c94133db-7fe0-459f-bb36-3b42b8cf4e99" />

#### 지원 폼 수정 기능 (모듈 추가 / 조합)

<img width="600" height="1160" alt="image" src="https://github.com/user-attachments/assets/7b10529c-4c8d-48cb-b693-09ee1f85f3ab" />

#### 동아리 상세 페이지 수정 (사진, 텍스트, 필수 정보)

<img width="600" height="300" alt="image" src="https://github.com/user-attachments/assets/cdc3e30a-ad6b-43a5-a8d4-b5d3bea9679e" />
<img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/9cd3465b-a263-491e-9f62-ae488d0d512d" />

# 공통 UI 컴포넌트

**Button** : 활성/비활성 버튼

- 클릭 상태, 비활성 상태, 다양한 사이즈 및 스타일 지원

**Dropdown** : 드롭다운 메뉴

- 선택 리스트, 클릭/호버 동작, 커스텀 스타일 지원

**Footer** : 하단 Footer 컴포넌트

사이트 정보, 연락받을 이메일 표시

**Form** : 폼 관련 컴포넌트 모음

- InputField, TextAreaField 등 폼 필드 UI 제공

**Navigation**: 상단 네비게이션 바

- 메뉴, 로고, 로그인/로그아웃 포함

**SectionTitle** : 제목 텍스트

- 섹션 헤더, 스타일 일관성 유지

**Text** : 일반 텍스트 컴포넌트

- 폰트, 색상, 강조 스타일 지원

**EmptyState.tsx** : 빈 상태 표시

- 데이터가 없을 때 UI 안내용 컴포넌트

**LoadingSpinner.tsx** : 로딩 표시

- API 호출 시 로딩 스피너 표시용 컴포넌트

# 디자인 / 개발 환경

- 디자인 토큰 (색상, 폰트 크기)
- MSW(Mock Service Worker)
- Suspense / ErrorBoundary 적용 예정
- API 연동 구조
- 테스트 환경 구축

---

# 개발 규칙

이 문서는 원활한 협업을 위해 우리 팀이 함께 지키는 개발 규칙을 정의합니다.

## 1. Git & 버전 관리

코드 충돌을 방지하고 작업 내역을 명확하게 관리

### **Branch 전략**

- `main`: **배포용** 브랜치. 오직 `develop` 브랜치만 병합(Merge)합니다.
- `develop`: **개발 중심** 브랜치. 모든 기능은 이 브랜치를 기준으로 작업합니다.
- `feature/{기능이름}`: **기능 개발** 브랜치. (예: `feature/login`, `feature/calendar`)

### **커밋 메시지 규칙**

- **형식**: `타입: 제목`
- **주요 타입**:
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `refactor`: 코드 리팩토링
  - `style`: 코드 스타일 수정 (포맷팅 등)
  - `docs`: 문서 수정
  - `test`: 테스트 코드 관련
  - `chore`: 빌드, 패키지 매니저 설정 등

### **Pull Request (PR) & 리뷰**

- 모든 코드는 `feature` 브랜치에서 `develop` 브랜치로 **Pull Request**를 통해 병합합니다.
- PR 생성 시 **템플릿**에 맞춰 작업 내용을 간결하게 작성합니다.
- `develop` → `main`으로의 병합은 **멘토 리뷰** 후 진행합니다.

## 2. 코드 스타일 및 품질

모든 코드는 일관된 스타일과 품질을 유지합니다.

- **포맷팅 (Prettier)**: 저장 시 **자동으로 코드가 정렬**되도록 설정합니다.
- **린팅 (ESLint)**: `npm run lint`를 통해 잠재적인 오류를 수시로 확인합니다.
- **타입스크립트 (TypeScript)**: `any` 타입 사용을 최대한 지양하고, 공통 타입은 `src/types` 폴더에서 관리합니다.
- **명명 규칙**: 코드의 역할을 명확히 하기 위해 아래 규칙을 따릅니다.
  | 구분 | 형식 | 예시 |
  | -------------------- | ------------------ | ---------------------------- |
  | **컴포넌트** | `PascalCase` | `ProductDetail.tsx` |
  | **파일/폴더 (일반)** | `kebab-case` | `user-info-provider.ts` |
  | **파일 (훅)** | `camelCase` | `useAuth.ts` |
  | **변수, 함수** | `camelCase` | `const itemCount = 5;` |
  | **상수** | `UPPER_SNAKE_CASE` | `const API_KEY = '...';` |
  | **타입, 인터페이스** | `PascalCase` | `interface UserInfo { ... }` |

## 3. 아키텍처

컴포넌트와 폴더를 구조화하는 규칙입니다.

### **폴더 구조 (페이지 기반)**

```
src
├── api                → 서버 통신 모듈(Axios 기반), 인증/초기화 로직 포함
├── App.tsx            → 루트 컴포넌트, 라우터 연결
├── constants          → 프로젝트 전역 상수 정의 (카테고리, 라우터 경로 등)
├── index.css           → 글로벌 스타일 (reset-css 등)
├── main.tsx           → 앱 진입점, React DOM 렌더링
├── mocks              → Mock API 및 테스트용 데이터
│   ├── client.ts
│   ├── handler        → API별 핸들러
│   └── repositories   → 데이터 리포지토리
├── pages              → 화면 단위 컴포넌트 (라우팅 기준)
│   ├── admin          → 관리자 페이지
│   └── user           → 일반 사용자 페이지
├── providers          → Context/Provider 및 Guard 컴포넌트
├── shared             → 재사용 컴포넌트, 상수, auth 토큰 등
│   └── components
├── styles             → Emotion 기반 스타일, 테마, 디자인 토큰
├── types              → TypeScript 타입 정의
├── utils              → 유틸리티 함수 모음
├── setupTests.ts      → 테스트 환경 설정
└── vite-env.d.ts      → Vite 환경 타입 정의
```

## 3-1. 라우트 경로

각 페이지별 라우트 경로를 정리합니다.

### 관리자(Admin)

| 이름                     | 경로                                  | 설명               |
| ------------------------ | ------------------------------------- | ------------------ |
| DASHBOARD                | clubs/:clubId/dashboard               | 관리자 대시보드    |
| APPLICATION_DETAIL       | clubs/:clubId/applicants/:applicantId | 지원서 상세        |
| CLUB_EDIT                | clubs/:clubId/edit                    | 동아리 수정 페이지 |
| APPLICATION_FORM_BUILDER | clubs/:clubId/application/form/create | 신청 폼 생성       |

### 공통(Common)

| 이름          | 경로                | 설명                    |
| ------------- | ------------------- | ----------------------- |
| MAIN          | /                   | 메인 페이지             |
| APPLICATION   | clubs/:clubId/apply | 특정 동아리 신청 페이지 |
| CLUB_DETAIL   | clubs/:clubId       | 동아리 상세 페이지      |
| LOGIN         | login               | 로그인 페이지           |
| CALLBACK      | login/redirect      | 로그인 콜백             |
| SIGNUP        | signup              | 회원가입 페이지         |
| NOTICE_LIST   | notices             | 공지사항 목록           |
| NOTICE_DETAIL | notices/:noticeId   | 공지사항 상세           |

### **컴포넌트 설계 원칙**

- **단일 책임 원칙**: 컴포넌트 하나는 하나의 기능만 책임지도록 작게 분리합니다.
- **관심사 분리**:
  - **`pages`**: 화면 단위 컴포넌트와 라우트 연결만 담당. 비즈니스/도메인 로직이나 UI 세부 구현은 포함하지 않음.
  - **`components`**: 반복되는 로직, 상태 관리, API 연동 등 재사용 가능한 로직 분리
  - **`hooks`**: 반복되는 로직은 커스텀 훅으로 분리.

---
