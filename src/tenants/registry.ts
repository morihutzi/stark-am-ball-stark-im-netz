import type { TenantConfig } from './types'
import { dorfnerConfig } from './dorfner/config'

/**
 * Subdomain-ID → TenantConfig.
 * Neue Vereine als zusätzlichen Eintrag aufnehmen, sonst nichts.
 */
const tenants: Record<string, TenantConfig> = {
  [dorfnerConfig.id]: dorfnerConfig,
}

export function getTenant(id: string): TenantConfig | null {
  return tenants[id] ?? null
}

export function getAllTenantIds(): string[] {
  return Object.keys(tenants)
}
