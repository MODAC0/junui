import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button.js';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>저장</Button>);
    expect(screen.getByRole('button', { name: '저장' })).toBeInTheDocument();
  });

  it('defaults to type="button"', () => {
    render(<Button>제출</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('fires onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>저장</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        저장
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies variant + size classes', () => {
    render(
      <Button variant="destructive" size="lg">
        삭제
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/bg-\(--junui-danger\)/);
    expect(btn.className).toMatch(/h-12/);
  });

  it('merges user className without dropping variant classes', () => {
    render(<Button className="extra-class">테스트</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('extra-class');
    expect(btn.className).toMatch(/bg-\(--junui-accent\)/);
  });
});
