import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

export type ActiveLinkProps = LinkProps & {
  children: ReactElement
  exactMatch?: boolean
}

export function ActiveLink({ children, exactMatch = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  
  const startWithHref = asPath.startsWith(String(rest.href))
  const startWithAs = asPath.startsWith(String(rest.as))

  let isActive = false

  if (exactMatch && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!exactMatch && (startWithHref || startWithAs)) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
