import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getTenant } from '@/tenants/registry'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ tenant: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}): Promise<Metadata> {
  const { tenant: tenantId } = await params
  const tenant = getTenant(tenantId)
  if (!tenant) return {}

  return {
    title: tenant.meta.title,
    description: tenant.meta.description,
    openGraph: {
      title: tenant.meta.title,
      description: tenant.meta.description,
      type: 'website',
      locale: 'de_DE',
    },
  }
}

export default async function TenantLayout({ children, params }: LayoutProps) {
  const { tenant: tenantId } = await params
  const tenant = getTenant(tenantId)

  if (!tenant) notFound()

  return (
    <>
      <Header tenant={tenant} />
      <main>{children}</main>
      <Footer tenant={tenant} />
    </>
  )
}
