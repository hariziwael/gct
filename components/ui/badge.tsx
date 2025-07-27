type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'outline' | 'secondary'
}

export function Badge({ children, variant, ...props }: BadgeProps) {
  let className = props.className || ''
  if (variant === 'outline') className += ' border border-gray-400'
  if (variant === 'secondary') className += ' bg-gray-200'
  return <span {...props} className={className.trim()}>{children}</span>
} 