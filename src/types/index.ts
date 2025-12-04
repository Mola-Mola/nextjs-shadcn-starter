// 공통 타입 정의

// API 응답 타입
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

// 페이지네이션 타입
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// 에러 타입
export interface ApiError {
  message: string
  code?: string
  status?: number
}

// 공통 Props 타입
export interface ChildrenProps {
  children: React.ReactNode
}

export interface ClassNameProps {
  className?: string
}

export interface BaseComponentProps extends ChildrenProps, ClassNameProps {}
