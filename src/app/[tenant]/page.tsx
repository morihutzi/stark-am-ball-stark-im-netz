import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/hero'
import { CoInitiative } from '@/components/sections/co-initiative'
import { Atmosphere } from '@/components/sections/atmosphere'
import { ForParents } from '@/components/sections/for-parents'
import { Trust } from '@/components/sections/trust'
import { getAllTenantIds, getTenant } from '@/tenants/registry'

type PageProps = {
  params: Promise<{ tenant: string }>
}

export function generateStaticParams() {
  return getAllTenantIds().map((tenant) => ({ tenant }))
}

export default async function TenantPage({ params }: PageProps) {
  const { tenant: tenantId } = await params
  const tenant = getTenant(tenantId)

  if (!tenant) notFound()

  return (
    <>
      <Hero tenant={tenant} />
      <CoInitiative tenant={tenant} />
      <Atmosphere tenant={tenant} />
      <ForParents tenant={tenant} />
      <Trust tenant={tenant} />
    </>
  )
}
