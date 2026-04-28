import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind 클래스 합성 헬퍼.
 *
 * - `clsx` 로 truthy 값만 통과
 * - `tailwind-merge` 로 충돌하는 utility (예: `px-2` + `px-4`) 중 뒤의 것만 유지
 *
 * 컴포넌트 className prop 병합 시 표준 사용:
 *   <button className={cn('px-4 py-2', className)} />
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
